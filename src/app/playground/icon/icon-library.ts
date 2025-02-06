// src/app/icon-library.ts
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
  faFacebook,
  faYoutube,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import {
  faBriefcase,
  faLocationDot,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';

export function addIcons(library: FaIconLibrary) {
  library.addIcons(
    faFacebook,
    faYoutube,
    faInstagram,
    faTwitter,
    faBriefcase,
    faLocationDot,
    faBookmark,
    faArrowRight
  );
}
