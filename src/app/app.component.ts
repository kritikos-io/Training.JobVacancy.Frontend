import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { PlaygroundComponent } from './playground/playground.component';
import { ToolbarComponent } from "./playground/toolbar/toolbar.component";

@Component({
  selector: 'aa-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ToolbarComponent, PlaygroundComponent],
  template: `
    <aa-header />
    <aa-toolbar />
    <h1 class="aa--text-2xl">Welcome to {{ title }}!</h1>
    <aa-playground />

    <router-outlet />
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'job-vacancy-training';
}
