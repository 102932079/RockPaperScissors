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

  constructor(client: HttpClient) { 
    this.httpClient = client;
  }

  getLeaderBoard(){
    this.httpClient.get<LeaderBoardVoteResponseModel[]>("http://localhost:5000/controllers/leaderboard").subscribe((response) => 
    {
      this.scores = response;
      console.log(response);
      this.router.navigateByUrl("/Leaderboard");
    }, (error) => {      
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
