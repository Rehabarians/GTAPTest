/// <reference path ="\types-gt-mp\index.d.ts" />

var SkinID = null;
var SpawnID = null;

var mainCam = null;

var skinCam = API.createCamera(new Vector3(403.0526, -999.3354, -99.00404), new Vector3(0, 0, -1.737708));

var spawnCamLSIA = API.createCamera(new Vector3(-1054.03, -2426.354, 124.6279), new Vector3(0, 0, -176.8376));
var spawnCamLSL = API.createCamera(new Vector3(1089.673, -40.89325, 134.1357), new Vector3(0, 0, -18.08772));
var spawnCamSandy = API.createCamera(new Vector3(1299.671, 3015.45, 79.41328), new Vector3(0, 0, -43.21368));
var spawnCamMilitary = API.createCamera(new Vector3(-2392.453, 2952.088, 118.5689), new Vector3(-2.469033, -0.01874625, -7.168303));
//var spawnCamCarrier = API.createCamera(new Vector3(), new Vector3()); 
var spawnCamStunt = API.createCamera(new Vector3(-110.2435, -1056.438, 297.3595), new Vector3(0, 0, 20.25161));
var spawnCamLSRescue = API.createCamera(new Vector3(-903.0132, -1591.925, 73.88368), new Vector3(0, 0, -36.79195));
//var spawnCamSandyRescue = API.createCamera(new Vector3(), new Vector3()); 
var spawnCamLSCrash = API.createCamera(new Vector3(-1143.78, -2401.625, 32.95598), new Vector3(0, 0, -74.63837));
var spawnCamSandyCrash = API.createCamera(new Vector3(1870.24, 3624.451, 44.47606), new Vector3(0, 0, 22.7874));
var spawnCamMilitaryCrash = API.createCamera(new Vector3(-2049.394, 2888.739, 63.46259), new Vector3(0, 0, 133.2738));
var spawnCamLSSecurity = API.createCamera(new Vector3(-1174.946, -2903.16, 29.45008), new Vector3(0, 0, 33.59291));
//var spawnCamSandySecurity = API.createCamera(new Vector3(), new Vector3()); //
var spawnCamLSPassenger = API.createCamera(new Vector3(-940.386, -2278.595, 57.9089), new Vector3(0, 0, -24.36473));
var spawnCamSandyPassenger = API.createCamera(new Vector3(1663.813, 3582.575, 47.54181), new Vector3(0, 0, 90.85172));

var spawnMenu = null;

var menuPool = null;

var classMenu = null;
var classes = ["Civilian Pilot", "Military Pilot", "Stunt Pilot", "Rescue Team Member", "Aircraft Engineer", "Medical Team Member", "Fire Crew", "Airport Security", "Air Host", "Passenger"];

var civilSkinMenu = null;
var civilSpawnMenu = null;
var civilSkin = ["Captain", "First Officer", "Second Officer"];
var civilSpawn = ["Los Santos International", "East Vinewood Airport", "Sandy Shores Airfield"];

var militarySkinMenu = null;
var militarySpawnMenu = null;
var militarySkin = ["Major", "Lieutenant", "Subordiante"];
var militarySpawn = ["Military Base"];//, "Aircraft Carrier"]; 

var stuntSkinMenu = null;
var stuntSpawnMenu = null;
var stuntSkin = ["Stunter", "Extreme Stunter"];
var stuntSpawn = ["East Vinewood Airport", "Sandy Shores Airfield", "Base Jump"];

var rescueSkinMenu = null;
var rescueSpawnMenu = null;
var rescueSkin = ["Coastguard", "Rescue Team"];
var rescueSpawn = ["Los Santos Rescue"];//, "Sandy Shores Rescue"];

var repairSkinMenu = null;
var repairSpawnMenu = null;
var repairSkin = ["Aircraft Engineer", "Mechanic"];
var repairSpawn = ["Los Santos International Airport", "Sandy Shores Airfield", "Military Base"];//, "Carrier"];

var medicSkinMenu = null;
var medicSpawnMenu = null;
var medicSkin = ["Paramedic"];
var medicSpawn = ["LS International Crash Center", "Sandy Shores ER", "MB Crash Center"];//, "Carrier"];

var fireSkinMenu = null;
var fireSpawnMenu = null;
var fireSkin = ["Fire Crew"];
var fireSpawn = ["LS International Crash Center", "Sandy Shores ER", "MB Crash Center"];

var securitySkinMenu = null;
var securitySpawnMenu = null;
var securitySkin = ["Airport Security", "Air Marshall", "Mall Cop"];
var securitySpawn = ["LSIA Security", "Sandy Shores Police Station"];

var hostSkinMenu = null;
var hostSpawnMenu = null;
var hostSkin = ["Air Hostess", "Air Host"];
var hostSpawn = ["Los Santos International Airport", "Sandy Shores Airfield"];

var passengerSkinMenu = null;
var passengerSpawnMenu = null;
var passengerSkin = ["Passenger Skin 1", "Passenger Skin 2", "Passenger Skin 3", "Passenegr Skin 4"];
var passengerSpawn = ["LSIA Hotel", "East Vinewood Airport", "Sandy Shores Motel"];

API.onUpdate.connect(function () {
    if (menuPool != null) {
        menuPool.ProcessMenus();
    }
});

API.onResourceStart.connect(function () {

    menuPool = API.getMenuPool();

    createClassMenu();
    createCivilSkinMenu();
    createMilitarySkinMenu();
    createStuntSkinMenu();
    createRescueSkinMenu();
    createRepairSkinMenu();
    createMedicSkinMenu();
    createFireSkinMenu();
    createSecuritySkinMenu();
    createHostSkinMenu();
    createPassengerSkinMenu();

    createSpawnSelectorCivil();
    createSpawnSelectorMilitary();
    createSpawnSelectorStunt();
    createSpawnSelectorRescue();
    createSpawnSelectorRepair();
    createSpawnSelectorMedic();
    createSpawnSelectorFire();
    createSpawnSelectorSecurity();
    createSpawnSelectorHost();
    createSpawnSelectorPassenger();
});

