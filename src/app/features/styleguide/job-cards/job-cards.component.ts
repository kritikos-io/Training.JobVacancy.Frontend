import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

import { JobInfo } from '../../../core/models/job.model';
import { JobCardComponent } from '../../../shared/ui/cards/job-card';

@Component({
  selector: 'aa-job-cards',
  imports: [NgFor, JobCardComponent,],
  templateUrl: './job-cards.component.html',
  styleUrl: './job-cards.component.scss'
})
export class JobCardsComponent {
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
}
