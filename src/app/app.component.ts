import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { PlaygroundComponent } from './playground/playground.component';

@Component({
  selector: 'aa-root',
  standalone: true,
  imports: [RouterOutlet, PlaygroundComponent],
  template: `
    <aa-playground />

    <h1 class="aa--text-2xl">Welcome to {{ title }}!</h1>

    <router-outlet />
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'job-vacancy-training';
}
