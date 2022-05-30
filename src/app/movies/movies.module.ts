/*~~~~~~~~~ Modules ~~~~~~~~~*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { IvyCarouselModule } from 'angular-responsive-carousel';

/*~~~~~~~~~ Components ~~~~~~~~~*/
import { MoviesComponent } from './movies.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MoviesListsComponent } from './movies-lists/movies-lists.component';
import { MoviesItemComponent } from './movies-lists/movies-item/movies-item.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { AngularMaterialModule } from '../shared/angular-material.module';
import { SpinnerComponent } from '../shared/spinner/spinner.component';
import { MovieDetailsResolve } from './movie-details/moive-details-resolver.service';

const routes: Routes = [
  { path: '', component: MoviesComponent },
  {
    path: ':id',
    component: MovieDetailsComponent,
    resolve: { detail: MovieDetailsResolve },
  },
];

@NgModule({
  declarations: [
    MoviesComponent,
    MoviesItemComponent,
    MovieDetailsComponent,
    MoviesListsComponent,
    SpinnerComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    YouTubePlayerModule,
    AngularMaterialModule,
    InfiniteScrollModule,
    IvyCarouselModule,
  ],
  exports: [MoviesComponent],
})
export class MoviesModule {}
