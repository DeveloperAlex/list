import { BrowserModule } from '@angular/platform-browser';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule, Routes } from '@angular/router';
import { routes } from './app.routes';
//import appRoutes from './app.routes';

import { AngularFireModule } from 'angularfire2';
import { firebaseConfig } from '../environments/firebase.config';  // https://www.udemy.com/angular-firebase-application/learn/v4/t/lecture/5798940?start=0  //Lecture 21 @5:17 of 7:24.
import { MaterialModule, MdProgressSpinnerModule } from '@angular/material';

// import 'rxjs/add/operator/do';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/switchMap';

import { AlertModule } from 'ng2-bootstrap';  // https://github.com/valor-software/ng2-bootstrap/blob/development/docs/getting-started/ng-cli.md
import { nvD3 } from 'ng2-nvd3';
import {AgGridModule} from "ag-grid-angular/main";  // https://embed.plnkr.co/EINfsm/?show=preview


// declarations:
import { AppComponent } from './app.component';

// providers:
// import { AuthGuard } from './auth.guard';
// import { AuthService, WishService } from './services';

import { NodejsService, WishService } from './services';
import { CoreService, SpinnerService, SpinnerComponent } from './core';
import { D3Service, NetflixListComponent, WishListComponent } from './components/';
import { HomeComponent, AboutComponent, DockerComponent, D3Component } from './components';
import { GridComponent, DateComponent, HeaderComponent, HeaderGroupComponent } from './components';
import { RichGridComponent } from './components/grid/components/rich-grid.component';

// https://plnkr.co/edit/LCsiXOtzSedGZDbGQ3f8?p=preview
export class MyHammerConfig extends HammerGestureConfig  {
  overrides = <any>{
      'swipe': {velocity: 0.4, threshold: 20} // override default settings
  }
}



// From app.module.js in Angular 1.5:
//   agGrid.LicenseManager.setLicenseKey("SHI_on_behalf_of_AIG_Site_10Devs23_January_2018__MTUxNjY2NTYwMDAwMA==8b08adcfc0c4594bacd6eb06e88e1d3b");
//   agGrid.initialiseAgGridWithAngular1(angular);
// Maybe something like: AgGridModule.LicenseManager.setLicenseKey("SHI_on_behalf_of_AIG_Site_10Devs23_January_2018__MTUxNjY2NTYwMDAwMA==8b08adcfc0c4594bacd6eb06e88e1d3b");



//  See bottom of cheatsheet for ideas:  https://angular.io/docs/ts/latest/guide/cheatsheet.html

// Notes:
//  declarations = get all of the app's classes decorated w/ @Component. Directives & Pipes must be added to declarations too.
//  imports = get classes decorated w/ @NgModule.
//  exports = List of components, directives, and pipes visible to modules that import this module.
//  providers = are services.
//  bootstrap = launches the app by creating the components (listed in bootstrap) and inserting them into the browser dom.
@NgModule({
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    //appRoutes,
    AngularFireModule.initializeApp(firebaseConfig[0]),
    AlertModule.forRoot(),
    MaterialModule, MdProgressSpinnerModule,
    AgGridModule.withComponents(
    [
        DateComponent,
        HeaderComponent,
        HeaderGroupComponent
    ])
    ],
  providers: [
    //AuthGuard, AuthService,
    CoreService,
    D3Service,
    SpinnerService,
    WishService,
    { provide: HAMMER_GESTURE_CONFIG, useClass: MyHammerConfig }
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    NetflixListComponent,
    WishListComponent,
    AboutComponent,
    DockerComponent,
    SpinnerComponent,
    D3Component,
    nvD3,
    GridComponent,
    DateComponent,
    HeaderComponent,
    HeaderGroupComponent,
    RichGridComponent
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  //routes = routes;
  firebaseConfig = firebaseConfig;
}
