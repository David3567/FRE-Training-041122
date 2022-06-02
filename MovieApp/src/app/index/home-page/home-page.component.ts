import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass']
})
export class HomePageComponent implements OnInit {
  form !: FormGroup;

  constructor(private formBuild: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.form = this.formBuild.group({
      email: ['']
    });
  }

  get email(){
    return this.form.get('email')
  }

  onSubmit() {
    console.log('onSubmit')
    this.router.navigate(['/register'], { state: { formData: this.form.value } })
  }
}
