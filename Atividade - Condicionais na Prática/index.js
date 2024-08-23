//Exercício 1
//Faça um algoritmo declarando as variáveis A, B, C iniciando-as com os respectivos valores 10, 20 e 30, e imprima na tela se a soma de A + B é menor que C.
//let A=10
//let B=20
//let C=30
//let soma=A+B
//if(soma < C) { 
//alert('A soma de A + B é menor que C');
//}

//Exercício 2
//Faça um algoritmo declarando uma variável com um valor numérico qualquer e informe na tela se esse numero é par ou ímpar.

//let numero = 30
//if(numero % 2 == 0){alert('o numero é par, pois o resto da divisao por 2 é zero')}
//else{alert('o numero é impar, pois o resto da divisao por 2 nao é zero')}

//Exercício 3
//Declare duas variáveis que armazenam valores boleanos(lógicos) e então determina se ambos são VERDADEIROS ou FALSOS.

//let gostoDexuxu = false
//let gostoDechocolate =true
//if(gostoDexuxu){alert('quero comer xuxu')}
//else if(gostoDechocolate){alert('quero comer chocolate')}
//else{alert('nao quero comer nada')}

//Exercício 4
//Declare três variáveis que armazenam valores numéricos inteiros e diferentes e mostre-os em ordem decrescente.

//if(num1 > num2 && num1 >num3){alert('num1 é maior')}
//else if(num2>num1>num3){alert('num2 é maior')}
//else if(num3>num1>num2){'num3 é maior'}
//else if(num1>num2){alert('num1 é maior que num2')}



//Primeiro Caso: num1 é o maior

//Se num1 for maior que num2 e num3, então num1 é o maior.
//Dentro deste caso, precisamos comparar num2 e num3 para determinar quem é o intermediário e quem é o menor.
//Segundo Caso: num2 é o maior

//Se num2 for maior que num1 e num3, então num2 é o maior.
//Dentro deste caso, precisamos comparar num1 e num3 para determinar quem é o intermediário e quem é o menor.
//Terceiro Caso: num3 é o maior

//Se num3 for maior que num1 e num2, então num3 é o maior.
//Dentro deste caso, precisamos comparar num1 e num2 para determinar quem é o intermediário e quem é o menor.

//CORREÇÃO
//EXERCICIO1
let a = 10;
let b = 20;
let c = 30;

let soma = a + b;

if (soma < c) {
    alert('a soma é menor que c!');
}

//EXERCICIO2
let num = 5
if(num % 2 == 0){
    alert('o numero é par')
}else{
    alert('o numero é impar')
}

//EXERCICO3 
let bool1 = true
let bool2 = true

if(bool1 == true & bool2 == true){
    alert('ambos sao verdadeiros')

}

//EXERCICO4s
let num1 = 7
let num2 = 9
let num3 = 5

if(num1 > num2 && num2 >num3){
    console.log('numero 1 sendo o maior')
    alert(num1 + '->' + num2 + '->' + num3)
}
else if (num1 < num2 && num1 > num3){
    console.log('numero 2 sendo o maior')
    alert(num2 + '->' + num1 + '->' + num3)
}
else if (num3 > num2 && num2 > num1){
    console.log('numero 3 sendo o maior')
    alert(num3 + '->' + num2 + '->' + num1)
}
else if(num1 > num3 && num2 < num3){
    console.log('numero 1 sendo maior -> num1, num3, num2')

}
//EXERCICIO5
let t=10
let f=25
if(t>f){
    alert('t é maior que f')
}
else{alert('f é maior que t')}