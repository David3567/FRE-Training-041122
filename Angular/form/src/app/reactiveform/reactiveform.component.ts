import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.scss'],
})
export class ReactiveformComponent implements OnInit {
  contactForm: any;
  countryList: country[] = [
    new country('1', 'India'),
    new country('2', 'USA'),
    new country('3', 'England'),
  ];
  get firstname() {
    return this.contactForm.get('firstname');
  }
  get lastname() {
    return this.contactForm.get('lastname');
  }
  get email() {
    return this.contactForm.get('email');
  }
  get gender() {
    return this.contactForm.get('gender');
  }
  get isMarried() {
    return this.contactForm.get('isMarried');
  }
  get country() {
    return this.contactForm.get('country');
  }
  get city() {
    return this.contactForm.get('address')?.get('city');
  }
  get street() {
    return this.contactForm.get('address')?.get('street');
  }
  get pincode() {
    return this.contactForm.get('address')?.get('pincode');
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // // ractive form
    // this.contactForm = new FormGroup({
    //   firstname: new FormControl('', Validators.required),
    //   lastname: new FormControl(),
    //   email: new FormControl(),
    //   gender: new FormControl(),
    //   isMarried: new FormControl(),
    //   country: new FormControl(),

    //   address: new FormGroup({
    //     city: new FormControl(),
    //     street: new FormControl(),
    //     pincode: new FormControl(),
    //   }),
    // });

    // console.log(this.contactForm);
    // // form builder && validator

    this.contactForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.minLength(3)], []],
      lastname: [
        '',
        [
          Validators.required,
          Validators.maxLength(15),
          Validators.pattern('^[a-zA-Z]+$'),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', [Validators.required]],
      isMarried: ['', [Validators.required]],
      country: ['', [Validators.required]],
      address: this.fb.group({
        city: ['', [Validators.required]],
        street: ['', [Validators.required]],
        pincode: ['', [Validators.required]],
      }),
    });
  }

  onSubmit() {
    console.log(this.contactForm.value);
  }
}

export class country {
  id: string;
  name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}

export interface contact {
  firstname: string;
  lastname: string;
  email: string;
  gender: string;
  isMarried: boolean;
  country: string;
  address: {
    city: string;
    street: string;
    pincode: string;
  };
}
