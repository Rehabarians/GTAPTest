/// <reference path ="\types-gt-mp\Definitions\index.d.ts" />

var resX = API.getScreenResolutionMaintainRatio().Width;
var resY = API.getScreenResolutionMaintainRatio().Height;

API.onUpdate.connect(function () {
    let hudVisability: boolean = API.getHudVisible();
    let player: LocalHandle = API.getLocalPlayer();
    let inVeh: boolean = API.isPlayerInAnyVehicle(player);
    let veh: LocalHandle = API.getPlayerVehicle(player);
    let vehType: string = API.getEntitySyncedData(veh, "VehicleType");
    let vehPos: Vector3 = API.getEntityPosition(veh);
    //let firstPerson: boolean = API.isInFirstPersonCam(API.getLocalPlayer());
    //var vehClass = API.getVehicleClass(API.getEntityModel(veh));
    //var vehRot = API.getEntityRotation(veh);

    if (hudVisability === true) {

        Time();
        Coordinate(API.getLocalPlayer());

        if (inVeh) {          
            if (vehType == "Aircraft") {
                let TNumber: string = API.getEntitySyncedData(veh, "Tailnumber");
                var ADFvalue = API.getEntitySyncedData(player, "ADF");
                var DMEvalue = API.getEntitySyncedData(player, "DME");
                let ADFstatus: boolean = API.getEntitySyncedData(player, "ADF Status");
                let DMEStatus: boolean = API.getEntitySyncedData(player, "DME Status");
                let ILSStatus: boolean = API.getEntitySyncedData(API.getLocalPlayer(), "ILS Status");
                let ADFID: string = API.getEntitySyncedData(player, "ADFID");
                let DMEID: string = API.getEntitySyncedData(player, "DMEID");
                let ILSID: string = API.getEntitySyncedData(player, "ILS ID");

                let Heading: number = Compass(veh);
                let TrueAirspeed: number = Airspeed(veh);
                let ASL: number = Altitude(veh);
                let vSpeed: number = VSpeed(veh);
                let gHeight: number = GroundHeight(vehPos);
                var gHeightText = null;

                var scope1 = null;
                var scope2 = null;
                var centerline1 = null;
                var centerline2 = null;

                API.drawText("Tailnumber: G-" + TNumber, resX - 100, resY - 1000, 0.4, 225, 225, 225, 225, 0, 1, false, true, 170);

                //if (firstPerson !== true) {

                //}

                API.drawText("Airspeed: " + `${TrueAirspeed}` + " Kts", resX - 1835, resY - 250, 0.35, 225, 225, 225, 225, 0, 1, false, true, 200);
                API.drawText("Altitude: " + `${ASL}` + " ft", resX - 1665, resY - 250, 0.35, 225, 225, 225, 225, 0, 1, false, true, 200);
                API.drawText("Heading: [" + `${Heading}` + "]", resX - 1000, resY - 1050, 0.5, 225, 225, 225, 225, 0, 1, false, true, 500);
                //API.drawText(`${CompassMinus}`, resX - 1075, resY - 1050, 0.5, 225, 225, 225, 225, 0, 1, false, true, 500);
                //API.drawText(`${CompassPlus}`, resX - 9750, resY - 1050, 0.5, 225, 225, 225, 225, 0, 1, false, true, 500);
                API.drawText("VS: " + `${vSpeed}` + " ft/min", resX - 1835, resY - 350, 0.35, 225, 225, 225, 225, 0, 1, false, true, 2000);

                if (gHeight < 100) {
                    gHeightText = API.drawText("~r~AGL: " + `${gHeight}` + " ft", resX - 1835, resY - 275, 0.35, 225, 225, 225, 225, 0, 1, false, true, 2000);
                }
                else if (gHeight < 300 && gHeight > 100) {
                    gHeightText = API.drawText("~y~AGL: " + `${gHeight}` + " ft", resX - 1835, resY - 275, 0.35, 225, 225, 225, 225, 0, 1, false, true, 2000);
                }
                else if (gHeight < 500 && gHeight > 300) {
                    gHeightText = API.drawText("~g~AGL: " + `${gHeight}` + " ft", resX - 1835, resY - 275, 0.35, 225, 225, 225, 225, 0, 1, false, true, 2000);
                }
                else if (gHeight < 1000 && gHeight > 500) {
                    gHeightText = API.drawText("AGL: " + `${gHeight}` + " ft", resX - 1835, resY - 275, 0.35, 225, 225, 225, 225, 0, 1, false, true, 2000);
                }
                else if (gHeight > 1000) {
                    gHeightText = null;
                }

                if (ADFstatus === true) {
                    API.drawText("ADF: " + `${ADFvalue}`, resX - 1200, resY - 250, 0.5, 225, 225, 225, 225, 0, 1, false, true, 500);
                    API.drawText(`${ADFID}`, resX - 1200, resY - 300, 0.5, 225, 225, 225, 225, 0, 1, false, true, 1000);
                }
                if (DMEStatus === true) {
                    API.drawText("DME: " + `${DMEvalue}`, resX - 1200, resY - 200, 0.5, 225, 225, 225, 225, 0, 1, false, true, 500);
                    API.drawText(`${DMEID}`, resX - 1200, resY - 150, 0.5, 225, 225, 225, 225, 0, 1, false, true, 1000);
                }
                if (ILSStatus === true) {
                    if (ILSID === "LSIA") {
                        let ILSValue: number = API.getEntitySyncedData(player, "LSIA Glideslope");
                        let ILSCenterLine: number = API.getEntitySyncedData(player, "LSIA Centerline");

                        API.drawText("ILS Value: [" + `${(ILSCenterLine * 100)}` + "]", resX - 1350, resY - 100, 0.5, 225, 225, 225, 225, 0, 1, false, true, 500);

                        scope1 = API.drawRectangle(resX - 1650, resY - 200, 50, 200, 0, 0, 0, 150);
                        centerline1 = API.drawRectangle(resX - 1550, resY - 60, 200, 50, 0, 0, 0, 150);
                        if ((ILSValue * 1000) < 200) {
                            scope2 = API.drawRectangle(resX - 1650, resY - (200 - (ILSValue * 1000)), 50, 5, 255, 255, 255, 255);
                        }
                        else if ((ILSValue * 1000) > 200) {
                            scope2 = API.drawRectangle(resX - 1650, resY - 5, 50, 5, 255, 255, 255, 255);
                        }

                        if ((ILSCenterLine * 10) > -10 || (ILSCenterLine * 10) < 10) {
                            centerline2 = API.drawRectangle(resX - (1450 - (ILSCenterLine * 10)), resY - 60, 5, 50, 255, 255, 255, 255);
                        }
                        else if ((ILSCenterLine * 10) > 10) {
                            centerline2 = API.drawRectangle(resX - 1550, resY - 60, 5, 50, 255, 255, 255, 255);
                        }
                        else if ((ILSCenterLine * 10) < -10) {
                            centerline2 = API.drawRectangle(resX - 1350, resY - 60, 5, 50, 255, 255, 255, 255);
                        }
                    }
                }
                else if (ILSStatus === false) {
                    scope1 = null;
                    scope2 = null;
                }
            }

        }
    }
});

