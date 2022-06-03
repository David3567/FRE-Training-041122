import { NgModule } from '@angular/core';
import { MovieDetailsComponent } from './movie-details.component';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { MoviedatailsGuard } from 'src/app/guards/moviedatails.guard';

const routes: Routes = [
  {
    path: '',
    component: MovieDetailsComponent,
    canActivate: [MoviedatailsGuard],
  },
];

@NgModule({
  declarations: [MovieDetailsComponent],
  imports: [SharedModule, RouterModule.forChild(routes)],
})
export class MovieDetailsModule {}
