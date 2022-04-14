import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfProfilePage } from './inf-profile.page';

const routes: Routes = [
  {
    path: '',
    component: InfProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfProfilePageRoutingModule {}
