import { Routes } from '@angular/router';
import { FlowerListComponent } from './flower-list/flower-list.component';
import { FlowerDetailsComponent } from './flower-details/flower-details.component';

export const routes: Routes = [
  { path: '', component: FlowerListComponent },
  { path: 'flowers/:id', component: FlowerDetailsComponent },
];
