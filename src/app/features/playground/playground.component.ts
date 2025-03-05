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
    website: 'site.com',
    vat: '1512512516',
    address: {
      country: 'U.S.A.',
      city: 'San Francisco',
      street: 'Street',
      streetNumber: '69',
      postalCode: '42069',
    },
    isSponsored: true,
    phoneNumber: '1234567890',
    openPositions: 5,
    openPositionsUrl: '#',
    logoUrl: 'logo.jpg',
  };

  company2: CompanyModel = {
    name: 'Vasko Co',
    website: 'site.com',
    vat: '1512512516',
    address: {
      country: 'Greece',
      city: 'Argyroupoli',
      street: 'Street',
      streetNumber: '69',
      postalCode: '42069',
    },
    isSponsored: true,
    phoneNumber: '1234567890',
    openPositions: 5,
    openPositionsUrl: '#',
    logoUrl: 'logo.jpg',
  };

  company3: CompanyModel = {
    name: 'Genera Co',
    website: 'site.com',
    vat: '1512512516',
    address: {
      country: 'Greece',
      city: 'Athens',
      street: 'Street',
      streetNumber: '69',
      postalCode: '42069',
    },
    isSponsored: false,
    phoneNumber: '1234567890',
    openPositions: 5,
    openPositionsUrl: '#',
    logoUrl: 'logo.jpg',
  };
}
