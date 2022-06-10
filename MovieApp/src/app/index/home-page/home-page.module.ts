import { NgModule } from '@angular/core';
import { HomePageComponent } from './home-page.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { CommonModule } from '@angular/common';

const routes: Routes = [{ path: '', component: HomePageComponent }];

@NgModule({
  declarations: [
    HomePageComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class HomePageModule { }
//test