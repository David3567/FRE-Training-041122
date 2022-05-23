import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataStorageService } from 'src/app/shared/data-storage-service';
import { MoiveDetail, Trailer } from '../movies.model';
import { MoviesService } from '../movies.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit, OnDestroy {
  movieDetail!: MoiveDetail;
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
    // Use params to load movie details
    this.movieDetailId = this.route.snapshot.params['id'];
    this.dataStorageService.getMoiveDetail(this.movieDetailId);

    // Get Movie Trailer
    // this.dataStorageService
    //   .getMovieTrailer(this.movieDetailId)
    //   .pipe(
    //     map((data) => {
    //       const newResult = data.results.filter(
    //         (item) => item.name === 'Trailer' || item.type === 'Trailer'
    //       );
    //       // Get only first trailer
    //       return newResult[0];
    //     })
    //   )
    //   .subscribe((response) => {
    //     this.movieTrailerId = response.key;
    //   });

    this.movieTrailerSub = this.movieService.movieTrailerIdChanged.subscribe(
      (movieId: string) => {
        this.movieTrailerId = movieId;
      }
    );

    this.movieDetailSubs = this.movieService.movieDetailChanged.subscribe(
      (detail: MoiveDetail) => {
        this.movieDetail = detail;
      }
    );
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
