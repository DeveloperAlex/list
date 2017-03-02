import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';

import { Wish } from '../models/wish';

@Injectable()
export class WishService {

  constructor(private af: AngularFire) {
    
  }


  
  getWishes() : any {
    
  }

}
