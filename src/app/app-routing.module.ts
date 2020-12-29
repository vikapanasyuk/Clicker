import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GamePageComponent } from './components/game-page/game-page.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { RecordsPageComponent } from './components/records-page/records-page.component';

const routes: Routes = [
  {
    path: "/play-game",
    component: GamePageComponent
  },
  {
    path: "/records",
    component: RecordsPageComponent
  },
  {
    path: "/",
    component: WelcomePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
