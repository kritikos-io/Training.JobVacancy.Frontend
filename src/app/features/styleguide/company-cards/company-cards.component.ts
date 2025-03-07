import { Component } from '@angular/core';

import { CompanyModel } from '../../../core/models/company.model';
import { CompanyCardComponent } from '../../../shared/ui/cards/company-card';

@Component({
  selector: 'aa-company-cards',
  imports: [CompanyCardComponent],
  templateUrl: './company-cards.component.html',
  styleUrl: './company-cards.component.scss',
})
export class CompanyCardsComponent {
  cards: CompanyModel[] = [
    {
      id: 'unknown',
      name: 'Tech Corp',
      website: 'https://techcorp.com',
      vat: 'GR123456789',
      logoUrl: 'https://via.placeholder.com/100',
      address: {
        country: 'Greece',
        city: 'Athens',
        street: 'Tech Street',
        streetNumber: '10',
        postalCode: '10010',
      },
      isSponsored: true,
      phoneNumber: '+30 210 1234567',
      openPositions: 5,
      openPositionsUrl: 'https://techcorp.com/careers',
    },
    {
      id: 'unknown2',
      name: 'Code Solutions',
      website: 'https://codesolutions.com',
      vat: 'GR987654321',
      logoUrl: 'https://via.placeholder.com/100',
      address: {
        country: 'Greece',
        city: 'Thessaloniki',
        street: 'Code Avenue',
        streetNumber: '25',
        postalCode: '54625',
      },
      isSponsored: false,
      phoneNumber: '+30 2310 765432',
      openPositions: 3,
      openPositionsUrl: 'https://codesolutions.com/jobs',
    },
  ];

  trackByCompany(index: number, company: CompanyModel): string {
    return company.name;
  }
}
