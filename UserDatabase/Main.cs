﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Insight.Database.Providers.MySql;
using Insight.Database;
using GrandTheftMultiplayer.Server;
using GrandTheftMultiplayer.Server.API;
using GrandTheftMultiplayer.Server.Managers;
using GrandTheftMultiplayer.Server.Elements;
using GrandTheftMultiplayer.Server.Constant;
using GrandTheftMultiplayer.Shared;
using GrandTheftMultiplayer.Shared.Math;
using BCr = BCrypt.Net;
using System.Data.SqlClient;

namespace UserDatabase
{
    public class Main : Script
    {

        private static SqlConnectionStringBuilder _database;
        private static IUserRepository _userRepository;

        public Main()
        {
            API.onResourceStart += ResourceStart;
        }

        private void ResourceStart()
        {
            MySqlInsightDbProvider.RegisterProvider();

            _database = new SqlConnectionStringBuilder("server=localhost;user=root;database=newserver;port=3306;password=;");

            _userRepository = _database.Connection().As<IUserRepository>();
        }

        [Command("login", GreedyArg = true)]
        public void CMD_UserLogin(Client player, string password)
        {
            UserAccount account = _userRepository.GetAccount(player.name);

            bool isPasswordCorrect = BCr.BCrypt.Verify(password, account.Hash);

            if (isPasswordCorrect)
            {
                API.sendChatMessageToPlayer(player, "You're now logged in!");
            }
            else
            {
                API.sendChatMessageToPlayer(player, "Incorrect password entered!");
            }
        }

        [Command("register", GreedyArg = true)]
        public void CMD_UserRegistration(Client player, string password)
        {
            var hash = BCr.BCrypt.HashPassword(password, BCr.BCrypt.GenerateSalt(12));

            UserAccount account = new UserAccount
            {

                Username = player.name,
                Hash = hash
            };

            _userRepository.RegisterAccount(account);

            API.sendChatMessageToPlayer(player, "You're now registered!");
        }
    }

    public interface IUserRepository
    {
        UserAccount RegisterAccount(UserAccount userAccount);
        UserAccount GetAccount(string name);
    }

    public class UserAccount
    {
        public string Username { get; set; }
        public string Hash { get; set; }
    }
}
