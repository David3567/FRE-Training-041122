import { createReducer, on } from '@ngrx/store';
import { TodoState } from '../interfaces/todo.interface';

import * as TodoActions from './todo.action';

const todoState: TodoState = {
  todolist: [
    {
      userId: 1,
      id: 1,
      title: 'delectus aut autem',
      completed: false,
    },
    {
      userId: 1,
      id: 2,
      title: 'quis ut nam facilis et officia qui',
      completed: false,
    },
    {
      userId: 1,
      id: 3,
      title: 'fugiat veniam minus',
      completed: false,
    },
    {
      userId: 1,
      id: 4,
      title: 'et porro tempora',
      completed: true,
    },
    {
      userId: 1,
      id: 5,
      title: 'et porro tempora',
      completed: true,
    },
  ],
};

export const todoReducer = createReducer(
  todoState,
  on(TodoActions.initTodolist, (state) => {
    console.log('hello from reducer');
    return state;
  })
);
