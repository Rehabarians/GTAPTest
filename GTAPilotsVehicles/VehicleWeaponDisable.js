/// <reference path ="\types-gt-mp\Definitions\index.d.ts" />
API.onPlayerEnterVehicle.connect(function (entity) {
    API.onUpdate.connect(function () {
        API.disableControlThisFrame(69);
        API.disableControlThisFrame(70);
        API.disableControlThisFrame(92);
        API.disableControlThisFrame(114);
    });
});
API.onPlayerExitVehicle.connect(function (entity) {
    API.onUpdate.connect(function () {
        API.enableControlThisFrame(69);
        API.enableControlThisFrame(70);
        API.enableControlThisFrame(92);
        API.enableControlThisFrame(114);
    });
});
API.onKeyDown.connect(function (sender, e) {
    if (e.KeyCode === Keys.Left) {
        let inVeh = API.isPlayerInAnyVehicle(API.getLocalPlayer());
        if (inVeh === true) {
            //let Veh: LocalHandle = API.getPlayerVehicle(API.getLocalPlayer());
            //API.returnNative("SET_VEHICLE_INDICATOR_LIGHTS", 0, Veh, 1, true);
            API.triggerServerEvent("LeftIndicator");
        }
    }
    else if (e.KeyCode === Keys.Right) {
        let inVeh = API.isPlayerInAnyVehicle(API.getLocalPlayer());
        if (inVeh === true) {
            //let Veh: LocalHandle = API.getPlayerVehicle(API.getLocalPlayer());
            //API.returnNative("SET_VEHICLE_INDICATOR_LIGHTS", 0, Veh, 0, true);
            API.triggerServerEvent("RightIndicator");
        }
    }
    else if (e.KeyCode === Keys.Down) {
        let inVeh = API.isPlayerInAnyVehicle(API.getLocalPlayer());
        if (inVeh === true) {
            //let Veh: LocalHandle = API.getPlayerVehicle(API.getLocalPlayer());
            //API.returnNative("SET_VEHICLE_INDICATOR_LIGHTS", 0, Veh, 0, true);
            API.triggerServerEvent("RightIndicator");
            API.triggerServerEvent("LeftIndicator");
        }
    }
});
API.onKeyUp.connect(function (sender, e) {
    if (e.KeyCode === Keys.Left) {
        let inVeh = API.isPlayerInAnyVehicle(API.getLocalPlayer());
        if (inVeh === true) {
            //let Veh: LocalHandle = API.getPlayerVehicle(API.getLocalPlayer());
            //API.returnNative("SET_VEHICLE_INDICATOR_LIGHTS", 0, Veh, 1, false);
            //API.triggerServerEvent("LeftIndicator");
        }
    }
    else if (e.KeyCode === Keys.Right) {
        let inVeh = API.isPlayerInAnyVehicle(API.getLocalPlayer());
        if (inVeh === true) {
            //let Veh: LocalHandle = API.getPlayerVehicle(API.getLocalPlayer());
            //API.returnNative("SET_VEHICLE_INDICATOR_LIGHTS", 0, Veh, 0, false);
            //API.triggerServerEvent("RightIndicator");
        }
    }
});
