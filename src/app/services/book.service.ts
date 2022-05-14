import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Book } from '../interfaces/book.interface';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private baseUrl = 'https://www.googleapis.com/books/v1/volumes?q=';

  private booklist: Book[] = [];
  private booklistSubject$ = new Subject();
  booklist$ = this.booklistSubject$.asObservable();

  private wishlist: any = [];
  private wlsbj$ = new Subject();
  wishlist$ = this.wlsbj$.asObservable();

  constructor(private http: HttpClient) {}

  deleteFromWishList(id: string) {
    const newWishList = this.wishlist.filter((book: Book) => book.id !== id);
    this.wishlist = [...newWishList];
    this.wlsbj$.next(newWishList);
  }

  addToWishList(id: string) {
    const book = this.booklist.find((book) => book.id === id);
    const bookInwish = this.wishlist.find((book: Book) => book.id === id);

    if (!book || bookInwish) return;

    this.wishlist = [...this.wishlist, book];
    this.wlsbj$.next(this.wishlist);
  }

  getBooks(query: string) {
    this.http
      .get([this.baseUrl, query].join(''))
      .pipe(
        map((responseData: any) => {
          const booksArray = responseData.items.map((book: Book) => {
            return {
              id: book.id,
              title: book.volumeInfo.title,
              author: book.volumeInfo.authors,
              image: book.volumeInfo.imageLinks.smallThumbnail,
              publisher: book.volumeInfo.publisher,
              publishedDate: book.volumeInfo.publishedDate,
              description: book.volumeInfo.description,
            };
          });
          return booksArray;
        }),
        tap((dataFetched) => {
          this.booklist = [...dataFetched];
          this.booklistSubject$.next(this.booklist);
        })
      )
      .subscribe();
  }
}
