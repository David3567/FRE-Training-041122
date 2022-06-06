import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthLocalStorageService } from '../services/auth-local-storage.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthLocalInterceptor implements HttpInterceptor {
  constructor(private auth: AuthLocalStorageService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const user = this.auth.userValue;
    const loggedIn = user && user.JWToken;
    const upgradeUserURL = [environment.BACKEND_URL, 'userupdate'].join('/');

    if (loggedIn && request.url.startsWith(upgradeUserURL)) {
      request = request.clone({
        setHeaders: { Authorization: `Bearer ${user.JWToken}` },
      });
    }
    return next.handle(request);
  }
}
