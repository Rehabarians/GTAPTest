/// <reference path ="\types-gtanetwork\index.d.ts" />

function disableControls() {
    API.disableControlThisFrame(14);
    API.disableControlThisFrame(15);
}


API.onUpdate.connect(function () {

    if (API.isControlPressed(18)) {
        //disableControls();

        API.disableControlThisFrame(14);
        API.disableControlThisFrame(15);

        var res = API.getScreenResolutionMantainRatio();
        var players = API.getAllPlayers();
        var flyingHours = API.getEntitySyncedData(API.getLocalPlayer(), "Local_Score")

        var columnList = API.getWorldSyncedData("scoreboard_column_names");
        if (columnList === null) return;
        var columnNames = API.getWorldSyncedData("scoreboard_column_friendlynames");
        var columnWidths = API.getWorldSyncedData("scoreboard_column_widths");

        var columnLen = columnList.Count;
        var totalWidth = 300;
        var totalHeight = 80 + players.Length * 40;

        var activeArea = 0;

        for (var i = columnWidths.Count - 1; i >= 0; i--) {
            activeArea += columnWidths[i];
        };

        totalWidth += activeArea;

        var startX = res.Width / 2;
        startX -= totalWidth / 2;

        var startY = res.Height / 2;
        startY -= totalHeight / 2;

        // Column drawing
        API.drawRectangle(startX, startY, totalWidth, 40, 0, 0, 0, 200);
        API.drawText("Players", startX + 10, startY + 5, 0.35, 255, 255, 255, 255, 0, 0, false, true, 0);

        var currentCW = 0;
        for (var j = 0; j < columnList.Count; j++) {
            var value = columnNames[j];
            API.drawText(value, res.Width - startX - currentCW - 5, startY + 5, 0.35, 255, 255, 255, 255, 0, 2, false, true, 0);
            currentCW += columnWidths[j];
        }

        API.drawRectangle(startX, startY + 40, totalWidth, 40, 50, 50, 50, 200);
        API.drawText(API.getPlayerName(API.getLocalPlayer()), startX + 10, startY + 45, 0.4, 255, 255, 255, 255, 4, 0, false, true, 0);

        currentCW = 0;
        for (var j = 0; j < columnList.Count; j++) {
            var columnData = API.getEntitySyncedData(API.getLocalPlayer(), columnList[j]);

            if (columnList[j] === "scoreboard_ping")
                columnData = API.toString(API.getPlayerPing(API.getLocalPlayer()));

            if (columnData !== null) {
                API.drawText(API.toString(columnData), res.Width - startX - currentCW - 5, startY + 45, 0.4, 255, 255, 255, 255, 4, 2, false, true, 0);
                currentCW += columnWidths[j];
            }
        }

        currentCW = 1;
        for (var j = 0; j < columnList.Count; j++) {
            var columnData = API.getEntitySyncedData(API.getLocalPlayer(), columnList[j]);

            if (columnList[j] === "scoreboard_score")
                columnData = API.toString(flyingHours);

            if (columnData !== null) {
                API.drawText(API.toString(columnData), res.Width - startX - currentCW - 100, startY + 45, 0.4, 255, 255, 255, 255, 4, 2, false, true, 0);
                currentCW += columnWidths[j];
            }
        }
    }
});