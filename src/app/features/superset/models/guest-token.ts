export interface GuestTokenRequest {
  resources: [
    {
      id: string,
      type: string
    }
  ],
  rls: [],
  user: {
    first_name: string,
    last_name: string,
    username: string
  }
}
export interface GuestTokenResponse {
  token: string
}

export interface GuestTokenError {
  message: string
}
