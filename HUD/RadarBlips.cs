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
using System.Drawing;
using System.Runtime.InteropServices;

namespace HUD
{
    public class RadarBlips : Script
    {
        public RadarBlips()
        {
            API.onResourceStart += OnResourceStart;
        }

        private void OnResourceStart()
        {
            Blip LSIA = API.createBlip(new Vector3(-1220.037, -2749.073, 18.2224));
            API.setBlipColor(LSIA, 69);
            API.setBlipSprite(LSIA, 359);
            API.setBlipShortRange(LSIA, true);
            API.setBlipTransparency(LSIA, 255);
            API.setBlipName(LSIA, "Los Santos International Airport");

            Blip EVWA = API.createBlip(new Vector3(1226.155, 326.3367, 81.99096));
            API.setBlipColor(EVWA, 46);
            API.setBlipSprite(EVWA, 359);
            API.setBlipShortRange(EVWA, true);
            API.setBlipTransparency(EVWA, 255);
            API.setBlipName(EVWA, "East Vinewood Airfield");

            Blip Sandy = API.createBlip(new Vector3(1703.595, 3285.008, 41.13425));
            API.setBlipColor(Sandy, 69);
            API.setBlipSprite(Sandy, 359);
            API.setBlipShortRange(Sandy, true);
            API.setBlipTransparency(Sandy, 255);
            API.setBlipName(Sandy, "Sandy Shores Airport");

            Blip LSRescue = API.createBlip(new Vector3(-705.9416, -1399.981, 5.150307));
            API.setBlipColor(LSRescue, 38);
            API.setBlipSprite(LSRescue, 471);
            API.setBlipShortRange(LSRescue, true);
            API.setBlipTransparency(LSRescue, 255);
            API.setBlipName(LSRescue, "Los Santos Rescue Base");

            Blip FortZancudo = API.createBlip(new Vector3(-2342.702, 3261.683, 32.82763));
            API.setBlipSprite(FortZancudo, 359);
            API.setBlipColor(FortZancudo, 40);
            API.setBlipShortRange(FortZancudo, true);
            API.setBlipTransparency(FortZancudo, 255);
            API.setBlipName(FortZancudo, "Fort Zancudo Airport");

            Blip Carrier = API.createBlip(new Vector3(3091.46, -4717.844, 15.26262));
            API.setBlipSprite(Carrier, 455);
            API.setBlipColor(Carrier, 85);
            API.setBlipShortRange(Carrier, false);
            API.setBlipTransparency(Carrier, 255);
            API.setBlipName(Carrier, "Aircraft Carrier");

            Blip LSCrash = API.createBlip(new Vector3(-1100.903, -2365.319, 13.94516));
            API.setBlipSprite(LSCrash, 436);
            API.setBlipColor(LSCrash, 75);
            API.setBlipShortRange(LSCrash, true);
            API.setBlipTransparency(LSCrash, 255);
            API.setBlipName(LSCrash, "Los Santos Fire and Rescue");

            Blip SandyCrash = API.createBlip(new Vector3(1841.331, 3670.544, 33.67994));
            API.setBlipSprite(SandyCrash, 436);
            API.setBlipColor(SandyCrash, 75);
            API.setBlipShortRange(SandyCrash, true);
            API.setBlipTransparency(SandyCrash, 255);
            API.setBlipName(SandyCrash, "Sandy Shores Fire and Rescue");

            Blip MilitaryCrash = API.createBlip(new Vector3(-2099.255, 2831.774, 32.81004));
            API.setBlipSprite(MilitaryCrash, 436);
            API.setBlipColor(MilitaryCrash, 75);
            API.setBlipShortRange(MilitaryCrash, true);
            API.setBlipTransparency(MilitaryCrash, 255);
            API.setBlipName(MilitaryCrash, "Fort Zancudo Fire and Rescue");

            Blip LSSecurity = API.createBlip(new Vector3(-1221.657, -2801.196, 13.95141));
            API.setBlipSprite(LSSecurity, 526);
            API.setBlipColor(LSSecurity, 58);
            API.setBlipShortRange(LSSecurity, true);
            API.setBlipTransparency(LSSecurity, 255);
            API.setBlipName(LSSecurity, "Los Santos Security");

            Blip SandySecurity = API.createBlip(new Vector3(1857.244, 3680.099, 33.79046));
            API.setBlipSprite(SandySecurity, 526);
            API.setBlipColor(SandySecurity, 58);
            API.setBlipShortRange(SandySecurity, true);
            API.setBlipTransparency(SandySecurity, 255);
            API.setBlipName(SandySecurity, "Sandy Shores Security");

            Blip LSPassenger = API.createBlip(new Vector3(-880.8137, -2181.369, 8.9323));
            API.setBlipSprite(LSPassenger, 280);
            API.setBlipColor(LSPassenger, 18);
            API.setBlipShortRange(LSPassenger, true);
            API.setBlipTransparency(LSPassenger, 255);
            API.setBlipName(LSPassenger, "LS Passenger and Air Host Spawn");

            Blip SandyPassenger = API.createBlip(new Vector3(1616.52, 3571.88, 35.24349));
            API.setBlipSprite(SandyPassenger, 280);
            API.setBlipColor(SandyPassenger, 18);
            API.setBlipShortRange(SandyPassenger, true);
            API.setBlipTransparency(SandyPassenger, 255);
            API.setBlipName(SandyPassenger, "Sandy Shores Passenger and Air Host Spawn");
        }

    }
}
