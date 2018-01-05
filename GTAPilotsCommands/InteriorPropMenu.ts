/// <reference path ="\types-gt-mp\Definitions\index.d.ts" />

let PlayerPos: Vector3;
let InteriorID: number;

let HangerMenu: NativeUI.UIMenu = API.createMenu("Hanger customiser", 0, 0, 6);
let HangerBedroomMenu: NativeUI.UIMenu = API.createMenu("Bedroom Decor", 0, 0, 6);
let HangerMainLightingMenu: NativeUI.UIMenu = API.createMenu("Hanger Main Lighting", 0, 0, 6);
let HangerWallLightingMenu: NativeUI.UIMenu = API.createMenu("Hanger Wall Lighting", 0, 0, 6);
let HangerFloorMenu: NativeUI.UIMenu = API.createMenu("Hanger Floor Design", 0, 0, 6);
let FloorTypeMenu: NativeUI.UIMenu = API.createMenu("Floor Type", "", 0, 0, 6);
let FloorDecalMenu: NativeUI.UIMenu = API.createMenu("Floor Decal", "", 0, 0, 6);
let HangerOfficeMenu: NativeUI.UIMenu = API.createMenu("Office Decor", 0, 0, 6);

let BlindListItem: NativeUI.UIMenuListItem;
let ClutterCheckItem: NativeUI.UIMenuCheckboxItem;
let BedroomIntListItem: NativeUI.UIMenuListItem;

let HangerMainLightingItem: NativeUI.UIMenuItem;
let MainLightingString: string[] = ["Type A", "Type B", "Type C"];

let HangerWallLightingItem: NativeUI.UIMenuItem;
let WallLightingString: string[] = [
    "Neutral",
    "Tint 1",
    "Tint 2",
    "Tint 3",
    "Tint 4",
    "Tint, 5",
    "Tint 6",
    "Tint 7",
    "Tint 8",
    "Tint 9"
];
let WallLightID: string[] = [
    "set_lighting_wall_neutral",
    "set_lighting_wall_tint01",
    "set_lighting_wall_tint02",
    "set_lighting_wall_tint03",
    "set_lighting_wall_tint04",
    "set_lighting_wall_tint05",
    "set_lighting_wall_tint06",
    "set_lighting_wall_tint07",
    "set_lighting_wall_tint08",
    "set_lighting_wall_tint09"
];

let HangerFloorTypeItem: NativeUI.UIMenuItem;
let HangerFloorDecalItem: NativeUI.UIMenuItem;
let FloorTypeString: string[] = [
    "Type 1",
    "Type 2",
];
let FloorDecalString: string[] = [
    "Decal 1",
    "Decal 2",
    "Decal 3",
    "Decal 4",
    "Decal 5",
    "Decal 6",
    "Decal 7",
    "Decal 8",
    "Decal 9"
];
let FloorDecalID: string[] = [
    "set_floor_decal_1",
    "set_floor_decal_2",
    "set_floor_decal_3",
    "set_floor_decal_4",
    "set_floor_decal_5",
    "set_floor_decal_6",
    "set_floor_decal_7",
    "set_floor_decal_8",
    "set_floor_decal_9"
];

let HangerOfficeItem: NativeUI.UIMenuItem;
let OfficeString: string[] = ["Basic", "Modern", "Traditional"];

API.onResourceStart.connect(function () {
    BunkerInteriorLoad();
    HangerInteriorLoad();
    HangerMainMenu();
    HangerBedroom();
    HangerMainLighting();
    HangerWallLighting();
    HangerFloor();
    HangerOfficeInt();
});

API.onServerEventTrigger.connect(function (Event, Args) {
    if (Event === "CustomHanger") {

        PlayerPos = API.getEntityPosition(API.getLocalPlayer());
        InteriorID = API.getInteriorAtPos(PlayerPos);

        API.sendChatMessage("You are inside Interior " + InteriorID);
        if (InteriorID === 260353) {
            HangerMenu.Visible = true;
        }
        else {
            API.sendChatMessage("Warning", "You are not inside a Hanger!");
        }
    }
});

