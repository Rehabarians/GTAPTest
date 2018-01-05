using GrandTheftMultiplayer.Server;
using GrandTheftMultiplayer.Server.API;
using GrandTheftMultiplayer.Server.Managers;
using GrandTheftMultiplayer.Server.Elements;
using GrandTheftMultiplayer.Server.Constant;
using GrandTheftMultiplayer.Shared;
using GrandTheftMultiplayer.Shared.Math;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace GTAPilotsSpawn
{
    public class Spawn : Script
    {
        public class ColorHSL
        {
            public double Hue = 0;
            public double Saturation = 0;
            public double Lightness = 0;

            public ColorHSL() { }
            public ColorHSL(double h, double s, double l)
            {
                Hue = h;
                Saturation = s;
                Lightness = l;
            }
            public ColorHSL(Color rgb)
            {
                double r = rgb.red / 255.0;
                double g = rgb.green / 255.0;
                double b = rgb.blue / 255.0;
                double v;
                double m;
                double vm;
                double r2, g2, b2;

                v = Math.Max(r, g);
                v = Math.Max(v, b);
                m = Math.Min(r, g);
                m = Math.Min(m, b);
                Lightness = (m + v) / 2.0;
                if (Lightness <= 0.0)
                {
                    return;
                }

                vm = v - m;
                Saturation = vm;
                if (Saturation > 0.0)
                {
                    Saturation /= (Lightness <= 0.5) ? (v + m) : (2.0 - v - m);
                }
                else
                {
                    return;
                }

                r2 = (v - r) / vm;
                g2 = (v - g) / vm;
                b2 = (v - b) / vm;

                if (r == v)
                {
                    Hue = (g == m ? 5.0 + b2 : 1.0 - g2);
                }
                else if (g == v)
                {
                    Hue = (b == m ? 1.0 + r2 : 3.0 - b2);
                }
                else
                {
                    Hue = (r == m ? 3.0 + g2 : 5.0 - r2);
                }

                Hue /= 6.0;
            }

            public Color ToColorRGB()
            {
                double v;
                double r, g, b;

                double h = Hue;
                double sl = Saturation;
                double l = Lightness;

                r = l; g = l; b = l;
                v = (l <= 0.5) ? (l * (1.0 + sl)) : (l + sl - l * sl);

                if (v > 0)
                {
                    double m;
                    double sv;
                    int sextant;
                    double fract, vsf, mid1, mid2;

                    m = l + l - v;
                    sv = (v - m) / v;
                    h *= 5.0;
                    sextant = (int)h;
                    fract = h - sextant;
                    vsf = v * sv * fract;
                    mid1 = m + vsf;
                    mid2 = v - vsf;

                    switch (sextant)
                    {
                        case 0: r = v; g = mid1; b = m; break;
                        case 1: r = mid2; g = v; b = m; break;
                        case 2: r = m; g = v; b = mid1; break;
                        case 3: r = m; g = mid2; b = v; break;
                        case 4: r = mid1; g = m; b = v; break;
                        case 5: r = v; g = m; b = mid2; break;
                    }
                }

                return new Color(
                    Convert.ToInt32(Math.Min(1.0f, r) * 255.0f),
                    Convert.ToInt32(Math.Min(1.0f, g) * 255.0f),
                    Convert.ToInt32(Math.Min(1.0f, b) * 255.0f)
                );
            }
        }

        public Spawn()
        {
            API.onPlayerFinishedDownload += PlayerDownloaded;
            API.onClientEventTrigger += ClientEventTrigger;
            API.onPlayerConnected += OnPlayerConnected;
        }

        private void OnPlayerConnected(Client player)
        {
            API.sendNativeToPlayer(player, Hash.DO_SCREEN_FADE_OUT, 0);
        }

        public void PlayerDownloaded(Client player)
        {
            API.setPlayerSkin(player, PedHash.FreemodeMale01);
            //API.sendNativeToPlayer(player, Hash.DO_SCREEN_FADE_OUT, 0);
            Random rnd = new Random();
            int Dimension = rnd.Next(1, 50);

            API.setEntityPosition(player, new Vector3(-860.561, -2420.079, 134.29277));

            API.setEntityPositionFrozen(player, true);
            API.setEntityCollisionless(player, true);

            API.setEntityDimension(player, Dimension);

            API.setPlayerNametagVisible(player, false);
            API.sendNativeToPlayer(player, Hash.DO_SCREEN_FADE_IN, 10000);

            API.triggerClientEvent(player, "Intro");
        }

        public void ClientEventTrigger(Client sender, string Event, params object[] arguments)
        {
            if (Event == "LSIA")
            {
                API.consoleOutput(LogCat.Debug, "LSIA Triggered");
                API.setEntityPosition(sender, new Vector3(-1220.037, -2749.073, 18.2224));
                API.setEntityRotation(sender, new Vector3(0, 0, 50.27066));

                API.setPlayerNametagVisible(sender, true);

                API.setEntityData(sender, "Class", arguments[0].ToString());
                API.setEntityData(sender, "SpawnID", "LSIA");

                if (arguments[0].ToString() == "Civil")
                {
                    var hsl = new ColorHSL(120, 0.46, 0.64);
                    var rgb = hsl.ToColorRGB();
                    var color = rgb.red.ToString("X2") + rgb.green.ToString("X2") + rgb.blue.ToString("X2");
                    sender.setData("PROFILE_color", color);
                }
                else if (arguments[0].ToString() == "Repair")
                {
                    var hsl = new ColorHSL(47, 0.45, 0.36);
                    var rgb = hsl.ToColorRGB();
                    var color = rgb.red.ToString("X2") + rgb.green.ToString("X2") + rgb.blue.ToString("X2");
                    sender.setData("PROFILE_color", color);
                }
                //var SkinID = API.getEntitySyncedData(sender, "SkinID");

                //API.setPlayerSkin(sender, SkinID);

                var Flare = WeaponHash.Flare;
                var Para = WeaponHash.Parachute;

                API.givePlayerWeapon(sender, Flare, 999, false, true);
                API.givePlayerWeapon(sender, Para, 1, false, true);

                API.setEntityPositionFrozen(sender, false);
                API.setEntityCollisionless(sender, false);

                API.triggerClientEvent(sender, "SpawnMenuStop");
                API.setEntityDimension(sender, 0);
            }

            else if (Event == "EVWA")
            {
                API.setEntityPosition(sender, new Vector3(1226.155, 326.3367, 81.99096));
                API.setEntityRotation(sender, new Vector3(0, 0, 146.4828));

                API.setPlayerNametagVisible(sender, true);

                API.setEntityData(sender, "SpawnID", "EVWA");

                API.setEntityData(sender, "Class", arguments[0].ToString());

                if (arguments[0].ToString() == "Civil")
                {
                    var hsl = new ColorHSL(120, 0.46, 0.64);
                    var rgb = hsl.ToColorRGB();
                    var color = rgb.red.ToString("X2") + rgb.green.ToString("X2") + rgb.blue.ToString("X2");
                    API.setEntityData(sender, "PROFILE_color", color);
                }
                else if (arguments[0].ToString() == "Stunt")
                {
                    var hsl = new ColorHSL(61, 0.87, 0.55);
                    var rgb = hsl.ToColorRGB();
                    var color = rgb.red.ToString("X2") + rgb.green.ToString("X2") + rgb.blue.ToString("X2");
                    API.setEntityData(sender, "PROFILE_color", color);
                }

                //var SkinID = API.getEntitySyncedData(sender, "SkinID");

                //API.setPlayerSkin(sender, SkinID);

                var Flare = WeaponHash.Flare;
                var Para = WeaponHash.Parachute;

                API.givePlayerWeapon(sender, Flare, 999, false, true);
                API.givePlayerWeapon(sender, Para, 1, false, true);

                API.setEntityPositionFrozen(sender, false);
                API.setEntityCollisionless(sender, false);

                API.triggerClientEvent(sender, "SpawnMenuStop");
                API.setEntityDimension(sender, 0);
            }

            else if (Event == "Sandy")
            {
                API.setEntityPosition(sender, new Vector3(1703.595, 3285.008, 41.13425));
                API.setEntityRotation(sender, new Vector3(0, 0, -166.8748));

                API.setPlayerNametagVisible(sender, true);

                API.setEntityData(sender, "SpawnID", "Sandy");

                API.setEntityData(sender, "Class", arguments[0].ToString());

                if (arguments[0].ToString() == "Civil")
                {
                    var hsl = new ColorHSL(120, 0.46, 0.64);
                    var rgb = hsl.ToColorRGB();
                    var color = rgb.red.ToString("X2") + rgb.green.ToString("X2") + rgb.blue.ToString("X2");
                    API.setEntityData(sender, "PROFILE_color", color);
                }
                else if (arguments[0].ToString() == "Stunt")
                {
                    var hsl = new ColorHSL(61, 0.87, 0.55);
                    var rgb = hsl.ToColorRGB();
                    var color = rgb.red.ToString("X2") + rgb.green.ToString("X2") + rgb.blue.ToString("X2");
                    API.setEntityData(sender, "PROFILE_color", color);
                }
                else if (arguments[0].ToString() == "Repair")
                {
                    var hsl = new ColorHSL(47, 0.45, 0.36);
                    var rgb = hsl.ToColorRGB();
                    var color = rgb.red.ToString("X2") + rgb.green.ToString("X2") + rgb.blue.ToString("X2");
                    API.setEntityData(sender, "PROFILE_color", color);
                }

                //var SkinID = API.getEntitySyncedData(sender, "SkinID");

                //API.setPlayerSkin(sender, SkinID);

                var Flare = WeaponHash.Flare;
                var Para = WeaponHash.Parachute;

                API.givePlayerWeapon(sender, Flare, 999, false, true);
                API.givePlayerWeapon(sender, Para, 1, false, true);

                API.setEntityPositionFrozen(sender, false);
                API.setEntityCollisionless(sender, false);

                API.triggerClientEvent(sender, "SpawnMenuStop");
                API.setEntityDimension(sender, 0);
            }

            else if (Event == "Military")
            {
                API.setEntityPosition(sender, new Vector3(-2342.702, 3261.683, 32.82763));
                API.setEntityRotation(sender, new Vector3(0, 0, -122.7226));

                API.setPlayerNametagVisible(sender, true);

                API.setEntityData(sender, "SpawnID", "Military");
         
                API.setEntityData(sender, "Class", arguments[0].ToString());

                if (arguments[0].ToString() == "Military")
                {
                    var hsl = new ColorHSL(0, 0.00, 0.33);
                    var rgb = hsl.ToColorRGB();
                    var color = rgb.red.ToString("X2") + rgb.green.ToString("X2") + rgb.blue.ToString("X2");
                    API.setEntityData(sender, "PROFILE_color", color);
                }
                else if (arguments[0].ToString() == "Repair")
                {
                    var hsl = new ColorHSL(47, 0.45, 0.36);
                    var rgb = hsl.ToColorRGB();
                    var color = rgb.red.ToString("X2") + rgb.green.ToString("X2") + rgb.blue.ToString("X2");
                    API.setEntityData(sender, "PROFILE_color", color);
                }
                //var SkinID = API.getEntitySyncedData(sender, "SkinID");

                //API.setPlayerSkin(sender, SkinID);

                var Flare = WeaponHash.Flare;
                var Para = WeaponHash.Parachute;

                API.givePlayerWeapon(sender, Flare, 999, false, true);
                API.givePlayerWeapon(sender, Para, 1, false, true);

                API.setEntityPositionFrozen(sender, false);
                API.setEntityCollisionless(sender, false);

                API.triggerClientEvent(sender, "SpawnMenuStop");
                API.setEntityDimension(sender, 0);
            }

            else if (Event == "Carrier")
            {
                API.setEntityPosition(sender, new Vector3(3091.46, -4717.844, 15.26262));
                API.setEntityRotation(sender, new Vector3(0, 0, 98.67543));
                API.setPlayerNametagVisible(sender, true);

                API.setEntityData(sender, "Class", arguments[0].ToString());

                API.setEntityData(sender, "SpawnID", "Carrier");

                if (arguments[0].ToString() == "Military")
                {
                    var hsl = new ColorHSL(0, 0.00, 0.33);
                    var rgb = hsl.ToColorRGB();
                    var color = rgb.red.ToString("X2") + rgb.green.ToString("X2") + rgb.blue.ToString("X2");
                    API.setEntityData(sender, "PROFILE_color", color);
                }
                else if (arguments[0].ToString() == "Repair")
                {
                    var hsl = new ColorHSL(47, 0.45, 0.36);
                    var rgb = hsl.ToColorRGB();
                    var color = rgb.red.ToString("X2") + rgb.green.ToString("X2") + rgb.blue.ToString("X2");
                    API.setEntityData(sender, "PROFILE_color", color);
                }

                //var SkinID = API.getEntitySyncedData(sender, "SkinID");

                //API.setPlayerSkin(sender, SkinID);

                var Flare = WeaponHash.Flare;
                var Para = WeaponHash.Parachute;

                API.givePlayerWeapon(sender, Flare, 999, false, true);
                API.givePlayerWeapon(sender, Para, 1, false, true);

                API.setEntityPositionFrozen(sender, false);
                API.setEntityCollisionless(sender, false);

                API.triggerClientEvent(sender, "SpawnMenuStop");
                API.setEntityDimension(sender, 0);
            }

            else if (Event == "LS Rescue")
            {
                API.setEntityPosition(sender, new Vector3(-705.9416, -1399.981, 5.150307));
                API.setEntityRotation(sender, new Vector3(0, 0, 96.21136));

                API.setPlayerNametagVisible(sender, true);

                API.setEntityData(sender, "SpawnID", "LS Rescue");

                API.setEntityData(sender, "Class", arguments[0].ToString());

                if (arguments[0].ToString() == "Rescue")
                {
                    var hsl = new ColorHSL(212, 0.55, 0.48);
                    var rgb = hsl.ToColorRGB();
                    var color = rgb.red.ToString("X2") + rgb.green.ToString("X2") + rgb.blue.ToString("X2");
                    API.setEntityData(sender, "PROFILE_color", color);
                }

                //var SkinID = API.getEntitySyncedData(sender, "SkinID");

                //API.setPlayerSkin(sender, SkinID);

                var Flare = WeaponHash.Flare;
                var Para = WeaponHash.Parachute;

                API.givePlayerWeapon(sender, Flare, 999, false, true);
                API.givePlayerWeapon(sender, Para, 1, false, true);

                API.setEntityPositionFrozen(sender, false);
                API.setEntityCollisionless(sender, false);

                API.triggerClientEvent(sender, "SpawnMenuStop");
                API.setEntityDimension(sender, 0);

            }

            //else if (Event == "Sandy Rescue")
            //{
            //    API.setEntityPosition(sender, new Vector3());
            //    API.setEntityRotation(sender, new Vector3());

            //    PedHash SkinID = API.getEntitySyncedData(sender, "SkinID");

            //    API.setPlayerSkin(sender, SkinID);
            //}

            else if (Event == "LS Crash")
            {
                API.setEntityPosition(sender, new Vector3(-1100.903, -2365.319, 13.94516));
                API.setEntityRotation(sender, new Vector3(0, 0, 142.0741));

                API.setPlayerNametagVisible(sender, true);

                API.setEntityData(sender, "SpawnID", "LS Crash");

                API.setEntityData(sender, "Class", arguments[0].ToString());

                if (arguments[0].ToString() == "Fire")
                {
                    var hsl = new ColorHSL(0, 0.73, 0.56);
                    var rgb = hsl.ToColorRGB();
                    var color = rgb.red.ToString("X2") + rgb.green.ToString("X2") + rgb.blue.ToString("X2");
                    API.setEntityData(sender, "PROFILE_color", color);
                }

                //var SkinID = API.getEntitySyncedData(sender, "SkinID");

                //API.setPlayerSkin(sender, SkinID);

                var Flare = WeaponHash.Flare;
                var Para = WeaponHash.Parachute;

                API.givePlayerWeapon(sender, Flare, 999, false, true);
                API.givePlayerWeapon(sender, Para, 1, false, true);

                API.setEntityPositionFrozen(sender, false);
                API.setEntityCollisionless(sender, false);

                API.triggerClientEvent(sender, "SpawnMenuStop");
                API.setEntityDimension(sender, 0);
            }

            else if (Event == "LS Medic")
            {
                API.setEntityPosition(sender, new Vector3(-1033.479, -2384.57, 14.08926));
                API.setEntityRotation(sender, new Vector3(0, 0, -124.4426));

                API.setPlayerNametagVisible(sender, true);

                API.setEntityData(sender, "SpawnID", "LS Medic");

                API.setEntityData(sender, "Class", arguments[0].ToString());

                if (arguments[0].ToString() == "Medic")
                {
                    var hsl = new ColorHSL(0, 0.0, 0.81);
                    var rgb = hsl.ToColorRGB();
                    var color = rgb.red.ToString("X2") + rgb.green.ToString("X2") + rgb.blue.ToString("X2");
                    API.setEntityData(sender, "PROFILE_color", color);
                }

                //var SkinID = API.getEntitySyncedData(sender, "SkinID");

                //API.setPlayerSkin(sender, SkinID);

                var Flare = WeaponHash.Flare;
                var Para = WeaponHash.Parachute;

                API.givePlayerWeapon(sender, Flare, 999, false, true);
                API.givePlayerWeapon(sender, Para, 1, false, true);

                API.setEntityPositionFrozen(sender, false);
                API.setEntityCollisionless(sender, false);

                API.triggerClientEvent(sender, "SpawnMenuStop");
                API.setEntityDimension(sender, 0);
            }

            else if (Event == "Sandy Crash")
            {
                API.setEntityPosition(sender, new Vector3(1841.331, 3670.544, 33.67994));
                API.setEntityRotation(sender, new Vector3(0, 0, -154.3216));

                API.setPlayerNametagVisible(sender, true);

                API.setEntityData(sender, "SpawnID", "Sandy Crash");

                API.setEntityData(sender, "Class", arguments[0].ToString());

                if (arguments[0].ToString() == "Fire")
                {
                    var hsl = new ColorHSL(0, 0.73, 0.56);
                    var rgb = hsl.ToColorRGB();
                    var color = rgb.red.ToString("X2") + rgb.green.ToString("X2") + rgb.blue.ToString("X2");
                    API.setEntityData(sender, "PROFILE_color", color);
                }
                else if (arguments[0].ToString() == "Medic")
                {
                    var hsl = new ColorHSL(0, 0.0, 0.81);
                    var rgb = hsl.ToColorRGB();
                    var color = rgb.red.ToString("X2") + rgb.green.ToString("X2") + rgb.blue.ToString("X2");
                    API.setEntityData(sender, "PROFILE_color", color);
                }

                //var SkinID = API.getEntitySyncedData(sender, "SkinID");

                //API.setPlayerSkin(sender, SkinID);

                var Flare = WeaponHash.Flare;
                var Para = WeaponHash.Parachute;

                API.givePlayerWeapon(sender, Flare, 999, false, true);
                API.givePlayerWeapon(sender, Para, 1, false, true);

                API.setEntityPositionFrozen(sender, false);
                API.setEntityCollisionless(sender, false);

                API.triggerClientEvent(sender, "SpawnMenuStop");
                API.setEntityDimension(sender, 0);
            }

            else if (Event == "Military Crash")
            {
                API.setEntityPosition(sender, new Vector3(-2099.255, 2831.774, 32.81004));
                API.setEntityRotation(sender, new Vector3(0, 0, -7.615088));

                API.setPlayerNametagVisible(sender, true);

                API.setEntityData(sender, "SpawnID", "Military Crash");

                API.setEntityData(sender, "Class", arguments[0].ToString());

                if (arguments[0].ToString() == "Fire")
                {
                    var hsl = new ColorHSL(0, 0.73, 0.56);
                    var rgb = hsl.ToColorRGB();
                    var color = rgb.red.ToString("X2") + rgb.green.ToString("X2") + rgb.blue.ToString("X2");
                    API.setEntityData(sender, "PROFILE_color", color);
                }
                else if (arguments[0].ToString() == "Medic")
                {
                    var hsl = new ColorHSL(0, 0.0, 0.81);
                    var rgb = hsl.ToColorRGB();
                    var color = rgb.red.ToString("X2") + rgb.green.ToString("X2") + rgb.blue.ToString("X2");
                    API.setEntityData(sender, "PROFILE_color", color);
                }

                //var SkinID = API.getEntitySyncedData(sender, "SkinID");

                //API.setPlayerSkin(sender, SkinID);

                var Flare = WeaponHash.Flare;
                var Para = WeaponHash.Parachute;

                API.givePlayerWeapon(sender, Flare, 999, false, true);
                API.givePlayerWeapon(sender, Para, 1, false, true);

                API.setEntityPositionFrozen(sender, false);
                API.setEntityCollisionless(sender, false);

                API.triggerClientEvent(sender, "SpawnMenuStop");
                API.setEntityDimension(sender, 0);
            }

            else if (Event == "LS Security")
            {
                API.setEntityPosition(sender, new Vector3(-1221.657, -2801.196, 13.95141));
                API.setEntityRotation(sender, new Vector3(0, 0, -156.9228));

                API.setPlayerNametagVisible(sender, true);

                API.setEntityData(sender, "SpawnID", "LS Security");

                API.setEntityData(sender, "Class", arguments[0].ToString());

                if (arguments[0].ToString() == "Security")
                {
                    var hsl = new ColorHSL(252, 0.28, 0.36);
                    var rgb = hsl.ToColorRGB();
                    var color = rgb.red.ToString("X2") + rgb.green.ToString("X2") + rgb.blue.ToString("X2");
                    API.setEntityData(sender, "PROFILE_color", color);

                    WeaponHash StunGun = WeaponHash.StunGun;
                    API.givePlayerWeapon(sender, StunGun, 1, false, true);
                }

                //var SkinID = API.getEntitySyncedData(sender, "SkinID");

                //API.setPlayerSkin(sender, SkinID);

                var Flare = WeaponHash.Flare;
                var Para = WeaponHash.Parachute;

                API.givePlayerWeapon(sender, Flare, 999, false, true);
                API.givePlayerWeapon(sender, Para, 1, false, true);

                //string ClassType = API.getEntitySyncedData(sender, "Class");

                API.setEntityPositionFrozen(sender, false);
                API.setEntityCollisionless(sender, false);

                API.triggerClientEvent(sender, "SpawnMenuStop");
                API.setEntityDimension(sender, 0);
            }

            else if (Event == "Sandy Security")
            {
                API.setEntityPosition(sender, new Vector3(1857.244, 3680.099, 33.79046));
                API.setEntityRotation(sender, new Vector3(0, 0, -155.6222));

                API.setPlayerNametagVisible(sender, true);

                API.setEntityData(sender, "SpawnID", "Sandy Security");

                API.setEntityData(sender, "Class", arguments[0].ToString());

                if (arguments[0].ToString() == "Security")
                {
                    var hsl = new ColorHSL(252, 0.28, 0.36);
                    var rgb = hsl.ToColorRGB();
                    var color = rgb.red.ToString("X2") + rgb.green.ToString("X2") + rgb.blue.ToString("X2");
                    API.setEntityData(sender, "PROFILE_color", color);

                    WeaponHash StunGun = WeaponHash.StunGun;
                    API.givePlayerWeapon(sender, StunGun, 1, false, true);
                }

                //var SkinID = API.getEntitySyncedData(sender, "SkinID");

                //API.setPlayerSkin(sender, SkinID);

                var Flare = WeaponHash.Flare;
                var Para = WeaponHash.Parachute;

                API.givePlayerWeapon(sender, Flare, 999, false, true);
                API.givePlayerWeapon(sender, Para, 1, false, true);

                //string ClassType = API.getEntitySyncedData(sender, "Class");

                API.setEntityPositionFrozen(sender, false);
                API.setEntityCollisionless(sender, false);

                API.triggerClientEvent(sender, "SpawnMenuStop");
                API.setEntityDimension(sender, 0);
            }

            else if (Event == "LS Passenger")
            {
                API.setEntityPosition(sender, new Vector3(-880.8137, -2181.369, 8.9323));
                API.setEntityRotation(sender, new Vector3(0, 0, 129.66));

                API.setEntityData(sender, "SpawnID", "LS Passenger");

                API.setPlayerNametagVisible(sender, true);

                API.setEntityData(sender, "Class", arguments[0].ToString());

                if (arguments[0].ToString() == "Host")
                {
                    var hsl = new ColorHSL(328, 0.92, 0.62);
                    var rgb = hsl.ToColorRGB();
                    var color = rgb.red.ToString("X2") + rgb.green.ToString("X2") + rgb.blue.ToString("X2");
                    API.setEntityData(sender, "PROFILE_color", color);
                }
                else if (arguments[0].ToString() == "Passenger")
                {
                    var hsl = new ColorHSL(203, 0.66, 0.77);
                    var rgb = hsl.ToColorRGB();
                    var color = rgb.red.ToString("X2") + rgb.green.ToString("X2") + rgb.blue.ToString("X2");
                    API.setEntityData(sender, "PROFILE_color", color);
                }

                //var SkinID = API.getEntitySyncedData(sender, "SkinID");

                //API.setPlayerSkin(sender, SkinID);

                var Flare = WeaponHash.Flare;
                var Para = WeaponHash.Parachute;

                API.givePlayerWeapon(sender, Flare, 999, false, true);
                API.givePlayerWeapon(sender, Para, 1, false, true);

                API.setEntityPositionFrozen(sender, false);
                API.setEntityCollisionless(sender, false);

                API.triggerClientEvent(sender, "SpawnMenuStop");
                API.setEntityDimension(sender, 0);
            }

            else if (Event == "Sandy Passenger")
            {
                API.setEntityPosition(sender, new Vector3(1616.52, 3571.88, 35.24349));
                API.setEntityRotation(sender, new Vector3(0, 0, -64.50074));

                API.setPlayerNametagVisible(sender, true);

                API.setEntityData(sender, "SpawnID", "Sandy Passenger");

                API.setEntityData(sender, "Class", arguments[0].ToString());

                if (arguments[0].ToString() == "Host")
                {
                    var hsl = new ColorHSL(328, 0.92, 0.62);
                    var rgb = hsl.ToColorRGB();
                    var color = rgb.red.ToString("X2") + rgb.green.ToString("X2") + rgb.blue.ToString("X2");
                    API.setEntityData(sender, "PROFILE_color", color);
                }
                else if (arguments[0].ToString() == "Passenger")
                {
                    var hsl = new ColorHSL(203, 0.66, 0.77);
                    var rgb = hsl.ToColorRGB();
                    var color = rgb.red.ToString("X2") + rgb.green.ToString("X2") + rgb.blue.ToString("X2");
                    API.setEntityData(sender, "PROFILE_color", color);
                }

                //var SkinID = API.getEntitySyncedData(sender, "SkinID");

                //API.setPlayerSkin(sender, SkinID);

                var Flare = WeaponHash.Flare;
                var Para = WeaponHash.Parachute;

                API.givePlayerWeapon(sender, Flare, 999, false, true);
                API.givePlayerWeapon(sender, Para, 1, false, true);

                API.setEntityPositionFrozen(sender, false);
                API.setEntityCollisionless(sender, false);

                API.triggerClientEvent(sender, "SpawnMenuStop");
                API.setEntityDimension(sender, 0);
            }

            else if (Event == "Base Jump")
            {
                API.setEntityPosition(sender, new Vector3(-149.1562, -961.2599, 269.1353));
                API.setEntityRotation(sender, new Vector3(0, 0, -114.7388));

                API.setPlayerNametagVisible(sender, true);

                //var SkinID = API.getEntitySyncedData(sender, "SkinID");

                //API.setPlayerSkin(sender, SkinID);

                var Flare = WeaponHash.Flare;
                var Para = WeaponHash.Parachute;

                API.givePlayerWeapon(sender, Flare, 999, false, true);
                API.givePlayerWeapon(sender, Para, 1, false, true);

                API.setEntityPositionFrozen(sender, false);
                API.setEntityCollisionless(sender, false);

                API.triggerClientEvent(sender, "SpawnMenuStop");
                API.setEntityDimension(sender, 0);
            }

            else if (Event == "SkinCam")
            {
                API.setEntityPosition(sender, new Vector3(402.8911, -996.9224, -99.00024));
                API.setEntityRotation(sender, new Vector3(0, 0, 178.7716));
            }

            else if (Event == "Skip")
            {
                API.triggerClientEvent(sender, "SpawnMenuStart");
            }
        }
        
        [Command("Spawn")]
        public void SpawnCommand(Client player)
        {
            Random rnd = new Random();
            int Dimension = rnd.Next(1, 50);

            bool inVehicle = API.isPlayerInAnyVehicle(player);

            if (inVehicle == true)
            {
                NetHandle vehicle = API.getPlayerVehicle(player);
                API.warpPlayerOutOfVehicle(player);
            }

            API.setEntityPosition(player, new Vector3(-860.561, -2420.079, 134.29277));
            API.resetEntityData(player, "Class");
            API.resetEntityData(player, "SpawnID");

            player.resetData("PROFILE_color");
            API.setEntityPositionFrozen(player, true);
            API.setEntityCollisionless(player, true);

            API.setEntityDimension(player, Dimension);

            string SkinSelectStart = "SpawnMenuStart";

            //API.setPlayerNametagVisible(player, false);
            API.triggerClientEvent(player, SkinSelectStart, true);
            API.setPlayerNametagVisible(player, false);
        }

        [Command("skip")]
        public void SkipCommand(Client player)
        {
            API.triggerClientEvent(player, "SkipCommand");
        }
    }
}