API.onServerEventTrigger.connect(function (name, args) {

    if (name === "SpawnMenuStart") {

        mainCam = API.createCamera(new Vector3(-1010, -2695, 33.47642), new Vector3(2.79839826, 0, 147.313782));
        //API.pointCameraAtEntity(mainCam, API.getLocalPlayer(), new Vector3(0, 0, 0));
        API.setActiveCamera(mainCam);

        classMenu.Visible = true;

        API.setEntitySyncedData(API.getLocalPlayer(), "Spawning", true);
    }

    else if (name === "SpawnMenuStop") {

        API.setActiveCamera(null);
        classMenu.Visible = false;
        API.closeAllMenus();
        //API.stopAudio();

        //API.setPlayerNametagVisible(API.getLocalPlayer(), true);
        API.setEntitySyncedData(API.getLocalPlayer(), "Spawning", false);
    }
});

API.onKeyUp.connect(function (sender, e) {
    if (e.KeyCode == Keys.Back) {
        var spawning = API.getEntitySyncedData(API.getLocalPlayer(), "Spawning");
        if (spawning == true) {
            classMenu.Visible = true;
        }
    }
});

function createClassMenu() {

    classMenu = API.createMenu("GTA Pilots", "Class Selection", 0, 0, 6);

    for (var i = 0; i < classes.length; i++) {

        classMenu.AddItem(API.createMenuItem(classes[i], ""));
    }

    classMenu.CurrentSelection = 0;
    menuPool.Add(classMenu);
    classMenu.Visible = false;


    classMenu.OnItemSelect.connect(function (sender, item, index) {

        switch (index) {
            case 0:
                openCivilSkinMenu();
                API.setEntitySyncedData(API.getLocalPlayer(), "Class", "Civil");
                API.triggerServerEvent("SkinCam");
                API.setActiveCamera(skinCam);
                break;

            case 1:
                openMilitarySkinMenu();
                API.setEntitySyncedData(API.getLocalPlayer(), "Class", "Military");
                API.triggerServerEvent("SkinCam");
                API.setActiveCamera(skinCam);
                break;

            case 2:
                openStuntSkinMenu();
                API.setEntitySyncedData(API.getLocalPlayer(), "Class", "Stunt");
                API.triggerServerEvent("SkinCam");
                API.setActiveCamera(skinCam);
                break;

            case 3:
                openRescueSkinMenu();
                API.setEntitySyncedData(API.getLocalPlayer(), "Class", "Rescue");
                API.triggerServerEvent("SkinCam");
                API.setActiveCamera(skinCam);
                break;

            case 4:
                openRepairSkinMenu();
                API.setEntitySyncedData(API.getLocalPlayer(), "Class", "Repair");
                API.triggerServerEvent("SkinCam");
                API.setActiveCamera(skinCam);
                break;

            case 5:
                openMedicSkinMenu();
                API.setEntitySyncedData(API.getLocalPlayer(), "Class", "Medic");
                API.triggerServerEvent("SkinCam");
                API.setActiveCamera(skinCam);
                break;

            case 6:
                openFireSkinMenu();
                API.setEntitySyncedData(API.getLocalPlayer(), "Class", "Fire");
                API.triggerServerEvent("SkinCam");
                API.setActiveCamera(skinCam);
                break;

            case 7:
                openSecuritySkinMenu();
                API.setEntitySyncedData(API.getLocalPlayer(), "Class", "Security");
                API.triggerServerEvent("SkinCam");
                API.setActiveCamera(skinCam);
                break;

            case 8:
                openHostSkinMenu();
                API.setEntitySyncedData(API.getLocalPlayer(), "Class", "Host");
                API.triggerServerEvent("SkinCam");
                API.setActiveCamera(skinCam);
                break;

            case 9:
                openPassengerSkinMenu();
                API.setEntitySyncedData(API.getLocalPlayer(), "Class", "Passenger");
                API.triggerServerEvent("SkinCam");
                API.setActiveCamera(skinCam);
                break;
        }
    });
}

function createCivilSkinMenu() {

    civilSkinMenu = API.createMenu("Civil Pilots", "Choose civil pilot skin", 0, 0, 6);

    for (var a = 0; a < civilSkin.length; a++) {
        civilSkinMenu.AddItem(API.createMenuItem(civilSkin[a], ""));
    }

    civilSkinMenu.CurrentSelection = 0;

    menuPool.Add(civilSkinMenu);
    civilSkinMenu.Visible = false;

    civilSkinMenu.OnIndexChange.connect(function (sender, index) {
        switch (index) {
            case 0:
                API.setPlayerSkin(-413447396);
                break;
            case 1:
                API.setPlayerSkin(-933295480);
                break;
            case 2:
                API.setPlayerSkin(-1280051738);
                break;
        }

    });

    civilSkinMenu.OnItemSelect.connect(function (sender, item, index) {

        switch (index) {
            case 0:
                SkinID = -413447396;
                API.setEntitySyncedData(API.getLocalPlayer(), "SkinID", SkinID);
                API.setPlayerSkin(-413447396);
                openSpawnSelectorCivil();
                break;
            case 1:
                SkinID = -933295480;
                API.setEntitySyncedData(API.getLocalPlayer(), "SkinID", SkinID);
                API.setPlayerSkin(-933295480);
                openSpawnSelectorCivil();
                break;
            case 2:           
                SkinID = -1280051738;
                API.setEntitySyncedData(API.getLocalPlayer(), "SkinID", SkinID);
                API.setPlayerSkin(-1280051738);
                openSpawnSelectorCivil();
                break;
        }
    });
}

