using GTANetworkServer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Threading;

namespace GTAPilots
{
    public class RandomWeatherLite : Script
    {
        string[] WeatherArray = new string[] { "Extra Sunny", "Clear", "Clouds", "Smog", "Foggy", "Overcast", "Rain", "Thunder", "Light Rain", "Smoggy Light Rain (Do Not Use)", "Very Light Snow", "Windy Light Snow", "Light Snow" };

        Timer WeatherTime1;

        private static Random random1 = new Random();

        public RandomWeatherLite()
        {
            API.onResourceStart += ResourceStart;
        }

        public void ResourceStart()
        {

            double time1 = 0;

            int weatherRandom = random1.Next(0, 12);

            if (weatherRandom == 9)
            {
                do
                {

                    Console.ForegroundColor = ConsoleColor.DarkGreen;
                    API.consoleOutput("Weather 9 selected. Rerolling");
                    weatherRandom = random1.Next(0, 12);

                    Console.ResetColor();

                } while (weatherRandom == 9);
            }

            if (weatherRandom == 0 || weatherRandom == 1)
            {
                time1 = random1.Next(30, 59);
            }

            else if (weatherRandom == 7)
            {
                time1 = random1.Next(5, 10);
            }

            else
            {
                time1 = random1.Next(10, 30);
            }

            API.setWeather(weatherRandom);
            var currentWeather = API.getWeather();
            var consoleWeather = WeatherArray[currentWeather];

            int delayTime1 = Convert.ToInt32(time1);

            TimeSpan dTime1 = new TimeSpan(00, delayTime1, 00);
            Console.ForegroundColor = ConsoleColor.Blue;
            API.consoleOutput("The current weather is " + consoleWeather + ".");
            API.consoleOutput("The next change is in " + delayTime1 + " minutes.");
            Console.ResetColor();

            WeatherTime1 = new Timer(TimeWeather1, null, dTime1, dTime1);
        }

        private void TimeWeather1(object o)
        {
            double time1 = 0;

            int weatherRandom = random1.Next(0, 12);

            if (weatherRandom == 9)
            {
                do
                {

                    Console.ForegroundColor = ConsoleColor.DarkGreen;

                    API.consoleOutput("Weather 9 selected. Rerolling");
                    weatherRandom = random1.Next(0, 12);

                    Console.ResetColor();

                } while (weatherRandom == 9);

            }

            if (weatherRandom == 0 || weatherRandom == 1)
            {
                time1 = random1.Next(30, 59);
            }

            else if (weatherRandom == 7)
            {
                time1 = random1.Next(5, 10);
            }

            else
            {
                time1 = random1.Next(10, 30);
            }

            API.setWeather(weatherRandom);
            var currentWeather = API.getWeather();
            var consoleWeather = WeatherArray[currentWeather];

            int delayTime1 = Convert.ToInt32(time1);

            TimeSpan dTime2 = new TimeSpan(00, delayTime1, 00);

            API.sendChatMessageToAll("Current Weather: " + consoleWeather);
            Console.ForegroundColor = ConsoleColor.Red;
            API.consoleOutput("The current weather is " + consoleWeather + ".");
            API.consoleOutput("The next change is in " + delayTime1 + " minutes.");

            Console.ResetColor();

            WeatherTime1.Change(dTime2, dTime2);
        }
    }
}