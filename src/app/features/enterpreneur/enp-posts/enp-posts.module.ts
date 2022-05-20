import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnpPostsPageRoutingModule } from './enp-posts-routing.module';

import { EnpPostsPage } from './enp-posts.page';
import { SharedComponentsModule } from 'src/app/shared/modues/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnpPostsPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [EnpPostsPage]
})
export class EnpPostsPageModule {}
