import { Component } from '@angular/core';

import { CompanyInfoComponent } from '../company-info/company-info.component';
import { FooterIconsComponent } from '../footer-icons/footer-icons.component';
import { LinksComponent } from '../links/links.component';

@Component({
  selector: 'aa-footer',
  imports: [LinksComponent, CompanyInfoComponent, FooterIconsComponent],
  templateUrl: './footer.component.html',
})
export class FooterComponent {}
