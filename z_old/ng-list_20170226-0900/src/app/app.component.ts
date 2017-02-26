import { Component, OnInit, OnDestroy } from '@angular/core';
import {AngularFire } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app works!';
  items = ['one', 'two', 'three'];
  cuisines: any;
  private subscription: any;

  constructor(private af: AngularFire) {
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