import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodolistComponent } from './todolist.component';
import { TodoItemComponent } from './todo-item/todo-item.component';

@NgModule({
  declarations: [TodolistComponent, TodoItemComponent],
  imports: [CommonModule, FormsModule],
  exports: [TodolistComponent],
})
export class TodolistModule {}
