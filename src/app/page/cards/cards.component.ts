import { getLocaleEraNames } from '@angular/common';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { card } from 'src/app/interfaces/card.interface';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  // @Input() card!: card;
  @Output() setColor = new EventEmitter;

  cards: card[] = [
    {
      title: 'Title 1',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda id quidem at est soluta error repellendus impedit tenetur culpa ea enim iure doloremque nisi eveniet sit, deserunt, vitae neque. Fugit.',
      button: 'Set purple',
      color: 'purple'
    },
    {
      title: 'Title 2',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda id quidem at est soluta error repellendus impedit tenetur culpa ea enim iure doloremque nisi eveniet sit, deserunt, vitae neque. Fugit.',
      button: 'Set Blue',
      color: 'blue'
    },
    {
      title: 'Title 3',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda id quidem at est soluta error repellendus impedit tenetur culpa ea enim iure doloremque nisi eveniet sit, deserunt, vitae neque. Fugit.',
      button: 'Set Red',
      color: 'red'
    },
    {
      title: 'Title 4',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda id quidem at est soluta error repellendus impedit tenetur culpa ea enim iure doloremque nisi eveniet sit, deserunt, vitae neque. Fugit.',
      button: 'Set pink',
      color: 'pink'
    },
  ];

  cardColor: String = '';
  cardTitle: String = '';

  constructor() { }

  ngOnInit(): void {
  }

  changeColor(color: String, title: String) {
    console.log('hi', color)
    this.cardColor = color
    this.cardTitle = title

    this.setColor.emit(color)
  }

}
