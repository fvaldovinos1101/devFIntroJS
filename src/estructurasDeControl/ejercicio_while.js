//ejercicio que almacena respuestas de un usuario hasta que el usuario hasta que el usuario ya no ingrese informacion

var arrValores = [] //Aqui se hace un arreglo vacio donde va almacenar la informacion proporcionada por el usuario
var resUsuario // es una variable que sirve para recibir los valores que va enviando el usuario para la interaccion. Guardar en lo que yo lo guardo en mi arreglo


while (resUsuario != "") { //ciclo while, hasta que el usuario me de una clave vacia, va estar repitiendo la lineas de codigo
    resUsuario = prompt("Prueba de while - ingrese un nuevo dato")
    arrValores.push(resUsuario) //Cada valor de string que agrega el usuario lo va agregando a la variable con el array push
}

arrValores.pop() // se agrega un metodo de arreglo pop por que el ultimo elemento es vacio y lo quita
console.log("los valores ingresados fueron: " + a rrValores); //muestra el despligue por fin de ciclo



//usuario agrega n numero de datos al arreglo
var arrValores = []
var resUsuario
alert("introduzca 9 veces un valor en el campo.")

while (arrValores.length <  9) { //el metodo del array length define la longitud del arreglo.
    arrValores.push(prompt("Prueba de while - ingrese un nuevo dato")) // otra forma de 
}

alert("numero maximo de respuestas alzando") //aviso de que ya ingresamos la cantidad maxima de elementos
console.log("los valores ingresados fueron: " + a rrValores); 