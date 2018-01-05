using System;
using System.IO;
using System.Xml;
using System.Collections.Generic;
using System.Linq;
using GrandTheftMultiplayer.Server;
using GrandTheftMultiplayer.Server.API;
using GrandTheftMultiplayer.Server.Constant;
using GrandTheftMultiplayer.Server.Elements;
using GrandTheftMultiplayer.Server.Extensions;
using GrandTheftMultiplayer.Server.Managers;
using GrandTheftMultiplayer.Server.Models;
using GrandTheftMultiplayer.Server.Util;
using GrandTheftMultiplayer.Shared;
using GrandTheftMultiplayer.Shared.Gta;
using GrandTheftMultiplayer.Shared.Math;

namespace GTAPilotsAdmin
{
    public class GTAPilotsAdmin : Script
    {
        string[] WeatherArray = new string[] { "Extra Sunny", "Clear", "Clouds", "Smog", "Foggy", "Overcast", "Rain", "Thunder", "Light Rain", "Smoggy Light Rain (Do Not Use)", "Very Light Snow", "Windy Light Snow", "Light Snow" };

        private static Random random = new Random();

        public static string RandomString(int length)
        {
            const string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            return new string(Enumerable.Repeat(chars, length)
              .Select(s => s[random.Next(s.Length)]).ToArray());
        }

        public int Colour1()
        {
            var colour = random.Next(0, 159);
            return colour;
        }

        public int Colour2()
        {
            var colour = random.Next(0, 159);
            return colour;
        }

        public GTAPilotsAdmin()
        {
            API.onPlayerRespawn += OnDeath;
            API.onPlayerConnected += OnPlayerConnected;
            API.onUpdate += OnUpdate;
            API.onResourceStart += OnResStart;
            API.onPlayerDisconnected += OnPlayerDisconnected;
        }

        #region Commands

        [Command(SensitiveInfo = true, ACLRequired = true)]
        public void ALogin(Client sender, string password)
        {
            var logResult = API.loginPlayer(sender, password);
            switch (logResult)
            {
                case 0:
                    API.sendChatMessageToPlayer(sender, "~r~ERROR:~w~ No account found with your name.");
                    break;
                case 3:
                case 1:
                    API.sendChatMessageToPlayer(sender, "~g~Login successful!~w~ Logged in as ~b~" + API.getPlayerAclGroup(sender) + "~w~.");
                    break;
                case 2:
                    API.sendChatMessageToPlayer(sender, "~r~ERROR:~w~ Wrong password!");
                    break;
                case 4:
                    API.sendChatMessageToPlayer(sender, "~r~ERROR:~w~ You're already logged in!");
                    break;
                case 5:
                    API.sendChatMessageToPlayer(sender, "~r~ERROR:~w~ ACL has been disabled on this server.");
                    break;
            }
        }

        [Command(ACLRequired = true)]
        public void SetWeather(Client sender, int newWeather)
        {
            string admin = API.getPlayerName(sender);
            API.setWeather(newWeather);
            string theWeather = WeatherArray[newWeather];
            API.consoleOutput(admin + " Changed weather to " + theWeather);
        }

        [Command(ACLRequired = true)]
        public void Logout(Client sender)
        {
            API.logoutPlayer(sender);
            API.sendChatMessageToPlayer(sender, "Youve been logged out!");
        }

        [Command(ACLRequired = true)]
        public void Start(Client sender, string resource)
        {
            if (!API.doesResourceExist(resource))
            {
                API.sendChatMessageToPlayer(sender, "~r~No such resource found: \"" + resource + "\"");
            }
            else if (API.isResourceRunning(resource))
            {
                API.sendChatMessageToPlayer(sender, "~r~Resource \"" + resource + "\" is already running!");
            }
            else
            {
                API.startResource(resource);
                API.sendChatMessageToPlayer(sender, "~g~Started resource \"" + resource + "\"");
            }
        }

