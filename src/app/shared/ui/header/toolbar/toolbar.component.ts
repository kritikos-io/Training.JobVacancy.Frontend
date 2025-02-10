import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';

import { ToolbarButtonsComponent } from './toolbar-buttons';
import { ToolbarSearchComponent } from './toolbar-search';

@Component({
  selector: 'aa-toolbar',
  imports: [ToolbarSearchComponent, ToolbarButtonsComponent, FontAwesomeModule],
  templateUrl: './toolbar.component.html',
})
export class ToolbarComponent {
  faBriefcase = faBriefcase;

  onSelectedCountryChange(countryCode: string) {
    console.log('Selected country changed', countryCode);
  }

  onSearchTermChange(searchTerm: string | null) {
    console.log('Search Term changed', searchTerm);
  }
}
