import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { S4SocialInfoPage } from './s4-social-info.page';

const routes: Routes = [
  {
    path: '',
    component: S4SocialInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class S4SocialInfoPageRoutingModule {}
