const resultado = document.querySelector(' .result ');
const confirmar = document.querySelector(' .igual ');


function insert( valor ) {
    resultado.innerHTML += valor;
}

function clean() {
    resultado.innerHTML = ' ';
}

function backspace() {
    if(resultado.textContent){
        let result = document.getElementById('resultado').innerHTML
    }
}