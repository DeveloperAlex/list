import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { NodejsService } from '../../services';


@Component({
  selector: 'da-nodejs',
  templateUrl: './nodejs.component.html',
  styleUrls: ['./nodejs.component.css']
})
export class NodejsComponent implements OnInit {
  // public pong: Observable<any>;
  public pong: any;

  constructor(private nodejsService: NodejsService) { }

  ngOnInit() {
    // debugger;
  }

  getPong(): void {
    // debugger;
    this.nodejsService.getPong()
    .subscribe(
      pong => {
        // console.log(`pong= ${JSON.stringify(pong)}`);
        // debugger;
        this.pong = JSON.stringify(pong);
        
      },
      error => this.pong = <any>error
    );
    
  }

}
