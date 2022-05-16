import { Component, OnInit } from '@angular/core';
import { movies } from './movies';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.scss'],
})
export class MovielistComponent implements OnInit {
  movies = movies;

  constructor() {}

  ngOnInit(): void {}
}
