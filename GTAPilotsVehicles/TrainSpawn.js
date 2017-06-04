/// <reference path ="\types-gtanetwork\index.d.ts" />
API.onResourceStart.connect(function () {
    Main();
});
var trainDriver = API.createPed(411102470, new Vector3(613, 6438, 31), 0);
var iLocal_0 = null;
var iLocal_4 = 0;
var fLocal_5 = 0;
var iLocal_6 = 0;
var iLocal_7 = false;
var iLocal_8 = false;
var iLocal_9 = false;
function Main() {
    //API.onUpdate.connect(function () {
    API.sendChatMessage("Main Started");
    API.setEntityCollissionless(trainDriver, false);
    API.setEntityInvincible(trainDriver, false);
    API.setEntityPositionFrozen(trainDriver, false);
    fLocal_5 = 5;
    iLocal_6 = 1;
    API.callNative("SET_MISSION_FLAG", true);
    API.sendChatMessage("Mission Flag Set");
    if (API.returnNative("HAS_FORCE_CLEANUP_OCCURRED", 8, 3) === true) {
        iLocal_8 = true;
        API.sendChatMessage("Force Cleanup");
    }
    API.sendChatMessage("Random Trains False");
    API.callNative("SET_RANDOM_TRAINS", false);
    API.callNative("DELETE_ALL_TRAINS");
    if (API.returnNative("IS_PED_INJURED", 8, trainDriver) === false) {
        API.sendChatMessage("Ped not Injured");
    }
    API.loadModel(1030400667); //Freight
    API.loadModel(184361638); //FreightCar
    API.loadModel(642617954); //FreightGrain
    API.loadModel(920453016); //FreightCont1
    API.loadModel(240201337); //FreightCont2
    //API.loadModel(586013744) //TankerCar
    API.loadModel(-777275802); //FreightTrailer
    iLocal_7 = true;
    API.sendChatMessage("Train Loading");
    while (API.returnNative("HAS_MODEL_LOADED", 8, 1030400667) === false || API.returnNative("HAS_MODEL_LOADED", 8, 184361638) === false || API.returnNative("HAS_MODEL_LOADED", 8, 642617954) === false || API.returnNative("HAS_MODEL_LOADED", 8, 920453016) === false || API.returnNative("HAS_MODEL_LOADED", 8, 240201337) === false || API.returnNative("HAS_MODEL_LOADED", 8, 586013744) === false || API.returnNative("HAS_MODEL_LOADED", 8, -777275802) === false) {
        API.sendChatMessage("Train Not Loaded Fully");
        break;
    }
    while (API.returnNative("HAS_MODEL_LOADED", 8, 1030400667) === true || API.returnNative("HAS_MODEL_LOADED", 8, 184361638) === true || API.returnNative("HAS_MODEL_LOADED", 8, 642617954) === true || API.returnNative("HAS_MODEL_LOADED", 8, 920453016) === true || API.returnNative("HAS_MODEL_LOADED", 8, 240201337) === true || API.returnNative("HAS_MODEL_LOADED", 8, 586013744) === true || API.returnNative("HAS_MODEL_LOADED", 8, -777275802) === true) {
        API.sendChatMessage("Train Loaded Fully");
        if (API.returnNative("IS_PED_INJURED", 8, trainDriver) === false) {
            API.sendChatMessage("Ped Still Not Injured");
            if (iLocal_7 === true) {
                API.sendChatMessage("iLocal_7 is true");
                //if (API.returnNative("DOES_ENTITY_EXIST", 8, iLocal_0) === true) {
                //    API.callNative("DELETE_MISSION_TRAIN", iLocal_0);
                //    API.sendChatMessage("Train Existed, Deleting");
                //}
                //API.onUpdate.connect(function () {
                //    API.sendChatMessage("Creating Mission Train");
                //    iLocal_0 = API.returnNative("CREATE_MISSION_TRAIN", 9, 0, 613, 6438, 32, true);
                //    API.sendChatMessage("iLocal_0 Entity Type is: " + API.returnNative("GET_ENTITY_TYPE", 0, iLocal_0));
                //    API.sendChatMessage("iLocal_0 Exists: " + API.doesEntityExist(iLocal_0));
                //    API.sendChatMessage("setting ped into train");
                //    //API.callNative("CREATE_PED_INSIDE_VEHICLE", iLocal_0, 26, trainDriver, -1, true, true);
                //    API.callNative("SET_PED_INTO_VEHICLE", trainDriver, iLocal_0, -1)
                //    iLocal_7 = false;
                //    API.sendChatMessage("iLocal_7 Completed");
                //    API.setPlayerIntoVehicle(iLocal_0, 0);
                //});
                API.sendChatMessage("Creating Mission Train");
                iLocal_0 = API.returnNative("CREATE_MISSION_TRAIN", 9, 0, 613, 6438, 32, true);
                API.sendChatMessage("iLocal_0 Entity Type is: " + API.returnNative("GET_ENTITY_TYPE", 0, iLocal_0));
                API.sendChatMessage("iLocal_0 Exists: " + API.doesEntityExist(iLocal_0));
                API.sendChatMessage("setting ped into train");
                //API.callNative("CREATE_PED_INSIDE_VEHICLE", iLocal_0, 26, trainDriver, -1, true, true);
                API.callNative("SET_PED_INTO_VEHICLE", trainDriver, iLocal_0, -1);
                iLocal_7 = false;
                API.sendChatMessage("iLocal_7 Completed");
                API.setPlayerIntoVehicle(iLocal_0, 0);
            }
            API.sendChatMessage("After iLocal_7");
            if (iLocal_9 === true) {
                API.sendChatMessage("iLocal_9 is true");
                iLocal_9 = false;
            }
            API.sendChatMessage("After iLocal_9");
            if (API.returnNative("IS_VEHICLE_DRIVEABLE", 8, iLocal_0, 0) === true && API.returnNative("IS_ENTITY_DEAD", 8, iLocal_0) === false) {
                API.sendChatMessage("Train is Driveable");
                API.callNative("SET_TRAIN_SPEED", iLocal_0, 5);
                API.callNative("SET_TRAIN_CRUISE_SPEED", iLocal_0, 5);
            }
            API.sendChatMessage("After Driveable and dead");
            if (iLocal_8 === true) {
                API.sendChatMessage("iLocal_8 is true");
                func_1();
            }
            API.sendChatMessage("After iLocal_8");
            API.sendChatMessage("Function Complete");
        }
        API.sendChatMessage("Breaking While statement");
        break;
    }
    API.sendChatMessage("Main() Complete");
    //});
}
API.sendChatMessage("Does iLocal_0 still exist" + API.doesEntityExist(iLocal_0));
function func_1() {
    API.callNative("SET_RANDOM_TRAINS", true);
    API.callNative("TERMINATE_THIS_THREAD");
    API.sendChatMessage("func_1 was called");
}
//# sourceMappingURL=TrainSpawn.js.map