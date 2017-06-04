using GTANetworkServer;
using GTANetworkShared;
using System;
using System.Threading.Tasks;

namespace GTAPilotsSpawn
{
    public class Spawn : Script
    {
        public Spawn()
        {
            API.onPlayerFinishedDownload += PlayerDownloaded;
            API.onClientEventTrigger += ClientEventTrigger;
        }

        public void PlayerDownloaded(Client player)
        {
            Random rnd = new Random();
            int Dimension = rnd.Next(1, 50);

            API.setEntityPosition(player, new Vector3(-860.561, -2420.079, 134.29277));

            API.setEntityPositionFrozen(player, true);
            API.setEntityCollisionless(player, true);

            API.setEntityDimension(player, Dimension);

            API.setPlayerNametagVisible(player, false);
            API.triggerClientEvent(player, "Intro");

            //Task t = Task.Run(async delegate
            //{
            //    await Task.Delay(TimeSpan.FromSeconds(25));
            //    API.triggerClientEvent(player, "skin_select_start", true);
            //    API.setPlayerNametagVisible(player, false);

            //    //API.setEntityPosition(player, new Vector3(402.8911, -996.9224, -99.00024));
            //    //API.setEntityRotation(player, new Vector3(0, 0, 178.7716));
            //});

            API.triggerClientEvent(player, "skin_select_start", true);
            API.setPlayerNametagVisible(player, true);
        }

