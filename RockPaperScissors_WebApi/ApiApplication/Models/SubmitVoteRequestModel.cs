    //after define method we can move the class into the seperate file with model folder
    //naming rule to follow here to help you make the api bit of cleaner
namespace ApiApplication.Controllers.Models
{
    public class SubmitVoteRequestModel 
    { // the name of the method(submit)/the name of the controller(vote)/what it is(request)/named model beacuse of no impelmentation 
        public string Colour { get; set; }//next thing is impleting this to the request
    }
}