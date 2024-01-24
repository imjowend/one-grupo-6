let secretNumber = generateSecretNumber();

console.log(randomNumber)

function verifyInput() {
    let userNumber = parseInt(document.getElementById("userValue").value);
    console.log(userNumber);
    console.log(secretNumber);
    console.log(secretNumber===userNumber);
    if (secretNumber===userNumber) {
        assignTextToElement('p','Aceretaste el numero');
    }else{
        if (userNumber>secretNumber) {
            assignTextToElement('p','El numero secreto es menor');
        } else {
            assignTextToElement('p','El numero secreto es mayor');
        }
    }
    return;
}

function assignTextToElement(element, text) {
    let title = document.querySelector(element);

    title.innerHTML = text;
    return;
}

function generateSecretNumber(params) {
    let randomNumber = Math.floor(Math.random()*10)+1
    return randomNumber;
}

assignTextToElement('h1','Juego del numero secreto');
assignTextToElement('p','Indica un numero del 1 al 10');

// tengo que seguir avanzando xd