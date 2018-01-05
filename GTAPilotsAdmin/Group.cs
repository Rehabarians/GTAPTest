#define GROUP_COMMAND_CONTROL

using GTANetworkServer;
using GTANetworkShared;
using System;
using System.Collections.Generic;
using System.Linq;

namespace GroupManager
{ 
    public class Group
    {        
        private static  HashSet<Group> internalGroupHashSet = new HashSet<Group>();
        public readonly HashSet<Client> players = new HashSet<Client>();
        public readonly HashSet<Group> childs = new HashSet<Group>();
        public string   Name { get; set; }

    #if GROUP_COMMAND_CONTROL
        public readonly HashSet<string> commands = new HashSet<string>();
    #endif           
        
        public Group(string gName)
        {
            Name = gName;
            internalGroupHashSet.Add(this);                     
        }

        public Group(string gName, Group gParent)
        {
            Name = gName;        
            gParent.childs.Add(this);                           

            foreach(Group g in internalGroupHashSet)
            {
                if (g.childs.Contains(gParent))
                    g.childs.Add(this);
            }

            internalGroupHashSet.Add(this);
        }        

        #region player related

        /// <summary>
        /// Add a player to a group
        /// </summary>
        /// <param name="player">The player in Client type</param>
        /// <param name="g">The group in Group type</param>
        public static void AddPlayer(Client player, Group g)
        {
            if (g == null)
                return;

            g.players.Add(player);

            foreach (Group gChild in g.childs)
            {               
                gChild.players.Add(player);
            }
        }

        /// <summary>
        /// Removes a player from a group
        /// </summary>
        /// <param name="player">The player in Client type</param>
        /// <param name="g">The group in Group type</param>
        public static void RemovePlayer(Client player, Group g)
        {
            if (g == null)
                return;

            g.players.Remove(player);

            foreach (Group gChild in g.childs)
            {
                gChild.players.Remove(player);
            }
        }

        /// <summary>
        /// IsPlayerInGroup
        /// </summary>
        /// <param name="player">The player in Client type</param>
        /// <param name="g">The group in Group type</param>
        /// <param name="considerParent">If true, a player in a parent group will be considered a member of the given group</param>
        /// <returns>True or false</returns>
        public static bool IsPlayerInGroup(Client player, Group g, bool considerParent = true)
        {
            if (g == null)
                return false;

            if (g.players.Contains(player))
                return true;

            if (considerParent)
            {
                foreach (Group gr in internalGroupHashSet)
                {
                    if (gr.players.Contains(player) && gr.childs.Contains(g))
                        return true;
                }
            }                     

            return false;
        }

        /// <summary>
        /// GetPlayerGroups
        /// </summary>
        /// <param name="player">The player in Client type</param>
        /// <param name="considerChilds">If true and the player is in a parent group, his childs will be added</param>
        /// <returns>HashSet in Group type</returns>
        public static HashSet<Group> GetPlayerGroups(Client player, bool considerChilds = false)
        {
            if (internalGroupHashSet.Count() == 0)
                return null;

            HashSet<Group> gList = new HashSet<Group>();                                 
            foreach(Group g in internalGroupHashSet)
            {
                if (g.players.Contains(player))
                {
                    gList.Add(g);

                    if (considerChilds)
                    {
                        foreach (Group gChild in g.childs)
                        {
                            gList.Add(gChild);
                        }
                    }
                }                                                                               
            }   
                     
            return gList;
        }

        /// <summary>
        /// Send a chat message to all players in a group
        /// </summary>
        /// <param name="g">The group in Group type</param>
        /// <param name="message">The message to be sent</param>
        /// <param name="considerParent">If true, all players in a parent group of the given group will receive the message</param>
        public static void SendChatMessage(Group g, string message, bool considerParent = false)
        {
            if (g == null)
                return;

            foreach (Client c in g.players)
            {
                API.shared.sendChatMessageToPlayer(c, message);
            }

            if (considerParent)
            {
                foreach (Group gr in internalGroupHashSet)
                {
                    if (gr.childs.Contains(g))
                    {
                        foreach (Client c in gr.players)                        
                            API.shared.sendChatMessageToPlayer(c, message);
                    }
                }
            }      
        }

