import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Subject, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BookAPIService {
  private readonly baseURL:string = 'https://www.googleapis.com/books/v1/volumes?q='
  
  private books: any[] = []
  private booksSubject$ = new Subject()
  books$ = this.booksSubject$.asObservable()

  private wishes: any[] = []
  private wishesSubject$ = new Subject()
  wishes$ = this.wishesSubject$.asObservable()

  constructor(private Http: HttpClient) { }

  getData(path: string) {
    this.Http.get([this.baseURL, path].join('/')).pipe(
      map((bookObj: any) => {
        const tempList: any = bookObj.items.map((bookDetails: any) => {
          return {
            bookTitle: bookDetails.volumeInfo.title,
            id: bookDetails.id,
            publishedDate: bookDetails.volumeInfo.publishedDate,
            publisher: bookDetails.volumeInfo.publisher,
            thumbnail: bookDetails.volumeInfo.imageLinks.thumbnail,
            description: bookDetails.volumeInfo.description,
            authors: bookDetails.volumeInfo.authors,
          }
        })
        return tempList
      }),
      tap((bookList: any) => {
        this.books = [...bookList]
        this.booksSubject$.next(this.books)
      })
    ).subscribe()
  }

  addWish(id: string) {
    const book = this.books.find(book => book.id === id)
    const bookInWL = this.wishes.find(wish => wish.id === id)
    if (!book || bookInWL) return
    this.wishes.push(book)
    this.wishesSubject$.next(this.wishes)
  }

  deleteWish(id: string) {
    const wishIndex = this.wishes.map((obj) => {return obj.id}).indexOf(id)
    this.wishes.splice(wishIndex, 1)
    this.wishesSubject$.next(this.wishes)
  }
}
