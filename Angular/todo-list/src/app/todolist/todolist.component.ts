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

  // constructor(private readonly todoListService: TodolistService) {}
  constructor(private readonly stroe: Store) {}

  ngOnInit(): void {
    this.todolist$ = this.stroe.select(TodoSelectors.getTodoList);
    // this.todolist$ = this.todoListService.todolist$ as Observable<Todo[]>;

    this.stroe.dispatch(TodoActions.initTodolist());
    // this.todoListService.getTodos().subscribe();
  }

  onChange(event: any) {
    // console.log(event.target.value);
    // this.todoListService.addTodo(this.todo).subscribe();
    // this.todo.title = '';
  }

  //  deleteTodo(id: string) {
  //    this.todolist = this.todolist.filter((todo: any) => +todo.id !== +id);
  //    this.todoListService.deleteTodo(+id).subscribe();
  //  }
}
