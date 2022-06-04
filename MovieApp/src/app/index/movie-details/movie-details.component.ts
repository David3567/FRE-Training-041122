import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TmdbAPIService } from 'src/app/services/tmdb-api.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.sass'],
})
export class MovieDetailsComponent implements OnInit {
  moviesTrailers: any = [];
  moviesDetails: any = {};
  movieImg = '';

  star = '&star;';
  starf = '&starf;';
  array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  notFound = 'Page not Found!!';

  constructor(private route: ActivatedRoute, private movie: TmdbAPIService) {

    //Details from Resolver are rendered
    this.route.data.subscribe((trailers) => {
      this.moviesTrailers = trailers['movie'];
    });

    this.route.data.subscribe((details) => {
      this.moviesDetails = details['movieId'];
    });
  }

  ngOnInit(): void {
    this.movieImg = this.movie.getMovieImage(this.moviesDetails.poster_path);
  }
}
