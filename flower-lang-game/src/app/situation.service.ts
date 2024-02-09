import { BouquetService } from './bouquet.service';
import { Situation } from './situations';
// import current situation
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
    flowers: [1, 3, 5, 9, 23, 24],
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

  constructor() {}
}
