import { Component } from '@angular/core';

import { CompanyCardComponent } from "./company-card/company-card.component";
import { Company } from './models/company';
import { FooterComponent } from './footer/footer.component';
import { JobCardComponent } from './job-card/job-card.component';

@Component({
  selector: 'aa-playground',
  standalone: true,
  imports: [FooterComponent,JobCardComponent,CompanyCardComponent],
  templateUrl: './playground.component.html',
})
export class PlaygroundComponent {

  company1: Company = {
    name: 'Acme Inc.',
    location: 'San Francisco, CA',
    country: 'U.S.A.',
    isFeatured: true,
    openPositions: 5,
    openPositionsUrl: '#',
    logoUrl: 'logo.jpg'
  };

  company2: Company = {
    name: 'Vasko Co',
    location: 'Athens Argyroupoli',
    country: 'Greece',
    isFeatured: false,
    openPositions: 2,
    openPositionsUrl: '#',
    logoUrl: 'logo.jpg'
  };

  company3: Company = {
    name: 'Genera Co',
    location: 'Athens',
    country: 'Greece',
    isFeatured: true,
    openPositions: 3,
    openPositionsUrl: '#',
    logoUrl: 'logo.jpg'
  };

}
