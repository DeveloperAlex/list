import { BrowserModule } from '@angular/platform-browser';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { routes } from './app.routes';
import { AngularFireModule } from 'angularfire2';
import { firebaseConfig } from '../environments/firebase.config';  // https://www.udemy.com/angular-firebase-application/learn/v4/t/lecture/5798940?start=0  //Lecture 21 @5:17 of 7:24.
import { MaterialModule, MdProgressSpinnerModule } from '@angular/material';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import { AlertModule } from 'ng2-bootstrap';  // https://github.com/valor-software/ng2-bootstrap/blob/development/docs/getting-started/ng-cli.md

// declarations:
import { AppComponent } from './app.component';
import { WishListComponent } from './components/wish-list/wish-list.component';
import { NetflixListComponent } from './components/netflix-list/netflix-list.component';

import { D3Service } from './components/';

// providers:
import { CoreService, SpinnerService } from './core';
import { WishService } from './services/wish.service';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { DockerComponent } from './components/docker/docker.component';
//import { SpinnerComponent } from './core/spinner/spinner.component';
import { SpinnerComponent } from './core';
import { D3Component } from './components/d3/d3.component';

// export const firebaseConfig = {
//   apiKey: "AIzaSyBDQ0nM2cJFSYmHbYPx4j90-RacHnYA5PU",
//   authDomain: "ngfirebase-ebc9d.firebaseapp.com",
//   databaseURL: "https://ngfirebase-ebc9d.firebaseio.com",
//   storageBucket: "ngfirebase-ebc9d.appspot.com",
//   messagingSenderId: "1006700743662"
// };

// We'll need to add: "<router-outlet></router-outlet>" to the html - to use routing.
//  See bottom of cheatsheet for ideas:  https://angular.io/docs/ts/latest/guide/cheatsheet.html

// const routes: Routes = [
//   { path: 'netflixlist', component: NetflixListComponent },
//   { path: 'wishlist',    component: WishListComponent },
//   { path: 'chat', loadChildren: 'app/+group-chat/group-chat.module#GroupChatModule'}
// ];

// { path: 'home',        component: AppComponent },
// { path: '', redirectTo: '/home', pathMatch: 'full' }
// { path: '**', component: PageNotFoundComponent }

// const routes: Routes = [
//     { path: 'netflixlist', component: NetflixListComponent },
//     { path: 'wishlist', component: WishListComponent }
// ];


//  <base href="/">  //Caused doubling of ui (both of these do).
//  { path: '', component: AppComponent },
//  { path: '**', component: AppComponent }  //Caused doubling of ui (both of these do).


// https://plnkr.co/edit/LCsiXOtzSedGZDbGQ3f8?p=preview
export class MyHammerConfig extends HammerGestureConfig  {
  overrides = <any>{
      'swipe': {velocity: 0.4, threshold: 20} // override default settings
  }
}


// Notes:
//  declarations = get all of the app's classes decorated w/ @Component. Directives & Pipes must be added to declarations too.
//  imports = get classes decorated w/ @NgModule.
//  exports = List of components, directives, and pipes visible to modules that import this module.
//  providers = are services.
//  bootstrap = launches the app by creating the components (listed in bootstrap) and inserting them into the browser dom.
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NetflixListComponent,
    WishListComponent,
    AboutComponent,
    DockerComponent,
    SpinnerComponent,
    D3Component
    //SpinnerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(firebaseConfig[0]),
    AlertModule.forRoot(),
    MaterialModule, MdProgressSpinnerModule
  ],
  providers: [
    CoreService,
    D3Service,
    SpinnerService,
    WishService,
    { provide: HAMMER_GESTURE_CONFIG, useClass: MyHammerConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  routes = routes;
  firebaseConfig = firebaseConfig;
}
