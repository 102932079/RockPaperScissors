import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayComponent } from './routes/play/play.component';
import { ResultComponent } from './routes/result/result.component';
import { HttpClientModule } from '@angular/common/http';
import { LeaderboardComponent } from './routes/leaderboard/leaderboard.component';
import { ScoreComponent } from './components/score/score.component';
import { ScoreListComponent } from './components/score-list/score-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayComponent,
    ResultComponent,
    LeaderboardComponent,//? Leaderboard spelling can ignore
    ScoreComponent,
    ScoreListComponent
  ],
  //add http client module here for the game service
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
