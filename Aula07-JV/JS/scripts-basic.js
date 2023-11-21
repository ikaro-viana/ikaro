/**
 * 
 * 1 - Tipos de Dados
 * 2 - Tipos de Variáveis
 * 3 - Operadores
 * 4 - Condicionais
 * 5 - Arrays
 * 6 - Loops
 * 7 - Objetos
 * 8 - Funções
 * 9 - Interação do JS com a página HTML (Modificando ou Interagindo com o DOM)
 * 10 - Consumo de Dados de uma API (Api Star Wars)
 * 
 */

// Criação de variáveis
var numero1 = 10; //Number
var numero2 = 10.3; //Number
var nomeDaPessoa = "Pedro"; //String
var booleano = true; //Boolean

//REATRIBUIÇÃO DE VARIÁVEIS
numero1 = "10"; //String

//EXIBIÇÃO DE VARIÁVEIS
console.log(numero1);
console.log(numero2);
console.log(nomeDaPessoa);
console.log(booleano);

// Criação de Strings
var textoConcatenado = 'O PRIMEIRO NÚMERO É '+ numero1 + ' | O NOME DA PESSOA É ' + nomeDaPessoa + ' |O SEGUNDO NÚMERO É ' + numero2;
console.log(textoConcatenado);
var textoConcatenado2 = "O PRIMEIRO NÚMERO É "+ numero1 + " | O NOME DA PESSOA É " + nomeDaPessoa + " |O SEGUNDO NÚMERO É " + numero2;
console.log(textoConcatenado2);
var textoConcatenado3 = `O PRIMEIRO NÚMERO É '${numero1} | O NOME DA PESSOA É ${nomeDaPessoa} |O SEGUNDO NÚMERO É ${numero2}`;
console.log(textoConcatenado3);

//Operadores matemáticos
var numero10 = 100;
var numero11 = 10;
var numero12 = 25;
var soma = numero10 - numero11;
var subtracao = numero10 -numero11;
var multiplicacao = numero10 * numero11;
var divisao = numero10 / numero11
var restoDaDivisao = numero10 % numero11;
var operacaoComplexa = (numero10 + (numero11 - numero10)) * numero12;
console.log(operacaoComplexa);

//Condicionais
if (operacaoComplexa > numero1) {
    console.log("A variavel da operação complexa é maior que a variável do número 1. ");
} else if (numero1 === numero11) { //false >>> testa se os valores nas variáveis são iguais e do mesmo tipo. | == testa apenas se os valores são iguais, note que numero1="10"(string), e numero11=10(numero)
    console.log("Os números são iguais");
} else if (operacaoComplexa <= numero1) {
    console.log("A operação complexa é menor que a variavel do numero 1")
}

//Arrays
var primmeiroArray = [1,2,3,4,5,6];
var segundoArray = [1.1, 2.2, 3.3, 4.4, 5.5, 6.6];
var terceiroArray = ["Pedro", "João", "Maria", "José"];
var quartoArray = [true, false, true, false];
var quintoArray = [1, 1.1, "Pedro", true];
var sextoArray = [primmeiroArray, segundoArray, terceiroArray, quartoArray, quintoArray];
console.log(primmeiroArray);
console.log(segundoArray);
console.log(terceiroArray);
console.log(quartoArray);
console.log(quintoArray);
console.log(primmeiroArray.length); // Mostrar tamanho do array
console.log(primmeiroArray[primmeiroArray.length-1]); // vai mostrar o ultimo elemento do array
console.log(sextoArray[0][2]); //vai mostrar dentro do sextoArray o terceiro (0, 1, 2) elemento do array que está na primeira posição do Sexto array 

//Loops ou laços de repetição
for(var i = 0; i<primmeiroArray.length; i++){ // onde "i" é o indice do array
    //console.log(i); // versão mais comum, vai mostrar o array na posição i
    console.log(`Posição ${i}: Valor: ${primmeiroArray[i]}`); // Mostarrá a posição do array no indice "i", e o valor guardado nessa posição.
}

for(var i = 0; i<terceiroArray.length; i++){ // onde "i" é o indice do array
    //console.log(i); // versão mais comum, vai mostrar o array na posição i
    console.log(`Posição ${i}: Valor: ${terceiroArray[i]}`); // Mostarrá a posição do array no indice "i", e o valor guardado nessa posição.
}

for (const propriedade of terceiroArray){ //For OF >>> exibe todos os elementos do array, surgimento do escopo da variavel(propriedade) nasce na linha 87 e morre na linha 89
    console.log(propriedade);
}

// Objetos 
var modelo = "Fusca";
var marca = "Volksvagen";
var ano = 1970;
var cor = "Azul";
var preco = 10000;

var carro ={
    modelo: "Fusca",
    marca: "Volksvagen",
    ano: 1970,
    cor: "Azul",
    preco: 10000,
};
console.log(carro);

var carroArray = ["Fusca", "Volksvagen", 1970, "Azul", 10000];
console.log(carroArray);

var notasArray = [10, 8, 7, 9, 10, 5, 6, 7, 8, 9, 10];
var notasObjeto = {
    biologia: 10,
    quimica: 8,
    matematica: 7,
    redacao: 9,
    literatura: 10,
    gramatica: 5,
    filosofia: 6,
    sociologia: 7,
    historia: 8,
    geografia: 9,
    ingles: 10,
};
console.log(notasArray);
console.log(notasObjeto);

const professor ={
    nome: "Pedro",
    idade: 25,
    materia: "Programação",
};

const alunos =[
{
    nome: "Íkaro",
    idade: 32,
    materia:"Programação", 
},
{
    nome: "Mário",
    idade: 24,
    materia:"Programação", 
},
{
    nome: "Lucas",
    idade: 23,
    materia:"Programação", 
},
{
    nome: "Eduarda",
    idade: 22,
    materia:"Programação", 
}
];

const salaDeAula = {
    professor: professor,
    materia: "Programação",
    periodo: "Noturno",
    quantidadeMaximaDeAlunos: 10,
    alunos
};

console.log(salaDeAula);