import { Component, Input, OnInit } from '@angular/core';
import { TmdbAPIService } from 'src/app/services/tmdb-api.service';
import { ResolveEnd, ResolveStart, Router } from '@angular/router';
import { filter, Observable, merge, map } from 'rxjs';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.sass']
})
export class MovieCardComponent implements OnInit {
  moviesList: any = []
  isLoading$!: Observable<boolean>;
  private _showLoader$!: Observable<boolean>;
  private _hideLoader$!: Observable<boolean>;

  @Input('movieName') movieName!: string
  seeMore: boolean = false
  throttle = 300;
  scrollDistance = 1;
  scrollUpDistance = 2;

  constructor(private movieAPI: TmdbAPIService, private router: Router ) { 
    
  }

  ngOnInit(): void {
    this.movieAPI.movies$.subscribe((movies: any) => {
      this.moviesList = [...movies]
      console.log(this.moviesList)
    })
    
    //mat-card-footer => Progress bar for Resolver
    this._showLoader$ = this.router.events.pipe(
      filter((e) => e instanceof ResolveStart),
      map(()=>true)
    );

    this._hideLoader$ = this.router.events.pipe(
      filter((e) => e instanceof ResolveEnd),
      map(()=>false)
    );
    
    this.isLoading$ = merge(this._hideLoader$, this._showLoader$);

  }

  toggleSeeMore() {
    console.log(this.seeMore)
    this.seeMore = this.seeMore === false ?  true : false;
  }

  showDetails(id: string) {
    this.movieAPI.getTrailer(id)
    this.router.navigate(["moviedetails/"+ id])
  }

  onScrollDown() {
    console.log('onScrollDown')
    // this.movieAPI.queryMovies()
  }

  onUp() {
    console.log('onUp')
  }
}
