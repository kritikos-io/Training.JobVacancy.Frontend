import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

import { CompanyModel } from '../../../core/models/company.model';
import { CompanyCardComponent } from '../../../shared/ui/cards/company-card';

@Component({
  selector: 'aa-company-cards',
  imports: [NgFor, CompanyCardComponent],
  templateUrl: './company-cards.component.html',
  styleUrl: './company-cards.component.scss'
})
export class CompanyCardsComponent {
  cards: CompanyModel[] = [
    {
      name: 'Tech Corp',
      logoUrl: 'https://via.placeholder.com/100',
      location: 'Athens',
      country: 'Greece',
      isFeatured: true,
      openPositions: 5,
      openPositionsUrl: 'https://techcorp.com/careers'
    },
    {
      name: 'Code Solutions',
      logoUrl: 'https://via.placeholder.com/100',
      location: 'Thessaloniki',
      country: 'Greece',
      isFeatured: false,
      openPositions: 3,
      openPositionsUrl: 'https://codesolutions.com/jobs'
    }
  ];
}
