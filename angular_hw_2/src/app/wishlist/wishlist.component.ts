import { Component, OnInit } from '@angular/core';
import { BookAPIService } from '../services/book-api.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  wishList: any = []
  constructor(private bookAPI: BookAPIService) { }

  ngOnInit(): void {
    this.bookAPI.wishes$.subscribe( (bookList:any) => {
      this.wishList = [...bookList]
    })
  }

}
