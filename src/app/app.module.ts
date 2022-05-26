/*~~~~~~~~~ Modules ~~~~~~~~~*/
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

/*~~~~~~~~~ Angular Material Modules ~~~~~~~~~*/
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/*~~~~~~~~~ Components ~~~~~~~~~*/
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  exports: [HeaderComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
