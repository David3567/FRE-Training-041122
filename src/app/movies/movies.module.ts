/*~~~~~~~~~ Modules ~~~~~~~~~*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

/*~~~~~~~~~ Components ~~~~~~~~~*/
import { MoviesComponent } from './movies.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MoviesListsComponent } from './movies-lists/movies-lists.component';
import { MoviesItemComponent } from './movies-lists/movies-item/movies-item.component';
import { YouTubePlayerModule } from '@angular/youtube-player';

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
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    YouTubePlayerModule,
  ],
  exports: [MoviesComponent],
})
export class MoviesModule {}
