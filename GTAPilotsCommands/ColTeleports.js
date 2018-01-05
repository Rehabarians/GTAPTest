"use strict";
/// <reference path ="\types-gt-mp\index.d.ts" />
var insideBottom = null;
var insideTop = null;
var exit = null;
API.onServerEventTrigger.connect(function (event, args) {
    if (event == "insideElevatorBottom") {
        insideBottom = true;
    }
    else if (event == "insideElevatorTop") {
        insideTop = true;
    }
    else if (event == "exit") {
        exit = true;
        insideTop = false;
        insideBottom = false;
    }
});
API.onKeyUp.connect(function (sender, e) {
    if (e.KeyCode == Keys.Enter) {
        if (insideBottom == true) {
            //API.triggerServerEvent("ElevatorUp");
            API.setEntityPosition(API.getLocalPlayer(), new Vector3(-2361.015, 3248.824, 91.90366));
            //API.setEntityRotation(API.getLocalPlayer(), new Vector3(0, 0, -35.11264));
            insideBottom = false;
        }
        else if (insideTop == true) {
            //API.triggerServerEvent("ElevatorDown");
            API.setEntityPosition(API.getLocalPlayer(), new Vector3(-2361.174, 3249.038, 31.81074));
            //API.setEntityRotation(API.getLocalPlayer(), new Vector3(0, 0, -36.70571));
            insideTop = false;
        }
    }
});
