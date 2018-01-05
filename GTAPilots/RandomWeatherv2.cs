using GrandTheftMultiplayer.Server;
using GrandTheftMultiplayer.Server.API;
using GrandTheftMultiplayer.Server.Managers;
using GrandTheftMultiplayer.Server.Elements;
using GrandTheftMultiplayer.Shared;
using GrandTheftMultiplayer.Shared.Math;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Threading;
using GrandTheftMultiplayer.Server.Constant;

namespace GTAPilots
{
    public class RandomWeatherv2 : Script
    {
        //Aray with all weather names in
        string[] WeatherArray = new string[] { "Extra Sunny", "Clear", "Clouds", "Smog", "Foggy", "Overcast", "Rain", "Thunder", "Light Rain", "Smoggy Light Rain (Do Not Use)", "Very Light Snow", "Windy Light Snow", "Light Snow" };
       
        //List to show the current and next weather
        List<int> WeatherSetup = new List<int>(2);

        int[] ExtraSunnyClearWeather = new int[] { 0, 1, 2, 3, 4, 5, 12};
        int[] CloudsOvercastWeather = new int[] { 1, 2, 4, 5, 6, 8, 10, 11};
        int[] LightRainWeather = new int[] { 2, 4, 5, 6, 7, 8};
        int[] ThunderWeather = new int[] { 4, 5, 6, 7 };
        int[] SmogWeather = new int[] { 1, 2, 3, 4, 5, 8 };
        int[] FoggyWeather = new int[] { 1, 2, 3, 4, 5, 8, 10, 11, 12 };
        int[] SnowyWeather = new int[] { 2, 4, 5, 10, 11, 12 };
        //Timer Initialization for the weather
        Timer WeatherTime1;

        //Initialization for random numbers
        private static Random random1 = new Random();

        public RandomWeatherv2()
        {
            API.onResourceStart += ResourceStart;
            API.onPlayerFinishedDownload += OnPlayerFinishedDownload;
        }

        private void OnPlayerFinishedDownload(Client player)
        {         
            int weatherCurrent = API.getWeather();
            API.setWeather(weatherCurrent);
            //if (weatherCurrent > 9)
            //{
            //    API.triggerClientEvent(player, "Snow On");
            //}            
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
                //API.triggerClientEventForAll("Snow Off");
                time1 = random1.Next(30, 60);
            }

            else if (weatherRandom == 7) //Thunder (Horrible weather for shorter)
            {
                //API.triggerClientEventForAll("Snow Off");
                time1 = random1.Next(5, 15);
            }

            else if (weatherRandom == 10 || weatherRandom == 11 || weatherRandom == 12)
            {
                //API.triggerClientEventForAll("Snow On");
                time1 = random1.Next(15, 45);
            }

