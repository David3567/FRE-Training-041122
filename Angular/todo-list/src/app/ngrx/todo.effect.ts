import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import {
  catchError,
  map,
  mergeMap,
  switchMap,
  take,
  tap,
} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import * as TodoActions from './todo.action';
import { Todo } from '../interfaces/todo.interface';

@Injectable()
export class TodoEffects {
  private readonly baseUrl = 'https://jsonplaceholder.typicode.com';
  private readonly path = 'todos';

  private loadTodolist$: any;
  private addTodolist$: any;

  constructor(
    private readonly actions$: Actions,
    private readonly http: HttpClient
  ) {
    this.loadTodolist$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(TodoActions.loadTodolist),
        switchMap((_) => {
          // console.log('effect');
          return this.http
            .get<Todo[]>([this.baseUrl, this.path].join('/'))
            .pipe(
              map((todolist: any) => {
                return TodoActions.loadTodoSuccess({ todolist });
              }),
              catchError((err) => {
                return of(TodoActions.loadTodoFailure({ err }));
              })
            );
        })
      );
    });
    this.addTodolist$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(TodoActions.addTodolist),
        switchMap((action) => {
          return this.http
            .post<Todo>([this.baseUrl, this.path].join('/'), action.todo)
            .pipe(
              map((todo: any) => {
                return TodoActions.addTodoSuccess({ todo });
              }),
              catchError((err) => {
                return of(TodoActions.addTodoFailure({ err }));
              })
            );
        })
      );
    });
  }
}
