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

  superset = inject(SupersetService);

  ngAfterViewInit() {
    const element = this.dashboardPlaceholder()?.nativeElement;

    this.superset.embedDashboard('4788b8b1-b735-4dca-90d4-3bf952f82c10', element)
      .then(result => {
        console.log('Embedding result', result);
        console.log(element.innerHTML);

        const iframe = element.querySelector('iframe');
        if (iframe) {
          iframe.style.width = '1500px';
          iframe.style.height = '800px';
        }
      })
      .catch(error => console.error('Embedding error', error));

  }

}
