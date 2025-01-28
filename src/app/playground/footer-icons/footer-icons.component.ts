import { Component } from '@angular/core';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faFacebook,
  faYoutube,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'aa-footer-icons',
  templateUrl: './footer-icons.component.html',
  imports: [FontAwesomeModule],
})
export class FooterIconsComponent {
  constructor(library: FaIconLibrary) {
    library.addIcons(faFacebook, faYoutube, faInstagram, faTwitter);
  }
}
