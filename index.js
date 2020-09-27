let camisetaPrecio = 5600;
let camperaPrecio = 4500;
let zapasPrecio = 5000;

let precio = null

const precioTotal = (producto1, producto2, producto3) => {
    precio = producto1 + producto3 + producto2
}


let productosSeccion = document.querySelector('#productos')
let filtrosSeccion = document.querySelector('#filtros')
let carritoSeccion = document.querySelector('#carrito')

let tituloProd = carritoSeccion.querySelector('h2')
tituloProd.textContent = 'Carrito de '





const productos = [{
    id: 1,
    nombre: "Camiseta de Boca",
    precio: camisetaPrecio,
    marca: "Adidas",
    rubro: "Fútbol",
    tipo: "Camiseta",
    cantidad: 0
}, {
    id: 2,
    nombre: "Campera de Boca",
    precio: camperaPrecio,
    marca: "Adidas",
    rubro: "Casual",
    tipo: "Campera",
    cantidad: 0
},
{   
    id: 3,
    nombre: "Zapatillas de Correr",
    precio: zapasPrecio,
    marca: "Adidas",
    rubro: "Running",
    tipo: "Zapatillas",
    cantidad: 0
}]


const agregar = () => {
    for (let i = 0; i < productos.length; i++){
        let id = productos[i].id
            productos[i].cantidad = document.querySelector('#casaca' + id).value
             localStorage.setItem('producto' + i, JSON.stringify(productos[i]))
    }
}
agregar()

