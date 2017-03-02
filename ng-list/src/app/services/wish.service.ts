import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';

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
