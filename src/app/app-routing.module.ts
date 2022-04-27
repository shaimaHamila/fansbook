import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'onboarding',
    loadChildren: () => import('./auth/onboarding/onboarding.module').then( m => m.OnboardingPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./auth/register/register.module').then( m => m.RegisterPageModule)
  },

  {
    path: 'add-coll-form',
    loadChildren: () => import('./features/enterpreneur/coll-form/coll-form.module').then( m => m.CollFormPageModule)
  },
  {
    path: 'update-coll-form',
    loadChildren: () => import('./features/enterpreneur/coll-form/coll-form.module').then( m => m.CollFormPageModule)
  },


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
