using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using GrandTheftMultiplayer.Server;
using GrandTheftMultiplayer.Server.API;
using GrandTheftMultiplayer.Server.Managers;
using GrandTheftMultiplayer.Server.Elements;
using GrandTheftMultiplayer.Server.Constant;
using GrandTheftMultiplayer.Shared;
using GrandTheftMultiplayer.Shared.Math;

namespace FreemodeSkinClothes
{
    public class FreemodeSkinClothingServer : Script
    {
        public FreemodeSkinClothingServer()
        {
            API.onPlayerFinishedDownload += OnPlayerFinishedDownload;
            API.onClientEventTrigger += OnClientEventTrigger;
        }

        private void OnPlayerFinishedDownload(Client player)
        {
            API.triggerClientEvent(player, "MenuGeneration");
        }

        private void OnClientEventTrigger(Client sender, string eventName, params object[] arguments)
        {
            if (eventName == "AccessoryAccepted")
            {
                string Slot = (string)arguments[0];
                int Variation = (int)arguments[1];
                int Texture = (int)arguments[2];
                API.sendChatMessageToPlayer(sender, "Slot = " + arguments[0]);
                
                if (Slot == "Hat")
                {
                    API.setPlayerAccessory(sender, 0, Variation, Texture);
                }
                else if (Slot == "Earrings")
                {
                    API.sendChatMessageToPlayer(sender, "Earring Variation = " + arguments[1]);
                    API.sendChatMessageToPlayer(sender, "Earring Texture = " + arguments[2]);
                    API.setPlayerAccessory(sender, 2, Variation, Texture);
                }
                else if (Slot == "Glasses")
                {
                    API.sendChatMessageToPlayer(sender, "Glasses Variation = " + arguments[1]);
                    API.sendChatMessageToPlayer(sender, "Glasses Texture = " + arguments[2]);

                    API.setPlayerAccessory(sender, 1, Variation, Texture);
                }
                else if (Slot == "Watches")
                {
                    API.setPlayerAccessory(sender, 6, Variation, Texture);
                }
                else if (Slot == "Bracelet")
                {
                    API.setPlayerAccessory(sender, 7, Variation, Texture);
                }
            }
            else if (eventName == "ClothesAccepted")
            {
                string Slot = (string)arguments[0];
                int Variation = (int)arguments[1];
                int Texture = (int)arguments[2];

                if (Slot == "Mask")
                {
                    API.setPlayerClothes(sender, 1, Variation, Texture);
                }
                else if (Slot == "Neck")
                {
                    API.setPlayerClothes(sender, 7, Variation, Texture);
                }
                else if (Slot == "Top")
                {
                    API.setPlayerClothes(sender, 11, Variation, Texture);
                }
                else if (Slot == "Undershirt")
                {
                    API.setPlayerClothes(sender, 8, Variation, Texture);
                }
                else if (Slot == "Gloves")
                {
                    API.setPlayerClothes(sender, 3, Variation, Texture);
                }
                else if (Slot == "Trousers")
                {
                    API.setPlayerClothes(sender, 4, Variation, Texture);
                }
                else if (Slot == "Shoes")
                {
                    API.setPlayerClothes(sender, 6, Variation, Texture);
                }
            }
        }

        [Command("clothesmenu", Alias = "cm")]
        public void ClothesMenuCommand (Client Player)
        {
            API.triggerClientEvent(Player, "ClothesMenu");
        }
    }
}
