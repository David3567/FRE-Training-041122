import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Movie } from './movies.model';

@Injectable({ providedIn: 'root' })
export class MoviesService implements OnInit {
  //Moive list data & subject
  movieTrailerId!: string;
  movies: Movie[] = [];

  moviesChanged = new Subject<Movie[]>();
  movieTrailerIdChanged = new Subject<string>();

  constructor() {}

  ngOnInit(): void {}

  setMovie(movies: Movie[]) {
    /**
     * On scroll all the new movies data from pagination are added to existing data.
     */
    this.movies = this.movies.concat(movies);
    this.moviesChanged.next(this.movies.slice());
  }

  getMovies() {
    return this.movies.slice();
  }

  setMovieTrailerId(key: string) {
    this.movieTrailerId = key;
    this.movieTrailerIdChanged.next(this.movieTrailerId);
  }
}
