import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataComponent } from './data/data.component';
import { DataService } from './services/data.service';

@NgModule({
  declarations: [AppComponent, DataComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [
    DataService,
    { provide: 'base_url', useValue: 'https://api.themoviedb.org/3' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
