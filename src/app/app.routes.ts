import { Routes } from '@angular/router';
import { autoLoginPartialRoutesGuard } from 'angular-auth-oidc-client';

import { AuthGuard } from './core/config/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  {
    path: 'home',
    loadComponent: () => import('./features/home').then(c => c.HomeComponent),
  },
  {
    path: 'playground',
    canActivate: [autoLoginPartialRoutesGuard, AuthGuard],
    loadComponent: () => import('./features/playground').then(c => c.PlaygroundComponent),
  },
  {
    path: 'unauthorized',
    canActivate: [],
    loadComponent: () =>
      import('./features/unauthorized').then(c => c.UnauthorizedComponent),
  },
  {
    path: 'error',
    canActivate: [],
    loadComponent: () => import('./features/error').then(c => c.ErrorComponent),
  },

  { path: '**', redirectTo: 'home' },
];
