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
