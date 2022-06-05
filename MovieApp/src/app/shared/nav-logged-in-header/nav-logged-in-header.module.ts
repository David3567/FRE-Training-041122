import { NgModule } from '@angular/core';
import { NavLoggedInHeaderComponent } from './nav-logged-in-header.component';
import { SharedModule } from '../shared.module';

@NgModule({
  declarations: [
    NavLoggedInHeaderComponent
  ],
  imports: [
    SharedModule,
  ],
  exports: [
    NavLoggedInHeaderComponent
  ]
})
export class NavLoggedInHeaderModule { }
