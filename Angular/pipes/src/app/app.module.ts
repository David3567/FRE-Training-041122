import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustompipeComponent } from './custompipe/custompipe.component';
import { MyPipePipe } from './custompipe/my-pipe.pipe';

@NgModule({
  declarations: [AppComponent, CustompipeComponent, MyPipePipe],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
