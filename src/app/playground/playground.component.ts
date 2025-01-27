import { Component } from '@angular/core';

import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'aa-playground',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './playground.component.html',
})
export class PlaygroundComponent {}
