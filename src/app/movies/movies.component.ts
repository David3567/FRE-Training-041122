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

  constructor(
    private dataStorageService: DataStorageService,
  ) {}

  ngOnInit(): void {
    //load movies data from http on movies component loading;
    this.dataStorageService.getMovies();
  }
}
