/*
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
//import { Subscription } from 'rxjs/Rx';

@Injectable()
export class SpinnerService {
  private spinArray: string[];
  public spinning: boolean;  // TODO: Change this to a Property Getter instead (check TypescriptLang.org how).
  
  private spinnerObserver: Observer<boolean>;
  public spinnerObservable: Observable<boolean>;  // TODO: Component needs to subscribe to this!!


  constructor() {
    console.log(`SpinnerService ctor`);
    this.spinning = false;
    this.spinArray = new Array<string>();
    this.createSpinnerObservable();
  }
  
  
  //getSpinner(): Observable<boolean> {
  //return this.spinnerObservable;
  createSpinnerObservable() {
    this.spinnerObservable = new Observable<boolean>(observer => {
            this.spinnerObserver = observer;
        }
    ).share(); 
  }
  
  spin(spinText: string) {
    if (!spinText) return;
    
    if (this.spinArray.indexOf(spinText) === -1) {
      this.spinArray.push(spinText);
    }

    this.spinning = true;
    if (this.spinnerObserver) {
      this.spinnerObserver.next(true);
    }
  }
  
  stop(spinText: string) {
    if (!spinText) return;

    var index = this.spinArray.indexOf(spinText);
    if (index > -1) {
      this.spinArray.splice(index, 1);
    }
    
    if (this.spinArray.length === 0) {
      this.spinning = false;
      if (this.spinnerObserver) {
          this.spinnerObserver.next(false);
      }    
    }
  }

}

// https://material.angular.io/components/component/progress-spinner
// usSpinnerService.spin('deleteSpinner');
// usSpinnerService.stop('deleteSpinner');

*/
