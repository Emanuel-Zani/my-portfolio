const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensage = document.getElementById('mensage');

form.addEventListener('submit', e => {
    e.preventDefault();
    let warning = "";
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    if(nombre.value.length < 2){
        warning += 'Nombre no valido <br>'
    }
    if(!regexEmail.test(email.value)){
        warning += 'Email no valido <br>'
    }
})