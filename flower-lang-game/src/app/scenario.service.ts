import { Outcome, outcomes } from './outcomes';
import { Situation } from './situations';
import { Injectable } from '@angular/core';
import { Flower } from './flowers';

@Injectable({
  providedIn: 'root',
})
export class ScenarioService {
  // Initial outcome
  outcome: Outcome = outcomes[0];

  // Determine what outcome the bouquet will lead too
  determineOutcome(situation: Situation, bouquet: Flower[]) {
    for (let flower of bouquet) {
      if (!flower.positive) {
        this.outcome = outcomes[situation.badOutcomeIndex];
      } else {
        this.outcome = outcomes[situation.goodOutcomeIndex];
      }
    }
    return this.outcome.id;
  }

  constructor() {}
}
