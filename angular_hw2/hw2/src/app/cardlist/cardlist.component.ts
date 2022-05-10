import { Component, OnInit } from '@angular/core';
import { Card } from '../interfaces/card.interface';

@Component({
  selector: 'app-cardlist',
  templateUrl: './cardlist.component.html',
  styleUrls: ['./cardlist.component.sass']
})

export class CardlistComponent implements OnInit {
  cardlist: Card[] = [];
  card: Card = {
    title: 'Proverbs',
    description: 'Never Give up',
    btncolor: 'red',
  };
  constructor() { }

  ngOnInit(): void {
  }

  changeList(color: string){
    console.log(color);
  }
}
