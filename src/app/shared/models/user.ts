import { Country } from './Country.model';

export class User{

  uid: string;
  image: string;
  country: Country;
  isPayed?: boolean;
  userType: UserType;
  email: string;
  phoneNumber: number;
  socialLinks?: string[];
  bio?: string;

};
enum UserType{
  entrepreneur,
  influencer
}
