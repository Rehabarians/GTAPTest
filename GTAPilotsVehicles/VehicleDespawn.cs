using GTANetworkServer;
using GTANetworkShared;
using GTAPilotsVehicles;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace GTAPilotsVehicles
{
    class VehicleDespawn : Script
    {

        List<NetHandle> aVehicle = new List<NetHandle>();
        List<DateTime> Delayer = new List<DateTime>();

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

        public VehicleDespawn()
        {
            API.onResourceStart += ResourceStart;
            API.onPlayerEnterVehicle += PlayerEnterVehicle;
            API.onPlayerExitVehicle += PlayerExitVehicle;
            API.onUpdate += OnUpdate;
        }

        public void ResourceStart()
        {

        }

        public void PlayerEnterVehicle(Client Player, NetHandle Vehicular)
        {
            API.setEntityData(Vehicular, "RespawnTimer", 0);
            API.setEntityData(Vehicular, "RunningTimer", false);
        }

        public void PlayerExitVehicle(Client Player, NetHandle Vehicular)
        {

            API.setEntityData(Vehicular, "RespawnTimer", 0);
            API.setEntityData(Vehicular, "RunningTimer", true);

        }

        //public void Respawning(object o)
        //{
        //    API.consoleOutput("RespawnFM!");
        //    NetHandle theVehicle = aVehicle.First();
        //    List<Client> players = API.getAllPlayers();
        //    List<NetHandle> vehicleList = API.getAllVehicles();

        //    foreach (var player in players)
        //    {
        //        bool vehicleOccupied = API.isPlayerInAnyVehicle(player);

        //        if (vehicleOccupied == false)
        //        {
        //            RespawnVehicles(theVehicle);
        //            aVehicle.Remove(theVehicle);
        //        }
        //    }
        //}

        public void OnUpdate()
        {
            List<NetHandle> allVehicles = API.getAllVehicles();
            List<Client> allPlayers = API.getAllPlayers();
            int TimerToRespawn = 0;

            foreach (var player in allPlayers)
            {
                bool vehicleOccupied = API.isPlayerInAnyVehicle(player);

                if (vehicleOccupied == true)
                {
                    NetHandle playerVehicle = API.getPlayerVehicle(player);

                    API.setEntityData(playerVehicle, "RespawnTimer", 0);
                }

                else if (vehicleOccupied == false)
                {
                    TimerToRespawn = TimerToRespawn + 1;

                    foreach (var vehicles in allVehicles)
                    {
                        bool respawnTimerData = API.hasEntityData(vehicles, "RespawnTimer");
                        bool runningTimerData = API.hasEntityData(vehicles, "RunningTimer");

                        if (respawnTimerData == true)
                        {
                            bool isVehicleToRespawn = API.getEntityData(vehicles, "RunningTimer");

                            if (isVehicleToRespawn == true)
                            {
                                API.setEntityData(vehicles, "RespawnTimer", TimerToRespawn);
                            }
                        }

                        if (respawnTimerData == true)
                        {
                            int respawnTime = API.getEntityData(vehicles, "RespawnTimer");
                            int completeTime = 432000;

                            if (respawnTime == completeTime)
                            {
                                RespawnVehicles(vehicles);
                            }
                        }
                    }
                }

                //API.consoleOutput("Car unoccupied");
                //do
                //{
                //    foreach(var time in Delayer)
                //    {
                //        API.consoleOutput("Checking time");

                //        if (UTCTime == time)
                //        {
                //            API.consoleOutput("Checking Vehicles");

                //            Delayer.Remove(time);

                //            for (var i = 0; i < aVehicle.Capacity; i++)
                //            {
                //                //int currentIntTime = currentTime.Second;

                //                NetHandle theVehicle = aVehicle.ElementAtOrDefault(i);
                //                API.consoleOutput("Time reached! Respawning " + theVehicle);

                //                RespawnVehicles(theVehicle);
                //                aVehicle.RemoveAt(i);

                //            }
                //        }                          
                //    }
                // } while (aVehicle.Count > 0 || Delayer.Count > 0);

            }
        }

        public void RespawnVehicles(NetHandle Vehicular)
        {

            var Respawnable = API.getEntityData(Vehicular, "RESPAWNABLE");
            var vehicleSpawnPos = API.getEntityData(Vehicular, "SPAWN_POS");
            var vehicleType = API.getEntityData(Vehicular, "VehicleType");
            var vehicleCurrentPos = API.getEntityPosition(Vehicular);
            var Occupied = API.getVehicleOccupants(Vehicular);

            if (Occupied.Length == 0 || Occupied == null)
            {

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
}
