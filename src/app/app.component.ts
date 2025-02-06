import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { PlaygroundComponent } from './playground/playground.component';

import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'aa-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, PlaygroundComponent],
  template: `
    <aa-header />

    <h1 class="aa--text-2xl">Welcome to {{ title }}!</h1>
    <aa-playground />

    <router-outlet />
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'job-vacancy-training';
}
