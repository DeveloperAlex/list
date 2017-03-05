import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
//import 'rxjs/Rx';  //Works (ie, doesn't complain about this line).
import 'rxjs/add/operator/map';
//import { Observable } from 'rxjs/Observable' // Works. //http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html
import { Observable } from 'rxjs/Rx';  //Works.

import { Wish } from '../models/wish';

@Injectable()
export class WishService {
  cuisines: any;
  private subscription: any;

  constructor(private af: AngularFire) {
    console.log('ctor - wish');
  }

  // getWishes() : any {
  //   return [ "hotdogs", "hamburgers" ];
  // }
  
  //https://www.udemy.com/angular-firebase-application/learn/v4/t/lecture/5798940?start=0
  getWishesSubscription() : Observable<Object[]> {
    //return Observable.empty();
    return this.af.database.list('/food-idea/cuisines');
  }



  // getWishesSubscription() : Observable<any> {
  //   let result = this.af.database.list('/food-idea/cuisines');
  //   return Observable.empty();
  // }

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
