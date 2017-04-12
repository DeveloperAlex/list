import { Component, OnInit } from '@angular/core';
import { NodejsService } from '../../services';

@Component({
  selector: 'da-nodejs',
  templateUrl: './nodejs.component.html',
  styleUrls: ['./nodejs.component.css']
})
export class NodejsComponent implements OnInit {

  constructor(private nodejsService: NodejsService) { }

  ngOnInit() {
    debugger;
    var pong = this.nodejsService.getPong();
  }

}
