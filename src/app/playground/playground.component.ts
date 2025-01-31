import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'aa-playground',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './playground.component.html',
})
export class PlaygroundComponent {}
