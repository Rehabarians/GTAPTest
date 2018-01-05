API.onServerEventTrigger.connect(function (event, args) {
    if (event === "Snow On") {
        API.setSnowEnabled(true, true, true, false);
    }
    else if (event === "Snow Off") {
        API.setSnowEnabled(false, false, false, false);
    }
});