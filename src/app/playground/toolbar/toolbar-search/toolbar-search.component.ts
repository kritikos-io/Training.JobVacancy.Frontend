import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Select, SelectChangeEvent } from 'primeng/select';

@Component({
  selector: 'aa-toolbar-search',
  imports: [FormsModule, Select],
  templateUrl: './toolbar-search.component.html',
  styleUrl: './toolbar-search.component.scss'
})
export class ToolbarSearchComponent {

  selectedcountryChange = output();

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

  onCountryChange(event: SelectChangeEvent) {
    this.selectedcountryChange.emit(event.value.code);
  }
}
