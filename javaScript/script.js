let nombre = prompt("Ingrese su nombre aquí:")
let edad = parseInt(prompt("Ingrese su edad"))


if(edad >= 18){
    alert("Bienvenido " + nombre + ", comencemos con la compra!")
}
else{
    alert(nombre + " no tenes la edad suficiente para ver el contenido")
}


function Producto(nombre, precio, stock){
    this.nombre = nombre
    this.precio = precio
    this.stock = stock
}

const productoA = new Producto("Dua Lipa", 14000, 4)
const productoB = new Producto("Christina Aguilera", 19000, 4)
const productoC = new Producto("Duki", 9000, 4)
const productoD = new Producto("WOS", 10000, 4)

let listaProductos = [productoA, productoB, productoC, productoD]

let nombresProductos = []

function listarProductos(){
    for(const producto of listaProductos){
        nombresProductos.push(producto.nombre)
    }
}
listarProductos()

let cantidadProductos = prompt( "Ingrese la cantidad de artistas que desea ver: \n \n" + nombresProductos.join("\n")).toLowerCase()
let precioTotal = 0;

function calculoPrecio(cantidad, precio){
    precioTotal += cantidad * precio
}

function calculoStock(cantidad, producto){
    if(producto.stock >= cantidad){
        calculoPrecio(cantidad, producto.precio)
        alert("El precio es de: $ " + (cantidad * producto.precio))
        }
        else{
            alert("No disponemos de la cantidad deseada de entradas, el stock actual es de: " + stock + " unidades")
        }
}


for(let i = 0; i < cantidadProductos; i++){

let compra1 = prompt("Ingrese el nombre del artista que desea ver: \n \n" + nombresProductos.join("\n")).toLowerCase()
let cantidad1 = parseInt(prompt("Ingrese la cantidad de entradas que desea:"))

if(compra1 == productoA.nombre .toLowerCase()){
    calculoStock(cantidad1, productoA)
}

else if(compra1 == productoB.nombre .toLowerCase()){
    calculoStock(cantidad1, productoB)
}

else if(compra1 == productoC.nombre .toLowerCase()){
    calculoStock(cantidad1, productoC)
}

else if(compra1 == productoD.nombre .toLowerCase()){
    calculoStock(cantidad1, productoD)
}

else(cantidadProductos > 1)
    alert("Precio final de tu compra: " + precioTotal)
}

alert("Gracias por tu compra, que disfrutes el show!")