function createSpawnSelectorCivil() {

    civilSpawnMenu = API.createMenu("Civil Pilots Spawn", "Choose your spawn location", 0, 0, 6);

    for (var a = 0; a < civilSpawn.length; a++) {
        civilSpawnMenu.AddItem(API.createMenuItem(civilSpawn[a], ""));
    }

    civilSpawnMenu.CurrentSelection = 0;
    menuPool.Add(civilSpawnMenu);
    civilSpawnMenu.Visible = false;

    civilSpawnMenu.OnIndexChange.connect(function (sender, index) {

        switch (index) {
            case 0:
                API.setEntityPosition(API.getLocalPlayer(), new Vector3(-1052.03, -2424.354, 50.6279));
                API.setActiveCamera(spawnCamLSIA);
                break;
            case 1:
                API.setEntityPosition(API.getLocalPlayer(), new Vector3(1087.673, -39.89325, 50.1357));
                API.setActiveCamera(spawnCamLSL);           
                break;
            case 2:
                API.setEntityPosition(API.getLocalPlayer(), new Vector3(1297.671, 3012.45, 50.41328));
                API.setActiveCamera(spawnCamSandy);
                break;
        }
    });

    civilSpawnMenu.OnItemSelect.connect(function (sender, item, index) {

        switch (index) {
            case 0:
                SpawnID = "LSIA"
                API.setEntitySyncedData(API.getLocalPlayer(), "SpawnID", SpawnID);
                API.triggerServerEvent("LSIA");
                API.triggerServerEvent("skin_select_accept");
                break;
            case 1:
                SpawnID = "LSL"
                API.setEntitySyncedData(API.getLocalPlayer(), "SpawnID", SpawnID);
                API.triggerServerEvent("LSL");
                API.triggerServerEvent("skin_select_accept");
                break;
            case 2:
                SpawnID = "Sandy"
                API.setEntitySyncedData(API.getLocalPlayer(), "SpawnID", SpawnID);
                API.triggerServerEvent("Sandy");
                API.triggerServerEvent("skin_select_accept");
                break;
        }
    });
}

function openCivilSkinMenu() {

    API.setPlayerSkin(-413447396);
    classMenu.Visible = false;
    civilSkinMenu.Visible = true;
}

function openSpawnSelectorCivil() {

    API.setEntityPosition(API.getLocalPlayer(), new Vector3(-1052.03, -2424.354, 50.6279));
    API.setActiveCamera(spawnCamLSIA);

    civilSkinMenu.Visible = false;
    civilSpawnMenu.Visible = true;
}

function createMilitarySkinMenu() {

    militarySkinMenu = API.createMenu("Military Pilots", "Choose military pilot skin", 0, 0, 6);

    for (var a = 0; a < militarySkin.length; a++) {
        militarySkinMenu.AddItem(API.createMenuItem(militarySkin[a], ""));
    }

    militarySkinMenu.CurrentSelection = 0;

    menuPool.Add(militarySkinMenu);
    militarySkinMenu.Visible = false;

    militarySkinMenu.OnIndexChange.connect(function (sender, index) {
        switch (index) {
            case 0:
                API.setPlayerSkin(-1422914553);
                break;
            case 1:
                API.setPlayerSkin(-163714847);
                break;
            case 2:
                API.setPlayerSkin(1657546978);
                break;
        }

    });

    militarySkinMenu.OnItemSelect.connect(function (sender, item, index) {

        switch (index) {
            case 0:
                openSpawnSelectorMilitary();
                SkinID = -1422914553;
                API.setEntitySyncedData(API.getLocalPlayer(), "SkinID", SkinID);
                API.setPlayerSkin(-1422914553);
                break;
            case 1:
                openSpawnSelectorMilitary();
                SkinID = -163714847;
                API.setEntitySyncedData(API.getLocalPlayer(), "SkinID", SkinID);
                API.setPlayerSkin(-163714847);
                break;
            case 2:
                openSpawnSelectorMilitary();
                SkinID = 1657546978;
                API.setEntitySyncedData(API.getLocalPlayer(), "SkinID", SkinID);
                API.setPlayerSkin(1657546978);
                break;
        }
    });
}

function createSpawnSelectorMilitary() {

    militarySpawnMenu = API.createMenu("Military Pilots Spawn", "Choose military pilot spawn location", 0, 0, 6);

    for (var a = 0; a < militarySpawn.length; a++) {
        militarySpawnMenu.AddItem(API.createMenuItem(militarySpawn[a], ""));
    }

    militarySpawnMenu.CurrentSelection = 0;
    menuPool.Add(militarySpawnMenu);
    militarySpawnMenu.Visible = false;

    militarySpawnMenu.OnIndexChange.connect(function (sender, index) {
        switch (index) {
            case 0:
                API.setEntityPosition(API.getLocalPlayer(), new Vector3(-2392.453, 2952.088, 50.5689));
                API.setActiveCamera(spawnCamMilitary);
                break;
            //case 1:
            //    API.setActiveCamera(spawnCamCarrier);
            //    break;

        }

    });

    militarySpawnMenu.OnItemSelect.connect(function (sender, item, index) {

        switch (index) {
            case 0:
                SpawnID = "Military"
                API.setEntitySyncedData(API.getLocalPlayer(), "SpawnID", SpawnID);
                API.triggerServerEvent("Military");
                API.triggerServerEvent("skin_select_accept");
                break;
            //case 1:
            //    SpawnID = "Carrier"
            //    API.setEntitySyncedData(API.getLocalPlayer(), "SpawnID", SpawnID);
            //    break;

        }
    });
}

function openMilitarySkinMenu() {

    API.setPlayerSkin(-1422914553);
    classMenu.Visible = false;
    militarySkinMenu.Visible = true;
}

