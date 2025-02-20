import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { embedDashboard } from '@superset-ui/embedded-sdk';
import { catchError, EMPTY, firstValueFrom, map, switchMap } from 'rxjs';

import { environment } from '../../../../environments/environment.development';
import { GuestTokenError, GuestTokenRequest, GuestTokenResponse } from '../models/guest-token';
import { LoginError, LoginRequest, LoginResponse } from '../models/login';


@Injectable({
  providedIn: 'root'
})
export class SupersetService {

  #http = inject(HttpClient);

  embedDashboard(dashboardId: string, placeholder: HTMLElement) {

    return embedDashboard({
      id: dashboardId,
      supersetDomain: environment.superset.Url,
      mountPoint: placeholder,
      fetchGuestToken: () => this.#getToken(dashboardId),
      dashboardUiConfig: {
        hideTitle: true,
        hideChartControls: true,
        hideTab: true,
        filters: {
          visible: false,
          expanded: false
        },
        urlParams: {
          standalone: "1",
          show_filters: "0",
          show_native_filters: "0"

        }
      },
    })
  };

  #getToken(dashboardId: string) {
    //calling login to get access token
    const body: LoginRequest = {
      password: "YOUR_PASSWORD_OF_USER_WITH_REPORT_N_EMBEDDING_PERMISSION",
      provider: "db",
      refresh: true,
      username: "YOUR_USERNAME_OF_USER_WITH_REPORT_N_EMBEDDING_PERMISSION"
    };

    const headers = new HttpHeaders({
      "Content-Type": "application/json"
    });

    return firstValueFrom(this.#http.post<LoginResponse | LoginError>(`${environment.superset.apiUrl}/login`, body, { headers }).pipe(

      switchMap(response => {

        if ('message' in response) {
          console.log(response.message)
          return EMPTY;
        }

        const body: GuestTokenRequest = {
          resources: [
            {
              id: dashboardId,
              type: "dashboard"
            }
          ],
          rls: [],
          user: {
            username: "report-viewer",
            first_name: "report-viewer",
            last_name: "report-viewer",
          }
        };

        const headers = new HttpHeaders({
          "Content-Type": "application/json",
          "Authorization": `Bearer ${response.access_token}`,
        });

        return this.#http.post<GuestTokenResponse | GuestTokenError>(`${environment.superset.apiUrl}/guest_token/`, body, { headers }).pipe(
          map(response => {
            if ('message' in response) {
              console.log(response.message)
              return '';
            }
            return response.token;
          })
        );
      }),
      catchError((error) => {
        console.error(error);
        return EMPTY;
      }),
    ));
  }

}
