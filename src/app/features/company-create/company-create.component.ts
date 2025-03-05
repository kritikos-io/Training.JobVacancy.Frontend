import { CommonModule, NgIf } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { CompanyApiService } from '../../core/config/company-api.service';
import { CompanyModel } from '../../core/models/company.model';

@Component({
  selector: 'aa-company-create',
  imports: [ReactiveFormsModule, CommonModule, NgIf],
  templateUrl: './company-create.component.html',
})
export class CompanyCreateComponent implements OnInit{
  private fb = inject(FormBuilder);
  private companyApi = inject(CompanyApiService);
  
  company!: CompanyModel;
  newCompany!: FormGroup;

  ngOnInit(): void {
    this.initForm();
  }

  onSubmit() {
    if (this.newCompany.invalid) {
      alert('Some fields are not correct! Please check again.');
      return;
    }
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
  }

  isFieldInvalid(field: string) {
    const control = this.newCompany.get(field);
    return !!(control && control.invalid && control.touched);
  }

  private initForm(): void {
    this.newCompany = this.fb.group({
      name: ['', Validators.required],
      website: ['', [Validators.pattern(/^(https?:\/\/)?[\w-]+(\.[\w-]+)+[/#?]?.*$/)]],
      vat: ['', Validators.required],
      logoUrl: [''],
      address: this.fb.group({
        country: [''],
        city: [''],
        street: [''],
        streetNumber: [''],
        postalCode: [''],
      }),
      isSponsored: [false, Validators.required],
      phoneNumber: ['', [Validators.pattern(/^\+?\d{10,15}$/)]],
      openPositions: [0],
      openPositionsUrl: [''],
    });
  }
}
