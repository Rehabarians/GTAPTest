using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Timers;
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

namespace GTAPilots
{
    public class FlyingScore : Script
    {
        Timer Captain;
        Timer FirstOfficer;

        public FlyingScore()
        {

            API.onResourceStart += ResourceStart;
            //API.onPlayerConnected += PlayerConnected;
            API.onPlayerFinishedDownload += OnPlayerFinishedDownload;
            API.onEntityDataChange += OnEntityDataChange;
            API.onPlayerEnterVehicle += OnPlayerEnterVehicle;
            API.onPlayerExitVehicle += OnPlayerExitVehicle;
            API.onPlayerChangeVehicleSeat += OnPlayerChangeVehicleSeat;
            API.onPlayerDisconnected += OnPlayerDisconnected;
        }

        public void ResourceStart()
        {

        }


        //private void PlayerConnected(Client player)
        //{
        //    API.setEntityData(player.handle, "Score", 0);
        //    API.setEntitySyncedData(player.handle, "Local_Score", 0);
        //}

        private void OnPlayerFinishedDownload(Client player)
        {
            bool anyScore = API.hasEntityData(player, "Score");
            bool anyLocalScore = API.hasEntitySyncedData(player, "Local_Score");
            if (anyScore == false)
            {
                API.setEntityData(player.handle, "Score", 0);
            }

            if (anyLocalScore == false)
            {
                API.setEntitySyncedData(player.handle, "Local_Score", 0);
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

        private void OnPlayerEnterVehicle(Client player, NetHandle vehicle, int seat)
        {
            Vehicle Aircraft = API.getEntityFromHandle<Vehicle>(vehicle);
            if (Aircraft.Class == 15 || Aircraft.Class == 16)
            {
                int PlayerSeat = API.getPlayerVehicleSeat(player);
                
                if (PlayerSeat == -1)
                {
                    Captain = API.startTimer(60000, false, () =>
                    {
                        API.setEntityData(player, "TimerRunning", "Captain");
                        int Score = GetPlayerLevel(player) + 1;
                        SetPlayerLevel(player, Score);
                    });
                }
                else if (PlayerSeat == 0)
                {
                    FirstOfficer = API.startTimer(120000, false, () =>
                    {
                        API.setEntityData(player, "TimerRunning", "FirstOfficer");
                        int Score = GetPlayerLevel(player) + 1;
                        SetPlayerLevel(player, Score);
                    });
                }
            }
        }

        private void OnPlayerExitVehicle(Client player, NetHandle vehicle, int seat)
        {
            bool hasData = API.hasEntityData(player, "TimerRunning");
            if (hasData == true)
            {
                string TimerRunning = API.getEntityData(player, "ScoreTimerCaptain");
                if (TimerRunning == "Captain")
                {
                    API.setEntityData(player, "TimerRunning", "None");
                    API.stopTimer(Captain);
                }
                else if(TimerRunning == "FirstOfficer")
                {
                    API.setEntityData(player, "TimerRunning", "None");
                    API.stopTimer(FirstOfficer);
                }
            }
        }

        private void OnPlayerChangeVehicleSeat(Client player, NetHandle vehicle, int oldSeat, int newSeat)
        {
            Vehicle Aircraft = API.getEntityFromHandle<Vehicle>(vehicle);
            if (Aircraft.Class == 15 || Aircraft.Class == 16)
            {
                if (newSeat == -1)
                {
                    bool hasData = API.hasEntityData(player, "TimerRunning");
                    if (hasData == true)
                    {
                        string TimerRunning = API.getEntityData(player, "TimerRunning");
                        if (TimerRunning == "FirstOfficer")
                        {
                            API.stopTimer(FirstOfficer);
                            Captain = API.startTimer(60000, false, () =>
                            {
                                API.setEntityData(player, "TimerRunning", "Captain");
                                int Score = GetPlayerLevel(player) + 1;
                                SetPlayerLevel(player, Score);
                            });
                        }
                        else if (TimerRunning == "None")
                        {
                            Captain = API.startTimer(60000, false, () =>
                            {
                                API.setEntityData(player, "TimerRunning", "Captain");
                                int Score = GetPlayerLevel(player) + 1;
                                SetPlayerLevel(player, Score);
                            });
                        }
                    }
                }
                else if (newSeat == 0)
                {
                    bool hasData = API.hasEntityData(player, "TimerRunning");
                    if (hasData == true)
                    {
                        string TimerRunning = API.getEntityData(player, "TimerRunning");
                        if (TimerRunning == "Captain")
                        {
                            API.stopTimer(Captain);
                            FirstOfficer = API.startTimer(1200000, false, () =>
                            {
                                API.setEntityData(player, "TimerRunning", "FirstOfficer");
                                int Score = GetPlayerLevel(player) + 1;
                                SetPlayerLevel(player, Score);
                            });
                        }
                        else if (TimerRunning == "None")
                        {
                            FirstOfficer = API.startTimer(1200000, false, () =>
                            {
                                API.setEntityData(player, "TimerRunning", "FirstOfficer");
                                int Score = GetPlayerLevel(player) + 1;
                                SetPlayerLevel(player, Score);
                            });
                        }
                    }
                }
                else if (newSeat > 0)
                {
                    bool hasData = API.hasEntityData(player, "TimerRunning");
                    if (hasData == true)
                    {
                        string TimerRunning = API.getEntityData(player, "TimerRunning");
                        if (TimerRunning == "Captain")
                        {
                            API.stopTimer(Captain);
                        }
                        else if (TimerRunning == "FirstOfficer")
                        {
                            API.stopTimer(FirstOfficer);
                        }
                    }
                }
            }
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

        private void OnPlayerDisconnected(Client player, string reason)
        {
            bool hasData = API.hasEntityData(player, "TimerRunning");
            if (hasData == true)
            {
                string TimerRunning = API.getEntityData(player, "TimerRunning");
                if (TimerRunning == "Captain")
                {
                    API.stopTimer(Captain);
                }
                else if (TimerRunning == "FirstOfficer")
                {
                    API.stopTimer(FirstOfficer);
                }
            }
        }
    }
}
