import { AfterViewInit, Component, ElementRef, inject, viewChild } from '@angular/core';

import { SupersetService } from '../services/superset.service';

@Component({
  selector: 'aa-private',
  imports: [],
  templateUrl: './private.component.html',
  styleUrl: './private.component.css'
})
export class PrivateComponent implements AfterViewInit {

  dashboardPlaceholder = viewChild.required<ElementRef<HTMLElement>>('dashboard');
  // dashboardPlaceholder = document.getElementById('dashboard')!;

  superset = inject(SupersetService);

  ngAfterViewInit() {
    console.log('HTML Element', this.dashboardPlaceholder().nativeElement);
    this.superset.embedDashboard('9992d759-90d7-4d2a-b34d-373a8aaa9889', this.dashboardPlaceholder()?.nativeElement)
      // this.superset.embedDashboard('9992d759-90d7-4d2a-b34d-373a8aaa9889', this.dashboardPlaceholder)
      .then(result => console.log('Embedding result', result))
      .catch(error => console.error('Embedding error', error));

  }

}
