let secretNumber = 6;
let userNumber = prompt("Me indicas un numero entre 1 y 10 por favor:");

console.log(userNumber);

if (userNumber == secretNumber) {
    alert(`Acertaste el numero es: ${secretNumber}`);
}else{
    alert('Lo siento, no acertaste el numero');
}

// Desafíos

// Muestra una alerta con el mensaje "¡Bienvenida y bievenido a nuestro sitio web!".
// Declara una variable llamada nombre y asígnale el valor "Luna".
// Crea una variable llamada edad y asígnale el valor 25.
// Establece una variable numeroDeVentas y asígnale el valor 50.
// Establece una variable saldoDisponible y asígnale el valor 1000.
// Muestra una alerta con el texto "¡Error! Completa todos los campos".
// Declara una variable llamada mensajeDeError y asígnale el valor "¡Error! Completa todos los campos". Ahora muestra una alerta con el valor de la variable mensajeDeError .
// Utiliza un prompt para preguntar el nombre del usuario y almacénalo en la variable nombre .
// Pide al usuario que ingrese su edad usando un prompt y almacénala en la variable edad.
// Ahora, si la edad es mayor o igual a 18, muestra una alerta con el mensaje "¡Puedes obtener tu licencia de conducir!".

// alert("¡Bienvenida y bievenido a nuestro sitio web!");
// let nombre = "Luna";
// let edad = 25;
// let numeroDeVentas = 50;
// let saldoDisponible = 1000;

// alert('¡Error! Preencha todos los campos');

// let mensajeDeError = "¡Error! Completa todos los campos"
// alert(mensajeDeError);

// let nombreUsuario = prompt("Me indica su nombre por favor:");
// let edadUsuario = prompt("Me indica su edad por favor:");

// if (edadUsuario >= 18) {
//     alert("¡Puedes obtener tu licencia de conducir!");
// }


// Desafíos:

// Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".
// Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.
// Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!". En caso contrario, muestra "Intenta nuevamente para ganar.".
// Crea un mensaje que informe al usuario sobre el saldo de su cuenta, utilizando un template string para incluir el valor del saldo.
// Pide al usuario que ingrese su nombre mediante un prompt. Luego, muestra una alerta de bienvenida usando ese nombre.

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