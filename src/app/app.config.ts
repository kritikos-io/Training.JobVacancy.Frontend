import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import {
  AbstractSecurityStorage,
  DefaultLocalStorageService,
  provideAuth,
  withAppInitializerAuthCheck,
  authInterceptor,
} from 'angular-auth-oidc-client';

import { routes } from './app.routes';
import { oidcConfig } from './core/config';

export const appConfig: ApplicationConfig = {
  providers: [
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
