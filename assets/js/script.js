function addItem(){
    let campo = document.getElementById("inpText"); // Resgatando o elemento HTML pelo ID

    // Verificação se o campo está vazio
    if(campo.value.trim()){ // .trim() para remover espaços em branco
        let template = document.getElementById("template").content.cloneNode(true);
        let input = document.getElementById("inpText");
        let li = template.querySelector("li");
        
        li.append(input.value);
        document.getElementById("list_itens").append(li);

    } else{
        alert("Insira um texto")
    }
    
}