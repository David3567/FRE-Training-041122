import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  CanDeactivate,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
} from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { AuthLocalStorageService } from '../services/auth-local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class MoviedatailsGuard
  implements CanActivate, CanActivateChild, CanDeactivate<unknown>, CanLoad
{
  constructor(
    private auth: AuthLocalStorageService,
    private router: Router,
    private JTWhelper: JwtHelperService
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    console.log('details guard');
    const allowedRoles: string[] = ['SUPERUSER', 'ADMIN'];
    const { JWToken } = this.auth.userValue;
    const userData = this.JTWhelper.decodeToken(JWToken);
    if (JWToken && allowedRoles.includes(userData.role)) {
      return true;
    } else if (JWToken) {
      // shoud redirect to role upgrade screen
      console.log('upgrade your subscription');
      this.router.navigate(['/']);
      return false;
    } else {
      this.router.navigate(['/login'], {
        queryParams: { returnUrl: state.url },
      });
      return false;
    }
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return true;
  }
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return true;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return true;
  }
}
