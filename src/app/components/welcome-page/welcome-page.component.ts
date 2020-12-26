import { Component } from '@angular/core';
import { PlayerNameService } from '../../services/player-name/player-name.service';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent {

  constructor( private _playerName: PlayerNameService) { }

  playerName: string = 'Player';

  setPlayerName() {
    this._playerName.setPlayerName(this.playerName);
  }

}
