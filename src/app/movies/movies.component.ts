import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataStorageService } from '../shared/data-storage-service';
import { MoviesService } from './movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  //manually changing component, REMORE later
  loadDetailPage: string = 'movieList';
  componentChange!: Subscription;

  constructor(
    private dataStorageService: DataStorageService,
    private moviesService: MoviesService
  ) {}

  ngOnInit(): void {
    //load movies data from http on movies component loading;
    this.dataStorageService.getMovies();
    //Below Remove After Route addition
    this.componentChange = this.moviesService.componentChangeSub.subscribe(
      (page: string) => {
        this.loadDetailPage = page;
      }
    );
  }
}
