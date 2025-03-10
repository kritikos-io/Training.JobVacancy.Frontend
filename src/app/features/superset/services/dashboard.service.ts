import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

import { environment } from '../../../../environments/environment';
import { DashboardQueryParams, DashboardResponse } from '../models/dashboard';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  #http = inject(HttpClient);

  getDashboards(token: string) {

    const dashboardParams: DashboardQueryParams = {
      columns: [
      ],
      filters: [
      ],
      keys: [
      ],
      order_column: "dashboard_title",
      order_direction: "asc",
      page: 0,
      page_size: 100,
      select_columns: [
        "id",
        "status",
        "url",
        "thumbnail_url",
        "dashboard_title"
      ]
    }
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    });
    const params = new HttpParams()
      .set('q', JSON.stringify(dashboardParams));

    return firstValueFrom(this.#http.get<DashboardResponse>(`${environment.superset.apiUrl}/dashboard`, { headers, params }));
  }

}
