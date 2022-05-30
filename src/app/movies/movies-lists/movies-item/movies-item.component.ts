import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Movie } from '../../movies.model';

@Component({
  selector: 'app-movies-item',
  templateUrl: './movies-item.component.html',
  styleUrls: ['./movies-item.component.scss'],
})
export class MoviesItemComponent implements OnInit {
  @Input() movie!: Movie;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}

  onClick(id: number) {
    /**
     * Navigating to [/moives/id] programmatically
     * using relative route, current route is /movie,
     * passing "id" in navigate and relative to current route is /movies/id
     */
    this.router.navigate([id], { relativeTo: this.route });
  }
}
