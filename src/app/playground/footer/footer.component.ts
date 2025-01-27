import { Component } from '@angular/core';

import { CompanyInfoComponent } from '../company-info/company-info.component';
import { IconComponent } from '../icon/icon.component';
import { LinksComponent } from '../links/links.component';

@Component({
  selector: 'aa-footer',
  imports: [LinksComponent, IconComponent, CompanyInfoComponent],
  templateUrl: './footer.component.html',
})
export class FooterComponent {}
