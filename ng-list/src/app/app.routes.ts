// Examples:
//  https://github.com/angular-university/angular-firebase-app/blob/master/src/app/router.config.ts

import { Routes } from '@angular/router';
import { NetflixListComponent, WishListComponent } from './components/index';

export const routes: Routes = [
  { path: 'netflixlist', component: NetflixListComponent },
  { path: 'wishlist',    component: WishListComponent },
  { path: 'chat', loadChildren: 'app/+group-chat/group-chat.module#GroupChatModule'}
];
