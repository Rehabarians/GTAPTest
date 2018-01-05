using System;
using System.Linq;
using System.Collections.Generic;
using System.IO;
using System.Text;
using GrandTheftMultiplayer.Server;
using GrandTheftMultiplayer.Server.API;
using GrandTheftMultiplayer.Server.Managers;
using GrandTheftMultiplayer.Server.Elements;
using GrandTheftMultiplayer.Server.Constant;
using GrandTheftMultiplayer.Shared;
using GrandTheftMultiplayer.Shared.Math;
using System.Threading;

public class ModMenu : Script
{
	public ModMenu()
	{
		API.onClientEventTrigger += ScriptEvent;
	}


	public void ScriptEvent(Client sender, string eventName, object[] args)
	{
		if (eventName == "ChangeVehicleMod")
		{
			API.setVehicleMod(API.getPlayerVehicle(sender), (int)args[0], (int)args[1]);
		}
		if (eventName == "VehicleJump")
		{
			if(API.isPlayerInAnyVehicle(sender))
			{
				Vector3 vel = new Vector3(0,0,(int)args[0]);
				API.setPlayerVelocity(sender, API.getPlayerVelocity(sender).Add(vel));
			}
		}

		if (eventName == "SetPlayerIntoVehicle")
		{
			API.setEntityPosition((NetHandle) args[0], API.getEntityPosition(sender.handle));
			API.setPlayerIntoVehicle(sender, (NetHandle) args[0], -1);
		}

		if (eventName == "RepairVehicle")
		{
			API.setVehicleHealth(API.getPlayerVehicle(sender), 1000);
			API.repairVehicle(API.getPlayerVehicle(sender));
			API.sendNotificationToPlayer(sender, "Damage repaired!");
		}

		if (eventName == "SetVehiclePower")
		{
			API.setVehicleEnginePowerMultiplier(API.getPlayerVehicle(sender), (int)args[0]);
			API.sendNotificationToPlayer(sender, "Vehicle power multiplied by ~r~" + (int)args[0]);
		}
	}
	
	[Command("modhelp")]
    public void PrintModHelp(Client sender)
    {
		API.sendChatMessageToPlayer(sender, "~r~/modmenu~w~ opens the vehicle mod menu, or press M!");  
		API.sendChatMessageToPlayer(sender, "~r~/power~w~ allows you to multiply your vehicle power!"); 
		API.sendChatMessageToPlayer(sender, "~r~/repair~w~ repairs all damage to vehicle!");
		API.sendChatMessageToPlayer(sender, "~r~/seatbelt~w~ put on your seatbelt, safety first!");
		API.sendChatMessageToPlayer(sender, "~r~/neon~w~ apply fancy lights!");
		API.sendChatMessageToPlayer(sender, "~r~/vehiclejump~w~ enable jumping with spacebar!");
    }
	
	[Command("modmenu")]
    public void OpenModMenuCommand(Client sender)
    {
		if(API.isPlayerInAnyVehicle(sender))
		{
			API.triggerClientEvent(sender, "OpenModMenu");
		}
		else
		{
			//API.sendNotificationToPlayer(sender, "You need to be in a vehicle to open the vehicle mod menu!");
		}
        
    }
	
	[Command("power")]
    public void SetPowerCommand(Client sender, float multiplier)
    {
        API.setVehicleEnginePowerMultiplier(API.getPlayerVehicle(sender), multiplier);
		API.sendNotificationToPlayer(sender, "Power applied to vehicle!");
    }
	
	[Command("repair")]
    public void SetRepairCommand(Client sender)
    {
		API.setVehicleHealth(API.getPlayerVehicle(sender), 1000);
		API.repairVehicle(API.getPlayerVehicle(sender));
		API.sendNotificationToPlayer(sender, "Damage repaired!");
    }
	
	[Command("seatbelt")]
    public void SetSeatbeltCommand(Client sender)
    {
		API.setPlayerSeatbelt(sender, true);
		API.sendNotificationToPlayer(sender, "Seatbelt on!");
    }
	[Command("neon")]
    public void SetNeonCommand(Client sender, int r, int g, int b)
    {
		API.setVehicleNeonState(API.getPlayerVehicle(sender), 0, true);
		API.setVehicleNeonState(API.getPlayerVehicle(sender), 1, true);
		API.setVehicleNeonState(API.getPlayerVehicle(sender), 2, true);
		API.setVehicleNeonState(API.getPlayerVehicle(sender), 3, true);
		API.setVehicleNeonColor(API.getPlayerVehicle(sender), r, g, b);
		API.sendNotificationToPlayer(sender, "Neon applied!");
    }
	
	[Command("vehiclejump")]
    public void SetJumpCommand(Client sender, int force)
    {
		API.triggerClientEvent(sender, "SetJumpForce", force);
		API.sendNotificationToPlayer(sender, "Jump force set to " + force + "!");
    }
}