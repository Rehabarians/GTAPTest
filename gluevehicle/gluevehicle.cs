using System.Linq;
using System.Collections.Generic;
using GrandTheftMultiplayer.Server;
using GrandTheftMultiplayer.Server.API;
using GrandTheftMultiplayer.Server.Constant;
using GrandTheftMultiplayer.Server.Elements;
using GrandTheftMultiplayer.Server.Extensions;
using GrandTheftMultiplayer.Server.Managers;
using GrandTheftMultiplayer.Server.Models;
using GrandTheftMultiplayer.Server.Util;
using GrandTheftMultiplayer.Shared;
using GrandTheftMultiplayer.Shared.Gta;
using GrandTheftMultiplayer.Shared.Math;

public class GlueScript : Script
{
	[Command("strap", Alias = "Strap")]
	public void GlueVehicle(Client sender)
	{
        NetHandle Vehicle = API.getPlayerVehicle(sender);
		if(API.isEntityAttachedToAnything(Vehicle))
		{
			API.detachEntity(Vehicle, false);
			API.sendChatMessageToPlayer(sender, "~g~Vehicle Unglued!");
			return;
		}

		List<NetHandle> vehicles = API.getAllVehicles();
		Vector3 vehiclePos = API.getEntityPosition(Vehicle);

		if (vehicles.Count == 0)
		{
			API.sendChatMessageToPlayer(sender, "~r~ERROR: ~w~No nearby vehicles!");
			return;
		}

		IOrderedEnumerable<NetHandle> vOrd = vehicles.OrderBy(v => API.getEntityPosition(v).DistanceToSquared(vehiclePos));
		NetHandle targetVehicle = vOrd.ElementAt(1);

		if (API.fetchNativeFromPlayer<bool>(sender, 0x17FFC1B2BA35A494, Vehicle, targetVehicle))
		{
			Vector3 positionOffset = API.fetchNativeFromPlayer<Vector3>(sender, 0x2274BC1C4885E333, targetVehicle, vehiclePos.X, vehiclePos.Y, vehiclePos.Z);
			Vector3 rotOffset = API.getEntityRotation(targetVehicle) - API.getEntityRotation(Vehicle);

			rotOffset = new Vector3(rotOffset.X, rotOffset.Y, rotOffset.Z * -1f);

			API.attachEntityToEntity(Vehicle, targetVehicle, null, positionOffset, rotOffset);
            API.setEntityCollisionless(Vehicle, false);

			API.sendChatMessageToPlayer(sender, "~g~ Vehicle Glued!");
		}
	}
}