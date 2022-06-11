import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  arrayUnion, collection,
  collectionData, docData,
  deleteDoc, doc, Firestore,
  updateDoc, arrayRemove, query, orderBy
} from '@angular/fire/firestore';
import { addDoc, getDocs, where } from 'firebase/firestore';
import { observable, Observable } from 'rxjs';
import { Experience } from 'src/app/shared/models/Experience';
import { Influencer } from 'src/app/shared/models/influencer';

@Injectable({
  providedIn: 'root'
})
export class InfService {

  constructor(
    private firestore: Firestore,
    public http: HttpClient,
    ) { }

  //Add Influencer Experience
  async addInfExp(newExperience: Experience){
    const expCollRef = collection(this.firestore, `Experience`);
    await addDoc(expCollRef,{...newExperience});
  }

  //Delete Influencer Experience
  async removeInfExp(expId: any){
    const expDocRef = doc(this.firestore, `Experience/${expId}`);
    await deleteDoc(expDocRef);
  }

  //Update Influencer Experience
  async updateInfExp(newExperience: Experience){
    const expDocRef = doc(this.firestore, `Experience/${newExperience.idExp}`);
    return await updateDoc(expDocRef,{...newExperience});
  }
  //get Influencer Experiences
  getInfExp(idInf: any): Observable<Experience[]>{
    const expCollRef = collection(this.firestore, `Experience`);
    const q = query(expCollRef, where('idInf', '==', idInf), orderBy('createdAt'));

    return collectionData(q, {idField: 'idExp'})as Observable<Experience[]>;
  }

  //gET all Influencers Experiences
   getAllInfExp(): Observable<Experience[]>{
    const expCollRef = collection(this.firestore, `Experience`);
    return  collectionData(expCollRef, {idField: 'idExp'}) as Observable<Experience[]>;
  }

  // Update influencer data
  async updateInf(inf: Influencer){
    const infDocRef = doc(this.firestore, `Influencer/${inf.idInf}`);
    await updateDoc(infDocRef, {...inf});
  };

    // Update influencer general info
    async updateInfInfo(idInf: any, country: string, phoneNumber: string, subTitle: string, fullName: string){
      const infDocRef = doc(this.firestore, `Influencer/${idInf}`);
      await updateDoc(infDocRef, {
        phoneNumber,
        country,
        subTitle,
        fullName
      });
    };
    // Update influencer bio
    async updateInfBio(idInf: any, newBio: string){
      const infDocRef = doc(this.firestore, `Influencer/${idInf}`);
      await updateDoc(infDocRef, {
        bio: newBio
      });
    };

    // Update influencer specialties
    async updateInfSpecialties(idInf: any, newSpecialties: string[]){
      const infDocRef = doc(this.firestore, `Influencer/${idInf}`);
      //console.log(newSpecialties);
      await updateDoc(infDocRef, {
        specialties: newSpecialties
      });
    };

    // Update influencer minBudget
    async updateInfMinBudget(idInf: any, newMinBudget: string){
      const infDocRef = doc(this.firestore, `Influencer/${idInf}`);
      await updateDoc(infDocRef, {
        minBudget: newMinBudget
      });
    };

    // Update influencer Socia lLinks
    async updateInfSocialLinks(
      idInf: any, instagram: string, facebook: string,
      youtube: string, linkedin: string, tiktok: string, website: string)
      {
      const infDocRef = doc(this.firestore, `Influencer/${idInf}`);
      await updateDoc(infDocRef, {
        instagram,
        facebook,
        youtube,
        linkedin,
        tiktok,
        website,

      });
    };

  //Update profile photo
  async updateProfilePic(idInf: any, newPic: string){
    const infDocRef = doc(this.firestore, `Influencer/${idInf}`);
    await updateDoc(infDocRef, {
      image: newPic
    });
  }
  //Update cover photo
  async updateCoverPic(idInf: any, newPic: string){
    const infDocRef = doc(this.firestore, `Influencer/${idInf}`);
    await updateDoc(infDocRef, {
      coverPhoto: newPic
    });
  }

  //Delete Influencerc
  async deleteInf(infId: string){
    const infDocRef = doc(this.firestore, `Influencer/${infId}`);
    await deleteDoc(infDocRef);
  }

  //Influencer list
  getInfList(): Observable<Influencer[]>{
    const infRef = collection(this.firestore, 'Influencer');
    return collectionData(infRef, {idField: 'uid'}) as Observable<Influencer[]>;
  };

  // Get influencer by id
   getInfById(uid: string): Observable<Influencer>{
    const infDocRef = doc(this.firestore, `Influencer/${uid}`);
    return docData(infDocRef, {idField: 'uid'}) as Observable<Influencer>;
  }

  instagramSyncData(inf: string) {
    // THIS FNC CALCULATES ENGAGEMENT RATE AND UPDATES IT

    // try {
    //   if (inf.instagram) {
    //     return;
    //   }
    // } catch (error) {
    //   return;
    // }

    this.http
      .get(
        `https://instagram.com/${inf}?__a=1`
        // `https://instagram.com/shopcom.india?__a=1`
      )
      .subscribe(
        (data: any) => {
          console.log('INSTA PUBLIC DATA', data);

          const followers = data.graphql.user.edge_followed_by.count;
          console.log(followers);
          //inf.followers = followers;

          //this.updateInfluecerData();
          // engagementRate = parseInt(engagementRate);
        },
        (err) => {
          console.log('ERROR INSTAGRAM SYNC', err);
          console.log(err);
        }
      );
  }

}
