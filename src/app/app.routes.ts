import { Routes } from '@angular/router';
import { autoLoginPartialRoutesGuard } from 'angular-auth-oidc-client';

import { AuthGuard } from './core/config/auth.guard';
import { UserRole } from './core/models';
import { ButtonsComponent } from './features/styleguide/buttons/buttons.component';
import { ColorsComponent } from './features/styleguide/colors/colors.component';
import { CompanyCardsComponent } from './features/styleguide/company-cards/company-cards.component';
import { IconsComponent } from './features/styleguide/icons/icons.component';
import { JobCardsComponent } from './features/styleguide/job-cards/job-cards.component';
import { TextsizesComponent } from './features/styleguide/textsizes/textsizes.component';

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
    children: [
      { path: 'colors', component: ColorsComponent },
      { path: 'textsizes', component: TextsizesComponent },
      { path: 'buttons', component: ButtonsComponent },
      { path: 'jobcards', component: JobCardsComponent },
      { path: 'companycards', component: CompanyCardsComponent },
      { path: 'icons', component: IconsComponent },
    ]
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
