import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { FileUploadModule } from 'primeng/fileupload';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';

@Component({
  selector: 'aa-primeng',
  imports: [
    ButtonModule,
    InputTextModule,
    FloatLabelModule,
    ReactiveFormsModule,
    RadioButtonModule,
    FileUploadModule,
  ],
  templateUrl: './primeng.component.html',
})
export class PrimengComponent {
  companyForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.companyForm = this.fb.group({
      name: [''],
      website: [''],
      vat: [''],
      country: [''],
      city: [''],
      street: [''],
      streetNumber: [''],
      postalCode: [''],
      phoneNumber: [''],
      sponsored: ['No'], // Default value
      fileUpload: [null],
    });
  }

  toggleDarkMode() {
    document.querySelector('html')?.classList.toggle('my-app-dark');
  }
  onSubmit() {
    console.log('Form Submitted:', this.companyForm.value);
  }
}
