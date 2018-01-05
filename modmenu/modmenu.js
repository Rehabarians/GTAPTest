var menuPool = null;

var mainMenu = null;
var mainMenuItems = ["Vehicle Mods", "Set personal vehicle", "Request personal vehicle", "Repair", "Set power", "Set jump"];

var modMenu = null;
var vehicleMods = ["Spoilers","Front Bumper","Rear Bumper","Side Skirt","Exhaust","Frame","Grille","Hood","Fender","Right Fender","Roof","Engine","Brakes","Transmission","Horns","Suspension","Armor","Turbo","Xenon","Front Wheels","Back Wheels","Plate holders","Trim Design","Ornaments","Dial Design","Steering Wheel","Shift Lever","Plaques","Hydraulics","Livery","Plate","Colour 1","Colour 2","Window Tint"];
var vehicleModIndexes = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,22,23,24,25,27,28,30,33,34,35,38,48,62,66,67,69];

var modOptionsMenu = null;
var modOption = null;

var setPowerMenu = null;
var setPowerList = [1, 10, 50, 100, 250, 500, 1000, 5000, 10000];

var setJumpMenu = null;
var setJumpList = [0, 5, 10, 15, 20, 25, 100];

//Global variables to keep track of vehicle mods
var isChangingMod = false;
var selectedModType = 0;
var selectedModIndex = -1;

var personalVehicle = null;

var jumpForce = 0;

API.onUpdate.connect(function(s, e) 
{
	if (menuPool != null) 
	{
        menuPool.ProcessMenus();
    }
});

//When ModMenu is started, create all the required menus and hide them
API.onResourceStart.connect(function(s, e) 
{
	menuPool = API.getMenuPool();
	createMainMenu();
	createModMenu();
	createModOptionsMenu();
	createSetPowerMenu();
	createSetJumpMenu();
});

API.onServerEventTrigger.connect(function (eventName, args) 
{
  switch (eventName) 
  {
    case 'OpenModMenu':
	openMainMenu();
    break;
  }
});

API.onKeyDown.connect(function (sender, e)
 {
	//Vehicle jumping, only happens when jumpForce is set
    if (e.KeyCode === Keys.Space && !API.isChatOpen() && jumpForce > 0) 
    {
	  API.triggerServerEvent("VehicleJump", jumpForce);
    }
	
	//M key opens mod menu
    if (e.KeyCode === Keys.M && !API.isChatOpen())
    {
	  	openMainMenu();
	  	isChangingMod = false;
    }
  
  //Left arrow for switching mod type
  if (e.KeyCode === Keys.Left && isChangingMod) 
  {
	  if(selectedModIndex >= 0)
	  {
		 selectedModIndex--;	
		 modOption.Text = " " + selectedModIndex;		  
		 API.triggerServerEvent("ChangeVehicleMod", selectedModType, selectedModIndex);
	  }
  }
  
  //Right arrow for switching mod type
  if (e.KeyCode === Keys.Right && isChangingMod) 
  {
	selectedModIndex++;
	modOption.Text = " " + selectedModIndex;
	API.triggerServerEvent("ChangeVehicleMod", selectedModType, selectedModIndex);
  }
})

function createMainMenu() 
{
	//Create the main menu
	mainMenu = API.createMenu("Vehicle Menu", "", 0, 0, 6);
	
	for (var i = 0; i < mainMenuItems.length; i++) 
	{
		mainMenu.AddItem(API.createMenuItem(mainMenuItems[i], ""));
	}

	mainMenu.CurrentSelection = 0;
	menuPool.Add(mainMenu);
	mainMenu.Visible = false; 
	
	//Gets called when we select a category
	mainMenu.OnItemSelect.connect(function(sender, item, index)
	{
		switch (index) 
		{
			case 0:
			openModMenu();
			break;

			case 1:
			setPersonalVehicle();
			break;

			case 2:
			getPersonalVehicle();
			break;

			case 3:
			repairVehicle();
			break;

			case 4:
			showSetPowerMenu();
			break;

			case 5:
			showSetJumpMenu();
			break;
		}
	});
}

function repairVehicle()
{
	API.triggerServerEvent("RepairVehicle");
	mainMenu.Visible = false;
}

