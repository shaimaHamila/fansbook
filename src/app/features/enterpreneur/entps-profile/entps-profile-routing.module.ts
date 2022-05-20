import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntpsProfilePage } from './entps-profile.page';

const routes: Routes = [
  {
    path: '',
    component: EntpsProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntpsProfilePageRoutingModule {}
