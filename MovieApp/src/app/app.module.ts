import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';

import { SlideCardComponent } from './slide-card/slide-card.component';

import { ListItemComponent } from './list-item/list-item.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterComponent } from './register-page/register-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieListComponent } from './movie-list/movie-list.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { MovieCardComponent } from './movie-list/movie-card/movie-card.component';
import { MatInputModule } from '@angular/material/input';
import { TextReductionPipe } from './pipes/text-reduction.pipe';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

<<<<<<< HEAD
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NavHeaderBarComponent } from './nav-header-bar/nav-header-bar.component';
import { NavSidebarComponent } from './nav-sidebar/nav-sidebar.component';
=======
import { NavHeaderBarComponent } from './nav-header-bar/nav-header-bar.component';
import { NavSidebarComponent } from './nav-sidebar/nav-sidebar.component';
import { NavLoggedInHeaderComponent } from './nav-logged-in-header/nav-logged-in-header.component';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
>>>>>>> 044f090d2fbb698c1e1b95b12b549d956de91132
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
<<<<<<< HEAD
import { MoviePageComponent } from './movie-page/movie-page.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'navheader', component: NavHeaderBarComponent },
  { path: 'movielist', component: MovieListComponent },
  { path: 'moviecard', component: MovieCardComponent },
  { path: '**', component: NotFoundComponent },
=======
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

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
>>>>>>> 044f090d2fbb698c1e1b95b12b549d956de91132
];

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomePageComponent,
    LoginPageComponent,
    SlideCardComponent,
    ListItemComponent,
    NavHeaderBarComponent,
    NavSidebarComponent,
    MovieListComponent,
    MovieCardComponent,
    TextReductionPipe,
    NavLoggedInHeaderComponent,
    NotFoundComponent,
<<<<<<< HEAD
    MoviePageComponent,
=======
    MovieDetailsComponent,
>>>>>>> 044f090d2fbb698c1e1b95b12b549d956de91132
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
<<<<<<< HEAD
=======
    MatCheckboxModule, 
    MatButtonModule,
>>>>>>> 044f090d2fbb698c1e1b95b12b549d956de91132
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
