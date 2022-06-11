import { Injectable } from '@angular/core';
import { collection, Firestore, addDoc, query, where, collectionData, orderBy, doc, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Notification } from 'src/app/shared/models/notification';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(
    private firestore: Firestore,
  ) { }


  //Add Notification Experience
  async addNotif(newNotification: Notification){
    const notifCollRef = collection(this.firestore, `Notification`);
    await addDoc(notifCollRef,{...newNotification});
  }

  //get user Notifications
  getUserNotif(forId: any): Observable<Notification[]>{
    const notifCollRef = collection(this.firestore, `Notification`);
    const q = query(notifCollRef, where('forId', '==', forId), orderBy('createdAt'));

    return collectionData(q, {idField: 'idNotif'})as Observable<Notification[]>;
  }

  // Update user Notification
  async updateInf(newNotification: Notification){
    const notifDocRef = doc(this.firestore, `Notification/${newNotification.notifType}`);
    await updateDoc(notifDocRef, {...newNotification});
  };
}
