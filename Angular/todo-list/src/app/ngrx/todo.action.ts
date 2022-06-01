import { createAction, props } from '@ngrx/store';
import { Todo } from '../interfaces/todo.interface';

export const initTodolist = createAction('[Todos] Initialize Todolist');

/* Load Todolist */
export const loadTodolist = createAction('[Todos] Load Todolist');

export const loadTodoSuccess = createAction(
  '[Todos] Load Todolist success',
  props<{ todolist: Todo[] }>()
);

export const loadTodoFailure = createAction(
  '[Todos] Load Todolist failure',
  props<{ err: string }>()
);

/* Add Todo to backend */
export const addTodolist = createAction(
  '[Todos] Add Todolist',
  props<{ todo: Todo }>()
);

export const addTodoSuccess = createAction(
  '[Todos] Add Todolist success',
  props<{ todo: Todo }>()
);

export const addTodoFailure = createAction(
  '[Todos] Add Todolist failure',
  props<{ err: string }>()
);
