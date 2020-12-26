import { Injectable } from '@angular/core';
import { IPlayer } from '../../interfaces/player'

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  constructor() { }

  private _player:IPlayer[] = [];

  addPlayer(player: IPlayer) {
    this._player.push(player);
  }

  getPlayer(): IPlayer[] {
    return this._player;
  }
}
