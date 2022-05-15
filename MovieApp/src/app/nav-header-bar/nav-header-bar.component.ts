import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-header-bar',
  templateUrl: './nav-header-bar.component.html',
  styleUrls: ['./nav-header-bar.component.sass']
})
export class NavHeaderBarComponent implements OnInit {

  @Output() public sidenavToggle = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }
}