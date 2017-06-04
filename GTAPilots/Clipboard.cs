using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GTAPilots
{
    class Clipboard
    {
                    switch (shiftedWeather)
            {
                case 0: //Extra Sunny
                    {
                        do
                        {
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

                            else if (weatherRandomiser == 6) //Rain
                            {
                                do
                                {
                                    Console.ForegroundColor = ConsoleColor.DarkGreen;
                                    API.consoleOutput("Weather 6 selected. Rerolling");
                                    weatherRandomiser = random1.Next(0, 12);

                                    Console.ResetColor();

                                } while (weatherRandomiser == 6);
                            }

                            else if (weatherRandomiser == 7) //Thunder
                            {
                                do
                                {
                                    Console.ForegroundColor = ConsoleColor.DarkGreen;
                                    API.consoleOutput("Weather 7 selected. Rerolling");
                                    weatherRandomiser = random1.Next(0, 12);

                                    Console.ResetColor();

                                } while (weatherRandomiser == 7);
                            }

                            else if (weatherRandomiser == 8) //Light Rain
                            {
                                do
                                {
                                    Console.ForegroundColor = ConsoleColor.DarkGreen;
                                    API.consoleOutput("Weather 8 selected. Rerolling");
                                    weatherRandomiser = random1.Next(0, 12);

                                    Console.ResetColor();

                                } while (weatherRandomiser == 8);
                            }

                            else if (weatherRandomiser == 10) //Very Light Snow
                            {
                                do
                                {
                                    Console.ForegroundColor = ConsoleColor.DarkGreen;
                                    API.consoleOutput("Weather 10 selected. Rerolling");
                                    weatherRandomiser = random1.Next(0, 12);

                                    Console.ResetColor();

                                } while (weatherRandomiser == 10);
                            }

                            else if (weatherRandomiser == 11) //Windy Light Snow
                            {
                                do
                                {
                                    Console.ForegroundColor = ConsoleColor.DarkGreen;
                                    API.consoleOutput("Weather 11 selected. Rerolling");
                                    weatherRandomiser = random1.Next(0, 12);

                                    Console.ResetColor();

                                } while (weatherRandomiser == 11);
                            }
                        } while (weatherRandomiser == 6 || weatherRandomiser == 7 || weatherRandomiser == 8 || weatherRandomiser == 9 || weatherRandomiser == 10 || weatherRandomiser == 11);

                        break;
                    }
                case 1: //Clear
                    {
                        do
                        {
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

                            else if (weatherRandomiser == 6) //Rain
                            {
                                do
                                {
                                    Console.ForegroundColor = ConsoleColor.DarkGreen;
                                    API.consoleOutput("Weather 6 selected. Rerolling");
                                    weatherRandomiser = random1.Next(0, 12);

                                    Console.ResetColor();

                                } while (weatherRandomiser == 6);
                            }

                            else if (weatherRandomiser == 7) //Thunder
                            {
                                do
                                {
                                    Console.ForegroundColor = ConsoleColor.DarkGreen;
                                    API.consoleOutput("Weather 7 selected. Rerolling");
                                    weatherRandomiser = random1.Next(0, 12);

                                    Console.ResetColor();

                                } while (weatherRandomiser == 7);
                            }

                            else if (weatherRandomiser == 8) //Light Rain
                            {
                                do
                                {
                                    Console.ForegroundColor = ConsoleColor.DarkGreen;
                                    API.consoleOutput("Weather 8 selected. Rerolling");
                                    weatherRandomiser = random1.Next(0, 12);

                                    Console.ResetColor();

                                } while (weatherRandomiser == 8);
                            }

                            else if (weatherRandomiser == 10) //Very Light Snow
                            {
                                do
                                {
                                    Console.ForegroundColor = ConsoleColor.DarkGreen;
                                    API.consoleOutput("Weather 10 selected. Rerolling");
                                    weatherRandomiser = random1.Next(0, 12);

                                    Console.ResetColor();

                                } while (weatherRandomiser == 10);
                            }

                            else if (weatherRandomiser == 11) //Windy Light Snow
                            {
                                do
                                {
                                    Console.ForegroundColor = ConsoleColor.DarkGreen;
                                    API.consoleOutput("Weather 11 selected. Rerolling");
                                    weatherRandomiser = random1.Next(0, 12);

                                    Console.ResetColor();

                                } while (weatherRandomiser == 11);
                            }
                        } while (weatherRandomiser == 6 || weatherRandomiser == 7 || weatherRandomiser == 8 || weatherRandomiser == 9 || weatherRandomiser == 10 || weatherRandomiser == 11);

                        break;
                    }
                case 2: //Clouds
                    {
                        do
                        {
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

                            else if (weatherRandomiser == 0) //Extra Sunny
                            {
                                do
                                {
                                    Console.ForegroundColor = ConsoleColor.DarkGreen;
                                    API.consoleOutput("Weather 0 selected. Rerolling");
                                    weatherRandomiser = random1.Next(0, 12);

                                    Console.ResetColor();

                                } while (weatherRandomiser == 0);
                            }

                            else if (weatherRandomiser == 3) //Smog
                            {
                                do
                                {
                                    Console.ForegroundColor = ConsoleColor.DarkGreen;
                                    API.consoleOutput("Weather 3 selected. Rerolling");
                                    weatherRandomiser = random1.Next(0, 12);

                                    Console.ResetColor();

                                } while (weatherRandomiser == 3);
                            }

                            else if (weatherRandomiser == 7) //Thunder
                            {
                                do
                                {
                                    Console.ForegroundColor = ConsoleColor.DarkGreen;
                                    API.consoleOutput("Weather 7 selected. Rerolling");
                                    weatherRandomiser = random1.Next(0, 12);

                                    Console.ResetColor();

                                } while (weatherRandomiser == 7);
                            }

                            else if (weatherRandomiser == 10) //Very Light Snow
                            {
                                do
                                {
                                    Console.ForegroundColor = ConsoleColor.DarkGreen;
                                    API.consoleOutput("Weather 10 selected. Rerolling");
                                    weatherRandomiser = random1.Next(0, 12);

                                    Console.ResetColor();

                                } while (weatherRandomiser == 10);
                            }

                            else if (weatherRandomiser == 12) //Light Snow
                            {
                                do
                                {
                                    Console.ForegroundColor = ConsoleColor.DarkGreen;
                                    API.consoleOutput("Weather 12 selected. Rerolling");
                                    weatherRandomiser = random1.Next(0, 12);

                                    Console.ResetColor();

                                } while (weatherRandomiser == 12);
                            }

                        } while (weatherRandomiser == 0 || weatherRandomiser == 3 || weatherRandomiser == 7 || weatherRandomiser == 9 || weatherRandomiser == 10 || weatherRandomiser == 12);
                        break;
                    }
                case 3: //Smog
                    {
                        do
                        {
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

                            else if (weatherRandomiser == 0) //Extra Sunny
                            {
                                do
                                {
                                    Console.ForegroundColor = ConsoleColor.DarkGreen;
                                    API.consoleOutput("Weather 0 selected. Rerolling");
                                    weatherRandomiser = random1.Next(0, 12);

                                    Console.ResetColor();

                                } while (weatherRandomiser == 0);
                            }

                            else if (weatherRandomiser == 6) // Rain
                            {
                                do
                                {
                                    Console.ForegroundColor = ConsoleColor.DarkGreen;
                                    API.consoleOutput("Weather 6 selected. Rerolling");
                                    weatherRandomiser = random1.Next(0, 12);

                                    Console.ResetColor();

                                } while (weatherRandomiser == 6);
                            }

                            else if (weatherRandomiser == 7) //Thunder
                            {
                                do
                                {
                                    Console.ForegroundColor = ConsoleColor.DarkGreen;
                                    API.consoleOutput("Weather 7 selected. Rerolling");
                                    weatherRandomiser = random1.Next(0, 12);

                                    Console.ResetColor();

                                } while (weatherRandomiser == 7);
                            }

                            else if (weatherRandomiser == 10) //Very Light Snow
                            {
                                do
                                {
                                    Console.ForegroundColor = ConsoleColor.DarkGreen;
                                    API.consoleOutput("Weather 10 selected. Rerolling");
                                    weatherRandomiser = random1.Next(0, 12);

                                    Console.ResetColor();

                                } while (weatherRandomiser == 10);
                            }

                            else if (weatherRandomiser == 11) //Windy Light Snow
                            {
                                do
                                {
                                    Console.ForegroundColor = ConsoleColor.DarkGreen;
                                    API.consoleOutput("Weather 12 selected. Rerolling");
                                    weatherRandomiser = random1.Next(0, 12);

                                    Console.ResetColor();

                                } while (weatherRandomiser == 12);
                            }

                            else if (weatherRandomiser == 12) //Light Snow
                            {
                                do
                                {
                                    Console.ForegroundColor = ConsoleColor.DarkGreen;
                                    API.consoleOutput("Weather 12 selected. Rerolling");
                                    weatherRandomiser = random1.Next(0, 12);

                                    Console.ResetColor();

                                } while (weatherRandomiser == 12);
                            }

                        } while (weatherRandomiser == 0 || weatherRandomiser == 6 || weatherRandomiser == 7 || weatherRandomiser == 10 || weatherRandomiser == 11 || weatherRandomiser == 12);
                        break;
                    }
                case 4: //Foggy
                    {
                        do
                        {
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

                            else if (weatherRandomiser == 0) //Extra Sunny
                            {
                                do
                                {
                                    Console.ForegroundColor = ConsoleColor.DarkGreen;
                                    API.consoleOutput("Weather 0 selected. Rerolling");
                                    weatherRandomiser = random1.Next(0, 12);

                                    Console.ResetColor();

                                } while (weatherRandomiser == 0);
                            }

                            else if (weatherRandomiser == 6) // Rain
                            {
                                do
                                {
                                    Console.ForegroundColor = ConsoleColor.DarkGreen;
                                    API.consoleOutput("Weather 6 selected. Rerolling");
                                    weatherRandomiser = random1.Next(0, 12);

                                    Console.ResetColor();

                                } while (weatherRandomiser == 6);
                            }

                            else if (weatherRandomiser == 7) //Thunder
                            {
                                do
                                {
                                    Console.ForegroundColor = ConsoleColor.DarkGreen;
                                    API.consoleOutput("Weather 7 selected. Rerolling");
                                    weatherRandomiser = random1.Next(0, 12);

                                    Console.ResetColor();

                                } while (weatherRandomiser == 7);
                            }
                        } while (weatherRandomiser == 0 || weatherRandomiser == 6 || weatherRandomiser == 7);

                        break;
                    }
                case 5: //Overcast
                    {
                        do
                        {
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

                                return;
                            }

                            else if (weatherRandomiser == 0) //Extra Sunny
                            {
                                do
                                {
                                    Console.ForegroundColor = ConsoleColor.DarkGreen;
                                    API.consoleOutput("Weather 0 selected. Rerolling");
                                    weatherRandomiser = random1.Next(0, 12);

                                    Console.ResetColor();

                                } while (weatherRandomiser == 0);

                                return;
                            }

                            else if (weatherRandomiser == 3) //Smog
                            {
                                do
                                {
                                    Console.ForegroundColor = ConsoleColor.DarkGreen;
                                    API.consoleOutput("Weather 3 selected. Rerolling");
                                    weatherRandomiser = random1.Next(0, 12);

                                    Console.ResetColor();

                                } while (weatherRandomiser == 3);
                                
                                return;
                            }

                            else if (weatherRandomiser == 7) //Thunder
                            {
                                do
                                {
                                    Console.ForegroundColor = ConsoleColor.DarkGreen;
                                    API.consoleOutput("Weather 7 selected. Rerolling");
                                    weatherRandomiser = random1.Next(0, 12);

                                    Console.ResetColor();

                                } while (weatherRandomiser == 7);
                            }

                            else if (weatherRandomiser == 10) //Very Light Snow
                            {
                                do
                                {
                                    Console.ForegroundColor = ConsoleColor.DarkGreen;
                                    API.consoleOutput("Weather 10 selected. Rerolling");
                                    weatherRandomiser = random1.Next(0, 12);

                                    Console.ResetColor();

                                } while (weatherRandomiser == 10);
                            }

                            else if (weatherRandomiser == 12) //Light Snow
                            {
                                do
                                {
                                    Console.ForegroundColor = ConsoleColor.DarkGreen;
                                    API.consoleOutput("Weather 12 selected. Rerolling");
                                    weatherRandomiser = random1.Next(0, 12);

                                    Console.ResetColor();

                                } while (weatherRandomiser == 12);
                            }

                        } while (weatherRandomiser == 0 || weatherRandomiser == 3 || weatherRandomiser == 7 || weatherRandomiser == 9 || weatherRandomiser == 10 || weatherRandomiser == 12);

                        break;
                    }
                case 6: //Rain
                    {
                        do
                        {
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

                            else if (weatherRandomiser == 0) //Extra Sunny
                            {
                                do
                                {
                                    Console.ForegroundColor = ConsoleColor.DarkGreen;
                                    API.consoleOutput("Weather 0 selected. Rerolling");
                                    weatherRandomiser = random1.Next(0, 12);

                                    Console.ResetColor();

                                } while (weatherRandomiser == 0);
                            }

                            else if (weatherRandomiser == 1) //Clear
                            {
                                do
                                {
                                    Console.ForegroundColor = ConsoleColor.DarkGreen;
                                    API.consoleOutput("Weather 1 selected. Rerolling");
                                    weatherRandomiser = random1.Next(0, 12);

                                    Console.ResetColor();

                                } while (weatherRandomiser == 1);
                            }

                            else if (weatherRandomiser == 3) //Smog
                            {
                                do
                                {
                                    Console.ForegroundColor = ConsoleColor.DarkGreen;
                                    API.consoleOutput("Weather 3 selected. Rerolling");
                                    weatherRandomiser = random1.Next(0, 12);

                                    Console.ResetColor();

                                } while (weatherRandomiser == 3);
                            }

                            else if (weatherRandomiser == 10) //Very Light Snow
                            {
                                do
                                {
                                    Console.ForegroundColor = ConsoleColor.DarkGreen;
                                    API.consoleOutput("Weather 10 selected. Rerolling");
                                    weatherRandomiser = random1.Next(0, 12);

                                    Console.ResetColor();

                                } while (weatherRandomiser == 10);
                            }

                            else if (weatherRandomiser == 11) //Windy Light Snow
                            {
                                do
                                {
                                    Console.ForegroundColor = ConsoleColor.DarkGreen;
                                    API.consoleOutput("Weather 11 selected. Rerolling");
                                    weatherRandomiser = random1.Next(0, 12);

                                    Console.ResetColor();

                                } while (weatherRandomiser == 11);
                            }

                            else if (weatherRandomiser == 12) //Light Snow
                            {
                                do
                                {
                                    Console.ForegroundColor = ConsoleColor.DarkGreen;
                                    API.consoleOutput("Weather 12 selected. Rerolling");
                                    weatherRandomiser = random1.Next(0, 12);

                                    Console.ResetColor();

                                } while (weatherRandomiser == 12);
                            }

                        } while (weatherRandomiser == 0 || weatherRandomiser == 1 || weatherRandomiser == 3 || weatherRandomiser == 9 || weatherRandomiser == 10 || weatherRandomiser == 11 || weatherRandomiser == 12) ;

                    break;
                    }
                case 7: //Thunder
                    {
                        do
                        {
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

                            else if (weatherRandomiser == 0) //Extra Sunny
                            {
                                do
                                {
                                    Console.ForegroundColor = ConsoleColor.DarkGreen;
                                    API.consoleOutput("Weather 0 selected. Rerolling");
                                    weatherRandomiser = random1.Next(0, 12);

                                    Console.ResetColor();

                                } while (weatherRandomiser == 0);
                            }

                            else if (weatherRandomiser == 1) //Clear
                            {
                                do
                                {
                                    Console.ForegroundColor = ConsoleColor.DarkGreen;
                                    API.consoleOutput("Weather 1 selected. Rerolling");
                                    weatherRandomiser = random1.Next(0, 12);

                                    Console.ResetColor();

                                } while (weatherRandomiser == 1);
                            }

                            else if (weatherRandomiser == 2) //Clouds
                            {
                                do
                                {
                                    Console.ForegroundColor = ConsoleColor.DarkGreen;
                                    API.consoleOutput("Weather 2 selected. Rerolling");
                                    weatherRandomiser = random1.Next(0, 12);

                                    Console.ResetColor();

                                } while (weatherRandomiser == 2);
                            }

                            else if (weatherRandomiser == 3) //Smog
                            {
                                do
                                {
                                    Console.ForegroundColor = ConsoleColor.DarkGreen;
                                    API.consoleOutput("Weather 3 selected. Rerolling");
                                    weatherRandomiser = random1.Next(0, 12);

                                    Console.ResetColor();

                                } while (weatherRandomiser == 3);
                            }

                            else if (weatherRandomiser == 8) //Light Rain
                            {
                                do
                                {
                                    Console.ForegroundColor = ConsoleColor.DarkGreen;
                                    API.consoleOutput("Weather 8 selected. Rerolling");
                                    weatherRandomiser = random1.Next(0, 12);

                                    Console.ResetColor();

                                } while (weatherRandomiser == 8);
                            }

                            else if (weatherRandomiser == 10) //Very Light Snow
                            {
                                do
                                {
                                    Console.ForegroundColor = ConsoleColor.DarkGreen;
                                    API.consoleOutput("Weather 10 selected. Rerolling");
                                    weatherRandomiser = random1.Next(0, 12);

                                    Console.ResetColor();

                                } while (weatherRandomiser == 10);
                            }

                            else if (weatherRandomiser == 11) //Windy Light Snow
                            {
                                do
                                {
                                    Console.ForegroundColor = ConsoleColor.DarkGreen;
                                    API.consoleOutput("Weather 11 selected. Rerolling");
                                    weatherRandomiser = random1.Next(0, 12);

                                    Console.ResetColor();

                                } while (weatherRandomiser == 11);
                            }

                            else if (weatherRandomiser == 12) //Light Snow
                            {
                                do
                                {
                                    Console.ForegroundColor = ConsoleColor.DarkGreen;
                                    API.consoleOutput("Weather 12 selected. Rerolling");
                                    weatherRandomiser = random1.Next(0, 12);

                                    Console.ResetColor();

                                } while (weatherRandomiser == 12);
                            }

                        } while (weatherRandomiser == 0 || weatherRandomiser == 1 || weatherRandomiser == 2 || weatherRandomiser == 3 || weatherRandomiser == 8 || weatherRandomiser == 9 || weatherRandomiser == 10 || weatherRandomiser == 11 || weatherRandomiser == 12);


                        break;
                    }
                case 8: //Light Rain
                    {
                        do
                        {
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

                            else if (weatherRandomiser == 0) //Extra Sunny
                            {
                                do
                                {
                                    Console.ForegroundColor = ConsoleColor.DarkGreen;
                                    API.consoleOutput("Weather 0 selected. Rerolling");
                                    weatherRandomiser = random1.Next(0, 12);

                                    Console.ResetColor();

                                } while (weatherRandomiser == 0);
                            }

                            else if (weatherRandomiser == 1) //Clear
                            {
                                do
                                {
                                    Console.ForegroundColor = ConsoleColor.DarkGreen;
                                    API.consoleOutput("Weather 1 selected. Rerolling");
                                    weatherRandomiser = random1.Next(0, 12);

                                    Console.ResetColor();

                                } while (weatherRandomiser == 1);
                            }

                            else if (weatherRandomiser == 3) //Smog
                            {
                                do
                                {
                                    Console.ForegroundColor = ConsoleColor.DarkGreen;
                                    API.consoleOutput("Weather 3 selected. Rerolling");
                                    weatherRandomiser = random1.Next(0, 12);

                                    Console.ResetColor();

                                } while (weatherRandomiser == 3);
                            }

                            else if (weatherRandomiser == 10) //Very Light Snow
                            {
                                do
                                {
                                    Console.ForegroundColor = ConsoleColor.DarkGreen;
                                    API.consoleOutput("Weather 10 selected. Rerolling");
                                    weatherRandomiser = random1.Next(0, 12);

                                    Console.ResetColor();

                                } while (weatherRandomiser == 10);
                            }

                            else if (weatherRandomiser == 11) //Windy Light Snow
                            {
                                do
                                {
                                    Console.ForegroundColor = ConsoleColor.DarkGreen;
                                    API.consoleOutput("Weather 11 selected. Rerolling");
                                    weatherRandomiser = random1.Next(0, 12);

                                    Console.ResetColor();

                                } while (weatherRandomiser == 11);
                            }

                            else if (weatherRandomiser == 12) //Light Snow
                            {
                                do
                                {
                                    Console.ForegroundColor = ConsoleColor.DarkGreen;
                                    API.consoleOutput("Weather 12 selected. Rerolling");
                                    weatherRandomiser = random1.Next(0, 12);

                                    Console.ResetColor();

                                } while (weatherRandomiser == 12);
                            }

                        } while (weatherRandomiser == 0 || weatherRandomiser == 1 || weatherRandomiser == 3 || weatherRandomiser == 9 || weatherRandomiser == 10 || weatherRandomiser == 11 || weatherRandomiser == 12);

                        break;
                    }
                case 9: //Null
                    {
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
                        break;
                    }
                case 10: //Very Light Snow
                    {
                        do
                        {
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

                            else if (weatherRandomiser == 0) //Extra Sunny
                            {
                                do
                                {
                                    Console.ForegroundColor = ConsoleColor.DarkGreen;
                                    API.consoleOutput("Weather 0 selected. Rerolling");
                                    weatherRandomiser = random1.Next(0, 12);

                                    Console.ResetColor();

                                } while (weatherRandomiser == 0);
                            }

                            else if (weatherRandomiser == 1) //Clear
                            {
                                do
                                {
                                    Console.ForegroundColor = ConsoleColor.DarkGreen;
                                    API.consoleOutput("Weather 1 selected. Rerolling");
                                    weatherRandomiser = random1.Next(0, 12);

                                    Console.ResetColor();

                                } while (weatherRandomiser == 1);
                            }

                            else if (weatherRandomiser == 3) //Smog
                            {
                                do
                                {
                                    Console.ForegroundColor = ConsoleColor.DarkGreen;
                                    API.consoleOutput("Weather 3 selected. Rerolling");
                                    weatherRandomiser = random1.Next(0, 12);

                                    Console.ResetColor();

                                } while (weatherRandomiser == 3);
                            }

                            else if (weatherRandomiser == 6) // Rain
                            {
                                do
                                {
                                    Console.ForegroundColor = ConsoleColor.DarkGreen;
                                    API.consoleOutput("Weather 6 selected. Rerolling");
                                    weatherRandomiser = random1.Next(0, 12);

                                    Console.ResetColor();

                                } while (weatherRandomiser == 6);
                            }

                            else if (weatherRandomiser == 7) //Thunder
                            {
                                do
                                {
                                    Console.ForegroundColor = ConsoleColor.DarkGreen;
                                    API.consoleOutput("Weather 7 selected. Rerolling");
                                    weatherRandomiser = random1.Next(0, 12);

                                    Console.ResetColor();

                                } while (weatherRandomiser == 7);
                            }

                            else if (weatherRandomiser == 8) //Light Rain
                            {
                                do
                                {
                                    Console.ForegroundColor = ConsoleColor.DarkGreen;
                                    API.consoleOutput("Weather 8 selected. Rerolling");
                                    weatherRandomiser = random1.Next(0, 12);

                                    Console.ResetColor();

                                } while (weatherRandomiser == 8);
                            }

                        } while (weatherRandomiser == 0 || weatherRandomiser == 1 || weatherRandomiser == 3 || weatherRandomiser == 6 || weatherRandomiser == 7 || weatherRandomiser == 8);

                        break;
                    }
                case 11: //Windy Light Snow
                    {
                        do
                        {
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

                            else if (weatherRandomiser == 0) //Extra Sunny
                            {
                                do
                                {
                                    Console.ForegroundColor = ConsoleColor.DarkGreen;
                                    API.consoleOutput("Weather 0 selected. Rerolling");
                                    weatherRandomiser = random1.Next(0, 12);

                                    Console.ResetColor();

                                } while (weatherRandomiser == 0);
                            }

                            else if (weatherRandomiser == 1) //Clear
                            {
                                do
                                {
                                    Console.ForegroundColor = ConsoleColor.DarkGreen;
                                    API.consoleOutput("Weather 1 selected. Rerolling");
                                    weatherRandomiser = random1.Next(0, 12);

                                    Console.ResetColor();

                                } while (weatherRandomiser == 1);
                            }

                            else if (weatherRandomiser == 3) //Smog
                            {
                                do
                                {
                                    Console.ForegroundColor = ConsoleColor.DarkGreen;
                                    API.consoleOutput("Weather 3 selected. Rerolling");
                                    weatherRandomiser = random1.Next(0, 12);

                                    Console.ResetColor();

                                } while (weatherRandomiser == 3);
                            }

                            else if (weatherRandomiser == 6) // Rain
                            {
                                do
                                {
                                    Console.ForegroundColor = ConsoleColor.DarkGreen;
                                    API.consoleOutput("Weather 6 selected. Rerolling");
                                    weatherRandomiser = random1.Next(0, 12);

                                    Console.ResetColor();

                                } while (weatherRandomiser == 6);
                            }

                            else if (weatherRandomiser == 7) //Thunder
                            {
                                do
                                {
                                    Console.ForegroundColor = ConsoleColor.DarkGreen;
                                    API.consoleOutput("Weather 7 selected. Rerolling");
                                    weatherRandomiser = random1.Next(0, 12);

                                    Console.ResetColor();

                                } while (weatherRandomiser == 7);
                            }

                            else if (weatherRandomiser == 8) //Light Rain
                            {
                                do
                                {
                                    Console.ForegroundColor = ConsoleColor.DarkGreen;
                                    API.consoleOutput("Weather 8 selected. Rerolling");
                                    weatherRandomiser = random1.Next(0, 12);

                                    Console.ResetColor();

                                } while (weatherRandomiser == 8);
                            }

                        } while (weatherRandomiser == 0 || weatherRandomiser == 1 || weatherRandomiser == 3 || weatherRandomiser == 6 || weatherRandomiser == 7 || weatherRandomiser == 8);

                        break;
                    }
                case 12: //Light Snow
                    {
                        do
                        {
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

                            else if (weatherRandomiser == 0) //Extra Sunny
                            {
                                do
                                {
                                    Console.ForegroundColor = ConsoleColor.DarkGreen;
                                    API.consoleOutput("Weather 0 selected. Rerolling");
                                    weatherRandomiser = random1.Next(0, 12);

                                    Console.ResetColor();

                                } while (weatherRandomiser == 0);
                            }

                            else if (weatherRandomiser == 1) //Clear
                            {
                                do
                                {
                                    Console.ForegroundColor = ConsoleColor.DarkGreen;
                                    API.consoleOutput("Weather 1 selected. Rerolling");
                                    weatherRandomiser = random1.Next(0, 12);

                                    Console.ResetColor();

                                } while (weatherRandomiser == 1);
                            }

                            else if (weatherRandomiser == 3) //Smog
                            {
                                do
                                {
                                    Console.ForegroundColor = ConsoleColor.DarkGreen;
                                    API.consoleOutput("Weather 3 selected. Rerolling");
                                    weatherRandomiser = random1.Next(0, 12);

                                    Console.ResetColor();

                                } while (weatherRandomiser == 3);
                            }

                            else if (weatherRandomiser == 6) // Rain
                            {
                                do
                                {
                                    Console.ForegroundColor = ConsoleColor.DarkGreen;
                                    API.consoleOutput("Weather 6 selected. Rerolling");
                                    weatherRandomiser = random1.Next(0, 12);

                                    Console.ResetColor();

                                } while (weatherRandomiser == 6);
                            }

                            else if (weatherRandomiser == 7) //Thunder
                            {
                                do
                                {
                                    Console.ForegroundColor = ConsoleColor.DarkGreen;
                                    API.consoleOutput("Weather 7 selected. Rerolling");
                                    weatherRandomiser = random1.Next(0, 12);

                                    Console.ResetColor();

                                } while (weatherRandomiser == 7);
                            }

                            else if (weatherRandomiser == 8) //Light Rain
                            {
                                do
                                {
                                    Console.ForegroundColor = ConsoleColor.DarkGreen;
                                    API.consoleOutput("Weather 8 selected. Rerolling");
                                    weatherRandomiser = random1.Next(0, 12);

                                    Console.ResetColor();

                                } while (weatherRandomiser == 8);
                            }

                        } while (weatherRandomiser == 0 || weatherRandomiser == 1 || weatherRandomiser == 3 || weatherRandomiser == 6 || weatherRandomiser == 7 || weatherRandomiser == 8);

                        break;
                    }
            }

        //if (currentWeather == 0 || currentWeather == 1) //Extra Sunny and Clear
        //{
        //    do
        //    {
        //        weatherRandomiser = random1.Next(0, 12);

        //        switch (weatherRandomiser)
        //        {
        //            case 0:
        //                {
        //                    break;
        //                }
        //            case 1:
        //                {
        //                    break;
        //                }
        //            case 2:
        //                {
        //                    break;
        //                }
        //            case 3:
        //                {
        //                    break;
        //                }
        //            case 4:
        //                {
        //                    break;
        //                }
        //            case 5:
        //                {
        //                    break;
        //                }
        //            case 6:
        //                {
        //                    do
        //                    {
        //                        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //                        API.consoleOutput("Weather 6 selected. Rerolling");
        //                        weatherRandomiser = random1.Next(0, 12);

        //                        Console.ResetColor();

        //                    } while (weatherRandomiser == 6);
        //                    break;
        //                }
        //            case 7:
        //                {
        //                    do
        //                    {
        //                        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //                        API.consoleOutput("Weather 7 selected. Rerolling");
        //                        weatherRandomiser = random1.Next(0, 12);

        //                        Console.ResetColor();

        //                    } while (weatherRandomiser == 7);
        //                    break;
        //                }
        //            case 8:
        //                {
        //                    do
        //                    {
        //                        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //                        API.consoleOutput("Weather 8 selected. Rerolling");
        //                        weatherRandomiser = random1.Next(0, 12);

        //                        Console.ResetColor();

        //                    } while (weatherRandomiser == 8);
        //                    break;
        //                }
        //            case 9:
        //                {
        //                    do
        //                    {
        //                        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //                        API.consoleOutput("Weather 9 selected. Rerolling");
        //                        weatherRandomiser = random1.Next(0, 12);

        //                        Console.ResetColor();

        //                    } while (weatherRandomiser == 9);
        //                    break;
        //                }
        //            case 10:
        //                {
        //                    do
        //                    {
        //                        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //                        API.consoleOutput("Weather 10 selected. Rerolling");
        //                        weatherRandomiser = random1.Next(0, 12);

        //                        Console.ResetColor();

        //                    } while (weatherRandomiser == 10);
        //                    break;
        //                }
        //            case 11:
        //                {
        //                    do
        //                    {
        //                        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //                        API.consoleOutput("Weather 11 selected. Rerolling");
        //                        weatherRandomiser = random1.Next(0, 12);

        //                        Console.ResetColor();

        //                    } while (weatherRandomiser == 11);
        //                    break;
        //                }
        //            case 12:
        //                {
        //                    break;
        //                }
        //        }
        //        //if (weatherRandomiser == 9)
        //        //{
        //        //    do
        //        //    {
        //        //        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //        //        API.consoleOutput("Weather 9 selected. Rerolling");
        //        //        weatherRandomiser = random1.Next(0, 12);

        //        //        Console.ResetColor();

        //        //    } while (weatherRandomiser == 9);
        //        //}

        //        //if (weatherRandomiser == 6) //Rain
        //        //{
        //        //    do
        //        //    {
        //        //        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //        //        API.consoleOutput("Weather 6 selected. Rerolling");
        //        //        weatherRandomiser = random1.Next(0, 12);

        //        //        Console.ResetColor();

        //        //    } while (weatherRandomiser == 6);
        //        //}

        //        //if (weatherRandomiser == 7) //Thunder
        //        //{
        //        //    do
        //        //    {
        //        //        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //        //        API.consoleOutput("Weather 7 selected. Rerolling");
        //        //        weatherRandomiser = random1.Next(0, 12);

        //        //        Console.ResetColor();

        //        //    } while (weatherRandomiser == 7);
        //        //}

        //        //if (weatherRandomiser == 8) //Light Rain
        //        //{
        //        //    do
        //        //    {
        //        //        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //        //        API.consoleOutput("Weather 8 selected. Rerolling");
        //        //        weatherRandomiser = random1.Next(0, 12);

        //        //        Console.ResetColor();

        //        //    } while (weatherRandomiser == 8);
        //        //}

        //        //if (weatherRandomiser == 10) //Very Light Snow
        //        //{
        //        //    do
        //        //    {
        //        //        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //        //        API.consoleOutput("Weather 10 selected. Rerolling");
        //        //        weatherRandomiser = random1.Next(0, 12);

        //        //        Console.ResetColor();

        //        //    } while (weatherRandomiser == 10);
        //        //}

        //        //if (weatherRandomiser == 11) //Windy Light Snow
        //        //{
        //        //    do
        //        //    {
        //        //        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //        //        API.consoleOutput("Weather 11 selected. Rerolling");
        //        //        weatherRandomiser = random1.Next(0, 12);

        //        //        Console.ResetColor();

        //        //    } while (weatherRandomiser == 11);
        //        //}

        //    } while (weatherRandomiser == 6 || weatherRandomiser == 7 || weatherRandomiser == 8 || weatherRandomiser == 9 || weatherRandomiser == 10 || weatherRandomiser == 11);
        //}

        //else if (currentWeather == 2 || currentWeather == 5) //Clouds and Overcast
        //{
        //    do
        //    {
        //        weatherRandomiser = random1.Next(0, 12);

        //        switch (weatherRandomiser)
        //        {
        //            case 0:
        //                {
        //                    do
        //                    {
        //                        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //                        API.consoleOutput("Weather 0 selected. Rerolling");
        //                        weatherRandomiser = random1.Next(0, 12);

        //                        Console.ResetColor();

        //                    } while (weatherRandomiser == 0);
        //                    break;
        //                }
        //            case 1:
        //                {
        //                    break;
        //                }
        //            case 2:
        //                {
        //                    break;
        //                }
        //            case 3:
        //                {
        //                    do
        //                    {
        //                        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //                        API.consoleOutput("Weather 3 selected. Rerolling");
        //                        weatherRandomiser = random1.Next(0, 12);

        //                        Console.ResetColor();

        //                    } while (weatherRandomiser == 3);
        //                    break;
        //                }
        //            case 4:
        //                {
        //                    break;
        //                }
        //            case 5:
        //                {
        //                    break;
        //                }
        //            case 6:
        //                {
        //                    break;
        //                }
        //            case 7:
        //                {
        //                    do
        //                    {
        //                        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //                        API.consoleOutput("Weather 7 selected. Rerolling");
        //                        weatherRandomiser = random1.Next(0, 12);

        //                        Console.ResetColor();

        //                    } while (weatherRandomiser == 7);
        //                    break;
        //                }
        //            case 8:
        //                {
        //                    break;
        //                }
        //            case 9:
        //                {
        //                    do
        //                    {
        //                        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //                        API.consoleOutput("Weather 9 selected. Rerolling");
        //                        weatherRandomiser = random1.Next(0, 12);

        //                        Console.ResetColor();

        //                    } while (weatherRandomiser == 9);
        //                    break;
        //                }
        //            case 10:
        //                {
        //                    do
        //                    {
        //                        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //                        API.consoleOutput("Weather 10 selected. Rerolling");
        //                        weatherRandomiser = random1.Next(0, 12);

        //                        Console.ResetColor();

        //                    } while (weatherRandomiser == 10);
        //                    break;
        //                }
        //            case 11:
        //                {
        //                    break;
        //                }
        //            case 12:
        //                {
        //                    do
        //                    {
        //                        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //                        API.consoleOutput("Weather 12 selected. Rerolling");
        //                        weatherRandomiser = random1.Next(0, 12);

        //                        Console.ResetColor();

        //                    } while (weatherRandomiser == 12);
        //                    break;
        //                }
        //        }
        //        //if (weatherRandomiser == 9)
        //        //{
        //        //    do
        //        //    {
        //        //        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //        //        API.consoleOutput("Weather 9 selected. Rerolling");
        //        //        weatherRandomiser = random1.Next(0, 12);

        //        //        Console.ResetColor();

        //        //    } while (weatherRandomiser == 9);
        //        //}

        //        //if (weatherRandomiser == 0) //Extra Sunny
        //        //{
        //        //    do
        //        //    {
        //        //        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //        //        API.consoleOutput("Weather 0 selected. Rerolling");
        //        //        weatherRandomiser = random1.Next(0, 12);

        //        //        Console.ResetColor();

        //        //    } while (weatherRandomiser == 0);
        //        //}

        //        //if (weatherRandomiser == 3) //Smog
        //        //{
        //        //    do
        //        //    {
        //        //        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //        //        API.consoleOutput("Weather 3 selected. Rerolling");
        //        //        weatherRandomiser = random1.Next(0, 12);

        //        //        Console.ResetColor();

        //        //    } while (weatherRandomiser == 3);
        //        //}

        //        //if (weatherRandomiser == 7) //Thunder
        //        //{
        //        //    do
        //        //    {
        //        //        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //        //        API.consoleOutput("Weather 7 selected. Rerolling");
        //        //        weatherRandomiser = random1.Next(0, 12);

        //        //        Console.ResetColor();

        //        //    } while (weatherRandomiser == 7);
        //        //}

        //        //if (weatherRandomiser == 10) //Very Light Snow
        //        //{
        //        //    do
        //        //    {
        //        //        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //        //        API.consoleOutput("Weather 10 selected. Rerolling");
        //        //        weatherRandomiser = random1.Next(0, 12);

        //        //        Console.ResetColor();

        //        //    } while (weatherRandomiser == 10);
        //        //}

        //        //if (weatherRandomiser == 12) //Light Snow
        //        //{
        //        //    do
        //        //    {
        //        //        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //        //        API.consoleOutput("Weather 12 selected. Rerolling");
        //        //        weatherRandomiser = random1.Next(0, 12);

        //        //        Console.ResetColor();

        //        //    } while (weatherRandomiser == 12);
        //        //}

        //    } while (weatherRandomiser == 0 || weatherRandomiser == 3 || weatherRandomiser == 7 || weatherRandomiser == 9 || weatherRandomiser == 10 || weatherRandomiser == 12);

        //}

        //else if (currentWeather == 3 || currentWeather == 4) //Smog and Foggy
        //{
        //    do
        //    {
        //        weatherRandomiser = random1.Next(0, 12);

        //        switch (weatherRandomiser)
        //        {
        //            case 0:
        //                {
        //                    break;
        //                }
        //            case 1:
        //                {
        //                    break;
        //                }
        //            case 2:
        //                {
        //                    break;
        //                }
        //            case 3:
        //                {
        //                    break;
        //                }
        //            case 4:
        //                {
        //                    break;
        //                }
        //            case 5:
        //                {
        //                    break;
        //                }
        //            case 6:
        //                {
        //                    do
        //                    {
        //                        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //                        API.consoleOutput("Weather 6 selected. Rerolling");
        //                        weatherRandomiser = random1.Next(0, 12);

        //                        Console.ResetColor();

        //                    } while (weatherRandomiser == 6);
        //                    break;
        //                }
        //            case 7:
        //                {
        //                    do
        //                    {
        //                        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //                        API.consoleOutput("Weather 7 selected. Rerolling");
        //                        weatherRandomiser = random1.Next(0, 12);

        //                        Console.ResetColor();

        //                    } while (weatherRandomiser == 7);
        //                    break;
        //                }
        //            case 8:
        //                {
        //                    break;
        //                }
        //            case 9:
        //                {
        //                    do
        //                    {
        //                        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //                        API.consoleOutput("Weather 9 selected. Rerolling");
        //                        weatherRandomiser = random1.Next(0, 12);

        //                        Console.ResetColor();

        //                    } while (weatherRandomiser == 9);
        //                    break;
        //                }
        //            case 10:
        //                {
        //                    break;
        //                }
        //            case 11:
        //                {
        //                    break;
        //                }
        //            case 12:
        //                {
        //                    break;
        //                }
        //        }
        //        //if (weatherRandomiser == 9)
        //        //{
        //        //    do
        //        //    {
        //        //        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //        //        API.consoleOutput("Weather 9 selected. Rerolling");
        //        //        weatherRandomiser = random1.Next(0, 12);

        //        //        Console.ResetColor();

        //        //    } while (weatherRandomiser == 9);
        //        //}

        //        //if (weatherRandomiser == 0) //Extra Sunny
        //        //{
        //        //    do
        //        //    {
        //        //        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //        //        API.consoleOutput("Weather 0 selected. Rerolling");
        //        //        weatherRandomiser = random1.Next(0, 12);

        //        //        Console.ResetColor();

        //        //    } while (weatherRandomiser == 0);
        //        //}

        //        //if (weatherRandomiser == 6) // Rain
        //        //{
        //        //    do
        //        //    {
        //        //        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //        //        API.consoleOutput("Weather 6 selected. Rerolling");
        //        //        weatherRandomiser = random1.Next(0, 12);

        //        //        Console.ResetColor();

        //        //    } while (weatherRandomiser == 6);
        //        //}

        //        //if (weatherRandomiser == 7) //Thunder
        //        //{
        //        //    do
        //        //    {
        //        //        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //        //        API.consoleOutput("Weather 7 selected. Rerolling");
        //        //        weatherRandomiser = random1.Next(0, 12);

        //        //        Console.ResetColor();

        //        //    } while (weatherRandomiser == 7);
        //        //}

        //    } while (weatherRandomiser == 0 || weatherRandomiser == 6 || weatherRandomiser == 7);
        //}

        //else if (currentWeather == 6 || currentWeather == 8) //Light Rain and Rain
        //{
        //    do
        //    {
        //        weatherRandomiser = random1.Next(0, 12);

        //        switch (weatherRandomiser)
        //        {
        //            case 0:
        //                {
        //                    do
        //                    {
        //                        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //                        API.consoleOutput("Weather 0 selected. Rerolling");
        //                        weatherRandomiser = random1.Next(0, 12);

        //                        Console.ResetColor();

        //                    } while (weatherRandomiser == 0);
        //                    break;
        //                }
        //            case 1:
        //                {
        //                    do
        //                    {
        //                        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //                        API.consoleOutput("Weather 1 selected. Rerolling");
        //                        weatherRandomiser = random1.Next(0, 12);

        //                        Console.ResetColor();

        //                    } while (weatherRandomiser == 1);
        //                    break;
        //                }
        //            case 2:
        //                {
        //                    break;
        //                }
        //            case 3:
        //                {
        //                    do
        //                    {
        //                        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //                        API.consoleOutput("Weather 3 selected. Rerolling");
        //                        weatherRandomiser = random1.Next(0, 12);

        //                        Console.ResetColor();

        //                    } while (weatherRandomiser == 3);
        //                    break;
        //                }
        //            case 4:
        //                {
        //                    break;
        //                }
        //            case 5:
        //                {
        //                    break;
        //                }
        //            case 6:
        //                {
        //                    break;
        //                }
        //            case 7:
        //                {
        //                    break;
        //                }
        //            case 8:
        //                {
        //                    break;
        //                }
        //            case 9:
        //                {
        //                    do
        //                    {
        //                        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //                        API.consoleOutput("Weather 9 selected. Rerolling");
        //                        weatherRandomiser = random1.Next(0, 12);

        //                        Console.ResetColor();

        //                    } while (weatherRandomiser == 9);
        //                    break;
        //                }
        //            case 10:
        //                {
        //                    do
        //                    {
        //                        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //                        API.consoleOutput("Weather 10 selected. Rerolling");
        //                        weatherRandomiser = random1.Next(0, 12);

        //                        Console.ResetColor();

        //                    } while (weatherRandomiser == 10);
        //                    break;
        //                }
        //            case 11:
        //                {
        //                    do
        //                    {
        //                        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //                        API.consoleOutput("Weather 11 selected. Rerolling");
        //                        weatherRandomiser = random1.Next(0, 12);

        //                        Console.ResetColor();

        //                    } while (weatherRandomiser == 11);
        //                    break;
        //                }
        //            case 12:
        //                {
        //                    do
        //                    {
        //                        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //                        API.consoleOutput("Weather 12 selected. Rerolling");
        //                        weatherRandomiser = random1.Next(0, 12);

        //                        Console.ResetColor();

        //                    } while (weatherRandomiser == 12);
        //                    break;
        //                }
        //        }
        //        //if (weatherRandomiser == 9)
        //        //{
        //        //    do
        //        //    {
        //        //        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //        //        API.consoleOutput("Weather 9 selected. Rerolling");
        //        //        weatherRandomiser = random1.Next(0, 12);

        //        //        Console.ResetColor();

        //        //    } while (weatherRandomiser == 9);
        //        //}

        //        //if (weatherRandomiser == 0) //Extra Sunny
        //        //{
        //        //    do
        //        //    {
        //        //        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //        //        API.consoleOutput("Weather 0 selected. Rerolling");
        //        //        weatherRandomiser = random1.Next(0, 12);

        //        //        Console.ResetColor();

        //        //    } while (weatherRandomiser == 0);
        //        //}

        //        //if (weatherRandomiser == 1) //Clear
        //        //{
        //        //    do
        //        //    {
        //        //        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //        //        API.consoleOutput("Weather 1 selected. Rerolling");
        //        //        weatherRandomiser = random1.Next(0, 12);

        //        //        Console.ResetColor();

        //        //    } while (weatherRandomiser == 1);
        //        //}

        //        //if (weatherRandomiser == 3) //Smog
        //        //{
        //        //    do
        //        //    {
        //        //        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //        //        API.consoleOutput("Weather 3 selected. Rerolling");
        //        //        weatherRandomiser = random1.Next(0, 12);

        //        //        Console.ResetColor();

        //        //    } while (weatherRandomiser == 3);
        //        //}

        //        //if (weatherRandomiser == 10) //Very Light Snow
        //        //{
        //        //    do
        //        //    {
        //        //        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //        //        API.consoleOutput("Weather 10 selected. Rerolling");
        //        //        weatherRandomiser = random1.Next(0, 12);

        //        //        Console.ResetColor();

        //        //    } while (weatherRandomiser == 10);
        //        //}

        //        //if (weatherRandomiser == 11) //Windy Light Snow
        //        //{
        //        //    do
        //        //    {
        //        //        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //        //        API.consoleOutput("Weather 11 selected. Rerolling");
        //        //        weatherRandomiser = random1.Next(0, 12);

        //        //        Console.ResetColor();

        //        //    } while (weatherRandomiser == 11);
        //        //}

        //        //if (weatherRandomiser == 12) //Light Snow
        //        //{
        //        //    do
        //        //    {
        //        //        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //        //        API.consoleOutput("Weather 12 selected. Rerolling");
        //        //        weatherRandomiser = random1.Next(0, 12);

        //        //        Console.ResetColor();

        //        //    } while (weatherRandomiser == 12);
        //        //}

        //    } while (weatherRandomiser == 0 || weatherRandomiser == 1 || weatherRandomiser == 3 || weatherRandomiser == 9 || weatherRandomiser == 10 || weatherRandomiser == 11 || weatherRandomiser == 12);
        //}

        //else if (currentWeather == 7)
        //{
        //    do
        //    {
        //        weatherRandomiser = random1.Next(0, 12);

        //        switch (weatherRandomiser)
        //        {
        //            case 0:
        //                {
        //                    do
        //                    {
        //                        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //                        API.consoleOutput("Weather 0 selected. Rerolling");
        //                        weatherRandomiser = random1.Next(0, 12);

        //                        Console.ResetColor();

        //                    } while (weatherRandomiser == 0);
        //                    break;
        //                }
        //            case 1:
        //                {
        //                    do
        //                    {
        //                        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //                        API.consoleOutput("Weather 1 selected. Rerolling");
        //                        weatherRandomiser = random1.Next(0, 12);

        //                        Console.ResetColor();

        //                    } while (weatherRandomiser == 1);
        //                    break;
        //                }
        //            case 2:
        //                {
        //                    do
        //                    {
        //                        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //                        API.consoleOutput("Weather 2 selected. Rerolling");
        //                        weatherRandomiser = random1.Next(0, 12);

        //                        Console.ResetColor();

        //                    } while (weatherRandomiser == 2);
        //                    break;
        //                }
        //            case 3:
        //                {
        //                    do
        //                    {
        //                        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //                        API.consoleOutput("Weather 3 selected. Rerolling");
        //                        weatherRandomiser = random1.Next(0, 12);

        //                        Console.ResetColor();

        //                    } while (weatherRandomiser == 3);
        //                    break;
        //                }
        //            case 4:
        //                {
        //                    break;
        //                }
        //            case 5:
        //                {
        //                    break;
        //                }
        //            case 6:
        //                {
        //                    break;
        //                }
        //            case 7:
        //                {
        //                    break;
        //                }
        //            case 8:
        //                {
        //                    do
        //                    {
        //                        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //                        API.consoleOutput("Weather 8 selected. Rerolling");
        //                        weatherRandomiser = random1.Next(0, 12);

        //                        Console.ResetColor();

        //                    } while (weatherRandomiser == 8);
        //                    break;
        //                }
        //            case 9:
        //                {
        //                    do
        //                    {
        //                        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //                        API.consoleOutput("Weather 9 selected. Rerolling");
        //                        weatherRandomiser = random1.Next(0, 12);

        //                        Console.ResetColor();

        //                    } while (weatherRandomiser == 9);
        //                    break;
        //                }
        //            case 10:
        //                {
        //                    do
        //                    {
        //                        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //                        API.consoleOutput("Weather 10 selected. Rerolling");
        //                        weatherRandomiser = random1.Next(0, 12);

        //                        Console.ResetColor();

        //                    } while (weatherRandomiser == 10);
        //                    break;
        //                }
        //            case 11:
        //                {
        //                    do
        //                    {
        //                        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //                        API.consoleOutput("Weather 11 selected. Rerolling");
        //                        weatherRandomiser = random1.Next(0, 12);

        //                        Console.ResetColor();

        //                    } while (weatherRandomiser == 11);
        //                    break;
        //                }
        //            case 12:
        //                {
        //                    do
        //                    {
        //                        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //                        API.consoleOutput("Weather 12 selected. Rerolling");
        //                        weatherRandomiser = random1.Next(0, 12);

        //                        Console.ResetColor();

        //                    } while (weatherRandomiser == 12);
        //                    break;
        //                }
        //        }
        //        //if (weatherRandomiser == 9)
        //        //{
        //        //    do
        //        //    {
        //        //        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //        //        API.consoleOutput("Weather 9 selected. Rerolling");
        //        //        weatherRandomiser = random1.Next(0, 12);

        //        //        Console.ResetColor();

        //        //    } while (weatherRandomiser == 9);
        //        //}

        //        //if (weatherRandomiser == 0) //Extra Sunny
        //        //{
        //        //    do
        //        //    {
        //        //        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //        //        API.consoleOutput("Weather 0 selected. Rerolling");
        //        //        weatherRandomiser = random1.Next(0, 12);

        //        //        Console.ResetColor();

        //        //    } while (weatherRandomiser == 0);
        //        //}

        //        //if (weatherRandomiser == 1) //Clear
        //        //{
        //        //    do
        //        //    {
        //        //        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //        //        API.consoleOutput("Weather 1 selected. Rerolling");
        //        //        weatherRandomiser = random1.Next(0, 12);

        //        //        Console.ResetColor();

        //        //    } while (weatherRandomiser == 1);
        //        //}

        //        //if (weatherRandomiser == 2) //Clouds
        //        //{
        //        //    do
        //        //    {
        //        //        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //        //        API.consoleOutput("Weather 2 selected. Rerolling");
        //        //        weatherRandomiser = random1.Next(0, 12);

        //        //        Console.ResetColor();

        //        //    } while (weatherRandomiser == 2);
        //        //}

        //        //if (weatherRandomiser == 3) //Smog
        //        //{
        //        //    do
        //        //    {
        //        //        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //        //        API.consoleOutput("Weather 3 selected. Rerolling");
        //        //        weatherRandomiser = random1.Next(0, 12);

        //        //        Console.ResetColor();

        //        //    } while (weatherRandomiser == 3);
        //        //}

        //        //if (weatherRandomiser == 8) //Light Rain
        //        //{
        //        //    do
        //        //    {
        //        //        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //        //        API.consoleOutput("Weather 8 selected. Rerolling");
        //        //        weatherRandomiser = random1.Next(0, 12);

        //        //        Console.ResetColor();

        //        //    } while (weatherRandomiser == 8);
        //        //}

        //        //if (weatherRandomiser == 10) //Very Light Snow
        //        //{
        //        //    do
        //        //    {
        //        //        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //        //        API.consoleOutput("Weather 10 selected. Rerolling");
        //        //        weatherRandomiser = random1.Next(0, 12);

        //        //        Console.ResetColor();

        //        //    } while (weatherRandomiser == 10);
        //        //}

        //        //if (weatherRandomiser == 11) //Windy Light Snow
        //        //{
        //        //    do
        //        //    {
        //        //        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //        //        API.consoleOutput("Weather 11 selected. Rerolling");
        //        //        weatherRandomiser = random1.Next(0, 12);

        //        //        Console.ResetColor();

        //        //    } while (weatherRandomiser == 11);
        //        //}

        //        //if (weatherRandomiser == 12) //Light Snow
        //        //{
        //        //    do
        //        //    {
        //        //        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //        //        API.consoleOutput("Weather 12 selected. Rerolling");
        //        //        weatherRandomiser = random1.Next(0, 12);

        //        //        Console.ResetColor();

        //        //    } while (weatherRandomiser == 12);
        //        //}

        //    } while (weatherRandomiser == 0 || weatherRandomiser == 1 || weatherRandomiser == 2 || weatherRandomiser == 3 || weatherRandomiser == 8 || weatherRandomiser == 9 || weatherRandomiser == 10 || weatherRandomiser == 11 || weatherRandomiser == 12);

        //}

        //else if (currentWeather == 10 || currentWeather == 11 || currentWeather == 12) //Very Light Snow and Windy Light Snow and Light Snow
        //{
        //    do
        //    {
        //        weatherRandomiser = random1.Next(0, 12);

        //        switch (weatherRandomiser)
        //        {
        //            case 0:
        //                {
        //                    do
        //                    {
        //                        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //                        API.consoleOutput("Weather 0 selected. Rerolling");
        //                        weatherRandomiser = random1.Next(0, 12);

        //                        Console.ResetColor();

        //                    } while (weatherRandomiser == 0);
        //                    break;
        //                }
        //            case 1:
        //                {
        //                    do
        //                    {
        //                        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //                        API.consoleOutput("Weather 1 selected. Rerolling");
        //                        weatherRandomiser = random1.Next(0, 12);

        //                        Console.ResetColor();

        //                    } while (weatherRandomiser == 1);
        //                    break;
        //                }
        //            case 2:
        //                {
        //                    break;
        //                }
        //            case 3:
        //                {
        //                    do
        //                    {
        //                        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //                        API.consoleOutput("Weather 3 selected. Rerolling");
        //                        weatherRandomiser = random1.Next(0, 12);

        //                        Console.ResetColor();

        //                    } while (weatherRandomiser == 3);
        //                    break;
        //                }
        //            case 4:
        //                {
        //                    break;
        //                }
        //            case 5:
        //                {
        //                    break;
        //                }
        //            case 6:
        //                {
        //                    do
        //                    {
        //                        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //                        API.consoleOutput("Weather 6 selected. Rerolling");
        //                        weatherRandomiser = random1.Next(0, 12);

        //                        Console.ResetColor();

        //                    } while (weatherRandomiser == 6);
        //                    break;
        //                }
        //            case 7:
        //                {
        //                    do
        //                    {
        //                        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //                        API.consoleOutput("Weather 7 selected. Rerolling");
        //                        weatherRandomiser = random1.Next(0, 12);

        //                        Console.ResetColor();

        //                    } while (weatherRandomiser == 7);
        //                    break;
        //                }
        //            case 8:
        //                {
        //                    do
        //                    {
        //                        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //                        API.consoleOutput("Weather 8 selected. Rerolling");
        //                        weatherRandomiser = random1.Next(0, 12);

        //                        Console.ResetColor();

        //                    } while (weatherRandomiser == 8);
        //                    break;
        //                }
        //            case 9:
        //                {
        //                    do
        //                    {
        //                        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //                        API.consoleOutput("Weather 9 selected. Rerolling");
        //                        weatherRandomiser = random1.Next(0, 12);

        //                        Console.ResetColor();

        //                    } while (weatherRandomiser == 9);
        //                    break;
        //                }
        //            case 10:
        //                {
        //                    break;
        //                }
        //            case 11:
        //                {
        //                    break;
        //                }
        //            case 12:
        //                {
        //                    break;
        //                }
        //        }
        //        //if (weatherRandomiser == 9)
        //        //{
        //        //    do
        //        //    {
        //        //        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //        //        API.consoleOutput("Weather 9 selected. Rerolling");
        //        //        weatherRandomiser = random1.Next(0, 12);

        //        //        Console.ResetColor();

        //        //    } while (weatherRandomiser == 9);
        //        //}

        //        //if (weatherRandomiser == 0) //Extra Sunny
        //        //{
        //        //    do
        //        //    {
        //        //        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //        //        API.consoleOutput("Weather 0 selected. Rerolling");
        //        //        weatherRandomiser = random1.Next(0, 12);

        //        //        Console.ResetColor();

        //        //    } while (weatherRandomiser == 0);
        //        //}

        //        //if (weatherRandomiser == 1) //Clear
        //        //{
        //        //    do
        //        //    {
        //        //        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //        //        API.consoleOutput("Weather 1 selected. Rerolling");
        //        //        weatherRandomiser = random1.Next(0, 12);

        //        //        Console.ResetColor();

        //        //    } while (weatherRandomiser == 1);
        //        //}

        //        //if (weatherRandomiser == 3) //Smog
        //        //{
        //        //    do
        //        //    {
        //        //        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //        //        API.consoleOutput("Weather 3 selected. Rerolling");
        //        //        weatherRandomiser = random1.Next(0, 12);

        //        //        Console.ResetColor();

        //        //    } while (weatherRandomiser == 3);
        //        //}

        //        //if (weatherRandomiser == 6) // Rain
        //        //{
        //        //    do
        //        //    {
        //        //        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //        //        API.consoleOutput("Weather 6 selected. Rerolling");
        //        //        weatherRandomiser = random1.Next(0, 12);

        //        //        Console.ResetColor();

        //        //    } while (weatherRandomiser == 6);
        //        //}

        //        //if (weatherRandomiser == 7) //Thunder
        //        //{
        //        //    do
        //        //    {
        //        //        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //        //        API.consoleOutput("Weather 7 selected. Rerolling");
        //        //        weatherRandomiser = random1.Next(0, 12);

        //        //        Console.ResetColor();

        //        //    } while (weatherRandomiser == 7);
        //        //}

        //        //if (weatherRandomiser == 8) //Light Rain
        //        //{
        //        //    do
        //        //    {
        //        //        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //        //        API.consoleOutput("Weather 8 selected. Rerolling");
        //        //        weatherRandomiser = random1.Next(0, 12);

        //        //        Console.ResetColor();

        //        //    } while (weatherRandomiser == 8);
        //        //}

        //    } while (weatherRandomiser == 0 || weatherRandomiser == 1 || weatherRandomiser == 3 || weatherRandomiser == 6 || weatherRandomiser == 7 || weatherRandomiser == 8);
        //}
        //Randomises the next weather
        //weatherRandomiser = random1.Next(0, 12);

        //if (weatherRandomiser == 9)
        //{
        //    do
        //    {
        //        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //        API.consoleOutput("Weather 9 selected. Rerolling");
        //        weatherRandomiser = random1.Next(0, 12);

        //        Console.ResetColor();

        //    } while (weatherRandomiser == 9);
        //}



        //if (currentWeather == 0 || currentWeather == 1) //Extra Sunny and Clear
        //{
        //    do
        //    {
        //        weatherRandomiser = random1.Next(0, 12);

        //        switch (weatherRandomiser)
        //        {
        //            case 0:
        //                {
        //                    break;
        //                }
        //            case 1:
        //                {
        //                    break;
        //                }
        //            case 2:
        //                {
        //                    break;
        //                }
        //            case 3:
        //                {
        //                    break;
        //                }
        //            case 4:
        //                {
        //                    break;
        //                }
        //            case 5:
        //                {
        //                    break;
        //                }
        //            case 6:
        //                {
        //                    do
        //                    {
        //                        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //                        API.consoleOutput("Weather 6 selected. Rerolling");
        //                        weatherRandomiser = random1.Next(0, 12);

        //                        Console.ResetColor();

        //                    } while (weatherRandomiser == 6);
        //                    break;
        //                }
        //            case 7:
        //                {
        //                    do
        //                    {
        //                        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //                        API.consoleOutput("Weather 7 selected. Rerolling");
        //                        weatherRandomiser = random1.Next(0, 12);

        //                        Console.ResetColor();

        //                    } while (weatherRandomiser == 7);
        //                    break;
        //                }
        //            case 8:
        //                {
        //                    do
        //                    {
        //                        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //                        API.consoleOutput("Weather 8 selected. Rerolling");
        //                        weatherRandomiser = random1.Next(0, 12);

        //                        Console.ResetColor();

        //                    } while (weatherRandomiser == 8);
        //                    break;
        //                }
        //            case 9:
        //                {
        //                    do
        //                    {
        //                        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //                        API.consoleOutput("Weather 9 selected. Rerolling");
        //                        weatherRandomiser = random1.Next(0, 12);

        //                        Console.ResetColor();

        //                    } while (weatherRandomiser == 9);
        //                    break;
        //                }
        //            case 10:
        //                {
        //                    do
        //                    {
        //                        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //                        API.consoleOutput("Weather 10 selected. Rerolling");
        //                        weatherRandomiser = random1.Next(0, 12);

        //                        Console.ResetColor();

        //                    } while (weatherRandomiser == 10);
        //                    break;
        //                }
        //            case 11:
        //                {
        //                    do
        //                    {
        //                        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //                        API.consoleOutput("Weather 11 selected. Rerolling");
        //                        weatherRandomiser = random1.Next(0, 12);

        //                        Console.ResetColor();

        //                    } while (weatherRandomiser == 11);
        //                    break;
        //                }
        //            case 12:
        //                {
        //                    break;
        //                }
        //        }
        //        //if (weatherRandomiser == 9)
        //        //{
        //        //    do
        //        //    {
        //        //        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //        //        API.consoleOutput("Weather 9 selected. Rerolling");
        //        //        weatherRandomiser = random1.Next(0, 12);

        //        //        Console.ResetColor();

        //        //    } while (weatherRandomiser == 9);
        //        //}

        //        //if (weatherRandomiser == 6) //Rain
        //        //{
        //        //    do
        //        //    {
        //        //        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //        //        API.consoleOutput("Weather 6 selected. Rerolling");
        //        //        weatherRandomiser = random1.Next(0, 12);

        //        //        Console.ResetColor();

        //        //    } while (weatherRandomiser == 6);
        //        //}

        //        //if (weatherRandomiser == 7) //Thunder
        //        //{
        //        //    do
        //        //    {
        //        //        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //        //        API.consoleOutput("Weather 7 selected. Rerolling");
        //        //        weatherRandomiser = random1.Next(0, 12);

        //        //        Console.ResetColor();

        //        //    } while (weatherRandomiser == 7);
        //        //}

        //        //if (weatherRandomiser == 8) //Light Rain
        //        //{
        //        //    do
        //        //    {
        //        //        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //        //        API.consoleOutput("Weather 8 selected. Rerolling");
        //        //        weatherRandomiser = random1.Next(0, 12);

        //        //        Console.ResetColor();

        //        //    } while (weatherRandomiser == 8);
        //        //}

        //        //if (weatherRandomiser == 10) //Very Light Snow
        //        //{
        //        //    do
        //        //    {
        //        //        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //        //        API.consoleOutput("Weather 10 selected. Rerolling");
        //        //        weatherRandomiser = random1.Next(0, 12);

        //        //        Console.ResetColor();

        //        //    } while (weatherRandomiser == 10);
        //        //}

        //        //if (weatherRandomiser == 11) //Windy Light Snow
        //        //{
        //        //    do
        //        //    {
        //        //        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //        //        API.consoleOutput("Weather 11 selected. Rerolling");
        //        //        weatherRandomiser = random1.Next(0, 12);

        //        //        Console.ResetColor();

        //        //    } while (weatherRandomiser == 11);
        //        //}

        //    } while (weatherRandomiser == 6 || weatherRandomiser == 7 || weatherRandomiser == 8 || weatherRandomiser == 9 || weatherRandomiser == 10 || weatherRandomiser == 11);
        //}

        //else if (currentWeather == 2 || currentWeather == 5) //Clouds and Overcast
        //{
        //    do
        //    {
        //        weatherRandomiser = random1.Next(0, 12);

        //        switch (weatherRandomiser)
        //        {
        //            case 0:
        //                {
        //                    do
        //                    {
        //                        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //                        API.consoleOutput("Weather 0 selected. Rerolling");
        //                        weatherRandomiser = random1.Next(0, 12);

        //                        Console.ResetColor();

        //                    } while (weatherRandomiser == 0);
        //                    break;
        //                }
        //            case 1:
        //                {
        //                    break;
        //                }
        //            case 2:
        //                {
        //                    break;
        //                }
        //            case 3:
        //                {
        //                    do
        //                    {
        //                        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //                        API.consoleOutput("Weather 3 selected. Rerolling");
        //                        weatherRandomiser = random1.Next(0, 12);

        //                        Console.ResetColor();

        //                    } while (weatherRandomiser == 3);
        //                    break;
        //                }
        //            case 4:
        //                {
        //                    break;
        //                }
        //            case 5:
        //                {
        //                    break;
        //                }
        //            case 6:
        //                {
        //                    break;
        //                }
        //            case 7:
        //                {
        //                    do
        //                    {
        //                        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //                        API.consoleOutput("Weather 7 selected. Rerolling");
        //                        weatherRandomiser = random1.Next(0, 12);

        //                        Console.ResetColor();

        //                    } while (weatherRandomiser == 7);
        //                    break;
        //                }
        //            case 8:
        //                {
        //                    break;
        //                }
        //            case 9:
        //                {
        //                    do
        //                    {
        //                        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //                        API.consoleOutput("Weather 9 selected. Rerolling");
        //                        weatherRandomiser = random1.Next(0, 12);

        //                        Console.ResetColor();

        //                    } while (weatherRandomiser == 9);
        //                    break;
        //                }
        //            case 10:
        //                {
        //                    do
        //                    {
        //                        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //                        API.consoleOutput("Weather 10 selected. Rerolling");
        //                        weatherRandomiser = random1.Next(0, 12);

        //                        Console.ResetColor();

        //                    } while (weatherRandomiser == 10);
        //                    break;
        //                }
        //            case 11:
        //                {
        //                    break;
        //                }
        //            case 12:
        //                {
        //                    do
        //                    {
        //                        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //                        API.consoleOutput("Weather 12 selected. Rerolling");
        //                        weatherRandomiser = random1.Next(0, 12);

        //                        Console.ResetColor();

        //                    } while (weatherRandomiser == 12);
        //                    break;
        //                }
        //        }
        //        //if (weatherRandomiser == 9)
        //        //{
        //        //    do
        //        //    {
        //        //        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //        //        API.consoleOutput("Weather 9 selected. Rerolling");
        //        //        weatherRandomiser = random1.Next(0, 12);

        //        //        Console.ResetColor();

        //        //    } while (weatherRandomiser == 9);
        //        //}

        //        //if (weatherRandomiser == 0) //Extra Sunny
        //        //{
        //        //    do
        //        //    {
        //        //        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //        //        API.consoleOutput("Weather 0 selected. Rerolling");
        //        //        weatherRandomiser = random1.Next(0, 12);

        //        //        Console.ResetColor();

        //        //    } while (weatherRandomiser == 0);
        //        //}

        //        //if (weatherRandomiser == 3) //Smog
        //        //{
        //        //    do
        //        //    {
        //        //        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //        //        API.consoleOutput("Weather 3 selected. Rerolling");
        //        //        weatherRandomiser = random1.Next(0, 12);

        //        //        Console.ResetColor();

        //        //    } while (weatherRandomiser == 3);
        //        //}

        //        //if (weatherRandomiser == 7) //Thunder
        //        //{
        //        //    do
        //        //    {
        //        //        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //        //        API.consoleOutput("Weather 7 selected. Rerolling");
        //        //        weatherRandomiser = random1.Next(0, 12);

        //        //        Console.ResetColor();

        //        //    } while (weatherRandomiser == 7);
        //        //}

        //        //if (weatherRandomiser == 10) //Very Light Snow
        //        //{
        //        //    do
        //        //    {
        //        //        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //        //        API.consoleOutput("Weather 10 selected. Rerolling");
        //        //        weatherRandomiser = random1.Next(0, 12);

        //        //        Console.ResetColor();

        //        //    } while (weatherRandomiser == 10);
        //        //}

        //        //if (weatherRandomiser == 12) //Light Snow
        //        //{
        //        //    do
        //        //    {
        //        //        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //        //        API.consoleOutput("Weather 12 selected. Rerolling");
        //        //        weatherRandomiser = random1.Next(0, 12);

        //        //        Console.ResetColor();

        //        //    } while (weatherRandomiser == 12);
        //        //}

        //    } while (weatherRandomiser == 0 || weatherRandomiser == 3 || weatherRandomiser == 7 || weatherRandomiser == 9 || weatherRandomiser == 10 || weatherRandomiser == 12);

        //}

        //else if (currentWeather == 3 || currentWeather == 4) //Smog and Foggy
        //{
        //    do
        //    {
        //        weatherRandomiser = random1.Next(0, 12);

        //        switch (weatherRandomiser)
        //        {
        //            case 0:
        //                {
        //                    break;
        //                }
        //            case 1:
        //                {
        //                    break;
        //                }
        //            case 2:
        //                {
        //                    break;
        //                }
        //            case 3:
        //                {
        //                    break;
        //                }
        //            case 4:
        //                {
        //                    break;
        //                }
        //            case 5:
        //                {
        //                    break;
        //                }
        //            case 6:
        //                {
        //                    do
        //                    {
        //                        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //                        API.consoleOutput("Weather 6 selected. Rerolling");
        //                        weatherRandomiser = random1.Next(0, 12);

        //                        Console.ResetColor();

        //                    } while (weatherRandomiser == 6);
        //                    break;
        //                }
        //            case 7:
        //                {
        //                    do
        //                    {
        //                        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //                        API.consoleOutput("Weather 7 selected. Rerolling");
        //                        weatherRandomiser = random1.Next(0, 12);

        //                        Console.ResetColor();

        //                    } while (weatherRandomiser == 7);
        //                    break;
        //                }
        //            case 8:
        //                {
        //                    break;
        //                }
        //            case 9:
        //                {
        //                    do
        //                    {
        //                        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //                        API.consoleOutput("Weather 9 selected. Rerolling");
        //                        weatherRandomiser = random1.Next(0, 12);

        //                        Console.ResetColor();

        //                    } while (weatherRandomiser == 9);
        //                    break;
        //                }
        //            case 10:
        //                {
        //                    break;
        //                }
        //            case 11:
        //                {
        //                    break;
        //                }
        //            case 12:
        //                {
        //                    break;
        //                }
        //        }
        //        //if (weatherRandomiser == 9)
        //        //{
        //        //    do
        //        //    {
        //        //        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //        //        API.consoleOutput("Weather 9 selected. Rerolling");
        //        //        weatherRandomiser = random1.Next(0, 12);

        //        //        Console.ResetColor();

        //        //    } while (weatherRandomiser == 9);
        //        //}

        //        //if (weatherRandomiser == 0) //Extra Sunny
        //        //{
        //        //    do
        //        //    {
        //        //        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //        //        API.consoleOutput("Weather 0 selected. Rerolling");
        //        //        weatherRandomiser = random1.Next(0, 12);

        //        //        Console.ResetColor();

        //        //    } while (weatherRandomiser == 0);
        //        //}

        //        //if (weatherRandomiser == 6) // Rain
        //        //{
        //        //    do
        //        //    {
        //        //        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //        //        API.consoleOutput("Weather 6 selected. Rerolling");
        //        //        weatherRandomiser = random1.Next(0, 12);

        //        //        Console.ResetColor();

        //        //    } while (weatherRandomiser == 6);
        //        //}

        //        //if (weatherRandomiser == 7) //Thunder
        //        //{
        //        //    do
        //        //    {
        //        //        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //        //        API.consoleOutput("Weather 7 selected. Rerolling");
        //        //        weatherRandomiser = random1.Next(0, 12);

        //        //        Console.ResetColor();

        //        //    } while (weatherRandomiser == 7);
        //        //}

        //    } while (weatherRandomiser == 0 || weatherRandomiser == 6 || weatherRandomiser == 7);
        //}

        //else if (currentWeather == 6 || currentWeather == 8) //Light Rain and Rain
        //{
        //    do
        //    {
        //        weatherRandomiser = random1.Next(0, 12);

        //        switch (weatherRandomiser)
        //        {
        //            case 0:
        //                {
        //                    do
        //                    {
        //                        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //                        API.consoleOutput("Weather 0 selected. Rerolling");
        //                        weatherRandomiser = random1.Next(0, 12);

        //                        Console.ResetColor();

        //                    } while (weatherRandomiser == 0);
        //                    break;
        //                }
        //            case 1:
        //                {
        //                    do
        //                    {
        //                        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //                        API.consoleOutput("Weather 1 selected. Rerolling");
        //                        weatherRandomiser = random1.Next(0, 12);

        //                        Console.ResetColor();

        //                    } while (weatherRandomiser == 1);
        //                    break;
        //                }
        //            case 2:
        //                {
        //                    break;
        //                }
        //            case 3:
        //                {
        //                    do
        //                    {
        //                        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //                        API.consoleOutput("Weather 3 selected. Rerolling");
        //                        weatherRandomiser = random1.Next(0, 12);

        //                        Console.ResetColor();

        //                    } while (weatherRandomiser == 3);
        //                    break;
        //                }
        //            case 4:
        //                {
        //                    break;
        //                }
        //            case 5:
        //                {
        //                    break;
        //                }
        //            case 6:
        //                {
        //                    break;
        //                }
        //            case 7:
        //                {
        //                    break;
        //                }
        //            case 8:
        //                {
        //                    break;
        //                }
        //            case 9:
        //                {
        //                    do
        //                    {
        //                        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //                        API.consoleOutput("Weather 9 selected. Rerolling");
        //                        weatherRandomiser = random1.Next(0, 12);

        //                        Console.ResetColor();

        //                    } while (weatherRandomiser == 9);
        //                    break;
        //                }
        //            case 10:
        //                {
        //                    do
        //                    {
        //                        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //                        API.consoleOutput("Weather 10 selected. Rerolling");
        //                        weatherRandomiser = random1.Next(0, 12);

        //                        Console.ResetColor();

        //                    } while (weatherRandomiser == 10);
        //                    break;
        //                }
        //            case 11:
        //                {
        //                    do
        //                    {
        //                        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //                        API.consoleOutput("Weather 11 selected. Rerolling");
        //                        weatherRandomiser = random1.Next(0, 12);

        //                        Console.ResetColor();

        //                    } while (weatherRandomiser == 11);
        //                    break;
        //                }
        //            case 12:
        //                {
        //                    do
        //                    {
        //                        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //                        API.consoleOutput("Weather 12 selected. Rerolling");
        //                        weatherRandomiser = random1.Next(0, 12);

        //                        Console.ResetColor();

        //                    } while (weatherRandomiser == 12);
        //                    break;
        //                }
        //        }
        //        //if (weatherRandomiser == 9)
        //        //{
        //        //    do
        //        //    {
        //        //        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //        //        API.consoleOutput("Weather 9 selected. Rerolling");
        //        //        weatherRandomiser = random1.Next(0, 12);

        //        //        Console.ResetColor();

        //        //    } while (weatherRandomiser == 9);
        //        //}

        //        //if (weatherRandomiser == 0) //Extra Sunny
        //        //{
        //        //    do
        //        //    {
        //        //        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //        //        API.consoleOutput("Weather 0 selected. Rerolling");
        //        //        weatherRandomiser = random1.Next(0, 12);

        //        //        Console.ResetColor();

        //        //    } while (weatherRandomiser == 0);
        //        //}

        //        //if (weatherRandomiser == 1) //Clear
        //        //{
        //        //    do
        //        //    {
        //        //        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //        //        API.consoleOutput("Weather 1 selected. Rerolling");
        //        //        weatherRandomiser = random1.Next(0, 12);

        //        //        Console.ResetColor();

        //        //    } while (weatherRandomiser == 1);
        //        //}

        //        //if (weatherRandomiser == 3) //Smog
        //        //{
        //        //    do
        //        //    {
        //        //        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //        //        API.consoleOutput("Weather 3 selected. Rerolling");
        //        //        weatherRandomiser = random1.Next(0, 12);

        //        //        Console.ResetColor();

        //        //    } while (weatherRandomiser == 3);
        //        //}

        //        //if (weatherRandomiser == 10) //Very Light Snow
        //        //{
        //        //    do
        //        //    {
        //        //        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //        //        API.consoleOutput("Weather 10 selected. Rerolling");
        //        //        weatherRandomiser = random1.Next(0, 12);

        //        //        Console.ResetColor();

        //        //    } while (weatherRandomiser == 10);
        //        //}

        //        //if (weatherRandomiser == 11) //Windy Light Snow
        //        //{
        //        //    do
        //        //    {
        //        //        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //        //        API.consoleOutput("Weather 11 selected. Rerolling");
        //        //        weatherRandomiser = random1.Next(0, 12);

        //        //        Console.ResetColor();

        //        //    } while (weatherRandomiser == 11);
        //        //}

        //        //if (weatherRandomiser == 12) //Light Snow
        //        //{
        //        //    do
        //        //    {
        //        //        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //        //        API.consoleOutput("Weather 12 selected. Rerolling");
        //        //        weatherRandomiser = random1.Next(0, 12);

        //        //        Console.ResetColor();

        //        //    } while (weatherRandomiser == 12);
        //        //}

        //    } while (weatherRandomiser == 0 || weatherRandomiser == 1 || weatherRandomiser == 3 || weatherRandomiser == 9 || weatherRandomiser == 10 || weatherRandomiser == 11 || weatherRandomiser == 12);
        //}

        //else if (currentWeather == 7)
        //{
        //    do
        //    {
        //        weatherRandomiser = random1.Next(0, 12);

        //        switch (weatherRandomiser)
        //        {
        //            case 0:
        //                {
        //                    do
        //                    {
        //                        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //                        API.consoleOutput("Weather 0 selected. Rerolling");
        //                        weatherRandomiser = random1.Next(0, 12);

        //                        Console.ResetColor();

        //                    } while (weatherRandomiser == 0);
        //                    break;
        //                }
        //            case 1:
        //                {
        //                    do
        //                    {
        //                        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //                        API.consoleOutput("Weather 1 selected. Rerolling");
        //                        weatherRandomiser = random1.Next(0, 12);

        //                        Console.ResetColor();

        //                    } while (weatherRandomiser == 1);
        //                    break;
        //                }
        //            case 2:
        //                {
        //                    do
        //                    {
        //                        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //                        API.consoleOutput("Weather 2 selected. Rerolling");
        //                        weatherRandomiser = random1.Next(0, 12);

        //                        Console.ResetColor();

        //                    } while (weatherRandomiser == 2);
        //                    break;
        //                }
        //            case 3:
        //                {
        //                    do
        //                    {
        //                        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //                        API.consoleOutput("Weather 3 selected. Rerolling");
        //                        weatherRandomiser = random1.Next(0, 12);

        //                        Console.ResetColor();

        //                    } while (weatherRandomiser == 3);
        //                    break;
        //                }
        //            case 4:
        //                {
        //                    break;
        //                }
        //            case 5:
        //                {
        //                    break;
        //                }
        //            case 6:
        //                {
        //                    break;
        //                }
        //            case 7:
        //                {
        //                    break;
        //                }
        //            case 8:
        //                {
        //                    do
        //                    {
        //                        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //                        API.consoleOutput("Weather 8 selected. Rerolling");
        //                        weatherRandomiser = random1.Next(0, 12);

        //                        Console.ResetColor();

        //                    } while (weatherRandomiser == 8);
        //                    break;
        //                }
        //            case 9:
        //                {
        //                    do
        //                    {
        //                        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //                        API.consoleOutput("Weather 9 selected. Rerolling");
        //                        weatherRandomiser = random1.Next(0, 12);

        //                        Console.ResetColor();

        //                    } while (weatherRandomiser == 9);
        //                    break;
        //                }
        //            case 10:
        //                {
        //                    do
        //                    {
        //                        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //                        API.consoleOutput("Weather 10 selected. Rerolling");
        //                        weatherRandomiser = random1.Next(0, 12);

        //                        Console.ResetColor();

        //                    } while (weatherRandomiser == 10);
        //                    break;
        //                }
        //            case 11:
        //                {
        //                    do
        //                    {
        //                        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //                        API.consoleOutput("Weather 11 selected. Rerolling");
        //                        weatherRandomiser = random1.Next(0, 12);

        //                        Console.ResetColor();

        //                    } while (weatherRandomiser == 11);
        //                    break;
        //                }
        //            case 12:
        //                {
        //                    do
        //                    {
        //                        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //                        API.consoleOutput("Weather 12 selected. Rerolling");
        //                        weatherRandomiser = random1.Next(0, 12);

        //                        Console.ResetColor();

        //                    } while (weatherRandomiser == 12);
        //                    break;
        //                }
        //        }
        //        //if (weatherRandomiser == 9)
        //        //{
        //        //    do
        //        //    {
        //        //        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //        //        API.consoleOutput("Weather 9 selected. Rerolling");
        //        //        weatherRandomiser = random1.Next(0, 12);

        //        //        Console.ResetColor();

        //        //    } while (weatherRandomiser == 9);
        //        //}

        //        //if (weatherRandomiser == 0) //Extra Sunny
        //        //{
        //        //    do
        //        //    {
        //        //        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //        //        API.consoleOutput("Weather 0 selected. Rerolling");
        //        //        weatherRandomiser = random1.Next(0, 12);

        //        //        Console.ResetColor();

        //        //    } while (weatherRandomiser == 0);
        //        //}

        //        //if (weatherRandomiser == 1) //Clear
        //        //{
        //        //    do
        //        //    {
        //        //        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //        //        API.consoleOutput("Weather 1 selected. Rerolling");
        //        //        weatherRandomiser = random1.Next(0, 12);

        //        //        Console.ResetColor();

        //        //    } while (weatherRandomiser == 1);
        //        //}

        //        //if (weatherRandomiser == 2) //Clouds
        //        //{
        //        //    do
        //        //    {
        //        //        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //        //        API.consoleOutput("Weather 2 selected. Rerolling");
        //        //        weatherRandomiser = random1.Next(0, 12);

        //        //        Console.ResetColor();

        //        //    } while (weatherRandomiser == 2);
        //        //}

        //        //if (weatherRandomiser == 3) //Smog
        //        //{
        //        //    do
        //        //    {
        //        //        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //        //        API.consoleOutput("Weather 3 selected. Rerolling");
        //        //        weatherRandomiser = random1.Next(0, 12);

        //        //        Console.ResetColor();

        //        //    } while (weatherRandomiser == 3);
        //        //}

        //        //if (weatherRandomiser == 8) //Light Rain
        //        //{
        //        //    do
        //        //    {
        //        //        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //        //        API.consoleOutput("Weather 8 selected. Rerolling");
        //        //        weatherRandomiser = random1.Next(0, 12);

        //        //        Console.ResetColor();

        //        //    } while (weatherRandomiser == 8);
        //        //}

        //        //if (weatherRandomiser == 10) //Very Light Snow
        //        //{
        //        //    do
        //        //    {
        //        //        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //        //        API.consoleOutput("Weather 10 selected. Rerolling");
        //        //        weatherRandomiser = random1.Next(0, 12);

        //        //        Console.ResetColor();

        //        //    } while (weatherRandomiser == 10);
        //        //}

        //        //if (weatherRandomiser == 11) //Windy Light Snow
        //        //{
        //        //    do
        //        //    {
        //        //        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //        //        API.consoleOutput("Weather 11 selected. Rerolling");
        //        //        weatherRandomiser = random1.Next(0, 12);

        //        //        Console.ResetColor();

        //        //    } while (weatherRandomiser == 11);
        //        //}

        //        //if (weatherRandomiser == 12) //Light Snow
        //        //{
        //        //    do
        //        //    {
        //        //        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //        //        API.consoleOutput("Weather 12 selected. Rerolling");
        //        //        weatherRandomiser = random1.Next(0, 12);

        //        //        Console.ResetColor();

        //        //    } while (weatherRandomiser == 12);
        //        //}

        //    } while (weatherRandomiser == 0 || weatherRandomiser == 1 || weatherRandomiser == 2 || weatherRandomiser == 3 || weatherRandomiser == 8 || weatherRandomiser == 9 || weatherRandomiser == 10 || weatherRandomiser == 11 || weatherRandomiser == 12);

        //}

        //else if (currentWeather == 10 || currentWeather == 11 || currentWeather == 12) //Very Light Snow and Windy Light Snow and Light Snow
        //{
        //    do
        //    {
        //        weatherRandomiser = random1.Next(0, 12);

        //        switch (weatherRandomiser)
        //        {
        //            case 0:
        //                {
        //                    do
        //                    {
        //                        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //                        API.consoleOutput("Weather 0 selected. Rerolling");
        //                        weatherRandomiser = random1.Next(0, 12);

        //                        Console.ResetColor();

        //                    } while (weatherRandomiser == 0);
        //                    break;
        //                }
        //            case 1:
        //                {
        //                    do
        //                    {
        //                        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //                        API.consoleOutput("Weather 1 selected. Rerolling");
        //                        weatherRandomiser = random1.Next(0, 12);

        //                        Console.ResetColor();

        //                    } while (weatherRandomiser == 1);
        //                    break;
        //                }
        //            case 2:
        //                {
        //                    break;
        //                }
        //            case 3:
        //                {
        //                    do
        //                    {
        //                        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //                        API.consoleOutput("Weather 3 selected. Rerolling");
        //                        weatherRandomiser = random1.Next(0, 12);

        //                        Console.ResetColor();

        //                    } while (weatherRandomiser == 3);
        //                    break;
        //                }
        //            case 4:
        //                {
        //                    break;
        //                }
        //            case 5:
        //                {
        //                    break;
        //                }
        //            case 6:
        //                {
        //                    do
        //                    {
        //                        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //                        API.consoleOutput("Weather 6 selected. Rerolling");
        //                        weatherRandomiser = random1.Next(0, 12);

        //                        Console.ResetColor();

        //                    } while (weatherRandomiser == 6);
        //                    break;
        //                }
        //            case 7:
        //                {
        //                    do
        //                    {
        //                        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //                        API.consoleOutput("Weather 7 selected. Rerolling");
        //                        weatherRandomiser = random1.Next(0, 12);

        //                        Console.ResetColor();

        //                    } while (weatherRandomiser == 7);
        //                    break;
        //                }
        //            case 8:
        //                {
        //                    do
        //                    {
        //                        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //                        API.consoleOutput("Weather 8 selected. Rerolling");
        //                        weatherRandomiser = random1.Next(0, 12);

        //                        Console.ResetColor();

        //                    } while (weatherRandomiser == 8);
        //                    break;
        //                }
        //            case 9:
        //                {
        //                    do
        //                    {
        //                        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //                        API.consoleOutput("Weather 9 selected. Rerolling");
        //                        weatherRandomiser = random1.Next(0, 12);

        //                        Console.ResetColor();

        //                    } while (weatherRandomiser == 9);
        //                    break;
        //                }
        //            case 10:
        //                {
        //                    break;
        //                }
        //            case 11:
        //                {
        //                    break;
        //                }
        //            case 12:
        //                {
        //                    break;
        //                }
        //        }
        //        //if (weatherRandomiser == 9)
        //        //{
        //        //    do
        //        //    {
        //        //        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //        //        API.consoleOutput("Weather 9 selected. Rerolling");
        //        //        weatherRandomiser = random1.Next(0, 12);

        //        //        Console.ResetColor();

        //        //    } while (weatherRandomiser == 9);
        //        //}

        //        //if (weatherRandomiser == 0) //Extra Sunny
        //        //{
        //        //    do
        //        //    {
        //        //        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //        //        API.consoleOutput("Weather 0 selected. Rerolling");
        //        //        weatherRandomiser = random1.Next(0, 12);

        //        //        Console.ResetColor();

        //        //    } while (weatherRandomiser == 0);
        //        //}

        //        //if (weatherRandomiser == 1) //Clear
        //        //{
        //        //    do
        //        //    {
        //        //        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //        //        API.consoleOutput("Weather 1 selected. Rerolling");
        //        //        weatherRandomiser = random1.Next(0, 12);

        //        //        Console.ResetColor();

        //        //    } while (weatherRandomiser == 1);
        //        //}

        //        //if (weatherRandomiser == 3) //Smog
        //        //{
        //        //    do
        //        //    {
        //        //        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //        //        API.consoleOutput("Weather 3 selected. Rerolling");
        //        //        weatherRandomiser = random1.Next(0, 12);

        //        //        Console.ResetColor();

        //        //    } while (weatherRandomiser == 3);
        //        //}

        //        //if (weatherRandomiser == 6) // Rain
        //        //{
        //        //    do
        //        //    {
        //        //        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //        //        API.consoleOutput("Weather 6 selected. Rerolling");
        //        //        weatherRandomiser = random1.Next(0, 12);

        //        //        Console.ResetColor();

        //        //    } while (weatherRandomiser == 6);
        //        //}

        //        //if (weatherRandomiser == 7) //Thunder
        //        //{
        //        //    do
        //        //    {
        //        //        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //        //        API.consoleOutput("Weather 7 selected. Rerolling");
        //        //        weatherRandomiser = random1.Next(0, 12);

        //        //        Console.ResetColor();

        //        //    } while (weatherRandomiser == 7);
        //        //}

        //        //if (weatherRandomiser == 8) //Light Rain
        //        //{
        //        //    do
        //        //    {
        //        //        Console.ForegroundColor = ConsoleColor.DarkGreen;
        //        //        API.consoleOutput("Weather 8 selected. Rerolling");
        //        //        weatherRandomiser = random1.Next(0, 12);

        //        //        Console.ResetColor();

        //        //    } while (weatherRandomiser == 8);
        //        //}

        //    } while (weatherRandomiser == 0 || weatherRandomiser == 1 || weatherRandomiser == 3 || weatherRandomiser == 6 || weatherRandomiser == 7 || weatherRandomiser == 8);
        //}

    }
}
