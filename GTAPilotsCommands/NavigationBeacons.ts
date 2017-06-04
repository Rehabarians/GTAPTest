/// <reference path ="\types-gtanetwork\index.d.ts" />

var resX = API.getScreenResolutionMantainRatio().Width;
var resY = API.getScreenResolutionMantainRatio().Height;

API.onServerEventTrigger.connect(function (Command, args) {

    var player = API.getLocalPlayer();
    var ADFStatus = null;
    var DMEStatus = null;
    var ADFID = "";
    var DMEID = "";

    if (Command === "ADF LSIA") {
        API.onUpdate.connect(function () {
            var Lsia = new Vector3(-1336.25, -3044.04, 12.94);
            var veh = API.getPlayerVehicle(player);
            var playerLocation = API.getEntityPosition(veh);
            var vehRot = API.getEntityRotation(veh);

            const normalHdgVector = {
                x: API.returnNative('0x8BB4EF4214E0E6D5', 7, veh), // float ENTITY::GET_ENTITY_FORWARD_X
                y: API.returnNative('0x866A4A5FAE349510', 7, veh) // float ENTITY::GET_ENTITY_FORWARD_Y
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
            Compass = 360 - Compass

            var test2 = API.getOffsetInWorldCoords(veh, Lsia)

            var radian = Math.atan2((playerLocation.Y - Lsia.Y), (playerLocation.X - Lsia.X));
            var angle = Math.round(radian * (180 / Math.PI));

            var test4 = Math.round(Math.atan2(angle, Compass) * (180 / Math.PI))

            var test1 = Math.round(angle + 180);

            var test3 = Math.round(360 - test1)

            ADFStatus = true;
            ADFID = "Los Santos International Airport Beacon";

            API.setEntitySyncedData(player, "ADF", test4);
            API.setEntitySyncedData(player, "ADF Status", ADFStatus);
            API.setEntitySyncedData(player, "ADFID", ADFID);
        });
    }

    else if (Command === "DME LSIA") {
        API.onUpdate.connect(function () {
            var LSIA = new Vector3(-1336.25, -3044.04, 12.94);
            var playerLocation = API.getEntityPosition(player);

            var distanceX = Math.round(playerLocation.X - LSIA.X);
            var distanceY = Math.round(playerLocation.Y - LSIA.Y);
            var distanceXsquared = Math.round(distanceX * distanceX);
            var distanceYsquared = Math.round(distanceY * distanceY);
            var distanceSqrt = Math.sqrt(distanceXsquared + distanceYsquared);
            var distance = Math.round((distanceSqrt / 100) / 1852);

            DMEID = "Los Santos International Airport Beacon";

            API.setEntitySyncedData(player, "DME", distance);
            API.setEntitySyncedData(player, "DME Status", true);
            API.setEntitySyncedData(player, "DMEID", DMEID);
        });
    }

    else if (Command === "ADF LSL") {
        API.onUpdate.connect(function () {
            var Lsl = new Vector3(1153.90381, 128.684952, 80.824646);
            var playerLocation = API.getEntityPosition(player);

            var radian = Math.atan2(Math.round(playerLocation.Y - Lsl.Y), Math.round(playerLocation.X - Lsl.X));
            var angle = Math.round(radian * Math.round(180 / Math.PI));
            var signLSL = Math.sign(angle);

            if (signLSL == 1) {
                var angleTrue = Math.round(360 - angle);
            }

            else if (signLSL == -1) {
                var angleTrue = Math.round(Math.abs(angle));
            }

            ADFStatus = true;
            ADFID = "Los Santos Local Airport";

            API.setEntitySyncedData(player, "ADF", angleTrue);
            API.setEntitySyncedData(player, "ADF Status", ADFStatus);
            API.setEntitySyncedData(player, "ADFID", ADFID);
        });
    }

    else if (Command === "DME LSL") {
        API.onUpdate.connect(function () {
            var LSL = new Vector3(1153.90381, 128.684952, 80.824646);
            var playerLocation = API.getEntityPosition(player);

            var distanceX = Math.round(playerLocation.X - LSL.X);
            var distanceY = Math.round(playerLocation.Y - LSL.Y);
            var distanceXsquared = Math.round(distanceX * distanceX);
            var distanceYsquared = Math.round(distanceY * distanceY);
            var distanceSqrt = Math.sqrt(distanceXsquared + distanceYsquared);
            var distance = Math.round(distanceSqrt / 100);

            DMEID = "Los Santos Local Airport";

            API.setEntitySyncedData(player, "DME", distance);
            API.setEntitySyncedData(player, "DME Status", true);
            API.setEntitySyncedData(player, "DMEID", DMEID);
        });
    }

    else if (Command === "ADF MB") {
        API.onUpdate.connect(function () {
            var Mb = new Vector3(-2196.0354, 3028.24268, 31.9);
            var playerLocation = API.getEntityPosition(player);

            var radian = Math.atan2(Math.round(playerLocation.Y - Mb.Y), Math.round(playerLocation.X - Mb.X));
            var angle = Math.round(radian * Math.round(180 / Math.PI));
            var convert = Math.abs(angle);

            ADFStatus = true;
            ADFID = "Military Base";

            API.setEntitySyncedData(player, "ADF", angle);
            API.setEntitySyncedData(player, "ADF Status", ADFStatus);
            API.setEntitySyncedData(player, "ADFID", ADFID);
        });
    }

    else if (Command === "DME MB") {
        API.onUpdate.connect(function () {
            var MB = new Vector3(-2196.0354, 3028.24268, 31.9);
            var playerLocation = API.getEntityPosition(player);

            var distanceX = Math.round(playerLocation.X - MB.X);
            var distanceY = Math.round(playerLocation.Y - MB.Y);
            var distanceXsquared = Math.round(distanceX * distanceX);
            var distanceYsquared = Math.round(distanceY * distanceY);
            var distanceSqrt = Math.sqrt(distanceXsquared + distanceYsquared);
            var distance = Math.round(distanceSqrt / 100);


            DMEID = "Military Base";

            API.setEntitySyncedData(player, "DME", distance);
            API.setEntitySyncedData(player, "DME Status", true);
            API.setEntitySyncedData(player, "DMEID", DMEID);
        });
    }

    else if (Command === "ADF MNT") {
        API.onUpdate.connect(function () {
            var Mnt = new Vector3(496.363983, 5588.648, 793.445557);
            var playerLocation = API.getEntityPosition(player);

            var radian = Math.atan2(Math.round(playerLocation.Y - Mnt.Y), Math.round(playerLocation.X - Mnt.X));
            var angle = Math.round(radian * Math.round(180 / Math.PI));
            var convert = Math.abs(angle);

            ADFStatus = true;
            ADFID = "Mount Chilliad";

            API.setEntitySyncedData(player, "ADF", angle);
            API.setEntitySyncedData(player, "ADF Status", ADFStatus);
            API.setEntitySyncedData(player, "ADFID", ADFID);
        });
    }

    else if (Command === "DME MNT") {
        API.onUpdate.connect(function () {
            var MNT = new Vector3(496.363983, 5588.648, 793.445557);
            var playerLocation = API.getEntityPosition(player);

            var distanceX = Math.round(playerLocation.X - MNT.X);
            var distanceY = Math.round(playerLocation.Y - MNT.Y);
            var distanceXsquared = Math.round(distanceX * distanceX);
            var distanceYsquared = Math.round(distanceY * distanceY);
            var distanceSqrt = Math.sqrt(distanceXsquared + distanceYsquared);
            var distance = Math.round(distanceSqrt / 100);

            DMEID = "Mount Chilliad";
            API.setEntitySyncedData(player, "DME", distance);
            API.setEntitySyncedData(player, "DME Status", true);
            API.setEntitySyncedData(player, "DMEID",DMEID);

        });
    }

    else if (Command === "ADF OFF") {
        API.onUpdate.connect(function () {

            ADFStatus = false;
            ADFID = "";
            API.setEntitySyncedData(player, "ADF Status", ADFStatus);
            API.setEntitySyncedData(player, "ADFID", ADFID);

        });


    }

    else if (Command === "DME OFF") {

        DMEID = "";
        API.setEntitySyncedData(player, "DME Status", false);
        API.setEntitySyncedData(player, "DMEID", DMEID);

    }

    else if (Command === "VOR OFF") {

        API.setEntitySyncedData(player, "VOR Status", false);

    }
});