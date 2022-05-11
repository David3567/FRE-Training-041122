import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit{
  
  @Input('btncolor') public btncolor!: string;
  @Input('desc') public description!: string
  @Input('title') public title!: string;

  @Output() changeColors = new EventEmitter();

  public selected!: string;

  constructor() { }

  ngOnInit(): void {
  }

  changeColor(){
    this.changeColors.emit(this.btncolor);
    this.selected = this.btncolor;
  }
}
