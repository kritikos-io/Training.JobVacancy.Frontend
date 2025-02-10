import { Component } from '@angular/core';

import { CompanyInfoComponent } from './company-info';
import { FooterIconsComponent } from './footer-icons';
import { LinksComponent } from './links';

@Component({
  selector: 'aa-footer',
  imports: [LinksComponent, CompanyInfoComponent, FooterIconsComponent],
  templateUrl: './footer.component.html',
})
export class FooterComponent {}
