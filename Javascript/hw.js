const state = {
    a: "apple",
    b: "banana",
    c: "city",
    d: "dom",
    e: "end",
    f: "forEach"
};

// w3 select option

const render = (ele, tmp) => {
    ele.innerHTML = tmp;
}

const createDropDown = () => {
    const keyele = document.getElementById('key');
    const valele = document.getElementById('val');
    
    let keystmp = '';
    let valstmp = '';
    Object.keys(state).forEach(key => {
        keystmp += `<option value="${key}">${key}</option>`;
        valstmp += `<option value="${key}">${state[key]}</option>`;
    });
    render(keyele, keystmp);
    render(valele, valstmp);
}

createDropDown();