function openSpawnSelectorMilitary() {

    API.setEntityPosition(API.getLocalPlayer(), new Vector3(-2392.453, 2952.088, 118.5689));
    API.setActiveCamera(spawnCamMilitary);

    militarySkinMenu.Visible = false;
    militarySpawnMenu.Visible = true;
}

function createStuntSkinMenu() {

    stuntSkinMenu = API.createMenu("Stunt Pilots", "Choose stunt pilot skin", 0, 0, 6);

    for (var a = 0; a < stuntSkin.length; a++) {
        stuntSkinMenu.AddItem(API.createMenuItem(stuntSkin[a], ""));
    }

    stuntSkinMenu.CurrentSelection = 0;
    API.setPlayerSkin(755956971);
    menuPool.Add(stuntSkinMenu);
    stuntSkinMenu.Visible = false;

    stuntSkinMenu.OnIndexChange.connect(function (sender, index) {

        switch (index) {
            case 0:
                API.setPlayerSkin(755956971);
                break;

            case 1:
                API.setPlayerSkin(1694362237);
                break;
        }
    });

    stuntSkinMenu.OnItemSelect.connect(function (sender, item, index) {

        switch (index) {
            case 0:
                openSpawnSelectorStunt();
                SkinID = 755956971;
                API.setEntitySyncedData(API.getLocalPlayer(), "SkinID", SkinID);
                API.setPlayerSkin(755956971)
                break;
            case 1:
                openSpawnSelectorStunt();
                SkinID = 1694362237;
                API.setEntitySyncedData(API.getLocalPlayer(), "SkinID", SkinID);
                API.setPlayerSkin(755956971)
                break;
        }
    });
}

function createSpawnSelectorStunt() {

    stuntSpawnMenu = API.createMenu("Stunt Pilots Spawn", "Choose stunt pilot spawn location", 0, 0, 6);

    for (var a = 0; a < stuntSpawn.length; a++) {
        stuntSpawnMenu.AddItem(API.createMenuItem(stuntSpawn[a], ""));
    }

    stuntSpawnMenu.CurrentSelection = 0;
    menuPool.Add(stuntSpawnMenu);
    stuntSpawnMenu.Visible = false;

    stuntSpawnMenu.OnIndexChange.connect(function (sender, index) {

        switch (index) {
            case 0:
                API.setEntityPosition(API.getLocalPlayer(), new Vector3(1089.673, -40.89325, 50.1357));
                API.setActiveCamera(spawnCamLSL);
                break;
            case 1:
                API.setEntityPosition(API.getLocalPlayer(), new Vector3(1299.671, 3015.45, 50.1357));
                API.setActiveCamera(spawnCamSandy);
                break;
            case 2:
                API.setEntityPosition(API.getLocalPlayer(), new Vector3(-110.2435, -1056.438, 50.1357));
                API.setActiveCamera(spawnCamStunt);
                break;
        }
    });

    stuntSpawnMenu.OnItemSelect.connect(function (sender, item, index) {

        switch (index) {
            case 0:
                SpawnID = "LSL"
                API.setEntitySyncedData(API.getLocalPlayer(), "SpawnID", SpawnID);
                API.triggerServerEvent("LSL");
                API.triggerServerEvent("skin_select_accept");
                break;
            case 1:
                SpawnID = "Sandy"
                API.setEntitySyncedData(API.getLocalPlayer(), "SpawnID", SpawnID);
                API.triggerServerEvent("Sandy");
                API.triggerServerEvent("skin_select_accept");
                break;
            case 2:
                SpawnID = "Base Jump"
                API.setEntitySyncedData(API.getLocalPlayer(), "SpawnID", SpawnID);
                API.triggerServerEvent("Base Jump");
                API.triggerServerEvent("skin_select_accept");
                break;
        }
    });
}

function openStuntSkinMenu() {

    API.setPlayerSkin(755956971);
    classMenu.Visible = false;
    stuntSkinMenu.Visible = true;
}

function openSpawnSelectorStunt() {

    API.setEntityPosition(API.getLocalPlayer(), new Vector3(1089.673, -40.89325, 50.1357));
    API.setActiveCamera(spawnCamLSL);
    stuntSkinMenu.Visible = false;
    stuntSpawnMenu.Visible = true;
}

function createRescueSkinMenu() {

    rescueSkinMenu = API.createMenu("Rescue Team Member", "Choose rescue team skin", 0, 0, 6);

    for (var a = 0; a < rescueSkin.length; a++) {
        rescueSkinMenu.AddItem(API.createMenuItem(rescueSkin[a], ""));
    }

    rescueSkinMenu.CurrentSelection = 0;
    menuPool.Add(rescueSkinMenu);
    rescueSkinMenu.Visible = false;

    rescueSkinMenu.OnIndexChange.connect(function (sender, index) {
        switch (index) {
            case 0:
                API.setPlayerSkin(-905948951);
                break;

            case 1:
                API.setPlayerSkin(1461287021);
                break;

        }
    });

    rescueSkinMenu.OnItemSelect.connect(function (sender, item, index) {

        switch (index) {
            case 0:
                openSpawnSelectorRescue();
                SkinID = -905948951;
                API.setEntitySyncedData(API.getLocalPlayer(), "SkinID", SkinID);
                API.setPlayerSkin(-905948951);
                break;
            case 1:
                openSpawnSelectorRescue();
                SkinID = -905948951;
                API.setEntitySyncedData(API.getLocalPlayer(), "SkinID", SkinID);
                API.setPlayerSkin(1461287021);
                break;
        }
    });
}

