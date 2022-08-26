document.addEventListener('DOMContentLoaded', () => { 

    let carrito = [];
    const items = document.getElementById('items');
    const carritoLiteral = document.getElementById('carrito');
    const precioFinal = document.getElementById('total');
    const botonVaciar = document.getElementById('boton-vaciar');
    const botonPedir = document.getElementById("boton-comprar");

    async function listaDeProductos() {
        const URLJSON="/data.json"
        const resp=await fetch("data.json")
        const data= await resp.json()
        listaDeProductos = data;
        renderizarProductos();
    }

    listaDeProductos()


    function renderizarProductos() { 
 
        listaDeProductos.forEach((info) => {

            const miNodo = document.createElement('div');
            miNodo.classList.add("card", "text-center", 'col-sm-4', "bg-light");

            const miNodoCardBody = document.createElement('div');
            miNodoCardBody.classList.add('card-body');

            const miNodoTitle = document.createElement('h4');
            miNodoTitle.classList.add('card-title');
            miNodoTitle.innerText = info.nombre;

            const miNodoPrecio = document.createElement('p');
            miNodoPrecio.classList.add('card-text');
            miNodoPrecio.innerText = `$${info.precio}`;

            const miNodoStock = document.createElement('p');
            miNodoStock.classList.add('card-text');
            miNodoStock.innerText = `Disponibles: ${info.stock}`;

            const miNodoImg = document.createElement("img");
            miNodoImg.classList.add("card-img-top");
            miNodoImg.classList.add("imagen");
            miNodoImg.setAttribute("src", info.img);


            const miNodoBoton = document.createElement('button');
            miNodoBoton.classList.add('btn', 'btn-outline-info');
            miNodoBoton.innerText = 'Comprar';
            miNodoBoton.setAttribute('marcador', info.id); 
            miNodoBoton.addEventListener('click', agregarProductoAlCarrito);
            miNodoBoton.addEventListener("click", alerta); 


            miNodoCardBody.append(miNodoTitle);
            miNodoCardBody.append(miNodoPrecio);
            miNodoCardBody.append(miNodoStock);
            miNodoCardBody.append(miNodoImg);
            miNodoCardBody.append(miNodoBoton);
            miNodo.append(miNodoCardBody);
            items.append(miNodo);
        });
    }


    
    function agregarProductoAlCarrito(e) {

        carrito.push(e.target.getAttribute('marcador')) 

        renderizarCarrito();

        guardarCarritoEnLocalStorage();
        alerta(); 
    }

    const alerta = () => {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Agregado al Carrito!',
            showConfirmButton: true,
            timer: 1200,
            confirmButtonText: "Seguir Comprando"
        })
    }


    function renderizarCarrito() {
        carritoLiteral.innerText = '';

        const carritoSinDuplicados = [...new Set(carrito)];

        carritoSinDuplicados.forEach((item) => {

            const miItem = listaDeProductos.filter((itemBaseDatos) => {

                return itemBaseDatos.id === parseInt(item);
            });

            const numeroUnidadesItem = carrito.reduce((total, itemId) => {

                return itemId === item ? total += 1 : total; //Operador avanzado TERNARIO
            }, 0);

            const miNodo = document.createElement('li');
            miNodo.classList.add('list-group-item', "list-group-item-info", 'text-right', 'mx-5', "bg-light");
            miNodo.innerText = `${miItem[0].nombre} x ${numeroUnidadesItem} = $${miItem[0].precio}`;

            const miBoton = document.createElement('button');
            miBoton.classList.add('btn', 'btn-outline-warning', 'mx-5');
            miBoton.innerText = 'Quitar';
            miBoton.style.marginLeft = '1rem';
            miBoton.dataset.item = item;
            miBoton.addEventListener('click', borrarItemCarrito);

            miNodo.append(miBoton);
            carritoLiteral.append(miNodo);
        });

        precioFinal.innerText = calcularTotal();
    }


    
    function borrarItemCarrito(e) { 
        Swal.fire({
            title: 'Quieres eliminar este producto?',
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: 'Conservar',
            denyButtonText: `Eliminar`,
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire('Buena elección!', '', 'success')
            } else if (result.isDenied) {
                Swal.fire('Puedes agregarlo nuevamente si lo deseas!', '', 'info');
                const id = e.target.dataset.item;

                carrito = carrito.filter((carritoId) => {
                    return carritoId !== id;
                });

                renderizarCarrito();

                guardarCarritoEnLocalStorage();
            }
        })
    }


    
    function calcularTotal() {

        return carrito.reduce((total, item) => {

            const miItem = listaDeProductos.filter((itemBaseDatos) => {
                return itemBaseDatos.id === parseInt(item);
            });

            return total + miItem[0].precio;
        }, 0);
    }


    
    function vaciarCarrito() {
        Swal.fire({
            title: 'Quieres vaciar tu carrito?',
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: 'Conservar',
            denyButtonText: `Eliminar`,
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire('A comprar se ha dicho!', '', 'success')
            } else if (result.isDenied) {

                carrito = [];

                renderizarCarrito();

                localStorage.removeItem('carrito');
                localStorage.clear();

            }
        })
    }


    function guardarCarritoEnLocalStorage() {
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }

    function cargarCarritoDeLocalStorage() {      
    
        carrito = JSON.parse(localStorage.getItem('carrito')) || []; 
    }

    const realizarPedido = ({ 
        value: email
    }) => {
        Swal.fire({
            title: 'Te enviaremos el Link de pago',
            input: 'email',
            inputLabel: 'Ingresa tu email',
            inputPlaceholder: 'email'
        })
        if (email) {
            Swal.fire(`Finaliza tu compra ingresando a: ${email}`) 
        }
    }


    botonVaciar.addEventListener('click', vaciarCarrito);
    botonPedir.addEventListener("click", realizarPedido);

    cargarCarritoDeLocalStorage();
    renderizarProductos();
    renderizarCarrito();

});









