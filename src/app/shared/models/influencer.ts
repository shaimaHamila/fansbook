import { Country } from'./Country.model';
import { Experience } from './Experience';
import { Gallery } from './Gallery';
import { Specialities } from './Specialities';
import { User } from './User';

export class Influencer extends User{

    language?: string;
    galory?: Gallery;
    experience?: Experience[];
    specialities: Specialities[];
    gender: string;


};
