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
using System.Timers;

namespace GTAPilots
{
    public class Time : Script
    {
        // How much time do we want to add every time the timer does a heartbeat. HH / MM / SS
        static TimeSpan addOnTime = new TimeSpan(0, 01, 0);

        // At what time of day do we want our server to start at when we launch the script. EX: 12:00:00
        static TimeSpan serverStartTime = new TimeSpan(12, 0, 0);

        // Create a Timer so we can call it for other functions.
        Timer serverTimer;

        public Time()
        {
            API.onResourceStart += API_onResourceStart;
        }

        private void API_onResourceStart()
        {
            // Set the time to our start time.
            API.setTime(serverStartTime.Hours, serverStartTime.Minutes);

            // Create a timer that will run every minute.
            serverTimer = new Timer()
            {
                Interval = 6000
            };


            // This is what function will start everytime the timer ticks to the interval time.
            serverTimer.Elapsed += Elapsed_Daylight_Timer;


            // Enable it right when the resource starts.
            serverTimer.Enabled = true;

        }

        private void Elapsed_Daylight_Timer(object sender, ElapsedEventArgs e)
        {
            // Pull the current server time.
            TimeSpan serverTime = API.getTime();
            // Add on our Timespan static.
            serverTime += addOnTime;
            // Set the server time to our new time.
            API.setTime(serverTime.Hours, serverTime.Minutes);
            //
            //API.consoleOutput("{0}", API.getTime());
        }
         
        [Command("stoptime")]
        public void CmdStopTime(Client player)
        {
            serverTimer.Stop();
            API.sendChatMessageToPlayer(player, "The server time has been stopped.");
        }

        [Command("resumetime")]
        public void CmdStartTime(Client player)
        {
            serverTimer.Start();
            API.sendChatMessageToPlayer(player, "The server time has been resumed.");
        }
    }
}
