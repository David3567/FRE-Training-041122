import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  // isLogged to be changed manually until authentification implementation
  isLogged: boolean = true;
  navItems: Navigation[] = [
    { text: 'TV Shows', path: 'tvshows' },
    { text: 'Movies', path: 'movies' },
    { text: 'Recently Added', path: 'recents' },
  ];

  constructor() {}

  ngOnInit(): void {}
}

export interface Navigation {
  text: string;
  path: string;
}
