/// <reference path ="\types-gt-mp\Definitions\index.d.ts" />
var SkinCam = null;
var MainMenuCam = API.createCamera(new Vector3(-1010, -2695, 33.47642), new Vector3(2.79839826, 0, 147.313782));
var SpawnCamLSIA = API.createCamera(new Vector3(-1054.03, -2426.354, 124.6279), new Vector3(0, 0, -176.8376));
var SpawnCamEVWA = API.createCamera(new Vector3(1089.673, -40.89325, 134.1357), new Vector3(0, 0, -18.08772));
var SpawnCamSandy = API.createCamera(new Vector3(1299.671, 3015.45, 79.41328), new Vector3(0, 0, -43.21368));
var SpawnCamMilitary = API.createCamera(new Vector3(-2392.453, 2952.088, 118.5689), new Vector3(-2.469033, -0.01874625, -7.168303));
var SpawnCamCarrier = API.createCamera(new Vector3(2864.411, -4487.567, 52.46014), new Vector3(0, 0, -126.826));
var SpawnCamStunt = API.createCamera(new Vector3(-110.2435, -1056.438, 297.3595), new Vector3(0, 0, 20.25161));
var SpawnCamLSRescue = API.createCamera(new Vector3(-903.0132, -1591.925, 73.88368), new Vector3(0, 0, -36.79195));
//var SpawnCamSandyRescue = API.createCamera(new Vector3(), new Vector3()); 
var SpawnCamLSCrash = API.createCamera(new Vector3(-1143.78, -2401.625, 32.95598), new Vector3(0, 0, -74.63837));
var SpawnCamSandyCrash = API.createCamera(new Vector3(1870.24, 3624.451, 44.47606), new Vector3(0, 0, 22.7874));
var SpawnCamMilitaryCrash = API.createCamera(new Vector3(-2049.394, 2888.739, 63.46259), new Vector3(0, 0, 133.2738));
var SpawnCamLSSecurity = API.createCamera(new Vector3(-1174.946, -2903.16, 29.45008), new Vector3(0, 0, 33.59291));
//var SpawnCamSandySecurity = API.createCamera(new Vector3(), new Vector3()); //
var SpawnCamLSPassenger = API.createCamera(new Vector3(-940.386, -2278.595, 57.9089), new Vector3(0, 0, -24.36473));
var SpawnCamSandyPassenger = API.createCamera(new Vector3(1663.813, 3582.575, 47.54181), new Vector3(0, 0, 90.85172));
let SkinType = ["Pre-made", "Custom"];
let CustomSkinType = ["Creator", "Spawn"];
let UpperMenu = API.createMenu("Skin Type", 0, 0, 6);
let UpperMenuItems;
let CustomMenu = API.createMenu("Custom Skin", 0, 0, 6);
let CustomMenuItems;
let ClassNames = [
    "Civilian Pilot",
    "Military Pilot",
    "Stunt Pilot",
    "Rescue Team Member",
    "Aircraft Engineer",
    "Medical Team Member",
    "Fire Crew",
    "Airport Security",
    "Air Host",
    "Passenger"
];
let ClassDesc = [
    "Fly commercial aircraft.",
    "Fly military aircraft.",
    "Skydive and stunting.",
    "Rescue people in distress.",
    "Repair and refuel aircraft.",
    "Heal injured people.",
    "Assist crashed aircraft.",
    "Protect people.", "Look after passengers in aircraft.",
    "Fly as a passenger"
];
let SkinNames = [
    "Captain",
    "First Officer",
    "Second Officer",
    "Major",
    "Lieutenant",
    "Subordinate",
    "Stunter",
    "Extreme Stunter",
    "Coastguard",
    "Rescue Team",
    "Aircraft Engineer",
    "Mechanic",
    "Medic",
    "Fire Fighter",
    "Airport Security",
    "Air Marshall",
    "Mall Cop",
    "Air Host",
    "Air Hostess",
    "Passenger 1",
    "Passenger 2",
    "Passenger 3",
    "Passenger 4"
];
let SkinHashNames = [
    "Pilot01SMM",
    "BoatStaff01M",
    "Business02AMY",
    "Pilot01SMY",
    "Pilot02SMM",
    "ArmyMech01SMY",
    "Cyclist01",
    "Motox01AMY",
    "USCG01SMY",
    "TrafficWarden",
    "AirWorkerSMY",
    "Lathandy01SMM",
    "Paramedic01SMM",
    "Fireman01SMY",
    "Security01SMM",
    "HighSec02SMM",
    "Sheriff01SMY",
    "AirHostess01SFY",
    "Hipster03AMY",
    "Denise",
    "Business01AMY",
    "GenFat02AMM",
    "FatWhite01AFM"
];
let SkinItems;
let LocationNames = [
    "Los Santos International",
    "East Vinewood Airfield",
    "Sandy Shores Airport",
    "Fort Zancudo",
    "Aircraft Carrier",
    "Los Santos Rescue",
    "Sandy Shores Rescue",
    "LS International Crash Center",
    "Sandy Shores ER",
    "Fort Zancudo Crash Center",
    "Los Santos International Security",
    "Sandy Shores Police Station",
    "LSIA Hotel",
    "Sandy Shores Motel" //13
];
let LocationItems;
let MainMenu = API.createMenu("Spawn Menu", "Choose you class", 0, 0, 6);
let classItems;
let subMenuCivil = API.createMenu("Civil Pilots", "Choose your skin", 0, 0, 6);
let subMenuCivilSpawn = API.createMenu("Civil Pilot Spawn", "Choose your spawn location", 0, 0, 6);
let subMenuMilitary = API.createMenu("Military Pilots", 0, 0, 6);
let subMenuMilitarySpawn = API.createMenu("Military Pilot Spawn", "Choose your spawn location", 0, 0, 6);
let subMenuStunt = API.createMenu("Stunt Team", 0, 0, 6);
let subMenuStuntSpawn = API.createMenu("Stunt Team Spawn", "Choose your spawn location", 0, 0, 6);
let subMenuRescue = API.createMenu("Rescue Team", 0, 0, 6);
let subMenuRescueSpawn = API.createMenu("Rescue Team Spawn", "Choose your spawn location", 0, 0, 6);
let subMenuRepair = API.createMenu("Aircraft Engineers", 0, 0, 6);
let subMenuRepairSpawn = API.createMenu("Aircraft Engineer Spawn", "Choose your spawn location", 0, 0, 6);
let subMenuMedic = API.createMenu("Medic Team", 0, 0, 6);
let subMenuMedicSpawn = API.createMenu("Medic Team Spawn", "Choose your spawn location", 0, 0, 6);
let subMenuFire = API.createMenu("Fire Fighters", 0, 0, 6);
let subMenuFireSpawn = API.createMenu("Fire Fighter Spawn", "Choose your spawn location", 0, 0, 6);
let subMenuSecurity = API.createMenu("Security Personnel", 0, 0, 6);
let subMenuSecuritySpawn = API.createMenu("Security Personnel Spawn", "Choose your spawn location", 0, 0, 6);
let subMenuHost = API.createMenu("Air Hosts", 0, 0, 6);
let subMenuHostSpawn = API.createMenu("Air Host Spawn", "Choose your spawn location", 0, 0, 6);
let subMenuPassenger = API.createMenu("Passengers", 0, 0, 6);
let subMenuPassengerSpawn = API.createMenu("Passenger Spawn", "Choose your spawn location", 0, 0, 6);
function UpperMenuGeneration() {
    for (var i = 0; i < SkinType.length; i++) {
        UpperMenuItems = API.createMenuItem(SkinType[i], "");
        UpperMenu.AddItem(UpperMenuItems);
        if (i === 0) {
            UpperMenu.BindMenuToItem(MainMenu, UpperMenuItems);
        }
        else if (i === 1) {
            UpperMenu.BindMenuToItem(CustomMenu, UpperMenuItems);
        }
    }
}
function CustomMenuGeneration() {
    for (var i = 0; i < CustomSkinType.length; i++) {
        CustomMenuItems = API.createMenuItem(CustomSkinType[i], "");
        CustomMenu.AddItem(CustomMenuItems);
    }
}
function MainMenuGeneration() {
    API.setMenuBannerTexture(MainMenu, "resource/Banner/spawnui_title_Epsilon.jpg");
    for (var i = 0; i < ClassNames.length; i++) {
        classItems = API.createMenuItem(ClassNames[i], ClassDesc[i]);
        MainMenu.AddItem(classItems);
        switch (i) {
            case 0:
                MainMenu.BindMenuToItem(subMenuCivil, classItems);
                break;
            case 1:
                MainMenu.BindMenuToItem(subMenuMilitary, classItems);
                break;
            case 2:
                MainMenu.BindMenuToItem(subMenuStunt, classItems);
                break;
            case 3:
                MainMenu.BindMenuToItem(subMenuRescue, classItems);
                break;
            case 4:
                MainMenu.BindMenuToItem(subMenuRepair, classItems);
                break;
            case 5:
                MainMenu.BindMenuToItem(subMenuMedic, classItems);
                break;
            case 6:
                MainMenu.BindMenuToItem(subMenuFire, classItems);
                break;
            case 7:
                MainMenu.BindMenuToItem(subMenuSecurity, classItems);
                break;
            case 8:
                MainMenu.BindMenuToItem(subMenuHost, classItems);
                break;
            case 9:
                MainMenu.BindMenuToItem(subMenuPassenger, classItems);
                break;
        }
    }
}
function SkinMenuGeneration() {
    for (var i = 0; i < SkinNames.length; i++) {
        SkinItems = API.createMenuItem(SkinNames[i], "");
        switch (i) {
            case 0:
                subMenuCivil.AddItem(SkinItems);
                subMenuCivil.BindMenuToItem(subMenuCivilSpawn, SkinItems);
                break;
            case 1:
                subMenuCivil.AddItem(SkinItems);
                subMenuCivil.BindMenuToItem(subMenuCivilSpawn, SkinItems);
                break;
            case 2:
                subMenuCivil.AddItem(SkinItems);
                subMenuCivil.BindMenuToItem(subMenuCivilSpawn, SkinItems);
                break;
            case 3:
                subMenuMilitary.AddItem(SkinItems);
                subMenuMilitary.BindMenuToItem(subMenuMilitarySpawn, SkinItems);
                break;
            case 4:
                subMenuMilitary.AddItem(SkinItems);
                subMenuMilitary.BindMenuToItem(subMenuMilitarySpawn, SkinItems);
                break;
            case 5:
                subMenuMilitary.AddItem(SkinItems);
                subMenuMilitary.BindMenuToItem(subMenuMilitarySpawn, SkinItems);
                break;
            case 6:
                subMenuStunt.AddItem(SkinItems);
                subMenuStunt.BindMenuToItem(subMenuStuntSpawn, SkinItems);
                break;
            case 7:
                subMenuStunt.AddItem(SkinItems);
                subMenuStunt.BindMenuToItem(subMenuStuntSpawn, SkinItems);
                break;
            case 8:
                subMenuRescue.AddItem(SkinItems);
                subMenuRescue.BindMenuToItem(subMenuRescueSpawn, SkinItems);
                break;
            case 9:
                subMenuRescue.AddItem(SkinItems);
                subMenuRescue.BindMenuToItem(subMenuRescueSpawn, SkinItems);
                break;
            case 10:
                subMenuRepair.AddItem(SkinItems);
                subMenuRepair.BindMenuToItem(subMenuRepairSpawn, SkinItems);
                break;
            case 11:
                subMenuRepair.AddItem(SkinItems);
                subMenuRepair.BindMenuToItem(subMenuRepairSpawn, SkinItems);
                break;
            case 12:
                subMenuMedic.AddItem(SkinItems);
                subMenuMedic.BindMenuToItem(subMenuMedicSpawn, SkinItems);
                break;
            case 13:
                subMenuFire.AddItem(SkinItems);
                subMenuFire.BindMenuToItem(subMenuFireSpawn, SkinItems);
                break;
            case 14:
                subMenuSecurity.AddItem(SkinItems);
                subMenuSecurity.BindMenuToItem(subMenuSecuritySpawn, SkinItems);
                break;
            case 15:
                subMenuSecurity.AddItem(SkinItems);
                subMenuSecurity.BindMenuToItem(subMenuSecuritySpawn, SkinItems);
                break;
            case 16:
                subMenuSecurity.AddItem(SkinItems);
                subMenuSecurity.BindMenuToItem(subMenuSecuritySpawn, SkinItems);
                break;
            case 17:
                subMenuHost.AddItem(SkinItems);
                subMenuHost.BindMenuToItem(subMenuHostSpawn, SkinItems);
                break;
            case 18:
                subMenuHost.AddItem(SkinItems);
                subMenuHost.BindMenuToItem(subMenuHostSpawn, SkinItems);
                break;
            case 19:
                subMenuPassenger.AddItem(SkinItems);
                subMenuPassenger.BindMenuToItem(subMenuPassengerSpawn, SkinItems);
                break;
            case 20:
                subMenuPassenger.AddItem(SkinItems);
                subMenuPassenger.BindMenuToItem(subMenuPassengerSpawn, SkinItems);
                break;
            case 21:
                subMenuPassenger.AddItem(SkinItems);
                subMenuPassenger.BindMenuToItem(subMenuPassengerSpawn, SkinItems);
                break;
            case 22:
                subMenuPassenger.AddItem(SkinItems);
                subMenuPassenger.BindMenuToItem(subMenuPassengerSpawn, SkinItems);
                break;
        }
    }
}
function SpawnMenuGeneration() {
    subMenuCivilSpawn.AddItem(API.createMenuItem(LocationNames[0], "")); // LSIA
    subMenuCivilSpawn.AddItem(API.createMenuItem(LocationNames[1], "")); // EVWA
    subMenuCivilSpawn.AddItem(API.createMenuItem(LocationNames[2], "")); // Sandy Shores
    subMenuMilitarySpawn.AddItem(API.createMenuItem(LocationNames[3], "")); // Fort Zancudo
    subMenuMilitarySpawn.AddItem(API.createMenuItem(LocationNames[4], "")); // Carrier
    subMenuStuntSpawn.AddItem(API.createMenuItem(LocationNames[1], "")); // EVWA
    subMenuStuntSpawn.AddItem(API.createMenuItem(LocationNames[2], "")); // Sandy Shores
    subMenuRescueSpawn.AddItem(API.createMenuItem(LocationNames[5], "")); // Ls Rescue
    subMenuRescueSpawn.AddItem(API.createMenuItem(LocationNames[6], "")); // Sandy Shores Rescue
    subMenuRepairSpawn.AddItem(API.createMenuItem(LocationNames[0], "")); // LSIA
    subMenuRepairSpawn.AddItem(API.createMenuItem(LocationNames[2], "")); // Sandy Shores
    subMenuRepairSpawn.AddItem(API.createMenuItem(LocationNames[3], "")); // Fort Zancudo
    subMenuRepairSpawn.AddItem(API.createMenuItem(LocationNames[4], "")); // Carrier
    subMenuMedicSpawn.AddItem(API.createMenuItem(LocationNames[7], "")); // LS Medic
    subMenuMedicSpawn.AddItem(API.createMenuItem(LocationNames[8], "")); // Sandy Medical Center
    subMenuMedicSpawn.AddItem(API.createMenuItem(LocationNames[9], "")); // Fort Zancudo Crash Center
    subMenuFireSpawn.AddItem(API.createMenuItem(LocationNames[7], "")); // LS Crash Center
    subMenuFireSpawn.AddItem(API.createMenuItem(LocationNames[8], "")); // Sandy Crash Center
    subMenuFireSpawn.AddItem(API.createMenuItem(LocationNames[9], "")); // Fort Zancudo Crash Center
    subMenuSecuritySpawn.AddItem(API.createMenuItem(LocationNames[10], "")); // LS Security
    subMenuSecuritySpawn.AddItem(API.createMenuItem(LocationNames[11], "")); // Sandy Shores Police Station
    subMenuHostSpawn.AddItem(API.createMenuItem(LocationNames[12], "")); // LS Hotel
    subMenuHostSpawn.AddItem(API.createMenuItem(LocationNames[13], "")); // Sandy Motel
    subMenuPassengerSpawn.AddItem(API.createMenuItem(LocationNames[12], "")); // LS Hotel
    subMenuPassengerSpawn.AddItem(API.createMenuItem(LocationNames[13], "")); // Sandy Motel
}
API.onResourceStart.connect(function () {
    UpperMenuGeneration();
    CustomMenuGeneration();
    MainMenuGeneration();
    SkinMenuGeneration();
    SpawnMenuGeneration();
    SkinCam = API.createCamera(new Vector3(403.0526, -999.3354, -99.00404), new Vector3(0, 0, -1.737708));
});
API.onServerEventTrigger.connect(function (eventName, _arguments) {
    if (eventName === "SpawnMenuStart") {
        let mainCam = API.createCamera(new Vector3(-1010, -2695, 33.47642), new Vector3(2.79839826, 0, 147.313782));
        API.setActiveCamera(mainCam);
        UpperMenu.Visible = true;
        API.setEntitySyncedData(API.getLocalPlayer(), "Spawning", true);
    }
    else if (eventName === "SpawnMenuStop") {
        API.setEntitySyncedData(API.getLocalPlayer(), "Spawning", false);
        API.setActiveCamera(null);
        API.closeAllMenus();
        //API.stopAudio();
        //API.setPlayerNametagVisible(API.getLocalPlayer(), true);
    }
});
API.onKeyUp.connect(function (sender, e) {
    if (e.KeyCode == Keys.Back) {
        let spawning = API.getEntitySyncedData(API.getLocalPlayer(), "Spawning");
        if (spawning === true) {
            API.closeAllMenus();
            MainMenu.Visible = true;
            API.setActiveCamera(MainMenuCam);
        }
    }
});
CustomMenu.OnItemSelect.connect(function (sender, item, index) {
    if (index === 0) {
        API.setPlayerSkin(1885233650);
        API.triggerServerEvent("SendToCreator");
    }
    else if (index === 1) {
        resource.CustomSkinSelector.ClassMenuCreation();
    }
});
MainMenu.OnItemSelect.connect(function (sender, selectedItem, index) {
    switch (index) {
        case 0:
            API.setPlayerSkin(API.pedNameToModel(SkinHashNames[0]));
            API.setEntityPosition(API.getLocalPlayer(), new Vector3(402.8911, -996.9224, -100.00024));
            API.setActiveCamera(SkinCam);
            API.pointCameraAtEntity(SkinCam, API.getLocalPlayer(), new Vector3());
            break;
        case 1:
            API.setPlayerSkin(API.pedNameToModel(SkinHashNames[3]));
            API.setEntityPosition(API.getLocalPlayer(), new Vector3(402.8911, -996.9224, -100.00024));
            API.setActiveCamera(SkinCam);
            API.pointCameraAtEntity(SkinCam, API.getLocalPlayer(), new Vector3());
            break;
        case 2:
            API.setPlayerSkin(API.pedNameToModel(SkinHashNames[6]));
            API.setEntityPosition(API.getLocalPlayer(), new Vector3(402.8911, -996.9224, -100.00024));
            API.setActiveCamera(SkinCam);
            API.pointCameraAtEntity(SkinCam, API.getLocalPlayer(), new Vector3());
            break;
        case 3:
            API.setPlayerSkin(API.pedNameToModel(SkinHashNames[8]));
            API.setEntityPosition(API.getLocalPlayer(), new Vector3(402.8911, -996.9224, -100.00024));
            API.setActiveCamera(SkinCam);
            API.pointCameraAtEntity(SkinCam, API.getLocalPlayer(), new Vector3());
            break;
        case 4:
            API.setPlayerSkin(API.pedNameToModel(SkinHashNames[10]));
            API.setEntityPosition(API.getLocalPlayer(), new Vector3(402.8911, -996.9224, -100.00024));
            API.setActiveCamera(SkinCam);
            API.pointCameraAtEntity(SkinCam, API.getLocalPlayer(), new Vector3());
            break;
        case 5:
            API.setPlayerSkin(API.pedNameToModel(SkinHashNames[12]));
            API.setEntityPosition(API.getLocalPlayer(), new Vector3(402.8911, -996.9224, -100.00024));
            API.setActiveCamera(SkinCam);
            API.pointCameraAtEntity(SkinCam, API.getLocalPlayer(), new Vector3());
            break;
        case 6:
            API.setPlayerSkin(API.pedNameToModel(SkinHashNames[13]));
            API.setEntityPosition(API.getLocalPlayer(), new Vector3(402.8911, -996.9224, -100.00024));
            API.setActiveCamera(SkinCam);
            API.pointCameraAtEntity(SkinCam, API.getLocalPlayer(), new Vector3());
            break;
        case 7:
            API.setPlayerSkin(API.pedNameToModel(SkinHashNames[14]));
            API.setEntityPosition(API.getLocalPlayer(), new Vector3(402.8911, -996.9224, -100.00024));
            API.setActiveCamera(SkinCam);
            API.pointCameraAtEntity(SkinCam, API.getLocalPlayer(), new Vector3());
            break;
        case 8:
            API.setPlayerSkin(API.pedNameToModel(SkinHashNames[17]));
            API.setEntityPosition(API.getLocalPlayer(), new Vector3(402.8911, -996.9224, -100.00024));
            API.setActiveCamera(SkinCam);
            API.pointCameraAtEntity(SkinCam, API.getLocalPlayer(), new Vector3());
            break;
        case 9:
            API.setPlayerSkin(API.pedNameToModel(SkinHashNames[19]));
            API.setEntityPosition(API.getLocalPlayer(), new Vector3(402.8911, -996.9224, -100.00024));
            API.setActiveCamera(SkinCam);
            API.pointCameraAtEntity(SkinCam, API.getLocalPlayer(), new Vector3());
            break;
    }
});
subMenuCivil.OnIndexChange.connect(function (sender, index) {
    if (index === 0) {
        API.setPlayerSkin(API.pedNameToModel(SkinHashNames[0]));
    }
    else if (index === 1) {
        API.setPlayerSkin(API.pedNameToModel(SkinHashNames[1]));
    }
    else if (index === 2) {
        API.setPlayerSkin(API.pedNameToModel(SkinHashNames[2]));
    }
});
subMenuCivil.OnItemSelect.connect(function (sender, selectedItem, index) {
    if (index === 0) {
        API.setPlayerSkin(API.pedNameToModel(SkinHashNames[0]));
        API.setEntityPosition(API.getLocalPlayer(), new Vector3(-1052.03, -2424.354, 50.6279));
        API.setActiveCamera(SpawnCamLSIA);
    }
    else if (index === 1) {
        API.setPlayerSkin(API.pedNameToModel(SkinHashNames[1]));
        API.setEntityPosition(API.getLocalPlayer(), new Vector3(-1052.03, -2424.354, 50.6279));
        API.setActiveCamera(SpawnCamLSIA);
    }
    else if (index === 2) {
        API.setPlayerSkin(API.pedNameToModel(SkinHashNames[2]));
        API.setEntityPosition(API.getLocalPlayer(), new Vector3(-1052.03, -2424.354, 50.6279));
        API.setActiveCamera(SpawnCamLSIA);
    }
});
subMenuCivilSpawn.OnIndexChange.connect(function (sender, index) {
    if (index === 0) {
        API.setEntityPosition(API.getLocalPlayer(), new Vector3(-1052.03, -2424.354, 50.6279));
        API.setActiveCamera(SpawnCamLSIA);
    }
    else if (index === 1) {
        API.setEntityPosition(API.getLocalPlayer(), new Vector3(1087.673, -39.89325, 50.1357));
        API.setActiveCamera(SpawnCamEVWA);
    }
    else if (index === 2) {
        API.setEntityPosition(API.getLocalPlayer(), new Vector3(1297.671, 3012.45, 50.41328));
        API.setActiveCamera(SpawnCamSandy);
    }
});
subMenuCivilSpawn.OnItemSelect.connect(function (sender, item, index) {
    switch (index) {
        case 0:
            API.triggerServerEvent("LSIA", "Civil");
            break;
        case 1:
            API.triggerServerEvent("EVWA", "Civil");
            break;
        case 2:
            API.triggerServerEvent("Sandy", "Civil");
            break;
    }
});
subMenuMilitary.OnIndexChange.connect(function (sender, index) {
    if (index === 0) {
        API.setPlayerSkin(API.pedNameToModel(SkinHashNames[3]));
    }
    else if (index === 1) {
        API.setPlayerSkin(API.pedNameToModel(SkinHashNames[4]));
    }
    else if (index === 2) {
        API.setPlayerSkin(API.pedNameToModel(SkinHashNames[5]));
    }
});
subMenuMilitary.OnItemSelect.connect(function (sender, item, index) {
    if (index === 0) {
        API.setPlayerSkin(API.pedNameToModel(SkinHashNames[3]));
        API.setActiveCamera(SpawnCamMilitary);
    }
    else if (index === 1) {
        API.setPlayerSkin(API.pedNameToModel(SkinHashNames[4]));
        API.setActiveCamera(SpawnCamMilitary);
    }
    else if (index === 2) {
        API.setPlayerSkin(API.pedNameToModel(SkinHashNames[5]));
        API.setActiveCamera(SpawnCamMilitary);
    }
});
subMenuMilitarySpawn.OnIndexChange.connect(function (sender, index) {
    if (index === 0) {
        API.setEntityPosition(API.getLocalPlayer(), new Vector3(-2392.453, 2952.088, 50.5689));
        API.setActiveCamera(SpawnCamMilitary);
    }
    else if (index === 1) {
        API.setEntityPosition(API.getLocalPlayer(), new Vector3(2854.411, -4487.567, 40.46014));
        API.setActiveCamera(SpawnCamCarrier);
    }
});
subMenuMilitarySpawn.OnItemSelect.connect(function (sender, item, index) {
    if (index === 0) {
        API.triggerServerEvent("Military", "Military");
    }
    else if (index === 1) {
        API.triggerServerEvent("Carrier", "Military");
    }
});
subMenuStunt.OnIndexChange.connect(function (sender, index) {
    if (index === 0) {
        API.setPlayerSkin(API.pedNameToModel(SkinHashNames[6]));
    }
    else if (index === 1) {
        API.setPlayerSkin(API.pedNameToModel(SkinHashNames[7]));
    }
});
subMenuStunt.OnItemSelect.connect(function (sender, item, index) {
    if (index === 0) {
        API.setPlayerSkin(API.pedNameToModel(SkinHashNames[6]));
        API.setActiveCamera(SpawnCamEVWA);
    }
    else if (index === 1) {
        API.setPlayerSkin(API.pedNameToModel(SkinHashNames[7]));
        API.setActiveCamera(SpawnCamEVWA);
    }
});
subMenuStuntSpawn.OnIndexChange.connect(function (sender, index) {
    if (index === 0) {
        API.setEntityPosition(API.getLocalPlayer(), new Vector3(1089.673, -40.89325, 50.1357));
        API.setActiveCamera(SpawnCamEVWA);
    }
    else if (index === 1) {
        API.setEntityPosition(API.getLocalPlayer(), new Vector3(1297.671, 3012.45, 50.41328));
        API.setActiveCamera(SpawnCamSandy);
    }
    //else if (index === 2) {
    //}
});
subMenuStuntSpawn.OnItemSelect.connect(function (sender, item, index) {
    if (index === 0) {
        API.triggerServerEvent("EVWA", "Stunt");
    }
    else if (index === 1) {
        API.triggerServerEvent("Sandy", "Stunt");
    }
});
subMenuRescue.OnIndexChange.connect(function (sender, index) {
    if (index === 0) {
        API.setPlayerSkin(API.pedNameToModel(SkinHashNames[8]));
    }
    else if (index === 1) {
        API.setPlayerSkin(API.pedNameToModel(SkinHashNames[9]));
    }
});
subMenuRescue.OnItemSelect.connect(function (sender, item, index) {
    if (index === 0) {
        API.setPlayerSkin(API.pedNameToModel(SkinHashNames[8]));
        API.setActiveCamera(SpawnCamLSRescue);
    }
    else if (index === 1) {
        API.setPlayerSkin(API.pedNameToModel(SkinHashNames[9]));
        API.setActiveCamera(SpawnCamLSRescue);
    }
});
subMenuRescueSpawn.OnIndexChange.connect(function (sender, index) {
    if (index === 0) {
        API.setEntityPosition(API.getLocalPlayer(), new Vector3(-903.0132, -1591.925, 73.88368));
        API.setActiveCamera(SpawnCamLSRescue);
    }
    //else if (index === 1) {
    //}
});
subMenuRescueSpawn.OnItemSelect.connect(function (sender, item, index) {
    if (index === 0) {
        API.triggerServerEvent("LS Rescue", "Rescue");
    }
    //else if (index === 1) {
    //}
});
subMenuRepair.OnIndexChange.connect(function (sender, index) {
    if (index === 0) {
        API.setPlayerSkin(API.pedNameToModel(SkinHashNames[10]));
    }
    else if (index === 1) {
        API.setPlayerSkin(API.pedNameToModel(SkinHashNames[11]));
    }
});
subMenuRepair.OnItemSelect.connect(function (sender, item, index) {
    if (index === 0) {
        API.setPlayerSkin(API.pedNameToModel(SkinHashNames[10]));
        API.setActiveCamera(SpawnCamLSIA);
    }
    else if (index === 1) {
        API.setPlayerSkin(API.pedNameToModel(SkinHashNames[11]));
        API.setActiveCamera(SpawnCamLSIA);
    }
});
subMenuRepairSpawn.OnIndexChange.connect(function (sender, index) {
    if (index === 0) {
        API.setEntityPosition(API.getLocalPlayer(), new Vector3(-1054.03, -2426.354, 50.6279));
        API.setActiveCamera(SpawnCamLSIA);
    }
    else if (index === 1) {
        API.setEntityPosition(API.getLocalPlayer(), new Vector3(1299.671, 3015.45, 179.41328));
        API.setActiveCamera(SpawnCamSandy);
    }
    else if (index === 2) {
        API.setEntityPosition(API.getLocalPlayer(), new Vector3(-2392.453, 2952.088, 50.5689));
        API.setActiveCamera(SpawnCamMilitary);
    }
    else if (index === 3) {
        API.setEntityPosition(API.getLocalPlayer(), new Vector3(2854.411, -4487.567, 40.46014));
        API.setActiveCamera(SpawnCamCarrier);
    }
});
subMenuRepairSpawn.OnItemSelect.connect(function (sender, item, index) {
    if (index === 0) {
        API.triggerServerEvent("LSIA", "Repair");
    }
    else if (index === 1) {
        API.triggerServerEvent("Sandy", "Repair");
    }
    else if (index === 2) {
        API.triggerServerEvent("Military", "Repair");
    }
});
subMenuMedic.OnIndexChange.connect(function (sender, index) {
    if (index === 0) {
        API.setPlayerSkin(API.pedNameToModel(SkinHashNames[12]));
    }
});
subMenuMedic.OnItemSelect.connect(function (sender, item, index) {
    if (index === 0) {
        API.setPlayerSkin(API.pedNameToModel(SkinHashNames[12]));
        API.setActiveCamera(SpawnCamLSCrash);
    }
});
subMenuMedicSpawn.OnIndexChange.connect(function (sender, index) {
    if (index === 0) {
        API.setEntityPosition(API.getLocalPlayer(), new Vector3(-1143.78, -2401.625, 132.95598));
        API.setActiveCamera(SpawnCamLSCrash);
    }
    else if (index === 1) {
        API.setEntityPosition(API.getLocalPlayer(), new Vector3(1870.24, 3624.451, 144.47606));
        API.setActiveCamera(SpawnCamSandyCrash);
    }
    else if (index === 2) {
        API.setEntityPosition(API.getLocalPlayer(), new Vector3(-2049.394, 2888.739, 163.46259));
        API.setActiveCamera(SpawnCamMilitaryCrash);
    }
});
subMenuMedicSpawn.OnItemSelect.connect(function (sender, item, index) {
    if (index === 0) {
        API.triggerServerEvent("LS Medic", "Medic");
    }
    else if (index === 1) {
        API.triggerServerEvent("Sandy Crash", "Medic");
    }
    else if (index === 2) {
        API.triggerServerEvent("Military Crash", "Medic");
    }
});
subMenuFire.OnIndexChange.connect(function (sender, index) {
    if (index === 0) {
        API.setPlayerSkin(API.pedNameToModel(SkinHashNames[13]));
    }
});
subMenuFire.OnItemSelect.connect(function (sender, item, index) {
    if (index === 0) {
        API.setPlayerSkin(API.pedNameToModel(SkinHashNames[13]));
        API.setActiveCamera(SpawnCamLSCrash);
    }
});
subMenuFireSpawn.OnIndexChange.connect(function (sender, index) {
    switch (index) {
        case 0:
            API.setEntityPosition(API.getLocalPlayer(), new Vector3(-1143.78, -2401.625, 132.95598));
            API.setActiveCamera(SpawnCamLSCrash);
            break;
        case 1:
            API.setEntityPosition(API.getLocalPlayer(), new Vector3(1870.24, 3624.451, 144.47606));
            API.setActiveCamera(SpawnCamSandyCrash);
            break;
        case 2:
            API.setEntityPosition(API.getLocalPlayer(), new Vector3(-2049.394, 2888.739, 163.46259));
            API.setActiveCamera(SpawnCamMilitaryCrash);
            break;
    }
});
subMenuFireSpawn.OnItemSelect.connect(function (sender, item, index) {
    switch (index) {
        case 0:
            API.triggerServerEvent("LS Crash", "Fire");
            break;
        case 1:
            API.triggerServerEvent("Sandy Crash", "Fire");
            break;
        case 2:
            API.triggerServerEvent("Military Crash", "Fire");
            break;
    }
});
subMenuSecurity.OnIndexChange.connect(function (sender, index) {
    if (index === 0) {
        API.setPlayerSkin(API.pedNameToModel(SkinHashNames[14]));
    }
    else if (index === 1) {
        API.setPlayerSkin(API.pedNameToModel(SkinHashNames[15]));
    }
    else if (index === 2) {
        API.setPlayerSkin(API.pedNameToModel(SkinHashNames[16]));
    }
});
subMenuSecurity.OnItemSelect.connect(function (sender, item, index) {
    if (index === 0) {
        API.setPlayerSkin(API.pedNameToModel(SkinHashNames[14]));
        API.setActiveCamera(SpawnCamLSSecurity);
    }
    else if (index === 1) {
        API.setPlayerSkin(API.pedNameToModel(SkinHashNames[15]));
        API.setActiveCamera(SpawnCamLSSecurity);
    }
    else if (index === 2) {
        API.setPlayerSkin(API.pedNameToModel(SkinHashNames[16]));
        API.setActiveCamera(SpawnCamLSSecurity);
    }
});
subMenuSecuritySpawn.OnIndexChange.connect(function (sender, index) {
    switch (index) {
        case 0:
            API.setEntityPosition(API.getLocalPlayer(), new Vector3(-1174.946, -2903.16, 129.45008));
            API.setActiveCamera(SpawnCamLSSecurity);
            break;
        case 1:
            API.setEntityPosition(API.getLocalPlayer(), new Vector3(1870.24, 3624.451, 144.47606));
            API.setActiveCamera(SpawnCamSandyCrash);
            break;
    }
});
subMenuSecuritySpawn.OnItemSelect.connect(function (sender, item, index) {
    switch (index) {
        case 0:
            API.triggerServerEvent("LS Security", "Security");
            break;
        case 1:
            API.triggerServerEvent("Sandy Crash", "Security");
            break;
    }
});
subMenuHost.OnIndexChange.connect(function (sender, index) {
    if (index === 0) {
        API.setPlayerSkin(API.pedNameToModel(SkinHashNames[17]));
    }
    else if (index === 1) {
        API.setPlayerSkin(API.pedNameToModel(SkinHashNames[18]));
    }
});
subMenuHost.OnItemSelect.connect(function (sender, item, index) {
    if (index === 0) {
        API.setPlayerSkin(API.pedNameToModel(SkinHashNames[17]));
        API.setActiveCamera(SpawnCamLSPassenger);
    }
    else if (index === 1) {
        API.setPlayerSkin(API.pedNameToModel(SkinHashNames[18]));
        API.setActiveCamera(SpawnCamLSPassenger);
    }
});
subMenuHostSpawn.OnIndexChange.connect(function (sender, index) {
    switch (index) {
        case 0:
            API.setEntityPosition(API.getLocalPlayer(), new Vector3(-940.386, -2278.595, 157.9089));
            API.setActiveCamera(SpawnCamLSPassenger);
            break;
        case 1:
            API.setEntityPosition(API.getLocalPlayer(), new Vector3(1663.813, 3582.575, 147.54181));
            API.setActiveCamera(SpawnCamSandyPassenger);
            break;
    }
});
subMenuHostSpawn.OnItemSelect.connect(function (sender, item, index) {
    switch (index) {
        case 0:
            API.triggerServerEvent("LS Passenger", "Host");
            break;
        case 1:
            API.triggerServerEvent("Sandy Passenger", "Host");
            break;
    }
});
subMenuPassenger.OnIndexChange.connect(function (sender, index) {
    if (index === 0) {
        API.setPlayerSkin(API.pedNameToModel(SkinHashNames[19]));
    }
    else if (index === 1) {
        API.setPlayerSkin(API.pedNameToModel(SkinHashNames[20]));
    }
    else if (index === 2) {
        API.setPlayerSkin(API.pedNameToModel(SkinHashNames[21]));
    }
    else if (index === 3) {
        API.setPlayerSkin(API.pedNameToModel(SkinHashNames[22]));
    }
});
subMenuPassenger.OnItemSelect.connect(function (sender, item, index) {
    if (index === 0) {
        API.setPlayerSkin(API.pedNameToModel(SkinHashNames[19]));
        API.setActiveCamera(SpawnCamLSPassenger);
    }
    else if (index === 1) {
        API.setPlayerSkin(API.pedNameToModel(SkinHashNames[20]));
        API.setActiveCamera(SpawnCamLSPassenger);
    }
    else if (index === 2) {
        API.setPlayerSkin(API.pedNameToModel(SkinHashNames[21]));
        API.setActiveCamera(SpawnCamLSPassenger);
    }
    else if (index === 3) {
        API.setPlayerSkin(API.pedNameToModel(SkinHashNames[22]));
        API.setActiveCamera(SpawnCamLSPassenger);
    }
});
subMenuPassengerSpawn.OnIndexChange.connect(function (sender, index) {
    switch (index) {
        case 0:
            API.setEntityPosition(API.getLocalPlayer(), new Vector3(-940.386, -2278.595, 157.9089));
            API.setActiveCamera(SpawnCamLSPassenger);
            break;
        case 1:
            API.setEntityPosition(API.getLocalPlayer(), new Vector3(1663.813, 3582.575, 147.54181));
            API.setActiveCamera(SpawnCamSandyPassenger);
            break;
    }
});
subMenuPassengerSpawn.OnItemSelect.connect(function (sender, item, index) {
    switch (index) {
        case 0:
            API.triggerServerEvent("LS Passenger", "Passenger");
            break;
        case 1:
            API.triggerServerEvent("Sandy Passenger", "Passenger");
            break;
    }
});
