import { Component } from '@angular/core';

import { FooterComponent } from './footer/footer.component';
import { JobCardComponent } from './job-card/job-card.component';

@Component({
  selector: 'aa-playground',
  standalone: true,
  imports: [FooterComponent,JobCardComponent],
  templateUrl: './playground.component.html',
})
export class PlaygroundComponent {}
