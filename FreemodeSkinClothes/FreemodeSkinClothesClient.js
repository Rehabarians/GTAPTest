"use strict";
/// <reference path ="\types-gt-mp\Definitions\index.d.ts" />
let MainMenu = API.createMenu("Clothes Menu", 0, 0, 6);
let MainMenuItems;
let MainMenuNames = [
    "Hats",
    "Earrings",
    "Glasses",
    "Mask",
    "Neck Accessories",
    "Tops",
    "Undershirt",
    "Watches",
    "Bracelets",
    "Gloves",
    "Trousers",
    "Shoes",
    "Accept",
    "Cancel"
];
let HatsMenu = API.createMenu("Hats", 0, 0, 6);
let HatsMenuItems;
let HatCurrentVariation;
let HatCurrentTexture;
let HatsVariationSelected;
let HatsTextureSelected;
let HatSelectedBool;
let EarringsMenu = API.createMenu("Earrings", 0, 0, 6);
let EarringsMenuItems;
let EarringsCurrentVariation;
let EarringsCurrentTexture;
let EarringsVariationSelected;
let EarringsTextureSelected;
let EarringSelectedBool;
let GlassesMenu = API.createMenu("Glasses", 0, 0, 6);
let GlassesMenuItems;
let GlassesCurrentVariation;
let GlassesCurrentTexture;
let GlassesVariationSelected;
let GlassesTextureSelected;
let GlassesSelectedBool;
let MasksMenu = API.createMenu("Mask", 0, 0, 6);
let MaskMenuItems;
let MaskCurrentVariation;
let MaskCurrentTexture;
let MasksVariationSelected;
let MasksTextureSelected;
let MaskSelectedBool;
let NecksMenu = API.createMenu("Neck Accessories", 0, 0, 6);
let NecksMenuItems;
let NeckCurrentVariation;
let NeckCurrentTexture;
let NecksVariationSelected;
let NecksTextureSelected;
let NeckSelectedBool;
let TopsMenu = API.createMenu("Tops", 0, 0, 6);
let TopsMenuItems;
let TopCurrentVariation;
let TopCurrentTexture;
let TopsVariationSelected;
let TopsTextureSelected;
let TopSelectedBool;
let UndershirtsMenu = API.createMenu("Undershirts", 0, 0, 6);
let UndershirtsMenuItems;
let UndershirtCurrentVariation;
let UndershirtCurrentTexture;
let UndershirtsVariationSelected;
let UndershirtsTextureSelected;
let UndershirtSelectedBool;
let WatchesMenu = API.createMenu("Watches", 0, 0, 6);
let WatchesMenuItems;
let WatchCurrentVariation;
let WatchCurrentTexture;
let WatchesVariationSelected;
let WatchesTextureSelected;
let WatchSelectedBool;
let BraceletsMenu = API.createMenu("Braclets", 0, 0, 6);
let BraceletsMenuItems;
let BraceletCurrentVariation;
let BraceletCurrentTexture;
let BraceletsVariationSelected;
let BraceletsTextureSelected;
let BraceletSelectedBool;
let GlovesMenu = API.createMenu("Gloves", 0, 0, 6);
let GlovesMenuItems;
let GlovesCurrentVariation;
let GlovesCurrentTexture;
let GlovesVariationSelected;
let GlovesTextureSelected;
let GlovesSelectedBool;
let TorsoSelected;
let TrousersMenu = API.createMenu("Trousers", 0, 0, 6);
let TrousersMenuItems;
let TrousersCurrentVariation;
let TrousersCurrentTexture;
let TrousersVariationSelected;
let TrousersTextureSelected;
let TrouserSelectedBool;
let ShoesMenu = API.createMenu("Shoes", 0, 0, 6);
let ShoesMenuItems;
let ShoesCurrentVariation;
let ShoesCurrentTexture;
let ShoesVariationSelected;
let ShoesTextureSelected;
let ShoesSelectedBool;
API.onServerEventTrigger.connect(function (Event, Args) {
    if (Event == "ClothesMenu") {
        MainMenu.Visible = true;
        //HatCurrentVariation = API.returnNative("GET_PED_PROP_INDEX", 0, API.getLocalPlayer(), 0);
        //HatCurrentTexture = API.returnNative("GET_PED_PROP_TEXTURE_INDEX", 0, API.getLocalPlayer(), 0);
        //EarringsCurrentVariation = API.returnNative("GET_PED_PROP_INDEX", 0, API.getLocalPlayer(), 2);
        //EarringsCurrentTexture = API.returnNative("GET_PED_PROP_TEXTURE_INDEX", 0, API.getLocalPlayer(), 2);
        //GlassesCurrentVariation = API.returnNative("GET_PED_PROP_INDEX", 0, API.getLocalPlayer(), 1);
        //GlassesCurrentTexture = API.returnNative("GET_PED_PROP_TEXTURE_INDEX", 0, API.getLocalPlayer(), 1);
        //MaskCurrentVariation = API.returnNative("GET_PED_PROP_INDEX", 0, API.getLocalPlayer(), 0);
        //MaskCurrentTexture = API.returnNative("GET_PED_PROP_TEXTURE_INDEX", 0, API.getLocalPlayer(), 0);
        //NeckCurrentVariation = API.returnNative("GET_PED_DRAWABLE_VARIATION", 0, API.getLocalPlayer(), 7);
        //NeckCurrentTexture = API.returnNative("GET_PED_TEXTURE_VARIATION", 0, API.getLocalPlayer(), 7);
        //TopCurrentVariation = API.returnNative("GET_PED_DRAWABLE_VARIATION", 0, API.getLocalPlayer(), 11);
        //TopCurrentTexture = API.returnNative("GET_PED_TEXTURE_VARIATION", 0, API.getLocalPlayer(), 11);
        //UndershirtCurrentVariation = API.returnNative("GET_PED_DRAWABLE_VARIATION", 0, API.getLocalPlayer(), 7);
        //UndershirtCurrentTexture = API.returnNative("GET_PED_TEXTURE_VARIATION", 0, API.getLocalPlayer(), 7);
        //WatchCurrentVariation = API.returnNative("GET_PED_PROP_INDEX", 0, API.getLocalPlayer(), 6);
        //WatchCurrentTexture = API.returnNative("GET_PED_PROP_TEXTURE_INDEX", 0, API.getLocalPlayer(), 6);
        //BraceletCurrentVariation = API.returnNative("GET_PED_PROP_INDEX", 0, API.getLocalPlayer(), 7);
        //BraceletCurrentTexture = API.returnNative("GET_PED_PROP_TEXTURE_INDEX", 0, API.getLocalPlayer(), 7);
        //GlovesCurrentVariation = API.returnNative("GET_PED_DRAWABLE_VARIATION", 0, API.getLocalPlayer(), 3);
        //GlovesCurrentTexture = API.returnNative("GET_PED_TEXTURE_VARIATION", 0, API.getLocalPlayer(), 3);
        //TrousersCurrentVariation = API.returnNative("GET_PED_DRAWABLE_VARIATION", 0, API.getLocalPlayer(), 4);
        //TrousersCurrentTexture = API.returnNative("GET_PED_TEXTURE_VARIATION", 0, API.getLocalPlayer(), 4);
        //ShoesCurrentVariation = API.returnNative("GET_PED_DRAWABLE_VARIATION", 0, API.getLocalPlayer(), 6);
        //ShoesCurrentTexture = API.returnNative("GET_PED_TEXTURE_VARIATION", 0, API.getLocalPlayer(), 6);
    }
    else if (Event === "MenuGeneration") {
        MainMenuGenerator();
        HatsMenuGenerator();
        EarringsMenuGenerator();
        GlassesMenuGenerator();
        MaskMenuGenerator();
        NeckMenuGenerator();
        TopMenuGenerator();
        UndershirtMenuGenerator();
        WatchMenuGenerator();
        BraceletMenuGenerator();
        GlovesMenuGenerator();
        TrouserMenuGenerator();
        ShoesMenuGenerator();
    }
});
function MainMenuGenerator() {
    for (var i = 0; i < MainMenuNames.length; i++) {
        switch (i) {
            case 0:
                MainMenuItems = API.createMenuItem(MainMenuNames[i], "");
                MainMenu.AddItem(MainMenuItems);
                MainMenu.BindMenuToItem(HatsMenu, MainMenuItems);
                break;
            case 1:
                MainMenuItems = API.createMenuItem(MainMenuNames[i], "");
                MainMenu.AddItem(MainMenuItems);
                MainMenu.BindMenuToItem(EarringsMenu, MainMenuItems);
                break;
            case 2:
                MainMenuItems = API.createMenuItem(MainMenuNames[i], "");
                MainMenu.AddItem(MainMenuItems);
                MainMenu.BindMenuToItem(GlassesMenu, MainMenuItems);
                break;
            case 3:
                MainMenuItems = API.createMenuItem(MainMenuNames[i], "");
                MainMenu.AddItem(MainMenuItems);
                MainMenu.BindMenuToItem(MasksMenu, MainMenuItems);
                break;
            case 4:
                MainMenuItems = API.createMenuItem(MainMenuNames[i], "");
                MainMenu.AddItem(MainMenuItems);
                MainMenu.BindMenuToItem(NecksMenu, MainMenuItems);
                break;
            case 5:
                MainMenuItems = API.createMenuItem(MainMenuNames[i], "");
                MainMenu.AddItem(MainMenuItems);
                MainMenu.BindMenuToItem(TopsMenu, MainMenuItems);
                break;
            case 6:
                MainMenuItems = API.createMenuItem(MainMenuNames[i], "");
                MainMenu.AddItem(MainMenuItems);
                MainMenu.BindMenuToItem(UndershirtsMenu, MainMenuItems);
                break;
            case 7:
                MainMenuItems = API.createMenuItem(MainMenuNames[i], "");
                MainMenu.AddItem(MainMenuItems);
                MainMenu.BindMenuToItem(WatchesMenu, MainMenuItems);
                break;
            case 8:
                MainMenuItems = API.createMenuItem(MainMenuNames[i], "");
                MainMenu.AddItem(MainMenuItems);
                MainMenu.BindMenuToItem(BraceletsMenu, MainMenuItems);
                break;
            case 9:
                MainMenuItems = API.createMenuItem(MainMenuNames[i], "");
                MainMenu.AddItem(MainMenuItems);
                MainMenu.BindMenuToItem(GlovesMenu, MainMenuItems);
                break;
            case 10:
                MainMenuItems = API.createMenuItem(MainMenuNames[i], "");
                MainMenu.AddItem(MainMenuItems);
                MainMenu.BindMenuToItem(TrousersMenu, MainMenuItems);
                break;
            case 11:
                MainMenuItems = API.createMenuItem(MainMenuNames[i], "");
                MainMenu.AddItem(MainMenuItems);
                MainMenu.BindMenuToItem(ShoesMenu, MainMenuItems);
                break;
            case 12:
                var ColouredItem1 = API.createColoredItem(MainMenuNames[i], "", "#33cc33", "#1f7a1f");
                MainMenu.AddItem(ColouredItem1);
                break;
            case 13:
                var ColouredItem2 = API.createColoredItem(MainMenuNames[i], "", "#ff0000", "#b30000");
                MainMenu.AddItem(ColouredItem2);
                break;
        }
    }
}
function HatsMenuGenerator() {
    var NoneItem = API.createMenuItem("None", "");
    //NoneItem.SetLeftBadge(22);
    HatsMenu.AddItem(NoneItem);
    if (API.getEntityModel(API.getLocalPlayer()) === 1885233650) {
        for (var i = 0; i < 120; i++) {
            let HatTexture;
            HatTexture = API.returnNative("GET_NUMBER_OF_PED_PROP_TEXTURE_VARIATIONS", 0, API.getLocalPlayer(), 0, i);
            var HatList = new List(String);
            for (var h = 0; h < HatTexture; h++) {
                HatList.Add("" + h);
            }
            HatsMenuItems = API.createListItem("" + i, "", HatList, 0);
            HatsMenu.AddItem(HatsMenuItems);
        }
    }
    else if (API.getEntityModel(API.getLocalPlayer()) === -1667301416) {
        for (var i = 0; i < 119; i++) {
            let HatTexture;
            HatTexture = API.returnNative("GET_NUMBER_OF_PED_PROP_TEXTURE_VARIATIONS", 0, API.getLocalPlayer(), 0, i);
            var HatList = new List(String);
            for (var h = 0; h < HatTexture; h++) {
                HatList.Add("" + h);
            }
            HatsMenuItems = API.createListItem("" + i, "", HatList, 0);
            HatsMenu.AddItem(HatsMenuItems);
        }
    }
}
function EarringsMenuGenerator() {
    var NoneItem = API.createMenuItem("None", "");
    //NoneItem.SetLeftBadge(22);
    EarringsMenu.AddItem(NoneItem);
    if (API.getEntityModel(API.getLocalPlayer()) === 1885233650) {
        for (var i = 0; i < 36; i++) {
            let EarringTexture;
            EarringTexture = API.returnNative("GET_NUMBER_OF_PED_PROP_TEXTURE_VARIATIONS", 0, API.getLocalPlayer(), 2, i);
            var EarringList = new List(String);
            for (var h = 0; h < EarringTexture; h++) {
                EarringList.Add("" + h);
            }
            EarringsMenuItems = API.createListItem("" + i, "", EarringList, 0);
            EarringsMenu.AddItem(EarringsMenuItems);
        }
    }
    else if (API.getEntityModel(API.getLocalPlayer()) === -1667301416) {
        for (var i = 0; i < 17; i++) {
            let EarringTexture;
            EarringTexture = API.returnNative("GET_NUMBER_OF_PED_PROP_TEXTURE_VARIATIONS", 0, API.getLocalPlayer(), 2, i);
            var EarringList = new List(String);
            for (var h = 0; h < EarringTexture; h++) {
                EarringList.Add("" + h);
            }
            EarringsMenuItems = API.createListItem("" + i, "", EarringList, 0);
            EarringsMenu.AddItem(EarringsMenuItems);
        }
    }
}
function GlassesMenuGenerator() {
    var NoneItem = API.createMenuItem("None", "");
    //NoneItem.SetLeftBadge(22);
    GlassesMenu.AddItem(NoneItem);
    if (API.getEntityModel(API.getLocalPlayer()) === 1885233650) {
        for (var i = 0; i < 25; i++) {
            let GlassTexture;
            GlassTexture = API.returnNative("GET_NUMBER_OF_PED_PROP_TEXTURE_VARIATIONS", 0, API.getLocalPlayer(), 1, i);
            var GlassList = new List(String);
            for (var h = 0; h < GlassTexture; h++) {
                GlassList.Add("" + h);
            }
            GlassesMenuItems = API.createListItem("" + i, "", GlassList, 0);
            GlassesMenu.AddItem(GlassesMenuItems);
        }
    }
    else if (API.getEntityModel(API.getLocalPlayer()) === -1667301416) {
        for (var i = 0; i < 27; i++) {
            let GlassTexture;
            GlassTexture = API.returnNative("GET_NUMBER_OF_PED_PROP_TEXTURE_VARIATIONS", 0, API.getLocalPlayer(), 1, i);
            var GlassList = new List(String);
            for (var h = 0; h < GlassTexture; h++) {
                GlassList.Add("" + h);
            }
            GlassesMenuItems = API.createListItem("" + i, "", GlassList, 0);
            GlassesMenu.AddItem(GlassesMenuItems);
        }
    }
}
function MaskMenuGenerator() {
    var NoneItem = API.createMenuItem("None", "");
    MasksMenu.AddItem(NoneItem);
    for (var i = 0; i < 119; i++) {
        MaskMenuItems = API.createMenuItem("" + i, "");
        MasksMenu.AddItem(MaskMenuItems);
        //for (var i = 0; i < 25; i++) {
        //    let MaskTexture: number;
        //    MaskTexture = API.returnNative("GET_NUMBER_OF_PED_PROP_TEXTURE_VARIATIONS", 0, API.getLocalPlayer(), 0, i);
        //    var MaskList = new List(String);
        //    for (var h = 0; h < MaskTexture; h++) {
        //        MaskList.Add("" + h);
        //    }
        //    MaskMenuItems = API.createListItem("" + i, "", MaskList, 0);
        //    MasksMenu.AddItem(MaskMenuItems);
        //}
    }
}
function NeckMenuGenerator() {
    var NoneItem = API.createMenuItem("None", "");
    //NoneItem.SetLeftBadge(NativeUI.UIMenuItem.BadgeStyle.Tick);
    NecksMenu.AddItem(NoneItem);
    if (API.getEntityModel(API.getLocalPlayer()) === 1885233650) {
        for (var i = 0; i < 124; i++) {
            let NeckTexture;
            NeckTexture = API.returnNative("GET_NUMBER_OF_PED_TEXTURE_VARIATIONS", 0, API.getLocalPlayer(), 7, i);
            var NeckList = new List(String);
            for (var h = 0; h < NeckTexture; h++) {
                NeckList.Add("" + h);
            }
            NecksMenuItems = API.createListItem("" + i, "", NeckList, 0);
            NecksMenu.AddItem(NecksMenuItems);
        }
    }
    else if (API.getEntityModel(API.getLocalPlayer()) === -1667301416) {
        for (var i = 0; i < 94; i++) {
            let NeckTexture;
            NeckTexture = API.returnNative("GET_NUMBER_OF_PED_TEXTURE_VARIATIONS", 0, API.getLocalPlayer(), 7, i);
            var NeckList = new List(String);
            for (var h = 0; h < NeckTexture; h++) {
                NeckList.Add("" + h);
            }
            NecksMenuItems = API.createListItem("" + i, "", NeckList, 0);
            NecksMenu.AddItem(NecksMenuItems);
        }
    }
}
function TopMenuGenerator() {
    var NoneItem = API.createMenuItem("None", "");
    //NoneItem.SetLeftBadge(NativeUI.UIMenuItem.BadgeStyle.Tick);
    TopsMenu.AddItem(NoneItem);
    if (API.getEntityModel(API.getLocalPlayer()) === 1885233650) {
        for (var i = 0; i < 240; i++) {
            let TopTexture;
            TopTexture = API.returnNative("GET_NUMBER_OF_PED_TEXTURE_VARIATIONS", 0, API.getLocalPlayer(), 11, i);
            var TopList = new List(String);
            for (var h = 0; h < TopTexture; h++) {
                TopList.Add("" + h);
            }
            TopsMenuItems = API.createListItem("" + i, "", TopList, 0);
            TopsMenu.AddItem(TopsMenuItems);
        }
    }
    else if (API.getEntityModel(API.getLocalPlayer()) === -1667301416) {
        for (var i = 0; i < 248; i++) {
            let TopTexture;
            TopTexture = API.returnNative("GET_NUMBER_OF_PED_TEXTURE_VARIATIONS", 0, API.getLocalPlayer(), 11, i);
            var TopList = new List(String);
            for (var h = 0; h < TopTexture; h++) {
                TopList.Add("" + h);
            }
            TopsMenuItems = API.createListItem("" + i, "", TopList, 0);
            TopsMenu.AddItem(TopsMenuItems);
        }
    }
}
function UndershirtMenuGenerator() {
    var NoneItem = API.createMenuItem("None", "");
    //NoneItem.SetLeftBadge(NativeUI.UIMenuItem.BadgeStyle.Tick);
    UndershirtsMenu.AddItem(NoneItem);
    if (API.getEntityModel(API.getLocalPlayer()) === 1885233650) {
        for (var i = 0; i < 121; i++) {
            let UndershirtTexture;
            UndershirtTexture = API.returnNative("GET_NUMBER_OF_PED_TEXTURE_VARIATIONS", 0, API.getLocalPlayer(), 8, i);
            var UndershirtList = new List(String);
            for (var h = 0; h < UndershirtTexture; h++) {
                UndershirtList.Add("" + h);
            }
            UndershirtsMenuItems = API.createListItem("" + i, "", UndershirtList, 0);
            UndershirtsMenu.AddItem(UndershirtsMenuItems);
        }
    }
    else if (API.getEntityModel(API.getLocalPlayer()) === -1667301416) {
        for (var i = 0; i < 151; i++) {
            let UndershirtTexture;
            UndershirtTexture = API.returnNative("GET_NUMBER_OF_PED_TEXTURE_VARIATIONS", 0, API.getLocalPlayer(), 8, i);
            var UndershirtList = new List(String);
            for (var h = 0; h < UndershirtTexture; h++) {
                UndershirtList.Add("" + h);
            }
            UndershirtsMenuItems = API.createListItem("" + i, "", UndershirtList, 0);
            UndershirtsMenu.AddItem(UndershirtsMenuItems);
        }
    }
}
function WatchMenuGenerator() {
    var NoneItem = API.createMenuItem("None", "");
    //NoneItem.SetLeftBadge(NativeUI.UIMenuItem.BadgeStyle.Tick);
    WatchesMenu.AddItem(NoneItem);
    if (API.getEntityModel(API.getLocalPlayer()) === 1885233650) {
        for (var i = 0; i < 29; i++) {
            let WatchTexture;
            WatchTexture = API.returnNative("GET_NUMBER_OF_PED_PROP_TEXTURE_VARIATIONS", 0, API.getLocalPlayer(), 6, i);
            var WatchList = new List(String);
            for (var h = 0; h < WatchTexture; h++) {
                WatchList.Add("" + h);
            }
            WatchesMenuItems = API.createListItem("" + i, "", WatchList, 0);
            WatchesMenu.AddItem(WatchesMenuItems);
        }
    }
    else if (API.getEntityModel(API.getLocalPlayer()) === -1667301416) {
        for (var i = 0; i < 18; i++) {
            let WatchTexture;
            WatchTexture = API.returnNative("GET_NUMBER_OF_PED_PROP_TEXTURE_VARIATIONS", 0, API.getLocalPlayer(), 6, i);
            var WatchList = new List(String);
            for (var h = 0; h < WatchTexture; h++) {
                WatchList.Add("" + h);
            }
            WatchesMenuItems = API.createListItem("" + i, "", WatchList, 0);
            WatchesMenu.AddItem(WatchesMenuItems);
        }
    }
}
function BraceletMenuGenerator() {
    var NoneItem = API.createMenuItem("None", "");
    //NoneItem.SetLeftBadge(NativeUI.UIMenuItem.BadgeStyle.Tick);
    BraceletsMenu.AddItem(NoneItem);
    if (API.getEntityModel(API.getLocalPlayer()) === 1885233650) {
        for (var i = 0; i < 7; i++) {
            let BraceletTexture;
            BraceletTexture = API.returnNative("GET_NUMBER_OF_PED_PROP_TEXTURE_VARIATIONS", 0, API.getLocalPlayer(), 7, i);
            var BraceletList = new List(String);
            for (var h = 0; h < BraceletTexture; h++) {
                BraceletList.Add("" + h);
            }
            BraceletsMenuItems = API.createListItem("" + i, "", BraceletList, 0);
            BraceletsMenu.AddItem(BraceletsMenuItems);
        }
    }
    else if (API.getEntityModel(API.getLocalPlayer()) === -1667301416) {
        for (var i = 0; i < 14; i++) {
            let BraceletTexture;
            BraceletTexture = API.returnNative("GET_NUMBER_OF_PED_PROP_TEXTURE_VARIATIONS", 0, API.getLocalPlayer(), 7, i);
            var BraceletList = new List(String);
            for (var h = 0; h < BraceletTexture; h++) {
                BraceletList.Add("" + h);
            }
            BraceletsMenuItems = API.createListItem("" + i, "", BraceletList, 0);
            BraceletsMenu.AddItem(BraceletsMenuItems);
        }
    }
}
function GlovesMenuGenerator() {
    var NoneItem = API.createMenuItem("None", "");
    //NoneItem.SetLeftBadge(NativeUI.UIMenuItem.BadgeStyle.Tick);
    GlovesMenu.AddItem(NoneItem);
    if (API.getEntityModel(API.getLocalPlayer()) === 1885233650) {
        for (var i = 0; i < 111; i++) {
            let GloveTexture;
            GloveTexture = API.returnNative("GET_NUMBER_OF_PED_TEXTURE_VARIATIONS", 0, API.getLocalPlayer(), 3, i);
            var GloveList = new List(String);
            for (var h = 0; h < GloveTexture; h++) {
                GloveList.Add("" + h);
            }
            GlovesMenuItems = API.createListItem("" + i, "", GloveList, 0);
            GlovesMenu.AddItem(GlovesMenuItems);
        }
    }
    else if (API.getEntityModel(API.getLocalPlayer()) === -1667301416) {
        for (var i = 0; i < 168; i++) {
            let GloveTexture;
            GloveTexture = API.returnNative("GET_NUMBER_OF_PED_TEXTURE_VARIATIONS", 0, API.getLocalPlayer(), 3, i);
            var GloveList = new List(String);
            for (var h = 0; h < GloveTexture; h++) {
                GloveList.Add("" + h);
            }
            GlovesMenuItems = API.createListItem("" + i, "", GloveList, 0);
            GlovesMenu.AddItem(GlovesMenuItems);
        }
    }
}
function TrouserMenuGenerator() {
    var NoneItem = API.createMenuItem("None", "");
    //NoneItem.SetLeftBadge(NativeUI.UIMenuItem.BadgeStyle.Tick);
    TrousersMenu.AddItem(NoneItem);
    if (API.getEntityModel(API.getLocalPlayer()) === 1885233650) {
        for (var i = 0; i < 93; i++) {
            let TrouserTexture;
            TrouserTexture = API.returnNative("GET_NUMBER_OF_PED_TEXTURE_VARIATIONS", 0, API.getLocalPlayer(), 4, i);
            var TrouserList = new List(String);
            for (var h = 0; h < TrouserTexture; h++) {
                TrouserList.Add("" + h);
            }
            TrousersMenuItems = API.createListItem("" + i, "", TrouserList, 0);
            TrousersMenu.AddItem(TrousersMenuItems);
        }
    }
    else if (API.getEntityModel(API.getLocalPlayer()) === -1667301416) {
        for (var i = 0; i < 96; i++) {
            let TrouserTexture;
            TrouserTexture = API.returnNative("GET_NUMBER_OF_PED_TEXTURE_VARIATIONS", 0, API.getLocalPlayer(), 4, i);
            var TrouserList = new List(String);
            for (var h = 0; h < TrouserTexture; h++) {
                TrouserList.Add("" + h);
            }
            TrousersMenuItems = API.createListItem("" + i, "", TrouserList, 0);
            TrousersMenu.AddItem(TrousersMenuItems);
        }
    }
}
function ShoesMenuGenerator() {
    var NoneItem = API.createMenuItem("None", "");
    //NoneItem.SetLeftBadge(NativeUI.UIMenuItem.BadgeStyle.Tick);
    ShoesMenu.AddItem(NoneItem);
    if (API.getEntityModel(API.getLocalPlayer()) === 1885233650) {
        for (var i = 0; i < 66; i++) {
            let ShoeTexture;
            ShoeTexture = API.returnNative("GET_NUMBER_OF_PED_TEXTURE_VARIATIONS", 0, API.getLocalPlayer(), 6, i);
            var ShoeList = new List(String);
            for (var h = 0; h < ShoeTexture; h++) {
                ShoeList.Add("" + h);
            }
            ShoesMenuItems = API.createListItem("" + i, "", ShoeList, 0);
            ShoesMenu.AddItem(ShoesMenuItems);
        }
    }
    else if (API.getEntityModel(API.getLocalPlayer()) === -1667301416) {
        for (var i = 0; i < 69; i++) {
            let ShoeTexture;
            ShoeTexture = API.returnNative("GET_NUMBER_OF_PED_TEXTURE_VARIATIONS", 0, API.getLocalPlayer(), 6, i);
            var ShoeList = new List(String);
            for (var h = 0; h < ShoeTexture; h++) {
                ShoeList.Add("" + h);
            }
            ShoesMenuItems = API.createListItem("" + i, "", ShoeList, 0);
            ShoesMenu.AddItem(ShoesMenuItems);
        }
    }
}
function AcceptCommand() {
    if (HatSelectedBool === true) {
        if (HatsTextureSelected !== null) {
            API.triggerServerEvent("AccessoryAccepted", "Hat", HatsVariationSelected, HatsTextureSelected);
        }
        else {
            API.triggerServerEvent("AccessoryAccepted", "Hat", HatsVariationSelected, 0);
        }
    }
    else if (EarringSelectedBool === true) {
        if (EarringsTextureSelected !== null) {
            API.triggerServerEvent("AccessoryAccepted", "Earrings", EarringsVariationSelected, EarringsTextureSelected);
        }
        else {
            API.triggerServerEvent("AccessoryAccepted", "Earrings", EarringsVariationSelected, 0);
        }
    }
    else if (GlassesSelectedBool === true) {
        if (GlassesTextureSelected !== null) {
            API.triggerServerEvent("AccessoryAccepted", "Glasses", GlassesVariationSelected, GlassesTextureSelected);
        }
        else {
            API.triggerServerEvent("AccessoryAccepted", "Glasses", GlassesVariationSelected, 0);
        }
    }
    else if (MaskSelectedBool === true) {
        if (MasksTextureSelected !== null) {
            API.triggerServerEvent("ClothesAccepted", "Mask", MasksVariationSelected, MasksTextureSelected);
        }
        else {
            API.triggerServerEvent("ClothesAccepted", "Mask", MasksVariationSelected, 0);
        }
    }
    else if (NeckSelectedBool === true) {
        if (NecksTextureSelected !== null) {
            API.triggerServerEvent("ClothesAccepted", "Neck", NecksVariationSelected, NecksTextureSelected);
        }
        else {
            API.triggerServerEvent("ClothesAccepted", "Neck", NecksVariationSelected, 0);
        }
    }
    else if (TopSelectedBool === true) {
        if (TopsTextureSelected !== null) {
            API.triggerServerEvent("ClothesAccepted", "Top", TopsVariationSelected, TopsTextureSelected);
        }
        else {
            API.triggerServerEvent("ClothesAccepted", "Top", TopsVariationSelected, 0);
        }
    }
    else if (UndershirtSelectedBool === true) {
        if (UndershirtsTextureSelected !== null) {
            API.triggerServerEvent("ClothesAccepted", "Undershirt", UndershirtsVariationSelected, UndershirtsTextureSelected);
        }
        else {
            API.triggerServerEvent("ClothesAccepted", "Undershirt", UndershirtsVariationSelected, 0);
        }
    }
    else if (WatchSelectedBool === true) {
        if (WatchesTextureSelected !== null) {
            API.triggerServerEvent("AccessoryAccepted", "Watches", WatchesVariationSelected, WatchesTextureSelected);
        }
        else {
            API.triggerServerEvent("AccessoryAccepted", "Watches", WatchesVariationSelected, 0);
        }
    }
    else if (BraceletSelectedBool === true) {
        if (BraceletsTextureSelected !== null) {
            API.triggerServerEvent("AccessoryAccepted", "Bracelet", BraceletsVariationSelected, BraceletsTextureSelected);
        }
        else {
            API.triggerServerEvent("AccessoryAccepted", "Bracelet", BraceletsVariationSelected, 0);
        }
    }
    else if (GlovesSelectedBool === true) {
        if (GlovesTextureSelected !== null) {
            API.triggerServerEvent("ClothesAccepted", "Gloves", GlovesVariationSelected, GlovesTextureSelected);
        }
        else {
            API.triggerServerEvent("ClothesAccepted", "Gloves", GlovesVariationSelected, 0);
        }
    }
    else if (TrouserSelectedBool === true) {
        if (TrousersTextureSelected !== null) {
            API.triggerServerEvent("ClothesAccepted", "Trousers", TrousersVariationSelected, TrousersTextureSelected);
        }
        else {
            API.triggerServerEvent("ClothesAccepted", "Trousers", TrousersVariationSelected, 0);
        }
    }
    else if (ShoesSelectedBool === true) {
        if (ShoesTextureSelected !== null) {
            API.triggerServerEvent("ClothesAccepted", "Shoes", ShoesVariationSelected, ShoesTextureSelected);
        }
        else {
            API.triggerServerEvent("ClothesAccepted", "Shoes", ShoesVariationSelected, 0);
        }
    }
    API.closeAllMenus();
}
function CancelCommand() {
    //API.setPlayerAccessory(API.getLocalPlayer(), 0, HatCurrentVariation, HatCurrentTexture);
    //API.setPlayerAccessory(API.getLocalPlayer(), 2, EarringsCurrentVariation, EarringsCurrentTexture);
    //API.setPlayerAccessory(API.getLocalPlayer(), 1, GlassesCurrentVariation, GlassesCurrentTexture);
    //API.setPlayerAccessory(API.getLocalPlayer(), 6, WatchCurrentVariation, WatchCurrentTexture);
    //API.setPlayerAccessory(API.getLocalPlayer(), 7, BraceletCurrentVariation, BraceletCurrentTexture);
    //API.setPlayerClothes(API.getLocalPlayer(), 1, MaskCurrentVariation, MaskCurrentTexture);
    //API.setPlayerClothes(API.getLocalPlayer(), 7, NeckCurrentVariation, NeckCurrentTexture);
    //API.setPlayerClothes(API.getLocalPlayer(), 11, TopCurrentVariation, TopCurrentTexture);
    //API.setPlayerClothes(API.getLocalPlayer(), 8, UndershirtCurrentVariation, UndershirtCurrentTexture);
    //API.setPlayerClothes(API.getLocalPlayer(), 3, GlovesCurrentVariation, GlovesCurrentTexture);
    //API.setPlayerClothes(API.getLocalPlayer(), 4, TrousersCurrentVariation, TrousersCurrentTexture);
    //API.setPlayerClothes(API.getLocalPlayer(), 6, ShoesCurrentVariation, ShoesCurrentTexture);
    API.closeAllMenus();
}
MainMenu.OnItemSelect.connect(function (sender, item, index) {
    if (index === 12) {
        AcceptCommand();
    }
    else if (index === 13) {
        CancelCommand();
    }
});
HatsMenu.OnIndexChange.connect(function (sender, index) {
    if (index === 0) {
        API.clearPlayerAccessory(API.getLocalPlayer(), 0);
    }
    else {
        API.setPlayerAccessory(API.getLocalPlayer(), 0, (index - 1), 0);
        HatsVariationSelected = index - 1;
    }
});
HatsMenu.OnListChange.connect(function (sender, listItem, newIndex) {
    API.setPlayerAccessory(API.getLocalPlayer(), 0, HatsVariationSelected, newIndex);
    HatsTextureSelected = newIndex;
});
HatsMenu.OnItemSelect.connect(function (sender, item, index) {
    if (index === 0) {
        API.clearPlayerAccessory(API.getLocalPlayer(), 0);
        HatSelectedBool = false;
        HatsMenu.Visible = false;
        MainMenu.Visible = true;
    }
    else {
        HatSelectedBool = true;
        HatsMenu.Visible = false;
        MainMenu.Visible = true;
        //HatsMenuItems.SetLeftBadge(NativeUI.UIMenuItem.BadgeStyle.Tick);
    }
});
EarringsMenu.OnIndexChange.connect(function (sender, index) {
    if (index === 0) {
        API.clearPlayerAccessory(API.getLocalPlayer(), 2);
    }
    else {
        API.setPlayerAccessory(API.getLocalPlayer(), 2, (index - 1), 0);
        EarringsVariationSelected = index - 1;
    }
});
EarringsMenu.OnListChange.connect(function (sender, listItem, newIndex) {
    API.setPlayerAccessory(API.getLocalPlayer(), 2, EarringsVariationSelected, newIndex);
    EarringsTextureSelected = newIndex;
});
EarringsMenu.OnItemSelect.connect(function (sender, item, index) {
    if (index === 0) {
        API.clearPlayerAccessory(API.getLocalPlayer(), 2);
        EarringSelectedBool = false;
        EarringsMenu.Visible = false;
        MainMenu.Visible = true;
    }
    else {
        EarringSelectedBool = true;
        EarringsMenu.Visible = false;
        MainMenu.Visible = true;
    }
});
GlassesMenu.OnIndexChange.connect(function (sender, index) {
    if (index === 0) {
        API.clearPlayerAccessory(API.getLocalPlayer(), 1);
    }
    else {
        API.setPlayerAccessory(API.getLocalPlayer(), 1, (index - 1), 0);
        GlassesVariationSelected = index - 1;
    }
});
GlassesMenu.OnListChange.connect(function (sender, listItem, newIndex) {
    API.setPlayerAccessory(API.getLocalPlayer(), 1, GlassesVariationSelected, newIndex);
    GlassesTextureSelected = newIndex;
});
GlassesMenu.OnItemSelect.connect(function (sender, item, index) {
    if (index === 0) {
        API.clearPlayerAccessory(API.getLocalPlayer(), 1);
        GlassesSelectedBool = false;
        GlassesMenu.Visible = false;
        MainMenu.Visible = true;
    }
    else {
        GlassesSelectedBool = false;
        GlassesMenu.Visible = false;
        MainMenu.Visible = true;
    }
});
MasksMenu.OnIndexChange.connect(function (sender, index) {
    if (index === 0) {
        API.setPlayerClothes(API.getLocalPlayer(), 1, 0, 0);
    }
    else {
        API.setPlayerClothes(API.getLocalPlayer(), 1, index, 0);
        MasksVariationSelected = index - 1;
    }
});
//MasksMenu.OnListChange.connect(function (sender, listItem, newIndex) {
//    API.setPlayerClothes(API.getLocalPlayer(), 1, MasksVariationSelected, newIndex);
//});
MasksMenu.OnItemSelect.connect(function (sender, item, index) {
    if (index === 0) {
        API.setPlayerClothes(API.getLocalPlayer(), 1, 0, 0);
        MaskSelectedBool = false;
        MasksMenu.Visible = false;
        MainMenu.Visible = true;
    }
    else {
        API.setPlayerClothes(API.getLocalPlayer(), 1, MasksVariationSelected, 0);
        MaskSelectedBool = true;
        MasksMenu.Visible = false;
        MainMenu.Visible = true;
    }
});
NecksMenu.OnIndexChange.connect(function (sender, index) {
    if (index === 0) {
        API.setPlayerClothes(API.getLocalPlayer(), 7, 0, 0);
    }
    else {
        API.setPlayerClothes(API.getLocalPlayer(), 7, index - 1, 0);
        NecksVariationSelected = index - 1;
    }
});
NecksMenu.OnListChange.connect(function (sender, listItem, newIndex) {
    API.setPlayerClothes(API.getLocalPlayer(), 7, NecksVariationSelected, newIndex);
    NecksTextureSelected = newIndex;
});
NecksMenu.OnItemSelect.connect(function (sender, item, index) {
    if (index === 0) {
        API.setPlayerClothes(API.getLocalPlayer(), 7, 0, 0);
        NeckSelectedBool = false;
        NecksMenu.Visible = false;
        MainMenu.Visible = true;
    }
    else {
        NeckSelectedBool = true;
        NecksMenu.Visible = false;
        MainMenu.Visible = true;
    }
});
TopsMenu.OnIndexChange.connect(function (sender, index) {
    if (index === 0) {
        API.setPlayerClothes(API.getLocalPlayer(), 11, 0, 0);
    }
    else {
        API.setPlayerClothes(API.getLocalPlayer(), 11, index - 1, 0);
        TopsVariationSelected = index - 1;
    }
});
TopsMenu.OnListChange.connect(function (sender, listItem, newIndex) {
    API.setPlayerClothes(API.getLocalPlayer(), 11, TopsVariationSelected, newIndex);
    TopsTextureSelected = newIndex;
});
TopsMenu.OnItemSelect.connect(function (sender, item, index) {
    if (index === 0) {
        API.setPlayerClothes(API.getLocalPlayer(), 11, 0, 0);
        TopSelectedBool = false;
        TopsMenu.Visible = false;
        MainMenu.Visible = true;
    }
    else {
        TopSelectedBool = true;
        TopsMenu.Visible = false;
        MainMenu.Visible = true;
    }
});
UndershirtsMenu.OnIndexChange.connect(function (sender, index) {
    if (index === 0) {
        API.setPlayerClothes(API.getLocalPlayer(), 8, 57, 0);
    }
    else {
        API.setPlayerClothes(API.getLocalPlayer(), 8, index - 1, 0);
        UndershirtsVariationSelected = index - 1;
    }
});
UndershirtsMenu.OnListChange.connect(function (sender, listItem, newIndex) {
    API.setPlayerClothes(API.getLocalPlayer(), 8, UndershirtsVariationSelected, newIndex);
    UndershirtsTextureSelected = newIndex;
});
UndershirtsMenu.OnItemSelect.connect(function (sender, item, index) {
    if (index === 0) {
        API.setPlayerClothes(API.getLocalPlayer(), 8, 57, 0);
        UndershirtSelectedBool = false;
        UndershirtsMenu.Visible = false;
        MainMenu.Visible = true;
    }
    else {
        UndershirtSelectedBool = true;
        UndershirtsMenu.Visible = false;
        MainMenu.Visible = true;
    }
});
WatchesMenu.OnIndexChange.connect(function (sender, index) {
    if (index === 0) {
        API.clearPlayerAccessory(API.getLocalPlayer(), 6);
    }
    else {
        API.setPlayerAccessory(API.getLocalPlayer(), 6, index - 1, 0);
        WatchesVariationSelected = index - 1;
    }
});
WatchesMenu.OnListChange.connect(function (sender, listItem, newIndex) {
    API.setPlayerAccessory(API.getLocalPlayer(), 6, WatchesVariationSelected, newIndex);
    WatchesTextureSelected = newIndex;
});
WatchesMenu.OnItemSelect.connect(function (sender, item, index) {
    if (index === 0) {
        API.clearPlayerAccessory(API.getLocalPlayer(), 6);
        WatchSelectedBool = false;
        WatchesMenu.Visible = false;
        MainMenu.Visible = true;
    }
    else {
        WatchSelectedBool = true;
        WatchesMenu.Visible = false;
        MainMenu.Visible = true;
    }
});
BraceletsMenu.OnIndexChange.connect(function (sender, index) {
    if (index === 0) {
        API.clearPlayerAccessory(API.getLocalPlayer(), 7);
    }
    else {
        API.setPlayerAccessory(API.getLocalPlayer(), 7, index - 1, 0);
        BraceletsVariationSelected = index - 1;
    }
});
BraceletsMenu.OnListChange.connect(function (sender, listItem, newIndex) {
    API.setPlayerAccessory(API.getLocalPlayer(), 7, BraceletsVariationSelected, newIndex);
    BraceletsTextureSelected = newIndex;
});
BraceletsMenu.OnItemSelect.connect(function (sender, item, index) {
    if (index === 0) {
        API.clearPlayerAccessory(API.getLocalPlayer(), 7);
        BraceletSelectedBool = false;
        BraceletsMenu.Visible = false;
        MainMenu.Visible = true;
    }
    else {
        BraceletSelectedBool = true;
        BraceletsMenu.Visible = false;
        MainMenu.Visible = true;
    }
});
GlovesMenu.OnIndexChange.connect(function (sender, index) {
    if (index === 0) {
        API.setPlayerClothes(API.getLocalPlayer(), 3, 0, 0);
    }
    else {
        API.setPlayerClothes(API.getLocalPlayer(), 3, index - 1, 0);
        GlovesVariationSelected = index - 1;
    }
});
GlovesMenu.OnListChange.connect(function (sender, listItem, newIndex) {
    API.setPlayerClothes(API.getLocalPlayer(), 3, GlovesVariationSelected, newIndex);
    GlovesTextureSelected = newIndex;
});
GlovesMenu.OnItemSelect.connect(function (sender, item, index) {
    if (index === 0) {
        API.setPlayerClothes(API.getLocalPlayer(), 3, 0, 0);
        GlovesSelectedBool = false;
        GlovesMenu.Visible = false;
        MainMenu.Visible = true;
    }
    else {
        GlovesSelectedBool = true;
        GlovesMenu.Visible = false;
        MainMenu.Visible = true;
    }
});
TrousersMenu.OnIndexChange.connect(function (sender, index) {
    if (index === 0) {
        API.setPlayerClothes(API.getLocalPlayer(), 4, 0, 0);
    }
    else {
        API.setPlayerClothes(API.getLocalPlayer(), 4, index - 1, 0);
        TrousersVariationSelected = index - 1;
    }
});
TrousersMenu.OnListChange.connect(function (sender, listItem, newIndex) {
    API.setPlayerClothes(API.getLocalPlayer(), 4, TrousersVariationSelected, newIndex);
    TrousersTextureSelected = newIndex;
});
TrousersMenu.OnItemSelect.connect(function (sender, item, index) {
    if (index === 0) {
        API.setPlayerClothes(API.getLocalPlayer(), 4, 0, 0);
        TrouserSelectedBool = false;
        TrousersMenu.Visible = false;
        MainMenu.Visible = true;
    }
    else {
        TrouserSelectedBool = true;
        TrousersMenu.Visible = false;
        MainMenu.Visible = true;
    }
});
ShoesMenu.OnIndexChange.connect(function (sender, index) {
    if (index === 0) {
        API.setPlayerClothes(API.getLocalPlayer(), 6, 34, 0);
    }
    else {
        API.setPlayerClothes(API.getLocalPlayer(), 6, index - 1, 0);
        ShoesVariationSelected = index - 1;
    }
});
ShoesMenu.OnListChange.connect(function (sender, listItem, newIndex) {
    API.setPlayerClothes(API.getLocalPlayer(), 6, ShoesVariationSelected, newIndex);
    ShoesTextureSelected = newIndex;
});
ShoesMenu.OnItemSelect.connect(function (sender, item, index) {
    if (index === 0) {
        API.setPlayerClothes(API.getLocalPlayer(), 6, 34, 0);
        ShoesSelectedBool = false;
        ShoesMenu.Visible = false;
        MainMenu.Visible = true;
    }
    else {
        ShoesSelectedBool = true;
        ShoesMenu.Visible = false;
        MainMenu.Visible = true;
    }
});
