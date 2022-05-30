import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SlideCardComponent } from './slide-card/slide-card.component';
import { ListItemComponent } from './list-item/list-item.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterComponent } from './register-page/register-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MovieCardComponent } from './movie-list/movie-card/movie-card.component';
import { TextReductionPipe } from './pipes/text-reduction.pipe';
import { NavHeaderBarComponent } from './nav-header-bar/nav-header-bar.component';
import { NavSidebarComponent } from './nav-sidebar/nav-sidebar.component';
import { NavLoggedInHeaderComponent } from './nav-logged-in-header/nav-logged-in-header.component';

import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { TmdbAPIResolverService } from './services/tmdb-api-resolver.service';
import { TmdbAPIService } from './services/tmdb-api.service';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'navheader', component: NavHeaderBarComponent },
  { path: 'movielist', component: MovieListComponent},
  { path: 'moviecard', component: MovieCardComponent},
  { path: 'moviedetails', component: MovieDetailsComponent },
  { path: 'moviedetails/:id', component: MovieDetailsComponent, resolve: {movie : TmdbAPIResolverService} },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
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
    YouTubePlayerModule,
    InfiniteScrollModule,
    MatProgressBarModule,
  ],
  providers: [TmdbAPIService, TmdbAPIResolverService],
  bootstrap: [AppComponent],
})
export class AppModule {}
