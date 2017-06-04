using System;
using System.Threading.Tasks;
using GTANetworkShared;
using GTANetworkServer;



namespace GTAPilots
{
    public class Startup : Script
    {

        public Startup()
        {
            API.onResourceStart += ResourceStart;
            API.onPlayerConnected += PlayerConnected;
            API.onPlayerFinishedDownload += PlayerDownloaded;
            API.onPlayerRespawn += Respawn;
            API.onPlayerDisconnected += PlayerDisconnect;
            API.onClientEventTrigger += OnClientEvent;
            API.onPlayerDeath += PlayerDed;
        }

        public void ResourceStart()
        {
            API.setGamemodeName("GTA Pilots");            
            API.consoleOutput("Its time to fly in GTA Pilots!");
        }

        public void PlayerConnected(Client player)
        {
            API.sendNotificationToAll("~b~~h~" + player.name + "~h~ ~w~joined.");
            API.sendChatMessageToAll("~b~~h~" + player.name + "~h~~w~ has joined the server.");
            API.sendChatMessageToPlayer(player, "Use ~y~/help ~w~for a list of available commands");
            API.sendChatMessageToPlayer(player, "Go to ~r~GTAPilots.net~w~ and sign up on the forums!");
            API.sendChatMessageToPlayer(player, "Join our ~p~Discord ~b~https://discord.gg/qYKStCC");
            //API.sendChatMessageToPlayer(player, "~b~~h~ Register with /Register [password]");
            //API.sendChatMessageToPlayer(player, "~h~~w~ Login in with /Login [password]");
        }

        public void PlayerDownloaded(Client player)
        {

        }

        public void OnClientEvent(Client sender, string Event, params object[] arguments)
        {
            if (Event == "ElevatorUp")
            {
                API.setEntityPosition(sender, new Vector3(-2361.015, 3248.824, 92.90366));
            }

            else if (Event == "ElevatorDown")
            {
                API.setEntityPosition(sender, new Vector3(-2361.174, 3249.038, 32.81074));
            }
        }

        private void PlayerDed(Client player, NetHandle reason, int weapon)
        {
            Client killer = null;
            if (!reason.IsNull)
            {
                var players = API.getAllPlayers();
                for (var i = 0; i < players.Count; i++)
                { //This part will check if the reason is a player (the killer)
                    if (players[i].handle == reason)
                    {
                        killer = players[i];
                        break;
                    }
                }
            }
            if (killer != null)
            {
                API.sendNotificationToAll(killer.name + " has killed " + player.name);
                API.consoleOutput("OUTPUT: Player " + killer.name + "has killed player " + API.getPlayerName(player) + "!");
                API.sendPictureNotificationToAll(player.name + "Has perished!", "CHAR_EPSILON", 5, 5, "Episilon", "Death");

            }
            else
            {
                API.consoleOutput("OUTPUT: Player " + API.getPlayerName(player) + " died");
            }
               
        }

        public void Respawn(Client sender)
        {

            WeaponHash Flare = WeaponHash.FlareGun;
            WeaponHash Para = WeaponHash.Parachute;

            API.givePlayerWeapon(sender, Flare, 999, false, true);
            API.givePlayerWeapon(sender, Para, 1, false, true);
            API.setEntityDimension(sender, 0);

            string SpawnLocation = API.getEntitySyncedData(sender, "SpawnID");
            string ClassType = API.getEntitySyncedData(sender, "Class");

            if (ClassType == "Security")
            {
                WeaponHash StunGun = WeaponHash.StunGun;
                API.givePlayerWeapon(sender, StunGun, 1, false, true);
            }

            if (SpawnLocation == "LSIA")
            {
                API.setEntityPosition(sender, new Vector3(-1220.037, -2749.073, 18.2224));
                API.setEntityRotation(sender, new Vector3(0, 0, 50.27066));
            }

            else if (SpawnLocation == "LSL")
            {
                API.setEntityPosition(sender, new Vector3(-1220.037, -2749.073, 18.2224));
                API.setEntityRotation(sender, new Vector3(0, 0, 146.4828));
            }

            else if (SpawnLocation == "Sandy")
            {
                API.setEntityPosition(sender, new Vector3(-1220.037, -2749.073, 18.2224));
                API.setEntityRotation(sender, new Vector3(0, 0, -166.8748));
            }

            else if (SpawnLocation == "Military")
            {
                API.setEntityPosition(sender, new Vector3(-2342.702, 3261.683, 32.82763));
                API.setEntityRotation(sender, new Vector3(0, 0, -122.7226));
            }

            else if (SpawnLocation == "LS Rescue")
            {
                API.setEntityPosition(sender, new Vector3(-705.9416, -1399.981, 5.150307));
                API.setEntityRotation(sender, new Vector3(0, 0, 96.21136));
            }

            else if (SpawnLocation == "LS Crash")
            {
                API.setEntityPosition(sender, new Vector3(-1100.903, -2365.319, 13.94516));
                API.setEntityRotation(sender, new Vector3(0, 0, 142.0741));
            }

            else if (SpawnLocation == "LS Medic")
            {
                API.setEntityPosition(sender, new Vector3(-1033.479, -2384.57, 14.08926));
                API.setEntityRotation(sender, new Vector3(0, 0, -124.4426));
            }

            else if (SpawnLocation == "Sandy Crash")
            {
                API.setEntityPosition(sender, new Vector3(1841.331, 3670.544, 33.67994));
                API.setEntityRotation(sender, new Vector3(0, 0, -154.3216));
            }

            else if (SpawnLocation == "Military Crash")
            {
                API.setEntityPosition(sender, new Vector3(-2099.255, 2831.774, 32.81004));
                API.setEntityRotation(sender, new Vector3(0, 0, -7.615088));
            }

            else if (SpawnLocation == "LS Security")
            {
                API.setEntityPosition(sender, new Vector3(-1221.657, -2801.196, 13.95141));
                API.setEntityRotation(sender, new Vector3(0, 0, -156.9228));
            }

            else if (SpawnLocation == "Sandy Security")
            {
                API.setEntityPosition(sender, new Vector3(1857.244, 3680.099, 33.79046));
                API.setEntityRotation(sender, new Vector3(0, 0, -155.6222));
            }

            else if (SpawnLocation == "LS Passenger")
            {
                API.setEntityPosition(sender, new Vector3(-880.8137, -2181.369, 8.9323));
                API.setEntityRotation(sender, new Vector3(0, 0, 129.66));
            }

            else if (SpawnLocation == "Sandy Passenger")
            {
                API.setEntityPosition(sender, new Vector3(1616.52, 3571.88, 35.24349));
                API.setEntityRotation(sender, new Vector3(0, 0, -64.50074));
            }

            else if (SpawnLocation == "Base Jump")
            {
                API.setEntityPosition(sender, new Vector3(-149.1562, -961.2599, 269.1353));
                API.setEntityRotation(sender, new Vector3(0, 0, -114.7388));
            }
        }

        public void PlayerDisconnect(Client player, string reason)
        {
            API.sendNotificationToAll("~b~~h~" + player.name + "~h~ ~w~quit.");
            API.sendChatMessageToAll("~b~~h~" + player.name + "~h~~w~ has quit the server. (" + reason + ")");
            API.logoutPlayer(player);
        }
    }
}
