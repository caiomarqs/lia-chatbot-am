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





let btnCadastrar = document.getElementById('btn-cadastrar');
btnCadastrar.addEventListener('click', function (e) {
    e.preventDefault();

    let erros = [];

    let validacaoNome = () => {
        if (inputValidation(nomeInput, nomeRegex) == true) {
            return true;
        }
        else {
            erros.push('O nome está invalido');
        }
    }
    let validacaoSobrenome = () => {
        if (inputValidation(sobrenomeInput, sobrenomeRegex) == true) {
            return true;
        }
        else {
            erros.push('O Sobrenome está invalido');
        }
    }
    let validacaoEmail = () => {
        if (inputValidation(emailInputForm, emailRegex) == true) {
            return true
        } else {
            erros.push('O email está invalido');
        }

    }

    let validacaoRM = () => {
        if (inputValidation(rmInput, rmRegex) == true) {
            return true
        } else {
            erros.push('O RM está invalido');
        }
    }

    let validacaoSenhas = () => {
        let senha1 = inputValidation(senhaInputForm, senhaRegex);
        let senha2 = inputValidation(rSenhaInputform, senhaRegex);



        if (senha1 == true) {
            if (senha2 == true) {
                if (senhaInputForm === rSenhaInputform) {
                    return true
                }
                else {
                    erros.push('As senhas não condizem');
                }
            }
            else {
                erros.push('A senha digitada novamente esta invalida');
            }
        }
        else {
            erros.push('A senha esta invalida');
        }
    }


    let retrun1;
    let retrun2;
    let retrun3;
    let retrun4;
    let retrun5;



    function chamaTodas() {
        retrun1 = validacaoNome();
        retrun2 = validacaoSobrenome();
        retrun3 = validacaoRM();
        retrun4 = validacaoEmail();
        retrun5 = validacaoSenhas();
    }

    if (retrun1 == true && retrun2 == true && retrun3 == true && retrun4 == true && retrun5 == true) {
        alert('Cadastro feito com sucesso');
    }
    else {
        chamaTodas()
        for (let index = 0; index < erros.length; index++) {
            alert(erros[index].toString());
        }
    }
});






