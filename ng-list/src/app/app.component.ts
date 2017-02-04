import { Component } from '@angular/core';
import {AngularFire } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  items = ['one', 'two', 'three'];
  cuisines;

  constructor(af: AngularFire) {
    console.log(af);
    af.database.list('/food-idea/cuisines')
    .subscribe(x => {
      this.cuisines = x;
      console.log(this.cuisines);
    });
  }
  
}