function BunkerInteriorLoad() {
    let BunkerID: number = 258561;
    API.enableInteriorProp(BunkerID, "Bunker_Style_A");
    API.enableInteriorProp(BunkerID, "standard_bunker_set");
    API.enableInteriorProp(BunkerID, "gun_range_lights");
}

function HangerInteriorLoad() {
    let HangerID: number = 260353;
    API.enableInteriorProp(HangerID, "set_floor_1");
    API.enableInteriorProp(HangerID, "set_lighting_hanger_a");
    API.enableInteriorProp(HangerID, "set_lighting_wall_neutral");
    API.enableInteriorProp(HangerID, "set_office_basic");
    API.enableInteriorProp(HangerID, "set_bedroom_tint");
    API.enableInteriorProp(HangerID, "set_crane_tint");
    API.enableInteriorProp(HangerID, "set_tint_shell");
    API.enableInteriorProp(HangerID, "set_modarea");
    API.enableInteriorProp(HangerID, "set_lighting_tint_props");
}

function HangerMainMenu() {
    //Bedroom
    let BedroomItem: NativeUI.UIMenuItem = API.createMenuItem("Bedroom Decor", "Choose bedroom decor");
    HangerMenu.AddItem(BedroomItem);
    HangerMenu.BindMenuToItem(HangerBedroomMenu, BedroomItem);

    //Hanger Lighting
    let MainLightingItem: NativeUI.UIMenuItem = API.createMenuItem("Lighting", "Choose main lighting");
    HangerMenu.AddItem(MainLightingItem);
    HangerMenu.BindMenuToItem(HangerMainLightingMenu, MainLightingItem);

    //Wall Lighting
    let WallLightingItem: NativeUI.UIMenuItem = API.createMenuItem("Wall Lighting", "Choose wall lights");
    HangerMenu.AddItem(WallLightingItem);
    HangerMenu.BindMenuToItem(HangerWallLightingMenu, WallLightingItem);

    //Floor
    let FloorItem: NativeUI.UIMenuItem = API.createMenuItem("Floor", "Choose floor design");
    HangerMenu.AddItem(FloorItem);
    HangerMenu.BindMenuToItem(HangerFloorMenu, FloorItem);

    //Office Interior
    let OfficeItem: NativeUI.UIMenuItem = API.createMenuItem("Officer Decor", "Choose office decor");
    HangerMenu.AddItem(OfficeItem);
    HangerMenu.BindMenuToItem(HangerOfficeMenu, OfficeItem);

    //Confirm
    let ConfirmItem: NativeUI.UIMenuItem = API.createMenuItem("Confirim", "Save Changes");
    HangerMenu.AddItem(ConfirmItem);
}

function HangerBedroom() {
    var BlindList = new List(String);
    BlindList.Add("Closed");
    BlindList.Add("Open");

    var BedroomIntList = new List(String);
    BedroomIntList.Add("Modern");
    BedroomIntList.Add("Traditional");

    BlindListItem = API.createListItem("Blinds", "Open or close the blinds", BlindList, 0);
    HangerBedroomMenu.AddItem(BlindListItem);

    ClutterCheckItem = API.createCheckboxItem("Clutter", "Enable or disable bedroom clutter", false);
    HangerBedroomMenu.AddItem(ClutterCheckItem);

    BedroomIntListItem = API.createListItem("Bedroom Decor", "Choose between modern and traditional decor", BedroomIntList, 0);
    HangerBedroomMenu.AddItem(BedroomIntListItem);
}

function HangerMainLighting() {
    for (var i = 0; i < MainLightingString.length; i++) {
        HangerMainLightingItem = API.createMenuItem(MainLightingString[i], "");
        HangerMainLightingMenu.AddItem(HangerMainLightingItem);
    }
}

function HangerWallLighting() {
    for (var i = 0; i < WallLightingString.length; i++) {
        HangerWallLightingItem = API.createMenuItem(WallLightingString[i], "");
        HangerWallLightingMenu.AddItem(HangerWallLightingItem);
    }
}

