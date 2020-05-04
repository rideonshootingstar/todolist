const todos = [ 'помыть пол', 'сварить макароши' ];

function renderTodos(todosArray) { 
    const todoList = document.querySelector('ul');
    todoList.innerHTML = '';

    for (const t of todosArray) {
        todoList.innerHTML += `<li>${t}</li>`;
        console.log(t);
    }
}

renderTodos(todos);

document.getElementById("items").addEventListener("click", function(ev) {
    if (ev.target && ev.target.nodeName === "LI") {
        ev.target.classList.toggle("checked");
    }
});

