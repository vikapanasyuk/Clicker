import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ISeconds } from '../../../interfaces/seconds';

@Component({
  selector: 'app-seconds',
  templateUrl: './seconds.component.html',
  styleUrls: ['./seconds.component.scss']
})
export class SecondsComponent implements OnInit {

  @Input() disabledBtn;
  @Output() chosenSecondValue = new EventEmitter<string>();

  seconds: ISeconds[] = [
    {
      value: 5,
      checked: false
    },
    {
      value: 10,
      checked: true
    },
    {
      value: 15,
      checked: false
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  chooseSeconds(sec) {
    this.chosenSecondValue.emit(sec);
  }

}
