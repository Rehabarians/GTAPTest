using GTANetworkServer;
using GTANetworkShared;
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

        }


        public void ResourceStart()
        {
        }

        [Command("TrainTest", Alias = "Train")]
        public void TrainCommand(Client Player)
        {
            API.sendNativeToPlayer(Player, 0x80D9F74197EA47D9, false);
            
            Vehicle Locomovtive = API.createVehicle(VehicleHash.Freight, new Vector3(613f, 6438f, 31f), new Vector3(0, 0, -177f), 0, 0);
            Vehicle FreightCar = API.createVehicle(VehicleHash.FreightCar, new Vector3(613f, 6438f, 31f), new Vector3(0, 0, -177f), 0, 0);
            Vehicle FreightGrain = API.createVehicle(VehicleHash.FreightGrain, new Vector3(613f, 6438f, 31f), new Vector3(0, 0, -177f), 0, 0);
            Vehicle FreightCont1 = API.createVehicle(VehicleHash.FreightCont1, new Vector3(613f, 6438f, 31f), new Vector3(0, 0, -177f), 0, 0);
            Vehicle FreightCont2 = API.createVehicle(VehicleHash.FreightCont2, new Vector3(613f, 6438f, 31f), new Vector3(0, 0, -177f), 0, 0);
            Vehicle TankerCar = API.createVehicle(VehicleHash.TankerCar, new Vector3(613f, 6438f, 31f), new Vector3(0, 0, -177f), 0, 0);


            API.setEntityPosition(Player, new Vector3(626.68f, 6442.31f, 30.88f));
            API.setEntityRotation(Player, new Vector3(0, 0, -177f));

            API.sendNativeToPlayer(Player, 0x63C6CCA8E68AE8C8, Locomovtive, new Vector3(613f, 6438f, 31f), true);
            API.sendNativeToPlayer(Player, 0xAA0BC91BE0B796E3, Locomovtive, 5f);
            API.sendNativeToPlayer(Player, 0x16469284DB8C62B5, Locomovtive, 5f);

            API.sendNativeToPlayer(Player, 0x63C6CCA8E68AE8C8, FreightCar, new Vector3(613f, 6438f, 31f), true);
            API.sendNativeToPlayer(Player, 0xAA0BC91BE0B796E3, FreightCar, 5f);
            API.sendNativeToPlayer(Player, 0x16469284DB8C62B5, FreightCar, 5f);

            API.sendNativeToPlayer(Player, 0x63C6CCA8E68AE8C8, FreightGrain, new Vector3(613f, 6438f, 31f), true);
            API.sendNativeToPlayer(Player, 0xAA0BC91BE0B796E3, FreightGrain, 5f);
            API.sendNativeToPlayer(Player, 0x16469284DB8C62B5, FreightGrain, 5f);

            API.sendNativeToPlayer(Player, 0x63C6CCA8E68AE8C8, FreightCont1, new Vector3(613f, 6438f, 31f), true);
            API.sendNativeToPlayer(Player, 0xAA0BC91BE0B796E3, FreightCont1, 5f);
            API.sendNativeToPlayer(Player, 0x16469284DB8C62B5, FreightCont1, 5f);

            API.sendNativeToPlayer(Player, 0x63C6CCA8E68AE8C8, FreightCont2, new Vector3(613f, 6438f, 31f), true);
            API.sendNativeToPlayer(Player, 0xAA0BC91BE0B796E3, FreightCont2, 5f);
            API.sendNativeToPlayer(Player, 0x16469284DB8C62B5, FreightCont2, 5f);

            API.sendNativeToPlayer(Player, 0x63C6CCA8E68AE8C8, TankerCar, new Vector3(613f, 6438f, 31f), true);
            API.sendNativeToPlayer(Player, 0xAA0BC91BE0B796E3, TankerCar, 5f);
            API.sendNativeToPlayer(Player, 0x16469284DB8C62B5, TankerCar, 5f);

            Func1(Player);
        }

        public void Func1(Client Player)
        {
            API.sendNativeToPlayer(Player, 0x80D9F74197EA47D9, true);
        }
    }
}
