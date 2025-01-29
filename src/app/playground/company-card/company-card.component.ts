import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGlobe, faLocationDot } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'aa-company-card',
  imports: [FontAwesomeModule],
  templateUrl: './company-card.component.html',
  styleUrl: './company-card.component.scss'
})
export class CompanyCardComponent {

  faGlobe = faGlobe;
  faLocationDot = faLocationDot;

}
