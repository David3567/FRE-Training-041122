import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, map, switchMap, take } from 'rxjs/operators';
import { AUTHSERVER } from 'src/app/shared/injection-tokens';

@Injectable({
  providedIn: 'root',
})
export class CustomValidators {
  constructor(
    private readonly http: HttpClient,
    @Inject(AUTHSERVER) private readonly authServerPath: string
  ) {}

  static passwordNotMatched(
    control: AbstractControl
  ): { [s: string]: boolean } | null {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    if (password !== confirmPassword) {
      return { passwordNotMatched: true };
    }
    return null;
  }
  email(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      const email = control.value;
      return control.valueChanges.pipe(
        debounceTime(500),
        switchMap(() => {
          return this.http.post<boolean>(
            [this.authServerPath, 'auth', 'check-email'].join('/'),
            { email }
          );
        }),
        map((emailTaken) => {
          return emailTaken ? { taken: true } : null;
        }),
        take(1)
      );
    };
  }
}
