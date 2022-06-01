import { createReducer, on } from '@ngrx/store';
import { TodoState } from '../interfaces/todo.interface';

import * as TodoActions from './todo.action';

const todoState: TodoState = {
  todolist: [],
  err: '',
};

export const todoReducer = createReducer(
  todoState,
  on(TodoActions.initTodolist, (state) => {
    return { ...state };
  }),
  /* load todolist */
  on(TodoActions.loadTodoSuccess, (state, { todolist }) => {
    return {
      ...state,
      todolist: [...todolist].reverse(),
    };
  }),
  on(TodoActions.loadTodoFailure, (state, { err }) => {
    return {
      ...state,
      err,
    };
  }),
  /* add todo */
  on(TodoActions.addTodoSuccess, (state, { todo }) => {
    return {
      ...state,
      todolist: [todo, ...state.todolist],
    };
  }),
  on(TodoActions.addTodoFailure, (state, { err }) => {
    return {
      ...state,
      err,
    };
  })
);

// const todoState: TodoState = {
//   todolist: [
//     {
//       userId: 1,
//       id: 1,
//       title: 'delectus aut autem',
//       completed: false,
//     },
//     {
//       userId: 1,
//       id: 2,
//       title: 'quis ut nam facilis et officia qui',
//       completed: false,
//     },
//     {
//       userId: 1,
//       id: 3,
//       title: 'fugiat veniam minus',
//       completed: false,
//     },
//     {
//       userId: 1,
//       id: 4,
//       title: 'et porro tempora',
//       completed: true,
//     },
//     {
//       userId: 1,
//       id: 5,
//       title: 'et porro tempora',
//       completed: true,
//     },
//   ],
// };
