import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.sass']
})
export class RegisterComponent implements OnInit {
  isLinear = false;
  registerForm!: FormGroup;
  get username() { return this.registerForm.get('username') }

  get email() { return this.registerForm.get('email') }

  get password() { return this.registerForm.get('password') }

  get passwordConfirm() { return this.registerForm.get('passwordConfirm') }

  get apikey() {
    return this.registerForm.get('apikey')
  }

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this._formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[A-Za-z\d$@$!%*?&].{7,}')]],
      passwordConfirm: ['', [Validators.required]],
      apikey: ['', Validators.required],
    }, {
      validators: [this.matchPassword] 
    });

    this.registerForm.valueChanges.subscribe(console.log)
    console.log(this.email?.touched)
  }

  matchPassword(group: AbstractControl): ValidationErrors | null {
    const password = group.get('password')?.value;
    const passwordConfirm = group.get('passwordConfirm')?.value;

    return password !== password ? { notMatch: true } : null;
  }


}

