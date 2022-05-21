import { Component, Input, OnInit } from '@angular/core';

import { DataStorageService } from 'src/app/shared/data-storage-service';
import { Movie } from '../../movies.model';
import { MoviesService } from '../../movies.service';

@Component({
  selector: 'app-movies-item',
  templateUrl: './movies-item.component.html',
  styleUrls: ['./movies-item.component.scss'],
})
export class MoviesItemComponent implements OnInit {
  @Input() movie!: Movie;


  constructor(
    private dataStorageService: DataStorageService,
    private movieService: MoviesService,
    
  ) {}

  ngOnInit(): void {
    
  }

  onClick(id: number) {
    this.dataStorageService.getMoiveDetail(id);
  }
}