        public void ClientEventTrigger(Client sender, string Event, params object[] arguments)
        {
            if (Event == "LSIA")
            {
                API.setEntityPosition(sender, new Vector3(-1220.037, -2749.073, 18.2224));
                API.setEntityRotation(sender, new Vector3(0, 0, 50.27066));

                API.setPlayerNametagVisible(sender, true);
               
                //var SkinID = API.getEntitySyncedData(sender, "SkinID");

                //API.setPlayerSkin(sender, SkinID);

                var Flare = WeaponHash.FlareGun;
                var Para = WeaponHash.Parachute;

                API.givePlayerWeapon(sender, Flare, 999, false, true);
                API.givePlayerWeapon(sender, Para, 1, false, true);

                API.setEntityPositionFrozen(sender, false);
                API.setEntityCollisionless(sender, false);

                API.triggerClientEvent(sender, "skin_select_stop");
                API.setEntityDimension(sender, 0);
            }

            else if (Event == "LSL")
            {
                API.setEntityPosition(sender, new Vector3(1226.155, 326.3367, 81.99096));
                API.setEntityRotation(sender, new Vector3(0, 0, 146.4828));

                API.setPlayerNametagVisible(sender, true);

                //var SkinID = API.getEntitySyncedData(sender, "SkinID");

                //API.setPlayerSkin(sender, SkinID);

                var Flare = WeaponHash.FlareGun;
                var Para = WeaponHash.Parachute;

                API.givePlayerWeapon(sender, Flare, 999, false, true);
                API.givePlayerWeapon(sender, Para, 1, false, true);

                API.setEntityPositionFrozen(sender, false);
                API.setEntityCollisionless(sender, false);

                API.triggerClientEvent(sender, "skin_select_stop");
                API.setEntityDimension(sender, 0);
            }

            else if (Event == "Sandy")
            {
                API.setEntityPosition(sender, new Vector3(1703.595, 3285.008, 41.13425));
                API.setEntityRotation(sender, new Vector3(0, 0, -166.8748));

                API.setPlayerNametagVisible(sender, true);

                //var SkinID = API.getEntitySyncedData(sender, "SkinID");

                //API.setPlayerSkin(sender, SkinID);

                var Flare = WeaponHash.FlareGun;
                var Para = WeaponHash.Parachute;

                API.givePlayerWeapon(sender, Flare, 999, false, true);
                API.givePlayerWeapon(sender, Para, 1, false, true);

                API.setEntityPositionFrozen(sender, false);
                API.setEntityCollisionless(sender, false);

                API.triggerClientEvent(sender, "skin_select_stop");
                API.setEntityDimension(sender, 0);
            }

            else if (Event == "Military")
            {
                API.setEntityPosition(sender, new Vector3(-2342.702, 3261.683, 32.82763));
                API.setEntityRotation(sender, new Vector3(0, 0, -122.7226));

                API.setPlayerNametagVisible(sender, true);

                //var SkinID = API.getEntitySyncedData(sender, "SkinID");

                //API.setPlayerSkin(sender, SkinID);

                var Flare = WeaponHash.FlareGun;
                var Para = WeaponHash.Parachute;

                API.givePlayerWeapon(sender, Flare, 999, false, true);
                API.givePlayerWeapon(sender, Para, 1, false, true);

                API.setEntityPositionFrozen(sender, false);
                API.setEntityCollisionless(sender, false);

                API.triggerClientEvent(sender, "skin_select_stop");
                API.setEntityDimension(sender, 0);
            }

            //else if (Event == "Carrier")
            //{
            //    API.setEntityPosition(sender, new Vector3());
            //    API.setEntityRotation(sender, new Vector3());

            //    PedHash SkinID = API.getEntitySyncedData(sender, "SkinID");

            //    API.setPlayerSkin(sender, SkinID);
            //}

            else if (Event == "LS Rescue")
            {
                API.setEntityPosition(sender, new Vector3(-705.9416, -1399.981, 5.150307));
                API.setEntityRotation(sender, new Vector3(0, 0, 96.21136));

                API.setPlayerNametagVisible(sender, true);

                //var SkinID = API.getEntitySyncedData(sender, "SkinID");

                //API.setPlayerSkin(sender, SkinID);

                var Flare = WeaponHash.FlareGun;
                var Para = WeaponHash.Parachute;

                API.givePlayerWeapon(sender, Flare, 999, false, true);
                API.givePlayerWeapon(sender, Para, 1, false, true);

                API.setEntityPositionFrozen(sender, false);
                API.setEntityCollisionless(sender, false);

                API.triggerClientEvent(sender, "skin_select_stop");
                API.setEntityDimension(sender, 0);

            }

            //else if (Event == "Sandy Rescue")
            //{
            //    API.setEntityPosition(sender, new Vector3());
            //    API.setEntityRotation(sender, new Vector3());

            //    PedHash SkinID = API.getEntitySyncedData(sender, "SkinID");

            //    API.setPlayerSkin(sender, SkinID);
            //}

            else if (Event == "LS Crash")
            {
                API.setEntityPosition(sender, new Vector3(-1100.903, -2365.319, 13.94516));
                API.setEntityRotation(sender, new Vector3(0, 0, 142.0741));

                API.setPlayerNametagVisible(sender, true);

                //var SkinID = API.getEntitySyncedData(sender, "SkinID");

                //API.setPlayerSkin(sender, SkinID);

                var Flare = WeaponHash.FlareGun;
                var Para = WeaponHash.Parachute;

                API.givePlayerWeapon(sender, Flare, 999, false, true);
                API.givePlayerWeapon(sender, Para, 1, false, true);

                API.setEntityPositionFrozen(sender, false);
                API.setEntityCollisionless(sender, false);

                API.triggerClientEvent(sender, "skin_select_stop");
                API.setEntityDimension(sender, 0);
            }

            else if (Event == "LS Medic")
            {
                API.setEntityPosition(sender, new Vector3(-1033.479, -2384.57, 14.08926));
                API.setEntityRotation(sender, new Vector3(0, 0, -124.4426));

                API.setPlayerNametagVisible(sender, true);

                //var SkinID = API.getEntitySyncedData(sender, "SkinID");

                //API.setPlayerSkin(sender, SkinID);

                var Flare = WeaponHash.FlareGun;
                var Para = WeaponHash.Parachute;

                API.givePlayerWeapon(sender, Flare, 999, false, true);
                API.givePlayerWeapon(sender, Para, 1, false, true);

                API.setEntityPositionFrozen(sender, false);
                API.setEntityCollisionless(sender, false);

                API.triggerClientEvent(sender, "skin_select_stop");
                API.setEntityDimension(sender, 0);
            }

            else if (Event == "Sandy Crash")
            {
                API.setEntityPosition(sender, new Vector3(1841.331, 3670.544, 33.67994));
                API.setEntityRotation(sender, new Vector3(0, 0, -154.3216));

                API.setPlayerNametagVisible(sender, true);

                //var SkinID = API.getEntitySyncedData(sender, "SkinID");

                //API.setPlayerSkin(sender, SkinID);

                var Flare = WeaponHash.FlareGun;
                var Para = WeaponHash.Parachute;

                API.givePlayerWeapon(sender, Flare, 999, false, true);
                API.givePlayerWeapon(sender, Para, 1, false, true);

                API.setEntityPositionFrozen(sender, false);
                API.setEntityCollisionless(sender, false);

                API.triggerClientEvent(sender, "skin_select_stop");
                API.setEntityDimension(sender, 0);
            }

            else if (Event == "Military Crash")
            {
                API.setEntityPosition(sender, new Vector3(-2099.255, 2831.774, 32.81004));
                API.setEntityRotation(sender, new Vector3(0, 0, -7.615088));

                API.setPlayerNametagVisible(sender, true);

                //var SkinID = API.getEntitySyncedData(sender, "SkinID");

                //API.setPlayerSkin(sender, SkinID);

                var Flare = WeaponHash.FlareGun;
                var Para = WeaponHash.Parachute;

                API.givePlayerWeapon(sender, Flare, 999, false, true);
                API.givePlayerWeapon(sender, Para, 1, false, true);

                API.setEntityPositionFrozen(sender, false);
                API.setEntityCollisionless(sender, false);

                API.triggerClientEvent(sender, "skin_select_stop");
                API.setEntityDimension(sender, 0);
            }

            else if (Event == "LS Security")
            {
                API.setEntityPosition(sender, new Vector3(-1221.657, -2801.196, 13.95141));
                API.setEntityRotation(sender, new Vector3(0, 0, -156.9228));

                API.setPlayerNametagVisible(sender, true);

                //var SkinID = API.getEntitySyncedData(sender, "SkinID");

                //API.setPlayerSkin(sender, SkinID);

                var Flare = WeaponHash.FlareGun;
                var Para = WeaponHash.Parachute;

                API.givePlayerWeapon(sender, Flare, 999, false, true);
                API.givePlayerWeapon(sender, Para, 1, false, true);

                string ClassType = API.getEntitySyncedData(sender, "Class");

                if (ClassType == "Security")
                {
                    WeaponHash StunGun = WeaponHash.StunGun;
                    API.givePlayerWeapon(sender, StunGun, 1, false, true);
                }

                API.setEntityPositionFrozen(sender, false);
                API.setEntityCollisionless(sender, false);

                API.triggerClientEvent(sender, "skin_select_stop");
                API.setEntityDimension(sender, 0);
            }

            else if (Event == "Sandy Security")
            {
                API.setEntityPosition(sender, new Vector3(1857.244, 3680.099, 33.79046));
                API.setEntityRotation(sender, new Vector3(0, 0, -155.6222));

                API.setPlayerNametagVisible(sender, true);

                //var SkinID = API.getEntitySyncedData(sender, "SkinID");

                //API.setPlayerSkin(sender, SkinID);

                var Flare = WeaponHash.FlareGun;
                var Para = WeaponHash.Parachute;

                API.givePlayerWeapon(sender, Flare, 999, false, true);
                API.givePlayerWeapon(sender, Para, 1, false, true);

                string ClassType = API.getEntitySyncedData(sender, "Class");

                if (ClassType == "Security")
                {
                    WeaponHash StunGun = WeaponHash.StunGun;
                    API.givePlayerWeapon(sender, StunGun, 1, false, true);
                }

                API.setEntityPositionFrozen(sender, false);
                API.setEntityCollisionless(sender, false);

                API.triggerClientEvent(sender, "skin_select_stop");
                API.setEntityDimension(sender, 0);
            }

            else if (Event == "LS Passenger")
            {
                API.setEntityPosition(sender, new Vector3(-880.8137, -2181.369, 8.9323));
                API.setEntityRotation(sender, new Vector3(0, 0, 129.66));

                API.setPlayerNametagVisible(sender, true);

                //var SkinID = API.getEntitySyncedData(sender, "SkinID");

                //API.setPlayerSkin(sender, SkinID);

                var Flare = WeaponHash.FlareGun;
                var Para = WeaponHash.Parachute;

                API.givePlayerWeapon(sender, Flare, 999, false, true);
                API.givePlayerWeapon(sender, Para, 1, false, true);

                API.setEntityPositionFrozen(sender, false);
                API.setEntityCollisionless(sender, false);

                API.triggerClientEvent(sender, "skin_select_stop");
                API.setEntityDimension(sender, 0);
            }

            else if (Event == "Sandy Passenger")
            {
                API.setEntityPosition(sender, new Vector3(1616.52, 3571.88, 35.24349));
                API.setEntityRotation(sender, new Vector3(0, 0, -64.50074));

                API.setPlayerNametagVisible(sender, true);

                //var SkinID = API.getEntitySyncedData(sender, "SkinID");

                //API.setPlayerSkin(sender, SkinID);

                var Flare = WeaponHash.FlareGun;
                var Para = WeaponHash.Parachute;

                API.givePlayerWeapon(sender, Flare, 999, false, true);
                API.givePlayerWeapon(sender, Para, 1, false, true);

                API.setEntityPositionFrozen(sender, false);
                API.setEntityCollisionless(sender, false);

                API.triggerClientEvent(sender, "skin_select_stop");
                API.setEntityDimension(sender, 0);
            }

            else if (Event == "Base Jump")
            {
                API.setEntityPosition(sender, new Vector3(-149.1562, -961.2599, 269.1353));
                API.setEntityRotation(sender, new Vector3(0, 0, -114.7388));

                API.setPlayerNametagVisible(sender, true);

                //var SkinID = API.getEntitySyncedData(sender, "SkinID");

                //API.setPlayerSkin(sender, SkinID);

                var Flare = WeaponHash.FlareGun;
                var Para = WeaponHash.Parachute;

                API.givePlayerWeapon(sender, Flare, 999, false, true);
                API.givePlayerWeapon(sender, Para, 1, false, true);

                API.setEntityPositionFrozen(sender, false);
                API.setEntityCollisionless(sender, false);

                API.triggerClientEvent(sender, "skin_select_stop");
                API.setEntityDimension(sender, 0);
            }

            else if (Event == "SkinCam")
            {
                API.setEntityPosition(sender, new Vector3(402.8911, -996.9224, -99.00024));
                API.setEntityRotation(sender, new Vector3(0, 0, 178.7716));
            }

            else if (Event == "Skip")
            {
                API.triggerClientEvent(sender, "skin_select_start");
            }

            else if (Event == "")
            {

            }
        }
        
        [Command("Spawn")]
        public void SpawnCommand(Client player)
        {
            Random rnd = new Random();
            int Dimension = rnd.Next(1, 50);

            bool inVehicle = API.isPlayerInAnyVehicle(player);

            if (inVehicle == true)
            {
                NetHandle vehicle = API.getPlayerVehicle(player);
                API.warpPlayerOutOfVehicle(player);
            }

            API.setEntityPosition(player, new Vector3(-860.561, -2420.079, 134.29277));

            API.setEntityPositionFrozen(player, true);
            API.setEntityCollisionless(player, true);

            API.setEntityDimension(player, Dimension);

            string SkinSelectStart = "skin_select_start";

            //API.setPlayerNametagVisible(player, false);
            API.triggerClientEvent(player, SkinSelectStart, true);
            API.setPlayerNametagVisible(player, false);
        }

        [Command("skip")]
        public void SkipCommand(Client player)
        {
            API.triggerClientEvent(player, "SkipCommand");
        }
    }
}
