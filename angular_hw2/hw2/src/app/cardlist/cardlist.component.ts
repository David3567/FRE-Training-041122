import { Component, OnInit } from '@angular/core';
import { Card } from '../interfaces/card.interface';

@Component({
  selector: 'app-cardlist',
  templateUrl: './cardlist.component.html',
  styleUrls: ['./cardlist.component.sass'],
})
export class CardlistComponent implements OnInit {
  cardlist: Card[] = [];

  card: Card[] = [
    {
      title: 'One',
      description: 'Never Give up',
      btncolor: 'red',
    },
    {
      title: 'Two',
      description: 'Sun is shining',
      btncolor: 'yellow',
    },
    {
      title: 'Three',
      description: 'Car zooms',
      btncolor: 'green',
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  changeList(color: string) {
    console.log(color);
    console.log();
  }
}
