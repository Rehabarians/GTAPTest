/// <reference path ="\types-gt-mp\Definitions\index.d.ts" />

let Trigger1: boolean = false;

API.onKeyUp.connect(function (sender, e) {

    if (e.KeyCode === Keys.M) {
        if (Trigger1 === true) {
            Trigger1 = false;
            API.triggerServerEvent("SaluteStop")
        }
        else if (Trigger1 === false) {
            Trigger1 = true;
            API.triggerServerEvent("SaluteStart");
        }
    }
});
//API.onUpdate.connect(function () {

//    let Sprint: boolean = API.isControlPressed(21);
//    let Jump: boolean = API.isControlPressed(22);
//    let Enter: boolean = API.isControlPressed(23);
//    let Attack: boolean = API.isControlPressed(24);
//    let Aim: boolean = API.isControlPressed(25);
//    let LookBehind: boolean = API.isControlPressed(26);
//    let Phone: boolean = API.isControlPressed(27);
//    let SpecialAbility: boolean = API.isControlJustPressed(28);
//    let Duck: boolean = API.isControlPressed(36);
//    let SelectWeapon: boolean = API.isControlPressed(37);
//    let Cover: boolean = API.isControlPressed(44);
//    let Reload: boolean = API.isControlPressed(45);
//    let Detonate: boolean = API.isControlPressed(47);

//    //if (LookBehind === true) {
//    //    Trigger1 = true;
//    //}

//    if (SpecialAbility === true) {

//        if (Trigger1 === true) {
//            Trigger1 = false;
//            API.triggerServerEvent("SaluteStop")
//        }
//        else if (Trigger1 === false) {
//            Trigger1 = true;
//            API.triggerServerEvent("SaluteStart");
//        }
//    }
//    //else if (SpecialAbility === false) {
//    //    API.triggerServerEvent("Salute", false);
//    //}

//    //if (Sprint === true) {
//    //    API.sendChatMessage("Sprint Only Just Pressed");
//    //}
//    //else if (Jump === true) {
//    //    API.sendChatMessage("Jump Just Pressed");
//    //}
//    //else if (Enter === true) {
//    //    API.sendChatMessage("Enter Just Pressed");
//    //}
//    //else if (Attack === true) {
//    //    API.sendChatMessage("Attack Just Pressed");
//    //}
//    //else if (Aim === true) {
//    //    API.sendChatMessage("Aim Just Pressed");
//    //}
//    //else if (LookBehind === true) {
//    //    API.sendChatMessage("Look Behind Just Pressed");
//    //}
//    //else if (Phone === true) {
//    //    API.sendChatMessage("Phone Just Pressed");
//    //}
//    //else if (SpecialAbility === true) {
//    //    API.sendChatMessage("Special Ability Just Pressed");
//    //}
//    //else if (Duck === true) {
//    //    API.sendChatMessage("Duck Just Pressed");
//    //}
//    //else if (SelectWeapon === true) {
//    //    API.sendChatMessage("Select Weapon Just Pressed");
//    //}
//    //else if (Cover === true) {
//    //    API.sendChatMessage("Cover Just Pressed");
//    //}
//    //else if (Reload === true) {
//    //    API.sendChatMessage("Reload Just Pressed");
//    //}
//    //else if (Detonate === true) {
//    //    API.sendChatMessage("Detonate Just Pressed");
//    //}
//});