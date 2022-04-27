import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateProfilePage } from './update-profile.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateProfilePageRoutingModule {}
