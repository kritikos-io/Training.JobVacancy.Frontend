import { Component, effect, output, signal } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'aa-toolbar-search',
  imports: [FormsModule, FontAwesomeModule, ReactiveFormsModule],
  templateUrl: './toolbar-search.component.html',
  styleUrl: './toolbar-search.component.scss'
})
export class ToolbarSearchComponent {

  selectedcountryChange = output<string>();
  searchTermChange = output<string | null>();

  faMagnifyingGlass = faMagnifyingGlass;

  selectedCountry = signal('');
  searchTerm = new FormControl('');

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

    this.searchTerm.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged()
    )
      .subscribe((value) => {
        this.searchTermChange.emit(value)
      });
  }

}

