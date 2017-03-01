import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFire } from 'angularfire2';

@Component({
  selector: 'da-netflix-list',
  templateUrl: './netflix-list.component.html',
  styleUrls: ['./netflix-list.component.css']
})
export class NetflixListComponent implements OnInit, OnDestroy {
  cuisines: any;
  private subscription: any;

  constructor(private af: AngularFire) { 
    console.log('ctor - netflix');
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
