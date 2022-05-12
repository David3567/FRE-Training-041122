import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';

import { HomeComponent } from './home.component';
import { HomeSplashComponent } from './home-splash/home-splash.component';
import { HomeDownloadCardComponent } from './home-download-card/home-download-card.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    HomeComponent,
    HomeSplashComponent,
    HomeDownloadCardComponent,
  ],
  imports: [CommonModule, MatButtonModule, AppRoutingModule],
  exports: [HomeComponent, HomeSplashComponent ],
})
export class HomeModule {}
