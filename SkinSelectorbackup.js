var mainCam = null;
var selectingSkin = false;
var currentSkinIndex = 0;


var skins = [
    1581098148, // CopMale
    368603149, // CopFemale
    -459818001,
    712602007,
    1161072059,
    1309468115,
    349505262

];

var cops = [
    1581098148, // Male
    368603149 // CopFemale
];

function isSkinCop(skin) {
    return cops.indexOf(skin) !== -1;
}

API.onServerEventTrigger.connect(function (name, args) {
    if (name === "skin_select_start") {
        API.setPlayerSkin(skins[currentSkinIndex]);

        mainCam = API.createCamera(new Vector3(-1265.221, -3331.74, 13.94505), new Vector3(0, 0, 0));
        API.pointCameraAtEntity(mainCam, API.getLocalPlayer(), new Vector3());
        API.setActiveCamera(mainCam);
        selectingSkin = true;

        var path = "Music\CivilSpawnMusic.mp3";
        
        API.startAudio(path, true);
    }

    if (name === "skin_select_stop") {
        API.setActiveCamera(null);
        selectingSkin = false;

        API.stopAudio();
    }

});

API.onKeyDown.connect(function(sender, args) {
    if (!selectingSkin) return;

    if (args.KeyCode === Keys.Left) {
        if (currentSkinIndex === 0)
            currentSkinIndex = skins.length - 1;
        else currentSkinIndex = (currentSkinIndex - 1) % skins.length;

        API.setPlayerSkin(skins[currentSkinIndex]);

        API.displaySubtitle(isSkinCop(skins[currentSkinIndex]) ? "Play as ~b~Cop" : "Play as ~g~Citizen", 10000);
        API.pointCameraAtEntity(mainCam, API.getLocalPlayer(), new Vector3());
    }
    else if (args.KeyCode === Keys.Right) {
        currentSkinIndex = (currentSkinIndex + 1) % skins.length;

        API.setPlayerSkin(skins[currentSkinIndex]);

        API.displaySubtitle(isSkinCop(skins[currentSkinIndex]) ? "Play as ~b~Cop" : "Play as ~g~Citizen", 10000);
        API.pointCameraAtEntity(mainCam, API.getLocalPlayer(), new Vector3());
    }
    else if (args.KeyCode === Keys.Enter) {
        API.triggerServerEvent("skin_select_accept", skins[currentSkinIndex], isSkinCop(skins[currentSkinIndex]));
        selectingSkin = false;
        API.setActiveCamera(null);

    }
});

API.onUpdate.connect(function() {
    if (!selectingSkin) return;

    API.disableAllControlsThisFrame();
    var Stun = 911657153;
    var Flare = 1198879012;
    var Para = -72657034;
    var Rail = 1834241177;
    var Mini = 1119849093;
    var RPG = -1312131151;
    var FWork = 2138347493;
    var Extinguisher = 101631238;
    var Sticky = 741814745;
    var Petrol = 883325847;
    var Molotov = 615608432;


    API.givePlayerWeapon(Stun, 1, true, true);
    API.givePlayerWeapon(Flare, 999, false, true);
    API.givePlayerWeapon(Para, 1, false, true);
    API.givePlayerWeapon(Rail, 999, false, true);
    API.givePlayerWeapon(Mini, 999, false, true);
    API.givePlayerWeapon(RPG, 999, false, true);
    API.givePlayerWeapon(FWork, 999, false, true);
    API.givePlayerWeapon(Extinguisher, 999, false, true);
    API.givePlayerWeapon(Sticky, 999, false, true);
    API.givePlayerWeapon(Petrol, 999, false, true);
    API.givePlayerWeapon(Molotov, 999, false, true);
    Enums.NativeReturnTypes(0x5006D96C995A5827);
});
