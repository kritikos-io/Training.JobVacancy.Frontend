import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

import { User, UserRole } from '../models/role.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private data? = JSON.parse(
    window.localStorage.getItem('0-poc-frontend-training') || ''
  );
  private token = this.data.authnResult.access_token;
  private tokenData = jwtDecode<User>(this.token);
  private resourceRoles: unknown;

  constructor(private router: Router) {}

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

  hasAccess(requiredRoles: UserRole[]): boolean {
    const userRoles = this.resourceRoles as UserRole[];
    for (const role of requiredRoles) {
      if (!userRoles.includes(role)) {
        return false;
      }
    }
    return true;
  }
}
