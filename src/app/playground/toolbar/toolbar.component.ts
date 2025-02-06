import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';

import { ToolbarButtonsComponent } from "./toolbar-buttons/toolbar-buttons.component";
import { ToolbarSearchComponent } from "./toolbar-search/toolbar-search.component";

@Component({
  selector: 'aa-toolbar',
  imports: [ToolbarSearchComponent, ToolbarButtonsComponent, FontAwesomeModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
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
