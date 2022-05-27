/*~~~~~~~~~ Modules ~~~~~~~~~*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

/*~~~~~~~~~ Components ~~~~~~~~~*/
import { MoviesComponent } from './movies.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MoviesListsComponent } from './movies-lists/movies-lists.component';
import { MoviesItemComponent } from './movies-lists/movies-item/movies-item.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { AngularMaterialModule } from '../shared/angular-material.module';

const routes: Routes = [
  { path: '', component: MoviesComponent },
  { path: ':id', component: MovieDetailsComponent },
];

@NgModule({
  declarations: [
    MoviesComponent,
    MoviesItemComponent,
    MovieDetailsComponent,
    MoviesListsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    YouTubePlayerModule,
    AngularMaterialModule,
  ],
  exports: [MoviesComponent],
})
export class MoviesModule {}