function createSpawnSelectorRescue() {

    rescueSpawnMenu = API.createMenu("Rescue Team Spawn", "Choose rescue team spawn location", 0, 0, 6);

    for (var a = 0; a < rescueSpawn.length; a++) {
        rescueSpawnMenu.AddItem(API.createMenuItem(rescueSpawn[a], ""));
    }

    rescueSpawnMenu.CurrentSelection = 0;
    menuPool.Add(rescueSpawnMenu);
    rescueSpawnMenu.Visible = false;

    rescueSpawnMenu.OnIndexChange.connect(function (sender, index) {
        switch (index) {
            case 0:
                API.setEntityPosition(API.getLocalPlayer(), new Vector3(-903.0132, -1591.925, 73.88368));
                API.setActiveCamera(spawnCamLSRescue);
                break;
            //case 1:
            //    break;
        }
    });

    rescueSpawnMenu.OnItemSelect.connect(function (sender, item, index) {

        switch (index) {
            case 0:
                SpawnID = "LS Rescue";
                API.setEntitySyncedData(API.getLocalPlayer(), "SpawnID", SpawnID);
                API.triggerServerEvent("LS Rescue");
                API.triggerServerEvent("skin_select_accept");
                break;
            //case 1:
            //    SpawnID = "Sandy Crash;
            //    API.setEntitySyncedData(API.getLocalPlayer(), "SpawnID", SpawnID);
            //    API.triggerServerEvent("Sandy Rescue");
            //    API.triggerServerEvent("skin_select_accept");
            //    break;
        }
    });
}

function openRescueSkinMenu() {

    API.setPlayerSkin(-905948951);
    classMenu.Visible = false;
    rescueSkinMenu.Visible = true;
}

function openSpawnSelectorRescue() {

    API.setEntityPosition(API.getLocalPlayer(), new Vector3(-903.0132, -1591.925, 173.88368));
    API.setActiveCamera(spawnCamLSRescue);

    rescueSkinMenu.Visible = false;
    rescueSpawnMenu.Visible = true;
}

function createRepairSkinMenu() {

    repairSkinMenu = API.createMenu("Aircraft Engineer", "Choose aircraft engineer skin", 0, 0, 6);

    for (var a = 0; a < repairSkin.length; a++) {
        repairSkinMenu.AddItem(API.createMenuItem(repairSkin[a], ""));
    }

    repairSkinMenu.CurrentSelection = 0;
    menuPool.Add(repairSkinMenu);
    repairSkinMenu.Visible = false;

    repairSkinMenu.OnIndexChange.connect(function (sender, index) {

        switch (index) {
            case 0:
                API.setPlayerSkin(1644266841);
                break;
            case 1:
                API.setPlayerSkin(-1635724594);
                break;
        }
    });

    repairSkinMenu.OnItemSelect.connect(function (sender, item, index) {

        switch (index) {
            case 0:
                openSpawnSelectorRepair();
                SkinID = 1644266841;
                API.setEntitySyncedData(API.getLocalPlayer(), "SkinID", SkinID);
                break;
            case 1:
                openSpawnSelectorRepair();
                SkinID = -1635724594;
                API.setEntitySyncedData(API.getLocalPlayer(), "SkinID", SkinID);
                break;
        }
    });
}

function createSpawnSelectorRepair() {

    repairSpawnMenu = API.createMenu("Aircraft Engineer Spawn", "Choose aircraft engineer spawn location", 0, 0, 6);

    for (var a = 0; a < repairSpawn.length; a++) {
        repairSpawnMenu.AddItem(API.createMenuItem(repairSpawn[a], ""));
    }

    repairSpawnMenu.CurrentSelection = 0;
    menuPool.Add(repairSpawnMenu);
    repairSpawnMenu.Visible = false;

    repairSpawnMenu.OnIndexChange.connect(function (sender, index) {

        switch (index) {
            case 0:
                API.setEntityPosition(API.getLocalPlayer(), new Vector3(-1054.03, -2426.354, 50.6279));
                API.setActiveCamera(spawnCamLSIA);
                break;
            case 1:
                API.setEntityPosition(API.getLocalPlayer(), new Vector3(1299.671, 3015.45, 179.41328));
                API.setActiveCamera(spawnCamSandy);
                break;
            case 2:
                API.setEntityPosition(API.getLocalPlayer(), new Vector3(-2392.453, 2952.088, 50.5689));
                API.setActiveCamera(spawnCamMilitary);
                break;
        }
    });

    repairSpawnMenu.OnItemSelect.connect(function (sender, item, index) {

        switch (index) {
            case 0:
                SpawnID = "LSIA";
                API.setEntitySyncedData(API.getLocalPlayer(), "SpawnID", SpawnID);
                API.triggerServerEvent("LSIA");
                API.triggerServerEvent("skin_select_accept");
                break;
            case 1:
                SpawnID = "Sandy";
                API.setEntitySyncedData(API.getLocalPlayer(), "SpawnID", SpawnID);
                API.triggerServerEvent("Sandy");
                API.triggerServerEvent("skin_select_accept");
                break;
            case 2:
                SpawnID = "Military";
                API.setEntitySyncedData(API.getLocalPlayer(), "SpawnID", SpawnID);
                API.triggerServerEvent("Military");
                API.triggerServerEvent("skin_select_accept");
                break;
        }
    });
}

function openRepairSkinMenu() {

    API.setPlayerSkin(1644266841);
    classMenu.Visible = false;
    repairSkinMenu.Visible = true;
}

function openSpawnSelectorRepair() {

    API.setEntityPosition(API.getLocalPlayer(), new Vector3(-1054.03, -2426.354, 50.6279));
    API.setActiveCamera(spawnCamLSIA);

    repairSkinMenu.Visible = false;
    repairSpawnMenu.Visible = true;
}

