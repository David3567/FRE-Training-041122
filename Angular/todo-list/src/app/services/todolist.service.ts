import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../interfaces/todo.interface';

@Injectable({
  providedIn: 'root',
})
export class TodolistService {
  private readonly baseUrl = 'https://jsonplaceholder.typicode.com';
  private readonly path = 'todos';

  counter: number = 123;

  constructor(private readonly http: HttpClient) {}

  getTodos() {
    return this.http.get<Todo[]>([this.baseUrl, this.path].join('/'));
  }
  addTodo(todo: Todo) {
    return this.http.post<Todo>([this.baseUrl, this.path].join('/'), todo);
  }

  deleteTodo(id: number) {
    return this.http.delete([this.baseUrl, this.path, id].join('/'));
  }
}
