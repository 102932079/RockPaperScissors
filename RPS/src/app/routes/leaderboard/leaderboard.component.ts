import { Component, OnInit } from '@angular/core';
import { ScoreService } from "../../services/score.service";
import { Router } from '@angular/router';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {
  //recall service 
  constructor(public gameService: GameService, public scoreService: ScoreService, private router: Router) { } //!need import router here and top

  ngOnInit(): void { //` add a back to play compo page in case get stuck and import the game service again on top and ctor
    
    // if ( this.gameService.playerSelection == null )
    // {
    //   this.router.navigateByUrl("/play");
    // }
    this.scoreService.getLeaderBoard();
  }

}
