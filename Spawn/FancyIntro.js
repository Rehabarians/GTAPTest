/// <reference path ="\types-gtanetwork\index.d.ts" />
var Startpos = new Vector3(-860.561, -2420.079, 34.29277);
var Startrot = new Vector3(-13.2561865, 0, 152.029846);
var Camera1pos = new Vector3(-981.3622, -2636.86084, 95.5418243);
var Camera1rot = new Vector3(-13.9829168, 0, 148.655334);
var Endpos = new Vector3(-1010, -2695, 33.47642);
var Endrot = new Vector3(2.79839826, 0, 147.313782);
let CameraStart = API.createCamera(Startpos, Startrot);
let CameraMid1 = API.createCamera(Camera1pos, Camera1rot);
let CameraEnd = API.createCamera(Endpos, Endrot);
//var t1 = resource.Timer.newtimer(1000, resource.FancyIntro.CameraMid);
//var t2 = resource.Timer.newtimer(10000, resource.FancyIntro.CameraFinish);
//var t3 = resource.Timer.newtimer(12000, resource.FancyIntro.AudioStop);
API.onServerEventTrigger.connect(function (name, args) {
    if (name === "Intro") {
        API.startAudio("CivilSpawnMusic.mp3", true);
        API.setActiveCamera(CameraStart);
        //t1.Running = true;
        //t1.RunOnce = true;
        API.sleep(1000);
        CameraMid();
        API.sleep(10000);
        CameraFinish();
        API.sleep(12000);
        AudioStop();
    }
    else if (name === "SkipCommand") {
        API.detachCamera(CameraStart);
        API.detachCamera(CameraMid1);
        API.detachCamera(CameraEnd);
        API.triggerServerEvent("Skip");
    }
});
function CameraMid() {
    API.interpolateCameras(CameraStart, CameraMid1, 10000, true, true);
    //t2.Running = true;
    //t2.RunOnce = true;
}
;
function CameraFinish() {
    API.interpolateCameras(CameraMid1, CameraEnd, 10000, true, true);
    //t3.Running = true;
    //t3.RunOnce = true;
}
;
function AudioStop() {
    API.stopAudio();
}
