import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';

import { HomeComponent } from './home.component';
import { HomeSplashComponent } from './home-splash/home-splash.component';
import { HomeDownloadCardComponent } from './home-download-card/home-download-card.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  declarations: [HomeComponent, HomeSplashComponent, HomeDownloadCardComponent],
  imports: [CommonModule, RouterModule.forChild(routes), MatButtonModule],
  exports: [HomeComponent],
})
export class HomeModule {}
