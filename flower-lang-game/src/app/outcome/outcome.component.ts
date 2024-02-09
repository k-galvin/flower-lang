import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Outcome, outcomes } from '../outcomes';

@Component({
  selector: 'app-outcome',
  templateUrl: './outcome.component.html',
  styleUrls: ['./outcome.component.css'],
})
export class OutcomeComponent implements OnInit {
  // Initialize with the first outcome
  outcome: Outcome = outcomes[0];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    // Get the outcome id from the current route
    const routeParams = this.route.snapshot.paramMap;
    const outcomeIdFromRoute = Number(routeParams.get('outcomeId'));

    // Find the outcome that corresponds to the id provided in the route
    const foundOutcome = outcomes.find(
      (outcome) => outcome.id === outcomeIdFromRoute
    );

    // Update the current outcome
    if (foundOutcome) {
      this.outcome = foundOutcome;
    } else {
      throw new Error('Outcome not found');
    }
  }

  // Navigate to the next situation
  navigateToSituation(outcome: Outcome) {
    if (outcome.nextSituation === -1) {
      this.router.navigateByUrl('');
    } else {
      this.router.navigateByUrl(`/situation/${outcome.nextSituation}`);
    }
  }
}
