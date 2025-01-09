// Ejercicio:
// Crea una función llamada analizarNumeros que reciba un array de números como parámetro. 
// La función debe recorrer el array utilizando un bucle for y realizar las siguientes acciones:
// Contar cuántos números son positivos, negativos y cuántos son ceros.
// Calcular la suma de los números positivos.
// Calcular el promedio de los números negativos (si no hay negativos, el promedio debe ser null).
// Devolver un objeto con los resultados.



function inicio() {
    let numeros = [12, -2, -4, 5, 10, 2, -7, 8];

    const myObject = analizarNumeros(numeros);

    console.log(myObject.cantPositivos);

    let titulo = document.getElementById("titulo");
    let cantPositivos = document.getElementById("cant-positivos");
    let cantNegativos = document.getElementById("cant-negativos");
    let cantCeros = document.getElementById("cant-ceros");
    let sumaPositivos = document.getElementById("suma-positivos");
    let promedioNegativos = document.getElementById("promedio-negativos");

    titulo.innerHTML = "Numeros Analizados";
    cantPositivos.innerHTML = "Cantidad de Positivos: " + myObject.cantPositivos;
    cantNegativos.innerHTML = "Cantidad de Negativos: " + myObject.cantNegativos;
    cantCeros.innerHTML = "Cantidad de Ceros: " + myObject.cantCeros;
    sumaPositivos.innerHTML = "Suma de Positivos: " + myObject.sumaPositivos;
    promedioNegativos.innerHTML = "Promedio de Negativos: " + myObject.promedioNegativos;
}

function analizarNumeros(numeros) {
    let positivos = 0,
        negativos = 0,
        ceros = 0,
        sumaPositivos = 0,
        sumaNegativos = 0;

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > 0) {
            positivos++;
            sumaPositivos += numeros[i];
        } else if (numeros[i] < 0) {
            negativos++;
            sumaNegativos += numeros[i];
        } else {
            ceros++;
        }
    }

    let promedioNegativos = negativos > 0 ? sumaNegativos / negativos : 0;

    return {
        cantPositivos: positivos,
        cantNegativos: negativos,
        cantCeros: ceros,
        sumaPositivos: sumaPositivos,
        promedioNegativos: parseFloat(promedioNegativos.toFixed(2))
    };
}

window.addEventListener('load', inicio, false);