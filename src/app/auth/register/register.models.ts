export interface Role {
  value: string;
  displayValue: string;
}

export interface UserInfo {
  email: string;
  password: string;
  username: string;
  role: string;
  tmdb_key: string;
}
