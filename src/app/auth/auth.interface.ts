export interface AuthResponse {
  accessToken: string;
}

export interface UserInterface {
  id: string;
  email: string;
  iat: Date;
  username: string;
  role: string;
  tmdb_key: string;
  exp: Date | null;
  token?: string;
}
