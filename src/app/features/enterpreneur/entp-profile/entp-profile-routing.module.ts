import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntpProfilePage } from './entp-profile.page';

const routes: Routes = [
  {
    path: '',
    component: EntpProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntpProfilePageRoutingModule {}
