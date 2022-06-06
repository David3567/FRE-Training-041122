import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SpinnerComponent } from './spinner.component';

@NgModule({
  declarations: [SpinnerComponent],
  imports: [CommonModule],
  exports: [SpinnerComponent, CommonModule],
})
export class SharedModule {}
