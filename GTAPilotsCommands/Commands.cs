using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using GrandTheftMultiplayer.Server;
using GrandTheftMultiplayer.Server.API;
using GrandTheftMultiplayer.Server.Managers;
using GrandTheftMultiplayer.Server.Elements;
using GrandTheftMultiplayer.Server.Constant;
using GrandTheftMultiplayer.Shared;
using GrandTheftMultiplayer.Shared.Math;
using System.Threading.Tasks;

namespace GTAPilots
{
    public class GTAPilotsCommands : Script
    {

        private Dictionary<Client, NetHandle> cars = new Dictionary<Client, NetHandle>();
        private Dictionary<Client, NetHandle> shields = new Dictionary<Client, NetHandle>();
        private Dictionary<Client, NetHandle> labels = new Dictionary<Client, NetHandle>();
        public Dictionary<Client, List<NetHandle>> VehicleHistory = new Dictionary<Client, List<NetHandle>>();
        public Dictionary<string, string> AnimationList = new Dictionary<string, string>
    {
        {"finger", "mp_player_intfinger mp_player_int_finger"},
        {"guitar", "anim@mp_player_intcelebrationmale@air_guitar air_guitar"},
        {"shagging", "anim@mp_player_intcelebrationmale@air_shagging air_shagging"},
        {"synth", "anim@mp_player_intcelebrationmale@air_synth air_synth"},
        {"kiss", "anim@mp_player_intcelebrationmale@blow_kiss blow_kiss"},
        {"bro", "anim@mp_player_intcelebrationmale@bro_love bro_love"},
        {"chicken", "anim@mp_player_intcelebrationmale@chicken_taunt chicken_taunt"},
        {"chin", "anim@mp_player_intcelebrationmale@chin_brush chin_brush"},
        {"dj", "anim@mp_player_intcelebrationmale@dj dj"},
        {"dock", "anim@mp_player_intcelebrationmale@dock dock"},
        {"facepalm", "anim@mp_player_intcelebrationmale@face_palm face_palm"},
        {"fingerkiss", "anim@mp_player_intcelebrationmale@finger_kiss finger_kiss"},
        {"freakout", "anim@mp_player_intcelebrationmale@freakout freakout"},
        {"jazzhands", "anim@mp_player_intcelebrationmale@jazz_hands jazz_hands"},
        {"knuckle", "anim@mp_player_intcelebrationmale@knuckle_crunch knuckle_crunch"},
        {"nose", "anim@mp_player_intcelebrationmale@nose_pick nose_pick"},
        {"no", "anim@mp_player_intcelebrationmale@no_way no_way"},
        {"peace", "anim@mp_player_intcelebrationmale@peace peace"},
        {"photo", "anim@mp_player_intcelebrationmale@photography photography"},
        {"rock", "anim@mp_player_intcelebrationmale@rock rock"},
        {"salute", "anim@mp_player_intcelebrationmale@salute salute"},
        {"shush", "anim@mp_player_intcelebrationmale@shush shush"},
        {"slowclap", "anim@mp_player_intcelebrationmale@slow_clap slow_clap"},
        {"surrender", "anim@mp_player_intcelebrationmale@surrender surrender"},
        {"thumbs", "anim@mp_player_intcelebrationmale@thumbs_up thumbs_up"},
        {"taunt", "anim@mp_player_intcelebrationmale@thumb_on_ears thumb_on_ears"},
        {"vsign", "anim@mp_player_intcelebrationmale@v_sign v_sign"},
        {"wank", "anim@mp_player_intcelebrationmale@wank wank"},
        {"wave", "anim@mp_player_intcelebrationmale@wave wave"},
        {"loco", "anim@mp_player_intcelebrationmale@you_loco you_loco"},
        {"handsup", "missminuteman_1ig_2 handsup_base"},
    };

        [Flags]
        public enum AnimationFlags
        {
            Loop = 1 << 0,
            StopOnLastFrame = 1 << 1,
            OnlyAnimateUpperBody = 1 << 4,
            AllowPlayerControl = 1 << 5,
            Cancellable = 1 << 7
        }

        public GTAPilotsCommands()
        {
            API.onResourceStart += OnResourceStart;
            API.onPlayerFinishedDownload += OnPlayerDownload;
            API.onClientEventTrigger += OnClientEventTrigger;
            API.onPlayerDeath += OnPlayerDeath;
        }

        public void OnResourceStart()
        {
            ColShape elevatorBottom = API.createSphereColShape(new Vector3(-2361.174, 3249.038, 32.81074), 3f);
            ColShape elevatorTop = API.createSphereColShape(new Vector3(-2361.015, 3248.824, 92.90366), 3f);
            //API.onEntityEnterColShape += OnEntityEnterColShape;
            //API.onEntityExitColShape += OnEntityExitColShape;

            elevatorBottom.onEntityEnterColShape += ElevatorBottomEntered;
            elevatorTop.onEntityEnterColShape += ElevatorTopEntered;

            elevatorBottom.onEntityExitColShape += ElevatorBottomExited;
            elevatorTop.onEntityExitColShape += ElevatorTopExited;
        }

        public void OnPlayerDownload(Client Player)
        {
            API.setEntityData(Player, "Seatbelt", false);
        }

