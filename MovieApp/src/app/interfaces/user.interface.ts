export interface User {
  email: string;
  password: string;
}
export class UserRegister {
  username?: string;
  password?: string;
  email?: string;
  role?: string;
  tmdb_key?: string;
}

export class UserAuth {
  id?: string;
  username?: string;
  email?: string;
  role?: UserRole = UserRole.USER;
  tmdb_key?: string;
  JWToken?: string;
}

export enum UserRole {
  USER = 'USER',
  SUPERUSER = 'SUPERUSER',
  ADMIN = 'ADMIN',
}
