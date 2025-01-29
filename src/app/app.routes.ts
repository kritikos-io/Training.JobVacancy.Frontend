import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'playground', loadComponent: () => import('./playground/playground.component').then(m => m.PlaygroundComponent) },
  { path: '', redirectTo: 'playground', pathMatch: 'full' }
];