        public void OnClientEventTrigger(Client sender, string eventName, params object[] arguments)
        {
            if (eventName == "SaluteStart")
            {
                API.playPlayerAnimation(sender, (int)(AnimationFlags.AllowPlayerControl | AnimationFlags.OnlyAnimateUpperBody), "anim@mp_player_intuppersalute", "enter");
                API.playPlayerAnimation(sender, (int)(AnimationFlags.AllowPlayerControl | AnimationFlags.OnlyAnimateUpperBody | AnimationFlags.Loop), "anim@mp_player_intuppersalute", "idle_a");

                //API.delay(380, true, () =>
                //{
                //    API.playPlayerAnimation(sender, (int)(AnimationFlags.AllowPlayerControl | AnimationFlags.OnlyAnimateUpperBody | AnimationFlags.Loop), "anim@mp_player_intuppersalute", "idle_a");
                //});
            }
            else if (eventName == "SaluteStop")
            {
                API.stopPlayerAnimation(sender);
            }
            else if (eventName == "LeftIndicator")
            {
                NetHandle Veh = API.getPlayerVehicle(sender);
                API.sendNativeToPlayer(sender, Hash.SET_VEHICLE_INDICATOR_LIGHTS, Veh, 1, true);
            }
            else if (eventName == "RightIndicator")
            {
                NetHandle Veh = API.getPlayerVehicle(sender);
                API.sendNativeToPlayer(sender, Hash.SET_VEHICLE_INDICATOR_LIGHTS, Veh, 0, true);
            }
        }

        private void OnPlayerDeath(Client player, NetHandle entityKiller, int weapon)
        {
            bool anyData = API.hasEntityData(player, "DoorLocked");

            if (anyData == true)
            {
                bool Locked = API.getEntityData(player, "DoorLocked");

                if (Locked == true)
                {
                    API.triggerClientEvent(player, "Unlock");
                    API.setEntityData(player, "DoorLocked", false);
                }
            }
        }

        public void ElevatorBottomEntered(ColShape shape, NetHandle entity)
        {
            Client player = API.getEntityFromHandle<Client>(entity);

            if (player == null)
            {
                return;
            }
            API.triggerClientEvent(player, "insideElevatorBottom");
        }

        public void ElevatorTopEntered(ColShape shape, NetHandle entity)
        {
            Client player = API.getEntityFromHandle<Client>(entity);

            if (player == null)
            {
                return;
            }
            API.triggerClientEvent(player, "insideElevatorTop");
        }

        public void ElevatorBottomExited(ColShape shape, NetHandle entity)
        {
            Client player = API.getEntityFromHandle<Client>(entity);

            if (player == null)
            {
                return;
            }
            API.triggerClientEvent(player, "exit");
        }

        public void ElevatorTopExited(ColShape shape, NetHandle entity)
        {
            Client player = API.getEntityFromHandle<Client>(entity);

            if (player == null)
            {
                return;
            }
            API.triggerClientEvent(player, "exit");
        }

        public static NetHandle GetClosestVehicle(Client sender, float distance)
        {
            NetHandle handleReturned = new NetHandle();
            foreach (var veh in API.shared.getAllVehicles())
            {
                Vector3 vehPos = API.shared.getEntityPosition(veh);
                float distanceVehicleToPlayer = sender.position.DistanceTo(vehPos);
                if (distanceVehicleToPlayer < distance)
                {
                    distance = distanceVehicleToPlayer;
                    handleReturned = veh;

                }
            }
            return handleReturned;
        }

        [Command("eo", Alias = "Open", GreedyArg = true)]
        public void OpenDoors(Client player, string number)
        {
            var Vehicle = API.getPlayerVehicle(player);

            if (number == "1")
            {
                API.setVehicleDoorState(Vehicle, 0, true);
                API.sendChatMessageToPlayer(player, "Driver Front Door Opened");
            }

            else if (number == "2")
            {
                API.setVehicleDoorState(Vehicle, 1, true);
                API.sendChatMessageToPlayer(player, "Passenger Front Door Opened");
            }
            else if (number == "3")
            {
                API.setVehicleDoorState(Vehicle, 2, true);
                API.sendChatMessageToPlayer(player, "Driver Rear Door Opened");
            }
            else if (number == "4")
            {
                API.setVehicleDoorState(Vehicle, 3, true);
                API.sendChatMessageToPlayer(player, "Passenger Rear Door Opened");
            }
            else if (number == "5")
            {
                API.setVehicleDoorState(Vehicle, 4, true);
                API.sendChatMessageToPlayer(player, "Hood Opened");
            }
            else if (number == "6")
            {
                API.setVehicleDoorState(Vehicle, 5, true);
                API.sendChatMessageToPlayer(player, "Trunk Opened");
            }
        }

        [Command("ec", Alias = "Close", GreedyArg = true)]
        public void CloseDoors(Client player, string number)
        {
            var Vehicle = API.getPlayerVehicle(player);

            if (number == "1")
            {
                API.setVehicleDoorState(Vehicle, 0, false);
                API.sendChatMessageToPlayer(player, "Driver Front Door Closed");
            }

            else if (number == "2")
            {
                API.setVehicleDoorState(Vehicle, 1, false);
                API.sendChatMessageToPlayer(player, "Passenger Front Door Closed");
            }
            else if (number == "3")
            {
                API.setVehicleDoorState(Vehicle, 2, false);
                API.sendChatMessageToPlayer(player, "Driver Rear Door Closed");
            }
            else if (number == "4")
            {
                API.setVehicleDoorState(Vehicle, 3, false);
                API.sendChatMessageToPlayer(player, "Passenger Rear Door Closed");
            }
            else if (number == "5")
            {
                API.setVehicleDoorState(Vehicle, 4, false);
                API.sendChatMessageToPlayer(player, "Hood Closed");
            }
            else if (number == "6")
            {
                API.setVehicleDoorState(Vehicle, 5, false);
                API.sendChatMessageToPlayer(player, "Trunk Closed");
            }
        }

