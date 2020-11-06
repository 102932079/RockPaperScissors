import { Component, OnInit } from '@angular/core';
//import router and service
import { Router } from '@angular/router';
import { GameService } from 'src/app/game.service';


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  playerChoiceClass: string;
  cpuChoiceClass: string;


  constructor(public gameService: GameService, private router: Router) { }

  ngOnInit(): void {
    //define the ngclass for turn the picture to there
    this.playerChoiceClass = this.gameService.playerSelection;
    this.cpuChoiceClass = this.gameService.compSelection;
    if(this.gameService.playerSelection == null){
      //both " ' is ok inthis.router.navigateByUrl jump for empty page
      this.router.navigateByUrl("/play");
    }

  }

}
