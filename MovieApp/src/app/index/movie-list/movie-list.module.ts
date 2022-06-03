import { NgModule } from '@angular/core';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MovieListComponent } from './movie-list.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { MovielistGuard } from 'src/app/guards/movielist.guard';

const routes: Routes = [
  {
    path: '',
    component: MovieListComponent,
    canActivate: [MovielistGuard],
    canActivateChild: [MovielistGuard],
  },
];

@NgModule({
  declarations: [MovieCardComponent, MovieListComponent],
  imports: [SharedModule, RouterModule.forChild(routes)],
})
export class MovieListModule {}