        [Command("engine", Alias = "Engine")]
        public void Engineoff(Client sender)
        {
            var inVehicle = API.isPlayerInAnyVehicle(sender);
            var Vehicle = API.getPlayerVehicle(sender);
            var VehicleEngine = API.getVehicleEngineStatus(Vehicle);


            if (inVehicle == true)

                if (VehicleEngine == false)
                {
                    API.sendChatMessageToPlayer(sender, "Engine turned on!");
                    API.setVehicleEngineStatus(Vehicle, true);
                    return;
                }

                else if (VehicleEngine == true)
                {
                    API.sendChatMessageToPlayer(sender, "Engine turned off!");
                    API.setVehicleEngineStatus(Vehicle, false);
                    return;
                }
                else

                    API.sendChatMessageToPlayer(sender, "No Vehicle Detected");
            return;
        }

        [Command("detach", ACLRequired = true)]
        public void Detachtest(Client sender)
        {
            if (cars.ContainsKey(sender))
            {
                API.deleteEntity(cars[sender]);
                cars.Remove(sender);
            }

            if (labels.ContainsKey(sender))
            {
                API.deleteEntity(labels[sender]);
                labels.Remove(sender);
            }

            if (shields.ContainsKey(sender))
            {
                API.deleteEntity(shields[sender]);
                shields.Remove(sender);
            }
        }

        [Command("attachveh", ACLRequired = true)]
        public void Attachtest2(Client sender, VehicleHash veh)
        {
            if (cars.ContainsKey(sender))
            {
                API.deleteEntity(cars[sender]);
                cars.Remove(sender);
            }

            var prop = API.createVehicle(veh, API.getEntityPosition(sender.handle), new Vector3(), 0, 0);
            API.attachEntityToEntity(prop, sender.handle, null,
                        new Vector3(), new Vector3());

            cars.Add(sender, prop);
        }

        [Command("anim", "~y~USAGE: ~w~/anim [animation]\n" +
                 "~y~USAGE: ~w~/anim help for animation list.\n" +
                 "~y~USAGE: ~w~/anim stop to stop current animation.")]
        public void SetPlayerAnim(Client sender, string animation)
        {
            if (animation == "help")
            {
                string helpText = AnimationList.Aggregate(new StringBuilder(),
                                (sb, kvp) => sb.Append(kvp.Key + " "), sb => sb.ToString());
                API.sendChatMessageToPlayer(sender, "~b~Available animations:");
                var split = helpText.Split();
                for (int i = 0; i < split.Length; i += 5)
                {
                    string output = "";
                    if (split.Length > i)
                        output += split[i] + " ";
                    if (split.Length > i + 1)
                        output += split[i + 1] + " ";
                    if (split.Length > i + 2)
                        output += split[i + 2] + " ";
                    if (split.Length > i + 3)
                        output += split[i + 3] + " ";
                    if (split.Length > i + 4)
                        output += split[i + 4] + " ";
                    if (!string.IsNullOrWhiteSpace(output))
                        API.sendChatMessageToPlayer(sender, "~b~>> ~w~" + output);
                }
            }
            else if (animation == "stop")
            {
                API.stopPlayerAnimation(sender);
            }
            else if (!AnimationList.ContainsKey(animation))
            {
                API.sendChatMessageToPlayer(sender, "~r~ERROR: ~w~Animation not found!");
            }
            else
            {
                var flag = 0;
                if (animation == "handsup") flag = 1;

                API.playPlayerAnimation(sender, flag, AnimationList[animation].Split()[0], AnimationList[animation].Split()[1]);
            }

        }

        [Command("countdown", ACLRequired = true)]
        public void StartGlobalCountdownCommand(Client sender)
        {
            API.triggerClientEventForAll("startCountdown");
        }

        [Command("me", GreedyArg = true)]
        public void MeCommand(Client sender, string text)
        {
            API.sendChatMessageToAll("~#C2A2DA~", sender.name + " " + text);
        }

        [Command("sit")]
        public void Sit(Client player)
        {
            API.playPlayerAnimation(player, (int)(AnimationFlags.Cancellable | AnimationFlags.Loop), "amb@code_human_in_bus_passenger_idles@male@sit@base", "base");
        }

        [Command("stand")]
        public void Stand(Client player)
        {
            API.stopPlayerAnimation(player);
        }

        [Command("help", Alias = "commands")]
        public void HelpCommand(Client player)
        {
            API.sendChatMessageToPlayer(player, "~y~List of Commands:");
            API.sendChatMessageToPlayer(player, "~r~/rules");
            API.sendChatMessageToPlayer(player, "~g~/spawn");
            API.sendChatMessageToPlayer(player, "~g~/me ~w~[message]");
            //API.sendChatMessageToPlayer(player, "/ADF [Beacon ID]");
            API.sendChatMessageToPlayer(player, "~g~/DME ~w~[Beacon ID]");
            API.sendChatMessageToPlayer(player, "~g~/seat ~w~[Seat Number]");
            API.sendChatMessageToPlayer(player, "~g~/engine");
            API.sendChatMessageToPlayer(player, "~g~/para");
            API.sendChatMessageToPlayer(player, "~b~/metar");
            API.sendChatMessageToPlayer(player, "~c~/radio");
        }

