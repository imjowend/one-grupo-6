/*
Desafios

Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. Muestra cada número.
Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número.
Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.
Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.
*/
let counter = 1;
while (counter <= 10) {
    alert(counter);
    counter++;
}

let counter2 = 10;
while (counter2 >= 0) {
    alert(counter2);
    counter2++;
}

let number = prompt('ingrese un numero: ');
let counter3 = 0;
while (counter3<=number) {
    alert(counter3)
    counter3++;
}