import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardlistComponent } from './cardlist/cardlist.component';
import { CardComponent } from './cardlist/card/card.component';
import { CardlistModule} from './cardlist/cardlist.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardlistModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
