// src/app/icon-library.ts
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
  faFacebook,
  faYoutube,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';

export function addIcons(library: FaIconLibrary) {
  library.addIcons(faFacebook, faYoutube, faInstagram, faTwitter, faBriefcase);
}
