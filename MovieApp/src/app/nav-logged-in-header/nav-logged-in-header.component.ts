import { Component,EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-nav-logged-in-header',
  templateUrl: './nav-logged-in-header.component.html',
  styleUrls: ['./nav-logged-in-header.component.sass']
})
export class NavLoggedInHeaderComponent implements OnInit {

  @Output() public sidenavToggle = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

  refreshPage() {
    let win = (window as any);
      if(win.location.pathname === '/movielist' ) {
          win.location.reload();
          win.location.pathname = '/movielist';
      }
   }
}
