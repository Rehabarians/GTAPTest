/// <reference path ="\types-gt-mp\Definitions\index.d.ts" />

let Player: LocalHandle = API.getLocalPlayer();
let ValidModsArray: string[] = [];

let CarModMenu: NativeUI.UIMenu = API.createMenu("Car Mod Menu", 0, 0, 6);
let CarModItems: NativeUI.UIMenuItem;

let SpoilerMenu: NativeUI.UIMenu = API.createMenu("Spoiler", 0, 0, 6);
let SpoilerItem: NativeUI.UIMenuItem;

let FrontBumperMenu: NativeUI.UIMenu = API.createMenu("Front Bumper", 0, 0, 6);
let FrontBumperItem: NativeUI.UIMenuItem;

let RearBumperMenu: NativeUI.UIMenu = API.createMenu("Rear Bumper", 0, 0, 6);
let RearBumperItem: NativeUI.UIMenuItem;

let SideSkirtMenu: NativeUI.UIMenu = API.createMenu("Side Skirt", 0, 0, 6);
let SideSkirtItem: NativeUI.UIMenuItem;

let ExhaustMenu: NativeUI.UIMenu = API.createMenu("Exhaust", 0, 0, 6);
let ExhaustItem: NativeUI.UIMenuItem;

let FrameMenu: NativeUI.UIMenu = API.createMenu("Frame", 0, 0, 6);
let FrameItem: NativeUI.UIMenuItem;

let GrilleMenu: NativeUI.UIMenu = API.createMenu("Grille", 0, 0, 6);
let GrilleItem: NativeUI.UIMenuItem;

let HoodMenu: NativeUI.UIMenu = API.createMenu("Hood", 0, 0, 6);
let HoodItem: NativeUI.UIMenuItem;

let FenderMenu: NativeUI.UIMenu = API.createMenu("Fender", 0, 0, 6);
let FenderItem: NativeUI.UIMenuItem;

let RightFenderMenu: NativeUI.UIMenu = API.createMenu("Right Fender", 0, 0, 6);
let RightFenderItem: NativeUI.UIMenuItem;

let RoofMenu: NativeUI.UIMenu = API.createMenu("Roof", 0, 0, 6);
let RoofItem: NativeUI.UIMenuItem;

let EngineMenu: NativeUI.UIMenu = API.createMenu("Engine", 0, 0, 6);
let EngineItem: NativeUI.UIMenuItem;

let BrakesMenu: NativeUI.UIMenu = API.createMenu("Brakes", 0, 0, 6);
let BrakesItem: NativeUI.UIMenuItem;

let TransmissionMenu: NativeUI.UIMenu = API.createMenu("Transmission", 0, 0, 6);
let TransmissionItem: NativeUI.UIMenuItem;

let HornsMenu: NativeUI.UIMenu = API.createMenu("Horns", 0, 0, 6);
let HornsItem: NativeUI.UIMenuItem;

let SuspensionMenu: NativeUI.UIMenu = API.createMenu("Suspension", 0, 0, 6);
let SuspensionItem: NativeUI.UIMenuItem;

let ArmourMenu: NativeUI.UIMenu = API.createMenu("Armour", 0, 0, 6);
let ArmourItem: NativeUI.UIMenuItem;

let TurboMenu: NativeUI.UIMenu = API.createMenu("Turbo", 0, 0, 6);
let TurboItem: NativeUI.UIMenuItem;

let XenonMenu: NativeUI.UIMenu = API.createMenu("Headlights", 0, 0, 6);
let XenonItem: NativeUI.UIMenuItem;

let FrontWheelsMenu: NativeUI.UIMenu = API.createMenu("Front Wheels", 0, 0, 6);
let FrontWheelsItem: NativeUI.UIMenuItem;

let BackWheelsMenu: NativeUI.UIMenu = API.createMenu("Rear Wheel", 0, 0, 6);
let BackWheelsItem: NativeUI.UIMenuItem;

let PlateHoldersMenu: NativeUI.UIMenu = API.createMenu("Numberplate Holder", 0, 0, 6);
let PlateHoldersItem: NativeUI.UIMenuItem;

let TrimDesignMenu: NativeUI.UIMenu = API.createMenu("Trim Design", 0, 0, 6);
let TrimDesignItem: NativeUI.UIMenuItem;

let OrnamentsMenu: NativeUI.UIMenu = API.createMenu("Ornaments", 0, 0, 6);
let OrnamentsItem: NativeUI.UIMenuItem;

let DialDesignMenu: NativeUI.UIMenu = API.createMenu("Dial Design", 0, 0, 6);
let DialDesignItem: NativeUI.UIMenuItem;

