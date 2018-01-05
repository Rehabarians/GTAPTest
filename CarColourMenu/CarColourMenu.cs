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

namespace CarColourMenu
{
    public class CarColourMenu : Script
    {
        public CarColourMenu()
        {
            API.onClientEventTrigger += OnClientEventTrigger;
        }

        private void OnClientEventTrigger(Client sender, string eventName, params object[] arguments)
        {
            if (eventName == "Primary")
            {
                NetHandle Veh = API.getPlayerVehicle(sender);
                API.setVehiclePrimaryColor(Veh, (int)arguments[0]);
            }
            else if (eventName == "Pearlescent")
            {
                NetHandle Veh = API.getPlayerVehicle(sender);
                API.setVehiclePearlescentColor(Veh, (int)arguments[0]);
            }
            else if (eventName == "Secondary")
            {
                NetHandle Veh = API.getPlayerVehicle(sender);
                API.setVehicleSecondaryColor(Veh, (int)arguments[0]);
            }
        }

        [Command("vc", Alias = "VehicleColor")]
        public void VehicleColourCommand(Client sender)
        {
            bool inVeh = API.isPlayerInAnyVehicle(sender);

            if (inVeh == true)
            {
                API.triggerClientEvent(sender, "CarColourMenu");
            }
        }
    }
}
