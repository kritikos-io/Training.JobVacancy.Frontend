import { Component } from '@angular/core';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faFacebook,
  faYoutube,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'aa-icon',
  templateUrl: './icon.component.html',
  imports: [FontAwesomeModule],
})
export class IconComponent {
  constructor(library: FaIconLibrary) {
    library.addIcons(faFacebook, faYoutube, faInstagram, faTwitter);
  }
}
