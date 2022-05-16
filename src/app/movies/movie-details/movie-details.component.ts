import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MoiveDetail } from '../movies.model';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit, OnDestroy {
  movieDetail!: MoiveDetail;

  //subscribe and destory
  movieDetailSubs!: Subscription;

  constructor(private movieService: MoviesService) {}

  ngOnInit(): void {
    this.movieDetailSubs = this.movieService.movieDetailChanged.subscribe(
      (detail: MoiveDetail) => {
        this.movieDetail = detail;
      }
    );
    this.movieDetail = this.movieService.getMovieDetail();
  }

  ngOnDestroy(): void {
    this.movieDetailSubs.unsubscribe();
  }
}
