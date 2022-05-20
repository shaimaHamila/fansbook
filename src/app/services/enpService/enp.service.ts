import { Injectable } from '@angular/core';
import { Firestore, collection, doc, deleteDoc, updateDoc} from '@angular/fire/firestore';
import { collectionData, docData } from 'rxfire/firestore';
import { Observable } from 'rxjs';
import { Entrepreneur } from 'src/app/shared/models/entrepreneur';

@Injectable({
  providedIn: 'root'
})
export class EnpService {

  constructor(private firestore: Firestore) { }

  //Current Entrepreneur user

  async updateEnp(entrepreneur: Entrepreneur){
    const enpDocRef = doc(this.firestore, `Entrepreneur/${entrepreneur.idEnp}`);
    await updateDoc(enpDocRef, {...entrepreneur});
  };

  async updateProfilePic(idEnp: any, newPic: string){
    const enpDocRef = doc(this.firestore, `Entrepreneur/${idEnp}`);
    await updateDoc(enpDocRef, {
      image: newPic
    });
  }

  async updateCoverPic(idEnp: any, newPic: string){
    const enpDocRef = doc(this.firestore, `Entrepreneur/${idEnp}`);
    await updateDoc(enpDocRef, {
      coverPhoto: newPic
    });
  }

  async deleteEnp(enpId: string){
    const enpDocRef = doc(this.firestore, `Entrepreneur/${enpId}`);
    await deleteDoc(enpDocRef);
  }

  //Entrepreneur list
  getEnpList(): Observable<Entrepreneur[]>{
    const enpRef = collection(this.firestore, 'Entrepreneur');
    return collectionData(enpRef, {idField: 'uid'}) as Observable<Entrepreneur[]>;
  };

   getEnpById(uid: string): Observable<Entrepreneur>{
    const enpDocRef = doc(this.firestore, `Entrepreneur/${uid}`);
    return docData(enpDocRef, {idField: 'uid'}) as Observable<Entrepreneur>;
  }

}
