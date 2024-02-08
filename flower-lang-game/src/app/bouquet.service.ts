import { Flower } from './flowers';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BouquetService {
  stems: Flower[] = [];

  addToBouquet(flower: Flower) {
    this.stems.push(flower);
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