        [Command("seat", "Usage: /seat [Seat Numer]", GreedyArg = true)]
        public void SeatInVehicle(Client sender, string seatnumber)
        {
            bool inVeh = API.isPlayerInAnyVehicle(sender);

            if (inVeh == true)
            {
                bool anyData = API.hasEntityData(sender, "Seatbelt");

                if (anyData == true)
                {
                    bool Seatbelt = API.getEntityData(sender, "Seatbelt");

                    NetHandle Vehicle = API.getPlayerVehicle(sender);
                    Client[] Occupants = API.getVehicleOccupants(Vehicle);

                    if (Seatbelt == true)
                    {
                        API.sendChatMessageToPlayer(sender, "You can not move while you are seatbelted.");
                    }
                    else if (Seatbelt == false)
                    {
                        foreach (var player in Occupants)
                        {
                            var seat = API.getPlayerVehicleSeat(player);

                            if (seatnumber == "1")
                            {
                                if (seat != -1)
                                {
                                    API.setPlayerIntoVehicle(sender, Vehicle, -1);
                                }
                                else
                                {
                                    API.sendChatMessageToPlayer(sender, "Seat Occupied! Please choose another");
                                }
                            }
                            else if (seatnumber == "2")
                            {
                                if (seat != 0)
                                {
                                    API.setPlayerIntoVehicle(sender, Vehicle, 0);
                                }
                                else
                                {
                                    API.sendChatMessageToPlayer(sender, "Seat Occupied! Please choose another");
                                }
                            }
                            else if (seatnumber == "3")
                            {
                                if (seat != 1)
                                {
                                    API.setPlayerIntoVehicle(sender, Vehicle, 1);
                                }
                                else
                                {
                                    API.sendChatMessageToPlayer(sender, "Seat Occupied! Please choose another");
                                }
                            }
                            else if (seatnumber == "4")
                            {
                                if (seat != 2)
                                {
                                    API.setPlayerIntoVehicle(sender, Vehicle, 2);
                                }
                                else
                                {
                                    API.sendChatMessageToPlayer(sender, "Seat Occupied! Please choose another");
                                }
                            }
                            else if (seatnumber == "5")
                            {
                                if (seat != 3)
                                {
                                    API.setPlayerIntoVehicle(sender, Vehicle, 3);
                                }
                                else
                                {
                                    API.sendChatMessageToPlayer(sender, "Seat Occupied! Please choose another");
                                }
                            }
                            else if (seatnumber == "6")
                            {
                                if (seat != 4)
                                {
                                    API.setPlayerIntoVehicle(sender, Vehicle, 4);
                                }
                                else
                                {
                                    API.sendChatMessageToPlayer(sender, "Seat Occupied! Please choose another");
                                }
                            }
                            else if (seatnumber == "7")
                            {
                                if (seat != 5)
                                {
                                    API.setPlayerIntoVehicle(sender, Vehicle, 5);
                                }
                                else
                                {
                                    API.sendChatMessageToPlayer(sender, "Seat Occupied! Please choose another");
                                }
                            }
                            else if (seatnumber == "8")
                            {
                                if (seat != 6)
                                {
                                    API.setPlayerIntoVehicle(sender, Vehicle, 6);
                                }
                                else
                                {
                                    API.sendChatMessageToPlayer(sender, "Seat Occupied! Please choose another");
                                }
                            }
                            else if (seatnumber == "9")
                            {
                                if (seat != 7)
                                {
                                    API.setPlayerIntoVehicle(sender, Vehicle, 7);
                                }
                                else
                                {
                                    API.sendChatMessageToPlayer(sender, "Seat Occupied! Please choose another");
                                }
                            }
                            else if (seatnumber == "10")
                            {
                                if (seat != 8)
                                {
                                    API.setPlayerIntoVehicle(sender, Vehicle, 8);
                                }
                                else
                                {
                                    API.sendChatMessageToPlayer(sender, "Seat Occupied! Please choose another");
                                }
                            }
                            else if (seatnumber == "11")
                            {
                                if (seat != 9)
                                {
                                    API.setPlayerIntoVehicle(sender, Vehicle, 9);
                                }
                                else
                                {
                                    API.sendChatMessageToPlayer(sender, "Seat Occupied! Please choose another");
                                }
                            }
                            else if (seatnumber == "12")
                            {
                                if (seat != 10)
                                {
                                    API.setPlayerIntoVehicle(sender, Vehicle, 10);
                                }
                                else
                                {
                                    API.sendChatMessageToPlayer(sender, "Seat Occupied! Please choose another");
                                }
                            }
                            else if (seatnumber == "13")
                            {
                                if (seat != 11)
                                {
                                    API.setPlayerIntoVehicle(sender, Vehicle, 11);
                                }
                                else
                                {
                                    API.sendChatMessageToPlayer(sender, "Seat Occupied! Please choose another");
                                }
                            }
                            else if (seatnumber == "14")
                            {
                                if (seat != 12)
                                {
                                    API.setPlayerIntoVehicle(sender, Vehicle, 12);
                                }
                                else
                                {
                                    API.sendChatMessageToPlayer(sender, "Seat Occupied! Please choose another");
                                }
                            }
                            else if (seatnumber == "15")
                            {
                                if (seat != 13)
                                {
                                    API.setPlayerIntoVehicle(sender, Vehicle, 13);
                                }
                                else
                                {
                                    API.sendChatMessageToPlayer(sender, "Seat Occupied! Please choose another");
                                }
                            }
                            else if (seatnumber == "16")
                            {
                                if (seat != 14)
                                {
                                    API.setPlayerIntoVehicle(sender, Vehicle, 14);
                                }
                                else
                                {
                                    API.sendChatMessageToPlayer(sender, "Seat Occupied! Please choose another");
                                }
                            }
                        }
                    }
                }
            }
            else if (inVeh == false)
            {
                var near = GetClosestVehicle(sender, 10f);
                var Occupants = API.getVehicleOccupants(near);

                if (Occupants == null || Occupants.Length == 0)
                {
                    API.setPlayerIntoVehicle(sender, near, -1);
                }
                else
                {                   
                    foreach (var player in Occupants)
                    {
                        var seat = API.getPlayerVehicleSeat(player);

                        if (seatnumber == "1")
                        {
                            if (seat != -1)
                            {
                                API.setPlayerIntoVehicle(sender, near, -1);
                            }
                            else
                            {
                                API.sendChatMessageToPlayer(sender, "Seat Occupied! Please choose another");
                            }
                        }
                        else if (seatnumber == "2")
                        {
                            if (seat != 0)
                            {
                                API.setPlayerIntoVehicle(sender, near, 0);
                            }
                            else
                            {
                                API.sendChatMessageToPlayer(sender, "Seat Occupied! Please choose another");
                            }
                        }
                        else if (seatnumber == "3")
                        {
                            if (seat != 1)
                            {
                                API.setPlayerIntoVehicle(sender, near, 1);
                            }
                            else
                            {
                                API.sendChatMessageToPlayer(sender, "Seat Occupied! Please choose another");
                            }
                        }
                        else if (seatnumber == "4")
                        {
                            if (seat != 2)
                            {
                                API.setPlayerIntoVehicle(sender, near, 2);
                            }
                            else
                            {
                                API.sendChatMessageToPlayer(sender, "Seat Occupied! Please choose another");
                            }
                        }
                        else if (seatnumber == "5")
                        {
                            if (seat != 3)
                            {
                                API.setPlayerIntoVehicle(sender, near, 3);
                            }
                            else
                            {
                                API.sendChatMessageToPlayer(sender, "Seat Occupied! Please choose another");
                            }
                        }
                        else if (seatnumber == "6")
                        {
                            if (seat != 4)
                            {
                                API.setPlayerIntoVehicle(sender, near, 4);
                            }
                            else
                            {
                                API.sendChatMessageToPlayer(sender, "Seat Occupied! Please choose another");
                            }
                        }
                        else if (seatnumber == "7")
                        {
                            if (seat != 5)
                            {
                                API.setPlayerIntoVehicle(sender, near, 5);
                            }
                            else
                            {
                                API.sendChatMessageToPlayer(sender, "Seat Occupied! Please choose another");
                            }
                        }
                        else if (seatnumber == "8")
                        {
                            if (seat != 6)
                            {
                                API.setPlayerIntoVehicle(sender, near, 6);
                            }
                            else
                            {
                                API.sendChatMessageToPlayer(sender, "Seat Occupied! Please choose another");
                            }
                        }
                        else if (seatnumber == "9")
                        {
                            if (seat != 7)
                            {
                                API.setPlayerIntoVehicle(sender, near, 7);
                            }
                            else
                            {
                                API.sendChatMessageToPlayer(sender, "Seat Occupied! Please choose another");
                            }
                        }
                        else if (seatnumber == "10")
                        {
                            if (seat != 8)
                            {
                                API.setPlayerIntoVehicle(sender, near, 8);
                            }
                            else
                            {
                                API.sendChatMessageToPlayer(sender, "Seat Occupied! Please choose another");
                            }
                        }
                        else if (seatnumber == "11")
                        {
                            if (seat != 9)
                            {
                                API.setPlayerIntoVehicle(sender, near, 9);
                            }
                            else
                            {
                                API.sendChatMessageToPlayer(sender, "Seat Occupied! Please choose another");
                            }
                        }
                        else if (seatnumber == "12")
                        {
                            if (seat != 10)
                            {
                                API.setPlayerIntoVehicle(sender, near, 10);
                            }
                            else
                            {
                                API.sendChatMessageToPlayer(sender, "Seat Occupied! Please choose another");
                            }
                        }
                        else if (seatnumber == "13")
                        {
                            if (seat != 11)
                            {
                                API.setPlayerIntoVehicle(sender, near, 11);
                            }
                            else
                            {
                                API.sendChatMessageToPlayer(sender, "Seat Occupied! Please choose another");
                            }
                        }
                        else if (seatnumber == "14")
                        {
                            if (seat != 12)
                            {
                                API.setPlayerIntoVehicle(sender, near, 12);
                            }
                            else
                            {
                                API.sendChatMessageToPlayer(sender, "Seat Occupied! Please choose another");
                            }
                        }
                        else if (seatnumber == "15")
                        {
                            if (seat != 13)
                            {
                                API.setPlayerIntoVehicle(sender, near, 13);
                            }
                            else
                            {
                                API.sendChatMessageToPlayer(sender, "Seat Occupied! Please choose another");
                            }
                        }
                        else if (seatnumber == "16")
                        {
                            if (seat != 14)
                            {
                                API.setPlayerIntoVehicle(sender, near, 14);
                            }
                            else
                            {
                                API.sendChatMessageToPlayer(sender, "Seat Occupied! Please choose another");
                            }
                        }
                    }
                }
            }
        }