function Time() {
    let timeHour: number = API.getTime().Hours;
    let timeMinute: number = API.getTime().Minutes;

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
}

function Coordinate(Entity: LocalHandle) {

    let pos: Vector3 = API.getEntityPosition(Entity);

    API.drawText("X: [" + `${Math.round(pos.X)}` + "]", resX - 500, resY - 1050, 0.5, 225, 225, 225, 225, 0, 1, false, true, 500);
    API.drawText("Y: [" + `${Math.round(pos.Y)}` + "]", resX - 500, resY - 1000, 0.5, 225, 225, 225, 225, 0, 1, false, true, 500);
    API.drawText("Z: [" + `${Math.round(pos.Z)}` + "]", resX - 500, resY - 950, 0.5, 225, 225, 225, 225, 0, 1, false, true, 500);
}

function Compass(Vehicle: LocalHandle) {
    const normalHdgVector = {
        x: API.returnNative('0x8BB4EF4214E0E6D5', 7, Vehicle), // float ENTITY::GET_ENTITY_FORWARD_X
        y: API.returnNative('0x866A4A5FAE349510', 7, Vehicle) // float ENTITY::GET_ENTITY_FORWARD_Y
    }

    // ^ the above object is a normalized Vector2 (e.g. instead of -180 to +180, it's -1.0 to +1.0)
    // this means we can do an atan2 then convert it's radians to degrees! (and slightly exploit it so it's easier correction)
    let Compass = Math.round(Math.atan2(normalHdgVector.x, normalHdgVector.y) * 180 / Math.PI)

    // hdg is now what an entity's Z rotation is when on flat ground! A little correction...
    if (Compass < 0) {
        Compass = Math.abs(Compass)
    } else if (Compass > 0) {
        Compass = 360 - Compass
    }

    // The value we have is mirrored, so this flips it.
    Compass = 360 - Compass //Writted by Katalina/Stardust: GTA Network Forums

    return Compass;
}

function GroundHeight(Position: Vector3) {

    let groundHeight = API.getGroundHeight(Position) * 3.28084;
    //let groundHeightSmall: number = Math.round((groundHeight - 1) * 3.28084);

    return groundHeight;
}

function Airspeed(Vehicle: LocalHandle) {

    let vel: Vector3 = API.getEntityVelocity(Vehicle);

    let Airspeedcalc: number = Math.sqrt( // Code by Ariana on GTA Network Forums
        vel.X * vel.X +
        vel.Y * vel.Y +
        vel.Z - vel.Z
    );
    let Airspeed: number = Math.round(Airspeedcalc * 1.94384);

    return Airspeed;
}

function Altitude(Vehicle: LocalHandle) {

    let vehPos: Vector3 = API.getEntityPosition(Vehicle);

    var AltitudeCalc = Math.sqrt(
        vehPos.X - vehPos.X +
        vehPos.Y - vehPos.Y +
        vehPos.Z * vehPos.Z
    );

    var Altitude = Math.round((AltitudeCalc * 3.28084) - 4);

    return Altitude;
}

function VSpeed(Vehicle: LocalHandle) {

    let vel: Vector3 = API.getEntityVelocity(Vehicle);

    let vSpeed: number = Math.sqrt(
        vel.X - vel.X +
        vel.Y - vel.Y +
        vel.Z * vel.Z
    );

    var vSpeedCalc = Math.round(vSpeed * 3.28084);

    return vSpeedCalc;
}