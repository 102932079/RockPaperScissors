import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayComponent } from './routes/play/play.component';
import { ResultComponent } from './routes/result/result.component';
import { HttpClientModule } from '@angular/common/http';
import { LeaderboardComponent } from './routes/leaderboard/leaderboard.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayComponent,
    ResultComponent,
    LeaderboardComponent
  ],
  //add http client moudule here for the game service
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
