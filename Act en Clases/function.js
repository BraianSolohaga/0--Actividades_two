function inicio() {
    let array = [3, 5, 2, 4, 9];
    let alCuadro = [];
    let impares = [];

    for (let i = 0; i < array.length; i++) {
        alCuadro.push(Math.pow(array[i], 2));

        if (array[i] % 2 !== 0)
            impares.push(array[i]);
    }

    // Escribe una función llamada duplicarElementos que reciba un array 
    // de números como parámetro. Utiliza un bucle for para recorrer el array
    //  y generar un nuevo array donde cada elemento sea el doble del valor correspondiente 
    // en el array original (esta cuenta debe hacerse en una segunda función). Devuelve el nuevo array..

    duplicarElementos(array);


    /* Crea una función llamada encontrarPalabrasLargas que reciba un array de palabras (strings) 
    y un número mínimo de caracteres como parámetros. Usando un bucle for, encuentra todas las palabras
    del array que tengan más caracteres que el número mínimo y almacénalas en un nuevo array. Devuelve
    el nuevo array con las palabras que cumplen la condición.

     */
    let texto = ["Hola", "Adios", "Buenos Dias", "Buenas Noches", "Buscar", "Llamar"];

    let palabrasLargas = encontrarPalabrasLargas(texto, 6);
    console.log(palabrasLargas);
}

function duplicarElementos(array) {
    let resultado = arrayDuplicados(array);
    console.log(resultado);
}

function arrayDuplicados(array) {
    let resultado = [];
    for (let i = 0; i < array.length; i++) {
        resultado.push(Math.pow(array[i], 2));
    }
    return resultado;
}

function encontrarPalabrasLargas(texto, minimo) {
    let palabrasLargas = [];
    for (let i = 0; i < texto.length; i++) {
        if (texto[i].length > minimo) {
            palabrasLargas.push(texto[i]);
        }
    }
    return palabrasLargas;
}


window.addEventListener("load", inicio, false);