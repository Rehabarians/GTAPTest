using GTANetworkServer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Threading;

namespace GTAPilots
{
    public class RandomWeather : Script
    {
        //Aray with all weather names in
        string[] WeatherArray = new string[] { "Extra Sunny", "Clear", "Clouds", "Smog", "Foggy", "Overcast", "Rain", "Thunder", "Light Rain", "Smoggy Light Rain (Do Not Use)", "Very Light Snow", "Windy Light Snow", "Light Snow" };
       
        //List to show the current and next weather
        List<int> WeatherSetup = new List<int>(2);

        //Timer Initialization for the weather
        Timer WeatherTime1;

        private static Random random1 = new Random();

        public RandomWeather()
        {
            API.onResourceStart += ResourceStart;
        }

        public void ResourceStart()
        {
            //Sets up all integer variables
            int time1 = 0;

            int weatherRandomiser = 0;
            int weatherRandom = 0;
            int weatherNext = 0;

            //Populates the WeatherSetup list when server first starts
            do
            {
                weatherRandomiser = random1.Next(0, 12);

                //Weather 9 produces filters on screen (example: black and white filter)
                //This calls the random number again to avoid it
                //Can add other undesirable weather types
                if (weatherRandomiser == 9)
                {
                    //Loop ensures weather 9 can never be a result
                    do
                    {
                        //Debugging purposes
                        Console.ForegroundColor = ConsoleColor.DarkGreen;
                        API.consoleOutput("Weather 9 selected. Rerolling");
                        
                        weatherRandomiser = random1.Next(0, 12);

                        Console.ResetColor();

                    } while (weatherRandomiser == 9);
                }

                WeatherSetup.Add(weatherRandomiser);

                //Loop ensures that the list is fully populated
            } while (WeatherSetup.Count < 2);

            weatherRandom = WeatherSetup.ElementAt(0);
            weatherNext = WeatherSetup.ElementAt(1);

            //For more randomness
            //Varies the time the weather is in effect for
            //Can add more variables or modify the current ones
            if (weatherRandom == 0 || weatherRandom == 1) //Extra Sunny and clear (Nice weathers for longer)
            {
                time1 = random1.Next(30, 59);
            }

            else if (weatherRandom == 7) //Thunder (Horrible weather for shorter
            {
                time1 = random1.Next(5, 10);
            }

            else //All other weathers
            {
                time1 = random1.Next(10, 30);
            }

            //Sets the weather
            API.setWeather(weatherRandom);

            int currentWeather = API.getWeather();

            //Converts the weather int into a readable string
            string consoleWeatherCurrent = WeatherArray[currentWeather];
            string consoleWeatherNext = WeatherArray[weatherNext];

            //Sets up the time the current weather will be in effect for in minutes
            TimeSpan dTime1 = new TimeSpan(00, time1, 00);

            //Debugging purposes again
            Console.ForegroundColor = ConsoleColor.Blue;
            API.consoleOutput("The current weather is " + consoleWeatherCurrent + ".");
            API.consoleOutput("The next weather is " + consoleWeatherNext + ".");
            API.consoleOutput("The next change is in " + time1 + " minutes.");
            Console.ResetColor();

            //Creates and starts timer
            WeatherTime1 = new Timer(TimeWeather1, null, dTime1, dTime1);

            //Removes current weather and replaces it with the next weather
            WeatherSetup.RemoveAt(0);
            WeatherSetup.Insert(0, weatherNext);
            WeatherSetup.RemoveAt(1);

            //Randomises the next weather
            weatherRandomiser = random1.Next(0, 12);

            if (weatherRandomiser == 9)
            {
                do
                {
                    Console.ForegroundColor = ConsoleColor.DarkGreen;
                    API.consoleOutput("Weather 9 selected. Rerolling");
                    weatherRandomiser = random1.Next(0, 12);

                    Console.ResetColor();

                } while (weatherRandomiser == 9);
            }

            //Inserts the new next weather into the list
            WeatherSetup.Insert(1, weatherRandomiser);
        }

        //This is called when the timer counts down to 0
        private void TimeWeather1(object o)
        {
            //Same as in onResourceStart except without filling the list
            int time1 = 0;

            int weatherRandomiser = 0;
            int weatherRandom = 0;
            int weatherNext = 0;

            weatherRandom = WeatherSetup.ElementAt(0);
            weatherNext = WeatherSetup.ElementAt(1);

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
            int currentWeather = API.getWeather();
            int nextWeather = WeatherSetup.Last();

            string consoleWeatherCurrent = WeatherArray[currentWeather];
            string consoleWeatherNext = WeatherArray[nextWeather];

            //This ests the time to the new random time
            TimeSpan dTime2 = new TimeSpan(00, time1, 00);

            //Annouces to players what the weather is now set to and what weather is to come
            API.sendChatMessageToAll("~b~Current Weather: ~w~" + consoleWeatherCurrent + " ~y~|| ~b~Forecast Weather: ~w~" + consoleWeatherNext);

            //Debugging Purposes
            Console.ForegroundColor = ConsoleColor.Red;
            API.consoleOutput("The current weather is " + consoleWeatherCurrent + ".");
            API.consoleOutput("The next weather is " + consoleWeatherNext + ".");
            API.consoleOutput("The next change is in " + time1 + " minutes.");

            Console.ResetColor();

            //Changes timer to the set time
            WeatherTime1.Change(dTime2, dTime2);

            //Same as above
            //Removes the current weather and replaces it with the forecast weather
            WeatherSetup.RemoveAt(0);
            WeatherSetup.Insert(0, weatherNext);
            WeatherSetup.RemoveAt(1);

            //Generates a new forecast weather
            weatherRandomiser = random1.Next(0, 12);

            if (weatherRandomiser == 9)
            {
                do
                {
                    Console.ForegroundColor = ConsoleColor.DarkGreen;
                    API.consoleOutput("Weather 9 selected. Rerolling");
                    weatherRandomiser = random1.Next(0, 12);

                    Console.ResetColor();

                } while (weatherRandomiser == 9);
            }

            WeatherSetup.Insert(1, weatherRandomiser);
        }

        //Command to enter to see what the current and forecast weather is
        //Metar is mainly aviation term. Can be removed
        [Command("weather", Alias = "metar")]
        public void WeatherCommand(Client player)
        {
            int weatherCurrent = API.getWeather();
            int weatherNext = WeatherSetup.ElementAt(1);

            string currentWeather = WeatherArray[weatherCurrent];
            string nextWeather = WeatherArray[weatherNext];

            API.sendChatMessageToPlayer(player, "~b~Metar - Current weather ~w~" + currentWeather + " ~y~|| ~b~Forecast Weather: ~w~" + nextWeather);
        }
    }
}