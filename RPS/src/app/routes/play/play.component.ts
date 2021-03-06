import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//import service
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {

  //define the class for a responded for the player selection has been selected
  // public rockSelected: boolean = false;
  // public paperSelected: boolean = false;
  // public scissorsSelected: boolean = false;

  //player selection
  selection: "rock" | "paper" | "scissors" | null;

  //recall service and router
  constructor(private gameservice: GameService, private router: Router) { }
  //A callback method that is invoked immediately after the default change detector has checked the directive's data-bound properties for the first time, and before any of the view or content children have been checked. It is invoked only once when the directive is instantiated.

  ngOnInit(): void {
  }

  //method for detected selection been choosed
  selectOption(option: 'rock' | 'paper' | 'scissors'){
    this.selection = option;
    // if (option == 'rock'){
    //   this.rockSelected = !this.rockSelected;
    // }
    // else if (option == 'paper'){
    //   this.paperSelected = !this.paperSelected;
    // }
    // else if (option == 'scissors'){
    //   this.scissorsSelected = !this.scissorsSelected;
    //}
  }

  //the core function move the winning condition to webapi
  submit() //check null
  {
    if (this.gameservice.username == null)
    {
      alert("Enter username!")
    }
    else
    {
      this.gameservice.commitSelection({
        username: this.gameservice.username, //` can check in service to figure out which variable are which
        playerChoice: this.selection //!wrong variable notice in models, service and this are different 
      });//`playerchoice from webapi that passed into the variable in service then here
    }
  }
  // buttonClicked(){
  //   if (this.rockSelected){
  //     this.gameservice.commitSelection('rock');
  //   }
  //   else if (this.paperSelected){
  //     this.gameservice.commitSelection('paper');
  //   }
  //   else if (this.scissorsSelected){
  //     this.gameservice.commitSelection('scissors');
  //   }
  //   //nothing selection null
  //   else if (this.gameservice.playerSelection == null ){
  //     alert('No option was selected!');
  //     return;
  //   }
    //JSON.stringify A common use of JSON is to exchange data to/from a web server.When sending data to a web server, the data has to be a string.Convert a JavaScript object into a string with JSON.stringify().
  

}
