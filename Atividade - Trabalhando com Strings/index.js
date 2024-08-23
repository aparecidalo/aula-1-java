//Exercício 1 Crie um programa que concatene dois nomes e retorne uma frase de saudação.
//Entrada: nome1 = "João", nome2 = "Silva" Saída: "Olá João Silva!"
const nome1= "joao"
const nome2= "silva"
const saudacao=`Ola ${nome1} ${nome2}`
console.log(saudacao)

//Exercício 2 Crie um programa que adicione uma string ao final de outra string e retorne a string resultante.
//Entrada: string1 = "hello", string2 = "world" Saída: "helloworld"
const string1="hello"
const string2="world"
const string3=string1 + string2
console.log(string3)

//Exercício 3 Crie um programa que receba uma string em formato de número decimal e retorne o número inteiro equivalente.
//Entrada: "12.5" Saída: 12

const numerostring="12.5"
const numeroDecimal=parseInt(numerostring)
console.log(numeroDecimal)

//Exercício 4 Crie um programa que converta uma string em formato de número inteiro para um número inteiro.
//Entrada: "12" Saída: 12

const numerostring1= "12"
const numeroInteiro=parseInt(numerostring1)
console.log(numeroInteiro)

//Exercício 5 Crie um programa que converta duas strings em formato de número inteiro para um número inteiro, faça uma soma desses números e apresente o resultado
//Entrada 1: "12" Entrada 2: "3" Saída: 15

const entrada1="12"
const entrada2="3"
const resultado1=parseInt(entrada1)
console.log(resultado1)
const resultado2=parseInt(entrada2)
console.log(resultado2)

const soma=resultado1+resultado2
console.log(soma)

