import { NgModule } from '@angular/core';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MovieListComponent } from './movie-list.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    MovieCardComponent,
    MovieListComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path:'', 
        component: MovieListComponent
      },
      {
        path: 'moviecard',
        component: MovieCardComponent,
      }
    ]),
  ]
})
export class MovieListModule { }