function HangerFloor() {
    let FloorTypeItem = API.createMenuItem("Floor Type", "Change the floor type");
    let FloorDecalItem = API.createMenuItem("Floor Decal", "Change the decal on the floor");

    HangerFloorMenu.AddItem(FloorTypeItem);
    HangerFloorMenu.AddItem(FloorDecalItem);

    HangerFloorMenu.BindMenuToItem(FloorTypeMenu, FloorTypeItem);
    HangerFloorMenu.BindMenuToItem(FloorDecalMenu, FloorDecalItem);

    for (var i = 0; i < FloorTypeString.length; i++) {
        HangerFloorTypeItem = API.createMenuItem(FloorTypeString[i], "");
        FloorTypeMenu.AddItem(HangerFloorTypeItem);
    }
    for (var a = 0; a < FloorDecalString.length; a++) {
        HangerFloorDecalItem = API.createMenuItem(FloorDecalString[a], "");
        FloorDecalMenu.AddItem(HangerFloorDecalItem);
    }
}

function HangerOfficeInt() {
    for (var i = 0; i < OfficeString.length; i++) {
        HangerOfficeItem = API.createMenuItem(OfficeString[i], "");
        HangerOfficeMenu.AddItem(HangerOfficeItem);
    }
}

HangerMenu.OnItemSelect.connect(function (sender, item, index) {
    if (index === 5) {
        API.closeAllMenus();
    }
});

HangerBedroomMenu.OnListChange.connect(function (sender, list, index) {
    if (list === BlindListItem) {
        if (index === 0) {
            API.disableInteriorProp(InteriorID, "set_bedroom_blinds_open");
            API.enableInteriorProp(InteriorID, "set_bedroom_blinds_closed");
        }
        else if (index === 1) {
            API.disableInteriorProp(InteriorID, "set_bedroom_blinds_closed");
            API.enableInteriorProp(InteriorID, "set_bedroom_blinds_open");
        }
    }

    else if (list === BedroomIntListItem) {
        if (index === 0) {
            API.disableInteriorProp(InteriorID, "set_bedroom_traditional");
            API.enableInteriorProp(InteriorID, "set_bedroom_modern");
        }
        else if (index === 1) {
            API.disableInteriorProp(InteriorID, "set_bedroom_modern");
            API.enableInteriorProp(InteriorID, "set_bedroom_traditional");
        }
    }
});
HangerBedroomMenu.OnCheckboxChange.connect(function (sender, checkboxitem, checked) {
    if (checkboxitem === ClutterCheckItem) {
        if (checked === true) {
            API.enableInteriorProp(InteriorID, "set_bedroom_clutter");
        }
        else {
            API.disableInteriorProp(InteriorID, "set_bedroom_clutter");
        }
    }
});

HangerMainLightingMenu.OnIndexChange.connect(function (sender, index) {
    if (index === 0) {
        API.disableInteriorProp(InteriorID, "set_lighting_hangar_b");
        API.disableInteriorProp(InteriorID, "set_lighting_hangar_c");
        API.enableInteriorProp(InteriorID, "set_lighting_hangar_a");
    }
    else if (index === 1) {
        API.disableInteriorProp(InteriorID, "set_lighting_hangar_a");
        API.disableInteriorProp(InteriorID, "set_lighting_hangar_c");
        API.enableInteriorProp(InteriorID, "set_lighting_hangar_b");
    }
    else if (index === 2) {
        API.disableInteriorProp(InteriorID, "set_lighting_hangar_b");
        API.disableInteriorProp(InteriorID, "set_lighting_hangar_a");
        API.enableInteriorProp(InteriorID, "set_lighting_hangar_c");
    }
});
HangerMainLightingMenu.OnItemSelect.connect(function (sender, item, index) {
    if (index === 0) {
        API.closeAllMenus();
        HangerMenu.Visible = true;
    }
    else if (index === 1) {
        API.closeAllMenus();
        HangerMenu.Visible = true;
    }
    else if (index === 2) {
        API.closeAllMenus();
        HangerMenu.Visible = true;
    }
});

