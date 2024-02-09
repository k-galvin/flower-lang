import { Situation } from './situations';
import { flowers } from './flowers';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SituationService {
  // Initial situation
  situation: Situation = {
    id: 1,
    name: 'Crush',
    description: 'Build a bouquet to express your feelings for your crush.',
    type: 'romantic',
    flowerIds: [1, 3, 5, 9, 23, 24],
    goodOutcome: 1,
    badOutcome: 2,
  };

  getSituation() {
    return this.situation;
  }

  // Update to the next situation
  updateSituation(situation: Situation) {
    this.situation = situation;
  }

  // Get the flowers available for the situation
  getSituationFlowers(situation: Situation) {
    const situationFlowers = [];

    for (const id of situation.flowerIds) {
      const foundFlower = flowers.find((flower) => flower.id === id);
      if (foundFlower) {
        situationFlowers.push(foundFlower);
      }
    }

    return situationFlowers;
  }

  constructor() {}
}
