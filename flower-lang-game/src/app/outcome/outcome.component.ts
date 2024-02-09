import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Outcome, outcomes } from '../outcomes';

@Component({
  selector: 'app-outcome',
  templateUrl: './outcome.component.html',
  styleUrls: ['./outcome.component.css'],
})
export class OutcomeComponent implements OnInit {
  outcome: Outcome | undefined;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    // First get the outcome id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const outcomeIdFromRoute = Number(routeParams.get('outcomeId'));

    // Find the outcome that corresponds to the id provided in the route.
    this.outcome = outcomes.find(
      (outcome) => outcome.id === outcomeIdFromRoute
    );
  }

  // Navigate to the next situation
  nextSituation(outcome: Outcome | undefined) {
    if (outcome) {
      if (outcome.nextSituation === -1) {
        this.router.navigateByUrl(`/situation/1`);
      } else {
        this.router.navigateByUrl(`/situation/${outcome.nextSituation}`);
      }
    }
  }
}
