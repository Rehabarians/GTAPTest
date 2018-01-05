"use strict";
/// <reference path="types-gt-mp/Definitions/index.d.ts" />
let isControlPressed;
API.onServerEventTrigger.connect(function (event, args) {
    if (event === "Lock") {
        API.onUpdate.connect(function () {
            API.disableControlThisFrame(23);
        });
    }
    else if (event === "Unlock") {
        API.onUpdate.connect(function () {
            API.enableControlThisFrame(23);
        });
    }
    else if (event === "Test") {
        var SlotName = API.getVehicleModSlotName(API.getPlayerVehicle(API.getLocalPlayer()), args[0]);
        var ModLabel = API.getVehicleModTextLabel(API.getPlayerVehicle(API.getLocalPlayer()), args[0], args[1]);
        API.sendChatMessage("Slot Name is " + SlotName);
        API.sendChatMessage("Mod Label Name is " + API.getGameText(ModLabel));
    }
});
API.onUpdate.connect(function () {
    isControlPressed = API.isDisabledControlJustPressed(23);
});
if (isControlPressed === true) {
    API.sendChatMessage("Vehicle door is locked.");
}
