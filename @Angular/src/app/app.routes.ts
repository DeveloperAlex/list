// Examples:
//  https://github.com/angular-university/angular-firebase-app/blob/master/src/app/router.config.ts

import { RouterModule, Routes } from '@angular/router';
// import { AuthGuard } from './auth.guard';
import { AboutComponent, D3Component, DockerComponent, GridComponent, HomeComponent, 
  NetflixListComponent, NodejsComponent, WishListComponent } from './components/index';

//const routes: Routes = [
export const routes: Routes = [
  { path: 'about',       component: AboutComponent },
  { path: 'd3',          component: D3Component },
  { path: 'docker',      component: DockerComponent },
  { path: 'grid',        component: GridComponent },
  { path: 'home',        component: HomeComponent },
  { path: 'netflixlist', component: NetflixListComponent },
  { path: 'wishlist',    component: WishListComponent },
  { path: 'nodejs',      component: NodejsComponent },

//  { path: 'chat', canLoad: [AuthGuard], loadChildren: 'app/+group-chat/group-chat.module#GroupChatModule' },
  { path: 'chat', loadChildren: 'app/+group-chat/group-chat.module#GroupChatModule' },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];

//export default RouterModule.forRoot(routes);
