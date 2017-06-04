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
function Dimension() {
    API.getEntityDimension();
}

API.onServerEventTrigger.connect(function (name, args) {
    if (name === "skin_select_start") {
        API.setPlayerSkin(skins[currentSkinIndex]);

        mainCam = API.createCamera(new Vector3(-1265.221, -3331.74, 13.94505), new Vector3(0, 0, 0));
        API.pointCameraAtEntity(mainCam, API.getLocalPlayer(), new Vector3());
        API.setActiveCamera(mainCam);
        //API.setEntityInvincible(true, invinc);

        if (Dimension < 1)
        {
            var rnd = Math.floor(Math.random() * 100) + 1;

            API.setEntityDimension(rnd);
        }

        else
        {
            selectingSkin = true;
        }

    }

    if (name === "skin_select_stop") {
        
        API.setActiveCamera(null);
        selectingSkin = false;


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
        API.stopAudio();
        API.startAudio("CivilSpawnMusic.mp3", true);
    }
    else if (args.KeyCode === Keys.Right) {
        currentSkinIndex = (currentSkinIndex + 1) % skins.length;

        API.setPlayerSkin(skins[currentSkinIndex]);

        API.displaySubtitle(isSkinCop(skins[currentSkinIndex]) ? "Play as ~b~Cop" : "Play as ~g~Citizen", 10000);
        API.pointCameraAtEntity(mainCam, API.getLocalPlayer(), new Vector3());
        API.stopAudio();
        API.startAudio("StuntSpawnMusic.mp3", true);

    }
    else if (args.KeyCode === Keys.Enter) {
        API.triggerServerEvent("skin_select_accept", skins[currentSkinIndex], isSkinCop(skins[currentSkinIndex]));
        selectingSkin = false;
        API.setActiveCamera(null);
        //API.setEntityInvincible(false, invinc);
        API.setEntityDimension(0);
        API.stopAudio();

    }
});

API.onUpdate.connect(function() {
    if (!selectingSkin) return;

    API.disableAllControlsThisFrame();
    
});
