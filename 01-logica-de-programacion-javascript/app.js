let secretNumber = Math.floor(Math.random()*10)+1;
let userNumber = 0;
let tries = 1;
//let triesWord = "intento"
let maxTries = 3
while (userNumber != secretNumber) {
    let userNumber = parseInt(prompt("Me indicas un numero entre 1 y 10 por favor:"));

    console.log(userNumber);

    if (userNumber == secretNumber) {
        alert(`Acertaste el numero es: ${secretNumber}, lo hiciste en ${tries} ${tries == 1 ? 'vez' : 'veces'} `);
    }else{
        if (userNumber > secretNumber) {
            alert('El numero secreto es menor');
        } else {
            alert('El numero secreto es mayor');
        }
        //alert('Lo siento, no acertaste el numero');
    }
    tries++;
   // triesWord = "intentos";
    if (tries>maxTries) {
        alert(`Llegaste al numero maximo de ${maxTries} intentos`);
        break;
    }
}