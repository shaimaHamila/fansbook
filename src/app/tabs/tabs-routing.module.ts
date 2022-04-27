import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../features/common/home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'messages',
        loadChildren: () => import('../features/common/messages/messages.module').then( m => m.MessagesPageModule)
      },
      {
        path: 'notifications',
        loadChildren: () => import('../features/common/notifications/notifications.module').then( m => m.NotificationsPageModule)
      },
      {
        path: 'tab4',
      },
      {
        path: 'inf-profile',
        loadChildren: () => import('../features/influencer/inf-profile/inf-profile.module').then( m => m.InfProfilePageModule)
      },
      {
        path: 'entp-profile',
        loadChildren: () => import('../features/enterpreneur/entp-profile/entp-profile.module').then( m => m.EntpProfilePageModule)
      },
      {
        path: 'inf-list',
        loadChildren: () => import('../features/influencer/inf-list/inf-list.module').then( m => m.InfListPageModule)
      },
      {
        path: 'entp-list',
        loadChildren: () => import('../features/enterpreneur/entp-list/entp-list.module').then( m => m.EntpListPageModule)
      },
      {
        path: 'coll-opp',
        loadChildren: () => import('../features/enterpreneur/coll-opp-list/coll-opp.module').then( m => m.CollOppPageModule)
      },
      {
        path: 'payment',
        loadChildren: () => import('../features/common/payment/payment.module').then( m => m.PaymentPageModule)
      },
      {
        path: 'logout',
        loadChildren: () => import('../features/common/logout/logout.module').then( m => m.LogoutPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
