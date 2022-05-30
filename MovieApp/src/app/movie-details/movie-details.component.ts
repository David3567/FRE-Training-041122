import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TmdbAPIService } from '../services/tmdb-api.service';
import { map, pipe } from 'rxjs';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.sass'],
})
export class MovieDetailsComponent implements OnInit {
  moviesTrailers: any = [];
  moviesDetails: any = {};
  constructor(private movieAPI: TmdbAPIService, private route: ActivatedRoute) {
    console.log('movie details');
    this.route.data.subscribe((trailers)=>{
      console.log(trailers['movie'])
      this.moviesTrailers = trailers['movie'];
      console.log(this.moviesTrailers);
    });
    
  }

  ngOnInit(): void {

    // this.movieAPI.movieDetails$.subscribe((details: any) => {
    //   this.moviesDetails = details;
    //   console.log(this.moviesDetails);
    // });
  }
}
