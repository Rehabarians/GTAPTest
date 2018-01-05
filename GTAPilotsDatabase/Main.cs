using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MySql.Data.MySqlClient;
using Insight.Database.Providers.MySql;
using Insight.Database;
using GrandTheftMultiplayer.Server;
using GrandTheftMultiplayer.Server.API;
using GrandTheftMultiplayer.Server.Managers;
using GrandTheftMultiplayer.Server.Elements;
using GrandTheftMultiplayer.Server.Constant;
using GrandTheftMultiplayer.Shared;
using GrandTheftMultiplayer.Shared.Math;
using System.Security.Cryptography;
using BCr = BCrypt.Net;
using System.Data.Common;

namespace UserDatabase
{
    public class Main : Script
    {
        private static MySqlConnectionStringBuilder _database;
        private static IUserRepository _userRepository;

        public static class PasswordDerivation
        {
            public const int defaultSaltSize = 16;
            public const int defaultKeySize = 16;
            public const int defaultIterations = 10000;

            public static string Derive(string plainPassword, int saltSize = defaultSaltSize, int iterations = defaultIterations, int keySize = defaultKeySize)
            {
                using (var derive = new Rfc2898DeriveBytes(plainPassword, saltSize: saltSize, iterations: iterations))
                {
                    var b64Pwd = Convert.ToBase64String(derive.GetBytes(keySize));
                    var b64Salt = Convert.ToBase64String(derive.Salt);

                    return string.Join(":", b64Salt, iterations.ToString(), keySize.ToString(), b64Pwd);
                }
            }

            public static bool Verify(string saltedPassword, string plainPassword)
            {
                var passwordParts = saltedPassword.Split(':');

                var salt = Convert.FromBase64String(passwordParts[0]);
                var iters = int.Parse(passwordParts[1]);
                var keySize = int.Parse(passwordParts[2]);
                var pwd = Convert.FromBase64String(passwordParts[3]);

                using(var derive = new Rfc2898DeriveBytes(plainPassword, salt: salt, iterations: iters))
                {
                    var hashedInput = derive.GetBytes(keySize);
                    return hashedInput.SequenceEqual(pwd);
                }
            }
        }

        public Main()
        {
            API.onResourceStart += ResourceStart;
            API.onResourceStop += ResourceStop;
            API.onPlayerConnected += OnPlayerConnected;
            API.onPlayerFinishedDownload += OnPlayerFinishedDownload;
            API.onPlayerDisconnected += OnPlayerDisconnected;
        }

        private void ResourceStart()
        {
            MySqlInsightDbProvider.RegisterProvider();

            _database = new MySqlConnectionStringBuilder(
                "server=localhost;user=root;database=newserver;port=3306;password=;"
                );

            _userRepository = _database.Connection().As<IUserRepository>();
        }

        private void ResourceStop()
        {
            _database.Connection().Close();
        }

        private void OnPlayerConnected(Client player)
        {
            API.setEntityData(player, "Logged in", false);
        }

        private void OnPlayerFinishedDownload(Client player)
        {
            API.setEntityData(player, "Logged in", false);
        }

        private void OnPlayerDisconnected(Client player, string reason)
        {
            UserAccount account = _userRepository.GetAccount(player.name);

            bool anyDataHours = API.hasEntityData(player, "FlyingHours");
            if (anyDataHours == true)
            {
                int CurrentFlyingHours = API.getEntityData(player, "FlyingHours");
                int StoredHours = account.FlyingScore;

                if (StoredHours != CurrentFlyingHours)
                {
                    account.FlyingScore = CurrentFlyingHours;
                }
            }

            bool anyDataUserRank = API.hasEntityData(player, "UserRank");
            if(anyDataUserRank == true)
            {
                string CurrentRank = API.getEntityData(player, "UserRank");
                string StoredRank = account.Rank;

                if (StoredRank != CurrentRank)
                {
                    account.Rank = CurrentRank;
                }
            }

            bool anyDataAdminRank = API.hasEntityData(player, "AdminRank");
            if (anyDataUserRank == true)
            {
                string CurrentRank = API.getEntityData(player, "AdminRank");
                string StoredRank = account.Adminrank;

                if (StoredRank != CurrentRank)
                {
                    account.Adminrank = CurrentRank;
                }
            }
        }

        [Command("login", GreedyArg = true)]
        public void CMD_UserLogin(Client player, string password)
        {
            UserAccount account = _userRepository.GetAccount(player.name);
            string saltedPassword = account.Hash;

            bool isPasswordCorrect = PasswordDerivation.Verify(saltedPassword, password);

            if (isPasswordCorrect)
            {
                API.setEntityData(player, "FlyingHours", account.FlyingScore);
                API.setEntityData(player, "UserRank", account.Rank);
                API.setEntityData(player, "AdminRank", account.Adminrank);
                API.setEntityData(player, "Logged in", true);
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
            if (_userRepository.GetAccount(player.name).ToString() != player.name)
            {
                String saltedPassword = PasswordDerivation.Derive(password);

                bool anyData = API.hasEntityData(player, "FlyingHours");
                int FlyingHours;

                if (anyData == true)
                {
                    FlyingHours = API.getEntityData(player, "FlyingHours");
                }
                else
                {
                    FlyingHours = 75462;
                }

                UserAccount account = new UserAccount
                {

                    Username = player.name,
                    Hash = saltedPassword,
                    Rank = "Pilot",
                    Adminrank = "User",
                    FlyingScore = FlyingHours
                };

                _userRepository.RegisterAccount(account);

                API.sendChatMessageToPlayer(player, "You're now registered!");
                API.sendChatMessageToAll(player.name + " has registered an account!");
                API.consoleOutput(player.name + " Has just registered!");
            }
            else
            {
                API.sendChatMessageToPlayer(player, "You have already registered an account!");
            }
        }

        [Command("stats")]
        public void UserStatsCommand(Client Player)
        {

            bool anyData = API.hasEntityData(Player, "Logged in");

            if (anyData == true)
            {
                bool LoggedIn = API.getEntityData(Player, "Logged in");

                if (LoggedIn == true)
                {
                    UserAccount account = _userRepository.GetAccount(Player.name);

                    API.sendChatMessageToPlayer(Player, "Stats for " + account.Username + ":");
                    API.sendChatMessageToPlayer(Player, "Flying Hours: " + account.FlyingScore);
                    API.sendChatMessageToPlayer(Player, "User Rank: " + account.Rank);

                    if (account.Adminrank != "User")
                    {
                        API.sendChatMessageToPlayer(Player, "Admin Rank: " + account.Adminrank);
                    }
                }
                else
                {
                    API.sendChatMessageToPlayer(Player, "You must be logged in to view stats!");
                }
            }
            else
            {
                API.sendChatMessageToPlayer(Player, "No Data Found");
            }
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
        public string Rank { get; set; }
        public int FlyingScore { get; set; }
        public string Adminrank { get; set; }
    }
}
