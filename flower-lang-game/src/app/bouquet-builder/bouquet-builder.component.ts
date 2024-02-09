import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Flower, flowers } from '../flowers';
import { Situation, situations } from '../situations';
import { BouquetService } from '../bouquet.service';
import { ScenarioService } from '../scenario.service';

@Component({
  selector: 'app-bouquet-builder',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bouquet-builder.component.html',
  styleUrls: ['./bouquet-builder.component.css'],
})
export class BouquetBuilderComponent implements OnInit {
  // Initialize the situation, flowers available to choose from, and the bouquet
  situation: Situation = situations[0];
  availableFlowers: Flower[] = flowers;
  bouquet: any[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private bouquetService: BouquetService,
    private scenarioService: ScenarioService
  ) {}

  ngOnInit() {
    // Discard any flowers in the bouquet
    this.bouquetService.discardBouquet();

    // Get the situation id from the current route
    const routeParams = this.route.snapshot.paramMap;
    const situationIdFromRoute = Number(routeParams.get('situationId'));

    // Find the situation that corresponds to the id provided in the route
    const foundSituation = situations.find(
      (situation) => situation.id === situationIdFromRoute
    );

    // Update the current situation
    if (foundSituation) {
      this.situation = foundSituation;
    } else {
      throw new Error('Situation not found');
    }

    // Fetch flower available to choose from for the current situation
    this.availableFlowers = this.bouquetService.getAvailableFlowers(
      this.situation
    );

    // Fetch the current bouquet contents
    this.bouquet = this.bouquetService.getBouquet();
  }

  // Function for adding a flower to the bouquet
  addToBouquet(flower: Flower) {
    this.bouquetService.addToBouquet(flower);
  }

  // Determine what outcome the bouquet will lead to and navigate to it
  navigateToOutcome() {
    const outcomeId = this.scenarioService.determineOutcome(
      this.situation,
      this.bouquet
    );

    // Navigate to the outcome
    this.router.navigateByUrl(`/outcome/${outcomeId}`);
  }
}
