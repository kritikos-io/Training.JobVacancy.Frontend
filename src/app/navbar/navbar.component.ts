import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'aa-navbar',
  imports: [FontAwesomeModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  faBars = faBars;

  classContent =
    'aa--justify-left aa--flex aa--hidden aa--grow aa--flex-col aa--gap-5 aa--text-gray-500 md:aa--flex md:aa--flex-row';
  onClick() {
    if (
      this.classContent ==
      'aa--justify-left aa--flex aa--inline-block aa--grow aa--flex-col aa--gap-5 aa--text-gray-500 md:aa--flex md:aa--flex-row'
    ) {
      this.classContent =
        'aa--justify-left aa--flex aa--hidden aa--grow aa--flex-col aa--gap-5 aa--text-gray-500 md:aa--flex md:aa--flex-row';
    } else {
      this.classContent =
        'aa--justify-left aa--flex aa--inline-block aa--grow aa--flex-col aa--gap-5 aa--text-gray-500 md:aa--flex md:aa--flex-row';
    }
  }
}
