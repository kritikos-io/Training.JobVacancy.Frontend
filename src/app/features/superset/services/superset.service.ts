import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { embedDashboard } from '@superset-ui/embedded-sdk';
import { firstValueFrom } from 'rxjs';

import { environment } from '../../../../environments/environment';
import { CsrfTokenError, CsrfTokenResponse } from '../models/csrf-token';
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
      debug: true,
      iframeTitle: "Superset Embedded Dashboard",
      fetchGuestToken: () => this.#getToken(dashboardId),
      dashboardUiConfig: {
        hideTitle: false,
        hideChartControls: false,
        hideTab: false,
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
    });
  }

  async #getToken(dashboardId: string) {

    const loginResponse = await this.#login();

    if ('message' in loginResponse) {
      console.log(loginResponse.message)
      return '';
    }

    const csrfResponse = await this.#getCsrf(loginResponse.access_token);

    if ('message' in csrfResponse) {
      console.log(csrfResponse.message)
      return '';
    }

    const guestTokenResponse = await this.#getGuestToken(dashboardId, loginResponse.access_token, csrfResponse.result);

    if ('message' in guestTokenResponse) {
      console.log(guestTokenResponse.message)
      return '';
    }

    return guestTokenResponse.token;

  }

  async #login() {
    const headers = new HttpHeaders({
      "Content-Type": "application/json"
    });
    const body: LoginRequest = {
      username: "admin",
      password: "qwer1234!",
      provider: "db",
      refresh: true
    };
    return firstValueFrom(this.#http.post<LoginResponse | LoginError>(`${environment.superset.apiUrl}/security/login`, body, { headers }));
  }

  async #getCsrf(access_token: string) {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": `Bearer ${access_token}`,
    });

    return firstValueFrom(this.#http.get<CsrfTokenResponse | CsrfTokenError>(`${environment.superset.apiUrl}/security/csrf_token/`, { headers }));
  }

  async #getGuestToken(dashboardId: string, access_token: string, csrf: string) {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": `Bearer ${access_token}`,
      "X-CSRFToken": csrf,
    });

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

    return firstValueFrom(this.#http.post<GuestTokenResponse | GuestTokenError>(`${environment.superset.apiUrl}/security/guest_token/`, body, { headers }));
  }

}
