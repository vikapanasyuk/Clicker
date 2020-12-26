import { Component } from '@angular/core';
import { PlayerNameService } from '../../services/player-name/player-name.service';
import { RecordsService } from '../../services/records/records.service';
import { IPlayer } from '../../interfaces/player';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})

export class GamePageComponent {

  constructor(private _records: RecordsService, private _playerName: PlayerNameService) {}

  playerName: string = this._playerName.getPlayerName() || 'Player';
  timer: number = 10;
  clicks: number = 0;
  seconds: number = 10;
  recordClicks: number = 0;
  playMessage: string = 'play';
  countMessage: string = 'count';
  buttonMessage: string = this.playMessage;
  isGameStart: boolean = false;
  isBestResult: boolean = false;
  isGoodResult: boolean = false;
  isBadResult: boolean = false;
  disabledCircle: boolean = false;
  disabledBtn: boolean = false;

  getSeconds(sec) {
    this.seconds = sec;
    this.timer = sec;
    this.recordClicks = this.findRecord(this.seconds);
  }

  startGame() {
    if (!this.isGameStart) {
      this.disabledBtn = true;
      this.startTimer();
      this.isGameStart = true;
      this.buttonMessage = this.countMessage;
    } else {
      this.clicks += 1;
    }
  }

  resetGame() {
    this.clicks = 0;
    this.disabledBtn = false;
    this.disabledCircle = false;
    this.buttonMessage = this.playMessage;
    this.timer = this.seconds;
    this.isGameStart = false;
    clearInterval(this.interval);
    this.recordClicks = this.findRecord(this.seconds);
    this.resetResult();
  }

  interval: number;

  startTimer() {
    this.interval = setInterval(() => {
      if (this.timer === 0) {
        clearInterval(this.interval);
        this.stopGame();
      } else {
        this.timer -= 1;
      }
    }, 1000)
  }

  stopGame() {
    this.disabledCircle = true;
    this.getResult();
    this.showResult();
    this.isGameStart = false;
  }

  getResult() {
    this.recordClicks = this.findRecord(this.seconds);
    this.gameResult();
  }

  gameResult() {
    const currentPlayer: IPlayer = {
      name: this.playerName,
      seconds: this.seconds,
      result: this.clicks
    };
    this._records.addPlayer(currentPlayer);
  }

  findRecord(sec) {
    const recordsValues = this._records.getPlayer().filter(player => player.seconds === sec)
      .map(res => res.result)
    if (Number(recordsValues) === 0) {
      return 0;
    } else {
      return Math.max(...recordsValues);
    }
  }

  showResult() {
    if (this.clicks > this.recordClicks) {
      this.isBestResult = true;
    } else if (this.clicks >= this.recordClicks - 7) {
      this.isGoodResult = true;
    } else {
      this.isBadResult = true;
    }
  }

  resetResult() {
    this.isBestResult = false;
    this.isGoodResult = false;
    this.isBadResult = false;
  }
}
