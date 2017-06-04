/// <reference path ="\types-gtanetwork\index.d.ts" />
"use strict";
var tailtextTO = null;
var departuretext = null;
var tailwarningTO = null;
var departurewarning = null;
var tailtextLND = null;
var Landingtext = null;
var tailwarningLND = null;
var Landingwarning = null;
API.onServerEventTrigger.connect(function (Event, Args) {
    if (Event == "LsiaTO") {
        TakeoffTextLSIA();
    }
    else if (Event == "EvwaTO") {
        TakeoffTextEVWA();
    }
    else if (Event == "SandyTO") {
        TakeoffTextSANDY();
    }
    else if (Event == "MilitaryTO") {
        TakeoffTextMILITARY();
    }
    if (Event == "LsiaLND") {
        LandingTextLSIA();
    }
    else if (Event == "EvwaLND") {
        LandingTextEVWA();
    }
    else if (Event == "SandyLND") {
        LandingTextSANDY();
    }
    else if (Event == "MilitaryLND") {
        LandingTextMILITARY();
    }
});
function TakeoffTextLSIA() {
    API.onUpdate.connect(function () {
        var player = API.getLocalPlayer();
        var vehicle = API.getPlayerVehicle(player);
        var tailnumber = API.getEntitySyncedData(vehicle, "Tailnumber");
        var takingOff = API.getEntitySyncedData(player, "Taking Off");
        var CommandCallerTO = API.getEntitySyncedData(player, "CommandCaller");
        var takeoffTimer = API.getEntitySyncedData(player, "TakeoffTimer");
        if (takeoffTimer === true) {
            if (CommandCallerTO === true) {
                if (takingOff === true) {
                    tailtextTO = API.drawText("G-" + `${tailnumber}`, 650, 500, 0.75, 255, 255, 255, 255, 0, 0, true, true, 1000);
                    departuretext = API.drawText("Cleared for Depature", 850, 500, 0.75, 24, 232, 24, 255, 0, 0, true, true, 1000);
                }
                else if (takingOff === false) {
                    tailtextTO = API.drawText("G-" + `${tailnumber}`, 650, 500, 0.75, 255, 255, 255, 255, 0, 0, true, true, 1000);
                    departuretext = API.drawText("Negative, Runway in use", 850, 500, 0.75, 218, 16, 16, 255, 0, 0, true, true, 1000);
                }
            }
            else if (CommandCallerTO === false) {
                if (takeoffTimer === true) {
                    tailwarningTO = API.drawText("G-" + `${tailnumber}`, 650, 500, 0.75, 255, 255, 255, 255, 0, 0, true, true, 1000);
                    departurewarning = API.drawText("Is departing Los Santos International Airport", 850, 500, 0.75, 242, 242, 17, 255, 0, 0, true, true, 1000);
                }
            }
        }
    });
}
function TakeoffTextEVWA() {
    API.onUpdate.connect(function () {
        var player = API.getLocalPlayer();
        var vehicle = API.getPlayerVehicle(player);
        var tailnumber = API.getEntitySyncedData(vehicle, "Tailnumber");
        var takingOff = API.getEntitySyncedData(player, "Taking Off");
        var CommandCallerTO = API.getEntitySyncedData(player, "CommandCaller");
        var takeoffTimer = API.getEntitySyncedData(player, "TakeoffTimer");
        if (takingOff === true) {
            if (CommandCallerTO === true) {
                if (takeoffTimer === false) {
                    tailtextTO = API.drawText(`${tailnumber}`, 700, 500, 1, 255, 255, 255, 255, 0, 0, true, true, 500);
                    departuretext = API.drawText("Cleared for Depature", 850, 500, 1, 24, 232, 24, 255, 0, 0, true, true, 500);
                }
                else if (takeoffTimer === true) {
                    tailtextTO = API.drawText(`${tailnumber}`, 700, 500, 1, 255, 255, 255, 255, 0, 0, true, true, 500);
                    departuretext = API.drawText("Negative, Runway in use", 850, 500, 1, 218, 16, 16, 255, 0, 0, true, true, 500);
                }
            }
            else if (CommandCallerTO === false) {
                if (takeoffTimer === false) {
                    tailwarningTO = API.drawText(`${tailnumber}`, 500, 500, 1, 255, 255, 255, 255, 0, 0, true, true, 500);
                    departurewarning = API.drawText("Is departing East Vinewood Airfield", 850, 500, 1, 242, 242, 17, 255, 0, 0, true, true, 500);
                }
            }
        }
    });
}
function TakeoffTextSANDY() {
    API.onUpdate.connect(function () {
        var player = API.getLocalPlayer();
        var vehicle = API.getPlayerVehicle(player);
        var tailnumber = API.getEntitySyncedData(vehicle, "Tailnumber");
        var takingOff = API.getEntitySyncedData(player, "Taking Off");
        var CommandCallerTO = API.getEntitySyncedData(player, "CommandCaller");
        var takeoffTimer = API.getEntitySyncedData(player, "TakeoffTimer");
        if (takingOff === true) {
            if (CommandCallerTO === true) {
                if (takeoffTimer === false) {
                    tailtextTO = API.drawText(`${tailnumber}`, 700, 500, 1, 255, 255, 255, 255, 0, 0, true, true, 500);
                    departuretext = API.drawText("Cleared for Depature", 850, 500, 1, 24, 232, 24, 255, 0, 0, true, true, 500);
                }
                else if (takeoffTimer === true) {
                    tailtextTO = API.drawText(`${tailnumber}`, 700, 500, 1, 255, 255, 255, 255, 0, 0, true, true, 500);
                    departuretext = API.drawText("Negative, Runway in use", 850, 500, 1, 218, 16, 16, 255, 0, 0, true, true, 500);
                }
            }
            else if (CommandCallerTO === false) {
                if (takeoffTimer === false) {
                    tailwarningTO = API.drawText(`${tailnumber}`, 500, 500, 1, 255, 255, 255, 255, 0, 0, true, true, 500);
                    departurewarning = API.drawText("Is departing Sandy Shores Airfield", 850, 500, 1, 242, 242, 17, 255, 0, 0, true, true, 500);
                }
            }
        }
    });
}
function TakeoffTextMILITARY() {
    API.onUpdate.connect(function () {
        var player = API.getLocalPlayer();
        var vehicle = API.getPlayerVehicle(player);
        var tailnumber = API.getEntitySyncedData(vehicle, "Tailnumber");
        var takingOff = API.getEntitySyncedData(player, "Taking Off");
        var CommandCallerTO = API.getEntitySyncedData(player, "CommandCaller");
        var takeoffTimer = API.getEntitySyncedData(player, "TakeoffTimer");
        if (takingOff === true) {
            if (CommandCallerTO === true) {
                if (takeoffTimer === false) {
                    tailtextTO = API.drawText(`${tailnumber}`, 700, 500, 1, 255, 255, 255, 255, 0, 0, true, true, 500);
                    departuretext = API.drawText("Cleared for Depature", 850, 500, 1, 24, 232, 24, 255, 0, 0, true, true, 500);
                }
                else if (takeoffTimer === true) {
                    tailtextTO = API.drawText(`${tailnumber}`, 700, 500, 1, 255, 255, 255, 255, 0, 0, true, true, 500);
                    departuretext = API.drawText("Negative, Runway in use", 850, 500, 1, 218, 16, 16, 255, 0, 0, true, true, 500);
                }
            }
            else if (CommandCallerTO === false) {
                if (takeoffTimer === false) {
                    tailwarningTO = API.drawText(`${tailnumber}`, 500, 500, 1, 255, 255, 255, 255, 0, 0, true, true, 500);
                    departurewarning = API.drawText("Is departing Fort Zancudo Airport", 850, 500, 1, 242, 242, 17, 255, 0, 0, true, true, 500);
                }
            }
        }
    });
}
function LandingTextLSIA() {
    API.onUpdate.connect(function () {
        var player = API.getLocalPlayer();
        var vehicle = API.getPlayerVehicle(player);
        var tailnumber = API.getEntitySyncedData(vehicle, "Tailnumber");
        var Landing = API.getEntitySyncedData(player, "Landing");
        var CommandCallerLND = API.getEntitySyncedData(player, "CommandCallerLND");
        var LandingTimer = API.getEntitySyncedData(player, "LandingTimer");
        if (Landing === true) {
            if (CommandCallerLND === true) {
                if (LandingTimer === false) {
                    tailtextLND = API.drawText(`${tailnumber}`, 700, 500, 1, 255, 255, 255, 255, 0, 0, true, true, 500);
                    Landingtext = API.drawText("Cleared for Landing", 850, 500, 1, 24, 232, 24, 255, 0, 0, true, true, 500);
                }
                else if (LandingTimer === true) {
                    tailtextLND = API.drawText(`${tailnumber}`, 700, 500, 1, 255, 255, 255, 255, 0, 0, true, true, 500);
                    Landingtext = API.drawText("Negative, Runway in use", 850, 500, 1, 218, 16, 16, 255, 0, 0, true, true, 500);
                }
            }
            else if (CommandCallerLND === false) {
                if (LandingTimer === false) {
                    tailwarningLND = API.drawText(`${tailnumber}`, 500, 500, 1, 255, 255, 255, 255, 0, 0, true, true, 500);
                    Landingwarning = API.drawText("Is landing at Los Santos International Airport", 850, 500, 1, 242, 242, 17, 255, 0, 0, true, true, 500);
                }
            }
        }
    });
}
function LandingTextEVWA() {
    API.onUpdate.connect(function () {
        var player = API.getLocalPlayer();
        var vehicle = API.getPlayerVehicle(player);
        var tailnumber = API.getEntitySyncedData(vehicle, "Tailnumber");
        var Landing = API.getEntitySyncedData(player, "Landing");
        var CommandCallerLND = API.getEntitySyncedData(player, "CommandCallerLND");
        var LandingTimer = API.getEntitySyncedData(player, "LandingTimer");
        if (Landing === true) {
            if (CommandCallerLND === true) {
                if (LandingTimer === false) {
                    tailtextLND = API.drawText(`${tailnumber}`, 700, 500, 1, 255, 255, 255, 255, 0, 0, true, true, 500);
                    Landingtext = API.drawText("Cleared for Landing", 850, 500, 1, 24, 232, 24, 255, 0, 0, true, true, 500);
                }
                else if (LandingTimer === true) {
                    tailtextLND = API.drawText(`${tailnumber}`, 700, 500, 1, 255, 255, 255, 255, 0, 0, true, true, 500);
                    Landingtext = API.drawText("Negative, Runway in use", 850, 500, 1, 218, 16, 16, 255, 0, 0, true, true, 500);
                }
            }
            else if (CommandCallerLND === false) {
                if (LandingTimer === false) {
                    tailwarningLND = API.drawText(`${tailnumber}`, 500, 500, 1, 255, 255, 255, 255, 0, 0, true, true, 500);
                    Landingwarning = API.drawText("Is landing at East Vinewood Airfield", 850, 500, 1, 242, 242, 17, 255, 0, 0, true, true, 500);
                }
            }
        }
    });
}
function LandingTextSANDY() {
    API.onUpdate.connect(function () {
        var player = API.getLocalPlayer();
        var vehicle = API.getPlayerVehicle(player);
        var tailnumber = API.getEntitySyncedData(vehicle, "Tailnumber");
        var Landing = API.getEntitySyncedData(player, "Landing");
        var CommandCallerLND = API.getEntitySyncedData(player, "CommandCallerLND");
        var LandingTimer = API.getEntitySyncedData(player, "LandingTimer");
        if (Landing === true) {
            if (CommandCallerLND === true) {
                if (LandingTimer === false) {
                    tailtextLND = API.drawText(`${tailnumber}`, 700, 500, 1, 255, 255, 255, 255, 0, 0, true, true, 500);
                    Landingtext = API.drawText("Cleared for Landing", 850, 500, 1, 24, 232, 24, 255, 0, 0, true, true, 500);
                }
                else if (LandingTimer === true) {
                    tailtextLND = API.drawText(`${tailnumber}`, 700, 500, 1, 255, 255, 255, 255, 0, 0, true, true, 500);
                    Landingtext = API.drawText("Negative, Runway in use", 850, 500, 1, 218, 16, 16, 255, 0, 0, true, true, 500);
                }
            }
            else if (CommandCallerLND === false) {
                if (LandingTimer === false) {
                    tailwarningLND = API.drawText(`${tailnumber}`, 500, 500, 1, 255, 255, 255, 255, 0, 0, true, true, 500);
                    Landingwarning = API.drawText("Is landing at Sandy Shores Airfield", 850, 500, 1, 242, 242, 17, 255, 0, 0, true, true, 500);
                }
            }
        }
    });
}
function LandingTextMILITARY() {
    API.onUpdate.connect(function () {
        var player = API.getLocalPlayer();
        var vehicle = API.getPlayerVehicle(player);
        var tailnumber = API.getEntitySyncedData(vehicle, "Tailnumber");
        var Landing = API.getEntitySyncedData(player, "Landing");
        var CommandCallerLND = API.getEntitySyncedData(player, "CommandCallerLND");
        var LandingTimer = API.getEntitySyncedData(player, "LandingTimer");
        if (Landing === true) {
            if (CommandCallerLND === true) {
                if (LandingTimer === false) {
                    tailtextLND = API.drawText(`${tailnumber}`, 700, 500, 1, 255, 255, 255, 255, 0, 0, true, true, 500);
                    Landingtext = API.drawText("Cleared for Landing", 850, 500, 1, 24, 232, 24, 255, 0, 0, true, true, 500);
                }
                else if (LandingTimer === true) {
                    tailtextLND = API.drawText(`${tailnumber}`, 700, 500, 1, 255, 255, 255, 255, 0, 0, true, true, 500);
                    Landingtext = API.drawText("Negative, Runway in use", 850, 500, 1, 218, 16, 16, 255, 0, 0, true, true, 500);
                }
            }
            else if (CommandCallerLND === false) {
                if (LandingTimer === false) {
                    tailwarningLND = API.drawText(`${tailnumber}`, 500, 500, 1, 255, 255, 255, 255, 0, 0, true, true, 500);
                    Landingwarning = API.drawText("Is landing at Fort Zancudo Airport", 850, 500, 1, 242, 242, 17, 255, 0, 0, true, true, 500);
                }
            }
        }
    });
}
function TakeoffCancelled() {
    departuretext = null;
    tailtextTO = null;
    departurewarning = null;
    tailwarningTO = null;
}
function LandingCancelled() {
    Landingtext = null;
    Landingwarning = null;
    tailtextLND = null;
    tailwarningLND = null;
}
