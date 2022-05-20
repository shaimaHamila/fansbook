import { Injectable } from '@angular/core';
import { Auth, onAuthStateChanged } from '@angular/fire/auth';
import { addDoc, collection, collectionData, Firestore, serverTimestamp } from '@angular/fire/firestore';
import { orderBy, query, where } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Entrepreneur } from 'src/app/shared/models/entrepreneur';
import { Influencer } from 'src/app/shared/models/influencer';
import { Message } from 'src/app/shared/models/Message';
import { User } from 'src/app/shared/models/User';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  currentUser: User = null;
  constructor(
    auth: Auth,
    private firestore: Firestore
    ) {}

    //1 You should make new collection in firebase.
    //2 Model should have 2 ids sender and receiver
    //3 Sender sends the message which should than go to that collection
    //4 And on receiver side read the collection with logged in user id and check

    addChatMessage(newMsg: any, fromId: any, forId: any){
      const collRef = collection(this.firestore, 'Message');
      return addDoc(collRef, {
        msg: newMsg,
        fromId,
        forId,
        createdAt: serverTimestamp()
      });
  }

  getChatMessages(fromId: any, forId: any): Observable<Message[]>{
    const collRef = collection(this.firestore, 'Message');
    const q = query(collRef, where('fromId', '==', fromId), where('forId', '==', forId), orderBy('createdAt'));
    return collectionData(q, {idField: 'idExp'})as Observable<Message[]>;

  }




  //Get All Entrepreneurs
  getAllEnp(): Observable<Entrepreneur[]>{
    const enpRef = collection(this.firestore, 'Entrepreneur');
    return collectionData(enpRef, {idField: 'uid'}) as Observable<Entrepreneur[]>;
  };

  //Get All Influencers
  getAllInf(): Observable<Influencer[]>{
    const infRef = collection(this.firestore, 'Influencer');
    return collectionData(infRef, {idField: 'uid'}) as Observable<Influencer[]>;
  };

  //Get the email of the entrepreneur who sent the message for
  getEnpForMsg(msgFromId, entrepreneurs: Entrepreneur[]): string {
    for (const entrepreneur of entrepreneurs) {
      if (entrepreneur.uid === msgFromId) {
        return entrepreneur.email;
      }
    }
    return 'Deleted';
  }

  //Get the email of the influencer who sent the message for
  getInfForMsg(msgFromId, influencers: Influencer[]): string {
    for (const influencer of influencers) {
      if (influencer.uid === msgFromId) {
        return influencer.email;
      }
    }
    return 'Deleted';
  }

}


