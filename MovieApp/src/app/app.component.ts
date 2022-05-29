import { Component,EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
 
  title = 'MovieApp';
   
  @Input('username') public username!: string;
  @Input('password') public password!: string;

  public selected!: boolean;
  shouldLogin = /(^|.)(localhost|movielist)$/.test(window.location.pathname);

  ngOnInit(): void {
  }
}
