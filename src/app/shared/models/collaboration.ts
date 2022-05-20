import { Country } from './Country.model';
import { Entrepreneur } from './entrepreneur';
import { Influencer } from './influencer';
import { Specialities } from './Specialities';

export class Collaboration{
  collId: string;
  enpId: string;
  applicants: string[];
  colTitle: string;
  colDescription: string;
  specialties: Array<string>;
  country: string;
  postDate: any;


}
