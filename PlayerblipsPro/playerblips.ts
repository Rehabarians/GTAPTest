/// <reference path="types-gtanetwork/index.d.ts" />

var g_tanks = [API.getHashKey("rhino")];
var g_technical = [API.getHashKey("insurgent"), API.getHashKey("technical")];
var g_jets = [API.getHashKey("hydra"), API.getHashKey("lazer")];

function updatePlayerBlip(blip: LocalHandle, player: LocalHandle) {

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
    API.sendChatMessage("Check 1");
	var players = API.getStreamedPlayers();
    API.sendChatMessage("Check 2");
    for (var i = 0; i < players.Length; i++) {
        API.sendChatMessage("Check 3");
		var player: LocalHandle = players[i];
        API.sendChatMessage("Check 4");
		// WORKAROUND: Ignore if position is reported to be at 0,0,0 exactly.
		// Bug reported here: https://bt.gtanet.work/view.php?id=10
        var zeroCheck = API.getEntityPosition(player);
        API.sendChatMessage("Check 5");
        if (zeroCheck.X == 0 && zeroCheck.Y == 0 && zeroCheck.Z == 0) {
            API.sendChatMessage("Check 6");
			continue;
		}
        API.sendChatMessage("Check 7");
        var blip: LocalHandle = API.getEntitySyncedData(player, "playerblip");
        API.sendChatMessage("Check 8");
        if (blip == null || blip.IsNull) {
            API.sendChatMessage("Check 9");
			continue;
        }
        API.sendChatMessage("Check 10");
		updatePlayerBlip(blip, player);
	}
    API.sendChatMessage("Check 11");
    var localPlayer: LocalHandle = API.getLocalPlayer();
    API.sendChatMessage("Check 12");
    var localVehicle = API.getPlayerVehicle(localPlayer);
    API.sendChatMessage("Check 13");
	var localBlip: LocalHandle = API.getEntitySyncedData(localPlayer, "playerblip");
    API.sendChatMessage("Check 14");
    if (localBlip == null) {
        API.sendChatMessage("Check 15");
		return;
	}
    API.sendChatMessage("Check 16");
	API.setBlipTransparency(localBlip, 0);
    API.sendChatMessage("Check 17");
	//var localBlipColor = API.getBlipColor(localBlip); // For testing
    var localBlipSprite = API.getBlipSprite(localBlip);
    API.sendChatMessage("Check 18");
	var newBlipSprite = localBlipSprite;
    API.sendChatMessage("Check 19");
	updatePlayerBlip(localBlip, localPlayer);
    API.sendChatMessage("Check 20");
    if (localVehicle.IsNull) {
        API.sendChatMessage("Check 21");
		newBlipSprite = 1;
    } else {
        API.sendChatMessage("Check 22");
		var vehicleHash = API.getEntityModel(localVehicle);
		var vehicleClass = API.getVehicleClass(vehicleHash);

		if (g_tanks.indexOf(vehicleHash) != -1) {
			// Tank
            API.sendChatMessage("Check 23");
			newBlipSprite = 421;

		} else if (g_technical.indexOf(vehicleHash) != -1) {
			// Technical
            API.sendChatMessage("Check 24");
			newBlipSprite = 460;

		} else if (g_jets.indexOf(vehicleHash) != -1) {
			// Jet
            API.sendChatMessage("Check 25");
			newBlipSprite = 16;

		} else if (vehicleClass == 14) {
			// Boat
            API.sendChatMessage("Check 26");
			newBlipSprite = 427;

		} else if (vehicleClass == 15) {
			// Helicopter
            API.sendChatMessage("Check 27");
			newBlipSprite = 422;

		} else if (vehicleClass == 16) {
			// Plane
            API.sendChatMessage("Check 28");
			newBlipSprite = 307;

		} else {
			// Normal
            API.sendChatMessage("Check 29");
			newBlipSprite = 1;
		}
	}
    API.sendChatMessage("Check 30");
    if (localBlipSprite != newBlipSprite) {
        API.sendChatMessage("Check 31");
		API.setBlipSprite(localBlip, newBlipSprite);
		//API.setBlipColor(localBlip, localBlipColor); // For testing
        API.sendChatMessage("Check 32");
		API.triggerServerEvent("playerblip_sprite", newBlipSprite);
    }
    API.sendChatMessage("Check 33");
});
