// import { Injectable } from '@angular/core';
// import { CanActivate, CanLoad, ActivatedRouteSnapshot, Route, RouterStateSnapshot } from '@angular/router';
// import { Observable } from 'rxjs/Observable';
//
// @Injectable()
// export class AuthGuard implements CanActivate, CanLoad {
//
//   canActivate(
//     next: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
//       console.log(`AuthGuard returning true`);
//       return true;
//   }
//  
//   // https://angular.io/docs/ts/latest/guide/router.html#!#can-load-guard
//   canLoad(route: Route): boolean {
//     // let url = `/${route.path}`;
//     // return this.checkLogin(url);
//     return true;
//   }
// }


// https://angular.io/docs/ts/latest/guide/router.html#!#query-parameters-and-fragments
import { Injectable }       from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild,
  NavigationExtras
}                           from '@angular/router';
// import { AuthService }      from './auth.service';
//import { AuthGuardService as AuthService }      from './services';  // "as" works to rename import (but maybe this is confusing & s/N do this).
import { AuthService } from './services';


@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private authService: AuthService, private router: Router) {
    console.log(`AuthGuard ctor`);
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    debugger;
    let url: string = state.url;

    return this.checkLogin(url);
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    debugger;
    return this.canActivate(route, state);
  }

  checkLogin(url: string): boolean {
    debugger;
    
    if (this.authService.isLoggedIn) { return true; }

    // Store the attempted URL for redirecting
    this.authService.redirectUrl = url;

    // Create a dummy session id
    let sessionId = 123456789;

    // Set our navigation extras object
    // that contains our global query params and fragment
    let navigationExtras: NavigationExtras = {
      queryParams: { 'session_id': sessionId },
      fragment: 'anchor'
    };

    // Navigate to the login page with extras
    this.router.navigate(['/login'], navigationExtras);
    return false;
  }
}

