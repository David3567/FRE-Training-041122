import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, filter, tap } from 'rxjs/operators';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
})
export class SearchbarComponent implements OnInit {
  @ViewChild('inputbox', { static: true }) inputbox!: ElementRef;

  constructor(private bookService: BookService, private http: HttpClient) {}

  ngOnInit(): void {
    fromEvent(this.inputbox.nativeElement, 'keyup')
      .pipe(
        debounceTime(500),
        filter((_) => {
          const query = this.inputbox.nativeElement.value;
          return query.trim();
        }),
        tap((_) => {
          const query = this.inputbox.nativeElement.value.trim();
          this.bookService.getBooks(query);
        })
      )
      .subscribe();
  }
}
