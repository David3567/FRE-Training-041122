import { NgModule } from '@angular/core';
import { NavHeaderBarComponent } from './nav-header-bar.component';
import { SharedModule } from '../shared.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    NavHeaderBarComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    // RouterModule.forChild([
    //   {
    //     path: '',
    //     component: NavHeaderBarComponent 
    //   }
    // ]),
  ]
})
export class NavHeaderBarModule { }
