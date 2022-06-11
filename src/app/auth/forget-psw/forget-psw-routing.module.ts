import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForgetPswPage } from './forget-psw.page';

const routes: Routes = [
  {
    path: '',
    component: ForgetPswPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForgetPswPageRoutingModule {}
