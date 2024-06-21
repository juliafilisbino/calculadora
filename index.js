let valorTemp = '0';

let resultado;
let valorUm = '0';
let valorDois = '0';
let operacao = '+';

function attValor(valor) {
    if (valorTemp === '0') {
        valorTemp = valor;
    } else {
        valorTemp = valorTemp + valor;
    }
}

function attOperacao(op){
    operacao = op;
    valorUm = valorTemp;
    valorTemp = '0';
}

function calcular(){
    let tag = document.getElementById("resultado");
    valorDois = valorTemp;
    valorTemp = '0';

    if(operacao === '+'){
        resultado = Number(valorUm) + Number(valorDois);
    }else if(operacao === '-'){
        resultado = Number(valorUm) - Number(valorDois);
    }else if(operacao === '*'){
        resultado = Number(valorUm) * Number(valorDois);
    }else if(operacao === '/'){
        resultado = Number(valorUm) / Number(valorDois);
    }

    tag.innerHTML = resultado;
}
