import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from './custom-validators';
import { Role, UserInfo } from './register.models';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  /**
   * implement error property for backend registration errors
   */
  errors = null;
  showPassword: boolean = false;
  showConfirmPassword: boolean = false;
  registerForm!: FormGroup;
  roles: Role[] = [
    { value: 'user', displayValue: 'User' },
    { value: 'admin', displayValue: 'Admin' },
    { value: 'developer', displayValue: 'Developer' },
  ];
  constructor(
    private formBuilder: FormBuilder,
    private readonly customValidator: CustomValidators // private readonly authService: AuthService
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group(
      {
        username: [
          '',
          [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(20),
          ],
        ],
        email: [
          '',
          [Validators.required, Validators.email],
          this.customValidator.email(),
        ],
        password: [
          '',
          [
            Validators.required,
            Validators.pattern(
              '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}'
            ),
          ],
        ],
        confirmPassword: ['', [Validators.required]],
        role: ['user', [Validators.required]],
        apikey: ['', [Validators.required, Validators.pattern(/^[a-z0-9]+$/)]],
      },
      { validator: CustomValidators.passwordNotMatched }
    );
  }

  get username() {
    return this.registerForm.get('username');
  }
  get email() {
    return this.registerForm.get('email');
  }
  get password() {
    return this.registerForm.get('password');
  }
  get confirmpassword() {
    return this.registerForm.get('confirmpassword');
  }
  get apikey() {
    return this.registerForm.get('apikey');
  }

  onRegister() {
    const userInfo: UserInfo = {
      username: this.username?.value,
      password: this.password?.value,
      email: this.email?.value,
      role: this.registerForm.get('role')?.value,
      tmdbkey: this.apikey?.value,
    };
    // this.authService.register(userInfo);
  }

  onShowPassword() {
    this.showPassword = !this.showPassword;
  }

  onShowConfirmPassword() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }
}

//Helloworld1!
