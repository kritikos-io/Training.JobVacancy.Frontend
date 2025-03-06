import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

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

  // Fetch a company by ID
  // getCompanyById(companyId: string): Observable<CompanyModel> {
  //   return this.http.get<CompanyModel>(`/api/company/${companyId}`);
  // }
  getCompanyById(companyId: string): Observable<CompanyModel> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // Add authentication headers if needed (e.g., Authorization)
      // 'Authorization': `Bearer ${yourToken}`
    });

    return this.http.get<CompanyModel>(`/api/company/01956bb3-2f74-73c8-b197-feacfc25a9d9`, { headers }).pipe(
      catchError((error) => {
        console.error('API Error:', error);
        console.log(companyId);
        return throwError(() => new Error(`Failed to fetch company details: ${error.message}`));
      })
    );
  }
}
