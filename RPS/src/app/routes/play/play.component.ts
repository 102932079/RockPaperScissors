import { Component, OnInit } from '@angular/core';
//import service
import { GameService } from 'src/app/game.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {

  //define the class for a responed for the player selection has been selected
  public rockSelected: boolean = false;
  public paperSelected: boolean = false;
  public scissorsSelected: boolean = false;

  constructor(private gameservice: GameService) { }
  //A callback method that is invoked immediately after the default change detector has checked the directive's data-bound properties for the first time, and before any of the view or content children have been checked. It is invoked only once when the directive is instantiated.

  ngOnInit(): void {
  }

  //method for detected selction been choosed
  selected(option: 'rock' | 'paper' | 'scissors'){
    if (option == 'rock'){
      this.rockSelected = !this.rockSelected;
    }
    else if (option == 'paper'){
      this.paperSelected = !this.paperSelected;
    }
    else if (option == 'scissors'){
      this.scissorsSelected = !this.scissorsSelected;
    }
  }

  //the core function 4 possibility
  buttonClicked(){
    if (this.rockSelected){
      this.gameservice.commitSelection('rock');
    }
    else if (this.paperSelected){
      this.gameservice.commitSelection('paper');
    }
    else if (this.scissorsSelected){
      this.gameservice.commitSelection('scissors');
    }
    //nothing selection null
    else if (this.gameservice.playerSelection == null ){
      alert('No option was selected!');
      return;
    }
    //JSON.stringify A common use of JSON is to exchange data to/from a web server.When sending data to a web server, the data has to be a string.Convert a JavaScript object into a string with JSON.stringify().
  }

}