function createMedicSkinMenu() {

    medicSkinMenu = API.createMenu("Medic Team Member", "Choose medic team skin", 0, 0, 6);

    for (var a = 0; a < medicSkin.length; a++) {
        medicSkinMenu.AddItem(API.createMenuItem(medicSkin[a], ""));
    }

    medicSkinMenu.CurrentSelection = 0;
    menuPool.Add(medicSkinMenu);
    medicSkinMenu.Visible = false;

    medicSkinMenu.OnIndexChange.connect(function (sender, index) {

        switch (index) {
            case 0:
                API.setPlayerSkin(-1286380898);
                break;
        }
    });

    medicSkinMenu.OnItemSelect.connect(function (sender, item, index) {

        switch (index) {
            case 0:
                openSpawnSelectorMedic();
                SkinID = -1286380898;
                API.setEntitySyncedData(API.getLocalPlayer(), "SkinID", SkinID);
                break;
        }
    });
}

function createSpawnSelectorMedic() {

    medicSpawnMenu = API.createMenu("Medic Team Spawn", "Choose medic team spawn location", 0, 0, 6);

    for (var a = 0; a < medicSpawn.length; a++) {
        medicSpawnMenu.AddItem(API.createMenuItem(medicSpawn[a], ""));
    }

    medicSpawnMenu.CurrentSelection = 0;
    menuPool.Add(medicSpawnMenu);
    medicSpawnMenu.Visible = false;

    medicSpawnMenu.OnIndexChange.connect(function (sender, index) {

        switch (index) {
            case 0:
                API.setEntityPosition(API.getLocalPlayer(), new Vector3(-1143.78, -2401.625, 132.95598));
                API.setActiveCamera(spawnCamLSCrash);
                break;
            case 1:
                API.setEntityPosition(API.getLocalPlayer(), new Vector3(1870.24, 3624.451, 144.47606));
                API.setActiveCamera(spawnCamSandyCrash);
                break;
            case 2:
                API.setEntityPosition(API.getLocalPlayer(), new Vector3(-2049.394, 2888.739, 163.46259));
                API.setActiveCamera(spawnCamMilitaryCrash);
                break;
        }
    });

    medicSpawnMenu.OnItemSelect.connect(function (sender, item, index) {

        switch (index) {
            case 0:
                SpawnID = "LS Medic";
                API.setEntitySyncedData(API.getLocalPlayer(), "SpawnID", SpawnID);
                API.triggerServerEvent("LS Medic");
                API.triggerServerEvent("skin_select_accept");
                break;
            case 1:
                SpawnID = "Sandy Crash";
                API.setEntitySyncedData(API.getLocalPlayer(), "SpawnID", SpawnID);
                API.triggerServerEvent("Sandy Crash");
                API.triggerServerEvent("skin_select_accept");
                break;
            case 2:
                SpawnID = "Military Crash";
                API.setEntitySyncedData(API.getLocalPlayer(), "SpawnID", SpawnID);
                API.triggerServerEvent("Military Crash");
                API.triggerServerEvent("skin_select_accept");
                break;
        }
    });
}

function openMedicSkinMenu() {

    API.setPlayerSkin(-1286380898);
    classMenu.Visible = false;
    medicSkinMenu.Visible = true;
}

function openSpawnSelectorMedic() {

    API.setEntityPosition(API.getLocalPlayer(), new Vector3(-1143.78, -2401.625, 132.95598));
    API.setActiveCamera(spawnCamLSCrash);

    medicSkinMenu.Visible = false;
    medicSpawnMenu.Visible = true;
}

function createFireSkinMenu() {

    fireSkinMenu = API.createMenu("Fire Crew Member", "Choose fire crew skin", 0, 0, 6);

    for (var a = 0; a < fireSkin.length; a++) {
        fireSkinMenu.AddItem(API.createMenuItem(fireSkin[a], ""));
    }

    fireSkinMenu.CurrentSelection = 0;
    menuPool.Add(fireSkinMenu);
    fireSkinMenu.Visible = false;

    fireSkinMenu.OnIndexChange.connect(function (sender, index) {

        switch (index) {
            case 0:
                API.setPlayerSkin(-1229853272);
                break;
        }
    });

    fireSkinMenu.OnItemSelect.connect(function (sender, item, index) {

        switch (index) {
            case 0:
                SkinID = -1229853272;
                openSpawnSelectorFire();
                API.setEntitySyncedData(API.getLocalPlayer(), "Skin", SkinID);
                break;
        }
    });
}

function createSpawnSelectorFire() {

    fireSpawnMenu = API.createMenu("Fire Crew Spawn", "Choose fire crew spawn location", 0, 0, 6);

    for (var a = 0; a < fireSpawn.length; a++) {
        fireSpawnMenu.AddItem(API.createMenuItem(fireSpawn[a], ""));
    }

    fireSpawnMenu.CurrentSelection = 0;
    menuPool.Add(fireSpawnMenu);
    fireSpawnMenu.Visible = false;

    fireSpawnMenu.OnIndexChange.connect(function (sender, index) {

        switch (index) {
            case 0:
                API.setEntityPosition(API.getLocalPlayer(), new Vector3(-1143.78, -2401.625, 132.95598));
                API.setActiveCamera(spawnCamLSCrash);
                break;
            case 1:
                API.setEntityPosition(API.getLocalPlayer(), new Vector3(1870.24, 3624.451, 144.47606));
                API.setActiveCamera(spawnCamSandyCrash);
                break;
            case 2:
                API.setEntityPosition(API.getLocalPlayer(), new Vector3(-2049.394, 2888.739, 163.46259));
                API.setActiveCamera(spawnCamMilitaryCrash);
                break;
        }
    });

    fireSpawnMenu.OnItemSelect.connect(function (sender, item, index) {

        switch (index) {
            case 0:
                SpawnID = "LS Crash";
                API.setEntitySyncedData(API.getLocalPlayer(), "SpawnID", SpawnID);
                API.triggerServerEvent("LS Crash");
                API.triggerServerEvent("skin_select_accept");
                break;
            case 1:
                SpawnID = "Sandy Crash";
                API.setEntitySyncedData(API.getLocalPlayer(), "SpawnID", SpawnID);
                API.triggerServerEvent("Sandy Crash");
                API.triggerServerEvent("skin_select_accept");
                break;
            case 2:
                SpawnID = "Military Crash";
                API.setEntitySyncedData(API.getLocalPlayer(), "SpawnID", SpawnID);
                API.triggerServerEvent("Military Crash");
                API.triggerServerEvent("skin_select_accept");
                break;
        }
    });
}

