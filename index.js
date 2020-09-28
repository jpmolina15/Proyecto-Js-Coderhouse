let camisetaPrecio = 5600;
let camperaPrecio = 4500;
let zapasPrecio = 5000;

let precio = null


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

let precios = []

const agregarCarrito = () => {
    var table = document.querySelector("#tablaCarrito");
    
    for (let i = 0; i < productos.length; i++) {
        // Info del producto
        const index = productos[i].id;
        const nombre = productos[i].nombre;
        const cantidad = document.querySelector('#casaca' + index).value;
        const precio = productos[i].precio * cantidad

        //  Agrega a los precios
        precios.push(precio)

        // Local Storage de productos elegidos
        localStorage.setItem('producto' + i, JSON.stringify(productos[i]))

        // Filas de productos en carritos
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

    // Precio Final Calculo
    let total = precios.reduce((a, b) => a + b, 0);
    const cuenta = document.querySelector('#final')
    const monto = document.createTextNode('$' + total)

    cuenta.appendChild(monto)



}

agregarCarrito()
