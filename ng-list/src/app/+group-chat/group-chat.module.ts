import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ChatComponent } from './chat/chat.component';
import { GroupChatComponent } from './group-chat.component';
import { routes } from './group-chat.routes';

console.log('`Group Chat` bundle loaded asynchronously.');

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [ChatComponent, GroupChatComponent]
})
export class GroupChatModule {
  routes = routes;
}

// Use the following as a guide:
//  https://github.com/AngularClass/angular2-webpack-starter/blob/master/src/app/%2Bdetail/detail.module.ts

