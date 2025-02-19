let usuarios = [];
let nome = document.querySelector('#nome');
let email = document.querySelector('#email');
let telefone = document.querySelector('#telefone');
let form = document.querySelector('form');
let buttonEnviar = document.querySelector('#btnEnviar');

//
 // Valida nome
function validaNome(){
    if((nome.value).length > 0 ){
        return true;
    }else{
        alert('Por favor, preencha o nome.');
        return false;
    }
}

// Valida email
 function validaEmail(){
    if((email.value).length>0){
        return true;
    } else if(!email.includes('@')){
        alert('Por favor, preencha um email válido.');
        return false;
    }else{
        alert('Por favor, preencha um email válido.');
        return false;
    }
}

// Valida telefone
 function validaTelefone(){
    if((telefone.value).length > 0 && telefone.value > 14){ 
        return true;
    } else{
        alert('Por favor, preencha o telefone.');
        return false;
    }
}

//Limpa os campos
function enviar(){
    if(validaNome() && validaEmail() && validaTelefone()){
        usuarioNovo = {
            nome: nome.value,
            email: email.value,
            telefone: telefone.value
        };
        usuarios.push(usuarioNovo);
        alert('Formulario Enviado');
        console.log(usuarios);
        limparFormulario();
    }
}

function limparFormulario(){
    nome.value = '';
    email.value = '';
    telefone.value = '';
}

buttonEnviar.addEventListener('click', enviar);



form.addEventListener('submit',(e) => {
    e.preventDefault();
})