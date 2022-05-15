import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { debounceTime, filter, fromEvent, tap } from 'rxjs';
import { TmdbAPIService } from '../services/tmdb-api.service';
  
@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.sass']
})
export class MovieListComponent implements OnInit {
  @ViewChild('movieNameInput', {static: true}) movieNameInput!: ElementRef;
  moviesList: any = []
  value: string = ''
  movieName: string = ''

  constructor(private movieAPI: TmdbAPIService) { }

  ngOnInit(): void {
    fromEvent(this.movieNameInput.nativeElement, 'keyup').pipe(
      debounceTime(500),
      filter(_ => {
        const movieName = this.movieNameInput.nativeElement.value
        // if (movieName === '') {
        //   this.moviesList = []
        // }
        return true
      }),
      tap(_ => {
        const movieName = this.movieNameInput.nativeElement.value
        this.movieAPI.getMovies(movieName)
      })
    ).subscribe()
  }

}
