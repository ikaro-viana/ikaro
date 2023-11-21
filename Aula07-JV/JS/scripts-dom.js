function calcular() {
    const {numero1, numero2}=getValues();
    const isValid = verificador(numero1, numero2);
    if (!isValid) {
        alert('Preencha todos os campos')
        return;
    }
    const resultado = soma(numero1, numero2);
    setResult(resultado);
}

function verificador (numero1, numero2) {
    if (numero1 =="" || numero2 == "") {
        return false;
    }
    return true;
}

function soma(valor1, valor2){
    return parseFloat(valor1) + parseFloat(valor2);
}

function converValueToNumber(value) {
    return parseFloat(value);
}

function getValues() {
    const numero1 = document.getElementById('numero1').value;
    const numero2 = document.getElementById('numero2').value;
    return{numero1, numero2};
}

function setResult(result) {
    document.getElementById('resultado').innerHTML = result;
}