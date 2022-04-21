import { View } from './view.js'
import { Model } from './model.js'

// ~~~~~~~~~~~~ Controller ~~~~~~~~~~~~
export const Controller = ((model, view) => {
    const state = new model.State();

    const addTodo = () => {
        const inputbox = document.querySelector(view.domstr.inputbox);
        inputbox.addEventListener("keyup", (event) => {
            if (event.key === "Enter") {
                const newtodo = new model.Todo(event.target.value);

                model.addTodo(newtodo).then(todo => {
                    state.todolist = [todo, ...state.todolist];
                });
                event.target.value = "";
            }
        });
    };

    const deleteTodo = () => {
        const todolistEle = document.querySelector(view.domstr.todolist);
        todolistEle.addEventListener("click", (event) => {
            const [className, id] = event.target.className.split(" ");
            state.todolist = state.todolist.filter((todo) => +todo.id !== +id);
            model.deleteTodo(id);
        });
    };

    const init = () => {
        model.getTodos().then((todolist) => {
            state.todolist = todolist.reverse();
        });
    };

    const bootstrap = () => {
        init();
        deleteTodo();
        addTodo();
    };

    return { bootstrap };
})(Model, View);