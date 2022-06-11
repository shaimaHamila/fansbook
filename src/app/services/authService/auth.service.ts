import { Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signOut
} from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { onAuthStateChanged, sendPasswordResetEmail } from 'firebase/auth';
import { Observable } from 'rxjs';
import { Entrepreneur } from 'src/app/shared/models/entrepreneur';
import { Influencer } from 'src/app/shared/models/influencer';
import { User } from 'src/app/shared/models/User';
import { EnpService } from '../enpService/enp.service';
import { InfService } from '../infService/inf.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userId: string;
  influencer: Influencer;
  entrepreneur: Entrepreneur;
  currentUser;
  constructor(
    private auth: Auth,
    private afa: AngularFireAuth,
    private infService: InfService,
    private enpService: EnpService,
    private router: Router,
    private toastCtrl: ToastController
    ) {
    onAuthStateChanged(auth, user =>{
      console.log('changed: ', user);
    });
    //Get currentuser
    this.currentUser = this.afa.user;

  };

  sendVerificationMail(user: any) {
    sendEmailVerification(user)
      .then((res: any) => {
        this.router.navigate(['/verify-email']);
      },(err: any)=>{
        alert('Something went wreng. Not able to send mail to your zmail');
      });
  }

  async register({ email, password }) {
    try {
      return await createUserWithEmailAndPassword(this.auth, email, password);
    } catch (e) {
      console.log(e);
      return null;
    }
  };

  async login({ email, password }) {
    try {
      const cred = await signInWithEmailAndPassword(this.auth, email, password);
      console.log('User is logged in: ', cred.user);
      return cred.user.uid;

    } catch (e) {
      return null;
    }
  };

  logout() {
    return signOut(this.auth)
      .then(()=>{
        console.log('The user is logout');
        localStorage.clear();
      })
        .catch((err)=>{
          console.log(err);
        });
  };

  //Forget password

  forgotPassword(email: string){
    sendPasswordResetEmail(this.auth, email).then(()=>{
      this.router.navigateByUrl('/login');
      this.presentToast('Password reset email sent',  'bottom', 3000); // this is toastController

    }, error =>{
      console.log('Some thing went wrong! Try again');
    });
  }
  async presentToast(message, position, duration) {
    const toast = await this.toastCtrl.create({
      message,
      duration,
      position,
      cssClass: 'toast',
    });

    toast.present();
  }

}
