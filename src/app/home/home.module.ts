import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { HomeSplashComponent } from './home-splash/home-splash.component';
import { HomeDownloadCardComponent } from './home-download-card/home-download-card.component';
import { AngularMaterialModule } from '../shared/angular-material.module';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  declarations: [HomeComponent, HomeSplashComponent, HomeDownloadCardComponent],
  imports: [CommonModule, RouterModule.forChild(routes), AngularMaterialModule],
  exports: [HomeComponent],
})
export class HomeModule {}
