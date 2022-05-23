import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule  } from '@angular/forms';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { LoginPageComponent } from './login-page/login-page.component'
import { RegisterComponent } from './register-page/register-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieListComponent } from './movie-list/movie-list.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { MovieCardComponent } from './movie-list/movie-card/movie-card.component'
import { MatInputModule } from '@angular/material/input';
import { TextReductionPipe } from './pipes/text-reduction.pipe';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { NavHeaderBarComponent } from './nav-header-bar/nav-header-bar.component';
import { NavSidebarComponent } from './nav-sidebar/nav-sidebar.component';
import { NavLoggedInHeaderComponent } from './nav-logged-in-header/nav-logged-in-header.component';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { YouTubePlayerModule } from '@angular/youtube-player';


const routes: Routes = [
  {path: 'home', component: HomePageComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'navheader', component: NavHeaderBarComponent},
  {path: 'movielist', component: MovieListComponent},
  {path: 'moviecard', component: MovieCardComponent},
  {path: 'moviedetails', component: MovieDetailsComponent},
  {path: 'moviedetails/:id', component: MovieDetailsComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomePageComponent,
    LoginPageComponent,
    NavHeaderBarComponent,
    NavSidebarComponent,
    MovieListComponent,
    MovieCardComponent,
    TextReductionPipe,
    NavLoggedInHeaderComponent,
    NotFoundComponent,
    MovieDetailsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatListModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatCheckboxModule, 
    MatButtonModule,
    YouTubePlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
