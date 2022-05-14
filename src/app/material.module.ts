import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
  ],
})
export class MaterialModule {}
