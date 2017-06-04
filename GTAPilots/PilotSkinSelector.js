/// <reference path ="\types-gtanetwork\index.d.ts" />
"use strict";
var player = API.getLocalPlayer();
var SkinID = null;
var SpawnID = null;
var mainCam = null;
var skinCam = API.createCamera(new Vector3(403.0526, -999.3354, -99.00404), new Vector3(0, 0, -1.737708));
var spawnCamLSIA = API.createCamera(new Vector3(-1054.03, -2426.354, 124.6279), new Vector3(0, 0, -176.8376));
var spawnCamLSL = API.createCamera(new Vector3(1089.673, -40.89325, 134.1357), new Vector3(0, 0, -18.08772)); //
var spawnCamSandy = API.createCamera(new Vector3(1299.671, 3015.45, 79.41328), new Vector3(0, 0, -43.21368));
var spawnCamMilitary = API.createCamera(new Vector3(-2392.453, 2952.088, 118.5689), new Vector3(-2.469033, -0.01874625, -7.168303)); //
//var spawnCamCarrier = API.createCamera(new Vector3(), new Vector3()); 
var spawnCamStunt = API.createCamera(new Vector3(-110.2435, -1056.438, 297.3595), new Vector3(0, 0, 20.25161)); //
var spawnCamLSRescue = API.createCamera(new Vector3(-903.0132, -1591.925, 73.88368), new Vector3(0, 0, -36.79195)); //
//var spawnCamSandyRescue = API.createCamera(new Vector3(), new Vector3()); 
var spawnCamLSCrash = API.createCamera(new Vector3(-1143.78, -2401.625, 32.95598), new Vector3(0, 0, -74.63837)); //
var spawnCamSandyCrash = API.createCamera(new Vector3(1870.24, 3624.451, 44.47606), new Vector3(0, 0, 22.7874)); //
var spawnCamMilitaryCrash = API.createCamera(new Vector3(-2049.394, 2888.739, 63.46259), new Vector3(0, 0, 133.2738)); //
var spawnCamLSSecurity = API.createCamera(new Vector3(-1174.946, -2903.16, 29.45008), new Vector3(0, 0, 33.59291)); //
//var spawnCamSandySecurity = API.createCamera(new Vector3(), new Vector3()); //
var spawnCamLSPassenger = API.createCamera(new Vector3(-940.386, -2278.595, 57.9089), new Vector3(0, 0, -24.36473)); //
var spawnCamSandyPassenger = API.createCamera(new Vector3(1663.813, 3582.575, 47.54181), new Vector3(0, 0, 90.85172)); //
var classes = ["Civilian Pilot", "Military Pilot", "Stunt Pilot", "Rescue Team Member", "Aircraft Engineer", "Medical Team Member", "Fire Crew", "Airport Security", "Air Host", "Passenger"];
var civilSkinMenu = null;
var civilSpawnMenu = null;
var civilSkin = ["Captain", "First Officer", "Second Officer"];
var civilSpawn = ["Los Santos International", "Los Santos Local", "Sandy Shores Airfield"];
var militarySkinMenu = null;
var militarySpawnMenu = null;
var militarySkin = ["Major", "Lieutenant", "Subordiante"];
var militarySpawn = ["Military Base"]; //, "Aircraft Carrier"]; 
var stuntSkinMenu = null;
var stuntSpawnMenu = null;
var stuntSkin = ["Stunt Skin 1"];
var stuntSpawn = ["Los Santos Local", "Sandy Shores Airfield"];
var rescueSkinMenu = null;
var rescueSpawnMenu = null;
var rescueSkin = ["Rescue Team Skin 1"];
var rescueSpawn = ["Los Santos Rescue"]; //, "Sandy Shores Rescue"];
var repairSkinMenu = null;
var repairSpawnMenu = null;
var repairSkin = ["Aircraft Engineer", "Mechanic"];
var repairSpawn = ["Los Santos International Airport", "Sandy Shores Airfield", "Military Base"]; //, "Carrier"];
var medicSkinMenu = null;
var medicSpawnMenu = null;
var medicSkin = ["Medic Team Skin 1"];
var medicSpawn = ["Los Santos International Crash Center", "Sandy Shores Emergency Center", "Military Base Crash Center"]; //, "Carrier"];
var fireSkinMenu = null;
var fireSpawnMenu = null;
var fireSkin = ["Fire Crew Skin 1"];
var fireSpawn = ["Los Santos International Crash Center", "Sandy Shores Emergency Center", "Military Base Crash Center"];
var securitySkinMenu = null;
var securitySpawnMenu = null;
var securitySkin = ["Security Team Skin 1"];
var securitySpawn = ["Los Santos International Airport Security", "Sandy Shores Police Station"];
var hostSkinMenu = null;
var hostSpawnMenu = null;
var hostSkin = ["Air Host Skin 1"];
var hostSpawn = ["Los Santos International Airport", "Sandy Shores Airfield"];
var passengerSkinMenu = null;
var passengerSpawnMenu = null;
var passengerSkin = ["Passenger Skin 1"];
var passengerSpawn = ["Los Santos International Airport", "Los Santos Local", "Sandy Shores Airfield"];
var menuPool = API.getMenuPool();
var classMenu = null;
function createClassMenu() {
    classMenu = API.createMenu("GTA Pilots", "Class Selection", 0, 0, 6);
    for (var i = 0; i < classes.length; i++) {
        classMenu.AddItem(API.createMenuItem(classes[i], ""));
    }
    classMenu.CurretSelection = 0;
    menuPool.Add(classMenu);
    classMenu.Visible = false;
    classMenu.OnItemSelect.connect(function (sender, item, index) {
        switch (index) {
            case 0:
                openCivilSkinMenu();
                if (API.getEntitySyncedData(player, "Class") != "Civil") {
                    API.setEntitySyncedData(player, "Class", "Civil");
                }
                break;
            case 1:
                openMilitarySkinMenu();
                if (API.getEntitySyncedData(player, "Class") != "Military") {
                    API.setEntitySyncedData(player, "Class", "Military");
                }
                break;
            case 2:
                openStuntSkinMenu();
                if (API.getEntitySyncedData(player, "Class") != "Stunt") {
                    API.setEntitySyncedData(player, "Class", "Stunt");
                }
                break;
            case 3:
                openRescueSkinMenu();
                if (API.getEntitySyncedData(player, "Class") != "Rescue") {
                    API.setEntitySyncedData(player, "Class", "Rescue");
                }
                break;
            case 4:
                openRepairSkinMenu();
                if (API.getEntitySyncedData(player, "Class") != "Repair") {
                    API.setEntitySyncedData(player, "Class", "Repair");
                }
                break;
            case 5:
                openMedicSkinMenu();
                if (API.getEntitySyncedData(player, "Class") != "Medic") {
                    API.setEntitySyncedData(player, "Class", "Medic");
                }
                break;
            case 6:
                openFireSkinMenu();
                if (API.getEntitySyncedData(player, "Class") != "Fire") {
                    API.setEntitySyncedData(player, "Class", "Fire");
                }
                break;
            case 7:
                openSecuritySkinMenu();
                if (API.getEntitySyncedData(player, "Class") != "Security") {
                    API.setEntitySyncedData(player, "Class", "Security");
                }
                break;
            case 8:
                openHostSkinMenu();
                if (API.getEntitySyncedData(player, "Class") != "Host") {
                    API.setEntitySyncedData(player, "Class", "Host");
                }
                break;
            case 9:
                openPassengerSkinMenu();
                if (API.getEntitySyncedData(player, "Class") != "Passenger") {
                    API.setEntitySyncedData(player, "Class", "Passenger");
                }
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
                openSpawnSelectorCivil();
                SkinID = -413447396;
                API.setPlayerSkin(SkinID);
                break;
            case 1:
                openSpawnSelectorCivil();
                SkinID = -933295480;
                API.setPlayerSkin(SkinID);
                break;
            case 2:
                openSpawnSelectorCivil();
                SkinID = -1280051738;
                API.setPlayerSkin(SkinID);
                break;
        }
    });
    civilSkinMenu.OnItemSelect.connect(function (sender, item, index) {
        switch (index) {
            case 0:
                openSpawnSelectorCivil();
                SkinID = -413447396;
                API.setEntitySyncedData(player, "SkinID", SkinID);
                break;
            case 1:
                openSpawnSelectorCivil();
                SkinID = -933295480;
                API.setEntitySyncedData(player, "SkinID", SkinID);
                break;
            case 2:
                SkinID = -1280051738;
                API.setEntitySyncedData(player, "SkinID", SkinID);
                openSpawnSelectorCivil();
                break;
        }
    });
}
function createSpawnSelectorCivil() {
    civilSpawnMenu = API.createMenu("Civil Pilots Spawn", "Choose your spawn location", 0, 0, 6);
    for (var a = 0; a < civilSkin.length; a++) {
        civilSpawnMenu.AddItem(API.createMenuItem(civilSpawn[a], ""));
    }
    civilSpawnMenu.CurrentSelection = 0;
    menuPool.Add(civilSpawnMenu);
    civilSpawnMenu.Visible = false;
    civilSpawnMenu.OnIndexChange.connect(function (sender, index) {
        switch (index) {
            case 0:
                API.setActiveCamera(spawnCamLSIA);
                break;
            case 1:
                API.setActiveCamera(spawnCamLSL);
                break;
            case 2:
                API.setActiveCamera(spawnCamSandy);
                break;
        }
    });
    civilSpawnMenu.OnItemSelect.connect(function (sender, item, index) {
        switch (index) {
            case 0:
                SpawnID = "LSIA";
                API.setEntitySyncedData(player, "SpawnID", SpawnID);
                break;
            case 1:
                SpawnID = "LSL";
                API.setEntitySyncedData(player, "SpawnID", SpawnID);
                break;
            case 2:
                SpawnID = "Sandy";
                API.setEntitySyncedData(player, "SpawnID", SpawnID);
                break;
        }
    });
}
function openCivilSkinMenu() {
    classMenu.Visible = false;
    civilSkinMenu.Visible = true;
    API.setEntitySyncedData(player, "Class", "Civil");
}
function openSpawnSelectorCivil() {
    civilSkinMenu.Visible = false;
    civilSpawnMenu.Visible = true;
}
function createMilitarySkinMenu() {
    militarySkinMenu = API.createMenu("Military Pilots", "Choose military pilot skin", 0, 0, 6);
    for (var a = 0; a < militarySkin.length; a++) {
        stuntSkinMenu.AddItem(API.createMenuItem(militarySkin[a], ""));
    }
    militarySkinMenu.CurrentSelection = 0;
    menuPool.Add(militarySkinMenu);
    militarySkinMenu.Visible = false;
    militarySkinMenu.OnItemSelect.connect(function (sender, item, index) {
        switch (index) {
            case 0:
                openSpawnSelectorMilitary();
                break;
            case 1:
                openSpawnSelectorMilitary();
                break;
            case 2:
                openSpawnSelectorMilitary();
                break;
        }
    });
}
function createSpawnSelectorMilitary() {
    militarySpawnMenu = API.createMenu("Military Pilots Spawn", "Choose military pilot spawn location", 0, 0, 6);
    for (var a = 0; a < militarySkin.length; a++) {
        civilSpawnMenu.AddItem(API.createMenuItem(militarySpawn[a], ""));
    }
    militarySpawnMenu.CurrentSelection = 0;
    menuPool.Add(militarySpawnMenu);
    militarySpawnMenu.Visible = false;
    militarySpawnMenu.OnItemSelect.connect(function (sender, item, index) {
        switch (index) {
            case 0:
                break;
            case 1:
                break;
            case 2:
                break;
        }
    });
}
function openMilitarySkinMenu() {
    classMenu.Visible = false;
    militarySkinMenu.Visible = true;
}
function openSpawnSelectorMilitary() {
    militarySkinMenu.Visible = false;
    militarySpawnMenu.Visible = true;
}
function createStuntSkinMenu() {
    stuntSkinMenu = API.createMenu("Stunt Pilots", "Choose stunt pilot skin", 0, 0, 6);
    for (var a = 0; a < stuntSkin.length; a++) {
        stuntSkinMenu.AddItem(API.createMenuItem(stuntSkin[a], ""));
    }
    stuntSkinMenu.CurrentSelection = 0;
    menuPool.Add(stuntSkinMenu);
    stuntSkinMenu.Visible = false;
    stuntSkinMenu.OnItemSelect.connect(function (sender, item, index) {
        switch (index) {
            case 0:
                openSpawnSelectorStunt();
                break;
            case 1:
                openSpawnSelectorStunt();
                break;
            case 2:
                openSpawnSelectorStunt();
                break;
        }
    });
}
function createSpawnSelectorStunt() {
    stuntSpawnMenu = API.createMenu("Stunt Pilots Spawn", "Choose stunt pilot spawn location", 0, 0, 6);
    for (var a = 0; a < stuntSkin.length; a++) {
        stuntSpawnMenu.AddItem(API.createMenuItem(stuntSpawn[a], ""));
    }
    stuntSpawnMenu.CurrentSelection = 0;
    menuPool.Add(stuntSpawnMenu);
    stuntSpawnMenu.Visible = false;
    stuntSpawnMenu.OnItemSelect.connect(function (sender, item, index) {
        switch (index) {
            case 0:
                break;
            case 1:
                break;
            case 2:
                break;
        }
    });
}
function openStuntSkinMenu() {
    classMenu.Visible = false;
    stuntSkinMenu.Visible = true;
}
function openSpawnSelectorStunt() {
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
    rescueSkinMenu.OnItemSelect.connect(function (sender, item, index) {
        switch (index) {
            case 0:
                openSpawnSelectorRescue();
                break;
            case 1:
                openSpawnSelectorRescue();
                break;
            case 2:
                openSpawnSelectorRescue();
                break;
        }
    });
}
function createSpawnSelectorRescue() {
    rescueSpawnMenu = API.createMenu("Rescue Team Spawn", "Choose rescue team spawn location", 0, 0, 6);
    for (var a = 0; a < rescueSkin.length; a++) {
        rescueSpawnMenu.AddItem(API.createMenuItem(rescueSpawn[a], ""));
    }
    rescueSpawnMenu.CurrentSelection = 0;
    menuPool.Add(rescueSpawnMenu);
    rescueSpawnMenu.Visible = false;
    rescueSpawnMenu.OnItemSelect.connect(function (sender, item, index) {
        switch (index) {
            case 0:
                break;
            case 1:
                break;
            case 2:
                break;
        }
    });
}
function openRescueSkinMenu() {
    classMenu.Visible = false;
    rescueSkinMenu.Visible = true;
}
function openSpawnSelectorRescue() {
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
    repairSkinMenu.OnItemSelect.connect(function (sender, item, index) {
        switch (index) {
            case 0:
                openSpawnSelectorRepair();
                break;
            case 1:
                openSpawnSelectorRepair();
                break;
            case 2:
                openSpawnSelectorRepair();
                break;
        }
    });
}
function createSpawnSelectorRepair() {
    repairSpawnMenu = API.createMenu("Aircraft Engineer Spawn", "Choose aircraft engineer spawn location", 0, 0, 6);
    for (var a = 0; a < repairSkin.length; a++) {
        repairSpawnMenu.AddItem(API.createMenuItem(repairSpawn[a], ""));
    }
    repairSpawnMenu.CurrentSelection = 0;
    menuPool.Add(repairSpawnMenu);
    repairSpawnMenu.Visible = false;
    repairSpawnMenu.OnItemSelect.connect(function (sender, item, index) {
        switch (index) {
            case 0:
                break;
            case 1:
                break;
            case 2:
                break;
        }
    });
}
function openRepairSkinMenu() {
    classMenu.Visible = false;
    repairSkinMenu.Visible = true;
}
function openSpawnSelectorRepair() {
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
    medicSkinMenu.OnItemSelect.connect(function (sender, item, index) {
        switch (index) {
            case 0:
                openSpawnSelectorMedic();
                break;
            case 1:
                openSpawnSelectorMedic();
                break;
            case 2:
                openSpawnSelectorMedic();
                break;
        }
    });
}
function createSpawnSelectorMedic() {
    medicSpawnMenu = API.createMenu("Medic Team Spawn", "Choose medic team spawn location", 0, 0, 6);
    for (var a = 0; a < medicSkin.length; a++) {
        medicSpawnMenu.AddItem(API.createMenuItem(medicSpawn[a], ""));
    }
    medicSpawnMenu.CurrentSelection = 0;
    menuPool.Add(medicSpawnMenu);
    medicSpawnMenu.Visible = false;
    medicSpawnMenu.OnItemSelect.connect(function (sender, item, index) {
        switch (index) {
            case 0:
                break;
            case 1:
                break;
            case 2:
                break;
        }
    });
}
function openMedicSkinMenu() {
    classMenu.Visible = false;
    medicSkinMenu.Visible = true;
}
function openSpawnSelectorMedic() {
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
    fireSkinMenu.OnItemSelect.connect(function (sender, item, index) {
        switch (index) {
            case 0:
                SkinID = -413447396;
                openSpawnSelectorFire();
                API.setEntitySyncedData(player, "Skin", SkinID);
                break;
        }
    });
}
function createSpawnSelectorFire() {
    fireSpawnMenu = API.createMenu("Fire Crew Spawn", "Choose fire crew spawn location", 0, 0, 6);
    for (var a = 0; a < fireSkin.length; a++) {
        fireSpawnMenu.AddItem(API.createMenuItem(fireSpawn[a], ""));
    }
    fireSpawnMenu.CurrentSelection = 0;
    menuPool.Add(fireSpawnMenu);
    fireSpawnMenu.Visible = false;
    fireSpawnMenu.OnItemSelect.connect(function (sender, item, index) {
        switch (index) {
            case 0:
                break;
            case 1:
                break;
            case 2:
                break;
        }
    });
}
function openFireSkinMenu() {
    classMenu.Visible = false;
    fireSkinMenu.Visible = true;
}
function openSpawnSelectorFire() {
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
    securitySkinMenu.OnItemSelect.connect(function (sender, item, index) {
        switch (index) {
            case 0:
                openSpawnSelectorSecurity();
                break;
            case 1:
                openSpawnSelectorSecurity();
                break;
            case 2:
                openSpawnSelectorSecurity();
                break;
        }
    });
}
function createSpawnSelectorSecurity() {
    securitySpawnMenu = API.createMenu("Airport Security Team Spawn", "Choose airport security team spawn location", 0, 0, 6);
    for (var a = 0; a < securitySkin.length; a++) {
        securitySpawnMenu.AddItem(API.createMenuItem(securitySpawn[a], ""));
    }
    securitySpawnMenu.CurrentSelection = 0;
    menuPool.Add(securitySpawnMenu);
    securitySpawnMenu.Visible = false;
    securitySpawnMenu.OnItemSelect.connect(function (sender, item, index) {
        switch (index) {
            case 0:
                break;
            case 1:
                break;
            case 2:
                break;
        }
    });
}
function openSecuritySkinMenu() {
    classMenu.Visible = false;
    securitySkinMenu.Visible = true;
}
function openSpawnSelectorSecurity() {
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
    hostSkinMenu.OnItemSelect.connect(function (sender, item, index) {
        switch (index) {
            case 0:
                openSpawnSelectorHost();
                break;
            case 1:
                openSpawnSelectorHost();
                break;
            case 2:
                openSpawnSelectorHost();
                break;
        }
    });
}
function createSpawnSelectorHost() {
    hostSpawnMenu = API.createMenu("Air Host Spawn", "Choose air host spawn location", 0, 0, 6);
    for (var a = 0; a < hostSkin.length; a++) {
        hostSpawnMenu.AddItem(API.createMenuItem(hostSpawn[a], ""));
    }
    hostSpawnMenu.CurrentSelection = 0;
    menuPool.Add(hostSpawnMenu);
    hostSpawnMenu.Visible = false;
    hostSpawnMenu.OnItemSelect.connect(function (sender, item, index) {
        switch (index) {
            case 0:
                break;
            case 1:
                break;
            case 2:
                break;
        }
    });
}
function openHostSkinMenu() {
    classMenu.Visible = false;
    hostSkinMenu.Visible = true;
}
function openSpawnSelectorHost() {
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
    passengerSkinMenu.OnItemSelect.connect(function (sender, item, index) {
        switch (index) {
            case 0:
                openSpawnSelectorPassenger();
                break;
            case 1:
                openSpawnSelectorPassenger();
                break;
            case 2:
                openSpawnSelectorPassenger();
                break;
        }
    });
}
function createSpawnSelectorPassenger() {
    passengerSpawnMenu = API.createMenu("Passenger Spawn", "Choose passenger spawn location", 0, 0, 6);
    for (var a = 0; a < passengerSkin.length; a++) {
        passengerSpawnMenu.AddItem(API.createMenuItem(passengerSpawn[a], ""));
    }
    passengerSpawnMenu.CurrentSelection = 0;
    menuPool.Add(passengerSpawnMenu);
    passengerSpawnMenu.Visible = false;
    passengerSpawnMenu.OnItemSelect.connect(function (sender, item, index) {
        switch (index) {
            case 0:
                break;
            case 1:
                break;
            case 2:
                break;
        }
    });
}
function openPassengerSkinMenu() {
    classMenu.Visible = false;
    passengerSkinMenu.Visible = true;
}
function openSpawnSelectorPassenger() {
    passengerSkinMenu.Visible = false;
    passengerSpawnMenu.Visible = true;
}
//var civilSkinPool = menuPool.AddSubMenu(civilSkinMenu, "");
//var militarySkinPool = menuPool.AddSubMenu(militarySkinMenu, "");
//var stuntSkinPool = menuPool.AddSubMenu(stuntSkinMenu, "");
//var rescueSkinPool = menuPool.AddSubMenu(rescueSkinMenu, "");
//var repairSkinPool = menuPool.AddSubMenu(repairSkinMenu, "");
//var medicSkinPool = menuPool.AddSubMenu(medicSkinMenu, "");
//var fireSkinPool = menuPool.AddSubMenu(fireSkinMenu, "");
//var securitySkinPool = menuPool.AddSubMenu(securitySkinMenu, "");
//var hostSkinPool = menuPool.AddSubMenu(hostSkinMenu, "");
//var passengerSkinPool = menuPool.AddSubMenu(passengerSkinMenu, "");
//var civilSpawnPool = menuPool.AddSubMenu(civilSpawnMenu, "");
//var militarySpawnPool = menuPool.AddSubMenu(militarySpawnMenu, "");
//var stuntSpawnPool = menuPool.AddSubMenu(stuntSpawnMenu, "");
//var rescueSpawnPool = menuPool.AddSubMenu(rescueSpawnMenu, "");
//var repairSpawnPool = menuPool.AddSubMenu(repairSpawnMenu, "");
//var medicSpawnPool = menuPool.AddSubMenu(medicSpawnMenu, "");
//var fireSpawnPool = menuPool.AddSubMenu(fireSpawnMenu, "");
//var securitySpawnPool = menuPool.AddSubMenu(securitySpawnMenu, "");
//var hostSpawnPool = menuPool.AddSubMenu(hostSpawnMenu, "");
//var passengerSpawnPool = menuPool.AddSubMenu(passengerSpawnMenu, "");
//var items = classMenu.MenuItems;
// // class menu bind ------------------------------------------------------------------------------------------
//classMenu.BindMenuToItem(civilSkinPool, items[0]);
//classMenu.BindMenuToItem(militarySkinPool, items[1]);
//classMenu.BindMenuToItem(stuntSkinPool, items[2]);
//classMenu.BindMenuToItem(rescueSkinPool, items[3]);
//classMenu.BindMenuToItem(repairSkinPool, items[4]);
//classMenu.BindMenuToItem(medicSkinPool, items[5]);
//classMenu.BindMenuToItem(fireSkinPool, items[6]);
//classMenu.BindMenuToItem(securitySkinPool, items[7]);
//classMenu.BindMenuToItem(hostSkinPool, items[8]);
//classMenu.BindMenuToItem(passengerSkinPool, items[9]);
// skin selector ---------------------------------------------------------------------------------------------
//for (var b = 0; b < militarySkin.length; b++) {
//    militarySkinPool.AddItem(API.createMenuItem(militarySkin[b], ""));
//}
//for (var c = 0; c < stuntSkin.length; c++) {
//    stuntSkinPool.AddItem(API.createMenuItem(stuntSkin[c], ""));
//}
//for (var d = 0; d < rescueSkin.length; d++) {
//    rescueSkinPool.AddItem(API.createMenuItem(rescueSkin[d], ""));
//}
//for (var e = 0; e < repairSkin.length; e++) {
//    repairSkinPool.AddItem(API.createMenuItem(repairSkin[e], ""));
//}
//for (var f = 0; f < medicSkin.length; f++) {
//    medicSkinPool.AddItem(API.createMenuItem(medicSkin[f], ""));
//}
//for (var g = 0; g < fireSkin.length; g++) {
//    fireSkinPool.AddItem(API.createMenuItem(fireSkin[g], ""));
//}
//for (var h = 0; h < securitySkin.length; h++) {
//    securitySkinPool.AddItem(API.createMenuItem(securitySkin[h], ""));
//}
//for (var j = 0; j < hostSkin.length; j++) {
//    hostSkinPool.AddItem(API.createMenuItem(hostSkin[j], ""));
//}
//for (var k = 0; k < passengerSkin.length; k++) {
//    passengerSkinPool.AddItem(API.createMenuItem(passengerSkin[k], ""));
//}
// civil menu bind --------------------------------------------------------------------------------------------
//var civilItems = civilSkinMenu.MenuItems;
//civilSkinMenu.BindMenuToItem(civilSpawnPool, civilItems[0]);
//civilSkinMenu.BindMenuToItem(civilSpawnPool, civilItems[1]);
//civilSkinMenu.BindMenuToItem(civilSpawnPool, civilItems[2]);
// spawn location ---------------------------------------------------------------------------------------------
//for (var l = 0; l < civilSpawn.length; l++) {
//    civilSpawnPool.AddItem(API.createMenuItem(civilSpawn[l], ""));
//}
//for (var m = 0; m < militarySpawn.length; m++) {
//    militarySpawnPool.AddItem(API.createMenuItem(militarySpawn[m], ""));
//}
//for (var n = 0; n < stuntSpawn.length; n++) {
//    stuntSpawnPool.AddItem(API.createMenuItem(stuntSpawn[n], ""));
//    stuntSkinMenu.BindMenuToItem(stuntSpawnPool, items[n]);
//}
//for (var o = 0; o < rescueSpawn.length; o++) {
//    rescueSpawnPool.AddItem(API.createMenuItem(rescueSpawn[o], ""));
//    rescueSkinMenu.BindMenuToItem(rescueSpawnPool, items[o]);
//}
//for (var p = 0; p < repairSpawn.length; p++) {
//    repairSpawnPool.AddItem(API.createMenuItem(repairSpawn[p], ""));
//    repairSkinMenu.BindMenuToItem(repairSpawnPool, items[p]);
//}
//for (var q = 0; q < medicSpawn.length; q++) {
//    medicSpawnPool.AddItem(API.createMenuItem(medicSpawn[q], ""));
//    medicSkinMenu.BindMenuToItem(medicSpawnPool, items[q]);
//}
//for (var r = 0; r < fireSpawn.length; r++) {
//    fireSpawnPool.AddItem(API.createMenuItem(fireSpawn[r], ""));
//    fireSkinMenu.BindMenuToItem(fireSpawnPool, items[r]);
//}
//for (var s = 0; s < securitySpawn.length; s++) {
//    securitySpawnPool.AddItem(API.createMenuItem(securitySpawn[s], ""));
//    securitySkinMenu.BindMenuToItem(securitySpawnPool, items[s]);
//}
//for (var t = 0; t < hostSpawn.length; t++) {
//    hostSpawnPool.AddItem(API.createMenuItem(hostSpawn[t], ""));
//    hostSkinMenu.BindMenuToItem(hostSpawnPool, items[t]);
//}
//for (var u = 0; u < passengerSpawn.length; u++) {
//    passengerSpawnPool.AddItem(API.createMenuItem(passengerSpawn[u], ""));
//    passengerSkinMenu.BindMenuToItem(passengerSpawnPool, items[u]);
//}
API.onServerEventTrigger.connect(function (name, args) {
    if (name === "skin_select_start") {
        mainCam = API.createCamera(new Vector3(-1010, -2695, 33.47642), new Vector3(2.79839826, 0, 147.313782));
        //API.pointCameraAtEntity(mainCam, API.getLocalPlayer(), new Vector3(0, 0, 0));
        API.setActiveCamera(mainCam);
        classMenu.Visible = true;
    }
    if (name === "skin_select_stop") {
        API.setActiveCamera(null);
        classMenu.Visible = false;
        menuPool.CloseAllMenus();
    }
});
// class menu ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//classMenu.OnItemSelect.connect(function (sender, item, index) {
//    if (index === 0) {
//        API.setEntitySyncedData(player, "Class", "Civil");
//        API.setPlayerSkin(-413447396);
//        API.setActiveCamera(skinCam);
//    }
//    else if (index === 1) {
//        API.setEntitySyncedData(player, "Class", "Military");
//        API.setPlayerSkin(-1422914553);
//        API.setActiveCamera(skinCam);
//    }
//    else if (index === 2) {
//        API.setEntitySyncedData(player, "Class", "Stunt");
//        API.setPlayerSkin(755956971);
//        API.setActiveCamera(skinCam);
//    }
//    else if (index === 3) {
//        API.setEntitySyncedData(player, "Class", "Rescue");
//        API.setPlayerSkin(-905948951);
//        API.setActiveCamera(skinCam);
//    }
//    else if (index === 4) {
//        API.setEntitySyncedData(player, "Class", "Repair");
//        API.setPlayerSkin(1644266841);
//        API.setActiveCamera(skinCam);
//    }
//    else if (index === 5) {
//        API.setEntitySyncedData(player, "Class", "Medic");
//        API.setPlayerSkin(-1286380898);
//        API.setActiveCamera(skinCam);
//    }
//    else if (index === 6) {
//        API.setEntitySyncedData(player, "Class", "Fire");
//        API.setPlayerSkin(-1229853272);
//        API.setActiveCamera(skinCam);
//    }
//    else if (index === 7) {
//        API.setEntitySyncedData(player, "Class", "Security");
//        API.setPlayerSkin(-681004504);
//        API.setActiveCamera(skinCam);
//    }
//    else if (index === 8) {
//        API.setEntitySyncedData(player, "Class", "Host");
//        API.setPlayerSkin(1567728751);
//        API.setActiveCamera(skinCam);
//    }
//    else if (index === 9) {
//        API.setEntitySyncedData(player, "Class", "Passenger");
//        API.setPlayerSkin(-1717894970);
//        API.setActiveCamera(skinCam);
//    }
//});
//// civil menus --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//civilSkinPool.OnIndexChange.connect(function (sender, index) {
//    if (index === 0) {
//        API.setPlayerSkin(-413447396);
//    }
//    else if (index === 1) {
//        API.setPlayerSkin(-933295480);
//    }
//    else if (index === 2) {
//        API.setPlayerSkin(-1280051738);
//    }
//});
//civilSkinPool.OnItemSelect.connect(function (sender, item, index) {
//    if (index === 0) {
//        //Captain
//        API.setPlayerSkin(-413447396);
//        API.setActiveCamera(spawnCamLSIA);
//    }
//    else if (index === 1) {
//        //First Officer
//        API.setPlayerSkin(-933295480);
//        API.setActiveCamera(spawnCamLSIA);
//    }
//    else if (index === 2) {
//        //Second Officer
//        API.setPlayerSkin(-1280051738);
//        API.setActiveCamera(spawnCamLSIA);
//    }
//});
//civilSkinPool.OnMenuChange.connect(function (civilSkinMenu, civilSpawnPool, forward) {
//});
//civilSpawnPool.OnIndexChange.connect(function (sender, index) {
//    if (index === 0) {
//        API.setActiveCamera(spawnCamLSIA);
//    }
//    else if (index === 1) {
//        API.setActiveCamera(spawnCamLSL);
//    }
//    else if (index === 2) {
//        API.setActiveCamera(spawnCamSandy);
//    }
//});
//civilSpawnPool.OnItemSelect.connect(function (sender, item, index) {
//    if (index === 0) {
//        API.triggerServerEvent("LSIASpawn");
//    }
//    else if (index === 1) {
//        API.triggerServerEvent("LSLSpawn");
//    }
//    else if (index === 2) {
//        API.triggerServerEvent("SandySpawn");
//    }
//});
//// military menus ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//militarySkinPool.OnIndexChange.connect(function (sender, index) {
//    if (index === 0) {
//        API.setPlayerSkin(-1422914553);
//    }
//    else if (index === 1) {
//        API.setPlayerSkin(-163714847);
//    }
//});
//militarySkinPool.OnItemSelect.connect(function (sender, item, index) {
//    if (index === 0) {
//        API.setPlayerSkin(-1422914553);
//        militarySkinMenu.BindMenuToItem(militarySpawnPool, item);
//        API.setActiveCamera(null);
//        API.triggerServerEvent("skin_select_accept");
//    }
//    else if (index === 1) {
//        API.setPlayerSkin(-163714847);
//        militarySkinMenu.BindMenuToItem(militarySpawnPool, item);
//        API.setActiveCamera(null);
//        API.triggerServerEvent("skin_select_accept");
//    }
//    else if (index === 2) {
//        API.setPlayerSkin(1657546978);
//        militarySkinMenu.BindMenuToItem(militarySpawnPool, item);
//        API.setActiveCamera(null);
//        API.triggerServerEvent("skin_select_accept");
//    }
//});
//// stunt menus ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//stuntSkinPool.OnIndexChange.connect(function (sender, index) {
//    if (index === 0) {
//        API.setPlayerSkin(755956971);
//    }
//});
//stuntSkinPool.OnItemSelect.connect(function (sender, item, index) {
//});
//// rescue menus --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//rescueSkinPool.OnIndexChange.connect(function (sender, index) {
//    if (index === 0) {
//        API.setPlayerSkin(-905948951);
//    }
//});
//rescueSkinPool.OnItemSelect.connect(function (sender, item, index) {
//});
//// repair menus --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//repairSkinPool.OnIndexChange.connect(function (sender, index) {
//    if (index === 0) {
//        API.setPlayerSkin(1644266841);
//    }
//    else if (index === 1) {
//        API.setPlayerSkin(-1635724594);
//    }
//});
//repairSkinPool.OnItemSelect.connect(function (sender, item, index) {
//});
//// medic menus ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//medicSkinPool.OnIndexChange.connect(function (sender, index) {
//    if (index === 0) {
//        API.setPlayerSkin(-1286380898);
//    }
//});
//medicSkinPool.OnItemSelect.connect(function (sender, item, index) {
//});
//// firecrew menus ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//fireSkinPool.OnIndexChange.connect(function (sender, index) {
//    if (index === 0) {
//        API.setPlayerSkin(-1229853272);
//    }
//});
//fireSkinPool.OnItemSelect.connect(function (sender, item, index) {
//});
//// security menus ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//securitySkinPool.OnIndexChange.connect(function (sender, index) {
//    if (index === 0) {
//        API.setPlayerSkin(-681004504);
//    }
//});
//securitySkinPool.OnItemSelect.connect(function (sender, item, index) {
//});
//// host menus ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//hostSkinPool.OnIndexChange.connect(function (sender, index) {
//    if (index === 0) {
//        API.setPlayerSkin(1567728751);
//    }
//});
//hostSkinPool.OnItemSelect.connect(function (sender, item, index) {
//});
//// passener menus ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//passengerSkinPool.OnIndexChange.connect(function (sender, index) {
//    if (index === 0) {
//        API.setPlayerSkin(-1717894970);
//    }
//});
//passengerSkinPool.OnItemSelect.connect(function (sender, item, index) {
//});
API.onUpdate.connect(function () {
    menuPool.ProcessMenus();
});
