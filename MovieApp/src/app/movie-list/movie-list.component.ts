import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ResolveEnd, ResolveStart, Router } from '@angular/router';
import { mapTo, debounceTime, filter, fromEvent, Observable, Subject, tap, merge, map } from 'rxjs';
import { TmdbAPIService } from '../services/tmdb-api.service';
  
@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.sass']
})
export class MovieListComponent implements OnInit {

  isLoading$!: Observable<boolean>;
  private _showLoader$!: Observable<boolean>;
  private _hideLoader$!: Observable<boolean>;

  @ViewChild('movieNameInput', {static: true}) movieNameInput!: ElementRef;
  moviesList: any = [];
  value: string = '';
  movieName: string = '';
  show: boolean = true;
  throttle = 300;
  scrollDistance = 1;
  scrollUpDistance = 2;
  popularPageNum = 1
  searchPageNum = 1

  constructor(private movieAPI: TmdbAPIService, private router: Router) {
   }

  ngOnInit(): void {
    this.movieAPI.queryMovies(true, 1);

    fromEvent(this.movieNameInput.nativeElement, 'keyup').pipe(
      debounceTime(500),
      filter(_ => {
        const movieName = this.movieNameInput.nativeElement.value;
        console.log(movieName);

        if(movieName === '') {
          this.movieAPI.queryMovies(true, 1);
          return false;
        }
        return true;
      }),
      tap(_ => {
        const movieName = this.movieNameInput.nativeElement.value;
        this.movieAPI.queryMovies(false, 1, movieName);
      })
    ).subscribe();
  }

  onScrollDown() {
    console.log('onScrollDown')
    console.log(this.movieNameInput.nativeElement.value)
    if (this.movieNameInput.nativeElement.value === '') {
      // Popular search
      this.popularPageNum++
      this.movieAPI.queryMovies(true, this.popularPageNum, undefined, true)
    } else {
      // Query search
      this.searchPageNum++
      this.movieAPI.queryMovies(false, this.searchPageNum, this.movieNameInput.nativeElement.value, true)
    }
  }

  onUp() {
    console.log('onUp')
    console.log(this.movieNameInput.nativeElement.value)
  }
}
