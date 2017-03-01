import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFire } from 'angularfire2';

@Component({
  selector: 'da-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit, OnDestroy {
  cuisines: any;
  private subscription: any;

  constructor(private af: AngularFire) { 
    console.log('ctor - wishlist');
  }

  ngOnInit() {
    console.log(this.af);
    this.subscription = this.af.database.list('/food-idea/cuisines')
    .subscribe(x => {
      this.cuisines = x;
      console.log(this.cuisines);
    });
  }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
