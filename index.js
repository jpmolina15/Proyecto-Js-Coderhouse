let camisetaPrecio = 5600;
let camperaPrecio = 4500;
let zapasPrecio = 5000;

let precio = null

const precioTotal = (producto1, producto2, producto3) => {
    precio = producto1 + producto3 + producto2
}
var usuario = prompt('Cual es tu nombre de usuario?')

let productosSeccion = document.querySelector('#productos')
let filtrosSeccion = document.querySelector('#filtros')
let carritoSeccion = document.querySelector('#carrito')

let tituloProd = carritoSeccion.querySelector('h2')
tituloProd.textContent = 'Carrito de ' + usuario



// 
// const productos = [{
//     nombre: "Camiseta de Boca",
//     precio: camisetaPrecio,
//     marca: "Adidas",
//     rubro: "Fútbol",
//     tipo: "Camiseta"
// }, {
//     nombre: "Campera de Boca",
//     precio: camperaPrecio,
//     marca: "Adidas",
//     rubro: "Casual",
//     tipo: "Campera"
// },
// {
//     nombre: "Zapatillas de Correr",
//     precio: zapasPrecio,
//     marca: "Adidas",
//     rubro: "Running",
//     tipo: "Zapatillas"
// }]

// let carrito = ["Camiseta de Boca", "Campera de Boca"]
// carrito.push("zapatillas")
// let carritoAnterior = ["botines", "pelota"]

// let nuevoCarrito = carrito.concat(carritoAnterior)
