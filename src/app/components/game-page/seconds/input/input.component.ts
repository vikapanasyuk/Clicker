import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() second;
  @Input() disabledBtn;
  @Output() chosenSeconds = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  chooseSeconds(sec) {
    this.chosenSeconds.emit(sec.target.value);
  }

}
