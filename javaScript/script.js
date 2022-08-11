document.addEventListener('DOMContentLoaded', () => {

    let carrito = [];
    const DOMitems = document.getElementById('items');
    const DOMcarrito = document.querySelector('#carrito');
    const DOMtotal = document.querySelector('#total');
    const DOMbotonVaciar = document.querySelector('#boton-vaciar');

    const listaDeProductos = [
        {
            id: 1,
            nombre: "Dua Lipa",
            precio: 10000,
            stock: 10,
            img: './img/33BJTAXAFFP5HEBATEFA3MITRM.jpg'
        },
        {
            id: 2,
            nombre: "Christina Aguilera",
            precio: 12000,
            stock: 10,
            img: './img/Christina-Aguilera-22La-Fuerza22.jpg'
        },
        {
            id: 3,
            nombre: "Duki",
            precio: 8210,
            stock: 10,
            img: './img/Duki.jpg'
        },
        {
            id: 4,
            nombre: "Wos",
            precio: 6800,
            stock: 10,
            img: './img/Wos.jpg'
        }
    ]

    
    function renderizarProductos() {
        listaDeProductos.forEach((info) => {

            const miNodo = document.createElement('div');
            miNodo.classList.add('card', 'col-sm-4');

            const miNodoCardBody = document.createElement('div');
            miNodoCardBody.classList.add('card-body');

            const miNodoTitle = document.createElement('h5');
            miNodoTitle.classList.add('card-title');
            miNodoTitle.innerText = info.nombre;

            const miNodoImg = document.createElement('img');
            miNodoImg.setAttribute('src', info.img)

            const miNodoPrecio = document.createElement('p');
            miNodoPrecio.classList.add('card-text');
            miNodoPrecio.innerText = `$${info.precio}`;

            const miNodoStock = document.createElement('p');
            miNodoStock.classList.add('card-text');
            miNodoStock.innerText = `Stock: ${info.stock}`;
            
            const miNodoBoton = document.createElement('button');
            miNodoBoton.classList.add('btn', 'btn-primary');
            miNodoBoton.innerText = 'COMPRAR';
            miNodoBoton.setAttribute('marcador', info.id);
            miNodoBoton.addEventListener('click', anyadirProductoAlCarrito);

            miNodoCardBody.append(miNodoTitle);
            miNodoCardBody.append(miNodoImg);
            miNodoCardBody.append(miNodoPrecio);
            miNodoCardBody.append(miNodoStock);

            miNodoCardBody.append(miNodoBoton);
            miNodo.append(miNodoCardBody);
            DOMitems.append(miNodo);
        });
    }

    function anyadirProductoAlCarrito(e) {

        carrito.push(e.target.getAttribute('marcador'))
        renderizarCarrito();
        guardarCarritoEnLocalStorage();
    }

    function renderizarCarrito() {

        DOMcarrito.innerText = '';

        const carritoSinDuplicados = [...new Set(carrito)];

        carritoSinDuplicados.forEach((item) => {

            const miItem = listaDeProductos.filter((itemBaseDatos) => {

                return itemBaseDatos.id === parseInt(item);
            });

            const numeroUnidadesItem = carrito.reduce((total, itemId) => {

                return itemId === item ? total += 1 : total;
            }, 0);

            const miNodo = document.createElement('li');
            miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
            miNodo.innerText = `${numeroUnidadesItem} x ${miItem[0].nombre} - $${miItem[0].precio}`;

            const miBoton = document.createElement('button');
            miBoton.classList.add('btn', 'btn-danger', 'mx-5');
            miBoton.innerText = 'Borrar';
            miBoton.style.marginLeft = '1rem';
            miBoton.dataset.item = item;
            miBoton.addEventListener('click', borrarItemCarrito);

            miNodo.appendChild(miBoton);
            DOMcarrito.appendChild(miNodo);
        });

        DOMtotal.innerText = calcularTotal();
    }

    function borrarItemCarrito(e) {

        const id = e.target.dataset.item;

        carrito = carrito.filter((carritoId) => {
            return carritoId !== id;
        });

        renderizarCarrito();

        guardarCarritoEnLocalStorage();

    }

    function calcularTotal() {

        return carrito.reduce((total, item) => {

            const miItem = listaDeProductos.filter((itemBaseDatos) => {
                return itemBaseDatos.id === parseInt(item);
            });

            return total + miItem[0].precio;
        }, 0).toFixed(2);
    }

 
    
    function vaciarCarrito() {

        carrito = [];

        renderizarCarrito();

        localStorage.removeItem('carrito');

    }

    function guardarCarritoEnLocalStorage () {
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }

    function cargarCarritoDeLocalStorage () {

        if (localStorage.getItem('carrito') !== null) {
            carrito = JSON.parse(localStorage.getItem('carrito'));
        }
    }



    DOMbotonVaciar.addEventListener('click', vaciarCarrito);


    cargarCarritoDeLocalStorage();
    renderizarProductos();
    renderizarCarrito();
});