        [Command("para")]
        public void ParaCommand(Client player)
        {
            API.givePlayerWeapon(player, WeaponHash.Parachute, 1, true, true);
        }

        [Command("rules", Alias = "rule")]
        public void RuleCommand(Client player)
        {
            API.sendChatMessageToPlayer(player, "~g~English only in the main chat");
            API.sendChatMessageToPlayer(player, "~r~No ~y~Random Deathmatch");
            API.sendChatMessageToPlayer(player, "~r~No ~y~Hacking or Bug Abusing");
            API.sendChatMessageToPlayer(player, "~r~No ~y~Spamming");
            API.sendChatMessageToPlayer(player, "~b~Please respect other players");
            //API.sendChatMessageToPlayer(player, "");
        }

        [Command("heal", GreedyArg = true)]
        public void HealCommand(Client Player, string target)
        {
            Client Injured = API.getPlayerFromName(target);
            string Medic = API.getPlayerName(Player);
            string Class = API.getEntityData(Player, "Class");
            List<Client> nearbyPlayers = API.getPlayersInRadiusOfPlayer(3, Player);
            
            if (Class == "Medic")
            {
                if (Injured.exists == true)
                {
                    int InjuredHealth = API.getPlayerHealth(Injured);
                    foreach (var person in nearbyPlayers)
                    {
                        if (person == Injured)
                        {
                            if (InjuredHealth < 100)
                            {
                                API.setPlayerHealth(Injured, 100);
                                API.sendChatMessageToPlayer(Player, "You have successfully healed " + target);
                                API.sendChatMessageToPlayer(Injured, "You have been healed by " + Medic);
                            }
                            else
                            {
                                API.sendChatMessageToPlayer(Player, target + "Is already fully healthy!");
                            }
                        }
                        else
                        {
                            API.sendChatMessageToPlayer(Player, "You are not near an injured person");
                        }
                        break;
                    }
                }
                else
                {
                    API.sendChatMessageToPlayer(Player, "No such person exists");
                }
            }
            else
            {
                API.sendChatMessageToPlayer(Player, "You are not medically trained!");
            }

        }

