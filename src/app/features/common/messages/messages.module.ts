import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MessagesPageRoutingModule } from './messages-routing.module';

import { MessagesPage } from './messages.page';
import { SharedComponentsModule } from 'src/app/shared/modues/shared-components/shared-components.module';
import { MessageComponent } from '../components/message/message.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MessagesPageRoutingModule,
    SharedComponentsModule,
  ],
  declarations: [MessagesPage, MessageComponent]
})
export class MessagesPageModule {}
