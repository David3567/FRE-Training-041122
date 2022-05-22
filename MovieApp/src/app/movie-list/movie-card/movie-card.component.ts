import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { fromEvent, tap } from 'rxjs';
import { TmdbAPIService } from 'src/app/services/tmdb-api.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.sass']
})
export class MovieCardComponent implements OnInit {
  moviesList: any = []
  @Input('movieName') movieName!: string
  // @Input('emptyInput') emptyInput!: boolean
  seeMore: boolean = false
  constructor(private movieAPI: TmdbAPIService) { }

  ngOnInit(): void {
    this.movieAPI.movies$.subscribe((movies: any) => {
      this.moviesList = [...movies]
      console.log(this.moviesList)
    })
  }

  toggleSeeMore() {
    console.log(this.seeMore)
    this.seeMore = this.seeMore === false ?  true : false;
  }

  showDetails(id: string) {
    console.log(id)
    this.movieAPI.getMovieTrailer(id)
  }
}
