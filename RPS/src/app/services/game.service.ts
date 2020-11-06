//import router and some extra function
//service used by different component
//import injectable from core Decorator that marks a class as available to be provided and injected as a dependency.
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { serverResponse } from '../models/LeaderBoardModel';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

//import http request
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  //define comp choice , create a string array

  //compChoice: string[] = ['rock', 'paper', 'scissors'];
  //_compSelection: string;

  //define player choice and result
  //adding _ for not dulplicate with get, make variable private for not let user access it
  //private _playerSelection: 'rock' | 'paper' | 'scissors' | null;
  //private _result: 'win' | 'lose' | 'draw' | null;  
  //get and set property like c#, selection variable is public

  //the datatype is different now
  private _compSelection: string | null;
  private _playerSelection: string | null;
  private _result: string | null;


  get playerSelection(){
    return this._playerSelection;
  }

  get compSelection(){
    return this._compSelection;
  }

  get result(){
    return this._result;
  }

  //import the router service and http request
  constructor(private router: Router, private httpClient: HttpClient) { 
    //recall
    this.httpClient = httpClient;
    // https://stackoverflow.com/questions/4550505/getting-a-random-value-from-a-javascript-array
  }


  //add: local api integration
  commitSelection(option: 'rock' | 'paper' | 'scissors'){
    //serverresponse is interface from models
    let request = this.httpClient.post<serverResponse>("http://localhost:4200/RPS_/",//stil need to looking for the local port for my app
    {
      playerChoice: option,
    });
    request.subscribe((response) =>
    {
      //store the selection
      this._playerSelection = response.playerChoice;
      this._compSelection = response.cpuChoice;
      this._result = response.result;
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
      if(error.status == 404){
        //A common problem with web applications is a user landing on an invalid URI; this error, known as the venerable 404 - page not found error, is a common fallback error case when the application is unable to redirect or resolve a route in an application.
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
  //     //this stores the selction being pushed over from the component into the variable above
  //     this._playerSelection = option;
  //     this._compSelection = this.compChoice[(Math.random() * this.compChoice.length) | 0];
  //     this.checkingResult();
  //     //call router and navigate to results component(routing)
  //     this.router.navigateByUrl("/result");
  //     //add a condition that none selected
  //     if(this._playerSelection == null){
  //       alert('No option was seleceted!')
  //     }
  //   })
  // }
  
  //declar result now in api no need here
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
  //dont need this method just navigate in html
  // playAgain(){
  //   of(null).pipe(delay(1000)).subscribe(() =>{
  //     this.router.navigateByUrl('/play');
  //   });
  //   //And reset the playerselection to null
  //   this._playerSelection = null;
  // };

