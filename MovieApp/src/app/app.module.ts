import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { TmdbAPIResolverService } from './services/tmdb-api-resolver.service';
import { TmdbAPIService } from './services/tmdb-api.service';
import { TmdbIDResolverService } from './services/tmdb-id-resolver.service';

import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    NgbModule,
  ],
  providers: [TmdbAPIService, TmdbAPIResolverService, TmdbIDResolverService],
  bootstrap: [AppComponent]
})
export class AppModule {}