        /// <summary>
        /// Set a parent group to given child group
        /// </summary>
        /// <param name="child">The child group in Group type</param>
        /// <param name="parent">The parent group in Group type</param>
        public static void SetParent(Group child, Group parent)
        {
            if (child == null || parent == null)
                return;

            parent.childs.Add(child);

            foreach (Group g in internalGroupHashSet)
            {
                if (g.childs.Contains(parent))
                    g.childs.Add(child);
            }            
        }

        /// <summary>
        /// GetGroupByName
        /// </summary>
        /// <param name="name"></param>
        /// <returns>Group in Group type</returns>
        public static Group GetGroupByName(string name)
        {
            foreach(Group g in internalGroupHashSet)
            {
                if (g.Name == name)
                    return g;
            }
            
            return null;
        }

        /// <summary>
        /// Get all created groups
        /// </summary>
        /// <returns>HashSet in Group type</returns>
        public static HashSet<Group> GetAllGroups()
        {
            return internalGroupHashSet;
        }        
        #endregion

    #if GROUP_COMMAND_CONTROL
        #region command related

        /// <summary>
        /// Add a command to a group
        /// </summary>
        /// <param name="command">Command name</param>
        /// <param name="g">Group in Group type</param>
        public static void AddCommand(string command, Group g)
        {
            if (g == null)
                return;

            g.commands.Add(command);
        }

        /// <summary>
        /// Remove a command from a group
        /// </summary>
        /// <param name="command">Command name</param>
        /// <param name="g">Group in Group type</param>
        public static void RemoveCommand(string command, Group g)
        {
            if (g == null)
                return;

            g.commands.Remove(command);
        }

        /// <summary>
        /// GetCommandGroup
        /// </summary>
        /// <param name="command">Command name</param>
        /// <returns>The group in Group type or null</returns>
        public static Group GetCommandGroup(string command)
        {            
            foreach(Group g in internalGroupHashSet)
            {                
                if (g.commands.Contains(command))
                    return g;
            }
            return null;
        }

        /// <summary>
        /// Get all commands a group has access
        /// </summary>
        /// <param name="g">The group in Group type</param>
        /// <returns>A string containing all the commands</returns>
        public static string GetGroupCommands(Group g)
        {
            if (g == null)
                return string.Empty;

            return string.Join(", ", g.commands);
        }

        /// <summary>
        /// Get all commands a player can use.
        /// </summary>
        /// <param name="player">The player in Client type</param>
        /// <returns>A string containing all commands and his groups</returns>
        public static string GetPlayerCommands(Client player)
        {
            string strCommands = string.Empty;
            foreach(Group g in GetPlayerGroups(player, true))
            {
                if (g == null)
                    break;

                strCommands += "~b~" + g.Name + ":~w~ " + string.Join(", ", g.commands) + "\n";
            }

            return strCommands;
        }
        /// <summary>
        /// Check if a player can or not use a command.
        /// </summary>
        /// <param name="player">The player (in Client type) you want to check.</param>
        /// <param name="command">The command (in string type) you want to check</param>
        /// <returns>Returns true or false</returns>
        public static bool CanPlayerUseCommand(Client player, string command)
        {
            foreach(Group g in GetPlayerGroups(player, true))
            {
                if (g.commands.Contains(command))
                    return true;
            }

            return false;
        }
        #endregion        
    #endif
    }
    #if GROUP_COMMAND_CONTROL
    #region script
    class GroupScript : Script
    {      
        public GroupScript()
        {
            API.onChatCommand += GroupCommandHandler;            
        }

        public void GroupCommandHandler(Client player, string command, CancelEventArgs e)
        {
            int idx = command.IndexOf(" ");
            Group g = Group.GetCommandGroup((idx == -1 ? command.Replace("/", "") : command.Substring(1, idx - 1)));
            if (g != null)
            {                
                if (!Group.IsPlayerInGroup(player, g, true))
                {
                    API.sendChatMessageToPlayer(player, "~r~ERROR: ~w~You are NOT allowed to use this command.");
                    e.Cancel = true;
                }
            }            
        }              
    }

    #endregion
    #endif
}