        [Command(ACLRequired = true)]
        public void Stop(Client sender, string resource)
        {
            if (!API.doesResourceExist(resource))
            {
                API.sendChatMessageToPlayer(sender, "~r~No such resource found: \"" + resource + "\"");
            }
            else if (!API.isResourceRunning(resource))
            {
                API.sendChatMessageToPlayer(sender, "~r~Resource \"" + resource + "\" is not running!");
            }
            else
            {
                API.stopResource(resource);
                API.sendChatMessageToPlayer(sender, "~g~Stopped resource \"" + resource + "\"");
            }
        }

        [Command(ACLRequired = true)]
        public void Restart(Client sender, string resource)
        {
            if (API.doesResourceExist(resource))
            {
                API.stopResource(resource);
                API.startResource(resource);

                API.sendChatMessageToPlayer(sender, "~g~Restarted resource \"" + resource + "\"");
            }
            else
            {
                API.sendChatMessageToPlayer(sender, "~r~No such resource found: \"" + resource + "\"");
            }
        }

        [Command(ACLRequired = true)]
        public void Kill(Client sender, string target)
        {
            Client targetPlayer = API.getPlayerFromName(target);
            API.setPlayerHealth(targetPlayer, -1);
            string admin = API.getPlayerName(sender);
            API.consoleOutput(admin + "Used /kill on " + target);
        }

        [Command("kick", ACLRequired = true, GreedyArg = true)]
        public void KickCommand(Client admin, string target, string reason)
        {
            string isAdmin = API.getPlayerAclGroup(admin);
            string whoKicked = API.getPlayerName(admin);
            Client targetPlayer = API.getPlayerFromName(target);

            if (isAdmin == "Everybody")
            {

            }

            else if (isAdmin == "Mod")
            {
                API.kickPlayer(targetPlayer);
                API.sendChatMessageToAll(target + "Was kicked for " + reason);
                API.sendNotificationToPlayer(targetPlayer, "You have benn kicked for " + reason, true);
                API.consoleOutput(whoKicked + " Kicked " + target + ". Reason: " + reason);

            }

            else if (isAdmin == "Admin")
            {
                API.kickPlayer(targetPlayer);
                API.sendChatMessageToAll(target + "Was kicked for " + reason);
                API.sendNotificationToPlayer(targetPlayer, "You have benn kicked for " + reason, true);
                API.consoleOutput(whoKicked + " Kicked " + target + ". Reason: " + reason);

            }
        }

        [Command("ban", ACLRequired = true, GreedyArg = true)]
        public void BanCommand(Client admin, string target, string reason)
        {
            string isAdmin = API.getPlayerAclGroup(admin);
            string whoBanned = API.getPlayerName(admin);
            Client targetPlayer = API.getPlayerFromName(target);

            if (isAdmin == "Everybody")
            {

            }

            else if (isAdmin == "Moderator")
            {
                API.banPlayer(targetPlayer);
                API.sendChatMessageToAll(target + "was banned for " + reason);
                API.sendNotificationToPlayer(targetPlayer, "You have benn banned for " + reason, true);
                API.consoleOutput("Moderator " + whoBanned + " Banned " + target + ". Reason: " + reason);
            }

            else if (isAdmin == "Admin")
            {
                API.banPlayer(targetPlayer);
                API.sendChatMessageToAll(target + "Was banned for " + reason);
                API.sendNotificationToPlayer(targetPlayer, "You have benn banned for " + reason, true);
                API.consoleOutput("Admin " + whoBanned + " Banned " + target + ". Reason: " + reason);
            }
        }

        [Command("unban", ACLRequired = true, GreedyArg = true)]
        public void UnbanCommand(Client admin, string SocialClubId)
        {
            var whoUnbanned = API.getPlayerName(admin);

            XmlDocument ban = new XmlDocument();
            FileStream rfile = new FileStream("bans.xml", FileMode.Open);
            ban.Load(rfile);
            XmlNodeList list = ban.GetElementsByTagName("BanCollection");

            for (int i = 0; i < list.Count; i++)
            {
                XmlElement cl = (XmlElement)ban.GetElementsByTagName("ban")[i];
                if ((cl.GetAttribute("schandle")) == SocialClubId)
                {
                    API.unbanPlayer(SocialClubId);
                    API.consoleOutput(whoUnbanned + " Unbanned " + SocialClubId);
                    cl.RemoveAttribute("schandle");
                    break;
                }

                else if ((cl.GetAttribute("schandle")) != SocialClubId)
                {
                    API.sendChatMessageToPlayer(admin, "No such user banned");
                    break;
                }
            }

            rfile.Close();
        }

