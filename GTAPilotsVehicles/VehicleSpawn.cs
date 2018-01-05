using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using GrandTheftMultiplayer.Server;
using GrandTheftMultiplayer.Server.API;
using GrandTheftMultiplayer.Server.Managers;
using GrandTheftMultiplayer.Server.Elements;
using GrandTheftMultiplayer.Server.Constant;
using GrandTheftMultiplayer.Shared;
using GrandTheftMultiplayer.Shared.Math;

namespace GTAPilotsVehicles
{
    public class VehicleSpawn : Script
    {
        private static Random random = new Random();

        public static string RandomString(int length)
        {
            const string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            return new string(Enumerable.Repeat(chars, length)
              .Select(s => s[random.Next(s.Length)]).ToArray());
        }

        public VehicleSpawn()
        {
            API.onResourceStart += ResourceStart;
            //API.onVehicleDeath += OnVehicleDeath;
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

        public void ResourceStart()
        {
            #region Aircraft
                        // Aircraft
                        //--------------------------------------------------------------------------------

                        //VehicleHash AlphaZ1 = VehicleHash.AlphaZ1; //-1523619738
                        VehicleHash Besra = VehicleHash.Besra; //1824333165
                        //VehicleHash Blimp = VehicleHash.Blimp; //-150975354
                        //VehicleHash XeroBlimp = VehicleHash.Blimp2; //-613725916
                        //VehicleHash Bombushka = VehicleHash.Bombushka; //-32878452
                        VehicleHash CargoPlane = VehicleHash.CargoPlane; //368211810
                        VehicleHash Cuban = VehicleHash.Cuban800; //-644710429
                        VehicleHash Dodo = VehicleHash.Dodo; //-901163259
                        //VehicleHash Duster = VehicleHash.Duster; //970356638
                        //VehicleHash Howard = VehicleHash.Howard; //-1007528109
                        VehicleHash Hydra = VehicleHash.Hydra; //970385471
                        //VehicleHash Jet = VehicleHash.Jet; // 1058115860
                        VehicleHash Lazer = VehicleHash.Lazer; //-1281684762
                        //VehicleHash Luxor = VehicleHash.Luxor; //621481054
                        //VehicleHash GoldLuxor = VehicleHash.Luxor2; //-1214293858
                        //VehicleHash Mammatus = VehicleHash.Mammatus; //-1746576111
                        //VehicleHash Microlight = VehicleHash.Microlight; //-1763555241
                        //VehicleHash Milijet = VehicleHash.Miljet; //165154707
                        VehicleHash Mogul = VehicleHash.Mogul; //-749299473
                        VehicleHash Molotok = VehicleHash.Molotok; //1565978651
                        //VehicleHash Nimbus = VehicleHash.Nimbus; //-1295027632
                        //VehicleHash Nokota = VehicleHash.Nokota; //1036591958
                        VehicleHash Pyro = VehicleHash.Pyro; //-1386191424
                        //VehicleHash Rogue = VehicleHash.Rogue; //-975345305
                        //VehicleHash Seabreeze = VehicleHash.Seabreeze; //-392675425
                        VehicleHash Shamal = VehicleHash.Shamal; //-1214505995
                        VehicleHash Starling = VehicleHash.Starling; //-1700874274
                        VehicleHash Stunt = VehicleHash.Stunt; //-2122757008
                        VehicleHash Titan = VehicleHash.Titan; //1981688531
                        //VehicleHash Tula = VehicleHash.Tula; //1043222410
                        //VehicleHash VelumA = VehicleHash.Velum; //-1673356438
                        VehicleHash VelumB = VehicleHash.Velum2; //1077420264
                        //VehicleHash Vestra = VehicleHash.Vestra; //1341619767

                        #region Besra
                        Vector3 spawnPosBesra1 = new Vector3(3111.393, -4765.308, 16.02795);
                        Vector3 headingBesra1 = new Vector3(0, 0, 103.2578);
                        Vehicle Besra1 = API.createVehicle(Besra, spawnPosBesra1, headingBesra1, Colour1(), Colour2(), 0);
                        API.setEntityData(Besra1, "RESPAWNABLE", true);
                        API.setEntityData(Besra1, "SPAWN_POS", spawnPosBesra1);
                        API.setEntityData(Besra1, "SPAWN_ROT", headingBesra1);
                        API.setEntitySyncedData(Besra1, "VehicleType", "Aircraft");
                        API.setEntitySyncedData(Besra1, "Vehicle Class", "Military");
                        API.setEntitySyncedData(Besra1, "Tailnumber", RandomString(4));

                        Vector3 spawnPosBesra2 = new Vector3(3108.863, -4755.526, 16.02755);
                        Vector3 headingBesra2 = new Vector3(0, 0, 103.2578);
                        Vehicle Besra2 = API.createVehicle(Besra, spawnPosBesra2, headingBesra2, Colour1(), Colour2(), 0);
                        API.setEntityData(Besra2, "RESPAWNABLE", true);
                        API.setEntityData(Besra2, "SPAWN_POS", spawnPosBesra2);
                        API.setEntityData(Besra2, "SPAWN_ROT", headingBesra2);
                        API.setEntitySyncedData(Besra2, "VehicleType", "Aircraft");
                        API.setEntitySyncedData(Besra2, "Vehicle Class", "Military");
                        API.setEntitySyncedData(Besra2, "Tailnumber", RandomString(4));
                        #endregion

                        #region CargoPlane
                        //Cargo Planes
                        Vector3 spawnPosCargo1 = new Vector3(-1230.169, -2272.75977, 19.3879356);
                        Vector3 headingCargo1 = new Vector3(0, 0, -118.887772);
                        Vehicle Cargo1 = API.createVehicle(CargoPlane, spawnPosCargo1, headingCargo1, Colour1(), Colour2(), 0); // Default colour 132, 87
                        API.setEntityData(Cargo1, "RESPAWNABLE", true);
                        API.setEntityData(Cargo1, "SPAWN_POS", spawnPosCargo1);
                        API.setEntityData(Cargo1, "SPAWN_ROT", headingCargo1);
                        API.setEntitySyncedData(Cargo1, "VehicleType", "Aircraft");
                        API.setEntitySyncedData(Cargo1, "Tailnumber", RandomString(4));
                        #endregion

                        #region Cuban800
                        //Cuban800
                        Vector3 spawnPosCuban1 = new Vector3(-936.497, -3552.71924, 14.7310314);
                        Vector3 headingCuban1 = new Vector3(0, 0, 20.7639942);
                        Vehicle Cuban1 = API.createVehicle(Cuban, spawnPosCuban1, headingCuban1, Colour1(), Colour2(), 0); // Default colour 132, 85
                        API.setEntityData(Cuban1, "RESPAWNABLE", true);
                        API.setEntityData(Cuban1, "SPAWN_POS", spawnPosCuban1);
                        API.setEntityData(Cuban1, "SPAWN_ROT", headingCuban1);
                        API.setEntitySyncedData(Cuban1, "VehicleType", "Aircraft");
                        API.setEntitySyncedData(Cuban1, "Tailnumber", RandomString(4));

                        Vector3 spawnPosCuban2 = new Vector3(-947.663, -3548.09644, 14.7310314);
                        Vector3 headingCuban2 = new Vector3(0, 0, 21.371954);
                        Vehicle Cuban2 = API.createVehicle(Cuban, spawnPosCuban2, headingCuban2, Colour1(), Colour2(), 0); // Default colour 43, 132
                        API.setEntityData(Cuban2, "RESPAWNABLE", true);
                        API.setEntityData(Cuban2, "SPAWN_POS", spawnPosCuban2);
                        API.setEntityData(Cuban2, "SPAWN_ROT", headingCuban2);
                        API.setEntitySyncedData(Cuban2, "VehicleType", "Aircraft");
                        API.setEntitySyncedData(Cuban2, "Tailnumber", RandomString(4));

                        Vector3 spawnPosCuban3 = new Vector3(-958.3769, -3542.37183, 14.7310314);
                        Vector3 headingCuban3 = new Vector3(0, 0, 21.6942749);
                        Vehicle Cuban3 = API.createVehicle(Cuban, spawnPosCuban3, headingCuban3, Colour1(), Colour2(), 0);
                        API.setEntityData(Cuban3, "RESPAWNABLE", true);
                        API.setEntityData(Cuban3, "SPAWN_POS", spawnPosCuban3);
                        API.setEntityData(Cuban3, "SPAWN_ROT", headingCuban3);
                        API.setEntitySyncedData(Cuban3, "VehicleType", "Aircraft");
                        API.setEntitySyncedData(Cuban3, "Tailnumber", RandomString(4));

                        Vector3 spawnPosCuban4 = new Vector3(-968.8838, -3536.66333, 14.7310314);
                        Vector3 headingCuban4 = new Vector3(0, 0, 22.2055187);
                        Vehicle Cuban4 = API.createVehicle(Cuban, spawnPosCuban4, headingCuban4, Colour1(), Colour2(), 0); //Default colour 85, 132
                        API.setEntityData(Cuban4, "RESPAWNABLE", true);
                        API.setEntityData(Cuban4, "SPAWN_POS", spawnPosCuban4);
                        API.setEntityData(Cuban4, "SPAWN_ROT", headingCuban4);
                        API.setEntitySyncedData(Cuban4, "VehicleType", "Aircraft");
                        API.setEntitySyncedData(Cuban4, "Tailnumber", RandomString(4));

                        Vector3 spawnPosCuban5 = new Vector3(-924.300354, -3530.093, 14.7310314);
                        Vector3 headingCuban5 = new Vector3(0, 0, 101.226044);
                        Vehicle Cuban5 = API.createVehicle(Cuban, spawnPosCuban5, headingCuban5, Colour1(), Colour2(), 0); //Default colour 132, 26
                        API.setEntityData(Cuban5, "RESPAWNABLE", true);
                        API.setEntityData(Cuban5, "SPAWN_POS", spawnPosCuban5);
                        API.setEntityData(Cuban5, "SPAWN_ROT", headingCuban5);
                        API.setEntitySyncedData(Cuban5, "VehicleType", "Aircraft");
                        API.setEntitySyncedData(Cuban5, "Tailnumber", RandomString(4));

                        Vector3 spawnPosCuban6 = new Vector3(-934.7805, -3524.06348, 14.7310314);
                        Vector3 headingCuban6 = new Vector3(0, 0, 101.370079);
                        Vehicle Cuban6 = API.createVehicle(Cuban, spawnPosCuban6, headingCuban6, Colour1(), Colour2(), 0);
                        API.setEntityData(Cuban6, "RESPAWNABLE", true);
                        API.setEntityData(Cuban6, "SPAWN_POS", spawnPosCuban6);
                        API.setEntityData(Cuban6, "SPAWN_ROT", headingCuban6);
                        API.setEntitySyncedData(Cuban6, "VehicleType", "Aircraft");
                        API.setEntitySyncedData(Cuban6, "Tailnumber", RandomString(4));

                        Vector3 spawnPosCuban7 = new Vector3(-944.923462, -3517.609, 14.7310314);
                        Vector3 headingCuban7 = new Vector3(0, 0, 101.902695);
                        Vehicle Cuban7 = API.createVehicle(Cuban, spawnPosCuban7, headingCuban7, Colour1(), Colour2(), 0);
                        API.setEntityData(Cuban7, "RESPAWNABLE", true);
                        API.setEntityData(Cuban7, "SPAWN_POS", spawnPosCuban7);
                        API.setEntityData(Cuban7, "SPAWN_ROT", headingCuban7);
                        API.setEntitySyncedData(Cuban7, "VehicleType", "Aircraft");
                        API.setEntitySyncedData(Cuban7, "Tailnumber", RandomString(4));

                        Vector3 spawnPosCuban8 = new Vector3(-955.738464, -3510.43433, 14.7310314);
                        Vector3 headingCuban8 = new Vector3(0, 0, 102.133163);
                        Vehicle Cuban8 = API.createVehicle(Cuban, spawnPosCuban8, headingCuban8, Colour1(), Colour2(), 0);
                        API.setEntityData(Cuban8, "RESPAWNABLE", true);
                        API.setEntityData(Cuban8, "SPAWN_POS", spawnPosCuban8);
                        API.setEntityData(Cuban8, "SPAWN_ROT", headingCuban8);
                        API.setEntitySyncedData(Cuban8, "VehicleType", "Aircraft");
                        API.setEntitySyncedData(Cuban8, "Tailnumber", RandomString(4));
                        #endregion

                        #region Dodo
                        //Dodos
                        Vector3 spawnPosDodo1 = new Vector3(-802.1094, -1485.841, 1.318904);
                        Vector3 headingDodo1 = new Vector3(0, 0, 107.5842);
                        NetHandle Dodo1 = API.createVehicle(Dodo, spawnPosDodo1, headingDodo1, Colour1(), Colour2(), 0);
                        API.setEntityData(Dodo1, "RESPAWNABLE", true);
                        API.setEntityData(Dodo1, "SPAWN_POS", spawnPosDodo1);
                        API.setEntityData(Dodo1, "SPAWN_ROT", headingDodo1);
                        API.setEntitySyncedData(Dodo1, "VehicleType", "Aircraft");
                        API.setEntitySyncedData(Dodo1, "Tailnumber", RandomString(4));

                        Vector3 spawnPosDodo2 = new Vector3(-795.1345, -1501.811, 1.31769);
                        Vector3 headingDodo2 = new Vector3(0, 0, 113.566);
                        NetHandle Dodo2 = API.createVehicle(Dodo, spawnPosDodo2, headingDodo2, Colour1(), Colour2(), 0);
                        API.setEntityData(Dodo2, "RESPAWNABLE", true);
                        API.setEntityData(Dodo2, "SPAWN_POS", spawnPosDodo2);
                        API.setEntityData(Dodo2, "SPAWN_ROT", headingDodo2);
                        API.setEntitySyncedData(Dodo2, "VehicleType", "Aircraft");
                        API.setEntitySyncedData(Dodo2, "Tailnumber", RandomString(4));

                        Vector3 spawnPosDodo3 = new Vector3(-790.0386, -1517.184, 1.31769);
                        Vector3 headingDodo3 = new Vector3(0, 0, 112.4009);
                        NetHandle Dodo3 = API.createVehicle(Dodo, spawnPosDodo3, headingDodo3, Colour1(), Colour2(), 0);
                        API.setEntityData(Dodo3, "RESPAWNABLE", true);
                        API.setEntityData(Dodo3, "SPAWN_POS", spawnPosDodo3);
                        API.setEntityData(Dodo3, "SPAWN_ROT", headingDodo3);
                        API.setEntitySyncedData(Dodo3, "VehicleType", "Aircraft");
                        API.setEntitySyncedData(Dodo3, "Tailnumber", RandomString(4));
                        #endregion

                        #region Hydra
                        //Hydra
                        Vector3 spawnPosHydra1 = new Vector3(-2118.0083, 3253.8562, 33.34899);
                        Vector3 headingHydra1 = new Vector3(0, 0, 60.88803);
                        Vehicle Hydra1 = API.createVehicle(Hydra, spawnPosHydra1, headingHydra1, Colour1(), Colour2(), 0); //default colours 24, 111
                        API.setEntityData(Hydra1, "RESPAWNABLE", true);
                        API.setEntityData(Hydra1, "SPAWN_POS", spawnPosHydra1);
                        API.setEntityData(Hydra1, "SPAWN_ROT", headingHydra1);
                        API.setEntitySyncedData(Hydra1, "VehicleType", "Aircraft");
                        API.setEntitySyncedData(Hydra1, "Vehicle Class", "Military");
                        API.setEntitySyncedData(Hydra1, "Tailnumber", RandomString(4));

                        Vector3 spawnPosHydra2 = new Vector3(-2129.23, 3234.85352, 33.348835);
                        Vector3 headingHydra2 = new Vector3(0, 0, 57.8906174);
                        Vehicle Hydra2 = API.createVehicle(Hydra, spawnPosHydra2, headingHydra2, Colour1(), Colour2(), 0); //default colours 24, 111
                        API.setEntityData(Hydra2, "RESPAWNABLE", true);
                        API.setEntityData(Hydra2, "SPAWN_POS", spawnPosHydra2);
                        API.setEntityData(Hydra2, "SPAWN_ROT", headingHydra2);
                        API.setEntitySyncedData(Hydra2, "VehicleType", "Aircraft");
                        API.setEntitySyncedData(Hydra2, "Vehicle Class", "Military");
                        API.setEntitySyncedData(Hydra2, "Tailnumber", RandomString(4));

                        Vector3 spawnPosHydra3 = new Vector3(-2159.05957, 3251.48926, 33.3478851);
                        Vector3 headingHydra3 = new Vector3(0, 0, -120.020409);
                        Vehicle Hydra3 = API.createVehicle(Hydra, spawnPosHydra3, headingHydra3, Colour1(), Colour2(), 0); //default colours 24, 111
                        API.setEntityData(Hydra3, "RESPAWNABLE", true);
                        API.setEntityData(Hydra3, "SPAWN_POS", spawnPosHydra3);
                        API.setEntityData(Hydra3, "SPAWN_ROT", headingHydra3);
                        API.setEntitySyncedData(Hydra3, "VehicleType", "Aircraft");
                        API.setEntitySyncedData(Hydra3, "Vehicle Class", "Military");
                        API.setEntitySyncedData(Hydra3, "Tailnumber", RandomString(4));

                        Vector3 spawnPosHydra4 = new Vector3(-2146.514, 3270.665, 33.3483);
                        Vector3 headingHydra4 = new Vector3(0, 0, -118.891594);
                        Vehicle Hydra4 = API.createVehicle(Hydra, spawnPosHydra4, headingHydra4, Colour1(), Colour2(), 0); //default colours 24, 111
                        API.setEntityData(Hydra4, "RESPAWNABLE", true);
                        API.setEntityData(Hydra4, "SPAWN_POS", spawnPosHydra4);
                        API.setEntityData(Hydra4, "SPAWN_ROT", headingHydra4);
                        API.setEntitySyncedData(Hydra4, "VehicleType", "Aircraft");
                        API.setEntitySyncedData(Hydra4, "Vehicle Class", "Military");
                        API.setEntitySyncedData(Hydra4, "Tailnumber", RandomString(4));

                        Vector3 spawnPosHydra5 = new Vector3(-2119.64917, 3281.91016, 33.3479462);
                        Vector3 headingHydra5 = new Vector3(0, 0, 148.342758);
                        Vehicle Hydra5 = API.createVehicle(Hydra, spawnPosHydra5, headingHydra5, Colour1(), Colour2(), 0); //default colours 24, 111
                        API.setEntityData(Hydra5, "RESPAWNABLE", true);
                        API.setEntityData(Hydra5, "SPAWN_POS", spawnPosHydra5);
                        API.setEntityData(Hydra5, "SPAWN_ROT", headingHydra5);
                        API.setEntitySyncedData(Hydra5, "VehicleType", "Aircraft");
                        API.setEntitySyncedData(Hydra5, "Vehicle Class", "Military");
                        API.setEntitySyncedData(Hydra5, "Tailnumber", RandomString(4));

                        Vector3 spawnPosHydra6 = new Vector3(3055.415, -4797.935, 6.611174);
                        Vector3 headingHydra6 = new Vector3(0, 0, 101.7136);
                        Vehicle Hydra6 = API.createVehicle(Hydra, spawnPosHydra6, headingHydra6, Colour1(), Colour2(), 0); //default colours 24, 111
                        API.setEntityData(Hydra6, "RESPAWNABLE", true);
                        API.setEntityData(Hydra6, "SPAWN_POS", spawnPosHydra6);
                        API.setEntityData(Hydra6, "SPAWN_ROT", headingHydra6);
                        API.setEntitySyncedData(Hydra6, "VehicleType", "Aircraft");
                        API.setEntitySyncedData(Hydra6, "Vehicle Class", "Military");
                        API.setEntitySyncedData(Hydra6, "Tailnumber", RandomString(4));

                        Vector3 spawnPosHydra7 = new Vector3(3067.935, -4815.9, 15.80092);
                        Vector3 headingHydra7 = new Vector3(0, 0, -78.37597);
                        Vehicle Hydra7 = API.createVehicle(Hydra, spawnPosHydra7, headingHydra7, Colour1(), Colour2(), 0); //default colours 24, 111
                        API.setEntityData(Hydra7, "RESPAWNABLE", true);
                        API.setEntityData(Hydra7, "SPAWN_POS", spawnPosHydra7);
                        API.setEntityData(Hydra7, "SPAWN_ROT", headingHydra7);
                        API.setEntitySyncedData(Hydra7, "VehicleType", "Aircraft");
                        API.setEntitySyncedData(Hydra7, "Vehicle Class", "Military");
                        API.setEntitySyncedData(Hydra7, "Tailnumber", RandomString(4));
                        #endregion

                        #region Jets
                        // Jets
                        //Vector3 spawnPosJet1 = new Vector3(-1278.309, -2582.4248, 22.7265911);
                        //Vector3 headingJet1 = new Vector3(0, 0, 151.1663);
                        //Vehicle Jet1 = API.createVehicle(Jet, spawnPosJet1, headingJet1, Colour1(), Colour2(), 0); //default colours 24, 111
                        //API.setEntityData(Jet1, "RESPAWNABLE", true);
                        //API.setEntityData(Jet1, "SPAWN_POS", spawnPosJet1);
                        //API.setEntityData(Jet1, "SPAWN_ROT", headingJet1);
                        //API.setEntitySyncedData(Jet1, "VehicleType", "Aircraft");
                        //API.setEntitySyncedData(Jet1, "Tailnumber", RandomString(4));

                        //Vector3 spawnPosJet2 = new Vector3(-1203.815, -2630.622, 22.7361774);
                        //Vector3 headingJet2 = new Vector3(0, 0, 149.681244);
                        //Vehicle Jet2 = API.createVehicle(Jet, spawnPosJet2, headingJet2, Colour1(), Colour2(), 0); //default colours 24, 111
                        //API.setEntityData(Jet2, "RESPAWNABLE", true);
                        //API.setEntityData(Jet2, "SPAWN_POS", spawnPosJet2);
                        //API.setEntityData(Jet2, "SPAWN_ROT", headingJet2);
                        //API.setEntitySyncedData(Jet2, "VehicleType", "Aircraft");
                        //API.setEntitySyncedData(Jet2, "Tailnumber", RandomString(4));

                        //Vector3 spawnPosJet3 = new Vector3(-1346.628, -2694.856, 22.7203388);
                        //Vector3 headingJet3 = new Vector3(0, 0, -31.9421673);
                        //Vehicle Jet3 = API.createVehicle(Jet, spawnPosJet3, headingJet3, Colour1(), Colour2(), 0); //default colours 24, 111
                        //API.setEntityData(Jet3, "RESPAWNABLE", true);
                        //API.setEntityData(Jet3, "SPAWN_POS", spawnPosJet3);
                        //API.setEntityData(Jet3, "SPAWN_ROT", headingJet3);
                        //API.setEntitySyncedData(Jet3, "VehicleType", "Aircraft");
                        //API.setEntitySyncedData(Jet3, "Tailnumber", RandomString(4));
                        #endregion

                        #region Lazer
                        //Lazer
                        Vector3 spawnPosLazer1 = new Vector3(-2262.00659, 3222.20166, 33.3141632);
                        Vector3 headingLazer1 = new Vector3(0, 0, -118.672508);
                        Vehicle Lazer1 = API.createVehicle(Lazer, spawnPosLazer1, headingLazer1, Colour1(), Colour2(), 0); //default colours 24, 111
                        API.setEntityData(Lazer1, "RESPAWNABLE", true);
                        API.setEntityData(Lazer1, "SPAWN_POS", spawnPosLazer1);
                        API.setEntityData(Lazer1, "SPAWN_ROT", headingLazer1);
                        API.setEntitySyncedData(Lazer1, "VehicleType", "Aircraft");
                        API.setEntitySyncedData(Lazer1, "Vehicle Class", "Military");
                        API.setEntitySyncedData(Lazer1, "Tailnumber", RandomString(4));

                        Vector3 spawnPosLazer2 = new Vector3(-2248.29077, 3246.921, 33.3144035);
                        Vector3 headingLazer2 = new Vector3(0, 0, -119.854431);
                        Vehicle Lazer2 = API.createVehicle(Lazer, spawnPosLazer2, headingLazer2, Colour1(), Colour2(), 0); //default colours 24, 111
                        API.setEntityData(Lazer2, "RESPAWNABLE", true);
                        API.setEntityData(Lazer2, "SPAWN_POS", spawnPosLazer2);
                        API.setEntityData(Lazer2, "SPAWN_ROT", headingLazer2);
                        API.setEntitySyncedData(Lazer2, "VehicleType", "Aircraft");
                        API.setEntitySyncedData(Lazer2, "Vehicle Class", "Military");
                        API.setEntitySyncedData(Lazer2, "Tailnumber", RandomString(4));

                        Vector3 spawnPosLazer3 = new Vector3(-2013.82654, 2948.21484, 33.31427);
                        Vector3 headingLazer3 = new Vector3(0, 0, -32.78273);
                        Vehicle Lazer3 = API.createVehicle(Lazer, spawnPosLazer3, headingLazer3, Colour1(), Colour2(), 0); //default colours 24, 111
                        API.setEntityData(Lazer3, "RESPAWNABLE", true);
                        API.setEntityData(Lazer3, "SPAWN_POS", spawnPosLazer3);
                        API.setEntityData(Lazer3, "SPAWN_ROT", headingLazer3);
                        API.setEntitySyncedData(Lazer3, "VehicleType", "Aircraft");
                        API.setEntitySyncedData(Lazer3, "Vehicle Class", "Military");
                        API.setEntitySyncedData(Lazer3, "Tailnumber", RandomString(4));

                        Vector3 spawnPosLazer4 = new Vector3(-2144.28149, 3020.399, 33.3413277);
                        Vector3 headingLazer4 = new Vector3(0, 0, -31.3264828);
                        Vehicle Lazer4 = API.createVehicle(Lazer, spawnPosLazer4, headingLazer4, Colour1(), Colour2(), 0); //default colours 24, 111
                        API.setEntityData(Lazer4, "RESPAWNABLE", true);
                        API.setEntityData(Lazer4, "SPAWN_POS", spawnPosLazer4);
                        API.setEntityData(Lazer4, "SPAWN_ROT", headingLazer4);
                        API.setEntitySyncedData(Lazer4, "VehicleType", "Aircraft");
                        API.setEntitySyncedData(Lazer4, "Vehicle Class", "Military");
                        API.setEntitySyncedData(Lazer4, "Tailnumber", RandomString(4));

                        Vector3 spawnPosLazer5 = new Vector3(3070.443, -4609.876, 15.76557);
                        Vector3 headingLazer5 = new Vector3(0, 0, 108.0616);
                        Vehicle Lazer5 = API.createVehicle(Lazer, spawnPosLazer5, headingLazer5, Colour1(), Colour2(), 0); //default colours 24, 111
                        API.setEntityData(Lazer5, "RESPAWNABLE", true);
                        API.setEntityData(Lazer5, "SPAWN_POS", spawnPosLazer5);
                        API.setEntityData(Lazer5, "SPAWN_ROT", headingLazer5);
                        API.setEntitySyncedData(Lazer5, "VehicleType", "Aircraft");
                        API.setEntitySyncedData(Lazer5, "Vehicle Class", "Military");
                        API.setEntitySyncedData(Lazer5, "Tailnumber", RandomString(4));

                        Vector3 spawnPosLazer6 = new Vector3(3073.621, -4621.104, 15.76584);
                        Vector3 headingLazer6 = new Vector3(0, 0, 105.093);
                        Vehicle Lazer6 = API.createVehicle(Lazer, spawnPosLazer6, headingLazer6, Colour1(), Colour2(), 0); //default colours 24, 111
                        API.setEntityData(Lazer6, "RESPAWNABLE", true);
                        API.setEntityData(Lazer6, "SPAWN_POS", spawnPosLazer6);
                        API.setEntityData(Lazer6, "SPAWN_ROT", headingLazer6);
                        API.setEntitySyncedData(Lazer6, "VehicleType", "Aircraft");
                        API.setEntitySyncedData(Lazer6, "Vehicle Class", "Military");
                        API.setEntitySyncedData(Lazer6, "Tailnumber", RandomString(4));
                        #endregion

                        #region Mammatus
                        //Mammatus
                        //Vector3 spawnPosMammatus1 = new Vector3(1194.877, 330.3173, 81.99087);
                        //Vector3 headingMammatus1 = new Vector3(0, 0, -126.6651);
                        //Vehicle Mammatus1 = API.createVehicle(Mammatus, spawnPosMammatus1, headingMammatus1, Colour1(), Colour2(), 0); //default colours 111, 64
                        //API.setEntityData(Mammatus1, "RESPAWNABLE", true);
                        //API.setEntityData(Mammatus1, "SPAWN_POS", spawnPosMammatus1);
                        //API.setEntityData(Mammatus1, "SPAWN_ROT", headingMammatus1);
                        //API.setEntitySyncedData(Mammatus1, "VehicleType", "Aircraft");
                        //API.setEntitySyncedData(Mammatus1, "Tailnumber", RandomString(4));

                        //Vector3 spawnPosMammatus2 = new Vector3(1190.285, 322.1821, 81.99087);
                        //Vector3 headingMammatus2 = new Vector3(0, 0, -122.2232);
                        //Vehicle Mammatus2 = API.createVehicle(Mammatus, spawnPosMammatus2, headingMammatus2, Colour1(), Colour2(), 0); //default colours 111, 64
                        //API.setEntityData(Mammatus2, "RESPAWNABLE", true);
                        //API.setEntityData(Mammatus2, "SPAWN_POS", spawnPosMammatus2);
                        //API.setEntityData(Mammatus2, "SPAWN_ROT", headingMammatus2);
                        //API.setEntitySyncedData(Mammatus2, "VehicleType", "Aircraft");
                        //API.setEntitySyncedData(Mammatus2, "Tailnumber", RandomString(4));
                        #endregion

                        #region Mogul
                        Vector3 spawnPosMogul1 = new Vector3(3040.232, -4743.537, 15.64672);
                        Vector3 headingMogul1 = new Vector3(0, 0, -73.91326);
                        Vehicle Mogul1 = API.createVehicle(Mogul, spawnPosMogul1, headingMogul1, Colour1(), Colour2(), 0);
                        API.setEntityData(Mogul1, "RESPAWNABLE", true);
                        API.setEntityData(Mogul1, "SPAWN_POS", spawnPosMogul1);
                        API.setEntityData(Mogul1, "SPAWN_ROT", headingMogul1);
                        API.setEntitySyncedData(Mogul1, "VehicleType", "Aircraft");
                        API.setEntitySyncedData(Mogul1, "Vehicle Class", "Military");
                        API.setEntitySyncedData(Mogul1, "Tailnumber", RandomString(4));
                        #endregion

                        #region Molotok
                        Vector3 spawnPosMolotok1 = new Vector3(3099.496, -4732.865, 15.63359);
                        Vector3 headingMolotok1 = new Vector3(0, 0, 99.25408);
                        Vehicle Molotok1 = API.createVehicle(Molotok, spawnPosMolotok1, headingMolotok1, Colour1(), Colour2(), 0);
                        API.setEntityData(Molotok1, "RESPAWNABLE", true);
                        API.setEntityData(Molotok1, "SPAWN_POS", spawnPosMolotok1);
                        API.setEntityData(Molotok1, "SPAWN_ROT", headingMolotok1);
                        API.setEntitySyncedData(Molotok1, "VehicleType", "Aircraft");
                        API.setEntitySyncedData(Molotok1, "Vehicle Class", "Military");
                        API.setEntitySyncedData(Molotok1, "Tailnumber", RandomString(4));

                        Vector3 spawnPosMolotok2 = new Vector3(3104.75, -4743.732, 15.62958);
                        Vector3 headingMolotok2 = new Vector3(0, 0, 99.25408);
                        Vehicle Molotok2 = API.createVehicle(Molotok, spawnPosMolotok2, headingMolotok2, Colour1(), Colour2(), 0);
                        API.setEntityData(Molotok2, "RESPAWNABLE", true);
                        API.setEntityData(Molotok2, "SPAWN_POS", spawnPosMolotok2);
                        API.setEntityData(Molotok2, "SPAWN_ROT", headingMolotok2);
                        API.setEntitySyncedData(Molotok2, "VehicleType", "Aircraft");
                        API.setEntitySyncedData(Molotok2, "Vehicle Class", "Military");
                        API.setEntitySyncedData(Molotok2, "Tailnumber", RandomString(4));
                        #endregion

                        #region Pyro
                        Vector3 spawnPosPyro1 = new Vector3(3049.838, -4770.539, 15.40686);
                        Vector3 headingPyro1 = new Vector3(0, 0, -76.09621);
                        Vehicle Pyro1 = API.createVehicle(Pyro, spawnPosPyro1, headingPyro1, Colour1(), Colour2(), 0);
                        API.setEntityData(Pyro1, "RESPAWNABLE", true);
                        API.setEntityData(Pyro1, "SPAWN_POS", spawnPosPyro1);
                        API.setEntityData(Pyro1, "SPAWN_ROT", headingPyro1);
                        API.setEntitySyncedData(Pyro1, "VehicleType", "Aircraft");
                        API.setEntitySyncedData(Pyro1, "Vehicle Class", "Military");
                        API.setEntitySyncedData(Pyro1, "Tailnumber", RandomString(4));

                        Vector3 spawnPosPyro2 = new Vector3(3046.038, -4757.531, 15.40691);
                        Vector3 headingPyro2 = new Vector3(0, 0, -76.09621);
                        Vehicle Pyro2 = API.createVehicle(Pyro, spawnPosPyro2, headingPyro2, Colour1(), Colour2(), 0);
                        API.setEntityData(Pyro2, "RESPAWNABLE", true);
                        API.setEntityData(Pyro2, "SPAWN_POS", spawnPosPyro2);
                        API.setEntityData(Pyro2, "SPAWN_ROT", headingPyro2);
                        API.setEntitySyncedData(Pyro2, "VehicleType", "Aircraft");
                        API.setEntitySyncedData(Pyro2, "Vehicle Class", "Military");
                        API.setEntitySyncedData(Pyro2, "Tailnumber", RandomString(4));
                        #endregion

                        #region Shamals
                        //Shamals
                        Vector3 spawnPosShamal1 = new Vector3(-1059.72766, -3396.042, 14.5126553);
                        Vector3 headingShamal1 = new Vector3(0, 0, 150.697922);
                        Vehicle Shamal1 = API.createVehicle(Shamal, spawnPosShamal1, headingShamal1, Colour1(), Colour2(), 0); //default colours 111, 64
                        API.setEntityData(Shamal1, "RESPAWNABLE", true);
                        API.setEntityData(Shamal1, "SPAWN_POS", spawnPosShamal1);
                        API.setEntityData(Shamal1, "SPAWN_ROT", headingShamal1);
                        API.setEntitySyncedData(Shamal1, "VehicleType", "Aircraft");
                        API.setEntitySyncedData(Shamal1, "Tailnumber", RandomString(4));

                        Vector3 spawnPosShamal2 = new Vector3(-1072.56018, -3388.15283, 14.5505562);
                        Vector3 headingShamal2 = new Vector3(0, 0, 146.696579);
                        Vehicle Shamal2 = API.createVehicle(Shamal, spawnPosShamal2, headingShamal2, Colour1(), Colour2(), 0); //default colours 111, 64
                        API.setEntityData(Shamal2, "RESPAWNABLE", true);
                        API.setEntityData(Shamal2, "SPAWN_POS", spawnPosShamal2);
                        API.setEntityData(Shamal2, "SPAWN_ROT", headingShamal2);
                        API.setEntitySyncedData(Shamal2, "VehicleType", "Aircraft");
                        API.setEntitySyncedData(Shamal2, "Tailnumber", RandomString(4));

                        Vector3 spawnPosShamal3 = new Vector3(-1084.98535, -3379.72021, 14.5505562);
                        Vector3 headingShamal3 = new Vector3(0, 0, 146.696579);
                        Vehicle Shamal3 = API.createVehicle(Shamal, spawnPosShamal3, headingShamal3, Colour1(), Colour2(), 0); //default colours 111, 64
                        API.setEntityData(Shamal3, "RESPAWNABLE", true);
                        API.setEntityData(Shamal3, "SPAWN_POS", spawnPosShamal3);
                        API.setEntityData(Shamal3, "SPAWN_ROT", headingShamal3);
                        API.setEntitySyncedData(Shamal3, "VehicleType", "Aircraft");
                        API.setEntitySyncedData(Shamal3, "Tailnumber", RandomString(4));

                        Vector3 spawnPosShamal4 = new Vector3(-1098.39282, -3371.32471, 14.5505562);
                        Vector3 headingShamal4 = new Vector3(0, 0, 146.696579);
                        Vehicle Shamal4 = API.createVehicle(Shamal, spawnPosShamal4, headingShamal4, Colour1(), Colour2(), 0); //default colours 111, 64
                        API.setEntityData(Shamal4, "RESPAWNABLE", true);
                        API.setEntityData(Shamal4, "SPAWN_POS", spawnPosShamal4);
                        API.setEntityData(Shamal4, "SPAWN_ROT", headingShamal4);
                        API.setEntitySyncedData(Shamal4, "VehicleType", "Aircraft");
                        API.setEntitySyncedData(Shamal4, "Tailnumber", RandomString(4));
                        #endregion

                        #region Starling
                        Vector3 spawnPosStarling1 = new Vector3(3085.811, -4668.625, 15.30054);
                        Vector3 headingStarling1 = new Vector3(0, 0, 109.2286);
                        Vehicle Starling1 = API.createVehicle(Starling, spawnPosStarling1, headingStarling1, Colour1(), Colour2(), 0);
                        API.setEntityData(Starling1, "RESPAWNABLE", true);
                        API.setEntityData(Starling1, "SPAWN_POS", spawnPosStarling1);
                        API.setEntityData(Starling1, "SPAWN_ROT", headingStarling1);
                        API.setEntitySyncedData(Starling1, "VehicleType", "Aircraft");
                        API.setEntitySyncedData(Starling1, "Vehicle Class", "Military");
                        API.setEntitySyncedData(Starling1, "Tailnumber", RandomString(4));

                        Vector3 spawnPosStarling2 = new Vector3(3089.06, -4677.905, 15.3007);
                        Vector3 headingStarling2 = new Vector3(0, 0, 109.2286);
                        Vehicle Starling2 = API.createVehicle(Starling, spawnPosStarling2, headingStarling2, Colour1(), Colour2(), 0);
                        API.setEntityData(Starling2, "RESPAWNABLE", true);
                        API.setEntityData(Starling2, "SPAWN_POS", spawnPosStarling2);
                        API.setEntityData(Starling2, "SPAWN_ROT", headingStarling2);
                        API.setEntitySyncedData(Starling2, "VehicleType", "Aircraft");
                        API.setEntitySyncedData(Starling2, "Vehicle Class", "Military");
                        API.setEntitySyncedData(Starling2, "Tailnumber", RandomString(4));
                        #endregion

                        #region Stunt
                        //Stunt
                        Vector3 spawnPosStunt1 = new Vector3(1182.67, 310.688, 81.99087);
                        Vector3 headingStunt1 = new Vector3(0, 0, -125.0625);
                        Vehicle Stunt1 = API.createVehicle(Stunt, spawnPosStunt1, headingStunt1, Colour1(), Colour2(), 0); //default colours 111, 64
                        API.setEntityData(Stunt1, "RESPAWNABLE", true);
                        API.setEntityData(Stunt1, "SPAWN_POS", spawnPosStunt1);
                        API.setEntityData(Stunt1, "SPAWN_ROT", headingStunt1);
                        API.setEntitySyncedData(Stunt1, "VehicleType", "Aircraft");
                        API.setEntitySyncedData(Stunt1, "Tailnumber", RandomString(4));

                        Vector3 spawnPosStunt2 = new Vector3(1174.802, 298.3708, 81.99087);
                        Vector3 headingStunt2 = new Vector3(0, 0, -123.6493);
                        Vehicle Stunt2 = API.createVehicle(Stunt, spawnPosStunt2, headingStunt2, Colour1(), Colour2(), 0); //default colours 111, 64
                        API.setEntityData(Stunt2, "RESPAWNABLE", true);
                        API.setEntityData(Stunt2, "SPAWN_POS", spawnPosStunt2);
                        API.setEntityData(Stunt2, "SPAWN_ROT", headingStunt2);
                        API.setEntitySyncedData(Stunt2, "VehicleType", "Aircraft");
                        API.setEntitySyncedData(Stunt2, "Tailnumber", RandomString(4));

                        Vector3 spawnPosStunt3 = new Vector3(1196.728, 329.3923, 82.1721);
                        Vector3 headingStunt3 = new Vector3(0, 0, -120.5275);
                        Vehicle Stunt3 = API.createVehicle(Stunt, spawnPosStunt3, headingStunt3, Colour1(), Colour2(), 0); //default colours 111, 64
                        API.setEntityData(Stunt3, "RESPAWNABLE", true);
                        API.setEntityData(Stunt3, "SPAWN_POS", spawnPosStunt3);
                        API.setEntityData(Stunt3, "SPAWN_ROT", headingStunt3);
                        API.setEntitySyncedData(Stunt3, "VehicleType", "Aircraft");
                        API.setEntitySyncedData(Stunt3, "Tailnumber", RandomString(4));
                        #endregion

                        #region Titan
                        //Titan
                        Vector3 spawnPosTitan1 = new Vector3(-2183.051, 3178.24341, 33.65119);
                        Vector3 headingTitan1 = new Vector3(0, 0, -29.7880516);
                        Vehicle Titan1 = API.createVehicle(Titan, spawnPosTitan1, headingTitan1, Colour1(), Colour2(), 0); //default colours 111, 64
                        API.setEntityData(Titan1, "RESPAWNABLE", true);
                        API.setEntityData(Titan1, "SPAWN_POS", spawnPosTitan1);
                        API.setEntityData(Titan1, "SPAWN_ROT", headingTitan1);
                        API.setEntitySyncedData(Titan1, "VehicleType", "Aircraft");
                        API.setEntitySyncedData(Titan1, "Tailnumber", RandomString(4));

                        Vector3 spawnPosTitan2 = new Vector3(-2116.72388, 3143.38354, 33.65116);
                        Vector3 headingTitan2 = new Vector3(0, 0, -29.7813129);
                        Vehicle Titan2 = API.createVehicle(Titan, spawnPosTitan2, headingTitan2, Colour1(), Colour2(), 0); //default colours 111, 64
                        API.setEntityData(Titan2, "RESPAWNABLE", true);
                        API.setEntityData(Titan2, "SPAWN_POS", spawnPosTitan2);
                        API.setEntityData(Titan2, "SPAWN_ROT", headingTitan2);
                        API.setEntitySyncedData(Titan2, "VehicleType", "Aircraft");
                        API.setEntitySyncedData(Titan2, "Tailnumber", RandomString(4));

                        Vector3 spawnPosTitan3 = new Vector3(-2051.637, 3105.48486, 33.65029);
                        Vector3 headingTitan3 = new Vector3(0, 0, -29.78688);
                        Vehicle Titan3 = API.createVehicle(Titan, spawnPosTitan3, headingTitan3, Colour1(), Colour2(), 0); //default colours 111, 64
                        API.setEntityData(Titan3, "RESPAWNABLE", true);
                        API.setEntityData(Titan3, "SPAWN_POS", spawnPosTitan3);
                        API.setEntityData(Titan3, "SPAWN_ROT", headingTitan3);
                        API.setEntitySyncedData(Titan3, "VehicleType", "Aircraft");
                        API.setEntitySyncedData(Titan3, "Tailnumber", RandomString(4));
                        #endregion

                        #region Velum2
                                    // Velum 2
                                    Vector3 spawnPosVelum1 = new Vector3(-1295.203, -3394.8623, 15.1093855);
                                    Vector3 headingVelum1 = new Vector3(0, 0, 159.425369);
                                    Vehicle Velum1 = API.createVehicle(VelumB, spawnPosVelum1, headingVelum1, Colour1(), Colour2(), 0);
                                    API.setEntityData(Velum1, "RESPAWNABLE", true);
                                    API.setEntityData(Velum1, "SPAWN_POS", spawnPosVelum1);
                                    API.setEntityData(Velum1, "SPAWN_ROT", headingVelum1);
                                    API.setEntitySyncedData(Velum1, "VehicleType", "Aircraft");
                                    API.setEntitySyncedData(Velum1, "Tailnumber", RandomString(4));

                                    Vector3 spawnPosVelum2 = new Vector3(-1272.89966, -3406.6062, 15.1094847);
                                    Vector3 headingVelum2 = new Vector3(0, 0, 157.943192);
                                    Vehicle Velum2 = API.createVehicle(VelumB, spawnPosVelum2, headingVelum2, Colour1(), Colour2(), 0);
                                    API.setEntityData(Velum2, "RESPAWNABLE", true);
                                    API.setEntityData(Velum2, "SPAWN_POS", spawnPosVelum2);
                                    API.setEntityData(Velum2, "SPAWN_ROT", headingVelum2);
                                    API.setEntitySyncedData(Velum2, "VehicleType", "Aircraft");
                                    API.setEntitySyncedData(Velum2, "Tailnumber", RandomString(4));
                        #endregion


                        //-------------------------------------------------------------------------------------
                        #endregion

            #region Helicopters
            // Helicopters
            //--------------------------------------------------------------------------------------

            VehicleHash BuzzardA = VehicleHash.Buzzard; //788747387
            VehicleHash BuzzardB = VehicleHash.Buzzard2; //745926877
            VehicleHash FroggerA = VehicleHash.Frogger; //744705981
            //VehicleHash FroggerB = VehicleHash.Frogger2; //1949211328
            //VehicleHash Havok = VehicleHash.Havok;
            VehicleHash Hunter = VehicleHash.Hunter;
            VehicleHash Maverick = VehicleHash.Maverick; //-1660661558
            VehicleHash PolMav = VehicleHash.Polmav; //353883353
            VehicleHash Savage = VehicleHash.Savage; //-82626025
            VehicleHash Valkyrie = VehicleHash.Valkyrie; //-1600252419

            #region Buzzard
            //Buzzard
            Vector3 spawnPosBuzzardA1 = new Vector3(-1877.13062, 2805.37939, 32.70498);
            Vector3 headingBuzzardA1 = new Vector3(0, 0, -31.5991383);
            Vehicle BuzzardA1 = API.createVehicle(BuzzardA, spawnPosBuzzardA1, headingBuzzardA1, Colour1(), Colour2(), 0); //Defalut colours 6, 30
            API.setEntityData(BuzzardA1, "RESPAWNABLE", true);
            API.setEntityData(BuzzardA1, "SPAWN_POS", spawnPosBuzzardA1);
            API.setEntityData(BuzzardA1, "SPAWN_ROT", headingBuzzardA1);
            API.setEntitySyncedData(BuzzardA1, "VehicleType", "Aircraft");
            API.setEntitySyncedData(BuzzardA1, "Tailnumber", RandomString(4));

            Vector3 spawnPosBuzzardA2 = new Vector3(-1859.46826, 2795.797, 32.70481);
            Vector3 headingBuzzardA2 = new Vector3(0, 0, -28.667057);
            Vehicle BuzzardA2 = API.createVehicle(BuzzardA, spawnPosBuzzardA2, headingBuzzardA2, Colour1(), Colour2(), 0); //Defalut colours 6, 30
            API.setEntityData(BuzzardA2, "RESPAWNABLE", true);
            API.setEntityData(BuzzardA2, "SPAWN_POS", spawnPosBuzzardA2);
            API.setEntityData(BuzzardA2, "SPAWN_ROT", headingBuzzardA2);
            API.setEntitySyncedData(BuzzardA2, "VehicleType", "Aircraft");
            API.setEntitySyncedData(BuzzardA2, "Tailnumber", RandomString(4));
            #endregion

            #region Buzzard2
            //Buzzard2
            Vector3 spawnPosBuzzardB1 = new Vector3(-722.18, -1472.812, 5.000522);
            Vector3 headingBuzzardB1 = new Vector3(0, 0, 45.2729);
            Vehicle BuzzardB1 = API.createVehicle(BuzzardB, spawnPosBuzzardB1, headingBuzzardB1, Colour1(), Colour2(), 0); //Defalut colours 6, 30
            API.setEntityData(BuzzardB1, "RESPAWNABLE", true);
            API.setEntityData(BuzzardB1, "SPAWN_POS", spawnPosBuzzardB1);
            API.setEntityData(BuzzardB1, "SPAWN_ROT", headingBuzzardB1);
            API.setEntitySyncedData(BuzzardB1, "VehicleType", "Aircraft");
            API.setEntitySyncedData(BuzzardB1, "Tailnumber", RandomString(4));

            Vector3 spawnPosBuzzardB2 = new Vector3(-701.374, -1446.486, 5.000522);
            Vector3 headingBuzzardB2 = new Vector3(0, 0, 46.04868);
            Vehicle BuzzardB2 = API.createVehicle(BuzzardB, spawnPosBuzzardB2, headingBuzzardB2, Colour1(), Colour2(), 0); //Defalut colours 6, 30
            API.setEntityData(BuzzardB2, "RESPAWNABLE", true);
            API.setEntityData(BuzzardB2, "SPAWN_POS", spawnPosBuzzardB2);
            API.setEntityData(BuzzardB2, "SPAWN_ROT", headingBuzzardB2);
            API.setEntitySyncedData(BuzzardB2, "VehicleType", "Aircraft");
            API.setEntitySyncedData(BuzzardB2, "Tailnumber", RandomString(4));
            #endregion

            #region Frogger
            //Frogger
            Vector3 spawnPosFroggerA1 = new Vector3(-724.6118, -1444.323, 5.000521);
            Vector3 headingFroggerA1 = new Vector3(0, 0, -42.18202);
            Vehicle FroggerA1 = API.createVehicle(FroggerA, spawnPosFroggerA1, headingFroggerA1, Colour1(), Colour2(), 0); //Defalut colours 6, 30
            API.setEntityData(FroggerA1, "RESPAWNABLE", true);
            API.setEntityData(FroggerA1, "SPAWN_POS", spawnPosFroggerA1);
            API.setEntityData(FroggerA1, "SPAWN_ROT", headingFroggerA1);
            API.setEntitySyncedData(FroggerA1, "VehicleType", "Aircraft");
            API.setEntitySyncedData(FroggerA1, "Tailnumber", RandomString(4));

            Vector3 spawnPosFroggerA2 = new Vector3(-745.5242, -1468.654, 5.00052);
            Vector3 headingFroggerA2 = new Vector3(0, 0, -42.87166);
            Vehicle FroggerA2 = API.createVehicle(FroggerA, spawnPosFroggerA2, headingFroggerA2, Colour1(), Colour2(), 0); //Defalut colours 6, 30
            API.setEntityData(FroggerA2, "RESPAWNABLE", true);
            API.setEntityData(FroggerA2, "SPAWN_POS", spawnPosFroggerA2);
            API.setEntityData(FroggerA2, "SPAWN_ROT", headingFroggerA2);
            API.setEntitySyncedData(FroggerA2, "VehicleType", "Aircraft");
            API.setEntitySyncedData(FroggerA2, "Tailnumber", RandomString(4));
            #endregion

            #region Hunter
            Vector3 spawnPosHunter1 = new Vector3(3118.903, -4787.12, 16.62642);
            Vector3 headingHunter1 = new Vector3(0, 0, 47.04763);
            Vehicle Hunter1 = API.createVehicle(Hunter, spawnPosHunter1, headingHunter1, Colour1(), Colour2(), 0); //Defalut colours 6, 30
            API.setEntityData(Hunter1, "RESPAWNABLE", true);
            API.setEntityData(Hunter1, "SPAWN_POS", spawnPosHunter1);
            API.setEntityData(Hunter1, "SPAWN_ROT", headingHunter1);
            API.setEntitySyncedData(Hunter1, "VehicleType", "Aircraft");
            API.setEntitySyncedData(Hunter1, "Vehicle Class", "Military");
            API.setEntitySyncedData(Hunter1, "Tailnumber", RandomString(4));

            Vector3 spawnPosHunter2 = new Vector3(3079.067, -4646.01, 7.430606);
            Vector3 headingHunter2 = new Vector3(0, 0, -76.00796);
            Vehicle Hunter2 = API.createVehicle(Hunter, spawnPosHunter2, headingHunter2, Colour1(), Colour2(), 0); //Defalut colours 6, 30
            API.setEntityData(Hunter2, "RESPAWNABLE", true);
            API.setEntityData(Hunter2, "SPAWN_POS", spawnPosHunter2);
            API.setEntityData(Hunter2, "SPAWN_ROT", headingHunter2);
            API.setEntitySyncedData(Hunter2, "VehicleType", "Aircraft");
            API.setEntitySyncedData(Hunter2, "Vehicle Class", "Military");
            API.setEntitySyncedData(Hunter2, "Tailnumber", RandomString(4));
            #endregion

            #region Maverick
            //Maverick
            Vector3 spawnPosMaverick1 = new Vector3(-1112.197, -2883.10132, 14.0434551);
                        Vector3 headingMaverick1 = new Vector3(0, 0, 150.070465);
                        Vehicle Maverick1 = API.createVehicle(Maverick, spawnPosMaverick1, headingMaverick1, Colour1(), Colour2(), 0); //Defalut colours 6, 30
                        API.setEntityData(Maverick1, "RESPAWNABLE", true);
                        API.setEntityData(Maverick1, "SPAWN_POS", spawnPosMaverick1);
                        API.setEntityData(Maverick1, "SPAWN_ROT", headingMaverick1);
                        API.setEntitySyncedData(Maverick1, "VehicleType", "Aircraft");
                        API.setEntitySyncedData(Maverick1, "Tailnumber", RandomString(4));

                        Vector3 spawnPosMaverick2 = new Vector3(-1145.45435, -2863.533, 14.0431623);
                        Vector3 headingMaverick2 = new Vector3(0, 0, 148.062973);
                        Vehicle Maverick2 = API.createVehicle(Maverick, spawnPosMaverick2, headingMaverick2, Colour1(), Colour2(), 0); //Defalut colours 64, 0
                        API.setEntityData(Maverick2, "RESPAWNABLE", true);
                        API.setEntityData(Maverick2, "SPAWN_POS", spawnPosMaverick2);
                        API.setEntityData(Maverick2, "SPAWN_ROT", headingMaverick2);
                        API.setEntitySyncedData(Maverick2, "VehicleType", "Aircraft");
                        API.setEntitySyncedData(Maverick2, "Tailnumber", RandomString(4));

                        Vector3 spawnPosMaverick3 = new Vector3(-1178.23145, -2845.15845, 14.042943);
                        Vector3 headingMaverick3 = new Vector3(0, 0, 148.953522);
                        Vehicle Maverick3 = API.createVehicle(Maverick, spawnPosMaverick3, headingMaverick3, Colour1(), Colour2(), 0); //Defalut colours 50, 0
                        API.setEntityData(Maverick3, "RESPAWNABLE", true);
                        API.setEntityData(Maverick3, "SPAWN_POS", spawnPosMaverick3);
                        API.setEntityData(Maverick3, "SPAWN_ROT", headingMaverick3);
                        API.setEntitySyncedData(Maverick3, "VehicleType", "Aircraft");
                        API.setEntitySyncedData(Maverick3, "Tailnumber", RandomString(4));
                        #endregion

            #region Police Maverick
            //Police Maverick
            Vector3 spawnPosPolMav1 = new Vector3(-1203.281, -2796.785, 20.77376);
            Vector3 headingPolMav1 = new Vector3(0, 0, -119.1341);
            Vehicle PolMav1 = API.createVehicle(PolMav, spawnPosPolMav1, headingPolMav1, Colour1(), Colour2(), 0); //Defalut colours 6, 30
            API.setEntityData(PolMav1, "RESPAWNABLE", true);
            API.setEntityData(PolMav1, "SPAWN_POS", spawnPosPolMav1);
            API.setEntityData(PolMav1, "SPAWN_ROT", headingPolMav1);
            API.setEntitySyncedData(PolMav1, "VehicleType", "Aircraft");
            API.setEntitySyncedData(PolMav1, "Tailnumber", RandomString(4));
            #endregion

            #region Savage
            //Savage
            Vector3 spawnPosSavage1 = new Vector3(-2469.54028, 3258.02, 33.3265038);
            Vector3 headingSavage1 = new Vector3(0, 0, 149.8417);
            Vehicle Savage1 = API.createVehicle(Savage, spawnPosSavage1, headingSavage1, Colour1(), Colour2(), 0); //Defalut colours 50, 0
            API.setEntityData(Savage1, "RESPAWNABLE", true);
            API.setEntityData(Savage1, "SPAWN_POS", spawnPosSavage1);
            API.setEntityData(Savage1, "SPAWN_ROT", headingSavage1);
            API.setEntitySyncedData(Savage1, "VehicleType", "Aircraft");
            API.setEntitySyncedData(Savage1, "Tailnumber", RandomString(4));

            Vector3 spawnPosSavage2 = new Vector3(-2483.82471, 3266.49, 33.32759);
            Vector3 headingSavage2 = new Vector3(0, 0, 152.5324);
            Vehicle Savage2 = API.createVehicle(Savage, spawnPosSavage2, headingSavage2, Colour1(), Colour2(), 0); //Defalut colours 50, 0
            API.setEntityData(Savage2, "RESPAWNABLE", true);
            API.setEntityData(Savage2, "SPAWN_POS", spawnPosSavage2);
            API.setEntityData(Savage2, "SPAWN_ROT", headingSavage2);
            API.setEntitySyncedData(Savage2, "VehicleType", "Aircraft");
            API.setEntitySyncedData(Savage2, "Tailnumber", RandomString(4));
            #endregion

            #region Valkyrie
            //Valkyrie
            Vector3 spawnPosValkyrie1 = new Vector3(-2406.99243, 3225.92163, 33.25877);
            Vector3 headingValkyrie1 = new Vector3(0, 0, 150.370361);
            Vehicle Valkyrie1 = API.createVehicle(Valkyrie, spawnPosValkyrie1, headingValkyrie1, Colour1(), Colour2(), 0); //Defalut colours 50, 0
            API.setEntityData(Valkyrie1, "RESPAWNABLE", true);
            API.setEntityData(Valkyrie1, "SPAWN_POS", spawnPosValkyrie1);
            API.setEntityData(Valkyrie1, "SPAWN_ROT", headingValkyrie1);
            API.setEntitySyncedData(Valkyrie1, "VehicleType", "Aircraft");
            API.setEntitySyncedData(Valkyrie1, "Tailnumber", RandomString(4));

            Vector3 spawnPosValkyrie2 = new Vector3(-2393.72949, 3217.33862, 33.25404);
            Vector3 headingValkyrie2 = new Vector3(0, 0, 151.962189);
            Vehicle Valkyrie2 = API.createVehicle(Valkyrie, spawnPosValkyrie2, headingValkyrie2, Colour1(), Colour2(), 0); //Defalut colours 50, 0
            API.setEntityData(Valkyrie2, "RESPAWNABLE", true);
            API.setEntityData(Valkyrie2, "SPAWN_POS", spawnPosValkyrie2);
            API.setEntityData(Valkyrie2, "SPAWN_ROT", headingValkyrie2);
            API.setEntitySyncedData(Valkyrie2, "VehicleType", "Aircraft");
            API.setEntitySyncedData(Valkyrie2, "Tailnumber", RandomString(4));
#endregion
            //-------------------------------------------------------------------------------------
            #endregion

            #region Automobiles
            // Automobiles
            //--------------------------------------------------------------------------------------

            VehicleHash Airbus = VehicleHash.Airbus; //1283517198
                        VehicleHash Airtug = VehicleHash.Airtug; //1560980623
                        VehicleHash Firetruck = VehicleHash.FireTruck; //1938952078
                        VehicleHash Lifeguard = VehicleHash.Lguard; //469291905
                        //VehicleHash Packer = VehicleHash.Packer; //569305213
                        VehicleHash PoliceA = VehicleHash.Police; //2046537925
                        VehicleHash PoliceB = VehicleHash.Police2; //-1627000575
                        VehicleHash PoliceT = VehicleHash.PoliceT; //456714581
                        VehicleHash Primo = VehicleHash.Primo; //-1150599089
                        VehicleHash RancherXLA = VehicleHash.RancherXL; //1645267888
                        VehicleHash Stretch = VehicleHash.Stretch; //-1961627517
                        //VehicleHash TankerR = VehicleHash.Tanker; //-730904777
                        //VehicleHash Tanker = VehicleHash.Tanker2; //1956216962

                        //Airbus
                        Vector3 spawnPosAirbus1 = new Vector3(-1229.94556, -2733.22949, 13.9479113);
                        Vector3 headingAirbus1 = new Vector3(0, 0, 151.0122);
                        Vehicle Airbus1 = API.createVehicle(Airbus, spawnPosAirbus1, headingAirbus1, Colour1(), Colour2(), 0); // Default colours 134, 134
                        API.setEntityData(Airbus1, "RESPAWNABLE", true);
                        API.setEntityData(Airbus1, "SPAWN_POS", spawnPosAirbus1);
                        API.setEntityData(Airbus1, "SPAWN_ROT", headingAirbus1);
                        API.setEntityData(Airbus1, "VehicleType", "Car");

                        Vector3 spawnPosAirbus2 = new Vector3(-1225.329, -2736.2168, 13.9487257);
                        Vector3 headingAirbus2 = new Vector3(0, 0, 149.442642);
                        Vehicle Airbus2 = API.createVehicle(Airbus, spawnPosAirbus2, headingAirbus2, Colour1(), Colour2(), 0); // Default colours 134, 134
                        API.setEntityData(Airbus2, "RESPAWNABLE", true);
                        API.setEntityData(Airbus2, "SPAWN_POS", spawnPosAirbus2);
                        API.setEntityData(Airbus2, "SPAWN_ROT", headingAirbus2);
                        API.setEntityData(Airbus2, "VehicleType", "Car");

                        //Airtug
                        Vector3 spawnPosAirtug1 = new Vector3(-1239.81726, -2707.59717, 13.3736963);
                        Vector3 headingAirtug1 = new Vector3(0, 0, 148.920334);
                        Vehicle Airtug1 = API.createVehicle(Airtug, spawnPosAirtug1, headingAirtug1, Colour1(), Colour2(), 0); // Default colours 111, 0
                        API.setEntityData(Airtug1, "RESPAWNABLE", true);
                        API.setEntityData(Airtug1, "SPAWN_POS", spawnPosAirtug1);
                        API.setEntityData(Airtug1, "SPAWN_ROT", headingAirtug1);
                        API.setEntityData(Airtug1, "VehicleType", "Car");

                        Vector3 spawnPosAirtug2 = new Vector3(-1237.57666, -2708.82129, 13.3778305);
                        Vector3 headingAirtug2 = new Vector3(0, 0, 148.917633);
                        Vehicle Airtug2 = API.createVehicle(Airtug, spawnPosAirtug2, headingAirtug2, Colour1(), Colour2(), 0); // Default colours 111, 0
                        API.setEntityData(Airtug2, "RESPAWNABLE", true);
                        API.setEntityData(Airtug2, "SPAWN_POS", spawnPosAirtug2);
                        API.setEntityData(Airtug2, "SPAWN_ROT", headingAirtug2);
                        API.setEntityData(Airtug2, "VehicleType", "Car");

                        Vector3 spawnPosAirtug3 = new Vector3(-1235.385, -2710.08765, 13.3778305);
                        Vector3 headingAirtug3 = new Vector3(0, 0, 148.917633);
                        Vehicle Airtug3 = API.createVehicle(Airtug, spawnPosAirtug3, headingAirtug3, Colour1(), Colour2(), 0); // Default colours 111, 0
                        API.setEntityData(Airtug3, "RESPAWNABLE", true);
                        API.setEntityData(Airtug3, "SPAWN_POS", spawnPosAirtug3);
                        API.setEntityData(Airtug3, "SPAWN_ROT", headingAirtug3);
                        API.setEntityData(Airtug3, "VehicleType", "Car");

                        Vector3 spawnPosAirtug4 = new Vector3(-1233.11621, -2711.39844, 13.3778305);
                        Vector3 headingAirtug4 = new Vector3(0, 0, 148.917633);
                        Vehicle Airtug4 = API.createVehicle(Airtug, spawnPosAirtug4, headingAirtug4, Colour1(), Colour2(), 0); // Default colours 111, 0
                        API.setEntityData(Airtug4, "RESPAWNABLE", true);
                        API.setEntityData(Airtug4, "SPAWN_POS", spawnPosAirtug4);
                        API.setEntityData(Airtug4, "SPAWN_ROT", headingAirtug4);
                        API.setEntityData(Airtug4, "VehicleType", "Car");

                        Vector3 spawnPosAirtug5 = new Vector3(-1230.97925, -2712.63184, 13.3778305);
                        Vector3 headingAirtug5 = new Vector3(0, 0, 148.917633);
                        Vehicle Airtug5 = API.createVehicle(Airtug, spawnPosAirtug5, headingAirtug5, Colour1(), Colour2(), 0); // Default colours 111, 0
                        API.setEntityData(Airtug5, "RESPAWNABLE", true);
                        API.setEntityData(Airtug5, "SPAWN_POS", spawnPosAirtug5);
                        API.setEntityData(Airtug5, "SPAWN_ROT", headingAirtug5);
                        API.setEntityData(Airtug5, "VehicleType", "Car");

                        //Fireturck
                        Vector3 spawnPosFT1 = new Vector3(-1094.32654, -2370.27148, 14.013339);
                        Vector3 headingFT1 = new Vector3(0, 0, 149.583542);
                        Vehicle Firetruck1 = API.createVehicle(Firetruck, spawnPosFT1, headingFT1, 134, 28, 0); // Default colours 134, 28
                        API.setEntityData(Firetruck1, "RESPAWNABLE", true);
                        API.setEntityData(Firetruck1, "SPAWN_POS", spawnPosFT1);
                        API.setEntityData(Firetruck1, "SPAWN_ROT", headingFT1);
                        API.setEntityData(Firetruck1, "VehicleType", "Firetruck");

                        Vector3 spawnPosFT2 = new Vector3(-1080.2467, -2379.044, 14.0119781);
                        Vector3 headingFT2 = new Vector3(0, 0, 148.770462);
                        Vehicle Firetruck2 = API.createVehicle(Firetruck, spawnPosFT2, headingFT2, 134, 28, 0); // Default colours 134, 28
                        API.setEntityData(Firetruck2, "RESPAWNABLE", true);
                        API.setEntityData(Firetruck2, "SPAWN_POS", spawnPosFT2);
                        API.setEntityData(Firetruck2, "SPAWN_ROT", headingFT2);
                        API.setEntityData(Firetruck2, "VehicleType", "Firetruck");

                        Vector3 spawnPosFT3 = new Vector3(-1089.95691, -2373.36841, 14.0124264);
                        Vector3 headingFT3 = new Vector3(0, 0, 148.0896);
                        Vehicle Firetruck3 = API.createVehicle(Firetruck, spawnPosFT3, headingFT3, 134, 28, 0); // Default colours 134, 28
                        API.setEntityData(Firetruck3, "RESPAWNABLE", true);
                        API.setEntityData(Firetruck3, "SPAWN_POS", spawnPosFT3);
                        API.setEntityData(Firetruck3, "SPAWN_ROT", headingFT3);
                        API.setEntityData(Firetruck3, "VehicleType", "Firetruck");

                        Vector3 spawnPosFT4 = new Vector3(-1085.0426, -2376.43433, 14.012001);
                        Vector3 headingFT4 = new Vector3(0, 0, 150.596176);
                        Vehicle Firetruck4 = API.createVehicle(Firetruck, spawnPosFT4, headingFT4, 134, 28, 0); // Default colours 134, 28
                        API.setEntityData(Firetruck4, "RESPAWNABLE", true);
                        API.setEntityData(Firetruck4, "SPAWN_POS", spawnPosFT4);
                        API.setEntityData(Firetruck4, "SPAWN_ROT", headingFT4);
                        API.setEntityData(Firetruck4, "VehicleType", "Firetruck");

                        Vector3 spawnPosFT5 = new Vector3(-2104.27979, 2834.14526, 32.8764267);
                        Vector3 headingFT5 = new Vector3(0, 0, -6.751867);
                        Vehicle Firetruck5 = API.createVehicle(Firetruck, spawnPosFT5, headingFT5, 134, 28, 0); // Default colours 134, 28
                        API.setEntityData(Firetruck5, "RESPAWNABLE", true);
                        API.setEntityData(Firetruck5, "SPAWN_POS", spawnPosFT5);
                        API.setEntityData(Firetruck5, "SPAWN_ROT", headingFT5);
                        API.setEntityData(Firetruck5, "VehicleType", "Firetruck");

                        Vector3 spawnPosFT6 = new Vector3(-2109.68848, 2834.50366, 32.87742);
                        Vector3 headingFT6 = new Vector3(0, 0, -6.446338);
                        Vehicle Firetruck6 = API.createVehicle(Firetruck, spawnPosFT6, headingFT6, 134, 28, 0); // Default colours 134, 28
                        API.setEntityData(Firetruck6, "RESPAWNABLE", true);
                        API.setEntityData(Firetruck6, "SPAWN_POS", spawnPosFT6);
                        API.setEntityData(Firetruck6, "SPAWN_ROT", headingFT6);
                        API.setEntityData(Firetruck6, "VehicleType", "Firetruck");

                        Vector3 spawnPosFT7 = new Vector3(-2115.14063, 2834.714, 32.8772659);
                        Vector3 headingFT7 = new Vector3(0, 0, -4.3395915);
                        Vehicle Firetruck7 = API.createVehicle(Firetruck, spawnPosFT7, headingFT7, 134, 28, 0); // Default colours 134, 28
                        API.setEntityData(Firetruck7, "RESPAWNABLE", true);
                        API.setEntityData(Firetruck7, "SPAWN_POS", spawnPosFT7);
                        API.setEntityData(Firetruck7, "SPAWN_ROT", headingFT7);
                        API.setEntityData(Firetruck7, "VehicleType", "Firetruck");

                        Vector3 spawnPosFT8 = new Vector3(-2120.531, 2835.14, 32.8783);
                        Vector3 headingFT8 = new Vector3(0, 0, -5.12689543);
                        Vehicle Firetruck8 = API.createVehicle(Firetruck, spawnPosFT8, headingFT8, 134, 28, 0); // Default colours 134, 28
                        API.setEntityData(Firetruck8, "RESPAWNABLE", true);
                        API.setEntityData(Firetruck8, "SPAWN_POS", spawnPosFT8);
                        API.setEntityData(Firetruck8, "SPAWN_ROT", headingFT8);
                        API.setEntityData(Firetruck8, "VehicleType", "Firetruck");

                        //Lifeguard Van
                        Vector3 spawnPosLifeguard1 = new Vector3(-681.8819, -1428.313, 4.626444);
                        Vector3 headingLifeguard1 = new Vector3(0, 0, -94.22251);
                        Vehicle Lifeguard1 = API.createVehicle(Lifeguard, spawnPosLifeguard1, headingLifeguard1, Colour1(), Colour2(), 0); // Default colours 134, 28
                        API.setEntityData(Lifeguard1, "RESPAWNABLE", true);
                        API.setEntityData(Lifeguard1, "SPAWN_POS", spawnPosLifeguard1);
                        API.setEntityData(Lifeguard1, "SPAWN_ROT", headingLifeguard1);
                        API.setEntityData(Lifeguard1, "VehicleType", "Car");

                        Vector3 spawnPosLifeguard2 = new Vector3(-681.2877, -1424.699, 4.626933);
                        Vector3 headingLifeguard2 = new Vector3(0, 0, -91.60224);
                        Vehicle Lifeguard2 = API.createVehicle(Lifeguard, spawnPosLifeguard2, headingLifeguard2, Colour1(), Colour2(), 0); // Default colours 134, 28
                        API.setEntityData(Lifeguard2, "RESPAWNABLE", true);
                        API.setEntityData(Lifeguard2, "SPAWN_POS", spawnPosLifeguard2);
                        API.setEntityData(Lifeguard2, "SPAWN_ROT", headingLifeguard2);
                        API.setEntityData(Lifeguard2, "VehicleType", "Car");

                        //RancherXL
                        Vector3 spawnPosRancherXLA1 = new Vector3(-681.2455, -1420.424, 4.635395);
                        Vector3 headingRancherXLA1 = new Vector3(0, 0, -92.56369);
                        Vehicle RancherXLA1 = API.createVehicle(RancherXLA, spawnPosRancherXLA1, headingRancherXLA1, Colour1(), Colour2(), 0); // Default colours 134, 28
                        API.setEntityData(RancherXLA1, "RESPAWNABLE", true);
                        API.setEntityData(RancherXLA1, "SPAWN_POS", spawnPosRancherXLA1);
                        API.setEntityData(RancherXLA1, "SPAWN_ROT", headingRancherXLA1);
                        API.setEntityData(RancherXLA1, "VehicleType", "Car");

                        Vector3 spawnPosRancherXLA2 = new Vector3(-680.962, -1416.219, 4.635569);
                        Vector3 headingRancherXLA2 = new Vector3(0, 0, -93.66589);
                        Vehicle RancherXLA2 = API.createVehicle(RancherXLA, spawnPosRancherXLA2, headingRancherXLA2, Colour1(), Colour2(), 0); // Default colours 134, 28
                        API.setEntityData(RancherXLA2, "RESPAWNABLE", true);
                        API.setEntityData(RancherXLA2, "SPAWN_POS", spawnPosRancherXLA2);
                        API.setEntityData(RancherXLA2, "SPAWN_ROT", headingRancherXLA2);
                        API.setEntityData(RancherXLA2, "VehicleType", "Car");

                        //Packers
                        //Vector3 spawnPosPacker1 = new Vector3(-969.7938, -2852.50366, 14.0336962);
                        //Vector3 headingPacker1 = new Vector3(0, 0, 58.06512);
                        //Vehicle Packer1 = API.createVehicle(Packer, spawnPosPacker1, headingPacker1, Colour1(), Colour2(), 0); // Default colours 73, 70
                        //API.setEntityData(Packer1, "RESPAWNABLE", true);
                        //API.setEntityData(Packer1, "SPAWN_POS", spawnPosPacker1);
                        //API.setEntityData(Packer1, "SPAWN_ROT", headingPacker1);
                        //API.setEntityData(Packer1, "VehicleType", "Car");

                        //Vector3 spawnPosPacker2 = new Vector3(-972.630066, -2856.76343, 14.0334835);
                        //Vector3 headingPacker2 = new Vector3(0, 0, 60.43812);
                        //Vehicle Packer2 = API.createVehicle(Packer, spawnPosPacker2, headingPacker2, Colour1(), Colour2(), 0); // Default colours 6, 0
                        //API.setEntityData(Packer2, "RESPAWNABLE", true);
                        //API.setEntityData(Packer2, "SPAWN_POS", spawnPosPacker2);
                        //API.setEntityData(Packer2, "SPAWN_ROT", headingPacker2);
                        //API.setEntityData(Packer2, "VehicleType", "Car");

                        //Vector3 spawnPosPacker3 = new Vector3(-974.9036, -2861.26855, 14.0335455);
                        //Vector3 headingPacker3 = new Vector3(0, 0, 62.11804);
                        //Vehicle Packer3 = API.createVehicle(Packer, spawnPosPacker3, headingPacker3, Colour1(), Colour2(), 0); // Default colours 0, 112
                        //API.setEntityData(Packer3, "RESPAWNABLE", true);
                        //API.setEntityData(Packer3, "SPAWN_POS", spawnPosPacker3);
                        //API.setEntityData(Packer3, "SPAWN_ROT", headingPacker3);
                        //API.setEntityData(Packer3, "VehicleType", "Car");

                        //PoliceA Vehicles
                        Vector3 spawnPosPoliceA1 = new Vector3(-1228.71948, -2810.084, 13.5554991);
                        Vector3 headingPoliceA1 = new Vector3(0, 0, -116.994179);
                        Vehicle PoliceA1 = API.createVehicle(PoliceA, spawnPosPoliceA1, headingPoliceA1, 134, 28, 0); // Default colours 134, 134
                        API.setEntityData(PoliceA1, "RESPAWNABLE", true);
                        API.setEntityData(PoliceA1, "SPAWN_POS", spawnPosPoliceA1);
                        API.setEntityData(PoliceA1, "SPAWN_ROT", headingPoliceA1);
                        API.setEntityData(PoliceA1, "VehicleType", "Police");

                        Vector3 spawnPosPoliceA2 = new Vector3(-1227.10291, -2806.87378, 13.5556879);
                        Vector3 headingPoliceA2 = new Vector3(0, 0, -116.994194);
                        Vehicle PoliceA2 = API.createVehicle(PoliceA, spawnPosPoliceA2, headingPoliceA2, 134, 28, 0); // Default colours 134, 134
                        API.setEntityData(PoliceA2, "RESPAWNABLE", true);
                        API.setEntityData(PoliceA2, "SPAWN_POS", spawnPosPoliceA2);
                        API.setEntityData(PoliceA2, "SPAWN_ROT", headingPoliceA2);
                        API.setEntityData(PoliceA2, "VehicleType", "Police");

                        //PoliceB Vehicles
                        Vector3 spawnPosPoliceB1 = new Vector3(-1225.53235, -2803.58374, 13.5559425);
                        Vector3 headingPoliceB1 = new Vector3(0, 0, -116.994194);
                        Vehicle PoliceB1 = API.createVehicle(PoliceB, spawnPosPoliceB1, headingPoliceB1, 134, 28, 0); // Default colours 134, 134
                        API.setEntityData(PoliceB1, "RESPAWNABLE", true);
                        API.setEntityData(PoliceB1, "SPAWN_POS", spawnPosPoliceB1);
                        API.setEntityData(PoliceB1, "SPAWN_ROT", headingPoliceB1);
                        API.setEntityData(PoliceB1, "VehicleType", "Police");

                        //PoliceT Vehicles
                        Vector3 spawnPosPoliceT1 = new Vector3(-1231.76111, -2817.41016, 13.9326143);
                        Vector3 headingPoliceT1 = new Vector3(0, 0, -121.021545);
                        Vehicle PoliceT1 = API.createVehicle(PoliceT, spawnPosPoliceT1, headingPoliceT1, 134, 28, 0); // Default colours 111, 0
                        API.setEntityData(PoliceT1, "RESPAWNABLE", true);
                        API.setEntityData(PoliceT1, "SPAWN_POS", spawnPosPoliceT1);
                        API.setEntityData(PoliceT1, "SPAWN_ROT", headingPoliceT1);
                        API.setEntityData(PoliceT1, "VehicleType", "Police");

                        Vector3 spawnPosPoliceT2 = new Vector3(-1230.25134, -2814.541, 13.9325867);
                        Vector3 headingPoliceT2 = new Vector3(0, 0, -121.01902);
                        Vehicle PoliceT2 = API.createVehicle(PoliceT, spawnPosPoliceT2, headingPoliceT2, 134, 28, 0); // Default colours 111, 0
                        API.setEntityData(PoliceT2, "RESPAWNABLE", true);
                        API.setEntityData(PoliceT2, "SPAWN_POS", spawnPosPoliceT2);
                        API.setEntityData(PoliceT2, "SPAWN_ROT", headingPoliceT2);
                        API.setEntityData(PoliceT2, "VehicleType", "Police");

                        //Primo
                        Vector3 spawnPosPrimo1 = new Vector3(-901.7082, -2283.994, 6.316022);
                        Vector3 headingPrimo1 = new Vector3(0, 0, 59.42191);
                        Vehicle Primo1 = API.createVehicle(Primo, spawnPosPrimo1, headingPrimo1, Colour1(), Colour2(), 0); // Default colours 111, 0
                        API.setEntityData(Primo1, "RESPAWNABLE", true);
                        API.setEntityData(Primo1, "SPAWN_POS", spawnPosPrimo1);
                        API.setEntityData(Primo1, "SPAWN_ROT", headingPrimo1);
                        API.setEntityData(Primo1, "VehicleType", "Car");

                        Vector3 spawnPosPrimo2 = new Vector3(-900.3125, -2280.967, 6.315326);
                        Vector3 headingPrimo2 = new Vector3(0, 0, 61.11831);
                        Vehicle Primo2 = API.createVehicle(Primo, spawnPosPrimo2, headingPrimo2, Colour1(), Colour2(), 0); // Default colours 111, 0
                        API.setEntityData(Primo2, "RESPAWNABLE", true);
                        API.setEntityData(Primo2, "SPAWN_POS", spawnPosPrimo2);
                        API.setEntityData(Primo2, "SPAWN_ROT", headingPrimo2);
                        API.setEntityData(Primo2, "VehicleType", "Car");

                        //Stretch Vehicles
                        Vector3 spawnPosStretch1 = new Vector3(-933.7082, -2321.452, 6.397291);
                        Vector3 headingStretch1 = new Vector3(0, 0, -120.5878);
                        Vehicle Stretch1 = API.createVehicle(Stretch, spawnPosStretch1, headingStretch1, Colour1(), Colour2(), 0); // Default colours 111, 0
                        API.setEntityData(Stretch1, "RESPAWNABLE", true);
                        API.setEntityData(Stretch1, "SPAWN_POS", spawnPosStretch1);
                        API.setEntityData(Stretch1, "SPAWN_ROT", headingStretch1);
                        API.setEntityData(Stretch1, "VehicleType", "Car");

                        Vector3 spawnPosStretch2 = new Vector3(-931.8676, -2318.364, 6.398619);
                        Vector3 headingStretch2 = new Vector3(0, 0, -120.6691);
                        Vehicle Stretch2 = API.createVehicle(Stretch, spawnPosStretch2, headingStretch2, Colour1(), Colour2(), 0); // Default colours 111, 0
                        API.setEntityData(Stretch2, "RESPAWNABLE", true);
                        API.setEntityData(Stretch2, "SPAWN_POS", spawnPosStretch2);
                        API.setEntityData(Stretch2, "SPAWN_ROT", headingStretch2);
                        API.setEntityData(Stretch2, "VehicleType", "Car");

                        Vector3 spawnPosStretch3 = new Vector3(-930.1471, -2315.348, 6.396801);
                        Vector3 headingStretch3 = new Vector3(0, 0, -119.619);
                        Vehicle Stretch3 = API.createVehicle(Stretch, spawnPosStretch3, headingStretch3, Colour1(), Colour2(), 0); // Default colours 111, 0
                        API.setEntityData(Stretch3, "RESPAWNABLE", true);
                        API.setEntityData(Stretch3, "SPAWN_POS", spawnPosStretch3);
                        API.setEntityData(Stretch3, "SPAWN_ROT", headingStretch3);
                        API.setEntityData(Stretch3, "VehicleType", "Car");

                        //Tankers
                        //Vector3 spawnPosTanker1 = new Vector3(-982.294861, -2871.497, 15.6898117);
                        //Vector3 headingTanker1 = new Vector3(0, 0, 60.39277);
                        //Vehicle Tanker1 = API.createVehicle(TankerR, spawnPosTanker1, headingTanker1, 132, 111, 0); // Default colours 132, 111
                        //API.setEntityData(Tanker1, "RESPAWNABLE", true);
                        //API.setEntityData(Tanker1, "SPAWN_POS", spawnPosTanker1);
                        //API.setEntityData(Tanker1, "SPAWN_ROT", headingTanker1);
                        //API.setEntityData(Tanker1, "VehicleType", "Tanker");

                        //Vector3 spawnPosTanker2 = new Vector3(-980.243958, -2868.23267, 15.6909466);
                        //Vector3 headingTanker2 = new Vector3(0, 0, 59.57251);
                        //Vehicle Tanker2 = API.createVehicle(Tanker, spawnPosTanker2, headingTanker2, 73, 70, 0); // Default colours 73, 70
                        //API.setEntityData(Tanker2, "RESPAWNABLE", true);
                        //API.setEntityData(Tanker2, "SPAWN_POS", spawnPosTanker2);
                        //API.setEntityData(Tanker2, "SPAWN_ROT", headingTanker2);
                        //API.setEntityData(Tanker2, "VehicleType", "Tanker");

                        //Vector3 spawnPosTanker3 = new Vector3(-978.2948, -2864.77954, 15.7797213);
                        //Vector3 headingTanker3 = new Vector3(0, 0, 60.2283058);
                        //Vehicle Tanker3 = API.createVehicle(TankerR, spawnPosTanker3, headingTanker3, 73, 70, 0); // Default colours 73, 70
                        //API.setEntityData(Tanker3, "RESPAWNABLE", true);
                        //API.setEntityData(Tanker3, "SPAWN_POS", spawnPosTanker3);
                        //API.setEntityData(Tanker3, "SPAWN_ROT", headingTanker3);
                        //API.setEntityData(Tanker3, "VehicleType", "Tanker");
                        #endregion

            #region Boats
                        // Boats 
                        //--------------------------------------------------------------------------------------------------------------------------------------------------------------

                        VehicleHash DinghyA = VehicleHash.Dinghy; //1033245328
                        //VehicleHash DinghyB = VehicleHash.Dinghy2; //276773164
                        //VehicleHash DinghyC = VehicleHash.Dinghy3; //509498602
                        //VehicleHash DinghyD = VehicleHash.Dinghy4; //867467158
                        //VehicleHash Jetmax = VehicleHash.Jetmax; //861409633
                        //VehicleHash Marquis = VehicleHash.Marquis; //-1043459709
                        //VehicleHash Predator = VehicleHash.Predator; //-488123221
                        //VehicleHash SeaSharkA = VehicleHash.Seashark; //-1030275036
                        //VehicleHash SeaSharkB = VehicleHash.Seashark2; //-616331036
                        //VehicleHash SeaSharkC = VehicleHash.Seashark3; //-311022263
                        //VehicleHash SpeederA = VehicleHash.Speeder; //231083307
                        //VehicleHash SpeederB = VehicleHash.Speeder2; //437538602
                        //VehicleHash Squalo = VehicleHash.Squalo; //400514754
                        //VehicleHash SubmersibleA = VehicleHash.Submersible; //771711535
                        //VehicleHash SubmersibleB = VehicleHash.Submersible2; //-1066334226
                        //VehicleHash Suntrap = VehicleHash.Suntrap; //-282946103
                        //VehicleHash ToroA = VehicleHash.Toro; //1070967343
                        //VehicleHash ToroB = VehicleHash.Toro2; //908897389
                        //VehicleHash TropicA = VehicleHash.Tropic; //290013743
                        //VehicleHash TropicB = VehicleHash.Tropic2; //1448677353
                        //VehicleHash Tug = VehicleHash.Tug; //-2100640717
            #region Dinghy
            // Dinghy
            Vector3 spawnPosDinghyA1 = new Vector3(-790.9676, -1447.705, 0.1195223);
            Vector3 headingDinghyA1 = new Vector3(0, 0, 139.747);
            Vehicle DinghyA1 = API.createVehicle(DinghyA, spawnPosDinghyA1, headingDinghyA1, Colour1(), Colour2(), 0); // Default colours 111, 0
            API.setEntityData(DinghyA1, "RESPAWNABLE", true);
            API.setEntityData(DinghyA1, "SPAWN_POS", spawnPosDinghyA1);
            API.setEntityData(DinghyA1, "SPAWN_ROT", headingDinghyA1);
            API.setEntityData(DinghyA1, "VehicleType", "Boat");

            Vector3 spawnPosDinghyA2 = new Vector3(-783.8369, -1439.442, 0.1195602);
            Vector3 headingDinghyA2 = new Vector3(0, 0, 139.6791);
            Vehicle DinghyA2 = API.createVehicle(DinghyA, spawnPosDinghyA2, headingDinghyA2, Colour1(), Colour2(), 0); // Default colours 111, 0
            API.setEntityData(DinghyA2, "RESPAWNABLE", true);
            API.setEntityData(DinghyA2, "SPAWN_POS", spawnPosDinghyA2);
            API.setEntityData(DinghyA2, "SPAWN_ROT", headingDinghyA2);
            API.setEntityData(DinghyA2, "VehicleType", "Boat");

            Vector3 spawnPosDinghyA3 = new Vector3(-776.3784, -1430.591, 0.1187514);
            Vector3 headingDinghyA3 = new Vector3(0, 0, 141.4062);
            Vehicle DinghyA3 = API.createVehicle(DinghyA, spawnPosDinghyA3, headingDinghyA3, Colour1(), Colour2(), 0); // Default colours 111, 0
            API.setEntityData(DinghyA3, "RESPAWNABLE", true);
            API.setEntityData(DinghyA3, "SPAWN_POS", spawnPosDinghyA3);
            API.setEntityData(DinghyA3, "SPAWN_ROT", headingDinghyA3);
            API.setEntityData(DinghyA3, "VehicleType", "Boat");

            Vector3 spawnPosDinghyA4 = new Vector3(-768.8199, -1421.901, 0.1197837);
            Vector3 headingDinghyA4 = new Vector3(0, 0, 139.8571);
            Vehicle DinghyA4 = API.createVehicle(DinghyA, spawnPosDinghyA4, headingDinghyA4, Colour1(), Colour2(), 0); // Default colours 111, 0
            API.setEntityData(DinghyA4, "RESPAWNABLE", true);
            API.setEntityData(DinghyA4, "SPAWN_POS", spawnPosDinghyA4);
            API.setEntityData(DinghyA4, "SPAWN_ROT", headingDinghyA4);
            API.setEntityData(DinghyA4, "VehicleType", "Boat");

            Vector3 spawnPosDinghyA5 = new Vector3(3093.67, -4799.303, 0.2696715);
            Vector3 headingDinghyA5 = new Vector3(0, 0, -165.0635);
            Vehicle DinghyA5 = API.createVehicle(DinghyA, spawnPosDinghyA5, headingDinghyA5, Colour1(), Colour2(), 0); // Default colours 111, 0
            API.setEntityData(DinghyA5, "RESPAWNABLE", true);
            API.setEntityData(DinghyA5, "SPAWN_POS", spawnPosDinghyA5);
            API.setEntityData(DinghyA5, "SPAWN_ROT", headingDinghyA5);
            API.setEntityData(DinghyA5, "VehicleType", "Boat");

            Vector3 spawnPosDinghyA6 = new Vector3(3081.916, -4802.523, 0.2547978);
            Vector3 headingDinghyA6 = new Vector3(0, 0, -164.8432);
            Vehicle DinghyA6 = API.createVehicle(DinghyA, spawnPosDinghyA6, headingDinghyA6, Colour1(), Colour2(), 0); // Default colours 111, 0
            API.setEntityData(DinghyA6, "RESPAWNABLE", true);
            API.setEntityData(DinghyA6, "SPAWN_POS", spawnPosDinghyA6);
            API.setEntityData(DinghyA6, "SPAWN_ROT", headingDinghyA6);
            API.setEntityData(DinghyA6, "VehicleType", "Boat");
            #endregion

            #endregion
        }

        //public void OnVehicleDeath(NetHandle vehicle)
        //{
        //    var Respawnable = API.getEntityData(vehicle, "RESPAWNABLE");
        //    string vehicleType = API.getEntityData(vehicle, "VehicleType");

        //    if (Respawnable == true)
        //    {
        //        var t = Task.Run(async delegate
        //        {
        //            await Task.Delay(TimeSpan.FromMinutes(1));

        //            //var color1 = API.getVehiclePrimaryColor(vehicle);
        //            //var color2 = API.getVehicleSecondaryColor(vehicle);
        //            var model = API.getEntityModel(vehicle);
        //            var name = API.getVehicleDisplayName((VehicleHash)model);

        //            var spawnPos = API.getEntityData(vehicle, "SPAWN_POS");
        //            var spawnH = API.getEntityData(vehicle, "SPAWN_ROT");

        //            API.deleteEntity(vehicle);

        //            switch (vehicleType)
        //            {
        //                case "Police":
        //                    {
        //                        Vehicle respawnCar = API.createVehicle((VehicleHash)model, spawnPos, spawnH, 111, 0);
        //                        // You can also add more things, like vehicle modifications, number plate, etc.	
        //                        API.setEntityData(respawnCar, "RESPAWNABLE", true);
        //                        API.setEntityData(respawnCar, "SPAWN_POS", spawnPos);
        //                        API.setEntityData(respawnCar, "SPAWN_ROT", spawnH);
        //                        API.setEntityData(respawnCar, "VehicleType", "Police");
        //                        API.consoleOutput(name + " Respawned at: " + spawnPos);
        //                        break;
        //                    }
        //                case "Firetruck":
        //                    {
        //                        Vehicle respawnCar = API.createVehicle((VehicleHash)model, spawnPos, spawnH, 134, 28);
        //                        // You can also add more things, like vehicle modifications, number plate, etc.	
        //                        API.setEntityData(respawnCar, "RESPAWNABLE", true);
        //                        API.setEntityData(respawnCar, "SPAWN_POS", spawnPos);
        //                        API.setEntityData(respawnCar, "SPAWN_ROT", spawnH);
        //                        API.setEntityData(respawnCar, "VehicleType", "Firetruck");
        //                        API.consoleOutput(name + " Respawned at: " + spawnPos);
        //                        break;
        //                    }
        //                case "Car":
        //                    {
        //                        Vehicle respawnCar = API.createVehicle((VehicleHash)model, spawnPos, spawnH, Colour1(), Colour2());
        //                        // You can also add more things, like vehicle modifications, number plate, etc.	
        //                        API.setEntityData(respawnCar, "RESPAWNABLE", true);
        //                        API.setEntityData(respawnCar, "SPAWN_POS", spawnPos);
        //                        API.setEntityData(respawnCar, "SPAWN_ROT", spawnH);
        //                        API.setEntityData(respawnCar, "VehicleType", "Car");
        //                        API.consoleOutput(name + " Respawned at: " + spawnPos);
        //                        break;
        //                    }
        //                case "Boat":
        //                    {
        //                        Vehicle respawnCar = API.createVehicle((VehicleHash)model, spawnPos, spawnH, Colour1(), Colour2());
        //                        // You can also add more things, like vehicle modifications, number plate, etc.	
        //                        API.setEntityData(respawnCar, "RESPAWNABLE", true);
        //                        API.setEntityData(respawnCar, "SPAWN_POS", spawnPos);
        //                        API.setEntityData(respawnCar, "SPAWN_ROT", spawnH);
        //                        API.setEntityData(respawnCar, "VehicleType", "Boat");
        //                        API.consoleOutput(name + " Respawned at: " + spawnPos);
        //                        break;
        //                    }
        //                case "Aircraft":
        //                    {
        //                        Vehicle respawnCar = API.createVehicle((VehicleHash)model, spawnPos, spawnH, Colour1(), Colour2());
        //                        // You can also add more things, like vehicle modifications, number plate, etc.	
        //                        API.setEntityData(respawnCar, "RESPAWNABLE", true);
        //                        API.setEntityData(respawnCar, "SPAWN_POS", spawnPos);
        //                        API.setEntityData(respawnCar, "SPAWN_ROT", spawnH);
        //                        API.setEntityData(respawnCar, "VehicleType", "Aircraft");
        //                        API.setEntitySyncedData(respawnCar, "Tailnumber", RandomString(4));
        //                        API.consoleOutput(name + " Respawned at: " + spawnPos);
        //                        break;
        //                    }
        //                default:
        //                    {
        //                        API.deleteEntity(vehicle);
        //                        break;
        //                    }
        //            }
        //            //if (vehicleType == "Police")
        //            //{
        //            //    Vehicle respawnCar = API.createVehicle((VehicleHash)model, spawnPos, spawnH, 111, 0);
        //            //    // You can also add more things, like vehicle modifications, number plate, etc.	
        //            //    API.setEntityData(respawnCar, "RESPAWNABLE", true);
        //            //    API.setEntityData(respawnCar, "SPAWN_POS", spawnPos);
        //            //    API.setEntityData(respawnCar, "SPAWN_ROT", spawnH);
        //            //    API.setEntityData(respawnCar, "VehicleType", "Police");
        //            //    API.consoleOutput(name + " Respawned at: " + spawnPos);

        //            //    return;
        //            //}

        //            //else if (vehicleType == "Firetruck")
        //            //{
        //            //    Vehicle respawnCar = API.createVehicle((VehicleHash)model, spawnPos, spawnH, 134, 28);
        //            //    // You can also add more things, like vehicle modifications, number plate, etc.	
        //            //    API.setEntityData(respawnCar, "RESPAWNABLE", true);
        //            //    API.setEntityData(respawnCar, "SPAWN_POS", spawnPos);
        //            //    API.setEntityData(respawnCar, "SPAWN_ROT", spawnH);
        //            //    API.setEntityData(respawnCar, "VehicleType", "Firetruck");
        //            //    API.consoleOutput(name + " Respawned at: " + spawnPos);

        //            //    return;
        //            //}

        //            //else if (vehicleType == "Car")
        //            //{
        //            //    Vehicle respawnCar = API.createVehicle((VehicleHash)model, spawnPos, spawnH, Colour1(), Colour2());
        //            //    // You can also add more things, like vehicle modifications, number plate, etc.	
        //            //    API.setEntityData(respawnCar, "RESPAWNABLE", true);
        //            //    API.setEntityData(respawnCar, "SPAWN_POS", spawnPos);
        //            //    API.setEntityData(respawnCar, "SPAWN_ROT", spawnH);
        //            //    API.setEntityData(respawnCar, "VehicleType", "Car");
        //            //    API.consoleOutput(name + " Respawned at: " + spawnPos);

        //            //    return;
        //            //}

        //            //else if (vehicleType == "Boat")
        //            //{
        //            //    Vehicle respawnCar = API.createVehicle((VehicleHash)model, spawnPos, spawnH, Colour1(), Colour2());
        //            //    // You can also add more things, like vehicle modifications, number plate, etc.	
        //            //    API.setEntityData(respawnCar, "RESPAWNABLE", true);
        //            //    API.setEntityData(respawnCar, "SPAWN_POS", spawnPos);
        //            //    API.setEntityData(respawnCar, "SPAWN_ROT", spawnH);
        //            //    API.setEntityData(respawnCar, "VehicleType", "Boat");
        //            //    API.consoleOutput(name + " Respawned at: " + spawnPos);

        //            //    return;
        //            //}

        //            //else if (vehicleType == "Aircraft")
        //            //{
        //            //    Vehicle respawnCar = API.createVehicle((VehicleHash)model, spawnPos, spawnH, Colour1(), Colour2());
        //            //    // You can also add more things, like vehicle modifications, number plate, etc.	
        //            //    API.setEntityData(respawnCar, "RESPAWNABLE", true);
        //            //    API.setEntityData(respawnCar, "SPAWN_POS", spawnPos);
        //            //    API.setEntityData(respawnCar, "SPAWN_ROT", spawnH);
        //            //    API.setEntityData(respawnCar, "VehicleType", "Aircraft");
        //            //    API.setEntitySyncedData(respawnCar, "Tailnumber", RandomString(4));
        //            //    API.consoleOutput(name + " Respawned at: " + spawnPos);

        //            //    return;
        //            //}

        //            //else if (vehicleType == null)
        //            //{
        //            //    API.deleteEntity(vehicle);
        //            //}
        //        });
        //    }

        //    else
        //    {

        //        var t = Task.Run(async delegate
        //        {
        //            await Task.Delay(TimeSpan.FromSeconds(30));
        //            API.deleteEntity(vehicle);

        //            return;
        //        });
        //    }
        //}
    }
}