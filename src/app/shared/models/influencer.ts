import { Country } from'./Country.model';
import { Experience } from './Experience';
import { Gallery } from './Gallery';
import { Specialities } from './Specialities';
import { User } from './User';

export class Influencer extends User{
    idInf: string;
    galory?: Gallery;
    specialties: string[];
    gender: string;
    minBudget: number;
    followers: string;
};
