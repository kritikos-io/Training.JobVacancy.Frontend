import { Routes } from '@angular/router';
import { autoLoginPartialRoutesGuard } from 'angular-auth-oidc-client';

import { AuthGuard } from './core/config/auth.guard';
import { UserRole } from './core/models';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  {
    path: 'home',
    loadComponent: () => import('./features/home').then(c => c.HomeComponent),
  },
  {
    path: 'playground',
    canActivate: [autoLoginPartialRoutesGuard, AuthGuard],
    data: {
      role: [UserRole.VIEW_PROFILE],
    },
    loadComponent: () => import('./features/playground').then(c => c.PlaygroundComponent),
  },
  {
    path: 'styleguide',
    loadComponent: () => import('./features/styleguide/styleguide.component').then(c => c.StyleguideComponent),
  },
  {
    path: 'company/create',
    canActivate: [autoLoginPartialRoutesGuard, AuthGuard],
    data: {
      role: [UserRole.VIEW_PROFILE],
    },
    loadComponent: () =>
      import('./features/company-create').then(c => c.CompanyCreateComponent),
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

  { path: '**', redirectTo: 'error' },
];
