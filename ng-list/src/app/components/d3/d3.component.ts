import { Component, OnInit } from '@angular/core';
import { D3Service } from '../';

@Component({
  selector: 'da-d3',
  templateUrl: './d3.component.html',
  styleUrls: ['./d3.component.css']
})
export class D3Component implements OnInit {

  constructor(private d3Service: D3Service) { }

  ngOnInit() {
  }

}
