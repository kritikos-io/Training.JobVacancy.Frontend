import { NgFor, NgIf, NgClass } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faArrowUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'aa-navbar',
  imports: [FontAwesomeModule, NgFor, NgIf, NgClass],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  faBars = faBars;
  faArrowUp = faArrowUp;
  isMenuOpen = true;

  navClass = 'aa:hidden';

  MenuItems = [
    { title: 'Home', href: 'home', active: true },
    { title: 'Find Job', href: '#', active: false },
    { title: 'Employers', href: '#', active: false },
    {
      title: 'Company',
      active: false,
      showSubmenu: false,
      submenu: [
        { title: 'Create Company', href: 'company/create', active: false },
        { title: 'Show Companies', href: '#', active: false },
      ],
    },
    { title: 'Pricing Plans', href: '#', active: false },
    { title: 'Superset Public', href: 'superset-public', active: false },
    { title: 'Superset Private', href: 'superset-private', active: false },
    { title: 'Playground', href: 'playground', active: false },
    { title: 'Styleguide', href: 'styleguide', active: false },
  ];

  constructor(private router: Router) { }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    const windowWidth = (event.target as Window).innerWidth;
    if (windowWidth >= 768 && this.isMenuOpen) {
      this.isMenuOpen = false;
    }
  }

  toggleSubmenu(index: number) {
    this.MenuItems.forEach((item, i) => {
      item.showSubmenu = i === index;
    });
  }

  closeSubmenu(index: number) {
    setTimeout(() => {
      this.MenuItems[index].showSubmenu = false;
    }, 300);
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

  onClick(index: number, subIndex?: number) {
    const menuItem = this.MenuItems[index];
    if (!menuItem) return;

    this.MenuItems.forEach(item => (item.active = false));

    if (subIndex !== undefined) {
      if (!menuItem.submenu || !menuItem.submenu[subIndex]) return;

      const submenuItem = menuItem.submenu[subIndex];
      menuItem.active = true;
      this.router.navigate([submenuItem.href]);
      menuItem.showSubmenu = false;
      return;
    }

    if (menuItem.submenu && menuItem.submenu.length > 0) {
      menuItem.showSubmenu = !menuItem.showSubmenu;
    } else {
      menuItem.active = true;
      if (menuItem.href) {
        this.router.navigate([menuItem.href]);
      }
    }
  }
}
