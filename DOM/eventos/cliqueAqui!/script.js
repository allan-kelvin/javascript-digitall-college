let buttonNao = document.getElementById("botaoNao");
buttonNao.addEventListener("mouseenter", function() {
    buttonNao.classList.add("nao"); // Adiciona a classe que move o nao
    buttonNao.innerHTML = "Opa!";
});

buttonNao.addEventListener("mouseleave", function() {
    buttonNao.classList.remove("nao"); // remove a classe que move o nao
    buttonNao.innerHTML = "Não!";
});

//let container = document.getElementsByClassName("container");

buttonSim = document.getElementById("botaoSim");
buttonSim.addEventListener("click", function() {
    alert("Você escolheu SIM!");
    buttonSim.innerHTML = "Eu Sabia!!";
    buttonNao.remove();
});