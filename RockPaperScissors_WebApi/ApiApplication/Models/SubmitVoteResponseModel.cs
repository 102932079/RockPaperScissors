// // see api requirements for naming
// using System.Text.Json.Serialization;

// namespace RPS_WebApi
// {
//     public class GameResult
//     {
//         [JsonPropertyName("PlayerChoice")]
//         public string PlayerChoice {get; set;}
//         [JsonPropertyName("CpuChoice")]
//         public string CpuChoice {get; set;}
//         [JsonPropertyName("Result")]
//         public string Result {get; set;}

//         public GameResult(){}

//         public GameResult(string playerChoice, string cpuchoice, string result)
//         {
//             this.PlayerChoice = playerChoice;
//             this.CpuChoice = cpuchoice;
//             this.Result = result;
//         }
//     }
// }
// namespace ApiApplication.Controllers.Models
// {
//     public class SubmitVoteResponseModel 
//     {
//         public string Selection { get; set; }
//     }
    
// }    

using System;

namespace ApiApplication.Models
{
    public class SubmitVoteResponseModel
    {
        //prop
        public string Username { get; set; }
        public string PlayerChoice { get; set; }
        public string AIChoice { get; set; }
        public string Result { get; set; }

        //ctor
        public SubmitVoteResponseModel(string username, string playerChoice)
        {
            this.Username = username;
            this.PlayerChoice = playerChoice;
            this.AIChoice = GenerateAIChoice();
            this.Result = GetResult();
        }

        //two method
        public string GenerateAIChoice()
        {
            Random r = new Random();
            int rChoice = r.Next(3);//0-2

            switch (rChoice)
            {
                case 0:
                    return "rock";
                case 1:
                    return "paper";
                case 2:
                    return "scissors";
                default:
                    return "AIChoice error";
                
            }
        }
        //     string createAiChoice (){
        //     Random rnd=new Random();
        //     string[] choices = { "Rock", "Paper", "Scissors" };
        //     int randomNumber = rnd.Next(0, choices.Length);
        //     return choices[randomNumber];

        // }

        public string GetResult()
        {
            if (this.AIChoice == this.PlayerChoice)
            {
               return this.Result = "Draw";
            }
            else if ((this.PlayerChoice == "Rock" && this.AIChoice == "Scissors") || (this.PlayerChoice == "Paper" && this.AIChoice == "Rock") || (this.PlayerChoice == "Scissors" && this.AIChoice == "Paper"))
            {
                return this.Result = "Win";
            }
            else 
            {
                return this.Result = "Lose";
            }
            //no error condition
        }
    }
}
   