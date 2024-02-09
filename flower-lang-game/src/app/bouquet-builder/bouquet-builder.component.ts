import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Flower, flowers } from '../flowers';
import { Router } from '@angular/router';
import { BouquetService } from '../bouquet.service';
import { Situation, situations } from '../situations';
import { SituationService } from '../situation.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bouquet-builder',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bouquet-builder.component.html',
  styleUrl: './bouquet-builder.component.css',
})
export class BouquetBuilderComponent implements OnInit {
  flower: Flower | undefined;
  flowers = [...flowers];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private bouquetService: BouquetService,
    private situationService: SituationService
  ) {}

  stems = this.bouquetService.getStems();
  situation: Situation = this.situationService.getSituation();

  addToBouquet(flower: Flower) {
    this.bouquetService.addToBouquet(flower);
  }

  ngOnInit() {
    // First get the flower id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const flowerIdFromRoute = Number(routeParams.get('id'));

    // Find the flower that corresponds with the id provided in route.
    this.flower = flowers.find((flower) => flower.id === flowerIdFromRoute);
  }

  navigateToFlowerDetails(flowerId: number) {
    this.router.navigateByUrl(`/flowers/${flowerId}`);
  }

  share() {
    window.alert('The flower has been shared!');
  }
}
