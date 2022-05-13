import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgfortrackbyComponent } from './ngfortrackby/ngfortrackby.component';
import { CustomDirective } from './customdirective/custom.directive';
import { CustomdirectiveComponent } from './customdirective/customdirective.component';

@NgModule({
  declarations: [
    AppComponent,
    NgfortrackbyComponent,
    CustomDirective,
    CustomdirectiveComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
