import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CompanyApiService } from '../../core/config/company-api.service';
import { CompanyModel } from '../../core/models/company.model';

@Component({
  selector: 'aa-company-details',
  imports: [CommonModule],
  templateUrl: './company-details.component.html',
})
export class CompanyDetailsComponent implements OnInit {
  company!: CompanyModel;
  companyId!: string;

  constructor(
    private route: ActivatedRoute,
    private companyApi: CompanyApiService
  ) {}

  ngOnInit(): void {
    this.companyId = this.route.snapshot.paramMap.get('id')!;
    this.fetchCompanyDetails(this.companyId);
  }

  fetchCompanyDetails(companyId: string) {
    this.companyApi.getCompanyById(companyId).subscribe({
      next: (company) => {
        this.company = company;
      },
      error: (error) => {
        console.error('Error fetching company details:', error);
      },
    });
  }
}
