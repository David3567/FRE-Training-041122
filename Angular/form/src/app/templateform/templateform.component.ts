import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.scss'],
})
export class TemplateformComponent implements OnInit {
  title = 'Template driven forms';
  contact: any;

  countryList: country[] = [
    new country('1', 'India'),
    new country('2', 'USA'),
    new country('3', 'England'),
  ];

  ngOnInit(): void {
    this.setDefaults();
  }

  onSubmit(contactForm: any) {
    console.log(contactForm);
    console.log(this.contact);
  }

  setDefaults() {
    this.contact = {
      firstname: 'Sachin',
      lastname: 'Tendulkar',
      email: 'sachin@gmail.com',
      gender: 'male',
      isMarried: true,
      country: '2',
      address: { city: 'Mumbai', street: 'Perry Cross Rd', pincode: '400050' },
    };
  }

  changeCountry() {
    this.contact.country =
      +this.contact.country > 2 ? '1' : (+this.contact.country + 1).toString();
  }

  reset(contactForm: NgForm) {
    contactForm.resetForm();
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
