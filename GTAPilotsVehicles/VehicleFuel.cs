using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
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

namespace GTAPilotsVehicles
{
    class VehicleFuel : Script
    {
        public VehicleFuel()
        {
            API.onResourceStart += OnResourceStart;
        }

        private void OnResourceStart()
        {

        }

        private void FuelLoad(Vehicle Cars)
        {
            List<NetHandle> AllVehicles = API.getAllVehicles();

            for (var i = 0; i < AllVehicles.Count; i++)
            {
                NetHandle Car = AllVehicles.ElementAt(i);

                bool anyData = API.hasEntityData(Car, "MaxFuel");

                if (anyData == true)
                {
                    int MaxFuel = API.getEntityData(Car, "MaxFuel");
                }
            }
        }

        private void FuelBurn(Vehicle Cars)
        {

        }
    }
}
