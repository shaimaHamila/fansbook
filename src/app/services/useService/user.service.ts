import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { doc, docData, Firestore, setDoc, collection } from '@angular/fire/firestore';
import { addDoc, getFirestore } from 'firebase/firestore';
import { Entrepreneur } from 'src/app/shared/models/entrepreneur';
import { Influencer } from 'src/app/shared/models/influencer';
const ifluencerCollection = 'Influencer';
const entrepreneurCollection = 'Entrepreneur';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  //influencerCollection: AngularFirestoreCollection<Influencer>;
  //entrepreneurCollection: AngularFirestoreCollection<Entrepreneur>;
  db = getFirestore();

  constructor(private fireBaseSrv: AngularFirestore, private firestore: Firestore) {
    //this.influencerCollection = fireBaseSrv.collection<Influencer>(ifluencerCollection);
    //this.entrepreneurCollection = fireBaseSrv.collection<Entrepreneur>(entrepreneurCollection);
  }
  //Create Influencer
  createInfluencer(influencer: Influencer) {
    console.log('Creating Influencer');
    console.log(influencer);
    // localStorage
    localStorage.setItem(`localStorage_uid_pfe_2022`, influencer.idInf);
    localStorage.setItem(`localStorage_userType_pfe_2022`, influencer.userType);
    const infRef = collection(this.db, ifluencerCollection);
    setDoc(doc(infRef, influencer.idInf), { ...influencer });

  };

  //Create Entrepreneur
  creatEntrepreneur(entrepreneur: Entrepreneur) {
    console.log('Creating Entrepreneur');
    console.log(entrepreneur);
    // localStorage
    localStorage.setItem(`localStorage_uid_pfe_2022`, entrepreneur.idEnp);
    localStorage.setItem(`localStorage_userType_pfe_2022`, entrepreneur.userType);
    const enpRef = collection(this.db, entrepreneurCollection);
    // Add a new document in collection "entrepreneur" with name: uid
    setDoc(doc(enpRef, entrepreneur.idEnp), { ...entrepreneur });


  }
}
