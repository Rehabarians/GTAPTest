using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;
using GrandTheftMultiplayer.Server.API;
using GrandTheftMultiplayer.Server.Constant;
using GrandTheftMultiplayer.Server.Elements;
using GrandTheftMultiplayer.Server.Extensions;
using GrandTheftMultiplayer.Server.Managers;
using GrandTheftMultiplayer.Server.Models;
using GrandTheftMultiplayer.Server.Util;
using GrandTheftMultiplayer.Shared.Gta;
using GrandTheftMultiplayer.Shared.Math;

namespace newcommands
{
    public class newcommands : Script
    {
        [Command("coords")]
        public void coords(Client player, string coordName)
        {
            Vector3 playerPosGet = API.getEntityPosition(player);
            var pPosX = (playerPosGet.X.ToString().Replace(',', '.') + ", ");
            var pPosY = (playerPosGet.Y.ToString().Replace(',', '.') + ", ");
            var pPosZ = (playerPosGet.Z.ToString().Replace(',', '.'));
            Vector3 playerRotGet = API.getEntityRotation(player);
            var pRotX = (playerRotGet.X.ToString().Replace(',', '.') + ", ");
            var pRotY = (playerRotGet.Y.ToString().Replace(',', '.') + ", ");
            var pRotZ = (playerRotGet.Z.ToString().Replace(',', '.'));

            API.sendChatMessageToPlayer(player, "Your position is: ~y~" + playerPosGet, "~w~Your rotation is: ~y~" + playerRotGet);
            StreamWriter coordsFile;
            if (!File.Exists("SavedCoords.txt"))
            {
                coordsFile = new StreamWriter("SavedCoords.txt");
            }
            else
            {
                coordsFile = File.AppendText("SavedCoords.txt");
            }
            API.sendChatMessageToPlayer(player, "~r~Coordinates have been saved!");
            coordsFile.WriteLine("| " + coordName + " | " + "Saved Coordenates: " + pPosX + pPosY + pPosZ + " Saved Rotation: " + pRotX + pRotY + pRotZ);
            coordsFile.Close();
        }
        [Command("savedcoords")]
        public void savedCoords(Client player)
        {
            API.sendChatMessageToPlayer(player, "~r~Current Saved Coordenates:");
            int counter = 0;
            string coordsLine;
            System.IO.StreamReader file = new System.IO.StreamReader("SavedCoords.txt");
            while ((coordsLine = file.ReadLine()) != null)
            {
                API.sendChatMessageToPlayer(player, coordsLine);
                counter++;
            }
            file.Close();
        }
    }
}