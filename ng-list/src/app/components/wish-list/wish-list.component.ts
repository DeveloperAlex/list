import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFire } from 'angularfire2';
//import { WishService } from '../../services/wish.service';
import { WishService } from '../../services';
import { SpinnerService } from '../../core';

@Component({
  selector: 'da-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit, OnDestroy {
  wishes: Object[];
  private subscription: any;

  //constructor(private af: AngularFire, private wishService: WishService) {
  constructor(private af: AngularFire, private wishService: WishService, private spinnerService: SpinnerService) {
    console.log('ctor - wishlist');
    //console.log(`spinnerService=`, spinnerService);
  }

  ngOnInit() {
    // console.log(this.af);
    // this.subscription = this.af.database.list('/food-idea/cuisines')
    // .subscribe(x => {
    //   this.cuisines = x;
    //   console.log(this.cuisines);
    // });

    // this.cuisines = this.wishService.getWishes();  //Return a promise maybe? Since its not an Observable yet.
    
    this.spinnerService.spin('wishlist');
    //setTimeout(()=> {
    this.subscription = this.wishService.getWishesSubscription()
      .do(console.log)
      .subscribe(x => { 
        this.wishes = x;
        this.spinnerService.stop('wishlist');
      })
    ;
    //}, 1000);  // Show off Spinner.
    
    // .subscribe(
    //   x => this.wishes = x
    // )
    // .do(this.spinnerService.stop('wishlist'));
  }
  
  ngOnDestroy() {
    console.log(`WishListComponent::ngOnDestroy()`);
    this.subscription.unsubscribe();
    this.spinnerService.stop('wishlist');
  }

  showEdit(w: any) {
    w.editable = true;
    console.log(`showEdit(${w})`);
  }
  
  cancelWish(w) {
    w.editable = false;
  }

  // Lecture 18 has updating: https://www.udemy.com/angular-firebase-application/learn/v4/t/lecture/5798910?start=0
  editWish(w: any, wishKey: string, wish: string) {
    console.log(`Edited wish '${wishKey}'. New wish= ${w.wish}`);
    //this.wishService.deleteWish(wishKey);

    //this.wishService.updateWish(wishKey, {'wish': wish});
    this.wishService.updateWish(wishKey, {'wish': w.wish});
    w.editable = false;
  }

  deleteWish(wishKey: string) {
    console.log(`Deleted wish '${wishKey}'`);
    this.wishService.deleteWish(wishKey);
  }
  
  addWish(wish: string) {
    //console.log(`Added wish '${wish}'`);
    this.wishService.addWish(wish);
    
    // this.wishes$.push({wish: wish})  // 'Hippopotamus'
    // .then(
    //   () => console.log(`Success '${wish}' added to database.`),
    //   console.error
    // );
  }
  
}