HangerWallLightingMenu.OnIndexChange.connect(function (sender, index) {
    switch (index) {
        case 0:
            for (var i = 0; i < WallLightID.length; i++) {
                let ispropenabled: boolean = API.isInteriorPropEnabled(InteriorID, WallLightID[i]);

                if (ispropenabled === true) {
                    API.disableInteriorProp(InteriorID, WallLightID[i]);
                }
            }

            API.enableInteriorProp(InteriorID, "set_lighting_wall_neutral");
            break;

        case 1:
            for (var i = 0; i < WallLightID.length; i++) {
                let ispropenabled: boolean = API.isInteriorPropEnabled(InteriorID, WallLightID[i]);

                if (ispropenabled === true) {
                    API.disableInteriorProp(InteriorID, WallLightID[i]);
                }
            }

            API.enableInteriorProp(InteriorID, "set_lighting_wall_tint01");
            break;

        case 2:
            for (var i = 0; i < WallLightID.length; i++) {
                let ispropenabled: boolean = API.isInteriorPropEnabled(InteriorID, WallLightID[i]);

                if (ispropenabled === true) {
                    API.disableInteriorProp(InteriorID, WallLightID[i]);
                }
            }

            API.enableInteriorProp(InteriorID, "set_lighting_wall_tint02");
            break;

        case 3:
            for (var i = 0; i < WallLightID.length; i++) {
                let ispropenabled: boolean = API.isInteriorPropEnabled(InteriorID, WallLightID[i]);

                if (ispropenabled === true) {
                    API.disableInteriorProp(InteriorID, WallLightID[i]);
                }
            }

            API.enableInteriorProp(InteriorID, "set_lighting_wall_tint03");
            break;

        case 4:
            for (var i = 0; i < WallLightID.length; i++) {
                let ispropenabled: boolean = API.isInteriorPropEnabled(InteriorID, WallLightID[i]);

                if (ispropenabled === true) {
                    API.disableInteriorProp(InteriorID, WallLightID[i]);
                }
            }

            API.enableInteriorProp(InteriorID, "set_lighting_wall_tint04");
            break;

        case 5:
            for (var i = 0; i < WallLightID.length; i++) {
                let ispropenabled: boolean = API.isInteriorPropEnabled(InteriorID, WallLightID[i]);

                if (ispropenabled === true) {
                    API.disableInteriorProp(InteriorID, WallLightID[i]);
                }
            }

            API.enableInteriorProp(InteriorID, "set_lighting_wall_tint05");
            break;

        case 6:
            for (var i = 0; i < WallLightID.length; i++) {
                let ispropenabled: boolean = API.isInteriorPropEnabled(InteriorID, WallLightID[i]);

                if (ispropenabled === true) {
                    API.disableInteriorProp(InteriorID, WallLightID[i]);
                }
            }

            API.enableInteriorProp(InteriorID, "set_lighting_wall_tint06");
            break;

        case 7:
            for (var i = 0; i < WallLightID.length; i++) {
                let ispropenabled: boolean = API.isInteriorPropEnabled(InteriorID, WallLightID[i]);

                if (ispropenabled === true) {
                    API.disableInteriorProp(InteriorID, WallLightID[i]);
                }
            }

            API.enableInteriorProp(InteriorID, "set_lighting_wall_tint07");
            break;

        case 8:
            for (var i = 0; i < WallLightID.length; i++) {
                let ispropenabled: boolean = API.isInteriorPropEnabled(InteriorID, WallLightID[i]);

                if (ispropenabled === true) {
                    API.disableInteriorProp(InteriorID, WallLightID[i]);
                }
            }

            API.enableInteriorProp(InteriorID, "set_lighting_wall_tint08");
            break;

        case 9:
            for (var i = 0; i < WallLightID.length; i++) {
                let ispropenabled: boolean = API.isInteriorPropEnabled(InteriorID, WallLightID[i]);

                if (ispropenabled === true) {
                    API.disableInteriorProp(InteriorID, WallLightID[i]);
                }
            }

            API.enableInteriorProp(InteriorID, "set_lighting_wall_tint09");
            break;
    }
});
HangerWallLightingMenu.OnItemSelect.connect(function (sender, item, index) {
    switch (index) {
        case 0:
            API.closeAllMenus();
            HangerMenu.Visible = true;
            break;

        case 1:
            API.closeAllMenus();
            HangerMenu.Visible = true;
            break;

        case 2:
            API.closeAllMenus();
            HangerMenu.Visible = true;
            break;

        case 3:
            API.closeAllMenus();
            HangerMenu.Visible = true;
            break;

        case 4:
            API.closeAllMenus();
            HangerMenu.Visible = true;
            break;

        case 5:
            API.closeAllMenus();
            HangerMenu.Visible = true;
            break;

        case 6:
            API.closeAllMenus();
            HangerMenu.Visible = true;
            break;

        case 7:
            API.closeAllMenus();
            HangerMenu.Visible = true;
            break;

        case 8:
            API.closeAllMenus();
            HangerMenu.Visible = true;
            break;

        case 9:
            API.closeAllMenus();
            HangerMenu.Visible = true;
            break;
    }
});

