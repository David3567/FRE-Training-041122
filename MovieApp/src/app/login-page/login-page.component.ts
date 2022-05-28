import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.sass'],
})
export class LoginPageComponent implements OnInit {
  loginForm!: FormGroup;
  registerData: any;
  data = {
    username: 'Priyanka',
    password: 'Priyanka28',
  };

  constructor(private fb: FormBuilder, private router: Router) {
    const state = this.router.getCurrentNavigation()?.extras.state
    this.registerData = state?.['formData']
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group(
      {
        userName: ['', [Validators.required]],
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
      },
    );

    this.loginForm.valueChanges.subscribe(console.log);
  }

  get userName() {
    return this.loginForm.get('userName');
  }

  get password() {
    return this.loginForm.get('password');
  }

  get rememberMe() {
    return this.loginForm.get('rememberMe');
  }

  logInName(group: AbstractControl): ValidationErrors | null {
    const name = group.get('userName')?.value;
    console.log(name !== this.data.username);
    return name !== this.data.username ? { notMatch: true } : null;
  }

  logInPass(group: AbstractControl): ValidationErrors | null {
    const pass = group.get('password')?.value;
    return pass === this.data.password ? { notMatch: false } : null;
  }
}
