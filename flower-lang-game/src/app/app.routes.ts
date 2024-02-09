import { Routes } from '@angular/router';
import { BouquetBuilderComponent } from './bouquet-builder/bouquet-builder.component';
import { OutcomeComponent } from './outcome/outcome.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'situation/:situationId', component: BouquetBuilderComponent },
  { path: 'outcome/:outcomeId', component: OutcomeComponent },
];
