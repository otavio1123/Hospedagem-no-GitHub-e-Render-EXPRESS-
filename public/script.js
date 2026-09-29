const inputTarefa = document.getElementById("tarefa");
const botaoAdicionar = document.getElementById("adicionar");
const botaoLimpar = document.getElementById("limpar");
const lista = document.getElementById("lista");

let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

function salvarTarefas() {
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
}

function mostrarTarefas() {
    lista.innerHTML = "";

    tarefas.forEach(function(tarefa, indice) {
        const item = document.createElement("li");

        item.innerHTML = `
            <span>${tarefa}</span>
            <button onclick="removerTarefa(${indice})">Excluir</button>
        `;

        lista.appendChild(item);
    });
}

function adicionarTarefa() {
    const tarefa = inputTarefa.value.trim();

    if (tarefa === "") {
        alert("Digite uma tarefa.");
        return;
    }

    tarefas.push(tarefa);

    salvarTarefas();
    mostrarTarefas();

    inputTarefa.value = "";
}

function removerTarefa(indice) {
    tarefas.splice(indice, 1);

    salvarTarefas();
    mostrarTarefas();
}

botaoAdicionar.addEventListener("click", adicionarTarefa);

botaoLimpar.addEventListener("click", function() {
    tarefas = [];

    localStorage.removeItem("tarefas");

    mostrarTarefas();
});

mostrarTarefas();