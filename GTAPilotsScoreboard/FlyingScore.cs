using GTANetworkServer;
using GTANetworkShared;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Timers;

namespace GTAPilots
{
    public class FlyingScore : Script
    {
        int Score = 0;

        public FlyingScore()
        {

            API.onResourceStart += ResourceStart;
            API.onPlayerConnected += PlayerConnected;
            API.onEntityDataChange += OnEntityDataChange;
            API.onClientEventTrigger += ClientEventTrigger;

        }

        public void ResourceStart()
        {

        }


        private void PlayerConnected(Client player)
        {
            API.setEntityData(player.handle, "Score", 0);
            API.setEntitySyncedData(player.handle, "Local_Score", 0);
        }
        
        public void ClientEventTrigger(Client player, string Event, params object[] arguments)
        {

            if (Event == "Update")
            {
                var inVehicle = API.isPlayerInAnyVehicle(player);
                //var dataAircraft = API.getEntitySyncedData(player, "Aircraft");
                var playerVehicle = API.getPlayerVehicle(player);
                var entityModel = API.getEntityModel(playerVehicle);
                var inAircraft = API.getVehicleClass((VehicleHash)entityModel);
                var playerSeat = API.getPlayerVehicleSeat(player);
                CancellationTokenSource source = new CancellationTokenSource();


                if (inVehicle == true)
                {
                    //API.sendChatMessageToPlayer(player, "Your in a vehicle!");

                    if (inAircraft == 15 || inAircraft == 16)
                    {
                        //API.sendChatMessageToPlayer(player, "Your in an Aircraft!");

                        if (playerSeat == -1)
                        {
                            var token = source.Token;
                            //API.sendChatMessageToPlayer(player, "Your in the drivers seat!");
                            var t = Task.Run(async delegate
                            {
                                await Task.Delay(TimeSpan.FromMinutes(1), token);

                                Score = Score + 1;

                                return;
                            });
                        }

                        else if (playerSeat == 0)
                        {
                            var token = source.Token;
                            var t = Task.Run(async delegate
                            {
                                await Task.Delay(TimeSpan.FromMinutes(2), token);

                                Score = Score + 1;

                                return;
                            });
                        }

                        else
                        {
                            source.Cancel(false);
                        }

                    }

                    else
                    {
                        source.Cancel(false);
                    }
                }

                else
                {
                    source.Cancel(false);
                }
            }

            else if (Event == "WriteScore")
            {
                var PScore = API.getEntityData(player, "Score");
                SetPlayerLevel(player, PScore);
            }

            else
            {

            }
        }

        public void SetPlayerLevel(Client player, int Score)
        {

            API.setEntityData(player.handle, "Score", Score);
            API.setEntitySyncedData(player.handle, "Local_Score", Score);

        }

        public int GetPlayerLevel(Client player)
        {
            // Always check if the entity has the data we wan't to access before accessing it
            if (API.hasEntityData(player.handle, "Score"))
            {
                return API.getEntityData(player.handle, "Score");
            }

            // Just return 0 if it doesn't have the data
            return 0;
        }

        private void OnEntityDataChange(NetHandle entity, string key, object oldValue)
        {
            // If the modified key is the player's level
            if (key == "Local_Score")
            {
                // Get the new value it was set to
                int newValue = API.getEntitySyncedData(entity, key);

                // Get the real player's level value
                int playerScore = API.getEntityData(entity, "Score");

                // Never let the synced level be different from the locally stored level
                if (newValue != playerScore)
                {
                    // The synced level is different, so let's set it back to the correct value
                    API.setEntitySyncedData(entity, "Local_Score", playerScore);
                }
            }
        }
    }
}
