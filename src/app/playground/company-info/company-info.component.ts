import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSuitcase } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'aa-company-info',
  imports: [FontAwesomeModule],
  templateUrl: './company-info.component.html',
  styleUrl: './company-info.component.css',
})
export class CompanyInfoComponent {
  faSuitcase = faSuitcase;
}