        [Command("spectate", ACLRequired = true, GreedyArg = true)]
        public void SpectateCommand(Client admin, string target)
        {
            string adminName = API.getPlayerName(admin);
            Client targetPlayer = API.getPlayerFromName(target);
            API.setPlayerToSpectatePlayer(admin, targetPlayer);
            API.consoleOutput(adminName + " is spectating " + target);
        }

        [Command("unspectate", ACLRequired = true, GreedyArg = true)]
        public void UnspectateCommand(Client admin)
        {
            API.unspectatePlayer(admin);
        }

        [Command("skin", ACLRequired = true, GreedyArg = true)]
        public void SkinCommand(Client admin, PedHash skin)
        {
            API.setPlayerSkin(admin, skin);
        }

        [Command("loadipl", ACLRequired = true)]
        public void LoadIplCommand(Client sender, string ipl)
        {
            API.requestIpl(ipl);
            API.consoleOutput("LOADED IPL " + ipl);
            API.sendChatMessageToPlayer(sender, "Loaded IPL ~b~" + ipl + "~w~.");
        }

        [Command("removeipl", ACLRequired = true)]
        public void RemoveIplCommand(Client sender, string ipl)
        {
            API.removeIpl(ipl);
            API.consoleOutput("REMOVED IPL " + ipl);
            API.sendChatMessageToPlayer(sender, "Removed IPL ~b~" + ipl + "~w~.");
        }

        [Command("V", ACLRequired = true, GreedyArg = true)]
        public void AllVehicles(Client sender, string vehicle)
        {
            string NewText = vehicle.ToUpper();

            VehicleHash VehicleSpawn = API.vehicleNameToModel(vehicle);
            Vector3 vPos = API.getEntityPosition(sender.handle);
            Vector3 vRot = API.getEntityRotation(sender.handle);
            Vehicle SpawnVehicle = API.createVehicle(VehicleSpawn, vPos, vRot, 1, 0);

            API.setVehicleNumberPlate(SpawnVehicle, sender.name);

            int Class = API.getVehicleClass(VehicleSpawn);


            if (Class == 15 || Class == 16)
            {
                API.setEntitySyncedData(SpawnVehicle, "VehicleType", "Aircraft");
                API.setEntitySyncedData(SpawnVehicle, "Tailnumber", RandomString(4));
                if (NewText == "TULA")
                {
                    API.setVehicleMod(SpawnVehicle, 4, 0);
                }
            }

            API.setPlayerIntoVehicle(sender, SpawnVehicle, -1);

        }

        [Command("inv", ACLRequired = true)]
        public void Invincible(Client sender)
        {
            API.setEntityInvincible(sender, true);
        }

        [Command("uninv", ACLRequired = true)]
        public void Uninvincible(Client sender)
        {
            API.setEntityInvincible(sender, false);
        }

        [Command("tp", ACLRequired = true, GreedyArg = true)]
        public void PlayerToPlayer(Client sender, string toPlayer)
        {
            string adminName = API.getPlayerName(sender);
            Client goPlayer = API.getPlayerFromName(toPlayer);
            Vector3 goPlayerPos = API.getEntityPosition(goPlayer);
            API.setEntityPosition(sender, goPlayerPos);
            API.consoleOutput(adminName + " teleported to " + toPlayer);
        }

        [Command("get", ACLRequired = true, GreedyArg = true)]
        public void GetCommand(Client admin, string target)
        {

            Client targetPlayer = API.getPlayerFromName(target);
            Vector3 getAdminPos = API.getEntityPosition(admin);
            API.setEntityPosition(targetPlayer, getAdminPos);

        }

        [Command("dimension", ACLRequired = true)]
        public void ChangeDimension(Client sender, int dimension)
        {
            API.setEntityDimension(sender.handle, dimension);
        }

