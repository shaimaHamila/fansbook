import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { ChatService } from 'src/app/services/chatService/chat.service';
import { EnpService } from 'src/app/services/enpService/enp.service';
import { InfService } from 'src/app/services/infService/inf.service';
import { Message } from 'src/app/shared/models/Message';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent implements OnInit {
  @Input() msg: Message;
  @Input() userType: string;
  img: string;
  fullName: string;
  constructor(
    private chatService: ChatService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private loadingCtrl: LoadingController,
    private infService: InfService,
    private enpService: EnpService,
  ) { }

  ngOnInit() {

  }

}
