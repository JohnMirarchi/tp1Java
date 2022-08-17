function Producto(nombre, precio, stock, img){
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
    this.img = img;
}

const producto1 = new Producto ("Dua Lipa", 10000, 10, './img/33BJTAXAFFP5HEBATEFA3MITRM.jpg') 
const producto2 = new Producto ("Christina Aguilera", 12000, 10, './img/Christina-Aguilera-22La-Fuerza22.jpg')
const producto3 = new Producto ("Duki", 8210, 10, './img/Duki.jpg')
const producto4 = new Producto ("Wos", 6800, 10,'./img/Wos.jpg')

let listaProductos = [producto1, producto2, producto3, producto4]

let cantidadArtistas = prompt("Ingresa cantidad de Artistas que deseas ver")
let precioTotal = 0;

function calculoPrecio(cantidad, precio){
    precioTotal += cantidad * precio
}

function calculoStock(cantidad, producto){
    if (producto.stock >= cantidad){
        calculoPrecio(cantidad, producto.precio)
        alert("El precio total es de: $" + (cantidad * precio))
    }
    else{
        alert("No disponemos de esa cantidad en stock")
    }
}


for(let i = 0; i < cantidadArtistas; i++){

let compra1 = prompt("Elige Artista: \n- Dua Lipa\n- Christina Aguilera \n- Duki \n- Wos").toLocaleLowerCase; /* Boton Artista */
let cantidad1 = prompt("Elige cantidad de entradas"); /* Boton Cantidad */

if(compra1 == producto1.nombre){
    calculoStock(cantidad1, producto1)
}
else if(compra1 == "Christina Aguilera"){
    calculoStock(cantidad1, producto2)
}

else if(compra1 == "Duki"){
    calculoStock(cantidad1, producto3)
}

else if(compra1 == "Wos"){
    calculoStock(cantidad1, producto4)
}
if(cantidadArtistas > 1){
alert("Precio Total de tu compra: " + precioTotal)
}
}













/* Futura planilla de compra 
let nombreIngresado = prompt('Ingresar Nombre');
let apellidoIngresado = prompt('Ingresar Apallido');

if((nombreIngresado !="") && (apellidoIngresado !="")){
    alert("Nombre: "+nombreIngresado +"\nApellido: "+apellidoIngresado); 
}else{
    alert("Error: Ingresar nombre y apellido");
}
*/