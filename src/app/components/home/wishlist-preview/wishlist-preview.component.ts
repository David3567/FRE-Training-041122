import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-wishlist-preview',
  templateUrl: './wishlist-preview.component.html',
  styleUrls: ['./wishlist-preview.component.scss'],
})
export class WishlistPreviewComponent implements OnInit {
  wishlist: any = [];

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.bookService.wishlist$.subscribe((wishlist: any) => {
      this.wishlist = [...wishlist];
    });
  }

  deleteFromWishList(id: string) {
    this.bookService.deleteFromWishList(id);
  }
}
