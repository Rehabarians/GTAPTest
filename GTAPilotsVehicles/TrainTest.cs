using GrandTheftMultiplayer.Server;
using GrandTheftMultiplayer.Server.API;
using GrandTheftMultiplayer.Server.Managers;
using GrandTheftMultiplayer.Server.Elements;
using GrandTheftMultiplayer.Server.Constant;
using GrandTheftMultiplayer.Shared;
using GrandTheftMultiplayer.Shared.Math;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GTAPilotsVehicles
{
    class TrainTest : Script
    {
        public TrainTest()
        {
            API.onResourceStart += ResourceStart;
            API.onClientEventTrigger += OnClientEventTrigger;
        }

        public void ResourceStart()
        {
            
        }

        private void OnClientEventTrigger(Client sender, string eventName, params object[] arguments)
        {
            if (eventName == "Train")
            {
                VehicleHash Train = (VehicleHash)arguments[0];              
                
                //API.consoleOutput("Train Name? " + CarName);
                API.createVehicle(Train, new Vector3(-310.7538, -234.3152, 13.17152), new Vector3(0, 0, 39.37046), 0, 0);
            }
        }

        [Command("Train")]
        public void GoToTrain(Client Player)
        {
            API.setEntityPosition(Player, new Vector3(-310.7538, -234.3152, 13.17152));
        }
    }
}
