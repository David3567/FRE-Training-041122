import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { AUTHSERVER } from '../shared/injection-tokens';
import { UserInfo } from './register/register.models';
import { LoginInfo } from './login/loginInfo.interface';
import { AuthResponse, UserInterface } from './auth.interface';
import { BehaviorSubject, catchError, Subject, tap } from 'rxjs';
import { User } from './user.model';
import { JwtService } from './jwt.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  expirationTimer: any;
  initialValue = new User('', '', '', '', '', new Date(), '');
  user$ = new BehaviorSubject<User>(this.initialValue);

  constructor(
    private router: Router,
    private readonly http: HttpClient,
    private jwtService: JwtService,
    @Inject(AUTHSERVER) private readonly authServerPath: string
  ) {}

  register(userInfo: UserInfo) {
    return this.http
      .post<AuthResponse>(
        [this.authServerPath, 'auth', 'signup'].join('/'),
        userInfo
      )
      .pipe(
        catchError((error) => {
          throw error.message;
        }),
        tap((token: AuthResponse) => {
          // ..handle auth
          this.handleAuth(token.accessToken);
        })
      );
  }

  login<AuthResponse>(loginInfo: LoginInfo) {
    return this.http
      .post<AuthResponse>(
        [this.authServerPath, 'auth', 'signin'].join('/'),
        loginInfo
      )
      .pipe(
        catchError((error) => {
          throw error.error.message;
        }),
        tap((token: any) => {
          this.handleAuth(token.accessToken);
        })
      );
  }

  refreshToken(user: any) {
    console.log('refresh');

    this.http
      .post<AuthResponse>(
        [this.authServerPath, 'auth', 'refresh-token'].join('/'),
        user
      )
      .pipe(
        catchError((error) => {
          console.log(error);
          throw error.error.message;
        }),
        tap((token: any) => {
          console.log(token);
          this.handleAuth(token.accessToken);
        })
      )
      .subscribe();
  }

  autoLogin() {
    const token: any = localStorage.getItem('authData');
    const userValue = this.jwtService.DecodeToken(token);
    const tokenExpiration = this.jwtService.GetExpiration(token);

    if (token) {
      const loadedUser = this.createUser(userValue, tokenExpiration, token);
      this.user$.next(loadedUser);
      const userdata = this.getUser(loadedUser);
      this.autoLogout(loadedUser.token, userdata);
    }
  }

  autoLogout(token: any, user: any) {
    const isSessionExpired = this.jwtService.IsTokenExpired(token);
    if (isSessionExpired) {
      this.logout();
    }
    // Refresh token before 1 minute
    this.expirationTimer = setTimeout(() => {
      console.log('auto');
      this.refreshToken(user);
    }, 29 * 60000);
  }

  logout() {
    // tigger logout from any page and navigate to home
    this.user$.next(this.initialValue);
    this.router.navigate(['']);
    localStorage.removeItem('authData');
    if (this.expirationTimer) {
      clearTimeout(this.expirationTimer);
    }
    this.expirationTimer = null;
  }

  private handleAuth(token: string) {
    const userValue = this.jwtService.DecodeToken(token);
    const tokenExpiration = this.jwtService.GetExpiration(token);
    const user = this.createUser(userValue, tokenExpiration, token);
    localStorage.setItem('authData', JSON.stringify(token));
    this.user$.next(user);
    const userdata = this.getUser(userValue);
    this.autoLogout(token, userdata);
  }

  createUser(
    userValue: UserInterface,
    tokenExpiration: Date | null,
    token: string
  ) {
    return new User(
      userValue.id,
      userValue.email,
      userValue.username,
      userValue.role,
      userValue.tmdb_key,
      tokenExpiration,
      token
    );
  }

  getUser(userValue: any) {
    return {
      id: userValue.id,
      email: userValue.email,
      username: userValue.username,
      role: userValue.role,
      tmdb_key: userValue.tmdb_key,
    };
  }
}
