/// <reference path ="\types-gt-mp\Definitions\index.d.ts" />
let ClassMenu = API.createMenu("Spawn Menu", "Choose you class", 0, 0, 6);
let ClassMenuItems;
let ClassMenuItemNames = [];
API.onResourceStart.connect(function () {
    ClassMenuCreation();
});
function ClassMenuCreation() {
}
