import { Component, OnInit } from '@angular/core';
import { Card } from '../interfaces/card.interface';

const card: Card[] = [
  {
    title: 'One',
    description: 'Never Give up',
    btncolor: 'red',
  },
  {
    title: 'Two',
    description: 'Sun is shining',
    btncolor: 'blue',
  },
  {
    title: 'Three',
    description: 'Car zooms',
    btncolor: 'green',
  },
];

@Component({
  selector: 'app-cardlist',
  templateUrl: './cardlist.component.html',
  styleUrls: ['./cardlist.component.css'],
})
export class CardlistComponent implements OnInit {
  cardlist: Card[] = [];

  public defaultTheme = 'rgb(255, 0, 136)';
  public card = card;

  public selected!: string;

  constructor( ) {}

  ngOnInit() {
    this.selected = this.defaultTheme;
  }

  changeList(color: string): void {
    this.selected="";
    this.cardlist = this.card.filter(card => card.btncolor === color);
    this.selected = this.cardlist[0].btncolor;
  }
}