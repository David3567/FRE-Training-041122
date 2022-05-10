import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ArticlesModule } from './articles/articles.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ArticlesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
