import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  playerName: string;

  savePlayerName(name) {
    this.playerName = name;
    console.log(this.playerName)
  }
}
