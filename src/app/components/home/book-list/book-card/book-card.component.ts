import { Component, OnInit, Input } from '@angular/core';
//import { Book } from 'src/app/interfaces/book.interface';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent implements OnInit {
  @Input() book!: any;

  constructor() {}

  ngOnInit(): void {}
}
