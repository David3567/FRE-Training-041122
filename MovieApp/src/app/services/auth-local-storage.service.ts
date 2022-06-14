import { HttpClient, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import {
  BehaviorSubject,
  catchError,
  map,
  Observable,
  of,
  Subject,
  tap,
  throwError,
} from 'rxjs';
import { environment } from 'src/environments/environment';
import {
  User,
  UserAuth,
  UserRegister,
  UserRole,
} from '../interfaces/user.interface';
import { TmdbAPIService } from './tmdb-api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthLocalStorageService {
  JWThelper: JwtHelperService = new JwtHelperService();
  userSBJ$?: BehaviorSubject<any>;
  user$?: Observable<any>;

  userRegister: UserRegister = new UserRegister();
  refreshTokenTimeout: any;

  get userValue(): UserAuth {
    return this.userSBJ$?.value;
  }

  public get appNewUser(): UserRegister {
    return this.userRegister;
  }

  constructor(
    private router: Router,
    private http: HttpClient,
    private movieAPI: TmdbAPIService
  ) {
    this.userSBJ$ = new BehaviorSubject({});
    this.user$ = this.userSBJ$.asObservable();
  }

  loginAuth(user: User): Observable<{ accessToken: string }> {
    return this.http
      .post<{ accessToken: string }>(
        [environment.BACKEND_URL, 'signin'].join('/'),
        user
      )
      .pipe(
        tap(({ accessToken }: { accessToken: string }) => {
          this.setUserValueByToken({ accessToken });

          this.router.navigate(['/movielist']);
        }),
        catchError((error) => {
          console.log('error');
          alert('The Username/Password do not match our records');
          return throwError('SomeThing Wrong during sign in!', error);
        })
      );
  }

  logoutAuth() {
    console.log('inside logoutAuth');
    localStorage.removeItem('accessToken');
    // this.movieAPI.
    this.stopRefreshTokenTimer();

    this.userSBJ$?.next({});
    console.log(this.userValue);
    this.router.navigate(['/login']);
  }

  // addUserInfo(userInfo: UserRegister) {
  //   this.userRegister = {
  //     ...this.userRegister,
  //     ...userInfo,
  //   };
  // }

  signUpAuth(userData: UserRegister): Observable<any> {
    console.log(userData);
    // "username": "test",
    // "password": "Test1234",
    // "email": "test@test.com",
    // "role": "USER",
    // "tmdb_key": "3bb1313f68bf6cb7d09bc39c38dd4b0c"

    this.userRegister = {
      username: userData.username,
      password: userData.password,
      email: userData.email,
      role: userData.role,
      tmdb_key: userData.tmdb_key,
    };

    console.log('Register:',this.userRegister);
    
    return this.http
      .post<{ accessToken: string }>(
        [environment.BACKEND_URL, 'signup'].join('/'),
        this.userRegister
      )
      .pipe(
        tap(({ accessToken }: { accessToken: string }) => {
          this.setUserValueByToken({ accessToken });
          // this.logoutAuth()
          this.router.navigate(['/login']);
        }),
        catchError((err) => {
          console.log(err);
          return throwError('SomeThing Wrong during sign up!', err);
        })
      );
  }

  upgradeRoleAuth(userRole: { role: UserRole }): Observable<any> {
    console.log(`Target class: ${userRole.role}`);
    return this.http
      .patch<{ accessToken: string }>(
        [environment.BACKEND_URL, 'userupdate'].join('/'),
        userRole
      )
      .pipe(
        tap(({ accessToken }: { accessToken: string }) => {
          this.setUserValueByToken({ accessToken });
          this.router.navigate(['/login']);
        }),
        catchError((err) => {
          return throwError('SomeThing Wrong during the upgrade!', err);
        })
      );
  }

  setUserValueByToken = ({ accessToken }: { accessToken: string }) => {
    localStorage.setItem('accessToken', accessToken);

    const { id, username, email, role, tmdb_key, exp } =
      this.JWThelper.decodeToken(accessToken);

    const user = {
      ...{ id, username, email, role, tmdb_key, exp },
      JWToken: accessToken,
    };
    console.log('user setUserValueByToken', user);
    this.userSBJ$?.next(user);
    this.startRefreshTokenTimer(exp);
  };

  startRefreshTokenTimer(exp: String) {
    const expiration = new Date(+exp * 1000);
    const timeout = expiration.getTime() - Date.now();
    console.log('startRefreshTokenTimer', timeout);
    this.refreshTokenTimeout = setTimeout(() => {
      console.log('startRefreshTokenTimer', this.userValue.JWToken);
      if (this.userValue.JWToken) {
        this.refreshToken().subscribe(console.log);
      }
    }, timeout);
  }

  refreshToken(): Observable<any> {
    const currentToken = localStorage.getItem('accessToken');
    console.log('refreshToken', currentToken);
    if (!currentToken) {
      // No token found
      return of('error');
    }
    const { id, username, email, role, tmdb_key } =
      this.JWThelper.decodeToken(currentToken);

    const user = { id, username, email, role, tmdb_key };

    return this.http
      .post<any>([environment.BACKEND_URL, 'refresh-token'].join('/'), user)
      .pipe(
        tap(({ accessToken }: { accessToken: string }) => {
          this.setUserValueByToken({ accessToken });
        })
      );
  }

  private stopRefreshTokenTimer() {
    clearTimeout(this.refreshTokenTimeout);
  }
}