        [Command("coord", ACLRequired = true, GreedyArg = true)]
        public void CoordCommand(Client player, string X, string Y, string Z)
        {
            Single A = Convert.ToSingle(X);
            Single B = Convert.ToSingle(Y);
            Single C = Convert.ToSingle(Z);

            Vector3 place = new Vector3(A, B, C);
            API.setEntityPosition(player, place);
        }

        [Command("blackout", ACLRequired = true)]
        public void BlackoutCommand(Client sender, bool blackout)
        {
            API.sendNativeToAllPlayers(0x1268615ACE24D504, blackout);
        }

        [Command("adminhelp", ACLRequired = true, Alias = "ah")]
        public void AdminHelp(Client admin)
        {
            string rank = API.getPlayerAclGroup(admin);

            if (rank == "Moderator")
            {
                API.sendChatMessageToPlayer(admin, "Moderator Commands:");
                API.sendChatMessageToPlayer(admin, "~y~/kick ~r~[Target Nickname, Reason]");
                API.sendChatMessageToPlayer(admin, "~y~/ban ~r~[Target Nickname, Reason]");
                API.sendChatMessageToPlayer(admin, "~y~/kill ~r~[Target Nickname]");
                API.sendChatMessageToPlayer(admin, "~y~/ghostmode");
                API.sendChatMessageToPlayer(admin, "~y~/setweather ~b~[WeatherID]");
                API.sendChatMessageToPlayer(admin, "~y~/blackout ~g~[True/False]");
                API.sendChatMessageToPlayer(admin, "~y~/spectate ~g~[Target Nickname]");
                API.sendChatMessageToPlayer(admin, "~y~/unspectate");
                API.sendChatMessageToPlayer(admin, "~y~/skin ~g~[Skin Name]");
                API.sendChatMessageToPlayer(admin, "~y~/tp ~g~[Target Nickname]");
                API.sendChatMessageToPlayer(admin, "~y~/v ~g~[Model Name]");
                API.sendChatMessageToPlayer(admin, "~y~/vcolor ~g~[Color1, Color2]");
            }

            else if (rank == "Admin")
            {
                API.sendChatMessageToPlayer(admin, "Admin Commands:");
                API.sendChatMessageToPlayer(admin, "~y~/kick ~r~[Target Nickname, Reason]");
                API.sendChatMessageToPlayer(admin, "~y~/ban ~r~[Target Nickname, Reason]");
                API.sendChatMessageToPlayer(admin, "~y~/kill ~r~[Target Nickname]");
                API.sendChatMessageToPlayer(admin, "~y~/ghostmode");
                API.sendChatMessageToPlayer(admin, "~y~/setweather ~b~[WeatherID]");
                API.sendChatMessageToPlayer(admin, "~y~/blackout ~g~[True/False]");
                API.sendChatMessageToPlayer(admin, "~y~/spectate ~g~[Target Nickname]");
                API.sendChatMessageToPlayer(admin, "~y~/unspectate");
                API.sendChatMessageToPlayer(admin, "~y~/skin ~g~[Skin Name]");
                API.sendChatMessageToPlayer(admin, "~y~/tp ~g~[Target Nickname]");
                API.sendChatMessageToPlayer(admin, "~y~/v ~g~[Model Name]");
                API.sendChatMessageToPlayer(admin, "~y~/stop ~b~[Resource]");
                API.sendChatMessageToPlayer(admin, "~y~/start ~r~[Resource]");
                API.sendChatMessageToPlayer(admin, "~y~/restart ~r~[Resource]");
                API.sendChatMessageToPlayer(admin, "~y~/unban ~b~[Social Club ID]");
                API.sendChatMessageToPlayer(admin, "~y~/loadipl ~g~[IPL Name]");
                API.sendChatMessageToPlayer(admin, "~y~/removeipl ~g~[IPL Name]");
                API.sendChatMessageToPlayer(admin, "~y~/inv");
                API.sendChatMessageToPlayer(admin, "~y~/uninv");
                API.sendChatMessageToPlayer(admin, "~y~/dimension ~g~[Dimension Number]");
                API.sendChatMessageToPlayer(admin, "~y~/coord ~g~[X Y Z]");
            }

            else
            {
                API.sendChatMessageToPlayer(admin, "You do not have permission to use this command!");
            }
        }

