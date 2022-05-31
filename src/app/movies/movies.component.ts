import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../shared/data-storage-service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  constructor(private dataStorageService: DataStorageService) {}

  ngOnInit(): void {
    //load movies data from API page=1;
    this.dataStorageService.getMovies(1);
  }
}
