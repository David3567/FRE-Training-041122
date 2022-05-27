import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodolistComponent } from './todolist.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: TodolistComponent }];

@NgModule({
  declarations: [TodolistComponent, TodoItemComponent],
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
  exports: [TodolistComponent],
})
export class TodolistModule {}