        [Command("settype")]
        public void SetTypeCommand(Client Player)
        {
            bool inVehicle = API.isPlayerInAnyVehicle(Player);

            if (inVehicle == true)
            {
                NetHandle whatVehicle = API.getPlayerVehicle(Player);
                API.setEntitySyncedData(whatVehicle, "VehicleType", "Aircraft");
                API.sendChatMessageToPlayer(Player, "Type Changed to Aircraft");
            }

            else if (inVehicle == false)
            {
                API.sendChatMessageToPlayer(Player, "Please enter a vehicle");
            }
        }

        [Command("vehiclerespawn", Alias = "vr", ACLRequired = true)]
        public void VehicleRespawn(Client Player)
        {
            List<NetHandle> allVehicles = API.getAllVehicles();

            foreach (var Vehicles in allVehicles)
            {
                RespawnVehicles(Vehicles);
            }
        }

        [Command("giveweapon", Alias = "w", GreedyArg = true, ACLRequired = true)]
        public void GiveWeaponCommand(Client Admin, string Target, string Weapon)
        {
            Client TargetPlayer;
            try
            {
                if (Target == null)
                {
                    TargetPlayer = Admin;
                }
                else
                {
                    TargetPlayer = API.getPlayerFromName(Target);
                }
                
                try
                {
                    WeaponHash WeaponSpawn = API.weaponNameToModel(Weapon);
                    API.givePlayerWeapon(TargetPlayer, WeaponSpawn, 999, true, true);
                }
                catch (Exception)
                {
                    API.sendChatMessageToPlayer(Admin, "Invalid Weapon Name");
                    throw;
                }
            }
            catch (Exception)
            {
                API.sendChatMessageToPlayer(Admin, "Invalid Player Name");
                throw;
            }


        }

        [Command("setgrav", Alias = "sg", GreedyArg = true, ACLRequired = true)]
        public void SetGravityCommand(Client Player, string Gravity)
        {
            int gravityInt = Convert.ToInt32(Gravity);
            API.sendChatMessageToPlayer(Player, "Gravity set to " + gravityInt);
            API.setGravityLevel(gravityInt);
        }

        [Command("slap", GreedyArg = true, ACLRequired = true)]
        public void SlapCommand (Client Admin, string TargetPlayer)
        {
            Client SlappedPlayer = API.getPlayerFromName(TargetPlayer);
            bool PlayerExists = API.doesEntityExist(SlappedPlayer);

            if (PlayerExists == true)
            {
                Vector3 TargetPlayerLocation = API.getEntityPosition(SlappedPlayer);
                float newHeight = TargetPlayerLocation.Z + 5;

                API.setEntityPosition(SlappedPlayer, new Vector3(TargetPlayerLocation.X, TargetPlayerLocation.Y, newHeight));
                API.sendChatMessageToPlayer(Admin, "You have slapped " + SlappedPlayer.nametag);
                API.sendChatMessageToPlayer(SlappedPlayer, "You have been slapped! Ouch!");
            }
        }
        #endregion

        private void OnResStart()
        {

        }

        public void OnPlayerDisconnected(Client player, string reason)
        {
            API.logoutPlayer(player);
        }

        public void OnUpdate()
        {

        }

        public void OnDeath(Client player)
        {

        }

        public void OnPlayerConnected(Client player)
        {
            var log = API.loginPlayer(player, "");
            if (log == 1)
            {
                API.sendChatMessageToPlayer(player, "Logged in as ~b~" + API.getPlayerAclGroup(player) + "~w~.");
            }
            else if (log == 2)
            {
                API.sendChatMessageToPlayer(player, "Please log in with ~b~/login [password]");
            }
        }

