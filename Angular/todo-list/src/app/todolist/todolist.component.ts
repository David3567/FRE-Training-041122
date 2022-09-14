import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../interfaces/todo.interface';
import { TodolistService } from '../services/todolist.service';
import { Observable, fromEvent } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import * as TodoSelectors from '../ngrx/todo.selector';
import * as TodoActions from '../ngrx/todo.action';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss'],
})
export class TodolistComponent implements OnInit {
  todolist$!: Observable<Todo[]>;

  todo: Todo = {
    title: '',
    completed: false,
    userId: 2,
  };

  constructor(
    private readonly todolistService: TodolistService,
    private readonly store: Store
  ) {}

  ngOnInit(): void {
    // this.todolist$ = this.todolistService.todolist$;
    // this.todolistService.getTodos().subscribe();
    this.todolist$ = this.store.select(TodoSelectors.getTodoList);
    this.store.dispatch(TodoActions.loadTodolist());
  }

  onChange(event: any) {
    this.store.dispatch(TodoActions.addTodolist({ todo: this.todo }));
  }
}
