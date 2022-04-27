import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfRegisterPage } from './inf-register.page';

const routes: Routes = [
  {
    path: '',
    component: InfRegisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfRegisterPageRoutingModule {}
