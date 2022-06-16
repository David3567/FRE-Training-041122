import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { TmdbAPIResolverService } from './services/tmdb-api-resolver.service';
import { TmdbAPIService } from './services/tmdb-api.service';
import { TmdbIDResolverService } from './services/tmdb-id-resolver.service';

import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthLocalStorageService } from './services/auth-local-storage.service';
import { appInitializer } from './app.initializer';

import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthLocalInterceptor } from './interceptors/auth-local.interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SharedModule,
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializer,
      multi: true,
      deps: [AuthLocalStorageService],
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthLocalInterceptor,
      multi: true,
    },
    TmdbAPIService,
    TmdbAPIResolverService,
    TmdbIDResolverService,
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
