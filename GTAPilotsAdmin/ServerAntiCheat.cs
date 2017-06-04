using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using GTANetworkServer;
using GTANetworkShared;

namespace GTAPilotsAdmin
{
    public class ServerAntiCheat : Script
    {
        long[] ValidSkins = {-413447396, -9332954806, -1280051738, -1422914553, -163714847, 1657546978, 755956971, 1694362237, -905948951, 1461287021, 1644266841, -1635724594, -1286380898, -1229853272, -681004504, 691061163, 1096929346, 1567728751, 1312913862, -2113195075, -912318012, 330231874, 951767867 };

        public ServerAntiCheat()
        {
            API.onResourceStart += OnResourceStart;
            API.onPlayerModelChange += OnPlayerModelChange;
            API.onPlayerArmorChange += OnPlayerArmorChange;
            API.onPlayerWeaponSwitch += OnPlayerWeaponSwitch;
        }

        private void OnResourceStart()
        {
            
        }

        private void OnPlayerModelChange(Client player, int oldValue)
        {
            string isAdmin = API.getPlayerAclGroup(player);

            if(isAdmin != "Moderator" || isAdmin != "Admin")
            {
                foreach (var Skin in ValidSkins)
                {
                    long NewSkin = API.getEntityModel(player);

                    if (NewSkin != Skin)
                    {
                        string Hacker = API.getPlayerName(player);
                        API.sendChatMessageToAll(Hacker + " Has been kicked for skin hack");
                        API.kickPlayer(player);
                    }
                }
            }
        }

        private void OnPlayerArmorChange(Client player, int oldValue)
        {
            int NewArmour = API.getPlayerArmor(player);

            if (NewArmour > 0)
            {
                string Hacker = API.getPlayerName(player);
                API.kickPlayer(player);
                API.sendChatMessageToAll(Hacker + " has been kicked for armour hack");
            }
        }

        private void OnPlayerWeaponSwitch(Client player, WeaponHash oldValue)
        {
            string Class = API.getEntitySyncedData(player, "ClassType");

            if (Class != "Security")
            {

            }
        }

    }
}
