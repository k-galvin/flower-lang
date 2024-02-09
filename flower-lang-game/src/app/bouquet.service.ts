import { Flower } from './flowers';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BouquetService {
  stems: Flower[] = [];

  addToBouquet(flower: Flower) {
    // Check if the bouquet already contains the flower
    if (!this.stems.find((f) => f.id === flower.id)) {
      // Check if the maximum number of stems has been reached
      if (this.stems.length < 3) {
        this.stems.push(flower);
      } else {
        console.log('Maximum number of stems reached.');
      }
    } else {
      console.log('The flower is already in the bouquet.');
    }
  }

  getStems() {
    return this.stems;
  }

  discardBouquet() {
    this.stems = [];
    return this.stems;
  }

  constructor() {}
}
