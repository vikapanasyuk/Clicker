import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerNameService {

  constructor() { }

  private _playerName: string = 'Player';

  setPlayerName(player: string): void {
    this._playerName = player;
  }

  getPlayerName(): string {
    return this._playerName;
  }
}
