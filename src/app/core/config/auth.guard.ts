import { inject, Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { OidcSecurityService } from 'angular-auth-oidc-client';

import { UserRole } from '../models/role.model';

import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  private readonly auth = inject(OidcSecurityService);

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    if (this.auth.isAuthenticated()) {
      this.authService.checkUserRole();
      const requiredRoles = route.data['role'] as UserRole[];
      if (!this.authService.hasAccess(requiredRoles)) {
        this.router.navigate(['/unauthorized']);
        return false;
      }
      return true;
    } else {
      this.router.navigate(['/unauthorized']);
      return false;
    }
  }
}
