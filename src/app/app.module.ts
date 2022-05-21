/*~~~~~~~~~ Modules ~~~~~~~~~*/
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeModule } from './home/home.module';
/*~~~~~~~~~ Angular Material Modules ~~~~~~~~~*/
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { YouTubePlayerModule } from '@angular/youtube-player';
/*~~~~~~~~~ Components ~~~~~~~~~*/
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';
import { MoviesListsComponent } from './movies/movies-lists/movies-lists.component';
import { MoviesItemComponent } from './movies/movies-lists/movies-item/movies-item.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HeaderComponent,
    MoviesComponent,
    MovieDetailsComponent,
    MoviesListsComponent,
    MoviesItemComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HomeModule,
    MatCardModule,
    MatGridListModule,
    MatInputModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    FlexLayoutModule,
    AppRoutingModule,
    HttpClientModule,
    YouTubePlayerModule
  ],
  exports: [HeaderComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
