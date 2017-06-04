/// <reference path ="\types-gtanetwork\index.d.ts" />
"use strict";
var resX = API.getScreenResolutionMantainRatio().Width;
var resY = API.getScreenResolutionMantainRatio().Height;
let sc;
let ready = false;
API.onServerEventTrigger.connect(function (name, args) {
    if (name == "HeliCam") {
        sc = API.requestScaleform("heli_cam");
        sc.CallFunction(`heli_cam`, true);
        //sc.CallFunction(`REQUEST_STREAMED_TEXTURE_DICT`, `helicopterhud`, true);
        API.onUpdate.connect(function () {
            API.renderScaleform(sc, 0, 0, 1280, 720);
        });
    }
    else if (name == "Phone") {
        sc = API.requestScaleform("cellphone_ifruit");
        sc.CallFunction(`cellphone_ifruit`);
        sc.Render3D;
        sc.Render3DAdditive;
        API.onUpdate.connect(function () {
            API.renderScaleform(sc, 1000, 200, 300, 300);
            sc.Render3D;
            sc.Render3DAdditive;
        });
    }
    else if (name == "Lesterhandler") {
        sc = API.requestScaleform("JHPB_02_Laptop");
        sc.CallFunction(`JHPB_02_Laptop`);
        API.onUpdate.connect(function () {
            API.renderScaleform(sc, 0, 0, 800, 600);
        });
    }
    else if (name == "GTAVOnline") {
        sc = API.requestScaleform("gtav_online");
        sc.CallFunction(`gtav_online`);
        API.onUpdate.connect(function () {
            API.renderScaleform(sc, 0, 0, 1280, 720);
        });
    }
    else if (name == "Web Browser") {
        sc = API.requestScaleform("web_browser");
        sc.CallFunction(`web_browser`);
        API.onUpdate.connect(function () {
            API.renderScaleform(sc, 0, 0, 1280, 720);
        });
    }
    else if (name == "Mission Complete") {
        sc = API.requestScaleform("mission_complete");
        sc.CallFunction(`mission_complete`);
        API.onUpdate.connect(function () {
            API.renderScaleform(sc, 500, 300, 200, 400);
        });
    }
    else if (name == "Grahpic Design") {
        sc = API.requestScaleform("graphic_design");
        sc.CallFunction(`graphic_design`);
        API.onUpdate.connect(function () {
            API.renderScaleform(sc, 300, 0, 1280, 720);
        });
    }
    else if (name == "Bubblegum") {
        sc = API.requestScaleform("p_bubblegum");
        sc.CallFunction(`p_bubblegum`);
        API.onUpdate.connect(function () {
            API.renderScaleform(sc, 300, 0, 1280, 720);
        });
    }
    else if (name == "OrgName") {
        sc = API.requestScaleform("organisation_name");
        sc.CallFunction(`organisation_name`);
        API.onUpdate.connect(function () {
            API.renderScaleform(sc, 300, 0, 1280, 720);
        });
    }
    else if (name == "Remove Scaleform") {
        sc.Dispose();
        //API.renderScaleform(sc, 0, 0, 0, 0);
    }
    else if (name == "grav") {
        API.onUpdate.connect(function () {
            API.callNative("SET_ENTITY_HAS_GRAVITY", API.getLocalPlayer(), true);
            API.callNative("SET_VEHICLE_GRAVITY", API.getPlayerVehicle(API.getLocalPlayer()), true);
        });
    }
    else if (name == "nograv") {
        API.onUpdate.connect(function () {
            API.callNative("SET_ENTITY_HAS_GRAVITY", API.getLocalPlayer(), false);
            API.callNative("SET_VEHICLE_GRAVITY", API.getPlayerVehicle(API.getLocalPlayer()), false);
        });
    }
    else if (name == "setgrav") {
        var Gravity = API.getEntitySyncedData(API.getLocalPlayer(), "Gravity");
        API.onUpdate.connect(function () {
            API.callNative("SET_GRAVITY_LEVEL", Gravity);
        });
    }
});
