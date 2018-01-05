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
using System;
using System.Timers;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace GTAPilotsVehicles
{
    class VehicleDespawn : Script
    {

        List<NetHandle> aVehicle = new List<NetHandle>();
        List<DateTime> Delayer = new List<DateTime>();
        bool TimerRunning = false;
        Timer DespawnTimer;

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
            API.onPlayerEnterVehicle += PlayerEnterVehicle;
            API.onPlayerExitVehicle += PlayerExitVehicle;
            API.onVehicleDeath += OnVehicleDeath;
            API.onResourceStop += OnResourceStop;
        }

        public void PlayerEnterVehicle(Client Player, NetHandle Vehicular, int SeatNumber)
        {
            if (TimerRunning == true)
            {
                API.stopTimer(DespawnTimer);
                TimerRunning = false;
            }
        }

        public void PlayerExitVehicle(Client Player, NetHandle Vehicular, int SeatNumber)
        {
            Client[] Occupants = API.getVehicleOccupants(Vehicular);

            if (Occupants.Length == 0 || Occupants == null)
            {
                DespawnTimer = API.startTimer(36000000, true, () =>
                {
                    RespawnVehicles(Vehicular);
                    TimerRunning = true;
                });
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

        public void OnVehicleDeath(NetHandle Vehicle)
        {
            API.delay(20000, true, () =>
            {
                RespawnVehicles(Vehicle);
            });
        }

        public void OnResourceStop()
        {
            if (TimerRunning == true)
            {
                DespawnTimer.Stop();
                DespawnTimer.Dispose();
            }
        }
    }
}
