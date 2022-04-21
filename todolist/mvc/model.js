import { Api } from './api.js'
import { View } from './view.js'

// ~~~~~~~~~~~~ Model ~~~~~~~~~~~~
export const Model = ((api, view) => {
    class Todo {
        constructor(title) {
            this.userId = 3;
            this.title = title;
            this.completed = false;
        }
    }

    class State {
        #todolist = [];

        get todolist() {
            return this.#todolist;
        }
        set todolist(newtodolist) {
            this.#todolist = [...newtodolist];

            const todolistEle = document.querySelector(view.domstr.todolist);

            const tmp = view.createTmp(this.todolist);
            view.render(todolistEle, tmp);
        }
    }

    const getTodos = api.getTodos;
    const deleteTodo = api.deleteTodo;
    const addTodo = api.addTodo;

    return {
        getTodos,
        deleteTodo,
        addTodo,
        State,
        Todo,
    };
})(Api, View);