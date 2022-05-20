import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnpPostsPage } from './enp-posts.page';

const routes: Routes = [
  {
    path: '',
    component: EnpPostsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnpPostsPageRoutingModule {}
