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
  }


  ngOnInit() {
    //this.initSpinner();
    this.createSpinnerSubscription();
  }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


  createSpinnerSubscription() {
        //     //this.subscription = this.spinnerService.spinnerObservable.subscribe(show => {
        // this.subscription = this.spinnerService.spinnerSubject.subscribe(show => {
        //     debugger;
        //     if (show) {
        //         this.startSpinner();
        //     } else {
        //         this.stopSpinner();
        //     }
        // });
        
    this.subscription = this.spinnerService.spinnerObservable
      .subscribe(showSpinner => {
        if (showSpinner){
          this.spinning.emit(showSpinner);
        }
      });
      
  }
  


}
