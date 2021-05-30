import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ISchool } from '../models/ISchool';
import { IStudent } from '../models/IStudent';

const dummyStudents: IStudent[] = [
  {
    id: 1,
    name: 'Arslan'
  },
  {
    id: 2,
    name: 'Asim'
  },
  {
    id: 3,
    name: 'Usman'
  }
];

const dummySchools: ISchool[] = [
  {
    id: 1,
    name: 'SPS',
    students: [dummyStudents[0], dummyStudents[2]]
  },
  {
    id: 2,
    name: 'GMS',
    students: [dummyStudents[1]]
  }
]

@Injectable()
export class DataProviderService {
  getStudents(): Observable<IStudent[]> {
    return of(dummyStudents);
  }

  getSchools(): Observable<ISchool[]> {
    return of(dummySchools);
  }
}
