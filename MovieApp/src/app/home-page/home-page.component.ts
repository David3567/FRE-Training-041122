import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass']
})
export class HomePageComponent implements OnInit {
  form !: FormGroup;

  constructor(private formBuild: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuild.group({
      email: ['', 
      // [
      //   Validators.required,
      //   Validators.email
      // ]
    ]
    });
  }

  get email(){
    return this.form.get('email')
  }

}
