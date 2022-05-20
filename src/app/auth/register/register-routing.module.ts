import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterPage } from './register.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterPage
  },
  {
    path: 's1-usertype',
    loadChildren: () => import('./s1-usertype/s1-usertype.module').then( m => m.S1UsertypePageModule)
  },

  {
    path: 'inf-register',
    loadChildren: () => import('./inf-register/inf-register.module').then( m => m.InfRegisterPageModule)
  },
  {
    path: 'enp-register',
    loadChildren: () => import('./enp-register/enp-register.module').then( m => m.EnpRegisterPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterPageRoutingModule {}
