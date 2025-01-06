// Desarrollar un programa en JavaScript que permita calcular el promedio de tres notas de un estudiante
// (primer parcial, segundo parcial y final) y determine si el estudiante aprueba o desaprueba la materia,
// para finalizar muestra su nota y un texto que diga si está o no aprobado.

/* --------- COMPLEJIZAR LA ACTIVIDAD --------- */
// Si el promedio es menor a 4.0, mostrar en pantalla: "Desaprobado".
// Si el promedio está entre 4.0 (inclusive) y 5.9, mostrar en pantalla: "Desaprobado, pero puede recuperar".
// Si el promedio está entre 6.0 (inclusive) y 7.9, mostrar en pantalla: "Aprobado con nota justa".
// Si el promedio está entre 8.0 (inclusive) y 9.4, mostrar en pantalla: "Aprobado con buena nota".
// Si el promedio es mayor a 9.5 (inclusive), mostrar en pantalla: "Aprobado con excelencia".


function inicio() {

    let primer_parcial = prompt("Ingrese la nota del Primer Parcial");
    let segundo_parcial = prompt("Ingrese la nota del Segundo Parcial");
    let final = prompt("Ingrese la nota del Final");
    let promedio = 0;
    let promedioRedondeado = 0;

    let error = document.getElementById("error");

    promedio = ((parseInt(primer_parcial) + parseInt(segundo_parcial) + parseInt(final)) / 3);
    promedioRedondeado = promedio.toFixed(2);
    console.log(promedioRedondeado);

    if (promedioRedondeado <= 10) {
        calcularPromedio(primer_parcial, segundo_parcial, final, promedioRedondeado);
    } else {
        error.classList.remove("invalid");
        error.innerHTML = "El promedio no puede ser mayor a 10";
    }
}

function calcularPromedio(primer_parcial, segundo_parcial, final, promedioRedondeado) {

    let titulo = document.getElementById("titulo");
    let notas = document.getElementById("notas");
    let resultado = document.getElementById("resultado");


    titulo.innerHTML = "Notas del Alumno" + "<br>";
    notas.innerHTML = "Primer Parcial: " + primer_parcial + "<br>" +
        "Segundo Parcial: " + segundo_parcial + "<br>" +
        "Final: " + final + "<br>" +
        "Promedio: " + promedioRedondeado + "<br>";

    if (promedioRedondeado < 4.0) {
        resultado.innerText = "Desaprobado";
    } else if (promedioRedondeado >= 4.0 && promedioRedondeado < 5.9) {
        resultado.innerText = "Desaprobado, pero puede recuperar";
    } else if (promedioRedondeado >= 6.0 && promedioRedondeado < 7.9) {
        resultado.innerText = "Aprobado con nota justa";
    } else if (promedioRedondeado >= 8.0 && promedioRedondeado < 9.4) {
        resultado.innerText = "Aprobado con buena nota";
    } else if (promedioRedondeado >= 9.5) {
        resultado.innerText = "Aprobado con excelencia";
    }
}

window.addEventListener("load", inicio, false);