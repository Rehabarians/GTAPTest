/// <reference path ="\types-gtanetwork\index.d.ts" />

API.onUpdate.connect(function () {
    
    API.callNative("_EXPAND_WORLD_LIMITS", 1000000, 1000000, 150000);
});