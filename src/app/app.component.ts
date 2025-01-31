import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'aa-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  template: `
    <aa-header />

    <h1 class="aa--text-2xl">Welcome to {{ title }}!</h1>

    <router-outlet />
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'job-vacancy-training';
}
