import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/authService/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  userProfile = [
    {
      title: 'User Name',
      url: '/tabs/inf-profile',
      icon: '',
      badge: ''
    },
  ];

  primaryPages = [
    {
      title: 'Home',
      url: '/tabs/home',
      icon: 'fi fi-rr-home',
      badge: ''
    },
    {
      title: 'Messages',
      url: '/tabs/messages',
      icon: 'fi fi-rr-comment',
      badge: '6'
    },
    {
      title: 'Notifications',
      url: '/tabs/notifications',
      icon: 'fi fi-rr-bell',
      badge: '2'
    },
  ];

  secondaryPages = [
    {
      title: 'nfluencers list',
      url: '/tabs/inf-list',
      icon: 'fi fi-rr-star'
    },
    {
      title: 'Enterpreneurs List',
      url: '/tabs/entp-list',
      icon: 'fi fi-rr-users'
    },
    {
      title: 'Collaboration Opportunities',
      url: '/tabs/coll-opp',
      icon: 'fi fi-rr-briefcase '
    },
  ];

  payment = [

    {
      title: 'Payment',
      url: '/tabs/payment',
      icon: 'fi fi-rr-credit-card'
    },
  ];
  userLogout = [
    {
      title: 'Logout',
      url: '/tabs/logout',
      icon: 'fi fi-rr-sign-out-alt'
    },
  ];
  constructor(private authService: AuthService, private route: Router) {}

  async logout(){
    await this.authService.logout();
    this.route.navigateByUrl('/login', {replaceUrl: true});
    localStorage.removeItem('token');
  }

}


