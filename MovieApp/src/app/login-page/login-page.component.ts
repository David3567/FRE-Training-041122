import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../interfaces/user.interface';

const data: User[] = [
  {
    username: 'Aaron',
    password: '1234',
  },
];

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.sass'],
})
export class LoginPageComponent implements OnInit {
  datalist: User[] = [];

  public defaultTheme = 'false';
  public card = data;

  public selected!: boolean;
  data: any = {
    username: 'Aaron',
    password: '1234',
  };

  @Output() logIn = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  signUser() {
    if (this.data.username === 'Aaron' && this.data.password === '1234') {
      this.selected = true;
    } else {
      this.selected = false;
    }
  }

  handleClear() {
    this.data.username = ' ';
    this.data.password = ' ';
  }

  saveValues() {
    this.data.username = this.data.username;
    this.data.password = this.data.password;
  }

  login(a: any) {
    this.logIn.emit();
  }
}
