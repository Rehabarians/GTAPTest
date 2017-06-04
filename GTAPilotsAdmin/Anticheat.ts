/// <reference path ="\types-gtanetwork\index.d.ts" />

var player = API.getLocalPlayer();

API.onUpdate.connect(function () {

    var weapon = API.getPlayerCurrentWeapon();

    if (weapon != 1198879012 && weapon != -1569615261) {
        API.removeAllPlayerWeapons();
        API.givePlayerWeapon(1198879012, 20, false, true);
    }

});