import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { fromEvent, Subject, tap } from 'rxjs';
import { IInfiniteScrollEvent } from 'ngx-infinite-scroll';
import { TmdbAPIService } from 'src/app/services/tmdb-api.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.sass']
})
export class MovieCardComponent implements OnInit {
  moviesList: any = []
  @Input('movieName') movieName!: string
  seeMore: boolean = false
  throttle = 300;
  scrollDistance = 1;
  scrollUpDistance = 2;

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

  onScrollDown() {
    console.log('onScrollDown')
    // this.movieAPI.queryMovies()
  }

  onUp() {
    console.log('onUp')
  }
}
