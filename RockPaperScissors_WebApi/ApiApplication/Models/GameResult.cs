// see api requirements for naming
using System.Text.Json.Serialization;

namespace RPS_WebApi
{
    public class GameResult
    {
        [JsonPropertyName("PlayerChoice")]
        public string PlayerChoice {get; set;}
        [JsonPropertyName("CpuChoice")]
        public string CpuChoice {get; set;}
        [JsonPropertyName("Result")]
        public string Result {get; set;}

        public GameResult(){}

        public GameResult(string playerChoice, string cpuchoice, string result)
        {
            this.PlayerChoice = playerChoice;
            this.CpuChoice = cpuchoice;
            this.Result = result;
        }
    }
}