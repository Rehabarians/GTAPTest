/// <reference path ="\types-gt-mp\Definitions\index.d.ts" />

API.onServerEventTrigger.connect(function (name, args) {

    var player = API.getLocalPlayer();
    var adminPos = API.getEntityPosition(player);
    var adminRot = API.getEntityRotation(player);

    var DogSpawn = new Vector3((adminPos.X + 1), (adminPos.Y + 1), adminPos.Z);

    if (name == "Chop") {
        var Breed = API.pedNameToModel(name);
        var Dog = API.createPed(Breed, DogSpawn, adminRot.Z);

        API.setEntityPositionFrozen(Dog, false);
        API.callNative("SET_PED_PATH_CAN_USE_CLIMBOVERS", Dog, true);
        API.callNative("TASK_FOLLOW_TO_OFFSET_OF_ENTITY", Dog, player, 1, 1, 0, 1, -1, 10.0, true);

        API.onLocalPlayerMeleeHit.connect(function (enemy, weapon) {
            API.callNative("REGISTER_TARGET", enemy);
            API.callNative("TASK_PUT_PED_DIRECTLY_INTO_MELEE", Dog, enemy, 1, 1, 1, true)
        });
    }

    else if (name == "Coyote") {
        var Breed = API.pedNameToModel(name);
        var Dog = API.createPed(Breed, DogSpawn, adminRot.Z);

        API.setEntityPositionFrozen(Dog, false);
        API.callNative("SET_PED_PATH_CAN_USE_CLIMBOVERS", Dog, true);
        API.callNative("TASK_FOLLOW_TO_OFFSET_OF_ENTITY", Dog, player, 1, 1, 0, 1, -1, 10.0, true);

        API.onLocalPlayerMeleeHit.connect(function (enemy, weapon) {
            API.callNative("REGISTER_TARGET", enemy);
            API.callNative("TASK_PUT_PED_DIRECTLY_INTO_MELEE", Dog, enemy, 1, 1, 1, true)
        });
    }

    else if (name == "Husky") {
        var Breed = API.pedNameToModel(name);
        var Dog = API.createPed(Breed, DogSpawn, adminRot.Z);

        API.setEntityPositionFrozen(Dog, false);
        API.callNative("SET_PED_PATH_CAN_USE_CLIMBOVERS", Dog, true);
        API.callNative("TASK_FOLLOW_TO_OFFSET_OF_ENTITY", Dog, player, 1, 1, 0, 1, -1, 10.0, true);

        API.onLocalPlayerMeleeHit.connect(function (enemy, weapon) {
            API.callNative("REGISTER_TARGET", enemy);
            API.callNative("TASK_PUT_PED_DIRECTLY_INTO_MELEE", Dog, enemy, 1, 1, 1, true)
        });
    }

    else if (name == "Poodle") {
        var Breed = API.pedNameToModel(name);
        var Dog = API.createPed(Breed, DogSpawn, adminRot.Z);

        API.setEntityPositionFrozen(Dog, false);
        API.callNative("SET_PED_PATH_CAN_USE_CLIMBOVERS", Dog, true);
        API.callNative("TASK_FOLLOW_TO_OFFSET_OF_ENTITY", Dog, player, 1, 1, 0, 1, -1, 10.0, true);

        API.onLocalPlayerMeleeHit.connect(function (enemy, weapon) {
            API.callNative("REGISTER_TARGET", enemy);
            API.callNative("TASK_PUT_PED_DIRECTLY_INTO_MELEE", Dog, enemy, 1, 1, 1, true)
        });
    }

    else if (name == "Pug") {
        var Breed = API.pedNameToModel(name);
        var Dog = API.createPed(Breed, DogSpawn, adminRot.Z);

        API.setEntityPositionFrozen(Dog, false);
        API.callNative("SET_PED_PATH_CAN_USE_CLIMBOVERS", Dog, true);
        API.callNative("TASK_FOLLOW_TO_OFFSET_OF_ENTITY", Dog, player, 1, 1, 0, 1, -1, 10.0, true);

        API.onLocalPlayerMeleeHit.connect(function (enemy, weapon) {
            API.callNative("REGISTER_TARGET", enemy);
            API.callNative("TASK_PUT_PED_DIRECTLY_INTO_MELEE", Dog, enemy, 1, 1, 1, true)
        });
    }

    else if (name == "Retriever") {
        var Breed = API.pedNameToModel(name);
        var Dog = API.createPed(Breed, DogSpawn, adminRot.Z);

        API.setEntityPositionFrozen(Dog, false);
        API.callNative("SET_PED_PATH_CAN_USE_CLIMBOVERS", Dog, true);
        API.callNative("TASK_FOLLOW_TO_OFFSET_OF_ENTITY", Dog, player, 1, 1, 0, 1, -1, 10.0, true);

        API.onLocalPlayerMeleeHit.connect(function (enemy, weapon) {
            API.callNative("REGISTER_TARGET", enemy);
            API.callNative("TASK_PUT_PED_DIRECTLY_INTO_MELEE", Dog, enemy, 1, 1, 1, true)
        });
    }

    else if (name == "Rottweiler") {
        var Breed = API.pedNameToModel(name);
        var Dog = API.createPed(Breed, DogSpawn, adminRot.Z);

        API.setEntityPositionFrozen(Dog, false);
        API.callNative("SET_PED_PATH_CAN_USE_CLIMBOVERS", Dog, true);
        API.callNative("TASK_FOLLOW_TO_OFFSET_OF_ENTITY", Dog, player, 1, 1, 0, 1, -1, 10.0, true);

        API.onLocalPlayerMeleeHit.connect(function (enemy, weapon) {
            API.callNative("REGISTER_TARGET", enemy);
            API.callNative("TASK_PUT_PED_DIRECTLY_INTO_MELEE", Dog, enemy, 1, 1, 1, true)
        });
    }

    else if (name == "Shepherd") {
        var Breed = API.pedNameToModel(name);
        var Dog = API.createPed(Breed, DogSpawn, adminRot.Z);

        API.setEntityPositionFrozen(Dog, false);
        API.callNative("SET_PED_PATH_CAN_USE_CLIMBOVERS", Dog, true);
        API.callNative("TASK_FOLLOW_TO_OFFSET_OF_ENTITY", Dog, player, 1, 1, 0, 1, -1, 10.0, true);

        API.onLocalPlayerMeleeHit.connect(function (enemy, weapon) {
            API.callNative("REGISTER_TARGET", enemy);
            API.callNative("TASK_PUT_PED_DIRECTLY_INTO_MELEE", Dog, enemy, 1, 1, 1, true)
        });
    }

    else if (name == "Westy") {
        var Breed = API.pedNameToModel(name);
        var Dog = API.createPed(Breed, DogSpawn, adminRot.Z);

        API.setEntityPositionFrozen(Dog, false);
        API.callNative("SET_PED_PATH_CAN_USE_CLIMBOVERS", Dog, true);
        API.callNative("TASK_FOLLOW_TO_OFFSET_OF_ENTITY", Dog, player, 1, 1, 0, 1, -1, 10.0, true);

        API.onLocalPlayerMeleeHit.connect(function (enemy, weapon) {
            API.callNative("REGISTER_TARGET", enemy);
            API.callNative("TASK_PUT_PED_DIRECTLY_INTO_MELEE", Dog, enemy, 1, 1, 1, true)
        });
    }
});

