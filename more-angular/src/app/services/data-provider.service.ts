import { Injectable } from '@angular/core';
import { IPerson } from '../models/IPerson'

@Injectable({
  providedIn: 'root'
})
export class DataProviderService {

  constructor() { }

  getPersons(): IPerson[] {
    return [
      {
        id: 1,
        name: 'Arslan',
        address: 'Mughal Pura'
      },
      {
        id: 2,
        name: 'Asim',
        address: 'Mughal Pura'
      },
      {
        id: 3,
        name: 'Usman',
        address: 'Mughal Pura'
      }
    ]
  }

  getPerson(id: number): IPerson | undefined {
    return this.getPersons().find(p => p.id === id);
  }
}
