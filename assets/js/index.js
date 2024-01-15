//Obtener datos para poder manipular
let precioInicial = document.querySelector("#precio-inicial").innerHTML;
let cantidad = document.querySelector("#cantidad");
let total = document.querySelector("#valor-total");

//Obtener informacion de los botones Mas y Menos
let btnMas = document.querySelector("#botonMas");
let btnMenos = document.querySelector("#botonMenos");

//Funcion que nos ayuda a sumar la cantidad
btnMas.addEventListener("click", function() {
    let cantidadLimpia = Number(cantidad.innerHTML);
    let acumulador = cantidadLimpia + 1;
    cantidad.innerHTML = acumulador;
    total.innerHTML = acumulador * precioInicial;
});


//Funcion que nos ayuda a restar la cantidad
btnMenos.addEventListener("click", function() {
    let cantidadLimpia = Number(cantidad.innerHTML);
    let acumulador = cantidadLimpia - 1;
    cantidad.innerHTML = acumulador;
    total.innerHTML = acumulador * precioInicial;
});