        [Command("dive", Alias = "skydive", GreedyArg = true)]
        public void SkydiveCommand (Client Player, string Height)
        {
            int HeightInt = Convert.ToInt32(Height);
            Vector3 currentHeight = API.getEntityPosition(Player);
            int GroundHeight = API.fetchNativeFromPlayer<int>(Player, 0x1DD55701034110E5, Player);

            if (GroundHeight == 0)
            {
                float minimalHeight = currentHeight.Z;

                if (minimalHeight < HeightInt)
                {
                    API.setEntityPosition(Player, new Vector3(Player.position.X, Player.position.Y, HeightInt));
                }
            }
            double newHeight = Math.Round(HeightInt * 3.28084);
            API.setEntityPosition(Player, new Vector3(Player.position.X, Player.position.Y, newHeight));

        }

        [Command("AdminRestart", ACLRequired = true)]
        public void RestartAdminResource (Client Player)
        {
            string Adminrank = API.getPlayerAclGroup(Player);
            API.stopResource("GTAPilotsAdmin");
            API.startResource("GTAPilotsAdmin");
            API.sendChatMessageToPlayer(Player, "~g~Restarted resource GTAPilotsAdmin");

            //if (Adminrank == "Admin")
            //{
            //    API.stopResource("GTAPilotsAdmin");
            //    API.startResource("GTAPilotsAdmin");
            //    API.sendChatMessageToPlayer(Player, "~g~Restarted resource GTAPilotsAdmin");
            //}
        }

        [Command("Radio")]
        public void RadioCommand (Client Player)
        {
            API.sendChatMessageToPlayer(Player, "Start your chat message with + followed by your radio message.");
            API.sendChatMessageToPlayer(Player, "You can use the following shortcuts to speed up typing");
            API.sendChatMessageToPlayer(Player, "~y~#tn ~w~= ~g~Enters your current Tailnumber");
            API.sendChatMessageToPlayer(Player, "~y~#rw ~w~= ~g~Runway");
            API.sendChatMessageToPlayer(Player, "~y~#tx1 ~w~= ~g~Taxiing");
            API.sendChatMessageToPlayer(Player, "~y~#tx2 ~w~= ~g~Taxied");
            API.sendChatMessageToPlayer(Player, "~y~#to1 ~w~= ~g~Taking Off");
            API.sendChatMessageToPlayer(Player, "~y~#to2 ~w~= ~g~Took Off");
            API.sendChatMessageToPlayer(Player, "~y~#dp1 ~w~= ~g~Departing");
            API.sendChatMessageToPlayer(Player, "~y~#dp2 ~w~= ~g~Departed");
            API.sendChatMessageToPlayer(Player, "~y~#ln1 ~w~= ~g~Landing");
            API.sendChatMessageToPlayer(Player, "~y~#ln2 ~w~= ~g~Landed");
            API.sendChatMessageToPlayer(Player, "~y~#lsia ~w~= ~g~Los Santos International Airport");
            API.sendChatMessageToPlayer(Player, "~y~#evwa ~w~= ~g~East Vinewood Airfield");
            API.sendChatMessageToPlayer(Player, "~y~#sandy ~w~= ~g~Sandy Shores Airport");
            API.sendChatMessageToPlayer(Player, "~y~#fz ~w~= ~g~Fort Zancudo");
        }

