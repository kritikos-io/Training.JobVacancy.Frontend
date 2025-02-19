import { NgFor, NgIf, NgClass } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faArrowUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'aa-navbar',
  imports: [FontAwesomeModule, NgFor, NgIf, NgClass],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  faBars = faBars;
  faArrowUp = faArrowUp;
  isMenuOpen = false;

  navClass = 'aa:hidden';

  MenuItems = [
    { title: 'Home', href: '#', active: true },
    { title: 'Find Job', href: '#', active: false },
    { title: 'Employers', href: '#', active: false },
    { title: 'Candidates', href: '#', active: false },
    { title: 'Pricing Plans', href: '#', active: false },
    { title: 'Superset Public', href: '/superset-public', active: false },
    { title: 'Playground', href: '/playground', active: false },
  ];

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    const windowWidth = (event.target as Window).innerWidth;
    if (windowWidth >= 768 && this.isMenuOpen) {
      this.isMenuOpen = false;
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  trackByTitle(index: number, item: any): string {
    return item.title;
  }

  handleMenu(): void {
    if (this.isMenuOpen) {
      this.navClass = '';
    } else {
      this.navClass = 'aa:hidden';
    }
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    this.handleMenu();
  }
}
