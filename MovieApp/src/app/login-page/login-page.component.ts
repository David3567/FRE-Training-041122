import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
<<<<<<< HEAD
import { User } from '../interfaces/user.interface';

const data: User[] = [
  {
    username: 'Aaron',
    password: '1234',
  },
];
=======
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
>>>>>>> 044f090d2fbb698c1e1b95b12b549d956de91132

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.sass'],
})
export class LoginPageComponent implements OnInit {
  loginForm!: FormGroup;

<<<<<<< HEAD
  public selected!: boolean;
  datas = {
    username: 'Aaron',
    password: '1234',
  };

  @Output() logIn = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  signUser() {
    if (this.datas.username === 'Aaron' && this.datas.password === '1234') {
      this.selected = true;
    } else {
      this.selected = false;
    }
  }

  handleClear() {
    this.datas.username = ' ';
    this.datas.password = ' ';
  }

  saveValues() {
    this.datas.username = this.datas.username;
    this.datas.password = this.datas.password;
  }

  login(a: any) {
    this.logIn.emit();
=======
  data = {
    username: 'Priyanka',
    password: 'Priyanka28',
  };

  constructor(private fb: FormBuilder) {}

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
      {
        // validators: [this.logInName, this.logInPass]
      }
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
>>>>>>> 044f090d2fbb698c1e1b95b12b549d956de91132
  }
}
