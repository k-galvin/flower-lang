import { Outcome, outcomes } from './outcomes';
import { Situation } from './situations';
import { Injectable } from '@angular/core';
import { Flower } from './flowers';

@Injectable({
  providedIn: 'root',
})
export class OutcomeService {
  // Initial outcome
  outcome: Outcome = {
    id: 1,
    name: 'Successful Courtship',
    description: 'Your crush accepts the court and a marriage is arranged.',
    nextSituation: 2,
  };

  // Determine what outcome the bouquet will lead too
  determineOutcome(situation: Situation, bouquet: Flower[]) {
    for (let flower of bouquet) {
      if (!flower.positive) {
        this.outcome = outcomes[situation.badOutcome];
      } else {
        this.outcome = outcomes[situation.goodOutcome];
      }
    }
    return this.outcome.id;
  }

  constructor() {}
}
