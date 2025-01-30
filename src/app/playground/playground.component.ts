import { Component } from '@angular/core';

import { JobCardComponent } from './job-card/job-card.component';

@Component({
  selector: 'aa-playground',
  standalone: true,
  imports: [JobCardComponent],
  templateUrl: './playground.component.html',
})
export class PlaygroundComponent {}
