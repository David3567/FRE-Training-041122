import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TmdbAPIService } from '../services/tmdb-api.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.sass'],
})
export class MovieDetailsComponent implements OnInit {
  moviesTrailers: any = [];
  moviesDetails: any = {};
  constructor(private movieAPI: TmdbAPIService, private route: ActivatedRoute) {
    this.route.params.subscribe((params: any) =>
      movieAPI.getMovieTrailer(params.id)
    );
    this.route.params.subscribe((params: any) =>
      movieAPI.getMovieByID(params.id)
    );
  }

  ngOnInit(): void {
    console.log('movie details');
    this.movieAPI.movieTrailers$.subscribe((trailers: any) => {
      this.moviesTrailers = [...trailers];
      console.log(this.moviesTrailers);
    });

    this.movieAPI.movieDetails$.subscribe((details: any) => {
      this.moviesDetails = details;
      console.log(this.moviesDetails);
    });
  }
}
