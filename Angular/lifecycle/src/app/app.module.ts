import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './lifecycle/child/child.component';
import { GrandChildComponent } from './lifecycle/grandchild/grandchild.component';
import { MainComponent } from './lifecycle/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    GrandChildComponent,
    ChildComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
