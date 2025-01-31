import { Component } from '@angular/core';

import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'aa-header',
  imports: [NavbarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
