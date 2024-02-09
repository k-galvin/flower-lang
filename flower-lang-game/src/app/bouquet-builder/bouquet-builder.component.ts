import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BouquetService } from '../bouquet.service';
import { Situation, situations } from '../situations';
import { SituationService } from '../situation.service';
import { Flower, flowers } from '../flowers';
import { OutcomeService } from '../outcome.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bouquet-builder',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bouquet-builder.component.html',
  styleUrls: ['./bouquet-builder.component.css'],
})
export class BouquetBuilderComponent implements OnInit {
  situation: Situation = situations[0];
  situationFlowers: Flower[] = flowers;
  stems: any[] = []; // Assuming the data type for stems

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private bouquetService: BouquetService,
    private situationService: SituationService,
    private outcomeService: OutcomeService
  ) {}

  ngOnInit() {
    this.bouquetService.discardBouquet();

    // First get the situation id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const situationIdFromRoute = Number(routeParams.get('situationId'));
    console.log('Situation ID from route:', situationIdFromRoute);

    // Find the situation that corresponds to the id provided in the route.
    const foundSituation = situations.find(
      (situation) => situation.id === situationIdFromRoute
    );
    console.log('Found Situation:', foundSituation);

    if (foundSituation) {
      this.situation = foundSituation;
    } else {
      throw new Error('Situation not found');
    }

    // Fetch flowers for the current situation
    this.situationFlowers = this.situationService.getSituationFlowers(
      this.situation
    );

    // Fetch stems
    this.stems = this.bouquetService.getStems();
  }

  addToBouquet(flower: Flower) {
    this.bouquetService.addToBouquet(flower);
  }

  // Determine what outcome the bouquet will lead to
  determineOutcome() {
    // Assuming you have a method to determine the outcome in the BouquetService
    const outcomeId = this.outcomeService.determineOutcome(
      this.situation,
      this.stems
    );

    this.router.navigateByUrl(`/outcome/${outcomeId}`);
  }

  share() {
    window.alert('The flower has been shared!');
  }
}