function openFireSkinMenu() {

    API.setPlayerSkin(-1229853272);
    classMenu.Visible = false;
    fireSkinMenu.Visible = true;
}

function openSpawnSelectorFire() {

    API.setEntityPosition(API.getLocalPlayer(), new Vector3(-1143.78, -2401.625, 132.95598));
    API.setActiveCamera(spawnCamLSCrash);

    fireSkinMenu.Visible = false;
    fireSpawnMenu.Visible = true;
}

function createSecuritySkinMenu() {

    securitySkinMenu = API.createMenu("Airport Security Team", "Choose airport security skin", 0, 0, 6);

    for (var a = 0; a < securitySkin.length; a++) {
        securitySkinMenu.AddItem(API.createMenuItem(securitySkin[a], ""));
    }

    securitySkinMenu.CurrentSelection = 0;
    menuPool.Add(securitySkinMenu);
    securitySkinMenu.Visible = false;

    securitySkinMenu.OnIndexChange.connect(function (sender, index) {
        switch (index) {
            case 0:
                API.setPlayerSkin(-681004504);
                break;
            case 1:
                API.setPlayerSkin(691061163);
                break;
            case 2:
                API.setPlayerSkin(1096929346);
        }
    });
    securitySkinMenu.OnItemSelect.connect(function (sender, item, index) {

        switch (index) {
            case 0:
                openSpawnSelectorSecurity();
                SkinID = -681004504;
                API.setEntitySyncedData(API.getLocalPlayer(), "SkinID", SkinID);
                break;
            case 1:
                openSpawnSelectorSecurity();
                SkinID = 691061163;
                API.setEntitySyncedData(API.getLocalPlayer(), "SkinID", SkinID);
                break;
            case 2:
                openSpawnSelectorSecurity();
                SkinID = 1096929346;
                API.setEntitySyncedData(API.getLocalPlayer(), "SkinID", SkinID);
                break;
        }
    });
}

function createSpawnSelectorSecurity() {

    securitySpawnMenu = API.createMenu("Airport Security Team Spawn", "Choose airport security team spawn location", 0, 0, 6);

    for (var a = 0; a < securitySpawn.length; a++) {
        securitySpawnMenu.AddItem(API.createMenuItem(securitySpawn[a], ""));
    }

    securitySpawnMenu.CurrentSelection = 0;
    menuPool.Add(securitySpawnMenu);
    securitySpawnMenu.Visible = false;

    securitySpawnMenu.OnIndexChange.connect(function (sender, index) {

        switch (index) {
            case 0:
                API.setEntityPosition(API.getLocalPlayer(), new Vector3(-1174.946, -2903.16, 129.45008));
                API.setActiveCamera(spawnCamLSSecurity);
                break;
            case 1:
                API.setEntityPosition(API.getLocalPlayer(), new Vector3(1870.24, 3624.451, 144.47606));
                API.setActiveCamera(spawnCamSandyCrash);
                break;
        }
    });

    securitySpawnMenu.OnItemSelect.connect(function (sender, item, index) {

        switch (index) {
            case 0:
                SpawnID = "LS Security";
                API.setEntitySyncedData(API.getLocalPlayer(), "SpawnID", SpawnID);
                API.triggerServerEvent("LS Security");
                API.triggerServerEvent("skin_select_accept");
                break;
            case 1:
                SpawnID = "Sandy Crash";
                API.setEntitySyncedData(API.getLocalPlayer(), "SpawnID", SpawnID);
                API.triggerServerEvent("Sandy Crash");
                API.triggerServerEvent("skin_select_accept");
                break;
        }
    });
}

function openSecuritySkinMenu() {

    API.setPlayerSkin(-681004504);
    classMenu.Visible = false;
    securitySkinMenu.Visible = true;
}

function openSpawnSelectorSecurity() {

    API.setEntityPosition(API.getLocalPlayer(), new Vector3(-1174.946, -2903.16, 129.45008));
    API.setActiveCamera(spawnCamLSSecurity);

    securitySkinMenu.Visible = false;
    securitySpawnMenu.Visible = true;
}

function createHostSkinMenu() {

    hostSkinMenu = API.createMenu("Air Host", "Choose air host skin", 0, 0, 6);

    for (var a = 0; a < hostSkin.length; a++) {
        hostSkinMenu.AddItem(API.createMenuItem(hostSkin[a], ""));
    }

    hostSkinMenu.CurrentSelection = 0;
    menuPool.Add(hostSkinMenu);
    hostSkinMenu.Visible = false;

    hostSkinMenu.OnIndexChange.connect(function (sender, index) {

        switch (index) {
            case 0:
                API.setPlayerSkin(1567728751);
                break;
            case 1:
                API.setPlayerSkin(1312913862);
                break;
        }
    });

    hostSkinMenu.OnItemSelect.connect(function (sender, item, index) {

        switch (index) {
            case 0:
                openSpawnSelectorHost();
                SkinID = 1567728751;
                API.setEntitySyncedData(API.getLocalPlayer(), "SkinID", SkinID);
                break;
            case 1:
                openSpawnSelectorHost();
                SkinID = 1312913862;
                API.setEntitySyncedData(API.getLocalPlayer(), "SkinID", SkinID);
                break;
        }
    });
}

