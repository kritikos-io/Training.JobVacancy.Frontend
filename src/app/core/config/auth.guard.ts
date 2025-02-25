import { inject, Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { map, Observable } from 'rxjs';

import { UserRole } from '../models/role.model';

import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  private readonly auth = inject(OidcSecurityService);

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.auth.getAccessToken().pipe(
      map(token => {
        const requiredRoles = route.data['role'] as UserRole[];
        const hasAccess = token && this.authService.hasAccess(requiredRoles);
        if (!hasAccess) {
          this.router.navigate(['/unauthorized']);
        }
        return token ? Boolean(this.authService.hasAccess(requiredRoles)) : false;
      })
    );
  }
}
