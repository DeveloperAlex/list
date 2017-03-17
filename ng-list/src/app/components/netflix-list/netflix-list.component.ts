import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { SpinnerService } from '../../core';

@Component({
  selector: 'da-netflix-list',
  templateUrl: './netflix-list.component.html',
  styleUrls: ['./netflix-list.component.css']
})
export class NetflixListComponent implements OnInit, OnDestroy {
  cuisines: any;
  private subscription: any;

  constructor(private af: AngularFire, private spinnerService: SpinnerService) {
    console.log('ctor - netflix');
  }

  ngOnInit() {
    console.log(this.af);
    this.spinnerService.spin('netflixlist');
    this.subscription = this.af.database.list('/food-idea/cuisines')
    .subscribe(x => {
      this.cuisines = x;
      console.log(this.cuisines);
      this.spinnerService.stop('netflixlist');
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.spinnerService.stop('netflixlist');
  }

}