            else //All other weathers
            {
                //API.triggerClientEventForAll("Snow Off");
                time1 = random1.Next(20, 45);
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
            WeatherTime1 = new Timer(TimeWeather1, null, dTime1, TimeSpan.Zero);

            //Removes current weather and replaces it with the next weather
            WeatherSetup.RemoveAt(0);
            WeatherSetup.Insert(0, weatherNext);
            WeatherSetup.RemoveAt(1);


            int shiftedWeather = WeatherSetup.FirstOrDefault();

            if (shiftedWeather == 0) //Extra Sunny
            {
                weatherRandomiser = ExtraSunnyClearWeather[random1.Next(0, ExtraSunnyClearWeather.Length)];
            }

            else if (shiftedWeather == 1) //Clear
            {
                weatherRandomiser = ExtraSunnyClearWeather[random1.Next(0, ExtraSunnyClearWeather.Length)];
            }

            else if (shiftedWeather == 2)//Clouds
            {
                weatherRandomiser = CloudsOvercastWeather[random1.Next(0, CloudsOvercastWeather.Length)];
            }

            else if (shiftedWeather == 3)//Smog
            {
                weatherRandomiser = SmogWeather[random1.Next(0, SmogWeather.Length)];
            }

            else if (shiftedWeather == 4) //Foggy
            {
                weatherRandomiser = FoggyWeather[random1.Next(0, FoggyWeather.Length)];
            }

            else if (shiftedWeather == 5)//Overcast
            {
                weatherRandomiser = CloudsOvercastWeather[random1.Next(0, CloudsOvercastWeather.Length)];
            }

            else if (shiftedWeather == 6)//Rain
            {
                weatherRandomiser = LightRainWeather[random1.Next(0, LightRainWeather.Length)];
            }

            else if (shiftedWeather == 7)//Thunder
            {
                weatherRandomiser = ThunderWeather[random1.Next(0, ThunderWeather.Length)];
            }

            else if (shiftedWeather == 8)//Light Rain
            {
                weatherRandomiser = LightRainWeather[random1.Next(0, LightRainWeather.Length)];
            }

            else if (shiftedWeather == 10)//Very Light Snow
            {
                weatherRandomiser = SnowyWeather[random1.Next(0, SnowyWeather.Length)];
            }

            else if (shiftedWeather == 11)//Windy Light Snow
            {
                weatherRandomiser = SnowyWeather[random1.Next(0, SnowyWeather.Length)];
            }

            else if (shiftedWeather == 12)//Light Snow
            {
                weatherRandomiser = SnowyWeather[random1.Next(0, SnowyWeather.Length)];
            }


            Console.ForegroundColor = ConsoleColor.DarkMagenta;
            API.consoleOutput("The standby weather is " + WeatherArray[weatherRandomiser]);
            Console.ResetColor();

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

            API.consoleOutput(LogCat.Debug, "Triggering Transition Weather");
            API.triggerClientEventForAll("TransitionWeather", WeatherSetup.ElementAt(0));

            API.delay(200000, true, () =>
            {
                API.triggerClientEventForAll("TransitionEnd");
                API.consoleOutput(LogCat.Debug, "Weather Transition Complete");
                weatherRandom = WeatherSetup.ElementAt(0);
                weatherNext = WeatherSetup.ElementAt(1);

                API.triggerClientEventForAll("NextWeather", weatherNext);

                if (weatherRandom == 0 || weatherRandom == 1) //Extra Sunny and clear (Nice weathers for longer)
                {
                    //API.triggerClientEventForAll("Snow Off");
                    time1 = random1.Next(30, 60);
                }

                else if (weatherRandom == 7) //Thunder (Horrible weather for shorter)
                {
                    //API.triggerClientEventForAll("Snow Off");
                    time1 = random1.Next(5, 15);
                }

                else if (weatherRandom == 10 || weatherRandom == 11 || weatherRandom == 12)
                {
                    //API.triggerClientEventForAll("Snow On");
                    time1 = random1.Next(15, 45);
                }

                else //All other weathers
                {
                    //API.triggerClientEventForAll("Snow Off");
                    time1 = random1.Next(20, 45);
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
                WeatherTime1.Change(dTime2, TimeSpan.Zero);

                //Same as above
                //Removes the current weather and replaces it with the forecast weather
                WeatherSetup.RemoveAt(0);
                WeatherSetup.Insert(0, weatherNext);
                WeatherSetup.RemoveAt(1);

                //Generates a new forecast weather

                int shiftedWeather = WeatherSetup.FirstOrDefault();

                if (shiftedWeather == 0) //Extra Sunny
                {
                    weatherRandomiser = ExtraSunnyClearWeather[random1.Next(0, ExtraSunnyClearWeather.Length)];
                }

                else if (shiftedWeather == 1) //Clear
                {
                    weatherRandomiser = ExtraSunnyClearWeather[random1.Next(0, ExtraSunnyClearWeather.Length)];
                }

                else if (shiftedWeather == 2)//Clouds
                {
                    weatherRandomiser = CloudsOvercastWeather[random1.Next(0, CloudsOvercastWeather.Length)];
                }

                else if (shiftedWeather == 3)//Smog
                {
                    weatherRandomiser = SmogWeather[random1.Next(0, SmogWeather.Length)];
                }

                else if (shiftedWeather == 4) //Foggy
                {
                    weatherRandomiser = FoggyWeather[random1.Next(0, FoggyWeather.Length)];
                }

                else if (shiftedWeather == 5)//Overcast
                {
                    weatherRandomiser = CloudsOvercastWeather[random1.Next(0, CloudsOvercastWeather.Length)];
                }

                else if (shiftedWeather == 6)//Rain
                {
                    weatherRandomiser = LightRainWeather[random1.Next(0, LightRainWeather.Length)];
                }

                else if (shiftedWeather == 7)//Thunder
                {
                    weatherRandomiser = ThunderWeather[random1.Next(0, ThunderWeather.Length)];
                }

                else if (shiftedWeather == 8)//Light Rain
                {
                    weatherRandomiser = LightRainWeather[random1.Next(0, LightRainWeather.Length)];
                }

                else if (shiftedWeather == 10)//Very Light Snow
                {
                    weatherRandomiser = SnowyWeather[random1.Next(0, SnowyWeather.Length)];
                }

                else if (shiftedWeather == 11)//Windy Light Snow
                {
                    weatherRandomiser = SnowyWeather[random1.Next(0, SnowyWeather.Length)];
                }

                else if (shiftedWeather == 12)//Light Snow
                {
                    weatherRandomiser = SnowyWeather[random1.Next(0, SnowyWeather.Length)];
                }

                WeatherSetup.Insert(1, weatherRandomiser);

                Console.ForegroundColor = ConsoleColor.DarkMagenta;
                API.consoleOutput("The standby weather is " + WeatherArray[weatherRandomiser]);
                Console.ResetColor();
            });

        }

        //Command to enter to see what the current and forecast weather is
        [Command("weather", Alias = "metar")]
        public void WeatherCommand(Client player)
        {
            int weatherCurrent = API.getWeather();
            int weatherNext = WeatherSetup.ElementAt(0);

            string currentWeather = WeatherArray[weatherCurrent];
            string nextWeather = WeatherArray[weatherNext];

            API.sendChatMessageToPlayer(player, "~b~Metar - Current weather ~w~" + currentWeather + " ~y~|| ~b~Forecast Weather: ~w~" + nextWeather);
        }
    }
}