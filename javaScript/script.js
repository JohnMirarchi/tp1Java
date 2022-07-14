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

for(let i = 0; i < cantidadProductos; i++){

let compra1 = prompt("Ingrese el nombre de la artista que desea ver: \n- Dua Lipa \n- Christina Aguilera")
let cantidad1 = prompt("Ingrese la cantidad de entradas que desea")

if(compra1 == "Dua Lipa"){
    if(stockProductoA >= cantidad1){
    precioTotal += cantidad1 * precioProductoA 
    alert("El precio es de: $ " + (cantidad1 * precioProductoA))
    }
    else{
        alert("No disponemos de la cantidad deseada de entradas, el stock actual es de: " + stockProductoA)
    }
}
else if(compra1 == "Christina Aguilera"){
    if(stockProductoB >= cantidad1){
        precioTotal += cantidad1 * precioProductoB
        alert("El precio es de: $ " + (cantidad1 * precioProductoB))
        }
        else{
            alert("No disponemos de la cantidad deseada de entradas, el stock actual es de: " + stockProductoA)
        }
}
else{
    alert("Artista no disponible")
}
}
if(cantidadProductos > 1){
alert("Precio final de tu compra: " + precioTotal)
}
