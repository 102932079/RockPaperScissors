//after define method we can move the class into the seperate file with model folder
//naming rule to follow here to help you make the api bit of cleaner
// // see api requirements for naming
// using System.Text.Json.Serialization;

// namespace RPS_WebApi
// {
//     public class PlayRequest
//     {
//         //Specifies the property name that is present in the JSON when serializing and deserializing. This overrides any naming policy specified by JsonNamingPolicy.
//         [JsonPropertyName("PlayerChoice")]
//         public string PlayerChoice {get; set;} 

//         public PlayRequest(){}
//     }
// }
// namespace ApiApplication.Controllers.Models
// {
//     public class SubmitVoteRequestModel 
//     { // the name of the method(submit)/the name of the controller(vote)/what it is(request)/named model beacuse of no impelmentation 
//         public string Colour { get; set; }//next thing is impleting this to the request
//     }
// }

using System;
namespace ApiApplication.Controllers.Models
{
    public class SubmitVoteRequestModel
    {
        //prop
        public string Username { get; set; }
        public string PlayerChoice { get; set; }
        //ctor
        public SubmitVoteRequestModel(){}
    }
}