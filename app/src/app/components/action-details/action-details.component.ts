import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-action-details',
  templateUrl: './action-details.component.html',
  styleUrls: ['./action-details.component.scss']
})
export class ActionDetailsComponent implements OnInit {

  @Output() eventClick: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {}

  handleClick(id: string) {
    this.eventClick.emit(id);
  }
}
