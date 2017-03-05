import { GroupChatComponent } from './group-chat.component';

export const routes = [
  { path: '', children: [
    { path: '', component: GroupChatComponent }
  ]},
];

//{ path: 'child-detail', loadChildren: './+child-detail#ChildDetailModule' }