let SteeringWheelMenu: NativeUI.UIMenu = API.createMenu("Steering Wheel", 0, 0, 6);
let SteeringWheelItem: NativeUI.UIMenuItem;

let ShiftLeverMenu: NativeUI.UIMenu = API.createMenu("Shift Lever", 0, 0, 6);
let ShiftLeverItem: NativeUI.UIMenuItem;

let PlaquesMenu: NativeUI.UIMenu = API.createMenu("Plaque", 0, 0, 6);
let PlaquesItem: NativeUI.UIMenuItem;

let HydraulicsMenu: NativeUI.UIMenu = API.createMenu("Hydraulics", 0, 0, 6);
let HydraulicsItem: NativeUI.UIMenuItem;

let LiveryMenu: NativeUI.UIMenu = API.createMenu("Livery", 0, 0, 6);
let LiveryItem: NativeUI.UIMenuItem;

let NumberPlateMenu: NativeUI.UIMenu = API.createMenu("Numberplate", 0, 0, 6);
let NumberPlateItem: NativeUI.UIMenuItem;

let WindowTintMenu: NativeUI.UIMenu = API.createMenu("Window Tint", 0, 0, 6);
let WindowTintItem: NativeUI.UIMenuItem;

let DashboardColourMenu: NativeUI.UIMenu = API.createMenu("Dashboard Colour", 0, 0, 6);
let DashboardColourItem: NativeUI.UIMenuItem;

let TrimColourMenu: NativeUI.UIMenu = API.createMenu("Trim Colour", 0, 0, 6);
let TrimColourItem: NativeUI.UIMenuItem;

let ModSlotName: string[] = [
    "Spoiler",
    "Front Bumper",
    "Rear Bumper",
    "Side Skirt",
    "Exhaust",
    "Frame",
    "Grille",
    "Hood",
    "Fender",
    "Right Fender",
    "Roof",
    "Engine",
    "Brakes",
    "Transmission",
    "Horns",
    "Suspension",
    "Armour",
    "Turbo",
    "Xenon",
    "Front Wheels",
    "Rear Wheels",
    "Plate Holder",
    "Trim Design",
    "Ornaments",
    "Dial Design",
    "Steering Wheel",
    "Shift Lever",
    "Plaques",
    "Hydraulics",
    "Livery",
    "Plate",
    "Window Tint",
    "Dashboard Colour",
    "Trim Colour"
];

