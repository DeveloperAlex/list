import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

// import 'rxjs/Rx';  //Works (ie, doesn't complain about this line).
import 'rxjs/add/operator/map';
// import { Observable } from 'rxjs/Observable' // Works. // http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html
import { Observable } from 'rxjs/Rx';  // Works.

import { Wish } from '../models/wish';

@Injectable()
export class WishService implements OnInit, OnDestroy {
  cuisines: any;
  private subscription: any;
  wishes$: FirebaseListObservable<any>;
  wish$: FirebaseObjectObservable<any>; // Lecture 16 shows how to Add a wish: https://www.udemy.com/angular-firebase-application/learn/v4/t/lecture/5798906?start=0

  constructor(private af: AngularFire) {
    console.log('ctor - wish (this is being called early because the WishService is referenced in app.module.ts (maybe move to wish-list.component.ts)).');
    this.wishes$ = this.af.database.list('/wishlist');
    this.wishes$.subscribe(console.log);
  }
  
  ngOnInit() {
  }
  
  ngOnDestroy() {
  }

  // https://www.udemy.com/angular-firebase-application/learn/v4/t/lecture/5798940?start=0
  getWishesSubscription(): Observable<Object[]> {
    // return Observable.empty();
    // return this.af.database.list('/food-idea/cuisines');
    return this.wishes$;
  }

  // Lecture 16: https://www.udemy.com/angular-firebase-application/learn/v4/t/lecture/5798906?start=0
  // .push returns a firebase.database.ThenableReference which allows you to .then it (like a promise).
  addWish(wish: string) {
    this.wishes$.push({wish: wish})  // 'Hippopotamus'
    .then(
      () => console.log(`Success. Wish '${wish}' added to database.`),
      console.error
    );
  }

  deleteWish(wishKey: string) {
    //console.log(`wish service deleteWish ${wishKey}`);
    this.wishes$.remove(wishKey)
    .then(
      () => console.log(`Success. Wish '${wishKey}' deleted from database.`),
      console.error
    );
  }

  updateWish(wishKey: string, wish: any) {
    // this.af.database.object('/food-idea/cuisines/-guid');  // This should grab the specific item I want to update.
    // console.log(`wish service updateWish ${wishKey}`);

    // this.wishes$.update( item: FirebaseOperation, value: Object );
    this.wishes$.update(wishKey, wish)
    .then(
      () => console.log(`Success. Wish '${wishKey}' updated in database.`),
      console.error
    );
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
