import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpParams,
  HttpRequest,
} from '@angular/common/http';
import { exhaustMap, Observable, take } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class MoviesInterceptorService implements HttpInterceptor {
  constructor(private authService: AuthService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return this.authService.user$.pipe(
      take(1),
      exhaustMap((user: any) => {
        const addedKey = req.clone({
          params: new HttpParams().set('api_key', user.tmdb_key),
        });
        return next.handle(addedKey);
      })
    );
  }
}
