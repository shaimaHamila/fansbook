import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/authService/auth.service';

@Component({
  selector: 'app-forget-psw',
  templateUrl: './forget-psw.page.html',
  styleUrls: ['./forget-psw.page.scss'],
})
export class ForgetPswPage implements OnInit {
  constructor(
    private authService: AuthService,
    public alertController: AlertController
  ) { }

  ngOnInit() {
  }
  recoverPsw(email: string){
    this.authService.forgotPassword(email);

  }
  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

}
