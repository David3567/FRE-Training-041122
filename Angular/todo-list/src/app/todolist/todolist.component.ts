import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../interfaces/todo.interface';
import { TodolistService } from '../services/todolist.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss'],
})
export class TodolistComponent implements OnInit {
  todolist: Todo[] = [];
  title = '';
  todo: Todo = {
    title: '',
    completed: false,
    userId: 2,
  };

  constructor(private readonly todoListService: TodolistService) {}

  ngOnInit(): void {
    this.todoListService.getTodos().subscribe((todolist: Todo[]) => {
      this.todolist = todolist.reverse();
    });
  }

  addTodo() {
    this.todoListService.addTodo(this.todo).subscribe((todo: Todo) => {
      this.todolist = [todo, ...this.todolist];
    });
    this.todo.title = '';
  }

  deleteTodo(id: string) {
    this.todolist = this.todolist.filter((todo: any) => +todo.id !== +id);
    this.todoListService.deleteTodo(+id).subscribe();
  }
}
