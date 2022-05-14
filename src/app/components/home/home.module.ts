import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';

import { HomeComponent } from './home.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookCardComponent } from './book-list/book-card/book-card.component';
import { WishlistPreviewComponent } from './wishlist-preview/wishlist-preview.component';
import { SearchbarComponent } from './searchbar/searchbar.component';

@NgModule({
  declarations: [
    HomeComponent,
    BookListComponent,
    BookCardComponent,
    WishlistPreviewComponent,
    SearchbarComponent,
  ],
  imports: [CommonModule, MaterialModule, FormsModule],
})
export class HomeModule {}
