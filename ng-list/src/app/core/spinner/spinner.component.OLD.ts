import { Component, EventEmitter, Output, OnInit, OnDestroy } from '@angular/core';
import { SpinnerService } from './';
import { Subscription } from 'rxjs/Rx';


@Component({
  selector: 'da-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit, OnDestroy {

  // https://angular.io/docs/ts/latest/cookbook/component-communication.html
  @Output() spinning = new EventEmitter<boolean>();;
  private subscription: Subscription = null;
  
  constructor(private spinnerService: SpinnerService) {
    console.log(`SpinnerComponent ctor`);
  }

  private _startStop: boolean = false;
  startStop() {
    if (this._startStop) {
      this.spinnerService.spin('testing');
    } else {
      this.spinnerService.stop('testing');
    }
  }

  ngOnInit() {
    //this.initSpinner();
    this.createSpinnerSubscription();
  }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


  createSpinnerSubscription() {
    //debugger;
    
    this.subscription = this.spinnerService.spinnerObservable
      .subscribe(showSpinner => {
        if (showSpinner){
          this.spinning.emit(showSpinner);
        }
      });

    //debugger;
      
  }
  


}
