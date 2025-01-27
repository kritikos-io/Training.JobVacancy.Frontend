import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ToolbarComponent } from "./playground/toolbar/toolbar.component";

@Component({
  selector: 'aa-root',
  standalone: true,
  imports: [RouterOutlet, ToolbarComponent],
  template: `
    <h1 class="aa--text-2xl">Welcome to {{ title }}!</h1>
    <aa-toolbar />
    <router-outlet />
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'job-vacancy-training';
}
