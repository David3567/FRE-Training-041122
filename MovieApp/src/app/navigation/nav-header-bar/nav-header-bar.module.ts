import { NgModule } from '@angular/core';
import { NavHeaderBarComponent } from './nav-header-bar.component';
import { SharedModule } from '../../shared/shared.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    NavHeaderBarComponent
  ],
  imports: [
    SharedModule,
    CommonModule
  ]
})
export class NavHeaderBarModule { }
