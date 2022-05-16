import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../interfaces/user.interface';

const data: User[] = [
  {
  username:"Aaron",
  password:"1234",
  },
];

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.sass']
})
export class LoginPageComponent implements OnInit {
  datalist: User[] = [];

  public defaultTheme = 'false';
  public card = data;

  public selected!: boolean;
  datas = {
    username:"Aaron",
    password:"1234"
  };

  @Output() logIn = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  
  signUser(){
    if(this.datas.username ==="Aaron" && this.datas.password ==="1234"){
      this.selected = true;
    }
    else{
      this.selected = false;
    }
  }

  handleClear(){
    this.datas.username = ' '; 
    this.datas.password = ' ';
   }

   saveValues(){
    this.datas.username = this.datas.username; 
    this.datas.password =  this.datas.password;
   }

   login(a: any){
     this.logIn.emit();
   }
}
