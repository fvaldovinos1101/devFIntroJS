// del 1 al 10 cuantos numeros son multiplos de 2?

// ejemplo de como se haria con WHILE
var contador = 0 // variable que cuenta los multiplos de 10
var i = 1 // variable que va del uno al 10
while (i <= 10) {
    if (i % 2 == 0) {// nota el simbolo % significa el residuo de una division, es decir, en la divicion de 11 entre 2 el residuo es 1
        contador++
    }
    i++
}
console.log("en el rango del 1 al 10 hay: " + contador + "multiplos de dos");



//ejemplo de como se haria con FOR  ***CONTADOR***
/* la estructura de control de for necesita de 3 parametros: 
- La inicializacion de la variable de contron (i)
-la condicional
-el incremento de la variable de control (i)
*/


var contador = 0
for (var i = 0; i < 10; i++) {
    if (i % 2 == 0) {
        contador++
    }
}
console.log("en el rango del 1 al 10 hay: " + contador + "multiplos de dos");


//ejemplo de como se haria con FOR = *** Acumulador ***

var Acumulador = 0
for (var 1 = 0 < i <= 4 ; 1++) {
    console.log("la suma de " + Acumulador + " + " + i + "e:");
    Acumulador = Acumulador + i
    console.log(Acumulador);
    
}



//ejercicio de imprimir los primeros 50 numeros pares 