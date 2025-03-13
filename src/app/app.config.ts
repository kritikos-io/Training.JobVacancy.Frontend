import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import Blue from '@primeng/themes/aura';
import {
  AbstractSecurityStorage,
  DefaultLocalStorageService,
  provideAuth,
  withAppInitializerAuthCheck,
  authInterceptor,
} from 'angular-auth-oidc-client';
import { providePrimeNG } from 'primeng/config';

import { routes } from './app.routes';
import { oidcConfig } from './core/config';

export const appConfig: ApplicationConfig = {
  providers: [
    providePrimeNG({
      theme: {
        preset: Blue,
        options: {
          darkModeSelector: '.my-app-dark',
        },
      },
    }),
    provideAnimationsAsync(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(withInterceptors([authInterceptor()])),
    provideRouter(routes),
    provideAuth(
      {
        config: oidcConfig,
      },
      withAppInitializerAuthCheck()
    ),

    {
      provide: AbstractSecurityStorage,
      useClass: DefaultLocalStorageService,
    },
  ],
};
