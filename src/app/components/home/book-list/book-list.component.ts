import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
//import { Book } from 'src/app/interfaces/book.interface';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  booklist$: any;
  private defaultQuery: string = 'java';

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.booklist$ = this.bookService.booklist$;
    this.bookService.getBooks(this.defaultQuery);
  }

  addToWish(id:string){
    this.bookService.addToWishList(id)
  }
}
