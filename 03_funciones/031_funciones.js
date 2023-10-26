/* FUNCIONES */

/* 1. DEFINICION */

function restar(num1, num2){
    let resta = num1 - num2;
    return resta;
}
function multiplicar(num1, num2){
    let multiplica = num1 * num2;
    return multiplica;
}
function dividir(num1, num2){
    let divide = num1 / num2;
    return divide;
}

let x = 10;
let y = 12;

let resta = restar(x, y);
let multiplica = multiplicar(x, y);
let divide = dividir(x, y);
console.log("El valor de la resta es", resta);
console.log("El valor de la multiplicación es", multiplica)
console.log("El valor de la división es", divide)



// Parámetros opcionales

function sumarOpc(num1 = 0, num2 = 0) {
    return num1 + num2;
}

function escribirNombre(nombre, lastName, middleName = "", secondLastName = ""){
    return `Su nombre es: ${nombre} ${middleName} ${lastName} ${secondLastName}`;
}
console.log(escribirNombre("Juan", "Perez"));
// Parámetros ilimitados "arguments"

/* function sumarTodos() {
    let suma = 0;
    arguments.foreach(numero => {
        suma += numero
    });
    return suma;
}

console.log(sumarTodos(1,2,3,4,5,4,3,2,1,1,2,5));
 */

// Funciones anonimas
const sumaAnonima = (num1, num2) => {
    return num1 + num2;
}