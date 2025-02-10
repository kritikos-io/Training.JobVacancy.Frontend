import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { FooterComponent } from './shared/ui/footer';
import { HeaderComponent } from './shared/ui/header';

@Component({
  selector: 'aa-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <div class="content">
      <aa-header />
      <div class="main-content">
        <main><router-outlet /></main>
        <aa-footer />
      </div>
    </div>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'job-vacancy-training';
}
