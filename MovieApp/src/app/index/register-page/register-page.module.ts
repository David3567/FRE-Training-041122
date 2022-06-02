import { NgModule } from '@angular/core';
import { RegisterComponent } from './register-page.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    RegisterComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: RegisterComponent 
      }
    ]),
  ]
})
export class RegisterPageModule { }
