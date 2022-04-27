import { Injectable } from '@angular/core';
import { collection, getFirestore } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class CollaborationService {

  //Init service
  db = getFirestore();
  //collection ref
  colRef = collection(this.db, 'collaboration');

  constructor() { }



}



