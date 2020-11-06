import { Component, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ScoreService } from './services/score.service';
import { GameService } from './services/game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'RockPaperScissorsApp';
  username?: string;
  
  playing: boolean = true;

  constructor(private gameService: GameService, private scoresService: ScoreService, private router: Router) {}

  //check username null
  setUsername(event: any)
  {
    this.username = event.target.value;
    this.gameService.commitUsername(event.target.value);
  }
}
