import { Country } from './Country.model';
import { Specialities } from './Specialities';

export interface Collaboration{
  idColl: string;
  enpName: string;
  companyName: string;
  date: Date;
  enpImaje: string;
  appliNum: number;
  colTitla: string;
  specialities: Array<Specialities>;
  country: Country;

}
