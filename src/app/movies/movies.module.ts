/*~~~~~~~~~ Modules ~~~~~~~~~*/
import { NgModule } from '@angular/core';
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
import { MovieDetailsResolve } from './movie-details/moive-details-resolver.service';
import { SharedModule } from '../shared/spinner/shared.module';
import { AuthGuard } from '../auth/auth.guards';

const routes: Routes = [
  { path: '', component: MoviesComponent, canActivate: [AuthGuard] },
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
  ],
  imports: [
    RouterModule.forChild(routes),
    YouTubePlayerModule,
    AngularMaterialModule,
    InfiniteScrollModule,
    IvyCarouselModule,
    SharedModule,
  ],
  exports: [MoviesComponent],
})
export class MoviesModule {}
