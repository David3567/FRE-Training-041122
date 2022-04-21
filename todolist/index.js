// ~~~~~~~~~~~~ API ~~~~~~~~~~~~
const Api = (() => {
    const baseUrl = "https://jsonplaceholder.typicode.com";
    const path = "todos";

    const getTodos = () =>
        fetch([baseUrl, path].join("/")).then((response) => response.json());

    const getTodo = (id) =>
        fetch([baseUrl, path, id].join("/")).then((response) =>
            response.json()
        );

    const deleteTodo = (id) =>
        fetch([baseUrl, path, id].join("/"), {
            method: "DELETE",
        });

    const addTodo = (newtodo) =>
        fetch([baseUrl, path].join("/"), {
            method: "POST",
            body: JSON.stringify(newtodo),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
            .then((response) => response.json());

    return {
        getTodos,
        getTodo,
        deleteTodo,
        addTodo
    };
})();
// ~~~~~~~~~~~~ View ~~~~~~~~~~~~
const View = (() => {
    const domstr = {
        todolist: "#todolist__container",
        deletebutton: ".dlebtn",
        inputbox: ".todolist__input",
    };
    const render = (ele, tmp) => {
        ele.innerHTML = tmp;
    };
    const createTmp = (arr) => {
        let tmp = "";
        arr.forEach((todo) => {
            tmp += `
                <li>
                    <span>${todo.id}-${todo.title}</span>
                    <button class="dlebtn ${todo.id}">X</button>
                </li>
            `;
        });
        return tmp;
    };
    return {
        domstr,
        render,
        createTmp,
    };
})();
// ~~~~~~~~~~~~ Model ~~~~~~~~~~~~
const Model = ((api, view) => {
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
// ~~~~~~~~~~~~ Controller ~~~~~~~~~~~~
const Controller = ((model, view) => {
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

Controller.bootstrap();
