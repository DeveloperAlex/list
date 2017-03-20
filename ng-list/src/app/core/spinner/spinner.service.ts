import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Subject } from 'rxjs/Subject';
//import { Subscription } from 'rxjs/Rx';

@Injectable()
export class SpinnerService implements OnInit, OnDestroy {
  private spinnerSubject = new Subject<boolean>();
  private spinArray: string[];
  private spinning: boolean = false;
  
  constructor() {
    //console.log(`SpinnerService ctor`);
    this.spinArray = new Array<string>();
  }
  
  ngOnInit() {
  }
  
  ngOnDestroy() {
  }

  get spinnerObservable(): Observable<boolean> {
    //console.log(`spinnerObservable()`);
    return this.spinnerSubject.asObservable();
  }
  
  private sendMessage(message: boolean) {
    //console.log(`sendMessage(${message})`);
    //debugger;
    this.spinnerSubject.next(message);
  }

  spin(spinText: string) {
    //console.log(`spin(${spinText})`);
    //debugger;
    if (!spinText) return;
    
    if (this.spinArray.indexOf(spinText) === -1) {
      this.spinArray.push(spinText);
    }

    this.spinning = true;
    this.sendMessage(true);
  }
  
  stop(spinText: string) {
    //console.log(`stop(${spinText})`);
    //debugger;
    if (!spinText) return;

    var index = this.spinArray.indexOf(spinText);
    if (index > -1) {
      this.spinArray.splice(index, 1);
    }
    
    if (this.spinArray.length === 0) {
      this.spinning = false;
      
      setTimeout(()=> {
        this.sendMessage(false);
      }, 500);  // Show off Spinner. Kinda wierd - the user can see that the data loaded - but it spins for a 1/2 second more.

    }
  }

}

// http://stackoverflow.com/questions/39885264/what-are-rxjs-subjects-and-the-benifits-of-using-them
// https://material.angular.io/components/component/progress-spinner
