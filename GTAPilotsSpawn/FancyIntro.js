/// <reference path ="types-gt-mp/Definitions/index.d.ts" />
let CameraStart = null;
let CameraMid1 = null;
let CameraEnd = null;
var t1;
let t1Active = false;
var t2;
let t2Active = false;
var t3;
let t3Active = false;
let IntroActive = false;
let alpha = 1;
let ResX = API.getScreenResolutionMantainRatio().Width;
let ResY = API.getScreenResolutionMantainRatio().Height;
API.onResourceStart.connect(function () {
    var Startpos = new Vector3(-860.561, -2420.079, 34.29277);
    var Startrot = new Vector3(-13.2561865, 0, 152.029846);
    var Camera1pos = new Vector3(-981.3622, -2636.86084, 95.5418243);
    var Camera1rot = new Vector3(-13.9829168, 0, 148.655334);
    var Endpos = new Vector3(-1010, -2695, 33.47642);
    var Endrot = new Vector3(2.79839826, 0, 147.313782);
    CameraStart = API.createCamera(Startpos, Startrot);
    CameraMid1 = API.createCamera(Camera1pos, Camera1rot);
    CameraEnd = API.createCamera(Endpos, Endrot);
    API.preloadAudio("resource/Music/CivilSpawnMusic.wav");
    //API.setHudVisible(false);
    //API.setChatVisible(false);
});
API.onServerEventTrigger.connect(function (name, args) {
    if (name === "Intro") {
        IntroActive = true;
        API.startAudio("resource/Music/CivilSpawnMusic.wav", false);
        API.setActiveCamera(CameraStart);
        t1 = API.after(1000, "CameraMid");
        t1Active = true;
    }
    else if (name === "SkipCommand") {
        if (IntroActive === true) {
            API.detachCamera(CameraStart);
            API.detachCamera(CameraMid1);
            API.detachCamera(CameraEnd);
            if (t1Active === true) {
                API.stop(t1);
            }
            if (t2Active === true) {
                API.stop(t2);
            }
            if (t3Active === true) {
                API.stop(t3);
            }
            IntroActive = false;
            API.stopAudio();
            API.setHudVisible(true);
            API.setChatVisible(true);
            API.triggerServerEvent("Skip");
        }
    }
});
function CameraMid() {
    API.stop(t1);
    t1Active = false;
    API.interpolateCameras(CameraStart, CameraMid1, 13000, true, true);
    t2 = API.after(14000, "CameraFinish");
    t2Active = true;
}
function CameraFinish() {
    API.stop(t2);
    t2Active = false;
    API.interpolateCameras(CameraMid1, CameraEnd, 13000, true, true);
    t3 = API.after(14000, "AudioStop");
    t3Active = true;
}
function AudioStop() {
    API.stop(t3);
    t3Active = false;
    API.triggerServerEvent("Skip");
    API.stopAudio();
    API.setHudVisible(true);
    API.setChatVisible(true);
    IntroActive = false;
}
