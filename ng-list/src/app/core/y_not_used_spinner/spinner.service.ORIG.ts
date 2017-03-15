import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

@Injectable()
export class SpinnerService {
    private spinnerObserver: Observer<boolean>;
    public spinnerObservable: Observable<boolean>;

    constructor() {
        debugger;
        this.spinnerObservable = new Observable<boolean>(observer => {
                this.spinnerObserver = observer;
            }
        ).share();
        debugger;
    }

    show() {
        debugger;
        if (this.spinnerObserver) {
            this.spinnerObserver.next(true);
        }
    }

    hide() {
        debugger;
        if (this.spinnerObserver) {
            this.spinnerObserver.next(false);
        }
    }
}
