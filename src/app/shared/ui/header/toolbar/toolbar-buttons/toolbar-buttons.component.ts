import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
  selector: 'aa-toolbar-buttons',
  imports: [AsyncPipe],
  templateUrl: './toolbar-buttons.component.html',
})
export class ToolbarButtonsComponent {
  private readonly auth = inject(OidcSecurityService);
  isAuthenticated$ = this.auth.isAuthenticated$;

  login() {
    this.auth.authorize();
  }

  logout() {
    this.auth.logoffAndRevokeTokens().subscribe(result => {
      // Typically, local tokens are cleared if IdP logout is successful
      console.log('Logout result:', result);
    });
  }
}