        public void RespawnVehicles(NetHandle Vehicular)
        {
            var Respawnable = API.getEntityData(Vehicular, "RESPAWNABLE");
            var vehicleSpawnPos = API.getEntityData(Vehicular, "SPAWN_POS");
            var vehicleType = API.getEntityData(Vehicular, "VehicleType");
            var vehicleCurrentPos = API.getEntityPosition(Vehicular);

            if (Respawnable == true)
            {
                int model = API.getEntityModel(Vehicular);
                string name = API.getVehicleDisplayName((VehicleHash)model);

                var spawnPos = API.getEntityData(Vehicular, "SPAWN_POS");
                var spawnH = API.getEntityData(Vehicular, "SPAWN_ROT");

                API.deleteEntity(Vehicular);

                if (vehicleType == "Police")
                {
                    Vehicle respawnCar = API.createVehicle((VehicleHash)model, spawnPos, spawnH, 111, 0);

                    // You can also add more things, like vehicle modifications, number plate, etc.	
                    API.setEntityData(respawnCar, "RESPAWNABLE", true);
                    API.setEntityData(respawnCar, "SPAWN_POS", spawnPos);
                    API.setEntityData(respawnCar, "SPAWN_ROT", spawnH);
                    API.setEntityData(respawnCar, "VehicleType", "Police");
                    API.consoleOutput(name + " Respawned at: " + spawnPos);

                    API.setEntityData(respawnCar, "timerActive", false);
                    return;
                }

                else if (vehicleType == "Firetruck")
                {
                    Vehicle respawnCar = API.createVehicle((VehicleHash)model, spawnPos, spawnH, 134, 28);

                    // You can also add more things, like vehicle modifications, number plate, etc.	
                    API.setEntityData(respawnCar, "RESPAWNABLE", true);
                    API.setEntityData(respawnCar, "SPAWN_POS", spawnPos);
                    API.setEntityData(respawnCar, "SPAWN_ROT", spawnH);
                    API.setEntityData(respawnCar, "VehicleType", "Firetruck");
                    API.consoleOutput(name + " Respawned at: " + spawnPos);

                    API.setEntityData(respawnCar, "timerActive", false);
                    return;
                }

                else if (vehicleType == "Car")
                {
                    Vehicle respawnCar = API.createVehicle((VehicleHash)model, spawnPos, spawnH, Colour1(), Colour2());

                    // You can also add more things, like vehicle modifications, number plate, etc.	
                    API.setEntityData(respawnCar, "RESPAWNABLE", true);
                    API.setEntityData(respawnCar, "SPAWN_POS", spawnPos);
                    API.setEntityData(respawnCar, "SPAWN_ROT", spawnH);
                    API.setEntityData(respawnCar, "VehicleType", "Car");
                    API.consoleOutput(name + " Respawned at: " + spawnPos);

                    API.setEntityData(respawnCar, "timerActive", false);
                    return;
                }

                else if (vehicleType == "Boat")
                {
                    Vehicle respawnCar = API.createVehicle((VehicleHash)model, spawnPos, spawnH, Colour1(), Colour2());

                    // You can also add more things, like vehicle modifications, number plate, etc.	
                    API.setEntityData(respawnCar, "RESPAWNABLE", true);
                    API.setEntityData(respawnCar, "SPAWN_POS", spawnPos);
                    API.setEntityData(respawnCar, "SPAWN_ROT", spawnH);
                    API.setEntityData(respawnCar, "VehicleType", "Boat");
                    API.consoleOutput(name + " Respawned at: " + spawnPos);

                    API.setEntityData(respawnCar, "timerActive", false);
                    return;
                }

                else if (vehicleType == "Aircraft")
                {
                    Vehicle respawnCar = API.createVehicle((VehicleHash)model, spawnPos, spawnH, Colour1(), Colour2());

                    // You can also add more things, like vehicle modifications, number plate, etc.	
                    API.setEntityData(respawnCar, "RESPAWNABLE", true);
                    API.setEntityData(respawnCar, "SPAWN_POS", spawnPos);
                    API.setEntityData(respawnCar, "SPAWN_ROT", spawnH);
                    API.setEntityData(respawnCar, "VehicleType", "Aircraft");
                    API.setEntitySyncedData(respawnCar, "Tailnumber", RandomString(4));
                    API.consoleOutput(name + " Respawned at: " + spawnPos);

                    API.setEntityData(respawnCar, "timerActive", false); return;
                }

                else if (vehicleType == null)
                {
                    API.deleteEntity(Vehicular);
                }
            }

            else
            {
                API.deleteEntity(Vehicular);
            }

        }

    }
}
