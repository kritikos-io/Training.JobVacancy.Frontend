import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'card', loadComponent: () => import('./playground/company-card/company-card.component').then(m => m.CompanyCardComponent) },
  { path: '', redirectTo: 'card', pathMatch: 'full' }
];
