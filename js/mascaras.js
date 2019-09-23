let nomeInput = document.getElementById('nome');
let nomeRegex = /^[a-zA-z]{1,20}/;

let sobrenomeInput = document.getElementById('sobrenome');
let sobrenomeRegex = /^[a-zA-z]{1,20}/;

let emailInputForm = document.getElementById('email');

let rmInput = document.getElementById('rm');
let rmRegex = /^([rm|RM])+[0-9]{1,5}/;

let senhaInputForm = document.getElementById('senha');
let rSenhaInputform = document.getElementById('senha2');


nomeInput.addEventListener('keypress', function () {
    inputValidation(nomeInput, nomeRegex);
});

sobrenomeInput.addEventListener('keypress', function () {
    inputValidation(sobrenomeInput, sobrenomeRegex);
});

rmInput.addEventListener('keypress', function () {
    inputValidation(rmInput, rmRegex);
});

emailInputForm.addEventListener('keypress', function () {
    inputValidation(emailInputForm, emailRegex);
});

senhaInputForm.addEventListener('keypress', function () {
    inputValidation(senhaInputForm, senhaRegex);
});

rSenhaInputform.addEventListener('keypress', function () {
    inputValidation(rSenhaInputform, senhaRegex);
});


nomeInput.addEventListener('blur', function () {
    inputValidation(nomeInput, nomeRegex);
});

sobrenomeInput.addEventListener('blur', function () {
    inputValidation(sobrenomeInput, sobrenomeRegex);
});

rmInput.addEventListener('blur', function () {
    inputValidation(rmInput, rmRegex);
});

emailInputForm.addEventListener('blur', function () {
    inputValidation(emailInputForm, emailRegex);
});

senhaInputForm.addEventListener('blur', function () {
    inputValidation(senhaInputForm, senhaRegex);
});

rSenhaInputform.addEventListener('blur', function () {
    inputValidation(rSenhaInputform, senhaRegex);
});







