import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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

  constructor(private nodejsService: NodejsService, private fb: FormBuilder) { }

  ngOnInit() {
  }

  onSubmit(value: string): void {
    console.log('you submitted value: ', value);
  }
  

  getPong(): void {
    this.nodejsService.getPong()
    .subscribe(
      pong => {
        console.log(`pong= ${JSON.stringify(pong)}`);
        this.pong = JSON.stringify(pong);
      },
      //error => this.pong = <any>error
      error => {
        console.warn(`ERROR-Nodejs/MongoDB is down. ${error}`);
        // this.pong = <any>error;
        this.pong = "Sorry, Node.js and/or MongoDB is currently down.";
      }
    );
    
  }

}



/*
        var result = JSON.stringify(pong);
        
        // if (result.indexOf('0 - {\"isTrusted\":true}') !== -1) {  //0 - {"isTrusted":true}
        // if (result.indexOf('0 - {"isTrusted":true}') !== -1) {  //0 - {"isTrusted":true}
        if (result.indexOf('isTrusted') !== -1) {  //0 - {"isTrusted":true}
          console.warn(`ERROR-Nodejs/MongoDB is down. JSON.stringify(pong)= ${result}`);
          debugger;
          this.pong = "Node.js and/or MongoDB is currently down";
        } else {
          this.pong = result;
        }
*/
