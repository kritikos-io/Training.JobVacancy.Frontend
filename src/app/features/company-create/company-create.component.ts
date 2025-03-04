import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

import { CompanyApiService } from '../../core/config/company-api.service';
import { CompanyModel } from '../../core/models/company.model';

@Component({
  selector: 'aa-company-create',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './company-create.component.html',
})
export class CompanyCreateComponent {
  company!: CompanyModel;

  newCompany = new FormGroup({
    name: new FormControl('', Validators.required),
    website: new FormControl('', [
      Validators.pattern(/^(https?:\/\/)?[\w-]+(\.[\w-]+)+[/#?]?.*$/),
    ]),
    vat: new FormControl('', Validators.required),
    logoUrl: new FormControl(''),
    address: new FormGroup({
      country: new FormControl(''),
      city: new FormControl(''),
      street: new FormControl(''),
      streetNumber: new FormControl(''),
      postalCode: new FormControl(''),
    }),
    isSponsored: new FormControl(false, Validators.required),
    phoneNumber: new FormControl('', [Validators.pattern(/^\+?\d{10,15}$/)]),
    openPositions: new FormControl(0),
    openPositionsUrl: new FormControl(''),
  });

  constructor(private companyApi: CompanyApiService) {}

  onSubmit() {
    if (this.newCompany.valid) {
      this.company = this.newCompany.value as CompanyModel;
      console.log('Form Submitted', this.company);
      this.companyApi.createCompany(this.company).subscribe({
        next: response => {
          alert(`Company "${this.company.name}" created successfully!`);
          console.log('Company created successfully:', response);
        },
        error: error => {
          console.error('Error creating company:', error);
          alert('Failed to create company. Please try again.');
        },
      });
      this.newCompany.reset();
    } else {
      alert('Some fields are not correct! Please check again.');
    }
  }

  isFieldInvalid(field: string) {
    return this.newCompany.get(field)?.invalid && this.newCompany.get(field)?.touched;
  }
}
