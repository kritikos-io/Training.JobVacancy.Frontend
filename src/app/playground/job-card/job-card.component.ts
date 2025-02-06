import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

import { type JobInfo } from './job.model';

@Component({
  selector: 'aa-job-card',
  imports: [CommonModule, CurrencyPipe, FontAwesomeModule],
  templateUrl: './job-card.component.html',
  styleUrl: './job-card.component.scss',
})
export class JobCardComponent {
  faLocationDot = faLocationDot;
  faBookmark = faBookmark;
  jobData = input.required<JobInfo>();

  onSaved() {
    this.jobData().isSaved = !this.jobData().isSaved;
  }
}
