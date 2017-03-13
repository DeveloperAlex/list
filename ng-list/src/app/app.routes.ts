// Examples:
//  https://github.com/angular-university/angular-firebase-app/blob/master/src/app/router.config.ts

import { Routes } from '@angular/router';
import { HomeComponent, NetflixListComponent, WishListComponent } from './components/index';

export const routes: Routes = [
  { path: 'home',        component: HomeComponent },
  { path: 'netflixlist', component: NetflixListComponent },
  { path: 'wishlist',    component: WishListComponent },
  { path: 'chat', loadChildren: 'app/+group-chat/group-chat.module#GroupChatModule' },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];