let ColourName: string[] = [
    "Metallic Black",
    "Metallic Graphite Black",
    "Metallic Black Steel",
    "Metallic Dark Silver",
    "Metallic Silver",
    "Metallic Blue Silver",
    "Metallic Steel Grey",
    "Metallic Shadow Silver",
    "Metallic Stone Silver",
    "Metallic Midnight Silver",
    "Metallic Gun Metal",
    "Metallic Anthracite Grey",
    "Matte Black",
    "Matte Grey",
    "Matte Light Grey",
    "Util Black",
    "Util Black Poly",
    "Util Dark Silver",
    "Util Silver",
    "Util Gun Metal",
    "Util Shadow Silver",
    "Worn Black",
    "Worn Graphite",
    "Worn Silver Grey",
    "Worn Silver",
    "Worn Blue Silver",
    "Worn Shadow Silver",
    "Metallic Red",
    "Metallic Torino Red",
    "Metallic Formular Red",
    "Metallic Blaze Red",
    "Metallic Graceful Red",
    "Metallic Garnet Red",
    "Metallic Desert Red",
    "Metallic Cabernet Red",
    "Metallic Cady Red",
    "Metallic Sunrise Orange",
    "Metallic Classic Gold",
    "Metallic Orange",
    "Matte Red",
    "Matte Dark Red",
    "Matte Orange",
    "Matte Yellow",
    "Util Red",
    "Util Bright Red",
    "Util Garnet Red",
    "Worn Red",
    "Worn Golden Red",
    "Worn Dark Red",
    "Metallic Dark Green",
    "Metallic Racing Green",
    "Metallic Sea Green",
    "Metallic Olive Green",
    "Metallic Green",
    "Metallic Gasoline Blue Green",
    "Matte Lime Green",
    "Util Dark Green",
    "Util Green",
    "Worn Dark Green",
    "Worn Green",
    "Worn Sea Wash",
    "Metallic Midnight Blue",
    "Metallic Dark Blue",
    "Metallic Saxony Blue",
    "Metallic Blue",
    "Metallic Mariner Blue",
    "Metallic Harbor Blue",
    "Metallic Diamond Blue",
    "Metallic Surf Blue",
    "Metallic Nautical Blue",
    "Metallic Bright Blue",
    "Metallic Purple Blue",
    "Metallic Spinnaker Blue",
    "Metallic Ultra Blue",
    "Metallic Bright Blue",
    "Util Dark Blue",
    "Util Midnight Blue",
    "Util Blue",
    "Util Sea Foam Blue",
    "Util Lightning Blue",
    "Util Maui Blue Poly",
    "Util Bright Blue",
    "Matte Dark Blue",
    "Matte Blue",
    "Matte Midnight Blue",
    "Worn Dark Blue",
    "Worn Blue",
    "Worn Light Blue",
    "Metallic Taxi Yellow",
    "Metallic Race Yellow",
    "Metallic Bronze",
    "Metallic Yellow Bird",
    "Metallic Lime",
    "Metallic Champagne",
    "Metallic Pueblo Beige",
    "Metallic Dark Ivory",
    "Metallic Choco Brown",
    "Metallic Golden Brown",
    "Metallic Light Brown",
    "Metallic Staw Beige",
    "Metallic Moss Brown",
    "Metallic Biston Brown",
    "Metallic Beechwood",
    "Metallic Dark Beechwood",
    "Metallic Choco Orange",
    "Metallic Beach Sand",
    "Metallic Sun Bleached Sand",
    "Metallic Cream",
    "Util Brown",
    "Util Medium Brown",
    "Util Light Brown",
    "Metallic White",
    "Metallic Frost White",
    "Worn Honey Beige",
    "Worn Brown",
    "Worn Dark Brown",
    "Worn Straw Beige",
    "Brushed Steel",
    "Brushed Black Steel",
    "Brushed Aluminium",
    "Chrome",
    "Worn Off White",
    "Util Off White",
    "Worn Orange",
    "Worn Light Orange",
    "Metallic Securicor Green",
    "Worn Taxi Yellow",
    "Police Blue",
    "Matte Green",
    "Matte Brown",
    "Worn Orange",
    "Matte White",
    "Worn White",
    "Worn Olive Army Green",
    "Pure White",
    "Hot Pink",
    "Salmon Pink",
    "Metallic Vermillion Pink",
    "Orange",
    "Green",
    "Blue",
    "Metallic Black Blue",
    "Metallic Black Purple",
    "Metallic Black Red",
    "Hunter Green",
    "Metallic Purple",
    "Metallic V Dark Blue",
    "Mod Shop Black",
    "Matte Purple",
    "Matte Dark Purple",
    "Metallic Lava Red",
    "Matte Forest Green",
    "Matte Olive Drab",
    "Matte Desert Brown",
    "Matte Desert Tan",
    "Matte Foliage Green",
    "Default Alloy Colour",
    "Epsilon Blue",
    "Pure Gold",
    "Brushed Gold"
];

let iNumber: number[] = [];

API.onResourceStart.connect(function () {
    ValidMods()
});

API.onServerEventTrigger.connect(function (Event, Args) {
    if (Event === "CarModMenu") {
        //API.sendChatMessage("Valid Mods: " + API.getGameText(Args[1]));

        ValidModsArray.push(API.getGameText(Args[0]));

        //let ModSlotName: string = API.getVehicleModSlotName(API.getPlayerVehicle(Player), Args[0]);
        //API.sendChatMessage("Slot Name: " + ModSlotName);
        CarModMenu.Visible = true;
    }
    else if (Event === "CarModMenuKey") {
        Menu(Args[0]);
    }
});

function Menu(ModType: number) {

    for (var i = 0; i < 36; i++) {

        if (i !== ModType) {
            CarModMenu.RemoveItemAt(i);
        }
    }
}

