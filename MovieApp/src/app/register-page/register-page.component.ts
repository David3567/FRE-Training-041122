import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Route, Router } from '@angular/router';
import { debounceTime, fromEvent, tap } from 'rxjs';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.sass'],
})
export class RegisterComponent implements OnInit {
  isLinear = false;
  registerForm!: FormGroup;
  Backend_URL: string = environment.BACKEND_URL;
  RoleList: string[] = ['USER', 'ADMIN', 'SUPERUSER'];
  emailData: string;
  @ViewChild('emailInput', { static: true })
  emailInput!: ElementRef;
  takenEmail: boolean = false;

  get username() {
    return this.registerForm.get('username');
  }
  get email() {
    return this.registerForm.get('email');
  }
  get password() {
    return this.registerForm.get('password');
  }
  get passwordConfirm() {
    return this.registerForm.get('passwordConfirm');
  }
  get role() {
    return this.registerForm.get('role');
  }
  get tmdb_key() {
    return this.registerForm.get('tmdb_key');
  }

  constructor(
    private _formBuilder: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) {
    const state = this.router.getCurrentNavigation()?.extras.state;
    this.emailData = state?.['formData'].email;
  }

  ngOnInit(): void {
    fromEvent(this.emailInput.nativeElement, 'keyup')
      .pipe(
        debounceTime(500),
        tap((_) => {
          if (this.registerForm.value.email !== '') {
            this.http
              .post([environment.BACKEND_URL, 'check-email'].join('/'), {
                email: this.registerForm.value.email,
              })
              .subscribe((res: any) => (this.takenEmail = res));
          }
        })
      )
      .subscribe();

    this.registerForm = this._formBuilder.group(
      {
        username: ['', Validators.required],
        email: [this.emailData, [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.pattern(
              '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[A-Za-zd$@$!%*?&].{7,}'
            ),
          ],
        ],
        passwordConfirm: ['', [Validators.required]],
        role: ['USER'],
        tmdb_key: ['', Validators.required],
      },
      {
        validators: [this.matchPassword, this.checkKeyLenght],
      }
    );

    this.registerForm.valueChanges.subscribe();
  }

  matchPassword(group: AbstractControl): ValidationErrors | null {
    const password = group.get('password')?.value;
    const passwordConfirm = group.get('passwordConfirm')?.value;

    return password !== passwordConfirm ? { notMatch: true } : null;
  }

  checkKeyLenght(group: AbstractControl): ValidationErrors | null {
    const TMDBKey = group.get('tmdb_key')?.value;

    return TMDBKey.length < 15 ? { notMatch: true } : null;
  }

  onSubmit() {
    console.log('onSubmit');
    if (
      this.registerForm.valid &&
      confirm('Are you sure you want to submit?')
    ) {
      // "username": "test",
      // "password": "Test1234",
      // "email": "test@test.com",
      // "role": "USER",
      // "tmdb_key": "3bb1313f68bf6cb7d09bc39c38dd4b0c"
      this.http
        .post([this.Backend_URL, 'signup'].join('/'), {
          username: this.registerForm.value.username,
          password: this.registerForm.value.password,
          email: this.registerForm.value.email,
          role: this.registerForm.value.role,
          tmdb_key: this.registerForm.value.tmdb_key,
        })
        .subscribe((res: any) => {
          console.log(res);
          this.router.navigate(['/login'], {
            state: { formData: this.registerForm.value },
          });
        });
    }
  }

  alertIncomplete() {
    confirm('Please complete the entire form before submitting!');
    console.log(this.registerForm.value.role);
  }
}
