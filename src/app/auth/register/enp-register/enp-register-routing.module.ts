import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnpRegisterPage } from './enp-register.page';

const routes: Routes = [
  {
    path: '',
    component: EnpRegisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnpRegisterPageRoutingModule {}
