import { Component, OnInit } from '@angular/core';
import { ScoreService } from "../../services/score.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {
  //recall service 
  constructor(public scoreService: ScoreService, private router: Router) { } //!need import router here and top

  ngOnInit(): void {
    this.scoreService.getLeaderBoard();
  }

}
