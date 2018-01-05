/// <reference path ="\types-gt-mp\Definitions\index.d.ts" />

let ClassMenu: NativeUI.UIMenu = API.createMenu("Spawn Menu", "Choose you class", 0, 0, 6);
let ClassMenuItems: NativeUI.UIMenuItem;
let ClassMenuItemNames: string[] = []

API.onResourceStart.connect(function () {
    ClassMenuCreation();
});

function ClassMenuCreation() {

}