        [Command("Lock")]
        public void LockCommand (Client Player)
        {
            bool inVeh = API.isPlayerInAnyVehicle(Player);
            if (inVeh == true)
            {
                NetHandle Veh = API.getPlayerVehicle(Player);
                Vehicle Vehicular = API.getEntityFromHandle<Vehicle>(Veh);
                Client[] Occupants = API.getVehicleOccupants(Veh);

                foreach (var Players in Occupants)
                {
                    if (Vehicular.Class == 16)
                    {
                        int Seat = API.getPlayerVehicleSeat(Players);
                        if (Seat == -1)
                        {
                            bool anyData = API.hasEntityData(Players, "DoorLocked");

                            if (anyData == true)
                            {
                                bool Locked = API.getEntityData(Players, "DoorLocked");

                                if (Locked == false)
                                {
                                    //API.triggerClientEvent(Players, "Lock");
                                    API.sendNativeToPlayer(Players, Hash.SET_VEHICLE_DOORS_LOCKED, Veh, 4);
                                    API.setEntityData(Players, "DoorLocked", true);
                                    API.sendChatMessageToPlayer(Players, "Door is locked");
                                }
                                else
                                {
                                    //API.triggerClientEvent(Players, "Unlock");
                                    API.sendNativeToPlayer(Players, Hash.SET_VEHICLE_DOORS_LOCKED, Veh, 0);
                                    API.setEntityData(Players, "DoorLocked", false);
                                    API.sendChatMessageToPlayer(Players, "Doors Unlocked");
                                }
                            }
                            else
                            {
                                //API.triggerClientEvent(Players, "Lock");
                                API.sendNativeToPlayer(Players, Hash.SET_VEHICLE_DOORS_LOCKED, Veh, 4);
                                API.sendChatMessageToPlayer(Players, "Doors Locked");
                                API.setEntityData(Players, "DoorLocked", true);
                            }
                        }
                        else if (Seat == 0)
                        {
                            bool anyData = API.hasEntityData(Players, "DoorLocked");

                            if (anyData == true)
                            {
                                bool Locked = API.getEntityData(Players, "DoorLocked");

                                if (Locked == false)
                                {
                                    //API.triggerClientEvent(Players, "Lock");
                                    API.sendNativeToPlayer(Players, Hash.SET_VEHICLE_DOORS_LOCKED, Veh, 4);
                                    API.setEntityData(Players, "DoorLocked", true);
                                    API.sendChatMessageToPlayer(Players, "Door is locked");
                                }
                                else
                                {
                                    //API.triggerClientEvent(Players, "Unlock");
                                    API.sendNativeToPlayer(Players, Hash.SET_VEHICLE_DOORS_LOCKED, Veh, 0);
                                    API.setEntityData(Players, "DoorLocked", false);
                                    API.sendChatMessageToPlayer(Players, "Doors Unlocked");
                                }
                            }
                            else
                            {
                                //API.triggerClientEvent(Players, "Lock");
                                API.sendNativeToPlayer(Players, Hash.SET_VEHICLE_DOORS_LOCKED, Veh, 4);
                                API.sendChatMessageToPlayer(Players, "Doors Locked");
                                API.setEntityData(Players, "DoorLocked", true);
                            }
                        }
                        else
                        {
                            API.sendChatMessageToPlayer(Player, "You are not in a pilots seat!");
                        }
                    }
                    else
                    {
                        bool anyData = API.hasEntityData(Players, "DoorLocked");

                        if (anyData == true)
                        {
                            bool Locked = API.getEntityData(Players, "DoorLocked");

                            if (Locked == false)
                            {
                                //API.triggerClientEvent(Players, "Lock");
                                API.sendNativeToPlayer(Players, Hash.SET_VEHICLE_DOORS_LOCKED, Veh, 4);
                                API.setEntityData(Players, "DoorLocked", true);
                                API.sendChatMessageToPlayer(Players, "Door is locked");
                            }
                            else
                            {
                                //API.triggerClientEvent(Players, "Unlock");
                                API.sendNativeToPlayer(Players, Hash.SET_VEHICLE_DOORS_LOCKED, Veh, 0);
                                API.setEntityData(Players, "DoorLocked", false);
                                API.sendChatMessageToPlayer(Players, "Doors Unlocked");
                            }
                        }
                        else
                        {
                            //API.triggerClientEvent(Players, "Lock");
                            API.sendNativeToPlayer(Players, Hash.SET_VEHICLE_DOORS_LOCKED, Veh, 4);
                            API.sendChatMessageToPlayer(Players, "Doors Locked");
                            API.setEntityData(Players, "DoorLocked", true);
                        }
                    }
                }
            }
            else
            {
                API.sendChatMessageToPlayer(Player, "You are not in any vehicle!");
            }
        }

        [Command("seatbelt")]
        public void SeatbeltCommand (Client Player)
        {
            bool inVeh = API.isPlayerInAnyVehicle(Player);

            if (inVeh == true)
            {
                bool Seatbelt = API.getPlayerSeatbelt(Player);

                if (Seatbelt == false)
                {
                    API.setPlayerSeatbelt(Player, true);
                    API.setEntityData(Player, "Seatbelt", true);
                    API.sendChatMessageToPlayer(Player, "You have put your seatbelt on.");
                }
                else if (Seatbelt == true)
                {
                    API.setPlayerSeatbelt(Player, false);
                    API.setEntityData(Player, "Seatbelt", false);
                    API.sendChatMessageToPlayer(Player, "You have taken your seatbelt off.");
                }
            }
        }

        [Command("SetFuel")]
        public void SetFuelCommand (Client Player, string Number)
        {
            bool inVeh = API.isPlayerInAnyVehicle(Player);
            int Integer;
            if (inVeh == true)
            {
                bool result = Int32.TryParse(Number, out Integer);
                if (result == true)
                {
                    NetHandle Vehiclular = API.getPlayerVehicle(Player);
                    API.setVehicleFuelLevel(Vehiclular, Integer);
                }
                else
                {
                    API.sendChatMessageToPlayer(Player, "Enter numbers only!");
                }
            }
        }

        [Command("SetOil", GreedyArg = true)]
        public void SetOilCommand (Client Player, string OilLevel)
        {
            bool inVeh = API.isPlayerInAnyVehicle(Player);
            int Integer;
            if (inVeh == true)
            {
                bool result = Int32.TryParse(OilLevel, out Integer);
                if (result == true)
                {
                    NetHandle Vehiclular = API.getPlayerVehicle(Player);
                    API.setVehicleOilLevel(Vehiclular, Integer);
                }
                else
                {
                    API.sendChatMessageToPlayer(Player, "Enter numbers only!");
                }
            }
        }

