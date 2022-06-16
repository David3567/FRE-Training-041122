import { NgModule } from '@angular/core';
import { NavSidebarComponent } from './nav-sidebar.component';
import { SharedModule } from '../../shared/shared.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    NavSidebarComponent
  ],
  imports: [
    SharedModule,
    CommonModule
  ]
})
export class NavSidebarModule { }
