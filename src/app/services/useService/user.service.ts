import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Entrepreneur } from 'src/app/shared/models/entrepreneur';
import { Influencer } from 'src/app/shared/models/influencer';
const ifluencerCollection = 'Influencer';
const entrepreneurCollection = 'Entrepreneur';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  influencerCollection: AngularFirestoreCollection<Influencer>;
  entrepreneurCollection: AngularFirestoreCollection<Entrepreneur>;
  constructor(private fireBaseSrv: AngularFirestore) {
    this.influencerCollection = fireBaseSrv.collection<Influencer>(ifluencerCollection);
  }

  createInfluencer(influencer: Influencer) {
    console.log('Creating Influencer');
    console.log(influencer);
    this.influencerCollection.add({ ...influencer }).then(t => console.log(t));
  }
}
