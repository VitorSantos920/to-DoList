function addItem(){
    let campo = document.getElementById("inpText"); // Resgatando o elemento HTML pelo ID

    // Verificação se o campo está vazio
    if(campo.value.trim()){ // .trim() para remover espaços em branco
        let elemento = document.createElement("li"); // Criando item HTML 'li' | Armazenando em -> 'item'
    
        elemento.innerHTML = campo.value; // 'Conteúdo do elemento criado (li) terá como conteúdo o valor do input'

        document.body.append(elemento); // 'Adicionando ao fim do body, o elemento criado com seu conteúdo'.
        campo.value = " ";
    } else{
        alert("Insira um texto")
    }
    
}