import { Component, OnInit } from '@angular/core';
//import { D3Service } from '../';
import { D3Service } from './d3.service';

@Component({
  selector: 'da-d3',
  templateUrl: './d3.component.html',
  styleUrls: ['./d3.component.css']
})
export class D3Component implements OnInit {

  //constructor() { }
  constructor(private d3Service: D3Service) { 
    console.log(d3Service);
  }

  ngOnInit() {
  }

}
