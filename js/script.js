const inputs = document.querySelectorAll('.input');
const msgErros = document.querySelectorAll('.erro');
const btnConfirme = document.querySelector('#btnConfirme');
const btnContinue = document.querySelector('#btnContinue');
const formulario = document.querySelector('.formulario');
const concluido = document.querySelector('.concluido');

const inputNome = document.querySelector('#inputNome');
const inputNumero = document.querySelector('#inputNumero');
const inputMes = document.querySelector('#inputMes');
const inputAno = document.querySelector('#inputAno');
const inputCVC = document.querySelector('#inputCVC');

const validadeCartao = document.querySelector('#validadeCartao');
let nome = '';
let numero = '';
let mes = '';
let ano = '';
let cvc = '';

let dataAtual = new Date();
let anoAtual = dataAtual.getFullYear().toString().substr(-2);

btnConfirme.addEventListener('click', (event) => {
    event.preventDefault();

    if(validacao()) {
        formulario.classList.remove('active');
        concluido.classList.add('active');
    }

});

btnContinue.addEventListener('click', (event) => {
    event.preventDefault();
    window.location.reload(true);
});

const validacao = () => {
    let retorno;
    inputs.forEach((input) => {
        input.classList.remove('alerta');
        if(input.classList.contains('alerta') || input.value == '') {
            retorno = false;
            input.classList.add('alerta');
            // msgErros[index].innerHTML = "Can't be blank";
            return;
        } else {
            retorno = true;

        }
    });

    return retorno;
}

const verificaNome = () => {
    const nomeCartao = document.querySelector('#nomeCartao');
    nomeCartao.innerHTML = inputNome.value;
    
    if(inputNome.value.length < 1) {
        nomeCartao.innerHTML = 'Jane Appleseed';
    } else if(inputNome.value.length < 8) {
        inputNome.classList.add('alerta');
        msgErros[0].innerHTML = 'Wrong Format, full name.'
    } else {
        inputNome.classList.remove('alerta');
        nome = inputNome.value;
    }
};
addEventListener('input', verificaNome);

const mascaraNumero = (valor) => {

    let bloco1 = valor.slice(0, 4);
    let bloco2 = valor.slice(4, 8);
    let bloco3 = valor.slice(8, 12);
    let bloco4 = valor.slice(12);

    let blocos = `${bloco1} ${bloco2} ${bloco3} ${bloco4}`;

    return blocos;
};

const verificaNumero = () => {
    const numeroCartao = document.querySelector('#numeroCartao');

    if(inputNumero.value.length < 1) {
        numeroCartao.innerHTML = '0000 0000 0000 0000';
    } else {
        numeroCartao.innerHTML = mascaraNumero(inputNumero.value);
        numero = inputNumero.value;
        // inputNumero.value = mascaraNumero(numero);

        inputNumero.addEventListener('keydown', ({key}) => {
            if(key == 'Backspace' || key == 'Delete') {
                inputs[1].value = '';
                numeroCartao.innerHTML = '0000 0000 0000 0000';
            }
        } );

    }
};
addEventListener('input', verificaNumero);

const validaMes = (mes) => {
    inputMes.classList.remove('alerta');

    if(mes.length == 2) {

        if(mes > 12 || mes < 1) {
            inputMes.classList.add('alerta');
            inputMes.value = '';
            return inputMes.value;
        } else {
            return inputMes.value;
        }
    } else {
        
        return inputMes.value;
    }

};

const validaAno = (ano) => {
    inputAno.classList.remove('alerta');

    if(ano.length == 2 && ano < anoAtual) {
        inputAno.classList.add('alerta');
        inputAno.value = '';
        return inputAno.value;
    } else {
        return inputAno.value;
    }
};

const verificaData = () => {
    
    mes = validaMes(inputMes.value);
    ano = validaAno(inputAno.value);

    if(inputMes.value.length < 1 && inputAno.value < 1) {
        validadeCartao.innerHTML = '00/00';
    } else if(inputMes.value > 0) {
        // validadeCartao.innerHTML = `${mes}/00`;
        validadeCartao.innerHTML = `${mes}/${ano}`;
    } else if(inputAno.value > 0) {
        // validadeCartao.innerHTML = `00/${ano}`;
        validadeCartao.innerHTML = `${mes}/${ano}`;
    }
};
addEventListener('input', verificaData);


const verificaCVC = () => {
    const segurancaCartao = document.querySelector('#segurancaCartao');

    if(inputCVC.value.length < 3) {
        segurancaCartao.innerHTML = '000';
    } else {
        segurancaCartao.innerHTML = inputCVC.value;
        cvc = inputCVC.value;
    }
};
addEventListener('input', verificaCVC);

const teste = () => {
    let retorno;
    inputs.forEach((input) => {
        if(input.classList.contains('alerta')) {
            retorno = false;
        } else {
            retorno = true;
        }
    });

    return retorno;
};