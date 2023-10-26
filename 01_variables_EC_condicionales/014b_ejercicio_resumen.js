/*
Las notas de María, Juan y Luis en los exámenes de evaluación son respectivamente:

María: 10, 3, 6, 7
Juan: 5, 6, 1, 4
Luís: 9, 1, 1, 8

- define un objeto para cada estudiante donde se vean reflejadas las notas
- crea un bloque if - else if en el que se devuelva si el estudante suspende (<5) aprueba (5 - 7) o tiene un notable (>= 8), tendras que hacer la media.
- testea el bloque con cada alumno

*/
let maria = {
    nombre: "María",
    notas: [10, 3, 6, 7]
};

let Juan = {
    nombre: "Juan",
    notas: [5, 6, 1, 4]
};

let luis = {
    nombre: "Luís",
    notas: [9, 1, 1, 8]
};

if (maria.notas < 5){
    console.log("suspende")
} else if(maria.notas < 7){
    console.log("aprueba")
} else if(maria.notas >= 8){
    console.log("notable")
}