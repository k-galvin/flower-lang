import { Component } from '@angular/core';

import { flowers } from '../flowers';

@Component({
  selector: 'app-flower-list',
  templateUrl: './flower-list.component.html',
  styleUrls: ['./flower-list.component.css'],
})
export class FlowerListComponent {
  flowerss = [...flowers];

  share() {
    window.alert('The flower has been shared!');
  }
}
