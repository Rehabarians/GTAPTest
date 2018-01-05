/// <reference path ="\types-gt-mp\Definitions\index.d.ts" />

let MainMenu: NativeUI.UIMenu = API.createMenu("Main Menu", 0, 0, 6);
let MainMenuItems: NativeUI.UIMenuItem;

let Colour1Menu: NativeUI.UIMenu = API.createMenu("Primary Colour", 0, 0, 6);
let Colour1Item: NativeUI.UIMenuItem;

let PearlescentMenu: NativeUI.UIMenu = API.createMenu("Pearlescent Colour", 0, 0, 6);
let PearlescentItem: NativeUI.UIMenuItem;

let Colour2Menu: NativeUI.UIMenu = API.createMenu("Secondary Colour", 0, 0, 6);
let Colour2Item: NativeUI.UIMenuItem;

let BlackPrimMenu: NativeUI.UIMenu = API.createMenu("Black Colours", 0, 0, 6);
let BlackPearlMenu: NativeUI.UIMenu = API.createMenu("Black Colours", 0, 0, 6);
let BlackSecMenu: NativeUI.UIMenu = API.createMenu("Black Colours", 0, 0, 6);

let RedPrimMenu: NativeUI.UIMenu = API.createMenu("Red Colours", 0, 0, 6);
let RedPearlMenu: NativeUI.UIMenu = API.createMenu("Red Colours", 0, 0, 6);
let RedSecMenu: NativeUI.UIMenu = API.createMenu("Red Colours", 0, 0, 6);

let GreenPrimMenu: NativeUI.UIMenu = API.createMenu("Green Colours", 0, 0, 6);
let GreenPearlMenu: NativeUI.UIMenu = API.createMenu("Green Colours", 0, 0, 6);
let GreenSecMenu: NativeUI.UIMenu = API.createMenu("Green Colours", 0, 0, 6);

let BluePrimMenu: NativeUI.UIMenu = API.createMenu("Blue Colours", 0, 0, 6);
let BluePearlMenu: NativeUI.UIMenu = API.createMenu("Blue Colours", 0, 0, 6);
let BlueSecMenu: NativeUI.UIMenu = API.createMenu("Blue Colours", 0, 0, 6);

let BrownPrimMenu: NativeUI.UIMenu = API.createMenu("Brown Colours", 0, 0, 6);
let BrownPearlMenu: NativeUI.UIMenu = API.createMenu("Brown Colours", 0, 0, 6);
let BrownSecMenu: NativeUI.UIMenu = API.createMenu("Brown Colours", 0, 0, 6);

let WhitePrimMenu: NativeUI.UIMenu = API.createMenu("White Colours", 0, 0, 6);
let WhitePearlMenu: NativeUI.UIMenu = API.createMenu("White Colours", 0, 0, 6);
let WhiteSecMenu: NativeUI.UIMenu = API.createMenu("White Colours", 0, 0, 6);

let MetalPrimMenu: NativeUI.UIMenu = API.createMenu("Metal Paints", 0, 0, 6);
let MetalPearlMenu: NativeUI.UIMenu = API.createMenu("Metal Paints", 0, 0, 6);
let MetalSecMenu: NativeUI.UIMenu = API.createMenu("Metal Paints", 0, 0, 6);

let PinkPrimMenu: NativeUI.UIMenu = API.createMenu("Pink Colours", 0, 0, 6);
let PinkPearlMenu: NativeUI.UIMenu = API.createMenu("Pink Colours", 0, 0, 6);
let PinkSecMenu: NativeUI.UIMenu = API.createMenu("Pink Colours", 0, 0, 6);

let PurplePrimMenu: NativeUI.UIMenu = API.createMenu("Purple Colours", 0, 0, 6);
let PurplePearlMenu: NativeUI.UIMenu = API.createMenu("Purple Colours", 0, 0, 6);
let PurpleSecMenu: NativeUI.UIMenu = API.createMenu("Purple Colours", 0, 0, 6);

let YellowPrimMenu: NativeUI.UIMenu = API.createMenu("Yellow Colours", 0, 0, 6);
let YellowPearlMenu: NativeUI.UIMenu = API.createMenu("Yellow Colours", 0, 0, 6);
let YellowSecMenu: NativeUI.UIMenu = API.createMenu("Yellow Colours", 0, 0, 6);

let OrangePrimMenu: NativeUI.UIMenu = API.createMenu("Orange Colours", 0, 0, 6);
let OrangePearlMenu: NativeUI.UIMenu = API.createMenu("Orange Colours", 0, 0, 6);
let OrangeSecMenu: NativeUI.UIMenu = API.createMenu("Orange Colours", 0, 0, 6);

