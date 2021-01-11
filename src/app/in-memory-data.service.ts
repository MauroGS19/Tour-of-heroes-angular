import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Dr Nice',image:"https://awoiaf.westeros.org/images/thumb/2/22/Rhaegar_twoiaf.jpg/320px-Rhaegar_twoiaf.jpg" },
      { id: 12, name: 'Narco',image:"https://awoiaf.westeros.org/images/thumb/2/22/Rhaegar_twoiaf.jpg/320px-Rhaegar_twoiaf.jpg" },
      { id: 13, name: 'Bombasto',image:"https://awoiaf.westeros.org/images/thumb/2/22/Rhaegar_twoiaf.jpg/320px-Rhaegar_twoiaf.jpg" },
      { id: 14, name: 'Celeritas',image:"https://awoiaf.westeros.org/images/thumb/2/22/Rhaegar_twoiaf.jpg/320px-Rhaegar_twoiaf.jpg" },
      { id: 15, name: 'Magneta',image:"https://awoiaf.westeros.org/images/thumb/2/22/Rhaegar_twoiaf.jpg/320px-Rhaegar_twoiaf.jpg" },
      { id: 16, name: 'RubberMan',image:"https://awoiaf.westeros.org/images/thumb/2/22/Rhaegar_twoiaf.jpg/320px-Rhaegar_twoiaf.jpg" },
      { id: 17, name: 'Dynama',image:"https://awoiaf.westeros.org/images/thumb/2/22/Rhaegar_twoiaf.jpg/320px-Rhaegar_twoiaf.jpg" },
      { id: 18, name: 'Dr IQ',image:"https://awoiaf.westeros.org/images/thumb/2/22/Rhaegar_twoiaf.jpg/320px-Rhaegar_twoiaf.jpg" },
      { id: 19, name: 'Magma',image:"https://awoiaf.westeros.org/images/thumb/2/22/Rhaegar_twoiaf.jpg/320px-Rhaegar_twoiaf.jpg" },
      { id: 20, name: 'Tornado',image:"https://awoiaf.westeros.org/images/thumb/2/22/Rhaegar_twoiaf.jpg/320px-Rhaegar_twoiaf.jpg" }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}