import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataStorageService } from 'src/app/shared/data-storage-service';
import { MovieDetail } from '../movies.model';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit, OnDestroy {
  movieDetail!: MovieDetail;
  movieTrailerId!: string;
  movieDetailId!: number;
  showTrailer: boolean = false;

  //subscribe and destory
  movieDetailSubs!: Subscription;
  movieTrailerSub!: Subscription;

  constructor(
    private movieService: MoviesService,
    private route: ActivatedRoute,
    private dataStorageService: DataStorageService
  ) {}

  ngOnInit(): void {
    this.movieTrailerSub = this.movieService.movieTrailerIdChanged.subscribe(
      (movieId: string) => {
        this.movieTrailerId = movieId;
      }
    );

    //Accessing the Resolved Data
    this.movieDetailSubs = this.route.data.subscribe((params: Params) => {
      this.movieDetail = params['detail'];
      this.movieDetailId = this.movieDetail.id;
    });
  }

  onPlay() {
    this.dataStorageService.getMovieTrailer(this.movieDetailId);
    this.showTrailer = true;
  }

  onClosePlayer() {
    this.showTrailer = false;
  }

  ngOnDestroy(): void {
    this.movieDetailSubs.unsubscribe();
    this.movieTrailerSub.unsubscribe();
  }
}
