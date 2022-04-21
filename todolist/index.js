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

    return {
        getTodos,
        getTodo,
    };
})();
// ~~~~~~~~~~~~ View ~~~~~~~~~~~~
const View = (() => {
    const domstr = {
        todolist: '#todolist__container'
    }
    const render = (ele, tmp) => {
        ele.innerHTML = tmp;
    }
    const createTmp = (arr) => {
        let tmp = '';
        arr.forEach(todo => {
            tmp += `
                <li>
                    <span>${todo.title}</span>
                    <button>X</button>
                </li>
            `;
        });
        return tmp;
    }
    return {
        domstr,
        render,
        createTmp
    };
})();
// ~~~~~~~~~~~~ Model ~~~~~~~~~~~~
const Model = ((api) => {

    const getTodos = api.getTodos;

    return {
        getTodos
    };
})(Api);
// ~~~~~~~~~~~~ Controller ~~~~~~~~~~~~
const Controller = ((model, view) => {

    const init = () => {
        const todolistEle = document.querySelector(view.domstr.todolist);
        
        model.getTodos().then(todolist => {
            const tmp = view.createTmp(todolist);
            view.render(todolistEle, tmp);
        });
    }

    return {init};
})(Model, View);

Controller.init();
