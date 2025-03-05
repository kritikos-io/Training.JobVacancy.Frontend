import { Routes } from '@angular/router';

export const styleguideRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./styleguide.component').then(c => c.StyleguideComponent),
    children: [
      {
        path: 'colors',
        loadComponent: () =>
          import('./colors/colors.component').then(m => m.ColorsComponent),
      },
      {
        path: 'textsizes',
        loadComponent: () =>
          import('./textsizes/textsizes.component').then(m => m.TextsizesComponent),
      },
      {
        path: 'buttons',
        loadComponent: () =>
          import('./buttons/buttons.component').then(m => m.ButtonsComponent),
      },
      {
        path: 'jobcards',
        loadComponent: () =>
          import('./job-cards/job-cards.component').then(m => m.JobCardsComponent),
      },
      {
        path: 'companycards',
        loadComponent: () =>
          import('./company-cards/company-cards.component').then(
            m => m.CompanyCardsComponent
          ),
      },
      {
        path: 'icons',
        loadComponent: () =>
          import('./icons/icons.component').then(m => m.IconsComponent),
      },
    ],
  },
];
