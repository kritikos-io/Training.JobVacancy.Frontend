import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'aa-company-info',
  imports: [FontAwesomeModule],
  templateUrl: './company-info.component.html',
})
export class CompanyInfoComponent {
  faBriefcase = faBriefcase;
}
