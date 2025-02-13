import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './shared/ui/header';
import { ToolbarComponent } from './shared/ui/header/toolbar';

@Component({
  selector: 'aa-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ToolbarComponent],
  template: `
    <aa-header />
    <h1 class="aa:text-2xl">Welcome to {{ title }}!</h1>
    <br />
    <div class="aa:flex aa:justify-center">
      <router-outlet />
    </div>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'job-vacancy-training';
}
