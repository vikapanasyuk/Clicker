import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {

  @Input() disabledBtn;
  @Output() reset = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  resetGame() {
    this.reset.emit();
  }

}
