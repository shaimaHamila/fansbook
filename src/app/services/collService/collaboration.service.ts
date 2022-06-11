import { Injectable } from '@angular/core';
import { Firestore, orderBy, query } from '@angular/fire/firestore';
import { addDoc, arrayRemove, arrayUnion, collection, deleteDoc, doc, getDoc,
          getFirestore, setDoc, updateDoc, where
        }
from 'firebase/firestore';
import { collectionData, docData } from 'rxfire/firestore';
import { Observable } from 'rxjs';
import { Collaboration } from 'src/app/shared/models/collaboration';


@Injectable({
  providedIn: 'root'
})
export class CollaborationService {
  //Init service
  db = getFirestore();
  //collection ref
  colRef = collection(this.db, 'Collaboration');

  constructor(private firebase: Firestore) { }

  addColl(collaboration: Collaboration){
    return addDoc(this.colRef, {...collaboration});

  }

  getAllInfApplicantColl(infId: any): Observable<Collaboration[]>{
    const q = query(this.colRef, where('applicants', 'array-contains', infId) ,orderBy('postDate'));
    return collectionData(q, { idField: 'collId' }) as Observable<Collaboration[]>;
  }

  getAllColl(): Observable<Collaboration[]>{
    const q = query(this.colRef, orderBy('postDate', 'desc'));
    return collectionData(q, { idField: 'collId' }) as Observable<Collaboration[]>;
  }


  getcCollById(collId: string): Observable<Collaboration>{
    const docRef = doc(this.colRef, `${collId}`);
    return docData(docRef, {idField: 'collId'}) as Observable<Collaboration>;
  }

  getApplicantsNum(collId: string): Observable<Collaboration>{
    const docRef = doc(this.colRef, `${collId}/applicants`);
    return docData(docRef, {idField: 'collId'}) as Observable<Collaboration>;
  }

  deleteCollOpp(collId: string){
    const docRef = doc(this.colRef, `${collId}`);
    deleteDoc(docRef);
  }

  updateCollOpp(coll: Collaboration){
    const docRef = doc(this.colRef, `${coll.collId}`);
    return updateDoc(docRef, {...coll}) ;
  }

  updateApplicants(applicantId: string, collId: string){
    const docRef = doc(this.colRef, `${collId}`);
    return updateDoc(docRef, {
      applicants: arrayUnion(applicantId)
    }) ;
  }
  removeApplicants(applicantId: string, collId: string){
    const docRef = doc(this.colRef, `${collId}`);
    return updateDoc(docRef, {
      applicants: arrayRemove(applicantId)
    }) ;
  }

}



