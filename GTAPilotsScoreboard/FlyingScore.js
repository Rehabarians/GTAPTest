"use strict";
/// <reference path ="\types-gt-mp\Definitions\index.d.ts" />
API.onUpdate.connect(function () {
    // We don't want to display the text if the main HUD is not visible
    if (!API.getHudVisible()) {
        return;
    }
    // Always check if the entity has the data we plan to access
    if (API.hasEntitySyncedData(API.getLocalPlayer(), "Local_Score")) {
        // Our player has the "LEVEL" data key we set earlier, let's get it's value and display it on the screen
        var score = API.getEntitySyncedData(API.getLocalPlayer(), "Local_Score");
        // Get the width of the player's screen resolution so we know where to display the text
        var resX = API.getScreenResolutionMantainRatio().Width;
        // Draw the level!
        API.drawText("~r~Your Flying Minutes: ~w~" + score, resX - 30, 150, 0.5, 83, 119, 237, 255, 4, 2, false, true, 0);
    }
});
