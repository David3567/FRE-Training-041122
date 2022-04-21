// ~~~~~~~~~~~~ View ~~~~~~~~~~~~
export const View = (() => {
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