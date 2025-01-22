import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'aa-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <h1 class="aa--text-2xl">Welcome to {{ title }}!</h1>

    <router-outlet />
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'job-vacancy-training';
}
