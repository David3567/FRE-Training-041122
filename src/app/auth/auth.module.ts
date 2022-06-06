import { NgModule } from '@angular/core';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../shared/angular-material.module';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/spinner/shared.module';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  declarations: [RegisterComponent, LoginComponent],
  imports: [
    ReactiveFormsModule,
    AngularMaterialModule,
    RouterModule.forChild(routes),
    SharedModule,
  ],
  exports: [RegisterComponent, LoginComponent],
})
export class AuthModule {}
