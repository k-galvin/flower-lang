import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { flowers } from '../flowers';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flower-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './flower-list.component.html',
  styleUrl: './flower-list.component.css',
})
export class FlowerListComponent {
  flowers = [...flowers];

  constructor(private router: Router) {}

  navigateToFlowerDetails(flowerId: number) {
    this.router.navigateByUrl(`/flowers/${flowerId}`);
  }

  share() {
    window.alert('The flower has been shared!');
  }
}
