//Atividade 1: Verificação de Número Par ou Ímpar
//Escreva um programa que solicite ao usuário um número e determine se ele é par ou ímpar.
let num1 = 2
let num2 = 3
if (num1 % 2 == 0) {
    alert('o num1 é par')
} else {
    alert('num1 é impar')
}
if (num2 % 2 == 0) {
    alert('num2 é par')

} else {
    alert('o num2 é impar')
}
//Atividade 2: Classificação de Idade
//Escreva um programa que solicite ao usuário sua idade e, com base na idade, imprima uma mensagem indicando se ele é uma criança, adolescente, adulto ou idoso.

let idade = prompt("qual sua idade?")

if (idade < "13") {
    alert('voce é uma criança')
}
else if (idade < "18") {
    alert('voce é um adolecente')
}
else if (idade < "65") {
    alert('voce é um adulto')
}
else {
    alert('voce é um idoso')//Portanto, o else é uma garantia de que sempre haverá uma resposta para o usuário, independentemente da idade inserida.
}

//Atividade 3: Verificação de Nota
//Escreva um programa que solicite ao usuário uma nota entre 0 e 100 e determine se ele foi aprovado (nota >= 60) ou reprovado (nota < 60).
let notastring = prompt("digite sua nota")
let nota=parseFloat(notastring)//Essa abordagem garante que a comparação seja feita corretamente numericamente, considerando a possibilidade do usuário inserir números decimais

if (nota >= 60) {
    alert('aprovado')
}
else {
    alert('reprovado')
}

//Atividade 4: Verificação de Login
//Escreva um programa que solicite ao usuário um nome de usuário e uma senha e verifique se eles estão corretos (use um nome de usuário e senha fixos para verificação).

let usuário = prompt('digite seu usuario')
let senha = prompt('digite sua senha')

//Atividade 5: Classificação de Nota em Letras
//Escreva um programa que solicite ao usuário uma nota entre 0 e 100 e imprima a classificação em letras (A, B, C, D, F).