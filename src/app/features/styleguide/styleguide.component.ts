import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { CompanyModel } from '../../core/models/company.model';
import { JobInfo } from '../../core/models/job.model';
import { CompanyCardComponent } from '../../shared/ui/cards/company-card';
import { JobCardComponent } from "../../shared/ui/cards/job-card/job-card.component";
// import { IconComponent } from '../../shared/ui/icon';


@Component({
  selector: 'aa-styleguide',
  imports: [CommonModule, JobCardComponent, CompanyCardComponent],
  templateUrl: './styleguide.component.html',
  styleUrl: './styleguide.component.scss'
})
export class StyleguideComponent {

  colors = ['#2A879B', '#F8FAFD', '#8ADFC4'];
  textSizes = [
    { size: 'small', class: 'aa--text-sm' },
    { size: 'medium', class: 'aa--text-base' },
    { size: 'large', class: 'aa--text-lg' }
  ];

  cards: JobInfo[] = [
    {
      id: '1',
      jobStatus: 'FULL-TIME',
      jobTitle: 'Frontend Developer',
      minSalary: 50000,
      maxSalary: 80000,
      companyTitle: 'TechCorp',
      city: 'Athens',
      country: 'Greece',
      isSaved: false,
      companyLogo: 'google-color.png'
    },
    {
      id: '2',
      jobStatus: 'PART-TIME',
      jobTitle: 'UI/UX Designer',
      minSalary: 40000,
      maxSalary: 60000,
      companyTitle: 'DesignStudio',
      city: 'Thessaloniki',
      country: 'Greece',
      isSaved: true,
      companyLogo: 'google-color.png'
    }
  ];

  cards2: CompanyModel[] = [
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

  icons = ['home', 'settings', 'user'];

}
