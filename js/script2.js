const inputs = document.querySelectorAll('.input');
const msgErros = document.querySelectorAll('.erro');
const btnConfirme = document.querySelector('#btnConfirme');

const nomeCartao = document.querySelector('#nomeCartao');
const numeroCartao = document.querySelector('#numeroCartao');
const validadeCartao = document.querySelector('#validadeCartao');
const segurancaCartao = document.querySelector('#segurancaCartao');

let nome, numCartao, mes, ano, data, cod, temp;

let dataAtual = new Date();
let anoAtual = dataAtual.getFullYear();


btnConfirme.addEventListener('click', () => {

    inputs.forEach((input, index) => {
        // Limpa os alertas de erros
        input.classList.remove('alerta');

        // Verifica se os campos estão vazios
        if(input.value == '') {
            input.classList.add('alerta');

            msgErros.forEach((elemento) => {
                elemento.innerHTML = "Can't be blank"
            });

        // } else {

        //     // Verifica os campos de input individualmente
        //     if(index == 0) {
        //         nome = input.value;
        //         nomeCartao.innerHTML = nome;
        //     }
        //     if(index == 1) {
        //         // temp = input.value;
        //         // let bloco1 = temp.slice(0, 4);
        //         // let bloco2 = temp.slice(4, 8);
        //         // let bloco3 = temp.slice(8, 12);
        //         // let bloco4 = temp.slice(12);
        //         // numCartao = `${bloco1} ${bloco2} ${bloco3} ${bloco4}`;
        //         // numeroCartao.innerHTML = numCartao;

        //     }
        //     if(index == 2) {
        //         if(input.value > 12) {
        //             console.log('estou aqui!');
        //             inputs[index].classList.add('alerta');
        //             msgErros[index ].innerHTML = 'Invalid value 01 a 12';
        //         }
        //     }
        }

  

    });
});

// inputs[1].addEventListener('input', ({target}) => {

//     console.log(target.value.length);

//     numCartao = `${target.value.slice(0, 4)} ${target.value.slice(4, 8)} ${target.value.slice(8, 12)} ${target.value.slice(12)}`

    

//     if(target.value.length === 14) {
//         numCartao = `${target.value.slice(0, 4)} ${target.value.slice(4, 8)} ${target.value.slice(8, 12)}`
//     }

//     if(numCartao > 0) {
//         numeroCartao.innerHTML = numCartao;
//     } else {
//         numeroCartao.innerHTML = '0000 0000 0000 0000';
//         // numCartao = '';
//     }

//     target.value = numCartao;
// });


inputs.forEach((input, index) => {
    
    input.addEventListener('input', ({target}) => {
        validaDados(input, input.value, index);
    });
});

const validaDados = (input, texto, index) => {



    // input.remove.add('alerta');

    msgErros.forEach((elemento) => {
        elemento.innerHTML = "Can't be blank"
    });

    if(index == 0) {
        nome = texto;
        nomeCartao.innerHTML = nome;
    } else if(index == 1) {
        corrigeNumero(texto);
        
    } else if (index == 2) {
        mes = texto;
        validadeCartao.innerHTML = `${mes}/00`;
        
        
    } else if(index == 3) {
        
        if(texto >= anoAtual.toString().slice(2)) {
            input.classList.remove('alerta');
            ano = texto;
            validadeCartao.innerHTML = `${mes}/${ano}`;
        } else if(texto.length < 2) {
            alertaErro(2, input, 'data inválida');
            
        } else {
            // input.classList.add('alerta');
            alertaErro(2, input, 'data inválida');
        }
    }

    

};

const corrigeNumero = (valor) => {
    // console.log(valor.length);
    
    let bloco1 = valor.slice(0, 4);
    let bloco2 = valor.slice(4, 8);
    let bloco3 = valor.slice(8, 12);
    let bloco4 = valor.slice(12);

    let blocos = `${bloco1} ${bloco2} ${bloco3} ${bloco4}`;
    // inputs[1].value = blocos;
    // numeroCartao.innerHTML = blocos;

    if(valor.length == 0) {
        numeroCartao.innerHTML = '0000 0000 0000 0000';
    } else {
        numeroCartao.innerHTML = blocos;
    }

};

const alertaErro = (index, input, msg) => {
    input.classList.add('alerta');

    msgErros[index].innerHTML = msg;

};