function ValidMods() {

    let PlayerVehicle: LocalHandle = API.getPlayerVehicle(API.getLocalPlayer());

    //let Text: string = API.getVehicleModSlotName(PlayerVehicle, ModType);

    for (var i = 0; i < ModSlotName.length; i++) {
        CarModItems = API.createMenuItem(ModSlotName[i], "");

        switch (i) {
            case 0:
                CarModMenu.AddItem(CarModItems);
                CarModMenu.BindMenuToItem(SpoilerMenu, CarModItems);
                break;

            case 1:
                CarModMenu.AddItem(CarModItems);
                CarModMenu.BindMenuToItem(FrontBumperMenu, CarModItems);
                break;

            case 2:
                CarModMenu.AddItem(CarModItems);
                CarModMenu.BindMenuToItem(RearBumperMenu, CarModItems);
                break;

            case 3:
                CarModMenu.AddItem(CarModItems);
                CarModMenu.BindMenuToItem(SideSkirtMenu, CarModItems);
                break;

            case 4:
                CarModMenu.AddItem(CarModItems);
                CarModMenu.BindMenuToItem(ExhaustMenu, CarModItems);
                break;

            case 5:
                CarModMenu.AddItem(CarModItems);
                CarModMenu.BindMenuToItem(FrameMenu, CarModItems);
                break;

            case 6:
                CarModMenu.AddItem(CarModItems);
                CarModMenu.BindMenuToItem(GrilleMenu, CarModItems);
                break;

            case 7:
                CarModMenu.AddItem(CarModItems);
                CarModMenu.BindMenuToItem(HoodMenu, CarModItems);
                break;

            case 8:
                CarModMenu.AddItem(CarModItems);
                CarModMenu.BindMenuToItem(FenderMenu, CarModItems);
                break;

            case 9:
                CarModMenu.AddItem(CarModItems);
                CarModMenu.BindMenuToItem(RightFenderMenu, CarModItems);
                break;

            case 10:
                CarModMenu.AddItem(CarModItems);
                CarModMenu.BindMenuToItem(RoofMenu, CarModItems);
                break;

            case 11:
                CarModMenu.AddItem(CarModItems);
                CarModMenu.BindMenuToItem(EngineMenu, CarModItems);
                break;

            case 12:
                CarModMenu.AddItem(CarModItems);
                CarModMenu.BindMenuToItem(BrakesMenu, CarModItems);
                break;

            case 13:
                CarModMenu.AddItem(CarModItems);
                CarModMenu.BindMenuToItem(TransmissionMenu, CarModItems);
                break;

            case 14:
                CarModMenu.AddItem(CarModItems);
                CarModMenu.BindMenuToItem(HornsMenu, CarModItems);
                break;

            case 15:
                CarModMenu.AddItem(CarModItems);
                CarModMenu.BindMenuToItem(SuspensionMenu, CarModItems);
                break;

            case 16:
                CarModMenu.AddItem(CarModItems);
                CarModMenu.BindMenuToItem(ArmourMenu, CarModItems);
                break;

            case 17:
                CarModMenu.AddItem(CarModItems);
                CarModMenu.BindMenuToItem(TurboMenu, CarModItems);
                break;

            case 18:
                CarModMenu.AddItem(CarModItems);
                CarModMenu.BindMenuToItem(XenonMenu, CarModItems);
                break;

            case 19:
                CarModMenu.AddItem(CarModItems);
                CarModMenu.BindMenuToItem(FrontWheelsMenu, CarModItems);
                break;

            case 20:
                CarModMenu.AddItem(CarModItems);
                CarModMenu.BindMenuToItem(BackWheelsMenu, CarModItems);
                break;

            case 21:
                CarModMenu.AddItem(CarModItems);
                CarModMenu.BindMenuToItem(PlateHoldersMenu, CarModItems);
                break;

            case 22:
                CarModMenu.AddItem(CarModItems);
                CarModMenu.BindMenuToItem(TrimDesignMenu, CarModItems);
                break;

            case 23:
                CarModMenu.AddItem(CarModItems);
                CarModMenu.BindMenuToItem(OrnamentsMenu, CarModItems);
                break;

            case 24:
                CarModMenu.AddItem(CarModItems);
                CarModMenu.BindMenuToItem(DialDesignMenu, CarModItems);
                break;

            case 25:
                CarModMenu.AddItem(CarModItems);
                CarModMenu.BindMenuToItem(SteeringWheelMenu, CarModItems);
                break;

            case 26:
                CarModMenu.AddItem(CarModItems);
                CarModMenu.BindMenuToItem(ShiftLeverMenu, CarModItems);
                break;

            case 27:
                CarModMenu.AddItem(CarModItems);
                CarModMenu.BindMenuToItem(PlaquesMenu, CarModItems);
                break;

            case 28:
                CarModMenu.AddItem(CarModItems);
                CarModMenu.BindMenuToItem(HydraulicsMenu, CarModItems);
                break;

            case 29:
                CarModMenu.AddItem(CarModItems);
                CarModMenu.BindMenuToItem(LiveryMenu, CarModItems);
                break;

            case 30:
                CarModMenu.AddItem(CarModItems);
                CarModMenu.BindMenuToItem(NumberPlateMenu, CarModItems);
                break;

            case 31:
                CarModMenu.AddItem(CarModItems);
                CarModMenu.BindMenuToItem(WindowTintMenu, CarModItems);
                break;

            case 32:
                CarModMenu.AddItem(CarModItems);
                CarModMenu.BindMenuToItem(DashboardColourMenu, CarModItems);
                break;

            case 33:
                CarModMenu.AddItem(CarModItems);
                CarModMenu.BindMenuToItem(TrimColourMenu, CarModItems);
                break;
        }
    }
}

CarModMenu.OnMenuClose.connect(function (sender) {
    CarModMenu.Clear();
});