function createSetJumpMenu()
{
	//Create the main mod selection menu
	setJumpMenu = API.createMenu("Set jump force", 0, 0, 6);
	
	for (var i = 0; i < setJumpList.length; i++) 
	{
		setJumpMenu.AddItem(API.createMenuItem(" " + setJumpList[i], ""));
	}

	setJumpMenu.CurrentSelection = 0;
	menuPool.Add(setJumpMenu);
	setJumpMenu.Visible = false; 
	
	//Gets called when we select the power
	setJumpMenu.OnItemSelect.connect(function(sender, item, index)
	{
		setJumpMenu.Visible = false; 
		jumpForce = Number(item.Text);
		API.sendNotification("Jump force set: ~r~" + jumpForce);
	});
}

function createModMenu() 
{
	//Create the main mod selection menu
	modMenu = API.createMenu("Vehicle Mods", 0, 0, 6);
	
	for (var i = 0; i < vehicleMods.length; i++) 
	{
		modMenu.AddItem(API.createMenuItem(vehicleMods[i], ""));
	}

	modMenu.CurrentSelection = 0;
	menuPool.Add(modMenu);
	modMenu.Visible = false; 
	
	//Gets called when we select a mod category
	modMenu.OnItemSelect.connect(function(sender, item, index)
	{
		selectedModType = vehicleModIndexes[index];
		modMenu.Visible = false; 
		isChangingMod = true;
		API.triggerServerEvent("ChangeVehicleMod", selectedModType, selectedModIndex);
		openModOptions();
	});
}

function createModOptionsMenu() 
{
	modOptionsMenu = API.createMenu("Select mod", 0, 0, 6);
	modOption = API.createMenuItem(" -1", "")
	modOptionsMenu.AddItem(modOption);
	modOptionsMenu.CurrentSelection = 0;
	modOptionsMenu.Visible = false; 
	menuPool.Add(modOptionsMenu);
	 
	//Gets called when we apply a mod
	modOptionsMenu.OnItemSelect.connect(function(sender, item, index)
	{
		API.sendNotification('Mod ~g~' + selectedModIndex + "~w~ applied");
		modOptionsMenu.Visible = false; 
		modOption.Text = " -1";	
		openModMenu();
		selectedModIndex = -1;
		isChangingMod = false;
	});
}

function createSetPowerMenu() 
{
	//Create the main mod selection menu
	setPowerMenu = API.createMenu("Set engine power multiplier", 0, 0, 6);
	
	for (var i = 0; i < setPowerList.length; i++) 
	{
		setPowerMenu.AddItem(API.createMenuItem(" " + setPowerList[i], ""));
	}

	setPowerMenu.CurrentSelection = 0;
	menuPool.Add(setPowerMenu);
	setPowerMenu.Visible = false; 
	
	//Gets called when we select the power
	setPowerMenu.OnItemSelect.connect(function(sender, item, index)
	{
		setPowerMenu.Visible = false; 
		API.triggerServerEvent("SetVehiclePower", Number(item.Text));
	});
}

function openMainMenu() 
{
    mainMenu.CurrentSelection = 0;
	mainMenu.Visible = true; 
}

function openModMenu() 
{
	mainMenu.Visible = false;
	modMenu.Visible = true; 
}

function openModOptions() 
{
	modMenu.Visible = false;
    modOptionsMenu.CurrentSelection = 0;
	modOptionsMenu.Visible = true; 
}

function setPersonalVehicle()
{
	personalVehicle = API.getPlayerVehicle(API.getLocalPlayer());
	API.sendNotification("~g~" + API.getVehicleDisplayName(API.getEntityModel(personalVehicle)) +"~w~ set as personal vehicle");
	mainMenu.Visible = false;
}

function getPersonalVehicle()
{
	API.triggerServerEvent("SetPlayerIntoVehicle", personalVehicle);
	mainMenu.Visible = false;
}

function showSetPowerMenu()
{
	mainMenu.Visible = false;
	setPowerMenu.Visible = true; 
}

function showSetJumpMenu()
{
	mainMenu.Visible = false;
	setJumpMenu.Visible = true; 
}