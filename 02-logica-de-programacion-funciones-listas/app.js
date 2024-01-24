const maxRandomNumber = 10
const minRandomNumber = 1
let attempt = 1;
const maxAttempts = 3;
let randomNumbers = [];
let secretNumber = generateSecretNumber();




console.log(secretNumber);

function verifyInput() {
    let userNumber = parseInt(document.getElementById("userValue").value);
    console.log(userNumber);
    console.log(secretNumber);
    console.log(secretNumber===userNumber);
    if (secretNumber===userNumber) {
        assignTextToElement('p',`Aceretaste el numero en ${attempt} ${attempt > 1 ? "intentos" : "intento"}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if (userNumber>secretNumber) {
            assignTextToElement('p','El numero secreto es menor');
        } else {
            assignTextToElement('p','El numero secreto es mayor');
        }
        attempt++;
        cleanInput();
    }
    return;
}

function assignTextToElement(element, text) {
    let title = document.querySelector(element);

    title.innerHTML = text;
    return;
}

function generateSecretNumber() {
    let randomNumber = Math.floor(Math.random()*maxRandomNumber)+minRandomNumber;
    if (randomNumbers.length == maxRandomNumber) {
        assignTextToElement('p',`Ya se sortearon todos los numeros posibles`);
    }else{
        if (randomNumbers.includes(randomNumber)) {
            return generateSecretNumber()
        }else{
            randomNumbers.push(randomNumber);
            return randomNumber;
        }
    }    
}

function cleanInput() {
    document.querySelector("#userValue").value = " ";
}

function restart() {
    cleanInput();
    initialParams();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

function initialParams() {
    assignTextToElement('h1','Juego del numero secreto');
    assignTextToElement('p',`Indica un numero del ${minRandomNumber} al ${maxRandomNumber}`);
    secretNumber = generateSecretNumber();
    attempt = 1;
}

initialParams();
