import { Component, inject, input } from '@angular/core';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGlobe, faLocationDot } from '@fortawesome/free-solid-svg-icons'

import { Company } from '../models/company';

@Component({
  selector: 'aa-company-card',
  imports: [FontAwesomeModule],
  templateUrl: './company-card.component.html',
  styleUrl: './company-card.component.scss'
})
export class CompanyCardComponent {

  companyData = input.required<Company>();

  router = inject(Router);

  faGlobe = faGlobe;
  faLocationDot = faLocationDot;

  onOpenPositions() {
    console.log('Open positions clicked');
    this.router.navigateByUrl('#');
  }

}
