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

namespace GTAPilotsPeds
{
    public class GTAPilotsPeds : Script
    {
        Ped Pilot;
        Vehicle Luxor;

        public GTAPilotsPeds()
        {
            API.onResourceStart += OnResourceStart;
            API.onClientEventTrigger += OnClientEventTrigger;
            API.onUpdate += OnUpdate;
            //API.onPlayerFinishedDownload += OnPlayerFinishedDownload;
        }

        private void OnResourceStart()
        {
            Pilot = API.createPed(PedHash.Pilot01SMM, new Vector3(), 0);
            Luxor = API.createVehicle(VehicleHash.Luxor, new Vector3(), new Vector3(), 0, 0);
        }

        private void OnClientEventTrigger(Client sender, string eventName, params object[] arguments)
        {
            if (eventName == "PedLocation")
            {

            }
        }

        private void OnUpdate()
        {
            API.triggerClientEventForAll("PedUpdate", Pilot.handle, Pilot.position, Pilot.rotation);
            API.triggerClientEventForAll("VehicleUpdate", Luxor.handle, Luxor.position, Luxor.rotation);
        }
    }
}
