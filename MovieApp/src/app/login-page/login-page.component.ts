import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.sass']
})
export class LoginPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  data = {
    username:"Aaron",
    password:"1234"
  };
  signUser(){
    if(this.data.username ==="Aaron" && this.data.password ==="1234"){
      console.log("Hello Aaron!");
    }else{
    console.log("please signup an account");
    }
   
    
  }
  handleClear(){
    this.data.username = ' '; 
    this.data.password = ' ';
   }
   saveValues(){
    this.data.username = this.data.username; 
    this.data.password =  this.data.password;
   }
}
