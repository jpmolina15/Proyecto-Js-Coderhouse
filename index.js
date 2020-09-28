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
    for (let i = 0; i < productos.length; i++) {
        let id = productos[i].id
        productos[i].cantidad = document.querySelector('#casaca' + id).value
        localStorage.setItem('producto' + i, JSON.stringify(productos[i]))
    }
}
agregar()

const carro = () => {
    // Refe Tabla
    var table = document.querySelector("#tablaCarrito");
    let precioFinal = []
    // Crea la tabla
    for (var i = 0; i < productos.length; i++) {
        
        
        // Producto
        const index = productos[i].id;
        const nombre = productos[i].nombre;
        const cantidad = productos[i].cantidad;
        const precio = productos[i].precio * cantidad
        
        precioFinal.push(precio)
        
        // Crea las hileras de los productos
        if (cantidad >= 1) {
            var hilera = document.createElement("tr");

            for (var j = 0; j < 3; j++) {
                //Columnas
                var celda = document.createElement("td");
                var textoCelda = document.createTextNode("cel " + i + ", col" + j);

                if (j === 0) {
                    textoCelda = document.createTextNode(nombre);
                }
                if (j === 1) {
                    textoCelda = document.createTextNode(cantidad);
                }
                if (j === 2) {
                    textoCelda = document.createTextNode('$' + precio);
                }
                celda.appendChild(textoCelda);
                hilera.appendChild(celda);
            }
            table.appendChild(hilera);
        }
    }

    // Precio Final
    let total = precioFinal.reduce((a, b) => a + b, 0);
    const cuenta = document.querySelector('#final')
    const monto = document.createTextNode('$' + total)

    cuenta.appendChild(monto)
     
    

}
carro()