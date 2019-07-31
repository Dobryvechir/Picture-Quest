import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Quest } from './models/quest.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const quests = [
      { id: 11, name: 'Mr. Nice', category: 'we@gmail.com',  subcategory:'2' ,description:'Nice'  },
      { id: 12, name: 'Narco', category: 'wesda2@gmail.com',  subcategory:'3' ,description:'Cool'},
      { id: 20, name: 'Tornado', category: 'w1212e@gmail.com',  subcategory:'45' ,description:'Qwe'}
    ];
return {quests};

}
  genId(quests: Quest[]): number {
    return quests.length > 0 ? Math.max(...quests.map(quest => quest.id)) + 1 : 11;
  }
} 

