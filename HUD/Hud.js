/// <reference path ="\types-gtanetwork\index.d.ts" />
"use strict";
var resX = API.getScreenResolutionMantainRatio().Width;
var resY = API.getScreenResolutionMantainRatio().Height;
API.onUpdate.connect(function () {
    var player = API.getLocalPlayer();
    var inVeh = API.isPlayerInAnyVehicle(player);
    var veh = API.getPlayerVehicle(player);
    var vehType = API.getEntitySyncedData(veh, "VehicleType");
    var vehPos = API.getEntityPosition(veh);
    //var vehClass = API.getVehicleClass(API.getEntityModel(veh));
    //var vehRot = API.getEntityRotation(veh);
    var timeHour = API.getTime().Hours;
    var timeMinute = API.getTime().Minutes;
    var groundHeight = API.returnNative("0x1DD55701034110E5 ", 7, veh);
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
    if (inVeh) {
        if (vehType == "Aircraft") {
            var TNumber = API.getEntitySyncedData(veh, "Tailnumber");
            var ADFvalue = API.getEntitySyncedData(player, "ADF");
            var DMEvalue = API.getEntitySyncedData(player, "DME");
            var ADFstatus = API.getEntitySyncedData(player, "ADF Status");
            var DMEStatus = API.getEntitySyncedData(player, "DME Status");
            var ADFID = API.getEntitySyncedData(player, "ADFID");
            var DMEID = API.getEntitySyncedData(player, "DMEID");
            var pos = API.getEntityPosition(veh);
            var vel = API.getEntityVelocity(veh);
            var GHeightCalc = Math.sqrt(pos.X - pos.X +
                pos.Y - pos.Y +
                pos.Z * pos.Z);
            var test1 = null;
            var GHeight = Math.round((GHeightCalc * 3.28084) - 4);
            var groundHeightSmall = Math.round(groundHeight - 1);
            var Airspeedcalc = Math.sqrt(// Code by Ariana on GTA Network Forums
            vel.X * vel.X +
                vel.Y * vel.Y +
                vel.Z * vel.Z);
            //var vSpeed = Math.round((groundHeightSmall - test1) / 60);
            var Airspeed = Math.round(Airspeedcalc * 1.94384);
            //var sign = Math.sign(vehRot.Z);
            //if (sign == 1) {
            //    var Compass = Math.round(360 - vehRot.Z);
            //}
            //else if (sign == -1) {
            //    var Compass = Math.round(Math.abs(vehRot.Z));
            //}
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
            API.drawText("Altitude: " + `${GHeight}` + " ft", resX - 1665, resY - 250, 0.35, 225, 225, 225, 225, 0, 1, false, true, 200);
            API.drawText("Heading: [" + `${Compass}` + "]", resX - 1000, resY - 1050, 0.5, 225, 225, 225, 225, 0, 1, false, true, 500);
            //API.drawText(`${CompassMinus}`, resX - 1075, resY - 1050, 0.5, 225, 225, 225, 225, 0, 1, false, true, 500);
            //API.drawText(`${CompassPlus}`, resX - 9750, resY - 1050, 0.5, 225, 225, 225, 225, 0, 1, false, true, 500);
            //API.drawText("VS: " + `${vSpeed}` + " ft/min", resX - 1835, resY - 350, 0.35, 225, 225, 225, 225, 0, 1, false, true, 2000);
            var gHeightText = null;
            if (ADFstatus == true) {
                API.drawText("ADF: " + `${ADFvalue}`, resX - 1200, resY - 250, 0.5, 225, 225, 225, 225, 0, 1, false, true, 500);
                API.drawText(`${ADFID}`, resX - 1200, resY - 300, 0.5, 225, 225, 225, 225, 0, 1, false, true, 1000);
            }
            if (DMEStatus == true) {
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
});
