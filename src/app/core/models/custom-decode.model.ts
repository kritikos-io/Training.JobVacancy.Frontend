export interface CustomJwtDecoder {
  exp: number;
  iat: number;
  auth_time: number;
  jti: string;
  iss: string;
  aud: string;
  sub: string;
  typ: string;
  azp: string;
  sid: string;
  acr: string;
  'allowed-origins': string[];
  realm_access: {
    roles: UserRole[];
  };
  resource_access: {
    account: {
      roles: UserRole[];
    };
  };
  scope: string;
  email_verified: boolean;
  name: string;
  preferred_username: string;
  given_name: string;
  family_name: string;
  email: string;
}

enum UserRole {
  OFFLINE_ACCESS = 'offline_access',
  DEFAULT_ROLES_IOT = 'default-roles-iot',
  UMA_AUTHORIZATION = 'uma_authorization',
  MANAGE_ACCOUNT = 'manage-account',
  MANAGE_ACCOUNT_LINKS = 'manage-account-links',
  VIEW_PROFILE = 'view-profile',
}
