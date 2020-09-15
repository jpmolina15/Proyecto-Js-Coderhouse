const camisetaPrecio = 5600;
const camperaPrecio = 4500;
const zapasPrecio = 5000;

let precio = null

const precioTotal = (producto1, producto2, producto3) => {
    precio = producto1 + producto3 + producto2
}

const productos = [{
    nombre: "Camiseta de Boca",
    precio: camisetaPrecio
}, {
    nombre: "Campera de Boca",
    precio: camperaPrecio
},
{
    nombre: "Zapatillas",
    precio: zapasPrecio
}]