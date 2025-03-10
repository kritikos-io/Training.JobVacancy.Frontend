export interface LoginRequest {
  password: string,
  provider: string,
  refresh: boolean,
  username: string
}

export interface LoginResponse {
  access_token: string,
  refresh_token: string
}

export interface LoginError {
  message: string
}
