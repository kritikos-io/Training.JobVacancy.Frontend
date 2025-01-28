import { Component, effect, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'aa-toolbar-search',
  imports: [FormsModule, FontAwesomeModule],
  templateUrl: './toolbar-search.component.html',
  styleUrl: './toolbar-search.component.scss'
})
export class ToolbarSearchComponent {

  faMagnifyingGlass = faMagnifyingGlass;

  selectedCountry = signal('');

  selectedcountryChange = output<string>();

  countries = signal([
    { name: 'Australia', code: 'AU' },
    { name: 'Brazil', code: 'BR' },
    { name: 'China', code: 'CN' },
    { name: 'Egypt', code: 'EG' },
    { name: 'France', code: 'FR' },
    { name: 'Germany', code: 'DE' },
    { name: 'India', code: 'IN' },
    { name: 'Japan', code: 'JP' },
    { name: 'Spain', code: 'ES' },
    { name: 'United States', code: 'US' }
  ]).asReadonly();

  constructor() {
    effect(() => this.selectedcountryChange.emit(this.selectedCountry()));
  }

}
