import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';
import 'rxjs/add/operator/do';
//import 'rxjs/add/operator/interval';
//import { CoreService } from './core/core.service';
//import { CoreService, SpinnerService } from './core';
import { CoreService } from './core';


//import { MaterialModule } from '@angular/material';

// import { AngularFire } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {  // implements OnInit, OnDestroy {
  title = 'Many Lists';

  constructor(private titleService: Title, private coreService: CoreService) {  // private spinnerService: SpinnerService
    console.log('ctor app.component');
  }
  
  ngOnInit() {

    // this.titleService.setTitle("list.developeralex.com");  // Works https://angular.io/docs/ts/latest/cookbook/set-document-title.html
    
    // var timer$ = Observable.interval(5000);
    // timer$.subscribe(data );
    //
    // Observable.interval(5000).do(i => this.titleService.setTitle(`i= ${i}`));
    

    // Works:
    // this.coreService.setTitle('new-ish title');
    // var source = Observable
    //   .interval(1000 /* ms */)
    //   .timeInterval()
    //   .take(3);
    // var subscription = source.subscribe(  // http://reactivex.io/documentation/operators/interval.html
    //     function (x) {
    //         console.log('Next: ' + x.value);
    //         // this.titleService.setTitle('new title');
    //         // this.coreService.setTitle('newest title');  // Gives error in F12 screen.
    //     },
    //     function (err) {
    //         console.log('Error: ' + err);
    //     },
    //     function () {
    //         console.log('Completed');
    //         // this.titleService.setTitle('completed title');
    //     }
    // );
    

    // Works:    
    // //http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#static-method-interval
    // var numbers = Observable.interval(1100).take(3);
    // numbers.subscribe(x => console.log(x));
    // //numbers.subscribe(x => this.coreService.setTitle(`title ${x}`) );
  }

}
