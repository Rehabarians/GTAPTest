"use strict";
/// <reference path ="\types-gt-mp\Definitions\index.d.ts" />
let transitionIncrease = 0;
var transitionTimer;
let transitionTimerRunning = false;
API.onServerEventTrigger.connect(function (event, args) {
    if (event === "TransitionWeather") {
        API.setNextWeather(args[0]);
        let currentWeather = API.getWeather();
        API.sendChatMessage("Server", "Get Next Weather is " + args[0]);
        if (currentWeather !== args[0]) {
            API.setWeatherTransitionType(transitionIncrease);
            API.transitionToWeather(args[0], 198000);
            transitionTimerRunning = true;
            transitionTimer = API.every(18000, "IncreaseTransition");
        }
    }
    else if (event === "TransitionEnd") {
        if (transitionTimerRunning === true) {
            API.stop(transitionTimer);
            transitionIncrease = 0;
        }
    }
    else if (event === "Snow On") {
        API.setSnowEnabled(true, true, true, false);
    }
    else if (event === "Snow Off") {
        API.setSnowEnabled(false, false, false, false);
    }
});
function IncreaseTransition() {
    if (transitionIncrease < 1.0) {
        transitionIncrease = transitionIncrease + (1 / 10);
    }
    else {
        API.stop(transitionTimer);
        transitionIncrease = 0;
    }
}
