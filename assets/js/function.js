var nome;
var sobrenome;
var email;
var telefone;
var form_campo_vazio;
var formEmailValido;

function validaformulario() {
    // Valida se o campo está vazio //
    if (nome != "" && sobrenome != "" && email != "" && assunto != "" && mensagem != "") {
        form_campo_vazio = 0;
        // Valida se a função do email retornou verdadeira //
        if (formEmailValido = 1) {
            alert("Formulário enviado, entraremos em contato em breve")
        }
        else {
            alert("Digite o e-mail corretamente")
        }
    }
    else {
        form_campo_vazio = 1;
        alert("Por favor, preencher todos os campos")
    }
}

function validacaoEmail(field) {
    usuario = field.value.substring(0, field.value.indexOf("@"));
    dominio = field.value.substring(field.value.indexOf("@") + 1, field.value.length);

    if ((usuario.length >= 1) &&
        (dominio.length >= 3) &&
        (usuario.search("@") == -1) &&
        (dominio.search("@") == -1) &&
        (usuario.search(" ") == -1) &&
        (dominio.search(" ") == -1) &&
        (dominio.search(".") != -1) &&
        (dominio.indexOf(".") >= 1) &&
        (dominio.lastIndexOf(".") < dominio.length - 1)) {
        document.getElementById("msgemail").innerHTML = "E-mail válido";
        formEmailValido = 1;
    }
    else {
        document.getElementById("msgemail").innerHTML = "<font color='red'>E-mail inválido </font>";
        formEmailValido = 0;
    }
}
