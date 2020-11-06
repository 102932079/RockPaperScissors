import { Component, OnInit, Input } from '@angular/core';
import { LeaderBoardVoteResponseModel } from '../../models/LeaderBoardVoteResponseModel';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {
  @Input()
  score: LeaderBoardVoteResponseModel;

  constructor() { }

  ngOnInit(): void {
  }

}
