/*
Desafíos:

Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".
Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.
Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!". En caso contrario, muestra "Intenta nuevamente para ganar.".
Crea un mensaje que informe al usuario sobre el saldo de su cuenta, utilizando un template string para incluir el valor del saldo.
Pide al usuario que ingrese su nombre mediante un prompt. Luego, muestra una alerta de bienvenida usando ese nombre.
*/
let day = prompt('Ingrese dia de la semana por favor: ')
if (day == "Sabado" || day == "Domingo") {
    alert("¡Buen fin de semana!")
}else{
    alert("¡Buena semana!")
}

let number = prompt('Ingrese un numero por favor: ')
if (number > 0) {
    alert(`El numero ${number}  es positivo`)
}
if (number < 0) {
    alert(`El numero ${number}  es negativo`)
}

let points = prompt('Ingrese su puntuacion por favor: ')
if (points >= 100) {
    alert("¡Felicidades, has ganado!")
}else{
    alert("Intenta nuevamente para ganar.")
}

let accountBalance = 1
alert(`El saldo de su cuenta es de $${accountBalance}`)

let userName = prompt("Me indica su nombre por favor:");
alert(`Bienvenido ${userName}`)
