import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { AuthLocalStorageService } from 'src/app/services/auth-local-storage.service';

@Component({
  selector: 'app-nav-header-bar',
  templateUrl: './nav-header-bar.component.html',
  styleUrls: ['./nav-header-bar.component.sass']
})
export class NavHeaderBarComponent implements OnInit {

  @Output() public sidenavToggle = new EventEmitter();
  isLogin!: boolean;
  username = '';
  welcome = ('Welcome ' + this.username + ' !! ');

  constructor(private readonly authService: AuthLocalStorageService, private readonly router: Router) { }

  ngOnInit(): void {
    const { JWToken, username } = this.authService.userValue;
    
    if (JWToken && username) {
      this.isLogin = true;
      this.username = username;
      this.welcome = ('Welcome ' + this.username + '!! ');
    } else {
      this.isLogin = false;
    }
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

  logOut(){
    this.authService.logoutAuth();
    this.isLogin = false;
    this.username = '';
  }
  
}