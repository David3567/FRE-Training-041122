/*~~~~~~~~~ Modules ~~~~~~~~~*/
import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

/*~~~~~~~~~ Angular Material Modules ~~~~~~~~~*/
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './shared/angular-material.module';

/*~~~~~~~~~ Components ~~~~~~~~~*/
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

export const AUTHSERVER = new InjectionToken<string>('');

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    AngularMaterialModule,
  ],
  exports: [HeaderComponent],
  providers: [
    // authserver path;
    { provide: AUTHSERVER, useValue: 'http://localhost:4231' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
