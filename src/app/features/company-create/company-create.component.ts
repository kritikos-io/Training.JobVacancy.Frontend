import { CommonModule, NgIf } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { CompanyApiService } from '../../core/config/company-api.service';

import { CompanyModel } from './../../core/models/company.model';
@Component({
  selector: 'aa-company-create',
  imports: [ReactiveFormsModule, CommonModule, NgIf],
  templateUrl: './company-create.component.html',
})
export class CompanyCreateComponent implements OnInit {
  private fb = inject(FormBuilder);
  private companyApi = inject(CompanyApiService);
  private toastr = inject(ToastrService);

  private router = inject(Router);

  company!: CompanyModel;
  newCompany!: FormGroup;

  ngOnInit(): void {
    this.initForm();
  }

  onSubmit() {
    if (this.newCompany.invalid) {
      this.toastr.warning('Some fields are not correct! Please check again.', 'Validation Error');
      return;
    }
    this.company = this.newCompany.value as CompanyModel;
    console.log('Form Submitted', this.company);
    this.companyApi.createCompany(this.company).subscribe({
      next: response => {
        this.toastr.success(`Company "${this.company.name}" created successfully!`, 'Success');
        console.log('Company created successfully:', response);
        // Redirect to the company details page after successful submission
      this.router.navigate([`/company/${response.id}`]);
        this.newCompany.reset(); // Reset form only after successful submission
      },
      error: error => {
        console.error('Error creating company:', error);
        this.toastr.error('Failed to create company. Please try again.', 'Error');
      },
    });
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
