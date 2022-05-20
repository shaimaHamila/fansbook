import { Country } from './Country.model';

export class User{

  uid: string;
  fullName?: string;
  image?: string;
  coverPhoto?: string;
  country?: string[];
  isPayed?: boolean;
  userType?: 'influencer' | 'entrepreneur';
  email?: string;
  phoneNumber?: number;
  bio?: string;
  subTitle?: string;
  website?: string ;
  facebook?: string ;
  linkedin?: string ;
  instagram?: string ;
  tiktok?: string ;
  youtube?: string ;

};
enum UserType{
  entrepreneur,
  influencer
}
