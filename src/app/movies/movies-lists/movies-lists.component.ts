import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Movie } from '../movies.model';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies-lists',
  templateUrl: './movies-lists.component.html',
  styleUrls: ['./movies-lists.component.scss'],
})
export class MoviesListsComponent implements OnInit, OnDestroy {
  movies!: Movie[];
  subscription!: Subscription;
  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.subscription = this.moviesService.moviesChanged.subscribe(
      (movies: Movie[]) => {
        this.movies = movies;
      }
    );
    this.movies = this.moviesService.getMovies();
    // console.log(this.movies);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