        [Command("Repair")]
        public void RepairCommand (Client Player)
        {
            bool inVehicle = API.isPlayerInAnyVehicle(Player);

            if (inVehicle == true)
            {
                NetHandle Vehicle = API.getPlayerVehicle(Player);
                float EngineHealth = API.getVehicleEngineHealth(Vehicle);

                if (EngineHealth < 1000)
                {
                    API.repairVehicle(Vehicle);
                    API.setVehicleHealth(Vehicle, 1000);
                }
                else
                {
                    API.sendChatMessageToPlayer(Player, "Vehicle does not need repairing!");
                }

            }
            else
            {
                API.sendChatMessageToPlayer(Player, "Please enter a vehicle to repair!");
            }
        }

        [Command("Hanger")]
        public void HangerTeleport (Client Player)
        {
            API.setEntityPosition(Player, new Vector3(-1266.802, -3014.837, -49.000));
        }

        [Command("Customise", GreedyArg = true)]
        public void CustomisePropertyCommand (Client Player, string Property)
        {
            string newProperty = Property.ToUpper();
            if (newProperty == "HANGER")
            {
                API.sendChatMessageToPlayer(Player, "Customise Hanger Selected");
                API.triggerClientEvent(Player, "CustomHanger");
            }
        }

        [Command("setlivery", Alias = "sl", GreedyArg = true)]
        public void SetLiveryCommand (Client Player, string livery)
        {
            bool inVehicle = API.isPlayerInAnyVehicle(Player);

            if (inVehicle == true)
            {
                int Convertedlivery = Convert.ToInt32(livery);
                NetHandle Vehicular = API.getPlayerVehicle(Player);
                API.setVehicleLivery(Vehicular, Convertedlivery);

                API.sendChatMessageToPlayer(Player, "Livery set to " + Convertedlivery);
            }
        }

        [Command("setextra", Alias = "se", GreedyArg = true)]
        public void SetExtrasCommand (Client Player, string Extra)
        {
            bool inVeh = API.isPlayerInAnyVehicle(Player);

            if (inVeh == true)
            {
                int ConvertedExtra = Convert.ToInt32(Extra);
                NetHandle Vehicular = API.getPlayerVehicle(Player);
                API.setVehicleExtra(Vehicular, ConvertedExtra, true);

                API.sendChatMessageToPlayer(Player, "Extra set to " + ConvertedExtra);
            }
        }

        [Command("setmod", Alias = "sm", GreedyArg = true)]
        public void SetModCommand (Client Player, string ModType, string Mod)
        {
            bool inVeh = API.isPlayerInAnyVehicle(Player);

            if (inVeh == true)
            {
                int ConvertedModType = Convert.ToInt32(ModType);
                int ConvertedMod = Convert.ToInt32(Mod);
                NetHandle Vehicular = API.getPlayerVehicle(Player);
                API.setVehicleMod(Vehicular, ConvertedModType, ConvertedMod);
                API.triggerClientEvent(Player, "Test", ConvertedModType, ConvertedMod);
                //API.sendChatMessageToPlayer(Player, "Mod type set to " + ConvertedModType + ". Mod set to " + ConvertedMod);
            }
        }

        [Command("Scenario", Alias = "scn", GreedyArg = true)]
        public void ScenarioCommand (Client Player, string Scenario)
        {
            API.playPlayerScenario(Player, Scenario);
        }

        [Command("StopScenario", Alias = "ssc")]
        public void StopScenarioCommand (Client Player)
        {
            API.stopPlayerAnimation(Player);
        }

        [Command("SetClothes", Alias = "sc", GreedyArg = true)]
        public void SetClothesCommand (Client Player, string slot, string drawable, string texture)
        {
            int Slots;
            int Drawables;
            int Textures;

            Int32.TryParse(slot, out Slots);
            Int32.TryParse(drawable, out Drawables);
            Int32.TryParse(texture, out Textures);

            int Model = API.getEntityModel(Player);
            if ((PedHash)Model == PedHash.FreemodeMale01)
            {
                API.setPlayerClothes(Player, Slots, Drawables, Textures);
            }
            else if ((PedHash)Model == PedHash.FreemodeFemale01)
            {
                API.setPlayerClothes(Player, Slots, Drawables, Textures);
            }
            else
            {
                API.sendChatMessageToPlayer(Player, "Please set skin to FreemodeMale01 or FreemodeFemale01");
            }
        }

        [Command("SetAccessory", Alias = "sa", GreedyArg = true)]
        public void SetAccessoriesCommand(Client Player, string slot, string drawable, string texture)
        {
            int Slots;
            int Drawables;
            int Textures;

            Int32.TryParse(slot, out Slots);
            Int32.TryParse(drawable, out Drawables);
            Int32.TryParse(texture, out Textures);

            int Model = API.getEntityModel(Player);
            if ((PedHash)Model == PedHash.FreemodeMale01)
            {
                API.setPlayerAccessory(Player, Slots, Drawables, Textures);
            }
            else if ((PedHash)Model == PedHash.FreemodeFemale01)
            {
                API.setPlayerAccessory(Player, Slots, Drawables, Textures);
            }
            else
            {
                API.sendChatMessageToPlayer(Player, "Please set skin to FreemodeMale01 or FreemodeFemale01");
            }
        }

        [Command("ClearAccessory", Alias = "ca", GreedyArg = true)]
        public void ClearAccessories (Client Player, string Slot)
        {
            int Slots;
            Int32.TryParse(Slot, out Slots);
            API.clearPlayerAccessory(Player, Slots);
        }
    }
}
