import { Component,EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Router } from '@angular/router';
import { concat } from 'rxjs-compat/operator/concat';
import { AuthLocalStorageService } from 'src/app/services/auth-local-storage.service';

@Component({
  selector: 'app-nav-logged-in-header',
  templateUrl: './nav-logged-in-header.component.html',
  styleUrls: ['./nav-logged-in-header.component.sass']
})
export class NavLoggedInHeaderComponent implements OnInit {

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
