import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import all component
import { PlayComponent } from './routes/play/play.component';
import { ResultComponent } from './routes/result/result.component';

//define path for routes
// this is where you app will be defined
// deploy routes and define how we can access the routes in app-routing.module.ts using url as array

const routes: Routes = [
  // dynamic object
  {path: "play", component: PlayComponent},
  {path: "result", component: ResultComponent},
  // define another route here ** patrol routes
  {path: "**", redirectTo: "play" }
   // if we going to the home page of patrol it will automatically redirect to play compo
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
