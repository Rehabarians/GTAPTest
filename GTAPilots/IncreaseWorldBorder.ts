/// <reference path ="\types-gt-mp\Definitions\index.d.ts" />

API.onServerEventTrigger.connect(function (Event, Args) {
    if (Event === "ExpandLimit") {
        API.expandWorldLimits(18000, 18000, 18000);
        API.expandWorldLimits(-18000, -18000, -18000);
    }
});