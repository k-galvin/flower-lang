import { Routes } from '@angular/router';
import { BouquetBuilderComponent } from './bouquet-builder/bouquet-builder.component';
import { OutcomeComponent } from './outcome/outcome.component';

export const routes: Routes = [
  { path: '', redirectTo: '/situation/1', pathMatch: 'full' },
  { path: 'situation/:situationId', component: BouquetBuilderComponent },
  { path: 'outcome/:outcomeId', component: OutcomeComponent },
];
