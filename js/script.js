const inputs = document.querySelectorAll('.input');
const msgErros = document.querySelectorAll('.erro');
const btnConfirme = document.querySelector('#btnConfirme');

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

        }

        // Verifica os campos de input individualmente
        if(index == 0) {

        }

        if(index == 2) {
            if(input.value > 12) {
                console.log('estou aqui!');
                inputs[index].classList.add('alerta');
                msgErros[index].innerHTML = 'Invalid value 01 a 12';
            }
        }
  

    });
});

const verificaInput = () => {
    inputs.forEach((input) => {
        input.addEventListener('input', ({target}) => {
            if(target.value == '') {
                input.classList.add('alerta');
            }
        });
    });
};
