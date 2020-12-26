import { Component, OnInit } from '@angular/core';
import { RecordsService } from '../../services/records/records.service';
import { IPlayer } from '../../interfaces/player';

@Component({
  selector: 'app-records-page',
  templateUrl: './records-page.component.html',
  styleUrls: ['./records-page.component.scss']
})
export class RecordsPageComponent implements OnInit {

  constructor(private _records: RecordsService) { }

  players: Array<IPlayer> = [];
  filteredPlayers: Array<IPlayer> = [];

  ngOnInit(): void {
    this.players = this._records.getPlayer();
  }

  chooseSeconds(sec) {
    this.filteredPlayers = this.players.filter(player => player.seconds === sec)
      .sort((p1, p2) => p2.result - p1.result);
  }

}