FloorTypeMenu.OnIndexChange.connect(function (sender, index) {
    if (index === 0) {
        API.disableInteriorProp(InteriorID, "set_floor_type_2");
        API.enableInteriorProp(InteriorID, "set_floor_type_1");
    }
    else if (index === 1) {
        API.disableInteriorProp(InteriorID, "set_floor_type_1");
        API.enableInteriorProp(InteriorID, "set_floor_type_2");
    }
});
FloorTypeMenu.OnItemSelect.connect(function (sender, item, index) {
    if (index === 0) {
        API.closeAllMenus();
        HangerMenu.Visible = true;
    }
    else if (index === 1) {
        API.closeAllMenus();
        HangerMenu.Visible = true;
    }
});

FloorDecalMenu.OnIndexChange.connect(function (sender, index) {
    switch (index) {
        case 0:
            for (var i = 0; i < FloorDecalID.length; i++) {
                let ispropenabled: boolean = API.isInteriorPropEnabled(InteriorID, FloorDecalID[i]);

                if (ispropenabled === true) {
                    API.disableInteriorProp(InteriorID, WallLightID[i]);
                }
            }

            API.enableInteriorProp(InteriorID, "set_floor_decal_1");
            break;

        case 1:
            for (var i = 0; i < FloorDecalID.length; i++) {
                let ispropenabled: boolean = API.isInteriorPropEnabled(InteriorID, FloorDecalID[i]);

                if (ispropenabled === true) {
                    API.disableInteriorProp(InteriorID, WallLightID[i]);
                }
            }

            API.enableInteriorProp(InteriorID, "set_floor_decal_2");
            break;

        case 2:
            for (var i = 0; i < FloorDecalID.length; i++) {
                let ispropenabled: boolean = API.isInteriorPropEnabled(InteriorID, FloorDecalID[i]);

                if (ispropenabled === true) {
                    API.disableInteriorProp(InteriorID, WallLightID[i]);
                }
            }

            API.enableInteriorProp(InteriorID, "set_floor_decal_3");
            break;

        case 3:
            for (var i = 0; i < FloorDecalID.length; i++) {
                let ispropenabled: boolean = API.isInteriorPropEnabled(InteriorID, FloorDecalID[i]);

                if (ispropenabled === true) {
                    API.disableInteriorProp(InteriorID, WallLightID[i]);
                }
            }

            API.enableInteriorProp(InteriorID, "set_floor_decal_4");
            break;

        case 4:
            for (var i = 0; i < FloorDecalID.length; i++) {
                let ispropenabled: boolean = API.isInteriorPropEnabled(InteriorID, FloorDecalID[i]);

                if (ispropenabled === true) {
                    API.disableInteriorProp(InteriorID, WallLightID[i]);
                }
            }

            API.enableInteriorProp(InteriorID, "set_floor_decal_5");
            break;

        case 5:
            for (var i = 0; i < FloorDecalID.length; i++) {
                let ispropenabled: boolean = API.isInteriorPropEnabled(InteriorID, FloorDecalID[i]);

                if (ispropenabled === true) {
                    API.disableInteriorProp(InteriorID, WallLightID[i]);
                }
            }

            API.enableInteriorProp(InteriorID, "set_floor_decal_6");
            break;

        case 6:
            for (var i = 0; i < FloorDecalID.length; i++) {
                let ispropenabled: boolean = API.isInteriorPropEnabled(InteriorID, FloorDecalID[i]);

                if (ispropenabled === true) {
                    API.disableInteriorProp(InteriorID, WallLightID[i]);
                }
            }

            API.enableInteriorProp(InteriorID, "set_floor_decal_7");
            break;

        case 7:
            for (var i = 0; i < FloorDecalID.length; i++) {
                let ispropenabled: boolean = API.isInteriorPropEnabled(InteriorID, FloorDecalID[i]);

                if (ispropenabled === true) {
                    API.disableInteriorProp(InteriorID, WallLightID[i]);
                }
            }

            API.enableInteriorProp(InteriorID, "set_floor_decal_8");
            break;

        case 8:
            for (var i = 0; i < FloorDecalID.length; i++) {
                let ispropenabled: boolean = API.isInteriorPropEnabled(InteriorID, FloorDecalID[i]);

                if (ispropenabled === true) {
                    API.disableInteriorProp(InteriorID, WallLightID[i]);
                }
            }

            API.enableInteriorProp(InteriorID, "set_floor_decal_9");
            break;
    }

});
FloorDecalMenu.OnItemSelect.connect(function (sender, item, index) {
    switch (index) {
        case 0:
            API.closeAllMenus();
            HangerMenu.Visible = true;
            break;

        case 1:
            API.closeAllMenus();
            HangerMenu.Visible = true;
            break;

        case 2:
            API.closeAllMenus();
            HangerMenu.Visible = true;
            break;

        case 3:
            API.closeAllMenus();
            HangerMenu.Visible = true;
            break;

        case 4:
            API.closeAllMenus();
            HangerMenu.Visible = true;
            break;

        case 5:
            API.closeAllMenus();
            HangerMenu.Visible = true;
            break;

        case 6:
            API.closeAllMenus();
            HangerMenu.Visible = true;
            break;

        case 7:
            API.closeAllMenus();
            HangerMenu.Visible = true;
            break;

        case 8:
            API.closeAllMenus();
            HangerMenu.Visible = true;
            break;
    }
});

HangerOfficeMenu.OnIndexChange.connect(function (sender, index) {
    if (index === 0) {
        API.enableInteriorProp(InteriorID, "set_office_basic");
        API.disableInteriorProp(InteriorID, "set_office_modern");
        API.disableInteriorProp(InteriorID, "set_office_traditional");
    }
    else if (index === 1) {
        API.enableInteriorProp(InteriorID, "set_office_modern");
        API.disableInteriorProp(InteriorID, "set_office_basic");
        API.disableInteriorProp(InteriorID, "set_office_traditional");
    }
    else if (index === 2) {
        API.enableInteriorProp(InteriorID, "set_office_traditional");
        API.disableInteriorProp(InteriorID, "set_office_basic");
        API.disableInteriorProp(InteriorID, "set_office_modern");
    }
});
HangerOfficeMenu.OnItemSelect.connect(function (sender, item, index) {
    if (index === 0) {
        API.closeAllMenus();
        HangerMenu.Visible = true;
    }
    else if (index === 1) {
        API.closeAllMenus();
        HangerMenu.Visible = true;
    }
    else if (index === 2) {
        API.closeAllMenus();
        HangerMenu.Visible = true;
    }
});