import { Flower } from './flowers';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FlowersService {
  bouquet: Flower[] = [];
  constructor() {}

  addToBouquet(flower: Flower) {
    this.bouquet.push(flower);
  }

  getBouquet() {
    return this.bouquet;
  }

  discardBouquet() {
    this.bouquet = [];
    return this.bouquet;
  }
}
