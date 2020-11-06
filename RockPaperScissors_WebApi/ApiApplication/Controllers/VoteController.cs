using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ApiApplication.Controllers.Models;
//A Random Number Generator (RNG) is a mathematical construct, either computational or as a hardware device that is designed to generate a random set of numbers that should not display any distinguishable patterns in their appearance or generation, hence the word random.*
namespace ApiApplication.Controllers
{
    [ApiController]
    [Route("[api/Vote]")]//[Route("[controller]")]//[Route("api/controller")]
    public class VoteController : ControllerBase
    {
        //define the endpoint(access point for the request to be made)
        //we got this method to add with what to contribute the to define the endpoint(waht do we need here)
        //we need to give some kind of method for client to revice
        //it's post here beacuse we are submmit sth (post request)
        //define route template as patasiss (post/api/vote) access via postman
        [HttpPost("submit")]//url/api/vote/submit
        //we need to give some return type instead of void(cant just not return any thing(no respond))
        public SubmitVoteResponseModel SubmitVote([FromBody] SubmitVoteRequestModel model)//take this request from body//call this to model
        //now the data comes in and going to return some data, the return type should be from void to the response model
        {
            return new SubmitVoteResponseModel()//the return type is a method then define this method
            {
                Selection = " You selected " + model.Colour + ". That was bad. "
            };
        }

        //=========================================================
        //move the win condition logic to angualr(fornt end)

        // //random variable
        // public static Random rnd = new Random();
        
        // //http request - get result
        // [HttpPost("GetResult")]
        // public GameResult GetResult(PlayRequest playRequest)
        // {
        //     //null condition
        //     if (playRequest.PlayerChoice == null)
        //     {
        //         return null;
        //     }
        //     //init value
        //     string playerChoice = null;
        //     string cpuChoice = null;
        //     string result = null;

        //     //player choice
        //     //switch is a selection statement that chooses a single switch section to execute from a list of candidates based on a pattern match with the match expression.
        //     switch (playRequest.PlayerChoice.ToLower())
        //     {
        //         case "rock":
        //             playerChoice = "Rock";
        //             break;
        //         case "paper":
        //             playerChoice = "Paper";
        //             break;
        //         case "scissors":
        //             playerChoice = "Scissors";
        //             break;
        //         default:
        //             return null;

        //     }

        //     //comp choice with random
        //     //int Random.Next(int minValue, int maxValue)
        //     var randomChoice = rnd.Next(1, (3 + 1));

        //     switch (randomChoice)
        //     {
        //         case 1:
        //             cpuChoice = "Rock";
        //             break;
        //         case 2:
        //             cpuChoice = "Paper";
        //             break;
        //         case 3:
        //             cpuChoice = "Scissors";
        //             break;
        //     }

        //     // result winning condition
        //     //draw
        //     if (playerChoice == cpuChoice)
        //     {
        //         result = "Draw";
        //     }
        //     //non draw
        //     else
        //     {
        //         if(playerChoice == "Rock" && cpuChoice == "Scissors")
        //         {
        //             result = "Win";
        //         }
        //         else if(playerChoice == "Scissors" && cpuChoice == "Paper")
        //         {
        //             result = "Win";
        //         }
        //         else if(playerChoice == "Paper" && cpuChoice == "Rock")
        //         {
        //             result = "Win";
        //         }
        //         else
        //         {
        //             result = "Lose";
        //         }
                
        //     }

        //     return new GameResult(playerChoice, cpuChoice, result);       
        
        
    }



}
    

