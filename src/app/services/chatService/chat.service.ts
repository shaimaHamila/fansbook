import { Injectable } from '@angular/core';
import { Auth, onAuthStateChanged } from '@angular/fire/auth';
import { User } from 'src/app/shared/models/User';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  currentUser: User = null;
  constructor(auth: Auth) {
    onAuthStateChanged(auth, user =>{
      console.log('changed: ', user);

    });
   }
}
