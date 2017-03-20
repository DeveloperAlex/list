import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ChatComponent } from './chat/chat.component';
import { GroupChatComponent } from './group-chat.component';
import { routes } from './group-chat.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [ChatComponent, GroupChatComponent]
})
export class GroupChatModule {
  routes = routes;
  
  constructor() {
    console.log('`Group Chat` bundle loaded asynchronously.');
  }

}

// Use the following as a guide:
//  https://github.com/AngularClass/angular2-webpack-starter/blob/master/src/app/%2Bdetail/detail.module.ts

