let camisetaPrecio = 5600;
let camperaPrecio = 4500;
let zapasPrecio = 5000;



const productos = [{
    id: 1,
    nombre: "Camiseta de Boca",
    precio: camisetaPrecio,
    marca: "Adidas",
    rubro: "Fútbol",
    tipo: "Camiseta",
    cantidad: 0,
    imagen: "./assets/camisetaBoca.jpg"
}, {
    id: 2,
    nombre: "Zapatillas de Correr",
    precio: zapasPrecio,
    marca: "Adidas",
    rubro: "Running",
    tipo: "Zapatillas",
    cantidad: 0,
    imagen: "./assets/zapatillas.png"
},
{
    id: 3,
    nombre: "Campera de Boca",
    precio: camperaPrecio,
    marca: "Adidas",
    rubro: "Casual",
    tipo: "Campera",
    cantidad: 0,
    imagen: "./assets/camperaBoca.jpg"
}, {
    id: 4,
    nombre: "Camiseta de Argentina",
    precio: camisetaPrecio,
    marca: "Adidas",
    rubro: "Futbol",
    tipo: "Camiseta",
    cantidad: 0,
    imagen: "./assets/argentinaTitular.jpg"
}, {
    id: 5,
    nombre: "Camiseta de Argentina Suplente",
    precio: camisetaPrecio,
    marca: "Adidas",
    rubro: "Futbol",
    tipo: "Camiseta",
    cantidad: 0,
    imagen: "./assets/argentinaSuplente.jpg"
}, {
    id: 6,
    nombre: "Camiseta de Argentina Negra",
    precio: camisetaPrecio,
    marca: "Adidas",
    rubro: "Futbol",
    tipo: "Camiseta",
    cantidad: 0,
    imagen: "./assets/argentinaNegra.jpeg"
},
];

productos.forEach(prod => {
    let img = "<img src=" + prod.imagen + " alt='logo' class='img-thumbnail' />";
    let titulo = "<p class='title'>" + prod.nombre + "</p>";
    let precio = "<p class='precio'>" + prod.precio + "</p>";
    let id = prod.id
    let comprar = "<div class='form-group container cantidad'>" + "<label for='cantidadProductos'>Cantidad</label>" + "<input type='number' min='0' name='cantidadProductos' value='0' id='producto" + id + "'>" + "<button type='button' class='btn btn-success agregar' id='btn" + id + "'>Agregar al carrito</button>" + "</div>";
    let articulo = "<article class='product'>" + img + titulo + precio + comprar + "</article";

    $("#boca").append(articulo)
})
const agregarCarrito = () => {
    const table = document.querySelector("#tablaCarrito");
    let precioFinal = []

    for (let i = 0; i < productos.length; i++) {
        // Info del producto
        const index = productos[i].id;
        const nombre = productos[i].nombre;
        const cantidad = document.querySelector('#producto' + index).value;
        const precio = productos[i].precio * cantidad
        for (let i = 0; i < productos.length; i++) {
            // Limpia carrito
            if (cantidad >= 0) {
                if (document.querySelector('.hilera' + index)) {
                    const fila = document.querySelector('.hilera' + index)
                    fila.parentNode.removeChild(fila)

                }
            }
            if (cantidad >= 1) {
                // Sesion Storage de productos elegidos
                localStorage.setItem('producto' + i, JSON.stringify(productos[i]))

                var hilera = document.createElement("tr");
                hilera.classList.add('hilera' + index)

                for (var j = 0; j < 3; j++) {
                    // Hileras
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
            //  Agrega a los precios
            precioFinal.push(precio)
        }
    }
    // Precio Final Calculo
    let total = precioFinal.reduce((a, b) => a + b, 0);
    $('#final').text('$' + total)
}

// const agregarCarrito = () => {
//     const table = document.querySelector("#tablaCarrito");
//     let precioFinal = []

//     for (let i = 0; i < productos.length; i++) {
//         // Info del producto
//         const index = productos[i].id;
//         const nombre = productos[i].nombre;
//         const cantidad = document.querySelector('#producto' + index).value;
//         const precio = productos[i].precio * cantidad


//         //  Agrega a los precios
//         precioFinal.push(precio)

//         // Limpia carrito
//         // if (cantidad >= 0) {
//         //     if (document.querySelector('.hilera' + index)) {
//         //         const fila = document.querySelector('.hilera' + index)
//         //         fila.parentNode.removeChild(fila)

//         //     }
//         // }

//         //Agrega carrito
//         if (cantidad >= 1) {

//             // Sesion Storage de productos elegidos
//             localStorage.setItem('producto' + i, JSON.stringify(productos[i]))

//             var hilera = document.createElement("tr");
//             hilera.classList.add('hilera' + index)

//             for (var j = 0; j < 3; j++) {
//                 // Hileras
//                 var celda = document.createElement("td");
//                 var textoCelda = document.createTextNode("cel " + i + ", col" + j);

//                 if (j === 0) {
//                     textoCelda = document.createTextNode(nombre);
//                 }
//                 if (j === 1) {
//                     textoCelda = document.createTextNode(cantidad);
//                 }
//                 if (j === 2) {
//                     textoCelda = document.createTextNode('$' + precio);
//                 }
//                 celda.appendChild(textoCelda);
//                 hilera.appendChild(celda);
//             }
//             table.appendChild(hilera);
//         }
//     }

//     // Precio Final Calculo
//     let total = precioFinal.reduce((a, b) => a + b, 0);
//     $('#final').text('$' + total)
// }

agregarCarrito()

// Boton Agregar al carrito
for (let i = 0; i < productos.length; i++) {
    const index = productos[i].id;
    $("#btn" + index).click(() => {
        agregarCarrito()
    })
}

$.ajax({
    url: 'https://randomuser.me/api/?results=1',
    dataType: 'json',

    success: function (data) {
        let direccion = data.results[0].location.street
        let ciudad = data.results[0].location.city
        let pais = data.results[0].location.country
        console.log(data);
        $('#carritoDe').append(`<h2>Carrito de ${data.results[0].name.first}</h2>`)
        $('#direccion').append(`<h5>Dirección</h5> <p>${direccion.name} ${direccion.number}, ${ciudad}, ${pais}`)
    }
});
