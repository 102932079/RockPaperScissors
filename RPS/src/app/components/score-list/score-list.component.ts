import { Component, OnInit, Input } from '@angular/core';
import { from } from 'rxjs';
import { ScoreService } from 'src/app/services/score.service';
import { LeaderBoardVoteResponseModel } from '../../models/LeaderBoardVoteResponseModel';

@Component({
  selector: 'app-score-list',
  templateUrl: './score-list.component.html',
  styleUrls: ['./score-list.component.css']
})
export class ScoreListComponent implements OnInit {

  //recall service
  constructor(public ScoreService: ScoreService) { }

  ngOnInit(): void {
  }

}
