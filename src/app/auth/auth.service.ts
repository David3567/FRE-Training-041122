import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { AUTHSERVER } from '../app.module';
import { UserInfo } from './register/register.models';
import { LoginInfo } from './login/loginInfo.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private readonly http: HttpClient,
    @Inject(AUTHSERVER) private readonly authServerPath: string
  ) {}

  register(userInfo: UserInfo) {
    debugger;
    return this.http.post(
      [this.authServerPath, 'auth', 'signup'].join('/'),
      userInfo
    );
  }

  login(loginInfo: LoginInfo) {
    return this.http.post(
      [this.authServerPath, 'auth', 'signin'].join('/'),
      loginInfo
    );
  }
}
