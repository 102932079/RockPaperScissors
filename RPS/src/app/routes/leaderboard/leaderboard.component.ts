import { Component, OnInit } from '@angular/core';
import { ScoreService } from "../../services/score.service";

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {
  //recall service 
  constructor(public scoreService: ScoreService) { }

  ngOnInit(): void {
    this.scoreService.getLeaderBoard();
  }

}
