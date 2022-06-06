import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TmdbAPIResolverService } from './services/tmdb-api-resolver.service';
import { TmdbAPIService } from './services/tmdb-api.service';
import { TmdbIDResolverService } from './services/tmdb-id-resolver.service';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./index/home-page/home-page.module').then(
        (m) => m.HomePageModule
      ),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./index/register-page/register-page.module').then(
        (m) => m.RegisterPageModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./index/login-page/login-page.module').then(
        (m) => m.LoginPageModule
      ),
  },
  {
    path: 'movielist',
    loadChildren: () =>
      import('./index/movie-list/movie-list.module').then(
        (m) => m.MovieListModule
      ),
  },

  {
    path: 'moviedetails',
    loadChildren: () =>
      import('./index/movie-details/movie-details.module').then(
        (m) => m.MovieDetailsModule
      ),
  },

  {
    path: 'userupgrade',
    loadChildren: () =>
      import('./index/user-upgrade/user-upgrade.module').then(
        (m) => m.userUpgradeModule
      ),
  },

  // Multiple Resolvers
  {
    path: 'moviedetails/:id',
    loadChildren: () =>
      import('./index/movie-details/movie-details.module').then(
        (m) => m.MovieDetailsModule
      ),
    resolve: {
      movie: TmdbAPIResolverService,
      movieId: TmdbIDResolverService,
    },
  },

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '**',
    loadChildren: () =>
      import('./index/not-found/not-found.module').then(
        (m) => m.NotFoundModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [TmdbAPIService, TmdbAPIResolverService, TmdbIDResolverService],
})
export class AppRoutingModule {}
