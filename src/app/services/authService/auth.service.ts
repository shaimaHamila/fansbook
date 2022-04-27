import { Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from '@angular/fire/auth';
import { onAuthStateChanged, sendPasswordResetEmail } from 'firebase/auth';
import { User } from 'src/app/shared/models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: User = null;
  constructor(private auth: Auth) {
    onAuthStateChanged(auth, user =>{
      console.log('changed: ', user);

    });
  };

  async register({ email, password }) {
    try {
      return await createUserWithEmailAndPassword(
        this.auth,
        email,
        password
      );
    } catch (e) {
      console.log(e);
      return null;
    }
  };

  async login({ email, password }) {
    try {
      const user = await signInWithEmailAndPassword(this.auth, email, password)
      .then((cred)=>{
        console.log('User is logged in: ', cred.user);
        return user;
      })
      .catch((err)=>{
        console.log(err);
      });
    } catch (e) {
      return null;
    }
  };

  logout() {
    return signOut(this.auth)
      .then(()=>{
        console.log('The user is logout');
      })
        .catch((err)=>{
          console.log(err);
        });
  };

  //Forget password

  forgotPassword(email: string){
    return sendPasswordResetEmail(this.auth, email);
  }


}
