import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { CompanyModel } from '../models/company.model';

@Injectable({
  providedIn: 'root',
})
export class CompanyApiService {
  constructor(private http: HttpClient) {}

  createCompany(company: CompanyModel): Observable<CompanyModel> {
    const newCompany = {
      name: company.name,
      website: company.website,
      vat: company.vat,
      logoUrl: company.logoUrl,
      address: company.address,
      isSponsored: company.isSponsored,
      phoneNumber: company.phoneNumber,
    };

    console.log('Adding new company:', JSON.stringify(newCompany, null, 2));

    return this.http.post<CompanyModel>('/api/company', newCompany, {
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
