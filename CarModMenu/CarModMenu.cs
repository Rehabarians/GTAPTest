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

namespace CarModMenu
{
    public class CarModMenu : Script
    {
        public CarModMenu()
        {

        }

        [Command("mv", Alias = "Modveh")]
        public void ModVehicleCommand(Client Player)
        {
            bool InCar = API.isPlayerInAnyVehicle(Player);
            if (InCar == true)
            {
                NetHandle PlayerVehicle = API.getPlayerVehicle(Player);
                Vehicle Car = API.getEntityFromHandle<Vehicle>(PlayerVehicle);
                string CarName = Car.displayName;
                VehicleHash CarHash = API.vehicleNameToModel(CarName);

                Dictionary<int, Dictionary<int, string>> ValidMods = API.getVehicleValidMods(CarHash);

                foreach (var Key in ValidMods.Keys)
                {
                    Dictionary<int, string> ModKey = ValidMods[Key];
                    API.consoleOutput("ModType is: " + Key);
                    //API.triggerClientEvent(Player, "CarModMenuKey", Key);
                    foreach (var KeyMod in ModKey.Keys)
                    {
                        if (ModKey[KeyMod] != "")
                        {
                            string Mods = ModKey[KeyMod];
                            API.consoleOutput("List of Available Mods: " + Mods);

                            //API.triggerClientEvent(Player, "CarModMenu", Mods);
                        }
                    }
                }
            }
        }

        [Command("getbone")]
        public void GetBoneCommand(Client Player)
        {
            bool inVeh = API.isPlayerInAnyVehicle(Player);

            if (inVeh == true)
            {
                NetHandle PlayerVehicle = API.getPlayerVehicle(Player);
                Vehicle Car = API.getEntityFromHandle<Vehicle>(PlayerVehicle);
                string CarName = Car.displayName;
                VehicleHash CarHash = API.vehicleNameToModel(CarName);

                Dictionary<int, string> Bones = API.getVehicleBones(CarHash);

                foreach(var Key in Bones.Keys)
                {
                    string Bone = Bones[Key];
                    API.consoleOutput(Bone);
                }
            }
        }
    }
}
