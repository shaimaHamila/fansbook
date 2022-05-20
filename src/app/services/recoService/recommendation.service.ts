import { Injectable } from '@angular/core';
import { docData, Firestore, getDocs, updateDoc } from '@angular/fire/firestore';
import { addDoc, collection, deleteDoc, doc, getDoc, query, where } from 'firebase/firestore';
import { collectionData } from 'rxfire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Recommendation } from 'src/app/shared/models/Recommendation';

@Injectable({
  providedIn: 'root'
})
export class RecommendationService {

  constructor(
    private firestore: Firestore,
  ) { }


  //Add  recommmendatin
  async addRecommendation(recommendation: Recommendation){
    const recCollRef = collection(this.firestore, 'Recommendation');
    await addDoc(recCollRef, {...recommendation});
  }

  //Update recommendation
  async updateRecommendation(idRec: any, starNb: string ,recommandation: string){
    const recDocRef = doc(this.firestore, `Recommendation/${idRec}`);
    await updateDoc(recDocRef, {
      starNb,
      recommandation
    });
  }

  //Get recommendation
  getRecoById(idRec: any): Observable<Recommendation>{
    const recDocRef = doc(this.firestore, `Recommendation/${idRec}`);
    return docData(recDocRef, {idField: 'idRec'}) as Observable<Recommendation>;
  }

  //Get specific inf recmmendation's
  getInfReco(idInf: any): Observable<Recommendation[]>{
    const recCollRef = collection(this.firestore, `Recommendation`);
    const q = query(recCollRef, where('idInf', '==', idInf));
    return collectionData(q, {idField: 'idRec'}) as Observable<Recommendation[]>;
  }

  //Get specific inf recmmendation
  getInfEnpReco(idInf: any, idEnp: any): Observable<Recommendation[]>{
    const recCollRef = collection(this.firestore, `Recommendation`);
    const q = query(recCollRef, where('idInf', '==', idInf), where('idEnp', '==', idEnp));
    return collectionData(q, {idField: 'idRec'}) as Observable<Recommendation[]>;

  }


  //Delete a recmmendation
  async deleteReco(idRec: any){
    const recDocRef = doc(this.firestore, `Recommendation/${idRec}`);
    await deleteDoc(recDocRef);
  }
}
