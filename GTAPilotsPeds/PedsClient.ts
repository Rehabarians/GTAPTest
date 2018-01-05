/// <reference path ="\types-gt-mp\Definitions\index.d.ts" />

let PedHandle: LocalHandle;
let PedPosition: Vector3;
let PedRotation: Vector3;

let VehicleHandle: LocalHandle;
let VehiclePosition: Vector3;
let VehicleRotation: Vector3;

API.onResourceStart.connect(function () {

});

API.onServerEventTrigger.connect(function (event, args) {
    if (event === "PedUpdate") {
        //args[0] handle
        //args[1] server position
        //args[2] server rotation
        PedHandle = args[0];
        PedPosition = args[1];
        PedRotation = args[2];
    }
    else if (event === "VehicleUpdate") {
        //args[0] handle
        //args[1] server position
        //args[2] server rotation
        VehicleHandle = args[0];
        VehiclePosition = args[1];
        VehicleRotation = args[2];
    }
});

API.onEntityStreamIn.connect(function (EntityHandle, EntityType) {
    if (EntityType === 8) {
        
    }
});