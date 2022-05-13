import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { debounceTime, filter, fromEvent, map, mergeMap, switchMap, tap } from 'rxjs';
import { BookAPIService } from '../services/book-api.service'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  @ViewChild('inputBox', {static: true}) inputBox!: ElementRef;
  bookList: any = []

  constructor(private bookAPI: BookAPIService) { }

  ngOnInit(): void {
    fromEvent(this.inputBox.nativeElement, 'keyup').pipe(
      debounceTime(500),
      filter(_ => {
        const bookName = this.inputBox.nativeElement.value
        if (bookName === '') {
          this.bookList = []    
        }
        return bookName.trim()
      }),
      tap(_ => {
        const bookName = this.inputBox.nativeElement.value.trim()
        this.bookAPI.getData(bookName)
      })
    ).subscribe()

    this.bookAPI.books$.subscribe( (bookList:any) => {
      this.bookList = [...bookList]
      console.log(bookList)
    })
  }

  add2Wishlist(id: string) {
    console.log('hi', id)
    this.bookAPI.addWish(id)
  }

}
