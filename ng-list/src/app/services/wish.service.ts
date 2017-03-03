import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
//import { Observable } from rxjs/Observable;
//import { Observable } from rxjs/Rx;
//import 'rxjs/add/operator/map'
import 'rxjs/Rx';  //Works (ie, doesn't complain about this line).
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable'  //http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html


import { Wish } from '../models/wish';

@Injectable()
export class WishService {
  cuisines: any;
  private subscription: any;

  constructor(private af: AngularFire) {
    console.log('ctor - wish');
  }

  getWishes() : any {
    return [ "hotdogs", "hamburgers" ];
  }
  
  getWishesSubscription() : Observable<any> {
    let result = this.af.database.list('/food-idea/cuisines');
    return Observable.empty();
  }

  // getWishes() : any {
  //   console.log(this.af);
  //   this.subscription = this.af.database.list('/food-idea/cuisines')
  //   .subscribe(x => {
  //     this.cuisines = x;
  //     console.log(this.cuisines);
  //     return this.cuisines;  //Next make this return an Observable (instead).
  //   });
  // }
  
  

}
