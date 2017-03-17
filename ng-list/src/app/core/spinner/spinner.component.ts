import { Component, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { SpinnerService } from './';
import { Subscription, Subject } from 'rxjs/Rx';


@Component({
  selector: 'da-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit, OnDestroy {

  // https://angular.io/docs/ts/latest/cookbook/component-communication.html
  //@Output() spinning = new EventEmitter<boolean>();
  @Input() spinning: boolean;

  private subscription: Subscription = null;
  
  constructor(private spinnerService: SpinnerService) {
    console.log(`SpinnerComponent ctor`);
  }

  private _startStop: boolean = true;
  startStop() {
    this._startStop = !this._startStop;
    console.log(`startStop() - this._startStop = ${this._startStop}`);
    if (this._startStop) {
      this.spinnerService.spin('testing');
    } else {
      this.spinnerService.stop('testing');
    }
  }

  ngOnInit() {
    console.log(`ngOnInit()`);
    //this.initSpinner();
    this.createSpinnerSubscription();
  }
  
  ngOnDestroy() {
    console.log(`ngOnDestroy()`);
    this.subscription.unsubscribe();
  }


  createSpinnerSubscription() {
    console.log(`createSpinnerSubscription()`);
    //debugger;
    
    this.subscription = this.spinnerService.spinnerObservable
      .subscribe(showSpinner => {
        debugger;
        //this.spinning.emit(showSpinner);
        this.spinning = showSpinner;
      });

    //debugger;
      
  }
  


}
