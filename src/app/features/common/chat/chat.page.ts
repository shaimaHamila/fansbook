import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonContent, LoadingController } from '@ionic/angular';
import { Timestamp } from 'firebase/firestore';
import { ChatService } from 'src/app/services/chatService/chat.service';
import { EnpService } from 'src/app/services/enpService/enp.service';
import { InfService } from 'src/app/services/infService/inf.service';
import { Entrepreneur } from 'src/app/shared/models/entrepreneur';
import { Influencer } from 'src/app/shared/models/influencer';
import { Message } from 'src/app/shared/models/Message';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  @ViewChild(IonContent) content: IonContent;
  conversations: any = [];
  messages: Message[];
  specificChat: Message[];
  newMsg = '';
  textMessage: any;
  forId: any;
  currentUserImage: string;
  currentUserFullName: string;
  targetUserImage: string;
  targetUserFullName: string;
  enpData: Entrepreneur;
  //Get the current entreprenur uid from th lockal storage
  fromId = localStorage.getItem('localStorage_uid_pfe_2022');
  //Get the current user type from th lockal storage
  userType = localStorage.getItem('localStorage_userType_pfe_2022');

  constructor(
    private chatService: ChatService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private loadingCtrl: LoadingController,
    private infService: InfService,
    private enpService: EnpService,

  )
  {

    //get user for id from url
    if(this.userType ==='entrepreneur'){
      this.forId = this.activatedRoute.snapshot.paramMap.get('idInf');
    }else{
      this.forId = this.activatedRoute.snapshot.paramMap.get('idEnp');
    }
  }

  ngOnInit() {
    this.getAllMsg();

    if(this.userType === 'entrepreneur'){
      this.infService.getInfById(this.forId).subscribe(inf=>{
        this.targetUserImage = inf.image;
        this.targetUserFullName = inf.fullName;
      });
      this.enpService.getEnpById(this.fromId).subscribe(enp=>{
        this.currentUserImage = enp.image;
        this.currentUserFullName = enp.fullName;
      });

    }else{
      this.infService.getInfById(this.fromId).subscribe(inf=>{
        this.currentUserImage= inf.image;
        this.currentUserFullName = inf.fullName;
      });
      this.enpService.getEnpById(this.forId).subscribe(enp=>{
        this.targetUserImage  = enp.image;
        this.targetUserFullName = enp.fullName;
      });

    }
  }



  async getAllMsg(){
    const loading = await this.loadingCtrl.create();
    await loading.present();
    await this.chatService.getChatMessages().subscribe( (res) => {
       this.messages = res;

    });


    await loading.dismiss();

  }

sendMessage() {
  const msg = new Message();
  msg.fromId = this.fromId;
  msg.forId = this.forId;
  msg.msg = this.newMsg;
  msg.createdAt = Timestamp.now();

  this.chatService.addChatMessage(msg).then(() => {
    this.newMsg = '';
    this.content.scrollToBottom();
  });
}
}



