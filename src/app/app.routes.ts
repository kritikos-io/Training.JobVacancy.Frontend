import { Routes } from '@angular/router';
import { autoLoginPartialRoutesGuard } from 'angular-auth-oidc-client';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  {
    path: 'home',
    loadComponent: () => import('./features/home').then(c => c.HomeComponent),
  },
  {
    path: 'superset-public',
    loadComponent: () => import('./features/superset/public/public.component').then(c => c.PublicComponent),
  },
  {
    path: 'playground',
    canActivate: [autoLoginPartialRoutesGuard],
    loadComponent: () => import('./features/playground').then(c => c.PlaygroundComponent),
  },

  { path: '**', redirectTo: 'home' },
];
