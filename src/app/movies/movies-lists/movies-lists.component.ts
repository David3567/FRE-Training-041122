import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataStorageService } from 'src/app/shared/data-storage-service';
import { Movie } from '../movies.model';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies-lists',
  templateUrl: './movies-lists.component.html',
  styleUrls: ['./movies-lists.component.scss'],
})
export class MoviesListsComponent implements OnInit, OnDestroy {
  showSpinner: boolean = false;
  currentPage: number = 1;
  movies!: Movie[];
  images: Movie[] = [];

  subscription!: Subscription;
  constructor(
    private moviesService: MoviesService,
    private dataStorageService: DataStorageService
  ) {}

  ngOnInit(): void {
    this.showSpinner = true;
    this.subscription = this.moviesService.moviesChanged.subscribe(
      (movies: Movie[]) => {
        this.movies = movies;
        this.images = movies.slice(5, 10);
        this.showSpinner = false;
      }
    );
  }

  onScrollDown() {
    this.showSpinner = true;
    this.getNextPage();
  }

  getNextPage() {
    this.currentPage++;
    this.dataStorageService.getMovies(this.currentPage);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
