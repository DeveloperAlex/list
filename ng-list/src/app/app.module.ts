import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';

export const firebaseConfig = {
  apiKey: "AIzaSyBDQ0nM2cJFSYmHbYPx4j90-RacHnYA5PU",
  authDomain: "ngfirebase-ebc9d.firebaseapp.com",
  databaseURL: "https://ngfirebase-ebc9d.firebaseio.com",
  storageBucket: "ngfirebase-ebc9d.appspot.com",
  messagingSenderId: "1006700743662"
};

const appRoutes: Routes = [];

//Notes:
// declarations = get all of the app's classes decorated w/ @Component. Directives & Pipes must be added to declarations too.
// imports = get classes decorated w/ @NgModule.
// providers = are services.
// bootstrap = launches the app by creating the components (listed in bootstrap) and inserting them into the browser dom.
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
