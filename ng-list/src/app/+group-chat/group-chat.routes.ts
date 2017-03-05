import { GroupChatComponent } from './group-chat.component';
import { Routes } from '@angular/router';

export const routes : Routes = [
  { path: '', children: [
    { path: '', component: GroupChatComponent }
  ]},
];

//{ path: 'child-detail', loadChildren: './+child-detail#ChildDetailModule' }
