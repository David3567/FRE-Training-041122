/*~~~~~~~~~ Modules ~~~~~~~~~*/
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

/*~~~~~~~~~ Angular Material Modules ~~~~~~~~~*/
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './shared/angular-material.module';

/*~~~~~~~~~ Components ~~~~~~~~~*/
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AuthModule } from './auth/auth.module';
import { AUTHSERVER } from './shared/injection-tokens';
import { MoviesInterceptorService } from './movies/movies-interceptor.service';
import { AuthInterceptor } from './auth/auth.interceptor';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    AngularMaterialModule,
    AuthModule,
  ],
  exports: [HeaderComponent],
  providers: [
    // authserver path;
    { provide: AUTHSERVER, useValue: 'http://localhost:4231' },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MoviesInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
