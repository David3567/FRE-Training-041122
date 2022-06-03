import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.sass'],
})
export class MovieDetailsComponent implements OnInit {
  moviesTrailers: any = [];
  moviesDetails: any = {};

  constructor(private route: ActivatedRoute) {
    //Details from Resolver are rendered
    this.route.data.subscribe((trailers) => {
      this.moviesTrailers = trailers['movie'];
    });

    this.route.data.subscribe((details) => {
      this.moviesDetails = details['movieId'];
    });
  }

  ngOnInit(): void {}
}