function createSpawnSelectorHost() {

    hostSpawnMenu = API.createMenu("Air Host Spawn", "Choose air host spawn location", 0, 0, 6);

    for (var a = 0; a < hostSpawn.length; a++) {
        hostSpawnMenu.AddItem(API.createMenuItem(hostSpawn[a], ""));
    }

    hostSpawnMenu.CurrentSelection = 0;
    menuPool.Add(hostSpawnMenu);
    hostSpawnMenu.Visible = false;

    hostSpawnMenu.OnIndexChange.connect(function (sender, index) {

        switch (index) {
            case 0:
                API.setEntityPosition(API.getLocalPlayer(), new Vector3(-940.386, -2278.595, 157.9089));
                API.setActiveCamera(spawnCamLSPassenger);
                break;
            case 1:
                API.setEntityPosition(API.getLocalPlayer(), new Vector3(1663.813, 3582.575, 147.54181));
                API.setActiveCamera(spawnCamSandyPassenger);
                break;
        }
    });

    hostSpawnMenu.OnItemSelect.connect(function (sender, item, index) {

        switch (index) {
            case 0:
                SpawnID = "LS Passenger";
                API.setEntitySyncedData(API.getLocalPlayer(), "SpawnID", SpawnID);
                API.triggerServerEvent("LS Passenger");
                API.triggerServerEvent("skin_select_accept");
                break;
            case 1:
                SpawnID = "Sandy Passenger";
                API.setEntitySyncedData(API.getLocalPlayer(), "SpawnID", SpawnID);
                API.triggerServerEvent("Sandy Passenger");
                API.triggerServerEvent("skin_select_accept");
                break;
        }
    });
}

function openHostSkinMenu() {

    API.setPlayerSkin(1567728751);
    classMenu.Visible = false;
    hostSkinMenu.Visible = true;
}

function openSpawnSelectorHost() {

    API.setEntityPosition(API.getLocalPlayer(), new Vector3(-940.386, -2278.595, 157.9089));
    API.setActiveCamera(spawnCamLSPassenger);

    hostSkinMenu.Visible = false;
    hostSpawnMenu.Visible = true;
}

function createPassengerSkinMenu() {

    passengerSkinMenu = API.createMenu("Passenger", "Choose passenger skin", 0, 0, 6);

    for (var a = 0; a < passengerSkin.length; a++) {
        passengerSkinMenu.AddItem(API.createMenuItem(passengerSkin[a], ""));
    }

    passengerSkinMenu.CurrentSelection = 0;
    menuPool.Add(passengerSkinMenu);
    passengerSkinMenu.Visible = false;

    passengerSkinMenu.OnIndexChange.connect(function (sender, index) {

        switch (index) {
            case 0:
                API.setPlayerSkin(-2113195075);
                break;
            case 1:
                API.setPlayerSkin(-912318012);
                break;
            case 2:
                API.setPlayerSkin(330231874);
                break;
            case 3:
                API.setPlayerSkin(951767867);
                break;
        }
    });

    passengerSkinMenu.OnItemSelect.connect(function (sender, item, index) {

        switch (index) {
            case 0:
                openSpawnSelectorPassenger();
                SkinID = -2113195075;
                API.setEntitySyncedData(API.getLocalPlayer(), "SkinID", SkinID);
                break;
            case 1:
                openSpawnSelectorPassenger();
                SkinID = -912318012;
                API.setEntitySyncedData(API.getLocalPlayer(), "SkinID", SkinID);
                break;
            case 2:
                openSpawnSelectorPassenger();
                SkinID = 330231874;
                API.setEntitySyncedData(API.getLocalPlayer(), "SkinID", SkinID);
                break;
            case 3:
                openSpawnSelectorPassenger();
                SkinID = 951767867;
                API.setEntitySyncedData(API.getLocalPlayer(), "SkinID", SkinID);
                break;
        }
    });
}

function createSpawnSelectorPassenger() {

    passengerSpawnMenu = API.createMenu("Passenger Spawn", "Choose passenger spawn location", 0, 0, 6);

    for (var a = 0; a < passengerSpawn.length; a++) {
        passengerSpawnMenu.AddItem(API.createMenuItem(passengerSpawn[a], ""));
    }

    passengerSpawnMenu.CurrentSelection = 0;
    menuPool.Add(passengerSpawnMenu);
    passengerSpawnMenu.Visible = false;

    passengerSpawnMenu.OnIndexChange.connect(function (sender, index) {

        switch (index) {
            case 0:
                API.setEntityPosition(API.getLocalPlayer(), new Vector3(-940.386, -2278.595, 157.9089));
                API.setActiveCamera(spawnCamLSPassenger);
                break;
            case 1:
                API.setEntityPosition(API.getLocalPlayer(), new Vector3(1663.813, 3582.575, 147.54181));
                API.setActiveCamera(spawnCamSandyPassenger);
                break;
        }
    });

    passengerSpawnMenu.OnItemSelect.connect(function (sender, item, index) {

        switch (index) {
            case 0:
                SpawnID = "LS Passenger";
                API.setEntitySyncedData(API.getLocalPlayer(), "SpawnID", SpawnID);
                API.triggerServerEvent("LS Passenger");
                API.triggerServerEvent("skin_select_accept");
                break;
            case 1:
                SpawnID = "Sandy Passenger";
                API.setEntitySyncedData(API.getLocalPlayer(), "SpawnID", SpawnID);
                API.triggerServerEvent("Sandy Passenger");
                API.triggerServerEvent("skin_select_accept");
                break;
        }
    });
}

function openPassengerSkinMenu() {

    API.setPlayerSkin(-2113195075);
    classMenu.Visible = false;
    passengerSkinMenu.Visible = true;
}

function openSpawnSelectorPassenger() {

    API.setEntityPosition(API.getLocalPlayer(), new Vector3(-940.386, -2278.595, 157.9089));
    API.setActiveCamera(spawnCamLSPassenger);

    passengerSkinMenu.Visible = false;
    passengerSpawnMenu.Visible = true;
}