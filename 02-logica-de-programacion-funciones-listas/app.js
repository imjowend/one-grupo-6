function intentoDeUsuario() {
    alert('Click desde la funcion');
}

function assignTextToElement(element, text) {
    let title = document.querySelector(element);

    title.innerHTML = text;
}

assignTextToElement('h1','Juego del numero secreto');
assignTextToElement('p','Indica un numero del 1 al 10');