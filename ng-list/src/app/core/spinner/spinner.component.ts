import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { SpinnerService } from './';

@Component({
  selector: 'da-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {

  // https://angular.io/docs/ts/latest/cookbook/component-communication.html
  @Output() spinning = new EventEmitter<boolean>();;

  constructor() { }

  ngOnInit() {
  }
  
  

}
