//import router and some extra function
//service used by different component
//import injectable from core Decorator that marks a class as available to be provided and injected as a dependency.
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LeaderBoardVoteResponseModel } from '../models/LeaderBoardVoteResponseModel';
import { SubmitVoteResponseModel } from '../models/SubmitVoteResponseModel';
import { SubmitVoteRequestModel } from '../models/SubmitVoteRequestModel';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

//import http request (for webapi)
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  //define comp choice , create a string array

  //compChoice: string[] = ['rock', 'paper', 'scissors'];
  //_compSelection: string;

  //define player choice and result
  // adding _ for not duplicate with get, make variable private for not let user access it
  //private _playerSelection: 'rock' | 'paper' | 'scissors' | null;
  //private _result: 'win' | 'lose' | 'draw' | null;  
  //get and set property like c#, selection variable is public

  //the datatype is different now

  //playerselection and username is private, result and aiselection is not
  //because no need to call result and aiselction here

  private _playerSelection: string | null;
  private _username: string | null;

  get playerSelection(){
    return this._playerSelection;
  }

  get username(){
    return this._username;
  }

  //get result(){
    //return this._result;
  //}
  _aISelection: string;
  _result: string;

  //import the router service and http request
  constructor(private router: Router, private client: HttpClient) { 
    //recall
    
    // https://stackoverflow.com/questions/4550505/getting-a-random-value-from-a-javascript-array
  }

  //new method for commit username
  commitUsername(username: string)
  {
    this._username = username;
  }


  //add: local api integration
  commitSelection(option: SubmitVoteRequestModel){//option in the 
    //serverresponse is interface from models
    //the post there after client. need to be same with http request in the webapi is post here, the leaderboard one is get
    let request = this.client.post<SubmitVoteResponseModel>("http://localhost:5000/vote/submit", option)//still need to looking for the local port for my app
    // {//before coma is the url for web api
    //   playerChoice: option,
    // });//after coma is the body that you send to webapi , in the case is the playerchoice from submitvote request, is the variable 'option' or you can use vaule
    request.subscribe((response) =>
    {// response is the data back from submitvoteresponesmodel so it will be four things player ai username result
      //then we need store them into the variable we created earlier all _variable
      //store the selection 
      this._playerSelection = response.playerChoice; //!this is the variable for this page, response is the variable from webapi
      this._aISelection = response.aiChoice; //`don't mix up cause the problem of aichoice not showing due to the case of variable is wrong
      this._result = response.result;//! i case very sensitive(there are some tools to help to manage the variable)
      this._username = response.username;
      this.router.navigateByUrl("/result");
    }, (error) => {//error handling new content
      //http status
      if(error.status == 401){
        //a 401 Unauthorized Error indicates that the client (the web browser, in most cases) has requested a restricted resource (such as a web page) from the server , but the client has failed to provide valid authentication credentials.
        alert("Unauthorized Error")
      }
      if(error.status == 405){
        //The 405 Method Not Allowed is an HTTP response status code indicating that the specified request HTTP method was received and recognized by the server, but the server has rejected that particular method for the requested resource. 
        alert("Method Not Allowed")
      }
      if(error.status == 404){//!some time the application showing 404 means the URL provided is not valid so rebuild the api and run again for any changes
        //A common problem with web applications is a user landing on an invalid URL; this error, known as the venerable 404 - page not found error, is a common fallback error case when the application is unable to redirect or resolve a route in an application.
        alert("page not found")
      }
      if(error.status == 500){
        //The HTTP status code 500 is a generic error response. It means that the server encountered an unexpected condition that prevented it from fulfilling the request. This error is usually returned by the server when no other error code is suitable.
        alert("Internal Server Error")
      }
      //remove navigate method remove calculate result method
    });
  }
}



  //create a method and variable to store data locally 
  //we want to call method after comitselection
  // commitSelection(option: 'rock' | 'paper' | 'scissors'){
  //   //the null here will be replaced by the get() request to the endpoint
  //   //add delay for routing service(most easy way) 1000ms=1sec
  //   of(null).pipe(delay(1000)).subscribe(() => {
  //     //this stores the selection being pushed over from the component into the variable above
  //     this._playerSelection = option;
  //     this._compSelection = this.compChoice[(Math.random() * this.compChoice.length) | 0];
  //     this.checkingResult();
  //     //call router and navigate to results component(routing)
  //     this.router.navigateByUrl("/result");
  //     //add a condition that none selected
  //     if(this._playerSelection == null){
  //       alert('No option was selected!')
  //     }
  //   })
  // }
  
  //declare result now in api no need here
  //define winning condition , apart from draw there are 3 possibility
  //The question mark ? and : is an alternative to an if statement best used in the case where one of two values will be assigned to a variable based on a conditional statement.
  // checkingResult(){
  //   if(this._compSelection == this._playerSelection){
  //     this._result = 'draw';
  //   }
  //   else if(this._playerSelection === 'rock'){
  //     this._compSelection === 'paper' ? this._result = 'lose' : this._result = 'win';
  //   }
  //   else if(this._playerSelection === 'paper'){
  //     this._compSelection === 'scissors' ? this._result = 'lose' : this._result = 'win';
  //   }
  //   else if(this._playerSelection === 'scissors'){
  //     this._compSelection === 'rock' ? this._result = 'lose' : this._result = 'win';
  //   }
  // }

  //play again method and navigate to play component for new game button in result page
  //don't need this method just navigate in html
  // playAgain(){
  //   of(null).pipe(delay(1000)).subscribe(() =>{
  //     this.router.navigateByUrl('/play');
  //   });
  //   //And reset the playerselection to null
  //   this._playerSelection = null;
  // };

