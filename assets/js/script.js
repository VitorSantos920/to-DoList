var tarefas = [];
function mostrarFuncao(){
    let lista = document.getElementById("list_itens"); // resgatando a lista
    lista.innerHTML = "";
    
    for (const item of tarefas) {
        let template = document.getElementById("template"); // Template 
        let itemNovo = template.content.cloneNode(true); // Clone

        let li = itemNovo.querySelector("li"); // Li
        li.append(item); // Adicionar o item da vez no li
        lista.append(li); // Adicionar o li da vez na lista
    // Verificação se o campo está vazio
    }
    if(campo.value.trim()){ // .trim() para remover espaços em branco
        let template = document.getElementById("template").content.cloneNode(true);
        let input = document.getElementById("inpText");
        let li = template.querySelector("li");
        
        li.append(input.value);
        document.getElementById("list_itens").append(li);
    }
    else{
        alert("Insira um texto")
    }

function adicionarTarefas() {
    let inputTarefa = document.getElementById("inpText");
    tarefas.push(inputTarefa.value); // Insere na array o valor do input
    mostrarFuncao(); // invoca a função

    inputTarefa.value = "";
}

function removerItem() {
    debugger;
    let li = document.querySelector("li");

    li.remove(li)
    }
}