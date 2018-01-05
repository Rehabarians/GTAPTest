"use strict";
/// <reference path ="\types-gt-mp\Definitions\index.d.ts" />
let LocalTailnumber;
let DisplayText = false;
let ResX = API.getScreenResolutionMaintainRatio().Width;
let ResY = API.getScreenResolutionMaintainRatio().Height;
let LsiaToTimer;
let Command;
API.onServerEventTrigger.connect(function (Event, Args) {
    switch (Event) {
        case "LsiaTO":
            {
                let Veh = API.getPlayerVehicle(API.getLocalPlayer());
                let anyData = API.hasEntitySyncedData(Veh, "Tailnumber");
                if (anyData === true) {
                    LocalTailnumber = API.getEntitySyncedData(Veh, "Tailnumber");
                }
                DisplayText = true;
            }
        case "LsiaTOCommand":
            {
                let Veh = API.getPlayerVehicle(API.getLocalPlayer());
                let anyData = API.hasEntitySyncedData(Veh, "Tailnumber");
                if (anyData === true) {
                    LocalTailnumber = API.getEntitySyncedData(Veh, "Tailnumber");
                }
                Command = Args[0];
                DisplayText = true;
            }
    }
});
function LsiaTO() {
    if (DisplayText === true) {
        API.onUpdate.connect(function () {
            API.drawText(LocalTailnumber + " is departing Los Santos International Airport!", ResX - 500, ResY - 500, 0.5, 0, 0, 0, 255, 0, 0, false, false, 500);
        });
        LsiaToTimer = API.after(5000, "CancelTOText");
    }
}
function LsiaTOCommand() {
    if (DisplayText === true) {
        if (Command === true) {
            API.onUpdate.connect(function () {
                API.drawText(LocalTailnumber + " You are cleared for departure", ResX - 500, ResY - 500, 0.5, 0, 0, 0, 255, 0, 0, false, false, 500);
            });
        }
        else if (Command === false) {
            API.onUpdate.connect(function () {
                API.drawText(LocalTailnumber + " You are not cleared for departure", ResX - 500, ResY - 500, 0.5, 0, 0, 0, 255, 0, 0, false, false, 500);
            });
        }
        LsiaToTimer = API.after(5000, "CancelTOText");
    }
}
function CancelTOText() {
    DisplayText = false;
}
