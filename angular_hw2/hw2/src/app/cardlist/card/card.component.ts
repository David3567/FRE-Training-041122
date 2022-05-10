import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Card } from 'src/app/interfaces/card.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass'],
})
export class CardComponent implements OnInit {
  @Input('item') card!: Card;
  @Output() changeColors = new EventEmitter();

  constructor() { }

  ngOnInit(): void {}

  changeColor(){
    this.changeColors.emit(this.card?.btncolor);
  }
}
