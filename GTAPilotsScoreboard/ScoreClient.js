"use strict";
/// <reference path ="\types-gtanetwork\index.d.ts" />
var Score = 0;
var Time = API.getGlobalTime();
var TimeAhead = 0;
var TimeComparePilot = [2];
var TimeCompareCopilot = [2];
var StartComparingPilot = false;
var StartComparingCopilot = false;
function IncreaseByMinute() {
    Score = Score + 1;
    API.setEntitySyncedData(API.getLocalPlayer(), "Score", Score);
    API.triggerServerEvent("SetScore", Score);
}
function TimeComparingPilot() {
    while (StartComparingPilot === true) {
        TimeComparePilot.push(Time);
        TimeAhead = Time + 10000;
        TimeComparePilot.push(TimeAhead);
        API.sendChatMessage("Looping Time Check" + TimeComparePilot.indexOf(0) + " " + TimeComparePilot.indexOf(1));
        API.onUpdate.connect(function () {
            if (TimeComparePilot.indexOf(0) == TimeComparePilot.indexOf(1)) {
                IncreaseByMinute();
            }
        });
    }
}
function TimeComparingCopilot() {
    while (StartComparingCopilot === true) {
        TimeCompareCopilot.push(Time);
        TimeAhead = Time + 20000;
        TimeCompareCopilot.push(TimeAhead);
        API.onUpdate.connect(function () {
            if (TimeCompareCopilot.indexOf(0) == TimeCompareCopilot.indexOf(1)) {
                IncreaseByMinute();
            }
        });
    }
}
API.onServerEventTrigger.connect(function (Event, args) {
    if (Event === "StartScorePilot") {
        StartComparingPilot = true;
        TimeComparingPilot();
        API.sendChatMessage("StartingScorePilot Event Triggered");
    }
    else if (Event === "StartScoreCopilot") {
        StartComparingCopilot = true;
        TimeComparingCopilot();
    }
    if (Event === "StopScore") {
        StartComparingPilot = false;
        StartComparingCopilot = false;
        TimeComparingPilot();
        TimeComparingCopilot();
    }
});
