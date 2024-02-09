import { Flower, flowers } from './flowers';
import { Situation } from './situations';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BouquetService {
  // Initialize an empty bouquet
  bouquet: Flower[] = [];

  // Get the flowers available for the current situation
  getAvailableFlowers(situation: Situation) {
    const availableFlowers = [];

    for (const id of situation.flowerIds) {
      const foundFlower = flowers.find((flower) => flower.id === id);
      if (foundFlower) {
        availableFlowers.push(foundFlower);
      }
    }

    return availableFlowers;
  }

  // Add a selected flower to the bouquet
  addToBouquet(flower: Flower) {
    // Check if the bouquet already contains the flower
    if (!this.bouquet.find((f) => f.id === flower.id)) {
      // Check if the maximum number of flowers has been reached
      if (this.bouquet.length < 3) {
        this.bouquet.push(flower);
      } else {
        console.log('Maximum number of stems reached.');
      }
    } else {
      console.log('The flower is already in the bouquet.');
    }
  }

  // Get the contents of the bouquet
  getBouquet() {
    return this.bouquet;
  }

  // Empty the bouquet
  discardBouquet() {
    this.bouquet = [];
    return this.bouquet;
  }

  constructor() {}
}
