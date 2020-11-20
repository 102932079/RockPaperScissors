import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LeaderBoardVoteResponseModel } from '../models/LeaderBoardVoteResponseModel';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  //create the array for score
  scores: LeaderBoardVoteResponseModel[] = [];
  private httpClient: HttpClient;

  constructor(client: HttpClient, private router: Router) { //`forgot import router /no need now
    this.httpClient = client;
  }

  getLeaderBoard(){
    this.httpClient.get<LeaderBoardVoteResponseModel[]>("http://localhost:5000/vote/leaderboard").subscribe((response) => 
    {
      this.scores = response;
      //console.log(response);//`useless remove it
      //this.router.navigateByUrl("/leaderboard");//!router here is not working is because forgot to import router in ctor compare to see in game service
    }, (error) => {      //`this is useless as well remove it, by use the router link a tag(view report) it will goes to the leaderboard page anyways in here only pass in the data
    //`the data of the play result is saved on api 
      if(error.status == 401){        
        alert("Unauthorized Error")
      }
      if(error.status == 405){        
        alert("Method Not Allowed")
      }
      if(error.status == 404){        
        alert("page not found")
      }
      if(error.status == 500){        
        alert("Internal Server Error")
      }      
    });    
  }
}
