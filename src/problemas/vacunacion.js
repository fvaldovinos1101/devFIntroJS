// problema: Permitir que una persona se vacune si cumple
/* 1. mayor de 18 años
2. embarazada con mas de 9 mes de gestacion y mayor de 18 años
3. personas >= 30 este año */

let ernesto = 18;
if (ernesto > 18) {
    console.log("se puede vacunar");
} else {
    console.log("no te puedes vacunar");
}

// 2do caso
let leticia = 27;
let embarazo = true;
let semanas_de_gestacion = 9.5;

if (leticia > 18 && semanas_de_gestacion > 9) {
    console.log("se puede vacunar");
}
if (leticia > 18) {
    if(embarazo) { //aqui esta evaluando el tipo de dato, lo que hace es decir, y como es un strig con texto, por ende es true
        if (semanas_de_gestacion > 9)
        console.log("se puede vacunar");
    }
}

// 3er caso
let fernando = 29 ;
let cumpleEsteAnho = false;

if (fernando >= 30 || cumpleEsteAnho) {
    console.log("se puede vacuna");
}
