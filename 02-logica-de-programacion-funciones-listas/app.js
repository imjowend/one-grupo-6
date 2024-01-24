let secretNumber = generateSecretNumber();
let attempt = 1;
const maxAttempts = 3;
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
    let randomNumber = Math.floor(Math.random()*10)+1;
    return randomNumber;
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
    assignTextToElement('p','Indica un numero del 1 al 10');
    secretNumber = generateSecretNumber();
    attempt = 1;
}

initialParams();
