export const oidcConfig = {
  authority: 'https://auth.kritikos.io/realms/iot',
  clientId: 'poc-frontend-training',
  redirectUrl: window.location.origin,
  postLogoutRedirectUri: window.location.origin,
  scope: 'openid profile email offline_access',
  responseType: 'code',
  silentRenew: true,
  useRefreshToken: true,
  ignoreNonceAfterRefresh: true,
  logLevel: 2,
  authWellknownEndpointUrl:
    'https://auth.kritikos.io/realms/iot/.well-known/openid-configuration',
  secureRoutes: [],
};
