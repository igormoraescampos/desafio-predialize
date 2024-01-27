import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  // @Input() openDetails;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    // console.log('openDetails', this.openDetails);
  }

}
