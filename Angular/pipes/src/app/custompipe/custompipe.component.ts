import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custompipe',
  templateUrl: './custompipe.component.html',
  styleUrls: ['./custompipe.component.scss'],
})
export class CustompipeComponent implements OnInit {
  title: string = 'Angular Custom Pipe Example';
  celcius: string = '';
  Fahrenheit: string = '';

  constructor() {}

  ngOnInit(): void {}
}
