import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  isLoggedIn: boolean = false;
  username: string | undefined = '';
  navItems: Navigation[] = [
    { text: 'TV Shows', path: 'tvshows' },
    { text: 'Movies', path: 'movies' },
    { text: 'Recently Added', path: 'recents' },
  ];

  constructor(private authService: AuthService) {}
  userSubscription!: Subscription;

  ngOnInit(): void {
    //If user data exist, then is logged in, else not logged in
    this.userSubscription = this.authService.user$.subscribe((user) => {
      this.isLoggedIn = !!user.tmdb_key;
      this.username = user?.username;
    });
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }
}

export interface Navigation {
  text: string;
  path: string;
}
