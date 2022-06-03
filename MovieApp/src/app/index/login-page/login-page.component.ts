import { HttpClient } from '@angular/common/http';
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
  ValidationErrors,
  FormGroupDirective,
  NgForm,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { debounceTime, fromEvent, tap, catchError, map, of } from 'rxjs';
import { User } from 'src/app/interfaces/user.interface';
import { AuthLocalStorageService } from 'src/app/services/auth-local-storage.service';
import { environment } from 'src/environments/environment';

export class LoginMatcher implements ErrorStateMatcher {
  isErrorState(
    control: AbstractControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    return !!(control && control.invalid && (control.dirty || control.touched));
  }
}

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.sass'],
})
export class LoginPageComponent implements OnInit {
  @ViewChild('emailInput', { static: true }) emailInput!: ElementRef;
  loginForm!: FormGroup;
  matcher = new LoginMatcher();
  registerData: any;
  takenEmail?: boolean;
  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  get rememberMe() {
    return this.loginForm.get('rememberMe');
  }

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient,
    private auth: AuthLocalStorageService
  ) {
    const state = this.router.getCurrentNavigation()?.extras.state;
    this.registerData = state?.['formData'];
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[A-Za-zd$@$!%*?&].{5,}'
          ),
        ],
      ],
      rememberMe: [false, [Validators.requiredTrue]],
    });

    fromEvent(this.emailInput.nativeElement, 'keyup')
      .pipe(
        debounceTime(500),
        tap((_) => {
          if (this.loginForm.value.email !== '') {
            this.http
              .post([environment.BACKEND_URL, 'check-email'].join('/'), {
                email: this.loginForm.value.email,
              })
              .subscribe((res: any) => (this.takenEmail = res));
          }
        })
      )
      .subscribe();

    this.auth.user$?.subscribe((userData) => {
      console.log('userData: ', userData);
    });
  }

  signIn() {
    console.log('log in');
    const loginData: User = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
    };
    this.auth.loginAuth(loginData).subscribe(console.log);
  }

  signUp() {
    console.log('signUp');
    this.router.navigate(['/movielist'], {
      state: { formData: this.loginForm.value },
    });
  }
}
