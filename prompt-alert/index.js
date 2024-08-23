let nome = prompt("Qual é o seu nome?");
alert("Seja bem vindo(a), " + nome + "!")
alert("Oi! Bem-vindos à Kenzie Academy Brasil!");


let numeroCorreto = 7;
let palpite = prompt("Adivinhe o número que estou pensando, entre 1 e 10!");

if (palpite == numeroCorreto) {
    alert("Parabéns! Você acertou o número!");
} else {
    alert("Poxa, não é esse número. Tente de novo!");
}