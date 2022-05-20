import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonContent } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ChatService } from 'src/app/services/chatService/chat.service';
import { Message } from 'src/app/shared/models/Message';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  @ViewChild(IonContent) content: IonContent;

  messages: Message[];
  newMsg = '';
  textMessage: any;
  forId: any;
  //Get the current entreprenur uid from th lockal storage
  fromId = localStorage.getItem('localStorage_uid_pfe_2022');
  constructor(
    private chatService: ChatService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) {
    //get inf id from url
    /////////!!!!!!!! important I need to add if here to trst if it's an enp or an inf
    this.forId = this.activatedRoute.snapshot.paramMap.get('idInf');
  }

  ngOnInit() {
     this.chatService.getChatMessages(this.fromId, this.forId).subscribe((m)=>{
      this.messages = m;
    });
    // this.messages =  this.chatService.getChatMessages(this.fromId, this.forId).pipe(
    //     map((messages: Message[])=>messages),
    //     map((messages)=>{
    //       for(const m of messages) {
    //         m.myMsg = this.fromId === m.fromId;
    //       };
    //       return messages;
    //     })
    //  );
     console.log(this.messages);
  }

  sendMessage() {
    this.chatService.addChatMessage(this.newMsg, this.fromId, this.forId).then(()=>{
      this.newMsg = '';
      this.content.scrollToBottom();
    });
  }

}
