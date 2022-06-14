import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { debounceTime, filter, fromEvent, Observable, tap } from 'rxjs';
import { AuthLocalStorageService } from 'src/app/services/auth-local-storage.service';
import { TmdbAPIService } from '../../services/tmdb-api.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.sass'],
})
export class MovieListComponent implements OnInit {
  isLoading$!: Observable<boolean>;
  private _showLoader$!: Observable<boolean>;
  private _hideLoader$!: Observable<boolean>;

  @ViewChild('movieNameInput', { static: true }) movieNameInput!: ElementRef;
  moviesList: any = [];
  value: string = '';
  movieName: string = '';
  show: boolean = true;
  throttle = 300;
  scrollDistance = 1;
  scrollUpDistance = 2;
  popularPageNum = 1;
  searchPageNum = 1;
  api: string = '';

  constructor(private movieAPI: TmdbAPIService, private router: Router, private readonly authService: AuthLocalStorageService) {}

  ngOnInit(): void {
    const {JWToken, username, tmdb_key} = this.authService.userValue;

    if(JWToken && username && tmdb_key){
      this.api = tmdb_key;
      console.log('api:',this.api);
    }

    this.movieAPI.queryMovies(true, 1 , this.api);

    fromEvent(this.movieNameInput.nativeElement, 'keyup')
      .pipe(
        debounceTime(500),
        filter((_) => {
          const movieName = this.movieNameInput.nativeElement.value;
          console.log(movieName);

          if (movieName === '') {
            this.movieAPI.queryMovies(true, 1);
            return false;
          }
          return true;
        }),
        tap((_) => {
          const movieName = this.movieNameInput.nativeElement.value;
          this.movieAPI.queryMovies(false, 1, this.api, movieName);
        })
      )
      .subscribe();
  }

  onScrollDown() {
    console.log('onScrollDown');
    console.log(this.movieNameInput.nativeElement.value);
    if (this.movieNameInput.nativeElement.value === '') {
      // Popular search
      this.popularPageNum++;
      this.movieAPI.queryMovies(true, this.popularPageNum, this.api, undefined, true);
    } else {
      // Query search
      this.searchPageNum++;
      this.movieAPI.queryMovies(
        false,
        this.searchPageNum,
        this.api,
        this.movieNameInput.nativeElement.value,
        true
      );
    }
  }

  onUp() {
    console.log('onUp');
    console.log(this.movieNameInput.nativeElement.value);
  }
}
