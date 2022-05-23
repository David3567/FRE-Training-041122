import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { DataStorageService } from '../shared/data-storage-service';
import { MoiveDetail, Movie } from './movies.model';

@Injectable({ providedIn: 'root' })
export class MoviesService implements OnInit {
  //Moive list data & subject
  movieTrailerId!: string;
  movies: Movie[] = [];
  moviesChanged = new Subject<Movie[]>();
  movieTrailerIdChanged = new Subject<string>();

  //movie detail data & subject
  movieDetail!: MoiveDetail;
  movieDetailChanged = new Subject<MoiveDetail>();

  constructor() {}

  ngOnInit(): void {
    this.movieDetailChanged.subscribe((result) => console.log(result));
  }

  setMovie(movies: Movie[]) {
    this.movies = movies;
    this.moviesChanged.next(this.movies.slice());
  }

  getMovies() {
    return this.movies.slice();
  }

  setMovieDetail(movieDetail: MoiveDetail) {
    this.movieDetail = movieDetail;
    this.movieDetailChanged.next({ ...this.movieDetail });
  }

  getMovieDetail() {
    return { ...this.movieDetail };
  }

  setMovieTrailerId(key: string) {
    this.movieTrailerId = key;
    this.movieTrailerIdChanged.next(this.movieTrailerId);
  }
}
