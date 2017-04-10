// import { Injectable } from '@angular/core';
// @Injectable()
// export class AuthGuardService {
//   constructor() { }
// }


import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
//export class AuthGuardService {   // AuthService {
export class AuthService {
  isLoggedIn: boolean = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  login(): Observable<boolean> {
    debugger;
    return Observable.of(true).delay(1000).do(val => this.isLoggedIn = true);
  }

  logout(): void {
    debugger;
    this.isLoggedIn = false;
  }
}
