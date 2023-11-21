var variaavel1 = 10; // Tipo Number
var variavel2 = 10.5; // Tipo Number
var variavel3 = "Victor 10"; //Tipo String
var variavel4 = true; //Tipo Bolean
//Reatribuição de valores
variavel3 = 10; // mudou o tipo da variavel destring para tipo number

//Operações matematicas
var soma = variaavel1 + variavel2; // Tipo Number
var subtracao = soma - variavel2 // Tipo Number >>> 10
var multiplicacao = soma * subtracao //Tipo Number 205
var divisao = multiplicacao / variaavel1 //Tipo number 20.5
var equacao = (soma + (subtracao * variaavel1))*multiplicacao/divisao; //Tipo Number 1205

console.log(equacao); // imprimi na tela o valar da variavel equacao
console.log(soma) // imprimi na tela o valar da variavel soma
console.log(subtracao) // imprimi na tela o valar da variavel subtracao
console.log(multiplicacao) //// imprimi na tela o valar da variavel multiplicacao
console.log(divisao) // imprimi na tela o valar da variavel divisao


var sala =["Luca", 1, true, 10.5, "Victor"]; //Tipo array
console.log(sala);
console.log(sala[3]); // mostra o array na posição 3
console.log(sala[0]); // mostra o array na posição 0
console.log(sala[sala.length -1]); // mostra o array na ultima posição

var professor = "Íkaro Viana";
console.log(professor);
console.log(professor[0]); // mostra o array na posição 0 >>> Í
console.log(professor[1]); // mostra o array na posição 1 >>> k
console.log(professor[professor.length -1]); // mostra o array na ultima posição >>> a
