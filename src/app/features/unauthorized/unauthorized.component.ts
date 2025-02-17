import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'aa-unauthorized',
  imports: [FontAwesomeModule],
  templateUrl: './unauthorized.component.html',
})
export class UnauthorizedComponent {
  faBriefcase = faBriefcase;

  message = "Access denied! Please contact your system's administrator.";
}
