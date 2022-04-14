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
    path: 's2-general-info',
    loadChildren: () => import('./s2-general-info/s2-general-info.module').then( m => m.S2GeneralInfoPageModule)
  },
  {
    path: 's3-work-info',
    loadChildren: () => import('./s3-work-info/s3-work-info.module').then( m => m.S3WorkInfoPageModule)
  },
  {
    path: 's4-social-info',
    loadChildren: () => import('./s4-social-info/s4-social-info.module').then( m => m.S4SocialInfoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterPageRoutingModule {}
