import { CommonModule, NgIf } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule, MatError } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';

import { CompanyApiService } from '../../core/config/company-api.service';
import { CompanyModel } from '../../core/models/company.model';

@Component({
  selector: 'aa-company-create',
  imports: [
    ReactiveFormsModule,
    CommonModule,
    NgIf,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    MatError,
    MatGridListModule,
  ],
  templateUrl: './create-material.component.html',
})
export class CreateMaterialComponent implements OnInit {
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
    this.newCompany.reset();
  }

  isFieldInvalid(field: string) {
    const control = this.newCompany.get(field);
    return !!(control && control.invalid && control.touched);
  }

  onFileSelected(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files.length > 0) {
      const file = fileInput.files[0];
      console.log('Selected file:', file);
    }
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
