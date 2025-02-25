import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { jwtDecode } from 'jwt-decode';

import { User, UserRole } from '../models/role.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly auth = inject(OidcSecurityService);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private resourceRoles: any;

  private token = this.auth.getAccessToken().subscribe(token => {
    if (token) {
      try {
        const tokenData = jwtDecode<User>(token);
        this.resourceRoles = tokenData.resource_access.account.roles;
      } catch (error) {
        console.error('Invalid token:', error);
        this.router.navigate(['/error']);
      }
    }
  });

  constructor(private router: Router) {}

  hasAccess(requiredRoles: UserRole[]): boolean {
    return requiredRoles.every(role => this.resourceRoles.includes(role));
  }
}
