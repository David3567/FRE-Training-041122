import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CardlistComponent } from './cardlist.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [CardlistComponent, CardComponent],
  imports: [CommonModule, FormsModule],
  exports: [CardlistComponent],
})
export class CardlistModule {}