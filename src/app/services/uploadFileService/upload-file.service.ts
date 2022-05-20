import { Injectable } from '@angular/core';
import { getDownloadURL, getStorage, ref, uploadBytes, uploadString } from 'firebase/storage';


@Injectable({
  providedIn: 'root'
})
export class UploadFileService {
  // Create a root reference
  storage = getStorage();

  constructor() { }

  async uploadUserFile(path: string, file: any, id: any){
    // let url: string;
    // const id = Math.random().toString(35).substring(2);
    // Create a reference to file
    const refImg = ref(this.storage, path+'/'+id);
    // 'file' comes from the Blob or File API
    await uploadBytes(refImg, file).then((data) => {
      console.log('Uploaded successfuly!');
    });

    const imageUrl = await getDownloadURL(refImg);
    return imageUrl;
    // using this function I want to upload the  user image profile and get it's url
  }
}




