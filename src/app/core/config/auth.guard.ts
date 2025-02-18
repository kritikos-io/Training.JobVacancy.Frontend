import { inject, Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { jwtDecode } from 'jwt-decode';

import { CustomJwtDecoder } from '../models/custom-decode.model';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  private readonly auth = inject(OidcSecurityService);

  private data? = JSON.parse(
    window.localStorage.getItem('0-poc-frontend-training') || ''
  );
  private token = this.data.authnResult.access_token;
  private tokenData = jwtDecode<CustomJwtDecoder>(this.token);
  private resourceRoles: unknown;
  reason = '';

  roles = {
    playground: {
      view_profile: 'view-profile',
    },
    candidates: {
      view_profile: 'view-profile',
      admin: 'administrator',
    },
  };

  constructor(
    private authState: OidcSecurityService,
    private router: Router
  ) {}

  canActivate(): boolean {
    if (this.auth.isAuthenticated()) {
      this.checkUserRole();
      const requiredRoles = Object.values(this.roles.playground);
      if (this.hasAccess(requiredRoles)) {
        this.router.navigate(['/unauthorized']);
        return false;
      }
      return true;
    } else {
      this.router.navigate(['/unauthorized']);
      return false;
    }
  }

  checkUserRole() {
    if (this.token) {
      try {
        this.resourceRoles = this.tokenData.resource_access.account.roles;
      } catch (error) {
        console.error('Invalid token:', error);
        this.router.navigate(['/error']);
      }
    }
  }

  hasAccess(requiredRoles: string[]): boolean {
    const userRoles = this.resourceRoles as string[];
    return requiredRoles.some(role => userRoles.includes(role));
  }
}
