import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfsProfilePage } from './infs-profile.page';

const routes: Routes = [
  {
    path: '',
    component: InfsProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfsProfilePageRoutingModule {}
