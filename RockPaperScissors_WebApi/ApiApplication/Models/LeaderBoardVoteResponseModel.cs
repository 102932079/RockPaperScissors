//all property of leaderboard
using System;
namespace ApiApplication.Controllers.Models
{
    public class LeaderBoardVoteResponseModel
    {
        


        //  system generated
        // public LeaderBoardVoteResponseModel(string username, int wins, int turnsPlayed, double winRatio)
        // {
        //     this.Username = username;
        //     this.Wins = wins;
        //     this.TurnsPlayed = turnsPlayed;
        //     this.WinRatio = winRatio;

        // }//prop
        public string Username { get; set; }
        public double Wins { get; set; }//`int? no confired this is the issue cause winratio not showing problem DATATYPE
        public double TurnsPlayed { get; set; }//`int? no confired this is the issue cause winratio not showing problem DATATYPE
        public double WinRatio { get; set; }

        //ctor
        public LeaderBoardVoteResponseModel(string username, double wins, double turnsPlayed)//`also the datatype need to be double as well
        {
            this.Username = username;
            this.Wins = wins;
            this.TurnsPlayed = turnsPlayed;
            CalculateWinRatio();
        }

        //method
        public void CalculateWinRatio()
        {
            double ratio = (this.Wins / this.TurnsPlayed) * 100; //percentage 'ratio + %'
            ratio = System.Math.Round(ratio);

            this.WinRatio = ratio;
        }
    }
}