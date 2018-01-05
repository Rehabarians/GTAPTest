"use strict";
/// <reference path ="\types-gt-mp\index.d.ts" />
var resX = API.getScreenResolutionMantainRatio().Width;
var resY = API.getScreenResolutionMantainRatio().Height;
API.onUpdate.connect(function () {
    let hudVisability = API.getHudVisible();
    let player = API.getLocalPlayer();
    let inVeh = API.isPlayerInAnyVehicle(player);
    let veh = API.getPlayerVehicle(player);
    var vehType = API.getEntitySyncedData(veh, "VehicleType");
    let vehPos = API.getEntityPosition(veh);
    //var vehClass = API.getVehicleClass(API.getEntityModel(veh));
    //var vehRot = API.getEntityRotation(veh);
    let timeHour = API.getTime().Hours;
    let timeMinute = API.getTime().Minutes;
    var groundHeight = API.returnNative("0x1DD55701034110E5 ", 7, veh);
    let pos = API.getEntityPosition(API.getLocalPlayer());
    if (hudVisability === true) {
        if (timeHour < 10 && timeMinute < 10) {
            API.drawText("0" + API.getTime().Hours + ":0" + API.getTime().Minutes, resX - 100, resY - 1050, 0.6, 225, 225, 225, 225, 0, 1, false, true, 500);
        }
        else if (timeHour < 10 && timeMinute >= 10) {
            API.drawText("0" + API.getTime().Hours + ":" + API.getTime().Minutes, resX - 100, resY - 1050, 0.6, 225, 225, 225, 225, 0, 1, false, true, 500);
        }
        else if (timeHour >= 10 && timeMinute < 10) {
            API.drawText(API.getTime().Hours + ":0" + API.getTime().Minutes, resX - 100, resY - 1050, 0.6, 225, 225, 225, 225, 0, 1, false, true, 500);
        }
        else if (timeHour >= 10 && timeMinute >= 10) {
            API.drawText(API.getTime().Hours + ":" + API.getTime().Minutes, resX - 100, resY - 1050, 0.6, 225, 225, 225, 225, 0, 1, false, true, 500);
        }
        API.drawText("X: [" + `${Math.round(pos.X)}` + "]", resX - 500, resY - 1050, 0.5, 225, 225, 225, 225, 0, 1, false, true, 500);
        API.drawText("Y: [" + `${Math.round(pos.Y)}` + "]", resX - 500, resY - 1000, 0.5, 225, 225, 225, 225, 0, 1, false, true, 500);
        API.drawText("Z: [" + `${Math.round(pos.Z)}` + "]", resX - 500, resY - 950, 0.5, 225, 225, 225, 225, 0, 1, false, true, 500);
        if (inVeh) {
            if (vehType == "Aircraft") {
                var TNumber = API.getEntitySyncedData(veh, "Tailnumber");
                var ADFvalue = API.getEntitySyncedData(player, "ADF");
                var DMEvalue = API.getEntitySyncedData(player, "DME");
                var ADFstatus = API.getEntitySyncedData(player, "ADF Status");
                var DMEStatus = API.getEntitySyncedData(player, "DME Status");
                var ADFID = API.getEntitySyncedData(player, "ADFID");
                var DMEID = API.getEntitySyncedData(player, "DMEID");
                var vel = API.getEntityVelocity(veh);
                var AltitudeCalc = Math.sqrt(vehPos.X - vehPos.X +
                    vehPos.Y - vehPos.Y +
                    vehPos.Z * vehPos.Z);
                var Altitude = Math.round((AltitudeCalc * 3.28084) - 4);
                var groundHeightSmall = Math.round((groundHeight - 1) * 3.28084);
                var Airspeedcalc = Math.sqrt(// Code by Ariana on GTA Network Forums
                vel.X * vel.X +
                    vel.Y * vel.Y +
                    vel.Z - vel.Z);
                var vSpeed = Math.sqrt(vel.X - vel.X +
                    vel.Y - vel.Y +
                    vel.Z * vel.Z);
                var vSpeedCalc = Math.round(vSpeed * 3.28084);
                var Airspeed = Math.round(Airspeedcalc * 1.94384);
                const normalHdgVector = {
                    x: API.returnNative('0x8BB4EF4214E0E6D5', 7, veh),
                    y: API.returnNative('0x866A4A5FAE349510', 7, veh) // float ENTITY::GET_ENTITY_FORWARD_Y
                };
                // ^ the above object is a normalized Vector2 (e.g. instead of -180 to +180, it's -1.0 to +1.0)
                // this means we can do an atan2 then convert it's radians to degrees! (and slightly exploit it so it's easier correction)
                let Compass = Math.round(Math.atan2(normalHdgVector.x, normalHdgVector.y) * 180 / Math.PI);
                // hdg is now what an entity's Z rotation is when on flat ground! A little correction...
                if (Compass < 0) {
                    Compass = Math.abs(Compass);
                }
                else if (Compass > 0) {
                    Compass = 360 - Compass;
                }
                // The value we have is mirrored, so this flips it.
                Compass = 360 - Compass; //Writted by Katalina: GTA Network Forums
                API.drawText("Tailnumber: G-" + TNumber, resX - 100, resY - 1000, 0.4, 225, 225, 225, 225, 0, 1, false, true, 170);
                API.drawText("Airspeed: " + `${Airspeed}` + " Kts", resX - 1835, resY - 250, 0.35, 225, 225, 225, 225, 0, 1, false, true, 200);
                API.drawText("Altitude: " + `${Altitude}` + " ft", resX - 1665, resY - 250, 0.35, 225, 225, 225, 225, 0, 1, false, true, 200);
                API.drawText("Heading: [" + `${Compass}` + "]", resX - 1000, resY - 1050, 0.5, 225, 225, 225, 225, 0, 1, false, true, 500);
                //API.drawText(`${CompassMinus}`, resX - 1075, resY - 1050, 0.5, 225, 225, 225, 225, 0, 1, false, true, 500);
                //API.drawText(`${CompassPlus}`, resX - 9750, resY - 1050, 0.5, 225, 225, 225, 225, 0, 1, false, true, 500);
                API.drawText("VS: " + `${vSpeedCalc}` + " ft/min", resX - 1835, resY - 350, 0.35, 225, 225, 225, 225, 0, 1, false, true, 2000);
                var gHeightText = null;
                if (ADFstatus == true) {
                    API.drawText("ADF: " + `${ADFvalue}`, resX - 1200, resY - 250, 0.5, 225, 225, 225, 225, 0, 1, false, true, 500);
                    API.drawText(`${ADFID}`, resX - 1200, resY - 300, 0.5, 225, 225, 225, 225, 0, 1, false, true, 1000);
                }
                if (DMEStatus === true) {
                    API.drawText("DME: " + `${DMEvalue}`, resX - 1200, resY - 200, 0.5, 225, 225, 225, 225, 0, 1, false, true, 500);
                    API.drawText(`${DMEID}`, resX - 1200, resY - 150, 0.5, 225, 225, 225, 225, 0, 1, false, true, 1000);
                }
                if (groundHeight < 100) {
                    gHeightText = API.drawText("~r~AGL: " + `${groundHeightSmall}` + " ft", resX - 1835, resY - 275, 0.35, 225, 225, 225, 225, 0, 1, false, true, 2000);
                }
                else if (groundHeight < 300 && groundHeight > 100) {
                    gHeightText = API.drawText("~y~AGL: " + `${groundHeightSmall}` + " ft", resX - 1835, resY - 275, 0.35, 225, 225, 225, 225, 0, 1, false, true, 2000);
                }
                else if (groundHeight < 500 && groundHeight > 300) {
                    gHeightText = API.drawText("~g~AGL: " + `${groundHeightSmall}` + " ft", resX - 1835, resY - 275, 0.35, 225, 225, 225, 225, 0, 1, false, true, 2000);
                }
                else if (groundHeight < 1000 && groundHeight > 500) {
                    gHeightText = API.drawText("AGL: " + `${groundHeightSmall}` + " ft", resX - 1835, resY - 275, 0.35, 225, 225, 225, 225, 0, 1, false, true, 2000);
                }
                else if (groundHeight > 1000) {
                    gHeightText = null;
                }
            }
        }
    }
});
