import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'aa-error',
  imports: [FontAwesomeModule],
  templateUrl: './error.component.html',
})
export class ErrorComponent {
  faBriefcase = faBriefcase;

  message = 'Oops! Something went wrong. Please try again';
}
