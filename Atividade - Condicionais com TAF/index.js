// Não altere o nome das variavéis ou o texto do prompt! 
// Modifique apenas o tipo da variavel!            
let gender = prompt('Genero');
const height = parseFloat(prompt('Altura'));
const barReps = parseFloat(prompt('Repetições com barra'));
const barSeconds = parseFloat(prompt('Tempo das repetições com barra'));
const abs = parseFloat(prompt('Abdominais'));
const runDistance = parseFloat(prompt('Distância da corrida'));
const runTime = parseFloat(prompt('Tempo da corrida'));
const swimDistance = parseFloat(prompt('Distância da natação'));
const swimTime = parseFloat(prompt('Tempo da natação'));
const diveTime = parseFloat(prompt(' Tempo de mergulho'));

let result = false;

//Desenvolva seu código aqui:
if (gender == "male") {
    if (
        height >= 1.70 &&
        barReps >= 6 ||
        barSeconds >= 15 &&
        abs >= 41 &&
        ((runDistance >= 3000 && runTime <= 720) || runDistance >= 5000 && runTime <= 1200) &&

        (swimDistance >= 100 && swimTime <= 60) ||
        diveTime >= 150

    ) {
        result = true;
    }
}
console.log(result);

if(gender == "female")


height >= 1.60 &&
    barReps >= 5 ||
    barSeconds >= 12 &&
    abs >= 41 &&
    ((runDistance >= 4000 && runTime <= 900) || runDistance >= 6000 && runTime <= 1800) &&
    (swimDistance <= 100 && swimTime <= 60) || diveTime >= 30
 
    { 
        result=true
    }
    console.log(result);





