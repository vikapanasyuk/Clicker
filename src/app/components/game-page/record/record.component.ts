import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.scss']
})
export class RecordComponent implements OnInit {

  @Input() seconds;
  @Input() recordClicks;
  @Input() playerName;
  @Input() clicks;
  @Input() isBestResult;
  @Input() isGoodResult;
  @Input() isBadResult;

  constructor() { }

  ngOnInit(): void {
  }

}
