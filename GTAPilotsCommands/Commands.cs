using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using GTANetworkServer;
using GTANetworkShared;
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
        }

        public void OnResourceStart()
        {
            ColShape elevatorBottom = API.createSphereColShape(new Vector3(-2361.174, 3249.038, 32.81074), 3f);
            ColShape elevatorTop = API.createSphereColShape(new Vector3(-2361.015, 3248.824, 92.90366), 3f);
            ColShape LsiaArea = API.createSphereColShape(new Vector3(-1336.026, -3044.2, 12.55686), 2000f);
            ColShape EvwaArea = API.createSphereColShape(new Vector3(1148.543, 124.9639, 81.10194), 2000f);
            ColShape SandyArea = API.createSphereColShape(new Vector3(1330.159, 3112.599, 40.00936), 2000f);
            ColShape MilitaryArea = API.createSphereColShape(new Vector3(-2239.216, 3190.27, 31.90979), 2000f);
            //API.onEntityEnterColShape += OnEntityEnterColShape;
            //API.onEntityExitColShape += OnEntityExitColShape;

            elevatorBottom.onEntityEnterColShape += ElevatorBottomEntered;
            elevatorTop.onEntityEnterColShape += ElevatorTopEntered;

            elevatorBottom.onEntityExitColShape += ElevatorBottomExited;
            elevatorTop.onEntityExitColShape += ElevatorTopExited;

            LsiaArea.onEntityEnterColShape += LsiaOnEnter;
            EvwaArea.onEntityEnterColShape += EvwaOnEnter;
            MilitaryArea.onEntityEnterColShape += MilitaryOnEnter;
            SandyArea.onEntityEnterColShape += SandyOnEnter;

            LsiaArea.onEntityExitColShape += LsiaOnExit;
            EvwaArea.onEntityExitColShape += EvwaOnExit;
            MilitaryArea.onEntityExitColShape += MilitaryOnExit;
            SandyArea.onEntityExitColShape += SandyOnExit;
            //elevatorTop.setData("Type", "ElevatorTop");
            //elevatorBottom.setData("Type", "ElevatorBottom");
        }

        public void OnPlayerDownload(Client Player)
        {
            API.setEntitySyncedData(Player, "Taking Off", false);
            API.setEntitySyncedData(Player, "Landing", false);
        }
        bool LsiaInside = false;
        bool EvwaInside = false;
        bool MilitaryInside = false;
        bool SandyInside = false;

        public void LsiaOnEnter(ColShape shape, NetHandle entity)
        {
            LsiaInside = true;
            Client Player = API.getPlayerFromHandle(entity);

            if (Player == null)
            {
                return;
            }

            API.setEntitySyncedData(Player, "InsideAirportArea", "Lsia");
        }

        public void EvwaOnEnter(ColShape shape, NetHandle entity)
        {
            EvwaInside = true;
            Client Player = API.getPlayerFromHandle(entity);

            if (Player == null)
            {
                return;
            }

            API.setEntitySyncedData(Player, "InsideAirportArea", "Evwa");
        }

        public void SandyOnEnter(ColShape shape, NetHandle entity)
        {
            SandyInside = true;
            Client Player = API.getPlayerFromHandle(entity);

            if (Player == null)
            {
                return;
            }

            API.setEntitySyncedData(Player, "InsideAirportArea", "Sandy");
        }

        public void MilitaryOnEnter(ColShape shape, NetHandle entity)
        {
            MilitaryInside = true;
            Client Player = API.getPlayerFromHandle(entity);

            if (Player == null)
            {
                return;
            }

            API.setEntitySyncedData(Player, "InsideAirportArea", "Military");
        }

        public void LsiaOnExit(ColShape shape, NetHandle entity)
        {
            LsiaInside = false;
            Client Player = API.getPlayerFromHandle(entity);

            if (Player == null)
            {
                return;
            }

            API.setEntitySyncedData(Player, "TakeoffTimer", false);
            API.setEntitySyncedData(Player, "LandingTimer", false);
            API.setEntitySyncedData(Player, "CommandCallerLND", false);
            API.setEntitySyncedData(Player, "CommandCallerTO", false);
            API.setEntitySyncedData(Player, "Landing", false);
            API.setEntitySyncedData(Player, "Taking Off", false);
        }

        public void EvwaOnExit(ColShape shape, NetHandle entity)
        {
            EvwaInside = false;
            Client Player = API.getPlayerFromHandle(entity);

            if (Player == null)
            {
                return;
            }

            API.setEntitySyncedData(Player, "TakeoffTimer", false);
            API.setEntitySyncedData(Player, "LandingTimer", false);
            API.setEntitySyncedData(Player, "CommandCallerLND", false);
            API.setEntitySyncedData(Player, "CommandCallerTO", false);
            API.setEntitySyncedData(Player, "Landing", false);
            API.setEntitySyncedData(Player, "Taking Off", false);
        }

        public void SandyOnExit(ColShape shape, NetHandle entity)
        {
            SandyInside = false;
            Client Player = API.getPlayerFromHandle(entity);

            if (Player == null)
            {
                return;
            }
            API.setEntitySyncedData(Player, "TakeoffTimer", false);
            API.setEntitySyncedData(Player, "LandingTimer", false);
            API.setEntitySyncedData(Player, "CommandCallerLND", false);
            API.setEntitySyncedData(Player, "CommandCallerTO", false);
            API.setEntitySyncedData(Player, "Landing", false);
            API.setEntitySyncedData(Player, "Taking Off", false);
        }

        public void MilitaryOnExit(ColShape shape, NetHandle entity)
        {
            MilitaryInside = false;
            Client Player = API.getPlayerFromHandle(entity);

            if (Player == null)
            {
                return;
            }

            API.setEntitySyncedData(Player, "TakeoffTimer", false);
            API.setEntitySyncedData(Player, "LandingTimer", false);
            API.setEntitySyncedData(Player, "CommandCallerLND", false);
            API.setEntitySyncedData(Player, "CommandCallerTO", false);
            API.setEntitySyncedData(Player, "Landing", false);
            API.setEntitySyncedData(Player, "Taking Off", false);
        }

        public void ElevatorBottomEntered(ColShape shape, NetHandle entity)
        {
            Client player = API.getPlayerFromHandle(entity);

            if (player == null)
            {
                return;
            }

            API.triggerClientEvent(player, "insideElevatorBottom");
        }

        public void ElevatorTopEntered(ColShape shape, NetHandle entity)
        {
            Client player = API.getPlayerFromHandle(entity);

            if (player == null)
            {
                return;
            }

            API.triggerClientEvent(player, "insideElevatorTop");
        }

        public void ElevatorBottomExited(ColShape shape, NetHandle entity)
        {
            Client player = API.getPlayerFromHandle(entity);

            if (player == null)
            {
                return;
            }

            API.triggerClientEvent(player, "exit");
        }

        public void ElevatorTopExited(ColShape shape, NetHandle entity)
        {
            Client player = API.getPlayerFromHandle(entity);

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

        public List<Client> TakeoffLsia = new List<Client>();
        public List<Client> TakeoffEvwa = new List<Client>();
        public List<Client> TakeoffSandy = new List<Client>();
        public List<Client> TakeoffMilitary = new List<Client>();

        [Command("land", Alias = "lnd", GreedyArg = true)]
        public void LandingCommand(Client Player)
        {
            //API.setEntitySyncedData(Player, "Taking Off", true);
            //API.setEntitySyncedData(Player, "CommandCaller", true);

            if (LsiaInside == true)
            {
                API.setEntitySyncedData(Player, "Landing", true);
                API.setEntitySyncedData(Player, "CommandCallerLND", true);
                API.setEntitySyncedData(Player, "LandingTimer", true);
                API.triggerClientEvent(Player, "LsiaLND");

                var t = Task.Run(async delegate
                {
                    await Task.Delay(TimeSpan.FromSeconds(5));
                    API.setEntitySyncedData(Player, "Landing", false);                  
                    return;
                });

                List<Client> Takeoffcall = API.getPlayersInRadiusOfPosition(2000, new Vector3(-1336.026, -3044.2, 12.55686));

                foreach (var Pilot in Takeoffcall)
                {
                    if (Pilot == Player)
                    {
                        return;
                    }

                    API.setEntitySyncedData(Pilot, "Landing", true);
                    API.setEntitySyncedData(Pilot, "CommandCallerLND", false);
                    API.triggerClientEvent(Pilot, "LsiaLND");

                    var t1 = Task.Run(async delegate
                    {
                        await Task.Delay(TimeSpan.FromSeconds(5));
                        API.setEntitySyncedData(Pilot, "Landing", false);
                        return;
                    });
                }

                var t2 = Task.Run(async delegate
                {
                    await Task.Delay(TimeSpan.FromMinutes(1));
                    API.setEntitySyncedData(Player, "LandingTimer", false);
                    return;
                });
            }
            else if (EvwaInside == true)
            {
                API.setEntitySyncedData(Player, "Landing", true);
                API.setEntitySyncedData(Player, "CommandCallerLND", true);
                API.setEntitySyncedData(Player, "LandingTimer", true);
                API.triggerClientEvent(Player, "EvwaLND");

                var t = Task.Run(async delegate
                {
                    await Task.Delay(TimeSpan.FromSeconds(5));
                    API.setEntitySyncedData(Player, "Landing", false);
                    return;
                });

                List<Client> Takeoffcall = API.getPlayersInRadiusOfPosition(2000, new Vector3(-1336.026, -3044.2, 12.55686));

                foreach (var Pilot in Takeoffcall)
                {
                    if (Pilot == Player)
                    {
                        return;
                    }

                    API.setEntitySyncedData(Pilot, "Landing", true);
                    API.setEntitySyncedData(Pilot, "CommandCallerLND", false);
                    API.triggerClientEvent(Pilot, "EvwaLND");

                    var t1 = Task.Run(async delegate
                    {
                        await Task.Delay(TimeSpan.FromSeconds(5));
                        API.setEntitySyncedData(Pilot, "Landing", false);
                        return;
                    });
                }

                var t2 = Task.Run(async delegate
                {
                    await Task.Delay(TimeSpan.FromMinutes(1));
                    API.setEntitySyncedData(Player, "LandingTimer", false);
                    return;
                });
            }
            else if (SandyInside == true)
            {
                API.setEntitySyncedData(Player, "Landing", true);
                API.setEntitySyncedData(Player, "CommandCallerLND", true);
                API.setEntitySyncedData(Player, "LandingTimer", true);
                API.triggerClientEvent(Player, "SandyLND");

                var t = Task.Run(async delegate
                {
                    await Task.Delay(TimeSpan.FromSeconds(5));
                    API.setEntitySyncedData(Player, "Landing", false);
                    return;
                });

                List<Client> Takeoffcall = API.getPlayersInRadiusOfPosition(2000, new Vector3(-1336.026, -3044.2, 12.55686));

                foreach (var Pilot in Takeoffcall)
                {
                    if (Pilot == Player)
                    {
                        return;
                    }

                    API.setEntitySyncedData(Pilot, "Landing", true);
                    API.setEntitySyncedData(Pilot, "CommandCallerLND", false);
                    API.triggerClientEvent(Pilot, "SandyLND");

                    var t1 = Task.Run(async delegate
                    {
                        await Task.Delay(TimeSpan.FromSeconds(5));
                        API.setEntitySyncedData(Pilot, "Landing", false);
                        return;
                    });
                }

                var t2 = Task.Run(async delegate
                {
                    await Task.Delay(TimeSpan.FromMinutes(1));
                    API.setEntitySyncedData(Player, "LandingTimer", false);
                    return;
                });
            }
            else if (MilitaryInside == true)
            {
                API.setEntitySyncedData(Player, "Landing", true);
                API.setEntitySyncedData(Player, "CommandCallerLND", true);
                API.setEntitySyncedData(Player, "LandingTimer", true);
                API.triggerClientEvent(Player, "MilitaryLND");

                var t = Task.Run(async delegate
                {
                    await Task.Delay(TimeSpan.FromSeconds(5));
                    API.setEntitySyncedData(Player, "Landing", false);
                    return;
                });

                List<Client> Takeoffcall = API.getPlayersInRadiusOfPosition(2000, new Vector3(-1336.026, -3044.2, 12.55686));

                foreach (var Pilot in Takeoffcall)
                {
                    if (Pilot == Player)
                    {
                        return;
                    }

                    API.setEntitySyncedData(Pilot, "Landing", true);
                    API.setEntitySyncedData(Pilot, "CommandCallerLND", false);
                    API.triggerClientEvent(Pilot, "MilitaryLND");

                    var t1 = Task.Run(async delegate
                    {
                        await Task.Delay(TimeSpan.FromSeconds(5));
                        API.setEntitySyncedData(Pilot, "Landing", false);
                        return;
                    });
                }

                var t2 = Task.Run(async delegate
                {
                    await Task.Delay(TimeSpan.FromMinutes(1));
                    API.setEntitySyncedData(Player, "LandingTimer", false);
                    return;
                });
            }
        }

        [Command("takeoff", Alias = "to", GreedyArg = true)]
        public void TakeoffCommand(Client Player)
        {
            int isLsiaPopulated = TakeoffLsia.Count();
            bool inVeh = API.isPlayerInAnyVehicle(Player);
            if (inVeh == true)
            {
                if (LsiaInside == true)
                {
                    if (isLsiaPopulated == 0)
                    {
                        TakeoffLsia.Add(Player);

                        API.setEntitySyncedData(Player, "Taking Off", true);
                        API.setEntitySyncedData(Player, "CommandCaller", true);
                        API.setEntitySyncedData(Player, "TakeoffTimer", true);

                        API.triggerClientEvent(Player, "LsiaTO");

                        var t = Task.Run(async delegate
                        {
                            await Task.Delay(TimeSpan.FromSeconds(5));
                            API.setEntitySyncedData(Player, "TakeoffTimer", false);

                            return;
                        });
                    }
                    else if (isLsiaPopulated >= 1)
                    {
                        API.setEntitySyncedData(Player, "CommandCaller", false);

                        List<Client> Takeoffcall = API.getPlayersInRadiusOfPosition(2000, new Vector3(-1336.026, -3044.2, 12.55686));
                        
                        foreach (var Pilot in Takeoffcall)
                        {
                            if (Player == Pilot)
                            {
                                API.setEntitySyncedData(Pilot, "Taking Off", true);
                                API.setEntitySyncedData(Pilot, "CommandCaller", true);
                                return;
                            }
                            else
                            {
                                API.setEntitySyncedData(Pilot, "Taking Off", false);
                                API.setEntitySyncedData(Pilot, "CommandCaller", false);
                                API.setEntitySyncedData(Pilot, "TakeoffTimer", true);

                                API.triggerClientEvent(Pilot, "LsiaTO");

                                var t1 = Task.Run(async delegate
                                {
                                    await Task.Delay(TimeSpan.FromSeconds(5));
                                    API.setEntitySyncedData(Pilot, "TakeoffTimer", false);
                                    return;
                                });
                            }
                        }
                    }

                    var t2 = Task.Run(async delegate
                    {
                        await Task.Delay(TimeSpan.FromMinutes(1));
                        API.setEntitySyncedData(Player, "Taking Off", false);
                        API.setEntitySyncedData(Player, "CommandCaller", false);
                        TakeoffLsia.Clear();
                        return;
                    });
                }
                else if (EvwaInside == true)
                {
                    API.setEntitySyncedData(Player, "Taking Off", true);
                    API.setEntitySyncedData(Player, "CommandCaller", true);
                    API.setEntitySyncedData(Player, "TakeoffTimer", true);
                    API.triggerClientEvent(Player, "EvwaTO");

                    var t = Task.Run(async delegate
                    {
                        await Task.Delay(TimeSpan.FromSeconds(5));
                        API.setEntitySyncedData(Player, "Taking Off", false);
                        return;
                    });

                    List<Client> Takeoffcall = API.getPlayersInRadiusOfPosition(2000, new Vector3(-1336.026, -3044.2, 12.55686));

                    foreach (var Pilot in Takeoffcall)
                    {
                        if (Pilot == Player)
                        {
                            return;
                        }

                        API.setEntitySyncedData(Pilot, "Taking Off", true);
                        API.setEntitySyncedData(Pilot, "CommandCaller", false);
                        API.triggerClientEvent(Pilot, "EvwaTO");

                        var t1 = Task.Run(async delegate
                        {
                            await Task.Delay(TimeSpan.FromSeconds(5));
                            API.setEntitySyncedData(Pilot, "Taking Off", false);
                            return;
                        });
                    }

                    var t2 = Task.Run(async delegate
                    {
                        await Task.Delay(TimeSpan.FromMinutes(1));
                        API.setEntitySyncedData(Player, "TakeoffTimer", false);
                        return;
                    });
                }
                else if (SandyInside == true)
                {
                    API.setEntitySyncedData(Player, "Taking Off", true);
                    API.setEntitySyncedData(Player, "CommandCaller", true);
                    API.setEntitySyncedData(Player, "TakeoffTimer", true);
                    API.triggerClientEvent(Player, "SandyTO");

                    var t = Task.Run(async delegate
                    {
                        await Task.Delay(TimeSpan.FromSeconds(5));
                        API.setEntitySyncedData(Player, "Taking Off", false);
                        return;
                    });

                    List<Client> Takeoffcall = API.getPlayersInRadiusOfPosition(2000, new Vector3(-1336.026, -3044.2, 12.55686));

                    foreach (var Pilot in Takeoffcall)
                    {
                        if (Pilot == Player)
                        {
                            return;
                        }

                        API.setEntitySyncedData(Pilot, "Taking Off", true);
                        API.setEntitySyncedData(Pilot, "CommandCaller", false);
                        API.triggerClientEvent(Pilot, "SandyTO");

                        var t1 = Task.Run(async delegate
                        {
                            await Task.Delay(TimeSpan.FromSeconds(5));
                            API.setEntitySyncedData(Pilot, "Taking Off", false);
                            return;
                        });
                    }

                    var t2 = Task.Run(async delegate
                    {
                        await Task.Delay(TimeSpan.FromMinutes(1));
                        API.setEntitySyncedData(Player, "TakeoffTimer", false);
                        return;
                    });
                }
                else if (MilitaryInside == true)
                {
                    API.setEntitySyncedData(Player, "Taking Off", true);
                    API.setEntitySyncedData(Player, "CommandCaller", true);
                    API.setEntitySyncedData(Player, "TakeoffTimer", true);
                    API.triggerClientEvent(Player, "MilitaryTO");

                    var t = Task.Run(async delegate
                    {
                        await Task.Delay(TimeSpan.FromSeconds(5));
                        API.setEntitySyncedData(Player, "Taking Off", false);
                        return;
                    });

                    List<Client> Takeoffcall = API.getPlayersInRadiusOfPosition(2000, new Vector3(-1336.026, -3044.2, 12.55686));

                    foreach (var Pilot in Takeoffcall)
                    {
                        if (Pilot == Player)
                        {
                            return;
                        }

                        API.setEntitySyncedData(Pilot, "Taking Off", true);
                        API.setEntitySyncedData(Pilot, "CommandCaller", false);
                        API.triggerClientEvent(Pilot, "MilitaryTO");

                        var t1 = Task.Run(async delegate
                        {
                            await Task.Delay(TimeSpan.FromSeconds(5));
                            API.setEntitySyncedData(Pilot, "Taking Off", false);
                            return;
                        });
                    }

                    var t2 = Task.Run(async delegate
                    {
                        await Task.Delay(TimeSpan.FromMinutes(1));
                        API.setEntitySyncedData(Player, "TakeoffTimer", false);
                        return;
                    });
                }
            }
            else
            {
                API.sendChatMessageToPlayer(Player, "Please enter a vaild");
            }
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

        [Command("ADF", "~y~Usage: ~w~/ADF [LSIA, LSL, MB, MNT]", Alias = "adf", GreedyArg = true)]
        public void ADFBeacon(Client player, string text)
        {
            var beaconADF = text.ToUpper();

            if (beaconADF == "LSIA")
            {
                API.triggerClientEvent(player, "ADF LSIA");
            }

            else if (beaconADF == "LSL")
            {
                API.triggerClientEvent(player, "ADF LSL");
            }

            else if (beaconADF == "MB")
            {
                API.triggerClientEvent(player, "ADF MB");
            }

            else if (beaconADF == "MNT")
            {
                API.triggerClientEvent(player, "ADF MNT");
            }

            else if (beaconADF == "OFF")
            {
                API.triggerClientEvent(player, "ADF OFF");
            }

            else if (beaconADF == "HELP")
            {
                API.sendChatMessageToPlayer(player, "/ADF [LSIA, LSL, MB, MNT, OFF, HELP]");
            }

            else
            {
                API.sendChatMessageToPlayer(player, "Please enter valid ADF Beacon Callsign!");
            }
        }

        [Command("DME", "~y~Usage: ~w~/DME [LSIA, LSL, MB, MNT]", Alias = "dme", GreedyArg = true)]
        public void DMEBeacon(Client player, string text)
        {
            var beaconDME = text.ToUpper();

            if (beaconDME == "LSIA")
            {
                API.triggerClientEvent(player, "DME LSIA");
            }

            else if (beaconDME == "LSL")
            {
                API.triggerClientEvent(player, "DME LSL");
            }

            else if (beaconDME == "MB")
            {
                API.triggerClientEvent(player, "DME MB");
            }

            else if (beaconDME == "MNT")
            {
                API.triggerClientEvent(player, "DME MNT");
            }

            else if (beaconDME == "OFF")
            {
                API.triggerClientEvent(player, "DME OFF");
            }

            else if (beaconDME == "HELP")
            {
                API.sendChatMessageToPlayer(player, "/DME [LSIA, LSL, MB, MNT, OFF, HELP]");
            }

            else
            {
                API.sendChatMessageToPlayer(player, "Please enter valid DME Beacon Callsign!");
            }
        }

        [Command("help", Alias = "commands")]
        public void HelpCommand(Client player)
        {
            API.sendChatMessageToPlayer(player, "List of Commands:");
            API.sendChatMessageToPlayer(player, "/rules");
            API.sendChatMessageToPlayer(player, "/spawn");
            API.sendChatMessageToPlayer(player, "/me [message]");
            //API.sendChatMessageToPlayer(player, "/ADF [Beacon ID]");
            API.sendChatMessageToPlayer(player, "/DME [Beacon ID]");
            API.sendChatMessageToPlayer(player, "/engine");
            API.sendChatMessageToPlayer(player, "/seat [Seat Number]");
            API.sendChatMessageToPlayer(player, "/metar");
            API.sendChatMessageToPlayer(player, "/para");

        }

        [Command("seat", "Usage: /seat [Seat Numer]", GreedyArg = true)]
        public void SeatInVehicle(Client sender, string seatnumber)
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

                    else if (seatnumber == "17")
                    {
                        if (seat != 15)
                        {
                            API.setPlayerIntoVehicle(sender, near, 15);
                            API.sendChatMessageToPlayer(sender, "This is a test to see if a seat 15 exists");
                        }
                        else
                        {
                            API.sendChatMessageToPlayer(sender, "Seat Occupied! Please choose another");
                            API.sendChatMessageToPlayer(sender, "Test failed?");
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
            API.sendChatMessageToPlayer(player, "~r~No ~y~RDM");
            API.sendChatMessageToPlayer(player, "~r~No ~y~Hacking or Bug Abusing");
            API.sendChatMessageToPlayer(player, "~r~No ~y~Spamming");
            API.sendChatMessageToPlayer(player, "~b~Please respect other players");
            //API.sendChatMessageToPlayer(player, "");
        }

        [Command("helicam", Alias = "hc", GreedyArg = true)]
        public void ScaleformCommand(Client Player)
        {
            API.sendChatMessageToPlayer(Player, "Heli Cam Active");

            API.triggerClientEvent(Player, "HeliCam");
        }

        [Command("Phone")]
        public void PhoneCommand(Client Player)
        {
            API.triggerClientEvent(Player, "Phone");
        }

        [Command("lh", Alias = "lesterhandler")]
        public void DctlCommand(Client Player)
        {
            API.triggerClientEvent(Player, "Lesterhandler");
        }
        
        [Command("gtavo")]
        public void GtaVOCommand(Client Player)
        {
            API.triggerClientEvent(Player, "GTAVOnline");
        }

        [Command("web")]
        public void WebCommand(Client Player)
        {
            API.triggerClientEvent(Player, "Web Browser");
        }

        [Command("missioncomplete")]
        public void LeaderboardCommand(Client Player)
        {
            API.triggerClientEvent(Player, "Mission Complete");
        }

        [Command("graphicdesign")]
        public void GraphicDesignCommand(Client Player)
        {
            API.triggerClientEvent(Player, "Graphic Design");
        }

        [Command("bubblegum")]
        public void BubblegumCommand(Client Player)
        {
            API.triggerClientEvent(Player, "Bubblegum");
        }

        [Command("orgname")]
        public void OrganisationNameCommand(Client Player)
        {
            API.triggerClientEvent(Player, "OrgName");
        }

        [Command("stopscaleform", Alias = "stopsc")]
        public void StopScaleformCommand (Client Player)
        {
            API.triggerClientEvent(Player, "Remove Scaleform");
        }

        [Command("heal", GreedyArg = true)]
        public void HealCommand(Client Player, string target)
        {
            Client Injured = API.getPlayerFromName(target);
            string Medic = API.getPlayerName(Player);
            string Class = API.getEntitySyncedData(Player, "Class");
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
            API.setEntityPosition(Player, new Vector3(Player.position.X, Player.position.Y, HeightInt));
        }
    }
}
