import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

import { UserInterface } from './auth.interface';

@Injectable({ providedIn: 'root' })
export class JwtService {
  constructor() {}

  helper = new JwtHelperService();

  DecodeToken(token: string): UserInterface {
    return this.helper.decodeToken(token);
  }

  GetExpiration(token: string): Date | null {
    return this.helper.getTokenExpirationDate(token);
  }

  IsTokenExpired(token: string) {
    return this.helper.isTokenExpired(token);
  }
}
