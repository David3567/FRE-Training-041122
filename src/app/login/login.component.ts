import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  mForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: [
      '',
      [
        Validators.required,
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
      ],
    ],
  });

  constructor(private fb: FormBuilder) {}

  get email(): AbstractControl {
    //this is okay because form group is never modified
    return this.mForm.get('email')!;
  }
  get password(): AbstractControl {
    //this is okay because form group is never modified
    return this.mForm.get('password')!;
  }
}
