import { Component } from '@angular/core';

import { NavbarComponent } from './navbar';
import { ToolbarComponent } from './toolbar';

@Component({
  selector: 'aa-header',
  imports: [NavbarComponent, ToolbarComponent],
  templateUrl: './header.component.html',
})
export class HeaderComponent {}
