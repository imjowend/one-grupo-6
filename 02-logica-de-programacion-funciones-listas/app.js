let randomNumber = generateRandomNumber();

console.log(randomNumber)

function verifyInput() {
    let userNumber = document.getElementById("userValue").value;
    console.log(userNumber);
    return;
}

function assignTextToElement(element, text) {
    let title = document.querySelector(element);

    title.innerHTML = text;
    return;
}

function generateRandomNumber(params) {
    let randomNumber = Math.floor(Math.random()*10)+1
    return randomNumber;
}

assignTextToElement('h1','Juego del numero secreto');
assignTextToElement('p','Indica un numero del 1 al 10');

// tengo que seguir avanzando xd