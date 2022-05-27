import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../shared/angular-material.module';

@NgModule({
  declarations: [RegisterComponent, LoginComponent],
  imports: [CommonModule, ReactiveFormsModule, AngularMaterialModule],
  exports: [RegisterComponent, LoginComponent],
})
export class AuthModule {}
