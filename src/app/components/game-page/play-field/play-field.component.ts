import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-play-field',
  templateUrl: './play-field.component.html',
  styleUrls: ['./play-field.component.scss']
})
export class PlayFieldComponent implements OnInit {

  @Input() playerName;
  @Input() clicks;
  @Input() buttonMessage;
  @Input() timer;
  @Input() disabledCircle;
  @Output() start = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  startGame() {
    this.start.emit();
  }

}
