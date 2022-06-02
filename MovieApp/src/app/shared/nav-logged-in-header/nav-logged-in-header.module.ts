import { NgModule } from '@angular/core';
import { NavLoggedInHeaderComponent } from './nav-logged-in-header.component';
import { SharedModule } from '../shared.module';

@NgModule({
  declarations: [
    NavLoggedInHeaderComponent
  ],
  imports: [
    SharedModule,
    // CommonModule,
    // RouterModule.forChild([
    //   {
    //     path: '',
    //     component: NavLoggedInHeaderComponent
    // }
    // ]),

  ],
  exports: [
    NavLoggedInHeaderComponent
  ]
})
export class NavLoggedInHeaderModule { }
