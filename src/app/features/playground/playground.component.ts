import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';

import { CompanyModel } from '../../core/models';
import { CompanyCardComponent } from '../../shared/ui/cards/company-card';
import { JobCardComponent } from '../../shared/ui/cards/job-card';

@Component({
  selector: 'aa-playground',
  standalone: true,
  imports: [JobCardComponent, CompanyCardComponent, AsyncPipe, JsonPipe],
  templateUrl: './playground.component.html',
})
export class PlaygroundComponent {
  private readonly auth = inject(OidcSecurityService);

  userData$ = this.auth.userData$;
  isAuthenticated$ = this.auth.isAuthenticated$;

  company1: CompanyModel = {
    name: 'Acme Inc.',
    location: 'San Francisco, CA',
    country: 'U.S.A.',
    isFeatured: true,
    openPositions: 5,
    openPositionsUrl: '#',
    logoUrl: 'logo.jpg',
  };

  company2: CompanyModel = {
    name: 'Vasko Co',
    location: 'Athens Argyroupoli',
    country: 'Greece',
    isFeatured: false,
    openPositions: 2,
    openPositionsUrl: '#',
    logoUrl: 'logo.jpg',
  };

  company3: CompanyModel = {
    name: 'Genera Co',
    location: 'Athens',
    country: 'Greece',
    isFeatured: true,
    openPositions: 3,
    openPositionsUrl: '#',
    logoUrl: 'logo.jpg',
  };
}