let MainMenuItemNames: string[] = [
    "Primary Colour",
    "Pearlescent Colour",
    "Secondary Colour"
];
let ColourItem: string[] = [
    "Metal",
    "Black",
    "White",
    "Red",
    "Orange",
    "Yellow",
    "Green",
    "Blue",
    "Pink",
    "Purple",
    "Brown"
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

let PlayerVehicle: LocalHandle;

function FirstMenu() {
    for (var i = 0; i < MainMenuItemNames.length; i++) {
        MainMenuItems = API.createMenuItem(MainMenuItemNames[i], "");
        MainMenu.AddItem(MainMenuItems);

        if (i === 0) {
            MainMenu.BindMenuToItem(Colour1Menu, MainMenuItems);
        }
        else if (i === 1) {
            MainMenu.BindMenuToItem(PearlescentMenu, MainMenuItems);
        }
        else if (i === 2) {
            MainMenu.BindMenuToItem(Colour2Menu, MainMenuItems);
        }
    }
}

function ColourMenu() {
    for (var i = 0; i < ColourItem.length; i++) {
        
        Colour1Item = API.createMenuItem(ColourItem[i], "");
        Colour1Menu.AddItem(Colour1Item);
        PearlescentItem = API.createMenuItem(ColourItem[i], "");
        PearlescentMenu.AddItem(PearlescentItem);
        Colour2Item = API.createMenuItem(ColourItem[i], "");
        Colour2Menu.AddItem(Colour2Item);

        switch (i) {
            case 0:
                Colour1Menu.BindMenuToItem(MetalPrimMenu, Colour1Item);
                PearlescentMenu.BindMenuToItem(MetalPearlMenu, PearlescentItem);
                Colour2Menu.BindMenuToItem(MetalSecMenu, Colour2Item);
                break;
            case 1:
                Colour1Menu.BindMenuToItem(BlackPrimMenu, Colour1Item);
                PearlescentMenu.BindMenuToItem(BlackPearlMenu, PearlescentItem);
                Colour2Menu.BindMenuToItem(BlackSecMenu, Colour2Item);
                break;
            case 2:
                Colour1Menu.BindMenuToItem(WhitePrimMenu, Colour1Item);
                PearlescentMenu.BindMenuToItem(WhitePearlMenu, PearlescentItem);
                Colour2Menu.BindMenuToItem(WhiteSecMenu, Colour2Item);
                break;
            case 3:
                Colour1Menu.BindMenuToItem(RedPrimMenu, Colour1Item);
                PearlescentMenu.BindMenuToItem(RedPearlMenu, PearlescentItem);
                Colour2Menu.BindMenuToItem(RedSecMenu, Colour2Item);
                break;
            case 4:
                Colour1Menu.BindMenuToItem(OrangePrimMenu, Colour1Item);
                PearlescentMenu.BindMenuToItem(OrangePearlMenu, PearlescentItem);
                Colour2Menu.BindMenuToItem(OrangeSecMenu, Colour2Item);
                break;
            case 5:
                Colour1Menu.BindMenuToItem(YellowPrimMenu, Colour1Item);
                PearlescentMenu.BindMenuToItem(YellowPearlMenu, PearlescentItem);
                Colour2Menu.BindMenuToItem(YellowSecMenu, Colour2Item);
                break;
            case 6:
                Colour1Menu.BindMenuToItem(GreenPrimMenu, Colour1Item);
                PearlescentMenu.BindMenuToItem(GreenPearlMenu, PearlescentItem);
                Colour2Menu.BindMenuToItem(GreenSecMenu, Colour2Item);
                break;
            case 7:
                Colour1Menu.BindMenuToItem(BluePrimMenu, Colour1Item);
                PearlescentMenu.BindMenuToItem(BluePearlMenu, PearlescentItem);
                Colour2Menu.BindMenuToItem(BlueSecMenu, Colour2Item);
                break;
            case 8:
                Colour1Menu.BindMenuToItem(PinkPrimMenu, Colour1Item);
                PearlescentMenu.BindMenuToItem(PinkPearlMenu, PearlescentItem);
                Colour2Menu.BindMenuToItem(PinkSecMenu, Colour2Item);
                break;
            case 9:
                Colour1Menu.BindMenuToItem(PurplePrimMenu, Colour1Item);
                PearlescentMenu.BindMenuToItem(PurplePearlMenu, PearlescentItem);
                Colour2Menu.BindMenuToItem(PurpleSecMenu, Colour2Item);
                break;
            case 10:
                Colour1Menu.BindMenuToItem(BrownPrimMenu, Colour1Item);
                PearlescentMenu.BindMenuToItem(BrownPearlMenu, PearlescentItem);
                Colour2Menu.BindMenuToItem(BrownSecMenu, Colour2Item);
                break;
        }
    }
}

function ColourSelectionMenu() {
    for (var i = 0; i < ColourName.length; i++) {
        switch (i) {
            case 0:
                BlackPrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BlackPearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BlackSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 1:
                BlackPrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BlackPearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BlackSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 2:
                BlackPrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BlackPearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BlackSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 3:
                BlackPrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BlackPearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BlackSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 4:
                BlackPrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BlackPearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BlackSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 5:
                BlackPrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BlackPearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BlackSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 6:
                BlackPrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BlackPearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BlackSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 7:
                BlackPrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BlackPearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BlackSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 8:
                BlackPrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BlackPearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BlackSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 9:
                BlackPrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BlackPearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BlackSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 10:
                BlackPrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BlackPearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BlackSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 11:
                BlackPrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BlackPearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BlackSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 12:
                BlackPrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BlackPearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BlackSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 13:
                BlackPrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BlackPearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BlackSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 14:
                BlackPrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BlackPearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BlackSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 15:
                BlackPrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BlackPearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BlackSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 16:
                BlackPrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BlackPearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BlackSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 17:
                BlackPrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BlackPearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BlackSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 18:
                BlackPrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BlackPearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BlackSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 19:
                BlackPrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BlackPearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BlackSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 20:
                BlackPrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BlackPearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BlackSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 21:
                BlackPrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BlackPearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BlackSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 22:
                BlackPrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BlackPearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BlackSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 23:
                BlackPrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BlackPearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BlackSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 24:
                BlackPrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BlackPearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BlackSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 25:
                BlackPrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BlackPearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BlackSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 26:
                BlackPrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BlackPearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BlackSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 27:
                RedPrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                RedPearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                RedSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 28:
                RedPrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                RedPearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                RedSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 29:
                RedPrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                RedPearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                RedSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 30:
                RedPrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                RedPearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                RedSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 31:
                RedPrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                RedPearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                RedSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 32:
                RedPrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                RedPearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                RedSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 33:
                RedPrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                RedPearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                RedSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 34:
                RedPrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                RedPearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                RedSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 35:
                RedPrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                RedPearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                RedSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 36:
                OrangePrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                OrangePearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                OrangeSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 37:
                MetalPrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                MetalPearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                MetalSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 38:
                OrangePrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                OrangePearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                OrangeSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 39:
                RedPrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                RedPearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                RedSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 40:
                RedPrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                RedPearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                RedSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 41:
                OrangePrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                OrangePearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                OrangeSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 42:
                YellowPrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                YellowPearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                YellowSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 43:
                RedPrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                RedPearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                RedSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 44:
                RedPrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                RedPearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                RedSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 45:
                RedPrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                RedPearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                RedSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 46:
                RedPrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                RedPearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                RedSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 47:
                RedPrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                RedPearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                RedSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 48:
                RedPrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                RedPearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                RedSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 49:
                GreenPrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                GreenPearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                GreenSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 50:
                GreenPrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                GreenPearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                GreenSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 51:
                GreenPrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                GreenPearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                GreenSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 52:
                GreenPrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                GreenPearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                GreenSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 53:
                GreenPrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                GreenPearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                GreenSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 54:
                GreenPrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                GreenPearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                GreenSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 55:
                GreenPrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                GreenPearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                GreenSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 56:
                GreenPrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                GreenPearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                GreenSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 57:
                GreenPrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                GreenPearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                GreenSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 58:
                GreenPrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                GreenPearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                GreenSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 59:
                GreenPrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                GreenPearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                GreenSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 60:
                GreenPrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                GreenPearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                GreenSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 61:
                BluePrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BluePearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BlueSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 62:
                BluePrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BluePearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BlueSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 63:
                BluePrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BluePearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BlueSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 64:
                BluePrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BluePearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BlueSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 65:
                BluePrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BluePearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BlueSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 66:
                BluePrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BluePearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BlueSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 67:
                BluePrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BluePearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BlueSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 68:
                BluePrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BluePearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BlueSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 69:
                BluePrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BluePearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BlueSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 70:
                BluePrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BluePearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BlueSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 71:
                BluePrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BluePearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BlueSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 72:
                BluePrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BluePearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BlueSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 73:
                BluePrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BluePearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BlueSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 74:
                BluePrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BluePearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BlueSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 75:
                BluePrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BluePearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BlueSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 76:
                BluePrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BluePearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BlueSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 77:
                BluePrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BluePearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BlueSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 78:
                BluePrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BluePearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BlueSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 79:
                BluePrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BluePearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BlueSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 80:
                BluePrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BluePearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BlueSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 81:
                BluePrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BluePearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BlueSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 82:
                BluePrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BluePearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BlueSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 83:
                BluePrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BluePearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BlueSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 84:
                BluePrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BluePearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BlueSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 85:
                BluePrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BluePearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BlueSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 86:
                BluePrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BluePearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BlueSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 87:
                BluePrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BluePearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BlueSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 88:
                YellowPrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                YellowPearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                YellowSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 89:
                YellowPrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                YellowPearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                YellowSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 90:
                BrownPrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BrownPearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BrownSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 91:
                YellowPrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                YellowPearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                YellowSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 92:
                GreenPrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                GreenPearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                GreenSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 93:
                WhitePrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                WhitePearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                WhiteSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 94:
                BrownPrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BrownPearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BrownSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 95:
                BrownPrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BrownPearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BrownSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 96:
                BrownPrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BrownPearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BrownSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 97:
                BrownPrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BrownPearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BrownSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 98:
                BrownPrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BrownPearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BrownSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 99:
                BrownPrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BrownPearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BrownSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 100:
                BrownPrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BrownPearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BrownSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 101:
                BrownPrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BrownPearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BrownSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 102:
                BrownPrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BrownPearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BrownSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 103:
                BrownPrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BrownPearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BrownSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 104:
                BrownPrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BrownPearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BrownSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 105:
                BrownPrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BrownPearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BrownSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 106:
                BrownPrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BrownPearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BrownSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 107:
                WhitePrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                WhitePearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                WhiteSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 108:
                BrownPrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BrownPearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BrownSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 109:
                BrownPrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BrownPearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BrownSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 110:
                BrownPrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BrownPearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BrownSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 111:
                WhitePrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                WhitePearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                WhiteSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 112:
                WhitePrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                WhitePearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                WhiteSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 113:
                BrownPrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BrownPearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BrownSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 114:
                BrownPrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BrownPearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BrownSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 115:
                BrownPrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BrownPearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BrownSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 116:
                BrownPrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BrownPearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BrownSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 117:
                MetalPrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                MetalPearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                MetalSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 118:
                MetalPrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                MetalPearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                MetalSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 119:
                MetalPrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                MetalPearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                MetalSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 120:
                MetalPrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                MetalPearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                MetalSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 121:
                WhitePrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                WhitePearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                WhiteSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 122:
                WhitePrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                WhitePearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                WhiteSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 123:
                OrangePrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                OrangePearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                OrangeSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 124:
                OrangePrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                OrangePearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                OrangeSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 125:
                GreenPrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                GreenPearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                GreenSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 126:
                YellowPrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                YellowPearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                YellowSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 127:
                BluePrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BluePearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BlueSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 128:
                GreenPrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                GreenPearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                GreenSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 129:
                BrownPrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BrownPearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BrownSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 130:
                OrangePrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                OrangePearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                OrangeSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 131:
                WhitePrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                WhitePearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                WhiteSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 132:
                WhitePrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                WhitePearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                WhiteSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 133:
                GreenPrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                GreenPearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                GreenSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 134:
                WhitePrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                WhitePearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                WhiteSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 135:
                PinkPrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                PinkPearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                PinkSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 136:
                PinkPrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                PinkPearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                PinkSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 137:
                PinkPrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                PinkPearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                PinkSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 138:
                OrangePrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                OrangePearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                OrangeSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 139:
                GreenPrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                GreenPearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                GreenSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 140:
                BluePrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BluePearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BlueSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 141:
                BluePrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BluePearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BlueSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 142:
                PurplePrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                PurplePearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                PurpleSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 143:
                RedPrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                RedPearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                RedSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 144:
                GreenPrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                GreenPearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                GreenSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 145:
                PurplePrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                PurplePearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                PurpleSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 146:
                BluePrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BluePearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BlueSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 147:
                BlackPrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BlackPearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BlackSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 148:
                PurplePrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                PurplePearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                PurpleSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 149:
                PurplePrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                PurplePearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                PurpleSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 150:
                RedPrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                RedPearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                RedSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 151:
                GreenPrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                GreenPearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                GreenSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 152:
                GreenPrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                GreenPearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                GreenSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 153:
                BrownPrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BrownPearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BrownSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 154:
                BrownPrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BrownPearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BrownSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 155:
                GreenPrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                GreenPearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                GreenSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 156:
                MetalPrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                MetalPearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                MetalSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 157:
                BluePrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BluePearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                BlueSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 158:
                MetalPrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                MetalPearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                MetalSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
            case 159:
                MetalPrimMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                MetalPearlMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                MetalSecMenu.AddItem(API.createMenuItem(ColourName[i], ""));
                break;
        }
    }
}

API.onResourceStart.connect(function () {
    FirstMenu();
    ColourSelectionMenu();;
    ColourMenu();
});

API.onServerEventTrigger.connect(function (event, args) {
    if (event === "CarColourMenu") {
        PlayerVehicle = API.getPlayerVehicle(API.getLocalPlayer());
        MainMenu.Visible = true;
    }
});

Colour1Menu.OnItemSelect.connect(function (sender, item, index) {
    switch (index) {
        case 0:
            MetalPrimMenu.CurrentSelection = 0;
            API.setVehiclePrimaryColor(PlayerVehicle, 37);
            break;
        case 1:
            BlackPrimMenu.CurrentSelection = 0;
            API.setVehiclePrimaryColor(PlayerVehicle, 0);
            break;
        case 2:
            WhitePrimMenu.CurrentSelection = 0;
            API.setVehiclePrimaryColor(PlayerVehicle, 93);
            break;
        case 3:
            RedPrimMenu.CurrentSelection = 0;
            API.setVehiclePrimaryColor(PlayerVehicle, 27);
            break;
        case 4:
            OrangePrimMenu.CurrentSelection = 0;
            API.setVehiclePrimaryColor(PlayerVehicle, 36);
            break;
        case 5:
            YellowPrimMenu.CurrentSelection = 0;
            API.setVehiclePrimaryColor(PlayerVehicle, 42);
            break;
        case 6:
            GreenPrimMenu.CurrentSelection = 0;
            API.setVehiclePrimaryColor(PlayerVehicle, 49);
            break;
        case 7:
            BluePrimMenu.CurrentSelection = 0;
            API.setVehiclePrimaryColor(PlayerVehicle, 61);
            break;
        case 8:
            PinkPrimMenu.CurrentSelection = 0;
            API.setVehiclePrimaryColor(PlayerVehicle, 135);
            break;
        case 9:
            PurplePrimMenu.CurrentSelection = 0;
            API.setVehiclePrimaryColor(PlayerVehicle, 142);
            break;
        case 10:
            BrownPrimMenu.CurrentSelection = 0;
            API.setVehiclePrimaryColor(PlayerVehicle, 90);
            break;
    }
});
PearlescentMenu.OnItemSelect.connect(function (sender, item, index) {
    switch (index) {
        case 0:
            MetalPearlMenu.CurrentSelection = 0;
            API.setVehiclePearlescentColor(PlayerVehicle, 37);
            break;
        case 1:
            BlackPearlMenu.CurrentSelection = 0;
            API.setVehiclePearlescentColor(PlayerVehicle, 0);
            break;
        case 2:
            WhitePearlMenu.CurrentSelection = 0;
            API.setVehiclePearlescentColor(PlayerVehicle, 93);
            break;
        case 3:
            RedPearlMenu.CurrentSelection = 0;
            API.setVehiclePearlescentColor(PlayerVehicle, 27);
            break;
        case 4:
            OrangePearlMenu.CurrentSelection = 0;
            API.setVehiclePearlescentColor(PlayerVehicle, 36);
            break;
        case 5:
            YellowPearlMenu.CurrentSelection = 0;
            API.setVehiclePearlescentColor(PlayerVehicle, 42);
            break;
        case 6:
            GreenPearlMenu.CurrentSelection = 0;
            API.setVehiclePearlescentColor(PlayerVehicle, 49);
            break;
        case 7:
            BluePearlMenu.CurrentSelection = 0;
            API.setVehiclePearlescentColor(PlayerVehicle, 61);
            break;
        case 8:
            PinkPearlMenu.CurrentSelection = 0;
            API.setVehiclePearlescentColor(PlayerVehicle, 135);
            break;
        case 9:
            PurplePearlMenu.CurrentSelection = 0;
            API.setVehiclePearlescentColor(PlayerVehicle, 142);
            break;
        case 10:
            BrownPearlMenu.CurrentSelection = 0;
            API.setVehiclePearlescentColor(PlayerVehicle, 90);
            break;
    }
});
Colour2Menu.OnItemSelect.connect(function (sender, item, index) {
    switch (index) {
        case 0:
            MetalSecMenu.CurrentSelection = 0;
            API.setVehicleSecondaryColor(PlayerVehicle, 37);
            break;
        case 1:
            BlackSecMenu.CurrentSelection = 0;
            API.setVehicleSecondaryColor(PlayerVehicle, 0);
            break;
        case 2:
            WhiteSecMenu.CurrentSelection = 0;
            API.setVehicleSecondaryColor(PlayerVehicle, 93);
            break;
        case 3:
            RedSecMenu.CurrentSelection = 0;
            API.setVehicleSecondaryColor(PlayerVehicle, 27);
            break;
        case 4:
            OrangeSecMenu.CurrentSelection = 0;
            API.setVehicleSecondaryColor(PlayerVehicle, 36);
            break;
        case 5:
            YellowSecMenu.CurrentSelection = 0;
            API.setVehicleSecondaryColor(PlayerVehicle, 42);
            break;
        case 6:
            GreenSecMenu.CurrentSelection = 0;
            API.setVehicleSecondaryColor(PlayerVehicle, 49);
            break;
        case 7:
            BlueSecMenu.CurrentSelection = 0;
            API.setVehicleSecondaryColor(PlayerVehicle, 61);
            break;
        case 8:
            PinkSecMenu.CurrentSelection = 0;
            API.setVehicleSecondaryColor(PlayerVehicle, 135);
            break;
        case 9:
            PurpleSecMenu.CurrentSelection = 0;
            API.setVehicleSecondaryColor(PlayerVehicle, 142);
            break;
        case 10:
            BrownSecMenu.CurrentSelection = 0;
            API.setVehicleSecondaryColor(PlayerVehicle, 90);
            break;
    }
});

MetalPrimMenu.OnIndexChange.connect(function (sender, index) {
    switch (index) {
        case 0:
            API.setVehiclePrimaryColor(PlayerVehicle, 37);
            break;
        case 1:
            API.setVehiclePrimaryColor(PlayerVehicle, 117);
            break;
        case 2:
            API.setVehiclePrimaryColor(PlayerVehicle, 118);
            break;
        case 3:
            API.setVehiclePrimaryColor(PlayerVehicle, 119);
            break;
        case 4:
            API.setVehiclePrimaryColor(PlayerVehicle, 120);
            break;
        case 5:
            API.setVehiclePrimaryColor(PlayerVehicle, 156);
            break;
        case 6:
            API.setVehiclePrimaryColor(PlayerVehicle, 158);
            break;
        case 7:
            API.setVehiclePrimaryColor(PlayerVehicle, 159);
            break;
    }
});
MetalPrimMenu.OnItemSelect.connect(function (sender, item, index) {
    switch (index) {
        case 0:
            API.triggerServerEvent("Primary", 37);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 1:
            API.triggerServerEvent("Primary", 117);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 2:
            API.triggerServerEvent("Primary", 118);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 3:
            API.triggerServerEvent("Primary", 119);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 4:
            API.triggerServerEvent("Primary", 120);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 5:
            API.triggerServerEvent("Primary", 156);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 6:
            API.triggerServerEvent("Primary", 158);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 7:
            API.triggerServerEvent("Primary", 159);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
    }
});
MetalPearlMenu.OnIndexChange.connect(function (sender, index) {
    switch (index) {
        case 0:
            API.setVehiclePearlescentColor(PlayerVehicle, 37);
            break;
        case 1:
            API.setVehiclePearlescentColor(PlayerVehicle, 117);
            break;
        case 2:
            API.setVehiclePearlescentColor(PlayerVehicle, 118);
            break;
        case 3:
            API.setVehiclePearlescentColor(PlayerVehicle, 119);
            break;
        case 4:
            API.setVehiclePearlescentColor(PlayerVehicle, 120);
            break;
        case 5:
            API.setVehiclePearlescentColor(PlayerVehicle, 156);
            break;
        case 6:
            API.setVehiclePearlescentColor(PlayerVehicle, 158);
            break;
        case 7:
            API.setVehiclePearlescentColor(PlayerVehicle, 159);
            break;
    }
});
MetalPearlMenu.OnItemSelect.connect(function (sender, item, index) {
    switch (index) {
        case 0:
            API.triggerServerEvent("Pearlescent", 37);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 1:
            API.triggerServerEvent("Pearlescent", 117);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 2:
            API.triggerServerEvent("Pearlescent", 118);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 3:
            API.triggerServerEvent("Pearlescent", 119);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 4:
            API.triggerServerEvent("Pearlescent", 120);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 5:
            API.triggerServerEvent("Pearlescent", 156);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 6:
            API.triggerServerEvent("Pearlescent", 158);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 7:
            API.triggerServerEvent("Pearlescent", 159);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
    }
});
MetalSecMenu.OnIndexChange.connect(function (sender, index) {
    switch (index) {
        case 0:
            API.setVehicleSecondaryColor(PlayerVehicle, 37);
            break;
        case 1:
            API.setVehicleSecondaryColor(PlayerVehicle, 117);
            break;
        case 2:
            API.setVehicleSecondaryColor(PlayerVehicle, 118);
            break;
        case 3:
            API.setVehicleSecondaryColor(PlayerVehicle, 119);
            break;
        case 4:
            API.setVehicleSecondaryColor(PlayerVehicle, 120);
            break;
        case 5:
            API.setVehicleSecondaryColor(PlayerVehicle, 156);
            break;
        case 6:
            API.setVehicleSecondaryColor(PlayerVehicle, 158);
            break;
        case 7:
            API.setVehicleSecondaryColor(PlayerVehicle, 159);
            break;
    }
});
MetalSecMenu.OnItemSelect.connect(function (sender, item, index) {
    switch (index) {
        case 0:
            API.triggerServerEvent("Secondary", 37);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 1:
            API.triggerServerEvent("Secondary", 117);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 2:
            API.triggerServerEvent("Secondary", 118);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 3:
            API.triggerServerEvent("Secondary", 119);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 4:
            API.triggerServerEvent("Secondary", 120);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 5:
            API.triggerServerEvent("Secondary", 156);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 6:
            API.triggerServerEvent("Secondary", 158);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 7:
            API.triggerServerEvent("Secondary", 159);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
    }
});

BlackPrimMenu.OnIndexChange.connect(function (sender, index) {
    switch (index) {
        case 0:
            API.setVehiclePrimaryColor(PlayerVehicle, 0);
            break;
        case 1:
            API.setVehiclePrimaryColor(PlayerVehicle, 1);
            break;
        case 2:
            API.setVehiclePrimaryColor(PlayerVehicle, 2);
            break;
        case 3:
            API.setVehiclePrimaryColor(PlayerVehicle, 3);
            break;
        case 4:
            API.setVehiclePrimaryColor(PlayerVehicle, 4);
            break;
        case 5:
            API.setVehiclePrimaryColor(PlayerVehicle, 5);
            break;
        case 6:
            API.setVehiclePrimaryColor(PlayerVehicle, 6);
            break;
        case 7:
            API.setVehiclePrimaryColor(PlayerVehicle, 7);
            break;
        case 8:
            API.setVehiclePrimaryColor(PlayerVehicle, 8);
            break;
        case 9:
            API.setVehiclePrimaryColor(PlayerVehicle, 9);
            break;
        case 10:
            API.setVehiclePrimaryColor(PlayerVehicle, 10);
            break;
        case 11:
            API.setVehiclePrimaryColor(PlayerVehicle, 11);
            break;
        case 12:
            API.setVehiclePrimaryColor(PlayerVehicle, 12);
            break;
        case 13:
            API.setVehiclePrimaryColor(PlayerVehicle, 13);
            break;
        case 14:
            API.setVehiclePrimaryColor(PlayerVehicle, 14);
            break;
        case 15:
            API.setVehiclePrimaryColor(PlayerVehicle, 15);
            break;
        case 16:
            API.setVehiclePrimaryColor(PlayerVehicle, 16);
            break;
        case 17:
            API.setVehiclePrimaryColor(PlayerVehicle, 17);
            break;
        case 18:
            API.setVehiclePrimaryColor(PlayerVehicle, 18);
            break;
        case 19:
            API.setVehiclePrimaryColor(PlayerVehicle, 19);
            break;
        case 20:
            API.setVehiclePrimaryColor(PlayerVehicle, 20);
            break;
        case 21:
            API.setVehiclePrimaryColor(PlayerVehicle, 21);
            break;
        case 22:
            API.setVehiclePrimaryColor(PlayerVehicle, 22);
            break;
        case 23:
            API.setVehiclePrimaryColor(PlayerVehicle, 23);
            break;
        case 24:
            API.setVehiclePrimaryColor(PlayerVehicle, 24);
            break;
        case 25:
            API.setVehiclePrimaryColor(PlayerVehicle, 25);
            break;
        case 26:
            API.setVehiclePrimaryColor(PlayerVehicle, 26);
            break;
    }
});
BlackPrimMenu.OnItemSelect.connect(function (sender, item, index) {
    switch (index) {
        case 0:
            API.triggerServerEvent("Primary", 0);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 1:
            API.triggerServerEvent("Primary", 1);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 2:
            API.triggerServerEvent("Primary", 2);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 3:
            API.triggerServerEvent("Primary", 3);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 4:
            API.triggerServerEvent("Primary", 4);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 5:
            API.triggerServerEvent("Primary", 5);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 6:
            API.triggerServerEvent("Primary", 6);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 7:
            API.triggerServerEvent("Primary", 7);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 8:
            API.triggerServerEvent("Primary", 8);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 9:
            API.triggerServerEvent("Primary", 9);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 10:
            API.triggerServerEvent("Primary", 10);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 11:
            API.triggerServerEvent("Primary", 11);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 12:
            API.triggerServerEvent("Primary", 12);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 13:
            API.triggerServerEvent("Primary", 13);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 14:
            API.triggerServerEvent("Primary", 14);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 15:
            API.triggerServerEvent("Primary", 15);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 16:
            API.triggerServerEvent("Primary", 16);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 17:
            API.triggerServerEvent("Primary", 17);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 18:
            API.triggerServerEvent("Primary", 18);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 19:
            API.triggerServerEvent("Primary", 19);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 20:
            API.triggerServerEvent("Primary", 20);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 21:
            API.triggerServerEvent("Primary", 21);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 22:
            API.triggerServerEvent("Primary", 22);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 23:
            API.triggerServerEvent("Primary", 23);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 24:
            API.triggerServerEvent("Primary", 24);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 25:
            API.triggerServerEvent("Primary", 25);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 26:
            API.triggerServerEvent("Primary", 26);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
    }
});
BlackPearlMenu.OnIndexChange.connect(function (sender, index) {
    switch (index) {
        case 0:
            API.setVehiclePearlescentColor(PlayerVehicle, 0);
            break;
        case 1:
            API.setVehiclePearlescentColor(PlayerVehicle, 1);
            break;
        case 2:
            API.setVehiclePearlescentColor(PlayerVehicle, 2);
            break;
        case 3:
            API.setVehiclePearlescentColor(PlayerVehicle, 3);
            break;
        case 4:
            API.setVehiclePearlescentColor(PlayerVehicle, 4);
            break;
        case 5:
            API.setVehiclePearlescentColor(PlayerVehicle, 5);
            break;
        case 6:
            API.setVehiclePearlescentColor(PlayerVehicle, 6);
            break;
        case 7:
            API.setVehiclePearlescentColor(PlayerVehicle, 7);
            break;
        case 8:
            API.setVehiclePearlescentColor(PlayerVehicle, 8);
            break;
        case 9:
            API.setVehiclePearlescentColor(PlayerVehicle, 9);
            break;
        case 10:
            API.setVehiclePearlescentColor(PlayerVehicle, 10);
            break;
        case 11:
            API.setVehiclePearlescentColor(PlayerVehicle, 11);
            break;
        case 12:
            API.setVehiclePearlescentColor(PlayerVehicle, 12);
            break;
        case 13:
            API.setVehiclePearlescentColor(PlayerVehicle, 13);
            break;
        case 14:
            API.setVehiclePearlescentColor(PlayerVehicle, 14);
            break;
        case 15:
            API.setVehiclePearlescentColor(PlayerVehicle, 15);
            break;
        case 16:
            API.setVehiclePearlescentColor(PlayerVehicle, 16);
            break;
        case 17:
            API.setVehiclePearlescentColor(PlayerVehicle, 17);
            break;
        case 18:
            API.setVehiclePearlescentColor(PlayerVehicle, 18);
            break;
        case 19:
            API.setVehiclePearlescentColor(PlayerVehicle, 19);
            break;
        case 20:
            API.setVehiclePearlescentColor(PlayerVehicle, 20);
            break;
        case 21:
            API.setVehiclePearlescentColor(PlayerVehicle, 21);
            break;
        case 22:
            API.setVehiclePearlescentColor(PlayerVehicle, 22);
            break;
        case 23:
            API.setVehiclePearlescentColor(PlayerVehicle, 23);
            break;
        case 24:
            API.setVehiclePearlescentColor(PlayerVehicle, 24);
            break;
        case 25:
            API.setVehiclePearlescentColor(PlayerVehicle, 25);
            break;
        case 26:
            API.setVehiclePearlescentColor(PlayerVehicle, 26);
            break;
    }
});
BlackPearlMenu.OnItemSelect.connect(function (sender, item, index) {
    switch (index) {
        case 0:
            API.triggerServerEvent("Pearlescent", 0);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 1:
            API.triggerServerEvent("Pearlescent", 1);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 2:
            API.triggerServerEvent("Pearlescent", 2);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 3:
            API.triggerServerEvent("Pearlescent", 3);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 4:
            API.triggerServerEvent("Pearlescent", 4);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 5:
            API.triggerServerEvent("Pearlescent", 5);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 6:
            API.triggerServerEvent("Pearlescent", 6);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 7:
            API.triggerServerEvent("Pearlescent", 7);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 8:
            API.triggerServerEvent("Pearlescent", 8);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 9:
            API.triggerServerEvent("Pearlescent", 9);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 10:
            API.triggerServerEvent("Pearlescent", 10);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 11:
            API.triggerServerEvent("Pearlescent", 11);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 12:
            API.triggerServerEvent("Pearlescent", 12);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 13:
            API.triggerServerEvent("Pearlescent", 13);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 14:
            API.triggerServerEvent("Pearlescent", 14);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 15:
            API.triggerServerEvent("Pearlescent", 15);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 16:
            API.triggerServerEvent("Pearlescent", 16);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 17:
            API.triggerServerEvent("Pearlescent", 17);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 18:
            API.triggerServerEvent("Pearlescent", 18);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 19:
            API.triggerServerEvent("Pearlescent", 19);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 20:
            API.triggerServerEvent("Pearlescent", 20);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 21:
            API.triggerServerEvent("Pearlescent", 21);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 22:
            API.triggerServerEvent("Pearlescent", 22);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 23:
            API.triggerServerEvent("Pearlescent", 23);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 24:
            API.triggerServerEvent("Pearlescent", 24);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 25:
            API.triggerServerEvent("Pearlescent", 25);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 26:
            API.triggerServerEvent("Pearlescent", 26);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
    }
});
BlackSecMenu.OnIndexChange.connect(function (sender, index) {
    switch (index) {
        case 0:
            API.setVehicleSecondaryColor(PlayerVehicle, 0);
            break;
        case 1:
            API.setVehicleSecondaryColor(PlayerVehicle, 1);
            break;
        case 2:
            API.setVehicleSecondaryColor(PlayerVehicle, 2);
            break;
        case 3:
            API.setVehicleSecondaryColor(PlayerVehicle, 3);
            break;
        case 4:
            API.setVehicleSecondaryColor(PlayerVehicle, 4);
            break;
        case 5:
            API.setVehicleSecondaryColor(PlayerVehicle, 5);
            break;
        case 6:
            API.setVehicleSecondaryColor(PlayerVehicle, 6);
            break;
        case 7:
            API.setVehicleSecondaryColor(PlayerVehicle, 7);
            break;
        case 8:
            API.setVehicleSecondaryColor(PlayerVehicle, 8);
            break;
        case 9:
            API.setVehicleSecondaryColor(PlayerVehicle, 9);
            break;
        case 10:
            API.setVehicleSecondaryColor(PlayerVehicle, 10);
            break;
        case 11:
            API.setVehicleSecondaryColor(PlayerVehicle, 11);
            break;
        case 12:
            API.setVehicleSecondaryColor(PlayerVehicle, 12);
            break;
        case 13:
            API.setVehicleSecondaryColor(PlayerVehicle, 13);
            break;
        case 14:
            API.setVehicleSecondaryColor(PlayerVehicle, 14);
            break;
        case 15:
            API.setVehicleSecondaryColor(PlayerVehicle, 15);
            break;
        case 16:
            API.setVehicleSecondaryColor(PlayerVehicle, 16);
            break;
        case 17:
            API.setVehicleSecondaryColor(PlayerVehicle, 17);
            break;
        case 18:
            API.setVehicleSecondaryColor(PlayerVehicle, 18);
            break;
        case 19:
            API.setVehicleSecondaryColor(PlayerVehicle, 19);
            break;
        case 20:
            API.setVehicleSecondaryColor(PlayerVehicle, 20);
            break;
        case 21:
            API.setVehicleSecondaryColor(PlayerVehicle, 21);
            break;
        case 22:
            API.setVehicleSecondaryColor(PlayerVehicle, 22);
            break;
        case 23:
            API.setVehicleSecondaryColor(PlayerVehicle, 23);
            break;
        case 24:
            API.setVehicleSecondaryColor(PlayerVehicle, 24);
            break;
        case 25:
            API.setVehicleSecondaryColor(PlayerVehicle, 25);
            break;
        case 26:
            API.setVehicleSecondaryColor(PlayerVehicle, 26);
            break;
    }
});
BlackSecMenu.OnItemSelect.connect(function (sender, item, index) {
    switch (index) {
        case 0:
            API.triggerServerEvent("Secondary", 0);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 1:
            API.triggerServerEvent("Secondary", 1);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 2:
            API.triggerServerEvent("Secondary", 2);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 3:
            API.triggerServerEvent("Secondary", 3);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 4:
            API.triggerServerEvent("Secondary", 4);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 5:
            API.triggerServerEvent("Secondary", 5);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 6:
            API.triggerServerEvent("Secondary", 6);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 7:
            API.triggerServerEvent("Secondary", 7);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 8:
            API.triggerServerEvent("Secondary", 8);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 9:
            API.triggerServerEvent("Secondary", 9);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 10:
            API.triggerServerEvent("Secondary", 10);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 11:
            API.triggerServerEvent("Secondary", 11);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 12:
            API.triggerServerEvent("Secondary", 12);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 13:
            API.triggerServerEvent("Secondary", 13);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 14:
            API.triggerServerEvent("Secondary", 14);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 15:
            API.triggerServerEvent("Secondary", 15);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 16:
            API.triggerServerEvent("Secondary", 16);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 17:
            API.triggerServerEvent("Secondary", 17);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 18:
            API.triggerServerEvent("Secondary", 18);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 19:
            API.triggerServerEvent("Secondary", 19);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 20:
            API.triggerServerEvent("Secondary", 20);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 21:
            API.triggerServerEvent("Secondary", 21);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 22:
            API.triggerServerEvent("Secondary", 22);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 23:
            API.triggerServerEvent("Secondary", 23);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 24:
            API.triggerServerEvent("Secondary", 24);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 25:
            API.triggerServerEvent("Secondary", 25);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 26:
            API.triggerServerEvent("Secondary", 26);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
    }
});

WhitePrimMenu.OnIndexChange.connect(function (sender, index) {
    switch (index) {
        case 0:
            API.setVehiclePrimaryColor(PlayerVehicle, 93);
            break;
        case 1:
            API.setVehiclePrimaryColor(PlayerVehicle, 107);
            break;
        case 2:
            API.setVehiclePrimaryColor(PlayerVehicle, 111);
            break;
        case 3:
            API.setVehiclePrimaryColor(PlayerVehicle, 112);
            break;
        case 4:
            API.setVehiclePrimaryColor(PlayerVehicle, 121);
            break;
        case 5:
            API.setVehiclePrimaryColor(PlayerVehicle, 122);
            break;
        case 6:
            API.setVehiclePrimaryColor(PlayerVehicle, 131);
            break;
        case 7:
            API.setVehiclePrimaryColor(PlayerVehicle, 132);
            break;
        case 8:
            API.setVehiclePrimaryColor(PlayerVehicle, 134);
            break;
    }
});
WhitePrimMenu.OnItemSelect.connect(function (sender, item, index) {
    switch (index) {
        case 0:
            API.triggerServerEvent("Primary", 93);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 1:
            API.triggerServerEvent("Primary", 107);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 2:
            API.triggerServerEvent("Primary", 111);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 3:
            API.triggerServerEvent("Primary", 112);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 4:
            API.triggerServerEvent("Primary", 121);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 5:
            API.triggerServerEvent("Primary", 122);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 6:
            API.triggerServerEvent("Primary", 131);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 7:
            API.triggerServerEvent("Primary", 132);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 8:
            API.triggerServerEvent("Primary", 134);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
    }
});
WhitePearlMenu.OnIndexChange.connect(function (sender, index) {
    switch (index) {
        case 0:
            API.setVehiclePearlescentColor(PlayerVehicle, 93);
            break;
        case 1:
            API.setVehiclePearlescentColor(PlayerVehicle, 107);
            break;
        case 2:
            API.setVehiclePearlescentColor(PlayerVehicle, 111);
            break;
        case 3:
            API.setVehiclePearlescentColor(PlayerVehicle, 112);
            break;
        case 4:
            API.setVehiclePearlescentColor(PlayerVehicle, 121);
            break;
        case 5:
            API.setVehiclePearlescentColor(PlayerVehicle, 122);
            break;
        case 6:
            API.setVehiclePearlescentColor(PlayerVehicle, 131);
            break;
        case 7:
            API.setVehiclePearlescentColor(PlayerVehicle, 132);
            break;
        case 8:
            API.setVehiclePearlescentColor(PlayerVehicle, 134);
            break;
    }
});
WhitePearlMenu.OnItemSelect.connect(function (sender, item, index) {
    switch (index) {
        case 0:
            API.triggerServerEvent("Pearlescent", 93);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 1:
            API.triggerServerEvent("Pearlescent", 107);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 2:
            API.triggerServerEvent("Pearlescent", 111);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 3:
            API.triggerServerEvent("Pearlescent", 112);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 4:
            API.triggerServerEvent("Pearlescent", 121);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 5:
            API.triggerServerEvent("Pearlescent", 122);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 6:
            API.triggerServerEvent("Pearlescent", 131);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 7:
            API.triggerServerEvent("Pearlescent", 132);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 8:
            API.triggerServerEvent("Pearlescent", 134);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
    }
});
WhiteSecMenu.OnIndexChange.connect(function (sender, index) {
    switch (index) {
        case 0:
            API.setVehicleSecondaryColor(PlayerVehicle, 93);
            break;
        case 1:
            API.setVehicleSecondaryColor(PlayerVehicle, 107);
            break;
        case 2:
            API.setVehicleSecondaryColor(PlayerVehicle, 111);
            break;
        case 3:
            API.setVehicleSecondaryColor(PlayerVehicle, 112);
            break;
        case 4:
            API.setVehicleSecondaryColor(PlayerVehicle, 121);
            break;
        case 5:
            API.setVehicleSecondaryColor(PlayerVehicle, 122);
            break;
        case 6:
            API.setVehicleSecondaryColor(PlayerVehicle, 131);
            break;
        case 7:
            API.setVehicleSecondaryColor(PlayerVehicle, 132);
            break;
        case 8:
            API.setVehicleSecondaryColor(PlayerVehicle, 134);
            break;
    }
});
WhiteSecMenu.OnItemSelect.connect(function (sender, item, index) {
    switch (index) {
        case 0:
            API.triggerServerEvent("Secondary", 93);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 1:
            API.triggerServerEvent("Secondary", 107);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 2:
            API.triggerServerEvent("Secondary", 111);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 3:
            API.triggerServerEvent("Secondary", 112);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 4:
            API.triggerServerEvent("Secondary", 121);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 5:
            API.triggerServerEvent("Secondary", 122);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 6:
            API.triggerServerEvent("Secondary", 131);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 7:
            API.triggerServerEvent("Secondary", 132);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 8:
            API.triggerServerEvent("Secondary", 134);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
    }
});

RedPrimMenu.OnIndexChange.connect(function (sender, index) {
    switch (index) {
        case 0:
            API.setVehiclePrimaryColor(PlayerVehicle, 27);
            break;
        case 1:
            API.setVehiclePrimaryColor(PlayerVehicle, 28);
            break;
        case 2:
            API.setVehiclePrimaryColor(PlayerVehicle, 29);
            break;
        case 3:
            API.setVehiclePrimaryColor(PlayerVehicle, 30);
            break;
        case 4:
            API.setVehiclePrimaryColor(PlayerVehicle, 31);
            break;
        case 5:
            API.setVehiclePrimaryColor(PlayerVehicle, 32);
            break;
        case 6:
            API.setVehiclePrimaryColor(PlayerVehicle, 33);
            break;
        case 7:
            API.setVehiclePrimaryColor(PlayerVehicle, 34);
            break;
        case 8:
            API.setVehiclePrimaryColor(PlayerVehicle, 35);
            break;
        case 9:
            API.setVehiclePrimaryColor(PlayerVehicle, 39);
            break;
        case 10:
            API.setVehiclePrimaryColor(PlayerVehicle, 40);
            break;
        case 11:
            API.setVehiclePrimaryColor(PlayerVehicle, 43);
            break;
        case 12:
            API.setVehiclePrimaryColor(PlayerVehicle, 44);
            break;
        case 13:
            API.setVehiclePrimaryColor(PlayerVehicle, 45);
            break;
        case 14:
            API.setVehiclePrimaryColor(PlayerVehicle, 46);
            break;
        case 15:
            API.setVehiclePrimaryColor(PlayerVehicle, 47);
            break;
        case 16:
            API.setVehiclePrimaryColor(PlayerVehicle, 48);
            break;
        case 17:
            API.setVehiclePrimaryColor(PlayerVehicle, 143);
            break;
        case 18:
            API.setVehiclePrimaryColor(PlayerVehicle, 150);
            break;
    }
});
RedPrimMenu.OnItemSelect.connect(function (sender, item, index) {
    switch (index) {
        case 0:
            API.triggerServerEvent("Primary", 27);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 1:
            API.triggerServerEvent("Primary", 28);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 2:
            API.triggerServerEvent("Primary", 29);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 3:
            API.triggerServerEvent("Primary", 30);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 4:
            API.triggerServerEvent("Primary", 31);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 5:
            API.triggerServerEvent("Primary", 32);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 6:
            API.triggerServerEvent("Primary", 33);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 7:
            API.triggerServerEvent("Primary", 34);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 8:
            API.triggerServerEvent("Primary", 35);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 9:
            API.triggerServerEvent("Primary", 39);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 10:
            API.triggerServerEvent("Primary", 40);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 11:
            API.triggerServerEvent("Primary", 43);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 12:
            API.triggerServerEvent("Primary", 44);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 13:
            API.triggerServerEvent("Primary", 45);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 14:
            API.triggerServerEvent("Primary", 46);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 15:
            API.triggerServerEvent("Primary", 47);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 16:
            API.triggerServerEvent("Primary", 48);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 17:
            API.triggerServerEvent("Primary", 143);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 18:
            API.triggerServerEvent("Primary", 150);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
    }
});
RedPearlMenu.OnIndexChange.connect(function (sender, index) {
    switch (index) {
        case 0:
            API.setVehiclePearlescentColor(PlayerVehicle, 27);
            break;
        case 1:
            API.setVehiclePearlescentColor(PlayerVehicle, 28);
            break;
        case 2:
            API.setVehiclePearlescentColor(PlayerVehicle, 29);
            break;
        case 3:
            API.setVehiclePearlescentColor(PlayerVehicle, 30);
            break;
        case 4:
            API.setVehiclePearlescentColor(PlayerVehicle, 31);
            break;
        case 5:
            API.setVehiclePearlescentColor(PlayerVehicle, 32);
            break;
        case 6:
            API.setVehiclePearlescentColor(PlayerVehicle, 33);
            break;
        case 7:
            API.setVehiclePearlescentColor(PlayerVehicle, 34);
            break;
        case 8:
            API.setVehiclePearlescentColor(PlayerVehicle, 35);
            break;
        case 9:
            API.setVehiclePearlescentColor(PlayerVehicle, 39);
            break;
        case 10:
            API.setVehiclePearlescentColor(PlayerVehicle, 40);
            break;
        case 11:
            API.setVehiclePearlescentColor(PlayerVehicle, 43);
            break;
        case 12:
            API.setVehiclePearlescentColor(PlayerVehicle, 44);
            break;
        case 13:
            API.setVehiclePearlescentColor(PlayerVehicle, 45);
            break;
        case 14:
            API.setVehiclePearlescentColor(PlayerVehicle, 46);
            break;
        case 15:
            API.setVehiclePearlescentColor(PlayerVehicle, 47);
            break;
        case 16:
            API.setVehiclePearlescentColor(PlayerVehicle, 48);
            break;
        case 17:
            API.setVehiclePearlescentColor(PlayerVehicle, 143);
            break;
        case 18:
            API.setVehiclePearlescentColor(PlayerVehicle, 150);
            break;
    }
});
RedPearlMenu.OnItemSelect.connect(function (sender, item, index) {
    switch (index) {
        case 0:
            API.triggerServerEvent("Pearlescent", 27);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 1:
            API.triggerServerEvent("Pearlescent", 28);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 2:
            API.triggerServerEvent("Pearlescent", 29);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 3:
            API.triggerServerEvent("Pearlescent", 30);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 4:
            API.triggerServerEvent("Pearlescent", 31);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 5:
            API.triggerServerEvent("Pearlescent", 32);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 6:
            API.triggerServerEvent("Pearlescent", 33);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 7:
            API.triggerServerEvent("Pearlescent", 34);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 8:
            API.triggerServerEvent("Pearlescent", 35);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 9:
            API.triggerServerEvent("Pearlescent", 39);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 10:
            API.triggerServerEvent("Pearlescent", 40);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 11:
            API.triggerServerEvent("Pearlescent", 43);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 12:
            API.triggerServerEvent("Pearlescent", 44);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 13:
            API.triggerServerEvent("Pearlescent", 45);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 14:
            API.triggerServerEvent("Pearlescent", 46);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 15:
            API.triggerServerEvent("Pearlescent", 47);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 16:
            API.triggerServerEvent("Pearlescent", 48);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 17:
            API.triggerServerEvent("Pearlescent", 143);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 18:
            API.triggerServerEvent("Pearlescent", 150);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
    }
});
RedSecMenu.OnIndexChange.connect(function (sender, index) {
    switch (index) {
        case 0:
            API.setVehicleSecondaryColor(PlayerVehicle, 27);
            break;
        case 1:
            API.setVehicleSecondaryColor(PlayerVehicle, 28);
            break;
        case 2:
            API.setVehicleSecondaryColor(PlayerVehicle, 29);
            break;
        case 3:
            API.setVehicleSecondaryColor(PlayerVehicle, 30);
            break;
        case 4:
            API.setVehicleSecondaryColor(PlayerVehicle, 31);
            break;
        case 5:
            API.setVehicleSecondaryColor(PlayerVehicle, 32);
            break;
        case 6:
            API.setVehicleSecondaryColor(PlayerVehicle, 33);
            break;
        case 7:
            API.setVehicleSecondaryColor(PlayerVehicle, 34);
            break;
        case 8:
            API.setVehicleSecondaryColor(PlayerVehicle, 35);
            break;
        case 9:
            API.setVehicleSecondaryColor(PlayerVehicle, 39);
            break;
        case 10:
            API.setVehicleSecondaryColor(PlayerVehicle, 40);
            break;
        case 11:
            API.setVehicleSecondaryColor(PlayerVehicle, 43);
            break;
        case 12:
            API.setVehicleSecondaryColor(PlayerVehicle, 44);
            break;
        case 13:
            API.setVehicleSecondaryColor(PlayerVehicle, 45);
            break;
        case 14:
            API.setVehicleSecondaryColor(PlayerVehicle, 46);
            break;
        case 15:
            API.setVehicleSecondaryColor(PlayerVehicle, 47);
            break;
        case 16:
            API.setVehicleSecondaryColor(PlayerVehicle, 48);
            break;
        case 17:
            API.setVehicleSecondaryColor(PlayerVehicle, 143);
            break;
        case 18:
            API.setVehicleSecondaryColor(PlayerVehicle, 150);
            break;
    }
});
RedSecMenu.OnItemSelect.connect(function (sender, item, index) {
    switch (index) {
        case 0:
            API.triggerServerEvent("Secondary", 27);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 1:
            API.triggerServerEvent("Secondary", 28);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 2:
            API.triggerServerEvent("Secondary", 29);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 3:
            API.triggerServerEvent("Secondary", 30);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 4:
            API.triggerServerEvent("Secondary", 31);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 5:
            API.triggerServerEvent("Secondary", 32);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 6:
            API.triggerServerEvent("Secondary", 33);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 7:
            API.triggerServerEvent("Secondary", 34);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 8:
            API.triggerServerEvent("Secondary", 35);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 9:
            API.triggerServerEvent("Secondary", 39);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 10:
            API.triggerServerEvent("Secondary", 40);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 11:
            API.triggerServerEvent("Secondary", 43);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 12:
            API.triggerServerEvent("Secondary", 44);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 13:
            API.triggerServerEvent("Secondary", 45);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 14:
            API.triggerServerEvent("Secondary", 46);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 15:
            API.triggerServerEvent("Secondary", 47);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 16:
            API.triggerServerEvent("Secondary", 48);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 17:
            API.triggerServerEvent("Secondary", 143);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 18:
            API.triggerServerEvent("Secondary", 150);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
    }
});

OrangePrimMenu.OnIndexChange.connect(function (sender, index) {
    switch (index) {
        case 0:
            API.setVehiclePrimaryColor(PlayerVehicle, 36);
            break;
        case 1:
            API.setVehiclePrimaryColor(PlayerVehicle, 38);
            break;
        case 2:
            API.setVehiclePrimaryColor(PlayerVehicle, 41);
            break;
        case 3:
            API.setVehiclePrimaryColor(PlayerVehicle, 123);
            break;
        case 4:
            API.setVehiclePrimaryColor(PlayerVehicle, 124);
            break;
        case 5:
            API.setVehiclePrimaryColor(PlayerVehicle, 130);
            break;
        case 6:
            API.setVehiclePrimaryColor(PlayerVehicle, 138);
            break;
    }
});
OrangePrimMenu.OnItemSelect.connect(function (sender, item, index) {
    switch (index) {
        case 0:
            API.triggerServerEvent("Primary", 36);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 1:
            API.triggerServerEvent("Primary", 38);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 2:
            API.triggerServerEvent("Primary", 41);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 3:
            API.triggerServerEvent("Primary", 123);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 4:
            API.triggerServerEvent("Primary", 124);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 5:
            API.triggerServerEvent("Primary", 130);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 6:
            API.triggerServerEvent("Primary", 138);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
    }
});
OrangePearlMenu.OnIndexChange.connect(function (sender, index) {
    switch (index) {
        case 0:
            API.setVehiclePearlescentColor(PlayerVehicle, 36);
            break;
        case 1:
            API.setVehiclePearlescentColor(PlayerVehicle, 38);
            break;
        case 2:
            API.setVehiclePearlescentColor(PlayerVehicle, 41);
            break;
        case 3:
            API.setVehiclePearlescentColor(PlayerVehicle, 123);
            break;
        case 4:
            API.setVehiclePearlescentColor(PlayerVehicle, 124);
            break;
        case 5:
            API.setVehiclePearlescentColor(PlayerVehicle, 130);
            break;
        case 6:
            API.setVehiclePearlescentColor(PlayerVehicle, 138);
            break;
    }
});
OrangePearlMenu.OnItemSelect.connect(function (sender, item, index) {
    switch (index) {
        case 0:
            API.triggerServerEvent("Pearlescent", 36);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 1:
            API.triggerServerEvent("Pearlescent", 38);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 2:
            API.triggerServerEvent("Pearlescent", 41);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 3:
            API.triggerServerEvent("Pearlescent", 123);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 4:
            API.triggerServerEvent("Pearlescent", 124);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 5:
            API.triggerServerEvent("Pearlescent", 130);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 6:
            API.triggerServerEvent("Pearlescent", 138);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
    }
});
OrangeSecMenu.OnIndexChange.connect(function (sender, index) {
    switch (index) {
        case 0:
            API.setVehicleSecondaryColor(PlayerVehicle, 36);
            break;
        case 1:
            API.setVehicleSecondaryColor(PlayerVehicle, 38);
            break;
        case 2:
            API.setVehicleSecondaryColor(PlayerVehicle, 41);
            break;
        case 3:
            API.setVehicleSecondaryColor(PlayerVehicle, 123);
            break;
        case 4:
            API.setVehicleSecondaryColor(PlayerVehicle, 124);
            break;
        case 5:
            API.setVehicleSecondaryColor(PlayerVehicle, 130);
            break;
        case 6:
            API.setVehicleSecondaryColor(PlayerVehicle, 138);
            break;
    }
});
OrangeSecMenu.OnItemSelect.connect(function (sender, item, index) {
    switch (index) {
        case 0:
            API.triggerServerEvent("Secondary", 36);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 1:
            API.triggerServerEvent("Secondary", 38);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 2:
            API.triggerServerEvent("Secondary", 41);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 3:
            API.triggerServerEvent("Secondary", 123);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 4:
            API.triggerServerEvent("Secondary", 124);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 5:
            API.triggerServerEvent("Secondary", 130);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 6:
            API.triggerServerEvent("Secondary", 138);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
    }
});

YellowPrimMenu.OnIndexChange.connect(function (sender, index) {
    switch (index) {
        case 0:
            API.setVehiclePrimaryColor(PlayerVehicle, 42);
            break;
        case 1:
            API.setVehiclePrimaryColor(PlayerVehicle, 88);
            break;
        case 2:
            API.setVehiclePrimaryColor(PlayerVehicle, 89);
            break;
        case 3:
            API.setVehiclePrimaryColor(PlayerVehicle, 91);
            break;
        case 4:
            API.setVehiclePrimaryColor(PlayerVehicle, 126);
            break;
    }
});
YellowPrimMenu.OnItemSelect.connect(function (sender, item, index) {
    switch (index) {
        case 0:
            API.triggerServerEvent("Primary", 42);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 1:
            API.triggerServerEvent("Primary", 88);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 2:
            API.triggerServerEvent("Primary", 89);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 3:
            API.triggerServerEvent("Primary", 91);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 4:
            API.triggerServerEvent("Primary", 126);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
    }
});
YellowPearlMenu.OnIndexChange.connect(function (sender, index) {
    switch (index) {
        case 0:
            API.setVehiclePearlescentColor(PlayerVehicle, 42);
            break;
        case 1:
            API.setVehiclePearlescentColor(PlayerVehicle, 88);
            break;
        case 2:
            API.setVehiclePearlescentColor(PlayerVehicle, 89);
            break;
        case 3:
            API.setVehiclePearlescentColor(PlayerVehicle, 91);
            break;
        case 4:
            API.setVehiclePearlescentColor(PlayerVehicle, 126);
            break;
    }
});
YellowPearlMenu.OnItemSelect.connect(function (sender, item, index) {
    switch (index) {
        case 0:
            API.triggerServerEvent("Pearlescent", 42);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 1:
            API.triggerServerEvent("Pearlescent", 88);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 2:
            API.triggerServerEvent("Pearlescent", 89);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 3:
            API.triggerServerEvent("Pearlescent", 91);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 4:
            API.triggerServerEvent("Pearlescent", 126);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
    }
});
YellowSecMenu.OnIndexChange.connect(function (sender, index) {
    switch (index) {
        case 0:
            API.setVehicleSecondaryColor(PlayerVehicle, 42);
            break;
        case 1:
            API.setVehicleSecondaryColor(PlayerVehicle, 88);
            break;
        case 2:
            API.setVehicleSecondaryColor(PlayerVehicle, 89);
            break;
        case 3:
            API.setVehicleSecondaryColor(PlayerVehicle, 91);
            break;
        case 4:
            API.setVehicleSecondaryColor(PlayerVehicle, 126);
            break;
    }
});
YellowSecMenu.OnItemSelect.connect(function (sender, item, index) {
    switch (index) {
        case 0:
            API.triggerServerEvent("Secondary", 42);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 1:
            API.triggerServerEvent("Secondary", 88);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 2:
            API.triggerServerEvent("Secondary", 89);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 3:
            API.triggerServerEvent("Secondary", 91);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 4:
            API.triggerServerEvent("Secondary", 126);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
    }
});

GreenPrimMenu.OnIndexChange.connect(function (sender, index) {
    switch (index) {
        case 0:
            API.setVehiclePrimaryColor(PlayerVehicle, 49);
            break;
        case 1:
            API.setVehiclePrimaryColor(PlayerVehicle, 50);
            break;
        case 2:
            API.setVehiclePrimaryColor(PlayerVehicle, 51);
            break;
        case 3:
            API.setVehiclePrimaryColor(PlayerVehicle, 52);
            break;
        case 4:
            API.setVehiclePrimaryColor(PlayerVehicle, 53);
            break;
        case 5:
            API.setVehiclePrimaryColor(PlayerVehicle, 54);
            break;
        case 6:
            API.setVehiclePrimaryColor(PlayerVehicle, 55);
            break;
        case 7:
            API.setVehiclePrimaryColor(PlayerVehicle, 56);
            break;
        case 8:
            API.setVehiclePrimaryColor(PlayerVehicle, 57);
            break;
        case 9:
            API.setVehiclePrimaryColor(PlayerVehicle, 58);
            break;
        case 10:
            API.setVehiclePrimaryColor(PlayerVehicle, 59);
            break;
        case 11:
            API.setVehiclePrimaryColor(PlayerVehicle, 60);
            break;
        case 12:
            API.setVehiclePrimaryColor(PlayerVehicle, 92);
            break;
        case 13:
            API.setVehiclePrimaryColor(PlayerVehicle, 125);
            break;
        case 14:
            API.setVehiclePrimaryColor(PlayerVehicle, 128);
            break;
        case 15:
            API.setVehiclePrimaryColor(PlayerVehicle, 133);
            break;
        case 16:
            API.setVehiclePrimaryColor(PlayerVehicle, 139);
            break;
        case 17:
            API.setVehiclePrimaryColor(PlayerVehicle, 144);
            break;
        case 18:
            API.setVehiclePrimaryColor(PlayerVehicle, 151);
            break;
        case 19:
            API.setVehiclePrimaryColor(PlayerVehicle, 152);
            break;
        case 20:
            API.setVehiclePrimaryColor(PlayerVehicle, 155);
            break;
    }
});
GreenPrimMenu.OnItemSelect.connect(function (sender, item, index) {
    switch (index) {
        case 0:
            API.triggerServerEvent("Primary", 49);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 1:
            API.triggerServerEvent("Primary", 50);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 2:
            API.triggerServerEvent("Primary", 51);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 3:
            API.triggerServerEvent("Primary", 52);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 4:
            API.triggerServerEvent("Primary", 53);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 5:
            API.triggerServerEvent("Primary", 54);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 6:
            API.triggerServerEvent("Primary", 55);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 7:
            API.triggerServerEvent("Primary", 56);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 8:
            API.triggerServerEvent("Primary", 57);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 9:
            API.triggerServerEvent("Primary", 58);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 10:
            API.triggerServerEvent("Primary", 59);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 11:
            API.triggerServerEvent("Primary", 60);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 12:
            API.triggerServerEvent("Primary", 92);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 13:
            API.triggerServerEvent("Primary", 125);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 14:
            API.triggerServerEvent("Primary", 128);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 15:
            API.triggerServerEvent("Primary", 133);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 16:
            API.triggerServerEvent("Primary", 139);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 17:
            API.triggerServerEvent("Primary", 144);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 18:
            API.triggerServerEvent("Primary", 151);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 19:
            API.triggerServerEvent("Primary", 152);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 20:
            API.triggerServerEvent("Primary", 155);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
    }
});
GreenPearlMenu.OnIndexChange.connect(function (sender, index) {
    switch (index) {
        case 0:
            API.setVehiclePearlescentColor(PlayerVehicle, 49);
            break;
        case 1:
            API.setVehiclePearlescentColor(PlayerVehicle, 50);
            break;
        case 2:
            API.setVehiclePearlescentColor(PlayerVehicle, 51);
            break;
        case 3:
            API.setVehiclePearlescentColor(PlayerVehicle, 52);
            break;
        case 4:
            API.setVehiclePearlescentColor(PlayerVehicle, 53);
            break;
        case 5:
            API.setVehiclePearlescentColor(PlayerVehicle, 54);
            break;
        case 6:
            API.setVehiclePearlescentColor(PlayerVehicle, 55);
            break;
        case 7:
            API.setVehiclePearlescentColor(PlayerVehicle, 56);
            break;
        case 8:
            API.setVehiclePearlescentColor(PlayerVehicle, 57);
            break;
        case 9:
            API.setVehiclePearlescentColor(PlayerVehicle, 58);
            break;
        case 10:
            API.setVehiclePearlescentColor(PlayerVehicle, 59);
            break;
        case 11:
            API.setVehiclePearlescentColor(PlayerVehicle, 60);
            break;
        case 12:
            API.setVehiclePearlescentColor(PlayerVehicle, 92);
            break;
        case 13:
            API.setVehiclePearlescentColor(PlayerVehicle, 125);
            break;
        case 14:
            API.setVehiclePearlescentColor(PlayerVehicle, 128);
            break;
        case 15:
            API.setVehiclePearlescentColor(PlayerVehicle, 133);
            break;
        case 16:
            API.setVehiclePearlescentColor(PlayerVehicle, 139);
            break;
        case 17:
            API.setVehiclePearlescentColor(PlayerVehicle, 144);
            break;
        case 18:
            API.setVehiclePearlescentColor(PlayerVehicle, 151);
            break;
        case 19:
            API.setVehiclePearlescentColor(PlayerVehicle, 152);
            break;
        case 20:
            API.setVehiclePearlescentColor(PlayerVehicle, 155);
            break;
    }
});
GreenPearlMenu.OnItemSelect.connect(function (sender, item, index) {
    switch (index) {
        case 0:
            API.triggerServerEvent("Pearlescent", 49);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 1:
            API.triggerServerEvent("Pearlescent", 50);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 2:
            API.triggerServerEvent("Pearlescent", 51);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 3:
            API.triggerServerEvent("Pearlescent", 52);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 4:
            API.triggerServerEvent("Pearlescent", 53);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 5:
            API.triggerServerEvent("Pearlescent", 54);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 6:
            API.triggerServerEvent("Pearlescent", 55);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 7:
            API.triggerServerEvent("Pearlescent", 56);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 8:
            API.triggerServerEvent("Pearlescent", 57);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 9:
            API.triggerServerEvent("Pearlescent", 58);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 10:
            API.triggerServerEvent("Pearlescent", 59);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 11:
            API.triggerServerEvent("Pearlescent", 60);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 12:
            API.triggerServerEvent("Pearlescent", 92);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 13:
            API.triggerServerEvent("Pearlescent", 125);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 14:
            API.triggerServerEvent("Pearlescent", 128);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 15:
            API.triggerServerEvent("Pearlescent", 133);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 16:
            API.triggerServerEvent("Pearlescent", 139);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 17:
            API.triggerServerEvent("Pearlescent", 144);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 18:
            API.triggerServerEvent("Pearlescent", 151);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 19:
            API.triggerServerEvent("Pearlescent", 152);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 20:
            API.triggerServerEvent("Pearlescent", 155);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
    }
});
GreenSecMenu.OnIndexChange.connect(function (sender, index) {
    switch (index) {
        case 0:
            API.setVehicleSecondaryColor(PlayerVehicle, 49);
            break;
        case 1:
            API.setVehicleSecondaryColor(PlayerVehicle, 50);
            break;
        case 2:
            API.setVehicleSecondaryColor(PlayerVehicle, 51);
            break;
        case 3:
            API.setVehicleSecondaryColor(PlayerVehicle, 52);
            break;
        case 4:
            API.setVehicleSecondaryColor(PlayerVehicle, 53);
            break;
        case 5:
            API.setVehicleSecondaryColor(PlayerVehicle, 54);
            break;
        case 6:
            API.setVehicleSecondaryColor(PlayerVehicle, 55);
            break;
        case 7:
            API.setVehicleSecondaryColor(PlayerVehicle, 56);
            break;
        case 8:
            API.setVehicleSecondaryColor(PlayerVehicle, 57);
            break;
        case 9:
            API.setVehicleSecondaryColor(PlayerVehicle, 58);
            break;
        case 10:
            API.setVehicleSecondaryColor(PlayerVehicle, 59);
            break;
        case 11:
            API.setVehicleSecondaryColor(PlayerVehicle, 60);
            break;
        case 12:
            API.setVehicleSecondaryColor(PlayerVehicle, 92);
            break;
        case 13:
            API.setVehicleSecondaryColor(PlayerVehicle, 125);
            break;
        case 14:
            API.setVehicleSecondaryColor(PlayerVehicle, 128);
            break;
        case 15:
            API.setVehicleSecondaryColor(PlayerVehicle, 133);
            break;
        case 16:
            API.setVehicleSecondaryColor(PlayerVehicle, 139);
            break;
        case 17:
            API.setVehicleSecondaryColor(PlayerVehicle, 144);
            break;
        case 18:
            API.setVehicleSecondaryColor(PlayerVehicle, 151);
            break;
        case 19:
            API.setVehicleSecondaryColor(PlayerVehicle, 152);
            break;
        case 20:
            API.setVehicleSecondaryColor(PlayerVehicle, 155);
            break;
    }
});
GreenSecMenu.OnItemSelect.connect(function (sender, item, index) {
    switch (index) {
        case 0:
            API.triggerServerEvent("Secondary", 49);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 1:
            API.triggerServerEvent("Secondary", 50);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 2:
            API.triggerServerEvent("Secondary", 51);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 3:
            API.triggerServerEvent("Secondary", 52);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 4:
            API.triggerServerEvent("Secondary", 53);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 5:
            API.triggerServerEvent("Secondary", 54);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 6:
            API.triggerServerEvent("Secondary", 55);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 7:
            API.triggerServerEvent("Secondary", 56);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 8:
            API.triggerServerEvent("Secondary", 57);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 9:
            API.triggerServerEvent("Secondary", 58);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 10:
            API.triggerServerEvent("Secondary", 59);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 11:
            API.triggerServerEvent("Secondary", 60);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 12:
            API.triggerServerEvent("Secondary", 92);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 13:
            API.triggerServerEvent("Secondary", 125);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 14:
            API.triggerServerEvent("Secondary", 128);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 15:
            API.triggerServerEvent("Secondary", 133);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 16:
            API.triggerServerEvent("Secondary", 139);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 17:
            API.triggerServerEvent("Secondary", 144);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 18:
            API.triggerServerEvent("Secondary", 151);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 19:
            API.triggerServerEvent("Secondary", 152);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 20:
            API.triggerServerEvent("Secondary", 155);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
    }
});

BluePrimMenu.OnIndexChange.connect(function (sender, index) {
    switch (index) {
        case 0:
            API.setVehiclePrimaryColor(PlayerVehicle, 61);
            break;
        case 1:
            API.setVehiclePrimaryColor(PlayerVehicle, 62);
            break;
        case 2:
            API.setVehiclePrimaryColor(PlayerVehicle, 63);
            break;
        case 3:
            API.setVehiclePrimaryColor(PlayerVehicle, 64);
            break;
        case 4:
            API.setVehiclePrimaryColor(PlayerVehicle, 65);
            break;
        case 5:
            API.setVehiclePrimaryColor(PlayerVehicle, 66);
            break;
        case 6:
            API.setVehiclePrimaryColor(PlayerVehicle, 67);
            break;
        case 7:
            API.setVehiclePrimaryColor(PlayerVehicle, 68);
            break;
        case 8:
            API.setVehiclePrimaryColor(PlayerVehicle, 69);
            break;
        case 9:
            API.setVehiclePrimaryColor(PlayerVehicle, 70);
            break;
        case 10:
            API.setVehiclePrimaryColor(PlayerVehicle, 71);
            break;
        case 11:
            API.setVehiclePrimaryColor(PlayerVehicle, 72);
            break;
        case 12:
            API.setVehiclePrimaryColor(PlayerVehicle, 73);
            break;
        case 13:
            API.setVehiclePrimaryColor(PlayerVehicle, 74);
            break;
        case 14:
            API.setVehiclePrimaryColor(PlayerVehicle, 75);
            break;
        case 15:
            API.setVehiclePrimaryColor(PlayerVehicle, 76);
            break;
        case 16:
            API.setVehiclePrimaryColor(PlayerVehicle, 77);
            break;
        case 17:
            API.setVehiclePrimaryColor(PlayerVehicle, 78);
            break;
        case 18:
            API.setVehiclePrimaryColor(PlayerVehicle, 79);
            break;
        case 19:
            API.setVehiclePrimaryColor(PlayerVehicle, 80);
            break;
        case 20:
            API.setVehiclePrimaryColor(PlayerVehicle, 81);
            break;
        case 21:
            API.setVehiclePrimaryColor(PlayerVehicle, 82);
            break;
        case 22:
            API.setVehiclePrimaryColor(PlayerVehicle, 83);
            break;
        case 23:
            API.setVehiclePrimaryColor(PlayerVehicle, 84);
            break;
        case 24:
            API.setVehiclePrimaryColor(PlayerVehicle, 85);
            break;
        case 25:
            API.setVehiclePrimaryColor(PlayerVehicle, 86);
            break;
        case 26:
            API.setVehiclePrimaryColor(PlayerVehicle, 87);
            break;
        case 27:
            API.setVehiclePrimaryColor(PlayerVehicle, 127);
            break;
        case 28:
            API.setVehiclePrimaryColor(PlayerVehicle, 140);
            break;
        case 29:
            API.setVehiclePrimaryColor(PlayerVehicle, 141);
            break;
        case 30:
            API.setVehiclePrimaryColor(PlayerVehicle, 146);
            break;
        case 31:
            API.setVehiclePrimaryColor(PlayerVehicle, 157);
            break;
    }
});
BluePrimMenu.OnItemSelect.connect(function (sender, item, index) {
    switch (index) {
        case 0:
            API.triggerServerEvent("Primary", 61);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 1:
            API.triggerServerEvent("Primary", 62);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 2:
            API.triggerServerEvent("Primary", 63);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 3:
            API.triggerServerEvent("Primary", 64);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 4:
            API.triggerServerEvent("Primary", 65);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 5:
            API.triggerServerEvent("Primary", 66);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 6:
            API.triggerServerEvent("Primary", 67);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 7:
            API.triggerServerEvent("Primary", 68);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 8:
            API.triggerServerEvent("Primary", 69);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 9:
            API.triggerServerEvent("Primary", 70);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 10:
            API.triggerServerEvent("Primary", 71);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 11:
            API.triggerServerEvent("Primary", 72);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 12:
            API.triggerServerEvent("Primary", 73);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 13:
            API.triggerServerEvent("Primary", 74);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 14:
            API.triggerServerEvent("Primary", 75);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 15:
            API.triggerServerEvent("Primary", 76);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 16:
            API.triggerServerEvent("Primary", 77);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 17:
            API.triggerServerEvent("Primary", 78);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 18:
            API.triggerServerEvent("Primary", 79);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 19:
            API.triggerServerEvent("Primary", 80);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 20:
            API.triggerServerEvent("Primary", 81);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 21:
            API.triggerServerEvent("Primary", 82);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 22:
            API.triggerServerEvent("Primary", 83);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 23:
            API.triggerServerEvent("Primary", 84);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 24:
            API.triggerServerEvent("Primary", 85);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 25:
            API.triggerServerEvent("Primary", 86);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 26:
            API.triggerServerEvent("Primary", 87);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 27:
            API.triggerServerEvent("Primary", 127);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 28:
            API.triggerServerEvent("Primary", 140);
            API.closeAllMenus();
            MainMenu.Visible = true;
        case 29:
            API.triggerServerEvent("Primary", 141);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 30:
            API.triggerServerEvent("Primary", 146);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 31:
            API.triggerServerEvent("Primary", 157);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
    }
});
BluePearlMenu.OnIndexChange.connect(function (sender, index) {
    switch (index) {
        case 0:
            API.setVehiclePearlescentColor(PlayerVehicle, 61);
            break;
        case 1:
            API.setVehiclePearlescentColor(PlayerVehicle, 62);
            break;
        case 2:
            API.setVehiclePearlescentColor(PlayerVehicle, 63);
            break;
        case 3:
            API.setVehiclePearlescentColor(PlayerVehicle, 64);
            break;
        case 4:
            API.setVehiclePearlescentColor(PlayerVehicle, 65);
            break;
        case 5:
            API.setVehiclePearlescentColor(PlayerVehicle, 66);
            break;
        case 6:
            API.setVehiclePearlescentColor(PlayerVehicle, 67);
            break;
        case 7:
            API.setVehiclePearlescentColor(PlayerVehicle, 68);
            break;
        case 8:
            API.setVehiclePearlescentColor(PlayerVehicle, 69);
            break;
        case 9:
            API.setVehiclePearlescentColor(PlayerVehicle, 70);
            break;
        case 10:
            API.setVehiclePearlescentColor(PlayerVehicle, 71);
            break;
        case 11:
            API.setVehiclePearlescentColor(PlayerVehicle, 72);
            break;
        case 12:
            API.setVehiclePearlescentColor(PlayerVehicle, 73);
            break;
        case 13:
            API.setVehiclePearlescentColor(PlayerVehicle, 74);
            break;
        case 14:
            API.setVehiclePearlescentColor(PlayerVehicle, 75);
            break;
        case 15:
            API.setVehiclePearlescentColor(PlayerVehicle, 76);
            break;
        case 16:
            API.setVehiclePearlescentColor(PlayerVehicle, 77);
            break;
        case 17:
            API.setVehiclePearlescentColor(PlayerVehicle, 78);
            break;
        case 18:
            API.setVehiclePearlescentColor(PlayerVehicle, 79);
            break;
        case 19:
            API.setVehiclePearlescentColor(PlayerVehicle, 80);
            break;
        case 20:
            API.setVehiclePearlescentColor(PlayerVehicle, 81);
            break;
        case 21:
            API.setVehiclePearlescentColor(PlayerVehicle, 82);
            break;
        case 22:
            API.setVehiclePearlescentColor(PlayerVehicle, 83);
            break;
        case 23:
            API.setVehiclePearlescentColor(PlayerVehicle, 84);
            break;
        case 24:
            API.setVehiclePearlescentColor(PlayerVehicle, 85);
            break;
        case 25:
            API.setVehiclePearlescentColor(PlayerVehicle, 86);
            break;
        case 26:
            API.setVehiclePearlescentColor(PlayerVehicle, 87);
            break;
        case 27:
            API.setVehiclePearlescentColor(PlayerVehicle, 127);
            break;
        case 28:
            API.setVehiclePearlescentColor(PlayerVehicle, 140);
            break;
        case 29:
            API.setVehiclePearlescentColor(PlayerVehicle, 141);
            break;
        case 30:
            API.setVehiclePearlescentColor(PlayerVehicle, 146);
            break;
        case 31:
            API.setVehiclePearlescentColor(PlayerVehicle, 157);
            break;
    }
});
BluePearlMenu.OnItemSelect.connect(function (sender, item, index) {
    switch (index) {
        case 0:
            API.triggerServerEvent("Pearlescent", 61);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 1:
            API.triggerServerEvent("Pearlescent", 62);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 2:
            API.triggerServerEvent("Pearlescent", 63);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 3:
            API.triggerServerEvent("Pearlescent", 64);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 4:
            API.triggerServerEvent("Pearlescent", 65);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 5:
            API.triggerServerEvent("Pearlescent", 66);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 6:
            API.triggerServerEvent("Pearlescent", 67);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 7:
            API.triggerServerEvent("Pearlescent", 68);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 8:
            API.triggerServerEvent("Pearlescent", 69);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 9:
            API.triggerServerEvent("Pearlescent", 70);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 10:
            API.triggerServerEvent("Pearlescent", 71);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 11:
            API.triggerServerEvent("Pearlescent", 72);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 12:
            API.triggerServerEvent("Pearlescent", 73);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 13:
            API.triggerServerEvent("Pearlescent", 74);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 14:
            API.triggerServerEvent("Pearlescent", 75);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 15:
            API.triggerServerEvent("Pearlescent", 76);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 16:
            API.triggerServerEvent("Pearlescent", 77);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 17:
            API.triggerServerEvent("Pearlescent", 78);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 18:
            API.triggerServerEvent("Pearlescent", 79);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 19:
            API.triggerServerEvent("Pearlescent", 80);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 20:
            API.triggerServerEvent("Pearlescent", 81);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 21:
            API.triggerServerEvent("Pearlescent", 82);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 22:
            API.triggerServerEvent("Pearlescent", 83);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 23:
            API.triggerServerEvent("Pearlescent", 84);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 24:
            API.triggerServerEvent("Pearlescent", 85);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 25:
            API.triggerServerEvent("Pearlescent", 86);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 26:
            API.triggerServerEvent("Pearlescent", 87);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 27:
            API.triggerServerEvent("Pearlescent", 127);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 28:
            API.triggerServerEvent("Pearlescent", 140);
            API.closeAllMenus();
            MainMenu.Visible = true;
        case 29:
            API.triggerServerEvent("Pearlescent", 141);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 30:
            API.triggerServerEvent("Pearlescent", 146);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 31:
            API.triggerServerEvent("Pearlescent", 157);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
    }
});
BlueSecMenu.OnIndexChange.connect(function (sender, index) {
    switch (index) {
        case 0:
            API.setVehicleSecondaryColor(PlayerVehicle, 61);
            break;
        case 1:
            API.setVehicleSecondaryColor(PlayerVehicle, 62);
            break;
        case 2:
            API.setVehicleSecondaryColor(PlayerVehicle, 63);
            break;
        case 3:
            API.setVehicleSecondaryColor(PlayerVehicle, 64);
            break;
        case 4:
            API.setVehicleSecondaryColor(PlayerVehicle, 65);
            break;
        case 5:
            API.setVehicleSecondaryColor(PlayerVehicle, 66);
            break;
        case 6:
            API.setVehicleSecondaryColor(PlayerVehicle, 67);
            break;
        case 7:
            API.setVehicleSecondaryColor(PlayerVehicle, 68);
            break;
        case 8:
            API.setVehicleSecondaryColor(PlayerVehicle, 69);
            break;
        case 9:
            API.setVehicleSecondaryColor(PlayerVehicle, 70);
            break;
        case 10:
            API.setVehicleSecondaryColor(PlayerVehicle, 71);
            break;
        case 11:
            API.setVehicleSecondaryColor(PlayerVehicle, 72);
            break;
        case 12:
            API.setVehicleSecondaryColor(PlayerVehicle, 73);
            break;
        case 13:
            API.setVehicleSecondaryColor(PlayerVehicle, 74);
            break;
        case 14:
            API.setVehicleSecondaryColor(PlayerVehicle, 75);
            break;
        case 15:
            API.setVehicleSecondaryColor(PlayerVehicle, 76);
            break;
        case 16:
            API.setVehicleSecondaryColor(PlayerVehicle, 77);
            break;
        case 17:
            API.setVehicleSecondaryColor(PlayerVehicle, 78);
            break;
        case 18:
            API.setVehicleSecondaryColor(PlayerVehicle, 79);
            break;
        case 19:
            API.setVehicleSecondaryColor(PlayerVehicle, 80);
            break;
        case 20:
            API.setVehicleSecondaryColor(PlayerVehicle, 81);
            break;
        case 21:
            API.setVehicleSecondaryColor(PlayerVehicle, 82);
            break;
        case 22:
            API.setVehicleSecondaryColor(PlayerVehicle, 83);
            break;
        case 23:
            API.setVehicleSecondaryColor(PlayerVehicle, 84);
            break;
        case 24:
            API.setVehicleSecondaryColor(PlayerVehicle, 85);
            break;
        case 25:
            API.setVehicleSecondaryColor(PlayerVehicle, 86);
            break;
        case 26:
            API.setVehicleSecondaryColor(PlayerVehicle, 87);
            break;
        case 27:
            API.setVehicleSecondaryColor(PlayerVehicle, 127);
            break;
        case 28:
            API.setVehicleSecondaryColor(PlayerVehicle, 140);
            break;
        case 29:
            API.setVehicleSecondaryColor(PlayerVehicle, 141);
            break;
        case 30:
            API.setVehicleSecondaryColor(PlayerVehicle, 146);
            break;
        case 31:
            API.setVehicleSecondaryColor(PlayerVehicle, 157);
            break;
    }
});
BlueSecMenu.OnItemSelect.connect(function (sender, item, index) {
    switch (index) {
        case 0:
            API.triggerServerEvent("Secondary", 61);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 1:
            API.triggerServerEvent("Secondary", 62);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 2:
            API.triggerServerEvent("Secondary", 63);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 3:
            API.triggerServerEvent("Secondary", 64);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 4:
            API.triggerServerEvent("Secondary", 65);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 5:
            API.triggerServerEvent("Secondary", 66);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 6:
            API.triggerServerEvent("Secondary", 67);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 7:
            API.triggerServerEvent("Secondary", 68);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 8:
            API.triggerServerEvent("Secondary", 69);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 9:
            API.triggerServerEvent("Secondary", 70);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 10:
            API.triggerServerEvent("Secondary", 71);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 11:
            API.triggerServerEvent("Secondary", 72);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 12:
            API.triggerServerEvent("Secondary", 73);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 13:
            API.triggerServerEvent("Secondary", 74);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 14:
            API.triggerServerEvent("Secondary", 75);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 15:
            API.triggerServerEvent("Secondary", 76);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 16:
            API.triggerServerEvent("Secondary", 77);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 17:
            API.triggerServerEvent("Secondary", 78);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 18:
            API.triggerServerEvent("Secondary", 79);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 19:
            API.triggerServerEvent("Secondary", 80);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 20:
            API.triggerServerEvent("Secondary", 81);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 21:
            API.triggerServerEvent("Secondary", 82);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 22:
            API.triggerServerEvent("Secondary", 83);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 23:
            API.triggerServerEvent("Secondary", 84);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 24:
            API.triggerServerEvent("Secondary", 85);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 25:
            API.triggerServerEvent("Secondary", 86);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 26:
            API.triggerServerEvent("Secondary", 87);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 27:
            API.triggerServerEvent("Secondary", 127);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 28:
            API.triggerServerEvent("Secondary", 140);
            API.closeAllMenus();
            MainMenu.Visible = true;
        case 29:
            API.triggerServerEvent("Secondary", 141);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 30:
            API.triggerServerEvent("Secondary", 146);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 31:
            API.triggerServerEvent("Secondary", 157);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
    }
});

PinkPrimMenu.OnIndexChange.connect(function (sender, index) {
    switch (index) {
        case 0:
            API.setVehiclePrimaryColor(PlayerVehicle, 135);
            break;
        case 1:
            API.setVehiclePrimaryColor(PlayerVehicle, 136);
            break;
        case 2:
            API.setVehiclePrimaryColor(PlayerVehicle, 137);
            break;
    }
});
PinkPrimMenu.OnItemSelect.connect(function (sender, item, index) {
    switch (index) {
        case 0:
            API.triggerServerEvent("Primary", 135);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 1:
            API.triggerServerEvent("Primary", 136);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 2:
            API.triggerServerEvent("Primary", 137);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
    }
});
PinkPearlMenu.OnIndexChange.connect(function (sender, index) {
    switch (index) {
        case 0:
            API.setVehiclePearlescentColor(PlayerVehicle, 135);
            break;
        case 1:
            API.setVehiclePearlescentColor(PlayerVehicle, 136);
            break;
        case 2:
            API.setVehiclePearlescentColor(PlayerVehicle, 137);
            break;
    }
});
PinkPearlMenu.OnItemSelect.connect(function (sender, item, index) {
    switch (index) {
        case 0:
            API.triggerServerEvent("Pearlescent", 135);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 1:
            API.triggerServerEvent("Pearlescent", 136);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 2:
            API.triggerServerEvent("Pearlescent", 137);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
    }
});
PinkSecMenu.OnIndexChange.connect(function (sender, index) {
    switch (index) {
        case 0:
            API.setVehicleSecondaryColor(PlayerVehicle, 135);
            break;
        case 1:
            API.setVehicleSecondaryColor(PlayerVehicle, 136);
            break;
        case 2:
            API.setVehicleSecondaryColor(PlayerVehicle, 137);
            break;
    }
});
PinkSecMenu.OnItemSelect.connect(function (sender, item, index) {
    switch (index) {
        case 0:
            API.triggerServerEvent("Secondary", 135);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 1:
            API.triggerServerEvent("Secondary", 136);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 2:
            API.triggerServerEvent("Secondary", 137);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
    }
});

PurplePrimMenu.OnIndexChange.connect(function (sender, index) {
    switch (index) {
        case 0:
            API.setVehiclePrimaryColor(PlayerVehicle, 142);
            break;
        case 1:
            API.setVehiclePrimaryColor(PlayerVehicle, 145);
            break;
        case 2:
            API.setVehiclePrimaryColor(PlayerVehicle, 148);
            break;
        case 3:
            API.setVehiclePrimaryColor(PlayerVehicle, 149);
            break;
    }
});
PurplePrimMenu.OnItemSelect.connect(function (sender, item, index) {
    switch (index) {
        case 0:
            API.triggerServerEvent("Primary", 142);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 1:
            API.triggerServerEvent("Primary", 145);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 2:
            API.triggerServerEvent("Primary", 148);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 3:
            API.triggerServerEvent("Primary", 149);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
    }
});
PurplePearlMenu.OnIndexChange.connect(function (sender, index) {
    switch (index) {
        case 0:
            API.setVehiclePearlescentColor(PlayerVehicle, 142);
            break;
        case 1:
            API.setVehiclePearlescentColor(PlayerVehicle, 145);
            break;
        case 2:
            API.setVehiclePearlescentColor(PlayerVehicle, 148);
            break;
        case 3:
            API.setVehiclePearlescentColor(PlayerVehicle, 149);
            break;
    }
});
PurplePearlMenu.OnItemSelect.connect(function (sender, item, index) {
    switch (index) {
        case 0:
            API.triggerServerEvent("Pearlescent", 142);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 1:
            API.triggerServerEvent("Pearlescent", 145);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 2:
            API.triggerServerEvent("Pearlescent", 148);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 3:
            API.triggerServerEvent("Pearlescent", 149);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
    }
});
PurpleSecMenu.OnIndexChange.connect(function (sender, index) {
    switch (index) {
        case 0:
            API.setVehicleSecondaryColor(PlayerVehicle, 142);
            break;
        case 1:
            API.setVehicleSecondaryColor(PlayerVehicle, 145);
            break;
        case 2:
            API.setVehicleSecondaryColor(PlayerVehicle, 148);
            break;
        case 3:
            API.setVehicleSecondaryColor(PlayerVehicle, 149);
            break;
    }
});
PurpleSecMenu.OnItemSelect.connect(function (sender, item, index) {
    switch (index) {
        case 0:
            API.triggerServerEvent("Secondary", 142);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 1:
            API.triggerServerEvent("Secondary", 145);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 2:
            API.triggerServerEvent("Secondary", 148);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 3:
            API.triggerServerEvent("Secondary", 149);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
    }
});

BrownPrimMenu.OnIndexChange.connect(function (sender, index) {
    switch (index) {
        case 0:
            API.setVehiclePrimaryColor(PlayerVehicle, 90);
            break;
        case 1:
            API.setVehiclePrimaryColor(PlayerVehicle, 94);
            break;
        case 2:
            API.setVehiclePrimaryColor(PlayerVehicle, 95);
            break;
        case 3:
            API.setVehiclePrimaryColor(PlayerVehicle, 96);
            break;
        case 4:
            API.setVehiclePrimaryColor(PlayerVehicle, 97);
            break;
        case 5:
            API.setVehiclePrimaryColor(PlayerVehicle, 98);
            break;
        case 6:
            API.setVehiclePrimaryColor(PlayerVehicle, 99);
            break;
        case 7:
            API.setVehiclePrimaryColor(PlayerVehicle, 100);
            break;
        case 8:
            API.setVehiclePrimaryColor(PlayerVehicle, 101);
            break;
        case 9:
            API.setVehiclePrimaryColor(PlayerVehicle, 102);
            break;
        case 10:
            API.setVehiclePrimaryColor(PlayerVehicle, 103);
            break;
        case 11:
            API.setVehiclePrimaryColor(PlayerVehicle, 104);
            break;
        case 12:
            API.setVehiclePrimaryColor(PlayerVehicle, 105);
            break;
        case 13:
            API.setVehiclePrimaryColor(PlayerVehicle, 106);
            break;
        case 14:
            API.setVehiclePrimaryColor(PlayerVehicle, 108);
            break;
        case 15:
            API.setVehiclePrimaryColor(PlayerVehicle, 103);
            break;
        case 16:
            API.setVehiclePrimaryColor(PlayerVehicle, 110);
            break;
        case 17:
            API.setVehiclePrimaryColor(PlayerVehicle, 113);
            break;
        case 18:
            API.setVehiclePrimaryColor(PlayerVehicle, 114);
            break;
        case 19:
            API.setVehiclePrimaryColor(PlayerVehicle, 115);
            break;
        case 20:
            API.setVehiclePrimaryColor(PlayerVehicle, 116);
            break;
        case 21:
            API.setVehiclePrimaryColor(PlayerVehicle, 129);
            break;
        case 22:
            API.setVehiclePrimaryColor(PlayerVehicle, 153);
            break;
        case 23:
            API.setVehiclePrimaryColor(PlayerVehicle, 154);
            break;
    }
});
BrownPrimMenu.OnItemSelect.connect(function (sender, item, index) {
    switch (index) {
        case 0:
            API.triggerServerEvent("Primary", 90);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 1:
            API.triggerServerEvent("Primary", 94);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 2:
            API.triggerServerEvent("Primary", 95);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 3:
            API.triggerServerEvent("Primary", 96);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 4:
            API.triggerServerEvent("Primary", 97);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 5:
            API.triggerServerEvent("Primary", 98);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 6:
            API.triggerServerEvent("Primary", 99);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 7:
            API.triggerServerEvent("Primary", 100);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 8:
            API.triggerServerEvent("Primary", 101);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 9:
            API.triggerServerEvent("Primary", 102);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 10:
            API.triggerServerEvent("Primary", 103);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 11:
            API.triggerServerEvent("Primary", 104);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 12:
            API.triggerServerEvent("Primary", 105);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 13:
            API.triggerServerEvent("Primary", 106);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 14:
            API.triggerServerEvent("Primary", 108);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 15:
            API.triggerServerEvent("Primary", 109);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 16:
            API.triggerServerEvent("Primary", 110);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 17:
            API.triggerServerEvent("Primary", 113);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 18:
            API.triggerServerEvent("Primary", 114);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 19:
            API.triggerServerEvent("Primary", 115);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 20:
            API.triggerServerEvent("Primary", 116);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 21:
            API.triggerServerEvent("Primary", 129);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 22:
            API.triggerServerEvent("Primary", 153);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 23:
            API.triggerServerEvent("Primary", 154);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
    }
});
BrownPearlMenu.OnIndexChange.connect(function (sender, index) {
    switch (index) {
        case 0:
            API.setVehiclePearlescentColor(PlayerVehicle, 90);
            break;
        case 1:
            API.setVehiclePearlescentColor(PlayerVehicle, 94);
            break;
        case 2:
            API.setVehiclePearlescentColor(PlayerVehicle, 95);
            break;
        case 3:
            API.setVehiclePearlescentColor(PlayerVehicle, 96);
            break;
        case 4:
            API.setVehiclePearlescentColor(PlayerVehicle, 97);
            break;
        case 5:
            API.setVehiclePearlescentColor(PlayerVehicle, 98);
            break;
        case 6:
            API.setVehiclePearlescentColor(PlayerVehicle, 99);
            break;
        case 7:
            API.setVehiclePearlescentColor(PlayerVehicle, 100);
            break;
        case 8:
            API.setVehiclePearlescentColor(PlayerVehicle, 101);
            break;
        case 9:
            API.setVehiclePearlescentColor(PlayerVehicle, 102);
            break;
        case 10:
            API.setVehiclePearlescentColor(PlayerVehicle, 103);
            break;
        case 11:
            API.setVehiclePearlescentColor(PlayerVehicle, 104);
            break;
        case 12:
            API.setVehiclePearlescentColor(PlayerVehicle, 105);
            break;
        case 13:
            API.setVehiclePearlescentColor(PlayerVehicle, 106);
            break;
        case 14:
            API.setVehiclePearlescentColor(PlayerVehicle, 108);
            break;
        case 15:
            API.setVehiclePearlescentColor(PlayerVehicle, 109);
            break;
        case 16:
            API.setVehiclePearlescentColor(PlayerVehicle, 110);
            break;
        case 17:
            API.setVehiclePearlescentColor(PlayerVehicle, 113);
            break;
        case 18:
            API.setVehiclePearlescentColor(PlayerVehicle, 114);
            break;
        case 19:
            API.setVehiclePearlescentColor(PlayerVehicle, 115);
            break;
        case 20:
            API.setVehiclePearlescentColor(PlayerVehicle, 116);
            break;
        case 21:
            API.setVehiclePearlescentColor(PlayerVehicle, 129);
            break;
        case 22:
            API.setVehiclePearlescentColor(PlayerVehicle, 153);
            break;
        case 23:
            API.setVehiclePearlescentColor(PlayerVehicle, 154);
            break;
    }
});
BrownPearlMenu.OnItemSelect.connect(function (sender, item, index) {
    switch (index) {
        case 0:
            API.triggerServerEvent("Pearlescent", 90);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 1:
            API.triggerServerEvent("Pearlescent", 94);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 2:
            API.triggerServerEvent("Pearlescent", 95);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 3:
            API.triggerServerEvent("Pearlescent", 96);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 4:
            API.triggerServerEvent("Pearlescent", 97);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 5:
            API.triggerServerEvent("Pearlescent", 98);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 6:
            API.triggerServerEvent("Pearlescent", 99);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 7:
            API.triggerServerEvent("Pearlescent", 100);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 8:
            API.triggerServerEvent("Pearlescent", 101);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 9:
            API.triggerServerEvent("Pearlescent", 102);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 10:
            API.triggerServerEvent("Pearlescent", 103);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 11:
            API.triggerServerEvent("Pearlescent", 104);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 12:
            API.triggerServerEvent("Pearlescent", 105);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 13:
            API.triggerServerEvent("Pearlescent", 106);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 14:
            API.triggerServerEvent("Pearlescent", 108);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 15:
            API.triggerServerEvent("Pearlescent", 109);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 16:
            API.triggerServerEvent("Pearlescent", 110);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 17:
            API.triggerServerEvent("Pearlescent", 113);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 18:
            API.triggerServerEvent("Pearlescent", 114);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 19:
            API.triggerServerEvent("Pearlescent", 115);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 20:
            API.triggerServerEvent("Pearlescent", 116);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 21:
            API.triggerServerEvent("Pearlescent", 129);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 22:
            API.triggerServerEvent("Pearlescent", 153);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 23:
            API.triggerServerEvent("Pearlescent", 154);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
    }
});
BrownSecMenu.OnIndexChange.connect(function (sender, index) {
    switch (index) {
        case 0:
            API.setVehicleSecondaryColor(PlayerVehicle, 90);
            break;
        case 1:
            API.setVehicleSecondaryColor(PlayerVehicle, 94);
            break;
        case 2:
            API.setVehicleSecondaryColor(PlayerVehicle, 95);
            break;
        case 3:
            API.setVehicleSecondaryColor(PlayerVehicle, 96);
            break;
        case 4:
            API.setVehicleSecondaryColor(PlayerVehicle, 97);
            break;
        case 5:
            API.setVehicleSecondaryColor(PlayerVehicle, 98);
            break;
        case 6:
            API.setVehicleSecondaryColor(PlayerVehicle, 99);
            break;
        case 7:
            API.setVehicleSecondaryColor(PlayerVehicle, 100);
            break;
        case 8:
            API.setVehicleSecondaryColor(PlayerVehicle, 101);
            break;
        case 9:
            API.setVehicleSecondaryColor(PlayerVehicle, 102);
            break;
        case 10:
            API.setVehicleSecondaryColor(PlayerVehicle, 103);
            break;
        case 11:
            API.setVehicleSecondaryColor(PlayerVehicle, 104);
            break;
        case 12:
            API.setVehicleSecondaryColor(PlayerVehicle, 105);
            break;
        case 13:
            API.setVehicleSecondaryColor(PlayerVehicle, 106);
            break;
        case 14:
            API.setVehicleSecondaryColor(PlayerVehicle, 108);
            break;
        case 15:
            API.setVehicleSecondaryColor(PlayerVehicle, 109);
            break;
        case 16:
            API.setVehicleSecondaryColor(PlayerVehicle, 110);
            break;
        case 17:
            API.setVehicleSecondaryColor(PlayerVehicle, 113);
            break;
        case 18:
            API.setVehicleSecondaryColor(PlayerVehicle, 114);
            break;
        case 19:
            API.setVehicleSecondaryColor(PlayerVehicle, 115);
            break;
        case 20:
            API.setVehicleSecondaryColor(PlayerVehicle, 116);
            break;
        case 21:
            API.setVehicleSecondaryColor(PlayerVehicle, 129);
            break;
        case 22:
            API.setVehicleSecondaryColor(PlayerVehicle, 153);
            break;
        case 23:
            API.setVehicleSecondaryColor(PlayerVehicle, 154);
            break;
    }
});
BrownSecMenu.OnItemSelect.connect(function (sender, item, index) {
    switch (index) {
        case 0:
            API.triggerServerEvent("Secondary", 90);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 1:
            API.triggerServerEvent("Secondary", 94);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 2:
            API.triggerServerEvent("Secondary", 95);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 3:
            API.triggerServerEvent("Secondary", 96);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 4:
            API.triggerServerEvent("Secondary", 97);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 5:
            API.triggerServerEvent("Secondary", 98);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 6:
            API.triggerServerEvent("Secondary", 99);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 7:
            API.triggerServerEvent("Secondary", 100);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 8:
            API.triggerServerEvent("Secondary", 101);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 9:
            API.triggerServerEvent("Secondary", 102);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 10:
            API.triggerServerEvent("Secondary", 103);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 11:
            API.triggerServerEvent("Secondary", 104);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 12:
            API.triggerServerEvent("Secondary", 105);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 13:
            API.triggerServerEvent("Secondary", 106);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 14:
            API.triggerServerEvent("Secondary", 108);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 15:
            API.triggerServerEvent("Secondary", 109);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 16:
            API.triggerServerEvent("Secondary", 110);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 17:
            API.triggerServerEvent("Secondary", 113);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 18:
            API.triggerServerEvent("Secondary", 114);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 19:
            API.triggerServerEvent("Secondary", 115);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 20:
            API.triggerServerEvent("Secondary", 116);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 21:
            API.triggerServerEvent("Secondary", 129);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 22:
            API.triggerServerEvent("Secondary", 153);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
        case 23:
            API.triggerServerEvent("Secondary", 154);
            API.closeAllMenus();
            MainMenu.Visible = true;
            break;
    }
});