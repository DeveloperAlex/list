import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Subject } from 'rxjs/Subject';
//import { of } from 'rxjs/observable/of';

// Not work: https://github.com/seanlmcgill/ng2spin/blob/master/app/spinner/spinner.service.ts

@Injectable()
export class SpinnerService {
    private spinnerObserver: Observer<boolean>;
    public spinnerObservable: Observable<boolean>;
    public spinnerSubject: Subject<boolean>;

    constructor() {
        //debugger;
        
        // this.spinnerObservable = new Observable<boolean>(observer => {
        //         this.spinnerObserver = observer;
        //     }
        // ).share();  //share() makes an observable hot (if subscribers > 0 and observable hasn't completed)
        
        //this.spinnerObservable = Observable.of(boolean);
        //this.spinnerObservable = new Observable<boolean>().interval(5000).take(2).share();
        //this.spinnerObservable = Observable<boolean>.interval(5000).take(2).share();
        
        this.spinnerSubject = new Subject<boolean>();
        
        //debugger;
    }

    show() {
        //debugger;
        // if (this.spinnerObserver) {
        //     this.spinnerObserver.next(true);
        // }
        if (this.spinnerSubject) {
            this.spinnerSubject.next(true);
        }
    }

    hide() {
        //debugger;
        // if (this.spinnerObserver) {
        //     this.spinnerObserver.next(false);
        // }
        if (this.spinnerSubject) {
            this.spinnerSubject.next(true);
        }
    }
}
