let nombre = prompt("Ingrese su nombre aquí:")
let edad = parseInt(prompt("Ingrese su edad"))


if(edad >= 18){
    alert("Bienvenido " + nombre + ", comencemos con la compra!")
}
else{
    alert(nombre + " no tenes la edad suficiente para ver el contenido")

}

let nombreProductoA = "Dua Lipa"
let precioProductoA = 14000
let stockProductoA = 4

let nombreProductoB = "Christina Aguilera"
let precioProductoB = 19000
let stockProductoB = 4

let cantidadProductos = prompt( "Ingrese la cantidad de artistas que desea ver")
let precioTotal = 0;


function calculoPrecio(cantidad, precio){
    precioTotal += cantidad * precio
}

function calculoStock(cantidad, stock, precio){
    if(stock >= cantidad){
        calculoPrecio(cantidad, precio)
        alert("El precio es de: $ " + (cantidad * precio))
        }
        else{
            alert("No disponemos de la cantidad deseada de entradas, el stock actual es de: " + stock + " unidades")
        }
}

for(let i = 0; i < cantidadProductos; i++){

let compra1 = prompt("Ingrese el nombre de la artista que desea ver: \n- Dua Lipa \n- Christina Aguilera")
let cantidad1 = parseInt(prompt("Ingrese la cantidad de entradas que desea"))

if(compra1 == "Dua Lipa"){
    calculoStock(cantidad1, stockProductoA, precioProductoA)
}

else if(compra1 == "Christina Aguilera"){
    calculoStock(cantidad1, stockProductoB, precioProductoB)
}
else{
    alert("Artista no disponible")
}
}
if(cantidadProductos > 1){
    alert("Precio final de tu compra: " + precioTotal)
}

