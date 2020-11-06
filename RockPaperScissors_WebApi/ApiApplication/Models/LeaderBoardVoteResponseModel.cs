//all property of leaderboard
using System;
namespace ApiApplication.Controllers.Models
{
    public class LeaderBoardVoteResponseModel
    {
        


        //prop
        public LeaderBoardVoteResponseModel(string username, int wins, int turnsPlayed, double winRatio)
        {
            this.Username = username;
            this.Wins = wins;
            this.TurnsPlayed = turnsPlayed;
            this.WinRatio = winRatio;

        }
        public string Username { get; set; }
        public int Wins { get; set; }
        public int TurnsPlayed { get; set; }
        public double WinRatio { get; set; }

        //ctor
        public LeaderBoardVoteResponseModel(string username, int wins, int turnsPlayed)
        {
            this.Username = username;
            this.Wins = wins;
            this.TurnsPlayed = turnsPlayed;
            CalculateWinRatio();
        }

        //method
        public void CalculateWinRatio()
        {
            double ratio = (this.Wins / this.TurnsPlayed) * 100 //percentage 'ratio + %' //system not allow to use 100
            ratio = System.Math.Round(ratio);

            this.WinRatio = ratio;
        }
    }
}