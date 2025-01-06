// Desarrollar un programa en JavaScript que permita calcular el descuento aplicado a una compra 
// según el monto total y la categoría del cliente (Regular o VIP). 
// Finalmente, muestra el monto final a pagar y un texto que indique el descuento aplicado.

// Reglas de descuento:
// - Si el cliente es "Regular" y gasta menos de $50, no tiene descuento.
// - Si el cliente es "Regular" y gasta entre $50 (inclusive) y $100, tiene un 5% de descuento.
// - Si el cliente es "Regular" y gasta más de $100, tiene un 10% de descuento.
// - Si el cliente es "VIP" y gasta menos de $100, tiene un 10% de descuento.
// - Si el cliente es "VIP" y gasta $100 o más, tiene un 20% de descuento.

function inicio() {

    let monto_total = parseInt(prompt("Ingrese el monto total de la compra"));
    let texto = prompt("Ingrese la categoría del cliente (Regular o VIP)")
    let error = document.getElementById("error");

    let categoria = texto.toLowerCase(); // Convierte todo el string en minúsculas

    if (monto_total > 0) {
        calcularDescuento(monto_total, categoria)
    } else {
        error.classList.remove("invalid");
        error.innerHTML = "El monto total debe ser mayor a 0";
    }
}

function calcularDescuento(monto_total, categoria) {


    let titulo = document.getElementById("titulo");

    let montoTotal = document.getElementById("monto_total");

    let categoria_cliente = document.getElementById("categoria_cliente");

    let descuentoAplicado = document.getElementById("descuento_aplicado");

    let montoFinal = document.getElementById("monto_final");

    let error = document.getElementById("error");

    let descuento_aplicado = 0;
    let monto_final = 0;

    if (categoria === "regular") {
        if (monto_total < 50) {
            descuento_aplicado = 0;
        } else if (monto_total >= 50 && monto_total < 100) {
            descuento_aplicado = 0.05;
        } else if (monto_total > 100) {
            descuento_aplicado = 0.1;
        }
    } else if (categoria === "vip") {
        if (monto_total < 100) {
            descuento_aplicado = 0.1;
        } else {
            descuento_aplicado = 0.2;
        }
    } else {
        error.classList.remove("invalid");
        error.innerHTML = "La categoría debe ser Regular o VIP";
        exit(1);
    }

    monto_final = monto_total - (monto_total * descuento_aplicado);

    titulo.innerHTML = "Descuento Aplicado";
    montoTotal.innerHTML = "Monto Total: $" + monto_total;
    categoria_cliente.innerHTML = "Categoría del Cliente: " + categoria;
    descuentoAplicado.innerHTML = "Descuento Aplicado: " + (descuento_aplicado * 100) + "%";
    montoFinal.innerHTML = "Monto Final: $" + monto_final;
}

window.addEventListener("load", inicio, false);