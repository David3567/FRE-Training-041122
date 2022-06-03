import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthLocalStorageService } from 'src/app/services/auth-local-storage.service';

@Component({
  selector: 'app-nav-sidebar',
  templateUrl: './nav-sidebar.component.html',
  styleUrls: ['./nav-sidebar.component.sass'],
})
export class NavSidebarComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter();

  constructor(private auth: AuthLocalStorageService) {}

  ngOnInit(): void {}

  logout() {
    console.log('first logout');
    this.auth.logoutAuth();
  }

  public onSidenavClose = () => {
    this.sidenavClose.emit();
  };
}
