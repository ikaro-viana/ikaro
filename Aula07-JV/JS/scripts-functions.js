/**Funções */
const numero1 = 10;
const numero2 = 20;

function soma (valor1, valor2) {
var resultado = valor1 + valor2;
return resultado;
}

function subtracao (valor1, valor2) {
    var resultado = valor1 - valor2;
    return resultado;
}

function multiplicacao (valor1, valor2) {
    var resultado = valor1 * valor2;
    return resultado;
}

function divisao (valor1, valor2) {
    var resultado = valor1 / valor2;
    return resultado;
}

function raizQuadrada (valor1){
    var resultado = Math.sqrt(valor1);
    return resultado;
}

function teoremaDePitagorasFuncao (valor1, valor2) {
    var primeiraParteDaEquacao = multiplicacao (valor1, valor1);
    var segundaParteDaEquacao = multiplicacao(valor2, valor2);
    var terceiraParteDaEquacao = soma(primeiraParteDaEquacao, segundaParteDaEquacao);
    var resultado = raizQuadrada(terceiraParteDaEquacao);
    return resultado;
}

var teoremaDePitagoras = teoremaDePitagorasFuncao(numero1 , numero2);
console.log(teoremaDePitagoras);