"use strict";
/// <reference path="types-gt-mp/Definitions/index.d.ts" />
var g_tanks = [API.getHashKey("rhino")];
var g_technical = [
    API.getHashKey("insurgent"),
    API.getHashKey("technical")
];
var g_jets = [API.getHashKey("hydra"), API.getHashKey("lazer")];
var g_cargobob = [
    API.getHashKey("cargobob"),
    API.getHashKey("cargobob2"),
    API.getHashKey("cargobob3"),
    API.getHashKey("cargobob4")
];
var g_alpha = [API.getHashKey("alphaz1")];
var g_bombushka = [API.getHashKey("bombushka")];
var g_howard = [API.getHashKey("howard")];
var g_micro = [API.getHashKey("microlight")];
var g_mogul = [API.getHashKey("mogul")];
var g_molotok = [API.getHashKey("molotok")];
var g_nokota = [API.getHashKey("nokota")];
var g_pyro = [API.getHashKey("pyro")];
var g_rogue = [API.getHashKey("rouge")];
var g_seabreeze = [API.getHashKey("seabreeze")];
var g_starling = [API.getHashKey("starling")];
var g_tula = [API.getHashKey("tula")];
var g_havok = [API.getHashKey("havok")];
var g_hunter = [API.getHashKey("hunter")];
var g_aa = [API.getHashKey("trailersmall2")];
var g_apc = [API.getHashKey("apc")];
var g_oppressor = [API.getHashKey("oppessor")];
var g_insurg3 = [API.getHashKey("insurgent3")];
var g_dune3 = [API.getHashKey("dune3")];
function updatePlayerBlip(blip, player) {
    if (blip == null || blip.IsNull) {
        return;
    }
    var playerPosition = API.getEntityPosition(player);
    API.setBlipPosition(blip, playerPosition);
    var playerVehicle = API.getPlayerVehicle(player);
    if (!playerVehicle.IsNull) {
        var vehicleRotation = API.getEntityRotation(playerVehicle);
        if (API.getBlipSprite(blip) > 1) {
            API.callNative("SET_BLIP_ROTATION", blip, Math.round(vehicleRotation.Z));
        }
    }
}
API.onUpdate.connect(function () {
    var players = API.getStreamedPlayers();
    for (var i = 0; i < players.Length; i++) {
        var player = players[i];
        // WORKAROUND: Ignore if position is reported to be at 0,0,0 exactly.
        // Bug reported here: https://bt.gtanet.work/view.php?id=10
        var zeroCheck = API.getEntityPosition(player);
        if (zeroCheck.X == 0 && zeroCheck.Y == 0 && zeroCheck.Z == 0) {
            continue;
        }
        var blip = API.getEntitySyncedData(player, "playerblip");
        if (blip == null || blip.IsNull) {
            continue;
        }
        updatePlayerBlip(blip, player);
    }
    var localPlayer = API.getLocalPlayer();
    var localVehicle = API.getPlayerVehicle(localPlayer);
    var localBlip = API.getEntitySyncedData(localPlayer, "playerblip");
    if (localBlip == null) {
        return;
    }
    API.setBlipTransparency(localBlip, 0);
    //var localBlipColor = API.getBlipColor(localBlip); // For testing
    var localBlipSprite = API.getBlipSprite(localBlip);
    var newBlipSprite = localBlipSprite;
    updatePlayerBlip(localBlip, localPlayer);
    if (localVehicle.IsNull) {
        newBlipSprite = 1;
    }
    else {
        var vehicleHash = API.getEntityModel(localVehicle);
        var vehicleClass = API.getVehicleClass(vehicleHash);
        switch (vehicleHash) {
            case g_tanks.indexOf(vehicleHash):
                newBlipSprite = 421;
                break;
            case g_technical.indexOf(vehicleHash):
                newBlipSprite = 460;
                break;
            case g_jets.indexOf(vehicleHash):
                newBlipSprite = 16;
                break;
            case g_cargobob.indexOf(vehicleHash):
                newBlipSprite = 481;
                break;
            case g_alpha.indexOf(vehicleHash):
                newBlipSprite = 572;
                break;
            case g_bombushka.indexOf(vehicleHash):
                newBlipSprite = 573;
                break;
            case g_howard.indexOf(vehicleHash):
                newBlipSprite = 575;
                break;
            case g_micro.indexOf(vehicleHash):
                newBlipSprite = 577;
                break;
            case g_mogul.indexOf(vehicleHash):
                newBlipSprite = 578;
                break;
            case g_molotok.indexOf(vehicleHash):
                newBlipSprite = 579;
                break;
            case g_nokota.indexOf(vehicleHash):
                newBlipSprite = 580;
                break;
            case g_pyro.indexOf(vehicleHash):
                newBlipSprite = 581;
                break;
            case g_rogue.indexOf(vehicleHash):
                newBlipSprite = 582;
                break;
            case g_seabreeze.indexOf(vehicleHash):
                break;
            case g_starling.indexOf(vehicleHash):
                newBlipSprite = 584;
                break;
            case g_tula.indexOf(vehicleHash):
                newBlipSprite = 585;
                break;
            case g_havok.indexOf(vehicleHash):
                newBlipSprite = 574;
                break;
            case g_hunter.indexOf(vehicleHash):
                newBlipSprite = 576;
                break;
            case g_aa.indexOf(vehicleHash):
                newBlipSprite = 563;
                break;
            case g_apc.indexOf(vehicleHash):
                newBlipSprite = 558;
                break;
            case g_oppressor.indexOf(vehicleHash):
                newBlipSprite = 559;
                break;
            case g_insurg3.indexOf(vehicleHash):
                newBlipSprite = 560;
                break;
            case g_dune3.indexOf(vehicleHash):
                newBlipSprite = 561;
                break;
            default:
                if (vehicleClass == 14) {
                    // Boat
                    newBlipSprite = 427;
                }
                else if (vehicleClass == 15) {
                    // Helicopter
                    newBlipSprite = 422;
                }
                else if (vehicleClass == 16) {
                    // Plane
                    newBlipSprite = 307;
                }
                else if (vehicleClass !== 14 && vehicleClass !== 15 && vehicleClass !== 16) {
                    // Normal
                    newBlipSprite = 1;
                }
                break;
        }
        //if (g_tanks.indexOf(vehicleHash) != -1) {
        //    // Tank
        //    newBlipSprite = 421;
        //}
        //else if (g_technical.indexOf(vehicleHash) != -1) {
        //    // Technical
        //    newBlipSprite = 460;
        //}
        //else if (g_jets.indexOf(vehicleHash) != -1) {
        //    // Jet
        //    newBlipSprite = 16;
        //}
        //else if (g_cargobob.indexOf(vehicleHash) != -1) {
        //    // Cargobob
        //    newBlipSprite = 481;
        //}
        //else if (g_alpha.indexOf(vehicleHash) != -1) {
        //    newBlipSprite = 572;
        //}
        //else if (g_bombushka.indexOf(vehicleHash) != -1) {
        //    newBlipSprite = 573;
        //}
        //else if (g_howard.indexOf(vehicleHash) != -1) {
        //    newBlipSprite = 575;
        //}
        //else if (g_micro.indexOf[vehicleHash] != -1) {
        //    newBlipSprite = 577;
        //}
        //else if (g_mogul.indexOf[vehicleHash] != -1) {
        //    newBlipSprite = 578;
        //}
        //else if (g_molotok.indexOf[vehicleHash] != -1) {
        //    newBlipSprite = 579;
        //}
        //else if (g_nokota.indexOf[vehicleHash] != -1) {
        //    newBlipSprite = 580;
        //}
        //else if (g_pyro.indexOf[vehicleHash] != -1) {
        //    newBlipSprite = 581;
        //}
        //else if (g_rogue.indexOf[vehicleHash] != -1) {
        //    newBlipSprite = 582;
        //}
        //else if (g_starling.indexOf[vehicleHash] != -1) {
        //    newBlipSprite = 584;
        //}
        //else if (g_tula.indexOf[vehicleHash] != -1) {
        //    newBlipSprite = 585;
        //}
        //else if (g_havok.indexOf[vehicleHash] != -1) {
        //    newBlipSprite = 574;
        //}
        //else if (g_hunter.indexOf[vehicleHash] != -1) {
        //    newBlipSprite = 576;
        //}
        //else if (g_aa.indexOf[vehicleHash] != -1) {
        //    newBlipSprite = 563
        //}
        //else if (g_apc.indexOf[vehicleHash] != -1) {
        //    newBlipSprite = 558;
        //}
        //else if (g_oppressor.indexOf[vehicleHash] != -1) {
        //    newBlipSprite = 559;
        //}
        //else if (g_insurg3.indexOf[vehicleHash] != -1) {
        //    newBlipSprite = 560;
        //}
        //else if (g_dune3.indexOf[vehicleHash] != -1) {
        //    newBlipSprite = 561;
        //}
        //else if (vehicleClass == 14) {
        //    // Boat
        //    newBlipSprite = 427;
        //}
        //else if (vehicleClass == 15) {
        //    // Helicopter
        //    newBlipSprite = 422;
        //}
        //else if (vehicleClass == 16) {
        //    // Plane
        //    newBlipSprite = 307;
        //}
        //else {
        //    // Normal
        //    newBlipSprite = 1;
        //}
    }
    if (localBlipSprite != newBlipSprite) {
        API.setBlipSprite(localBlip, newBlipSprite);
        //API.setBlipColor(localBlip, localBlipColor); // For testing
        API.triggerServerEvent("playerblip_sprite", newBlipSprite);
    }
});
