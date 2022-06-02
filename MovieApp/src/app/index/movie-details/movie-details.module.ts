import { NgModule } from '@angular/core';
import { MovieDetailsComponent } from './movie-details.component';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{path:'', component: MovieDetailsComponent }]

@NgModule({
  declarations: [
    MovieDetailsComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class MovieDetailsModule { }
