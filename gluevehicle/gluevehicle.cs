using System.Linq;
using GTANetworkServer;
using GTANetworkShared;

public class GlueScript : Script
{
	[Command("strap", Alias = "Strap")]
	public void GlueVehicle(Client sender)
	{
        var Vehicle = API.getPlayerVehicle(sender);
		if(API.isEntityAttachedToAnything(Vehicle))
		{
			API.detachEntity(Vehicle, false);
			API.sendChatMessageToPlayer(sender, "~g~Vehicle Unglued!");
			return;
		}

		var vehicles = API.getAllVehicles();
		var vehiclePos = API.getEntityPosition(Vehicle);

		if (vehicles.Count == 0)
		{
			API.sendChatMessageToPlayer(sender, "~r~ERROR: ~w~No nearby vehicles!");
			return;
		}

		var vOrd = vehicles.OrderBy(v => API.getEntityPosition(v).DistanceToSquared(vehiclePos));
		var targetVehicle = vOrd.ElementAt(1);

		if (API.fetchNativeFromPlayer<bool>(sender, 0x17FFC1B2BA35A494, Vehicle, targetVehicle))
		{
			var positionOffset = API.fetchNativeFromPlayer<Vector3>(sender, 0x2274BC1C4885E333, targetVehicle, vehiclePos.X, vehiclePos.Y, vehiclePos.Z);
			var rotOffset = API.getEntityRotation(targetVehicle) - API.getEntityRotation(Vehicle);

			rotOffset = new Vector3(rotOffset.X, rotOffset.Y, rotOffset.Z * -1f);

			API.attachEntityToEntity(Vehicle, targetVehicle, null, positionOffset, rotOffset);
            API.setEntityCollisionless(Vehicle, false);

			API.sendChatMessageToPlayer(sender, "~g~ Vehicle Glued!");
		}
	}
}