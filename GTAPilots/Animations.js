"use strict";
/// <reference path ="\types-gt-mp\Definitions\index.d.ts" />
let firstControl = API.isControlPressed(26);
let secondControl = API.isControlPressed(36);
let Timer;
if (firstControl === true && secondControl === true) {
    API.playPlayerAnimation("anim@mp_player_intuppersalute", "enter", 32);
    Timer = API.after(1000, "trigger");
}
else if (firstControl === false || secondControl === false) {
    if (Timer !== null) {
        API.stop(Timer);
    }
}
function trigger() {
    API.triggerServerEvent("Salute");
}
