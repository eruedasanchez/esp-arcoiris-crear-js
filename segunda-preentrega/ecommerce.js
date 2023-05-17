/* Pequeño simulador interactivo & ecommerce emergente de Espacio Arcoiris Crear */

class Producto{
    constructor(nombre, precio, stock, id, tipo){
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this .id = id;
        this.tipo = tipo;
    }
}

/************************** FUNCIONES DEL SIMULADOR & ECOMMERCE **************************/ 

/****************** FUNCIONALIDAD DEL ADMINISTRADOR ******************/

/** Saludo inicial al administrador **/

const saludoInicial = (admin) => {
    alert(`${admin}, vamos a comenzar cargando los productos en la tienda. Presione enter para continuar`);
}

/** Carga de productos **/

const cargarProductos = (cantProductos) => {
    const prods = [];     // Arreglo donde se va a almacenar los productos que se agregue a la tienda
    for(let i=0; i < cantProductos; i++){
        let nombreNuevoProducto = prompt('Ingrese el nombre del producto numero ' + (i+1));
        let precioNuevoProducto = parseInt(prompt('Ingrese el precio (solo numeros naturales sin signo $) del producto numero ' + (i+1)));
        let stockNuevoProducto = parseInt(prompt('Ingrese el stock (solo numeros naturales) del producto numero ' + (i+1)));
        let idNuevoProducto = prompt('Ingrese el id del producto numero ' + (i+1));
        let tipoNuevoProducto = prompt('Ingrese la categoria del producto numero ' + (i+1));
        const nuevoProducto = new Producto(nombreNuevoProducto, precioNuevoProducto, stockNuevoProducto, idNuevoProducto, tipoNuevoProducto);
        productos.push(nuevoProducto);
    }
    return prods;
}

/** Carga exitosa de productos **/

const cargaExitosa = (admin, productos, cantProductos) => {
    alert(`Felicitaciones ${admin}! Todos sus productos han sido cargados con exito. Presione enter para ver el listado de productos`);
    alert(JSON.stringify(productos, null, cantProductos+1));
}

/****************** FUNCIONALIDAD POR PARTE DEL CLIENTE ******************/

/** Verificar que el nombre ingresado por el cliente sea valido **/

const saludar = (clientName) => {
    if(clientName === ""){
        alert(`Nombre invalido! Por favor, presione enter, recargue la pagina e intente nuevamente. Muchas gracias.`);
    } else {
        alert(`Bienvenido ${clientName}! Presione enter para comenzar su compra.`);
    }
}

/** Filtrar productos por la categoria ingresada por el cliente **/

const filtrarPor = (cat, prods) => {
    const prodsEncontrados = prods;
    if(cat === "nombre"){
        prodsEncontrados = filtrarPorNombre(prods);
    } else if(cat === "precio"){
        prodsEncontrados = filtrarPorPrecio(prods);
    } else if(cat === "stock"){
        prodsEncontrados = filtrarPorStock(prods);
    } else if(cat === "id"){
        prodsEncontrados = filtrarPorId(prods);
    } else if(cat === "tipo"){
        prodsEncontrados = filtrarPorTipo(prods);
    }
    return prodsEncontrados;
}

/** Subfiltrado de productos por nombre **/

const filtrarPorNombre = (prods) => {
    alert(`En esta seccion, puede optar por los siguientes filtros: \n 1) creciente: los productos se filtran alfabeticamente de menor a mayor \n 2) decreciente: los productos se filtran alfabeticamente de mayor a menor \n 3) nombre: los productos se filtran por un nombre en particular`);
    const prodsFiltrados = prods;
    let filtro = prompt("Ahora, ingrese el nombre del filtro que quiere aplicar y presione enter para continuar.");
    switch(filtro){
        case "creciente":
            prods.sort((a,b) => {
                if(a.nombre > b.nombre){
                    return 1;
                } 
                if(a.name < b.name){
                    return -1;
                }
                // a es igual a b
                return 0;
            });
            prodsFiltrados = prods;
            break;
            
        case "decreciente":
            alert(`Ha elegido filtrar los productos ordenados alfabeticamente de mayor a menor`);
            prods.sort((a,b) => {
                if(a.nombre > b.nombre){
                    return -1;
                } 
                if(a.name < b.name){
                    return 1;
                }
                // a es igual a b
                return 0;
            });
            prodsFiltrados = prods;
            break;

        case "nombre":
            let nameFilter = prompt("Ha elegido filtrar los productos por un nombre en particular. \n Ahora, ingrese el nombre del producto.");
            prodsFiltrados = prods.filter(products => products.nombre === nameFilter);            
            break;
        
        default:
            alert(`El filtro elegido es incorrecto. Por defecto, no se aplica ningun filtro.`);
            break;
    }
    return prodsFiltrados;
} 

/** Subfiltrado de productos por precio **/

const filtrarPorPrecio = (prods) => {
    let valor = parseInt(prompt("Primero, ingrese el valor por el desea filtrar."));
    let limite = prompt("Ahora, ingrese el limite (maximo, minimo o igual precio).");
    const prodsFiltrados = prods;
    if(limite === "maximo"){
        prodsFiltrados = prods.filter(products => products.precio > valor);
    } else if(limite === "minimo"){
        prodsFiltrados = prods.filter(products => products.precio < valor);
    } else if(limite === "igual"){
        prodsFiltrados = prods.filter(products => products.precio === valor);
    } else {
        alert(`El filtro elegido es incorrecto. Por defecto, no se aplica ningun filtro.`);
    }
    return prodsFiltrados;
}

/** Subfiltrado de productos por stock **/

const filtrarPorStock = (prods) => {
    let cantStock = parseInt(prompt("Ingrese el numero de stock por el desea filtrar."));
    let limite = prompt("Ahora, ingrese el limite (maximo, minimo o igual stock).");
    const prodsFiltrados = prods;
    if(limite === "maximo"){
        prodsFiltrados = prods.filter(products => products.stock > cantStock);
    } else if(limite === "minimo"){
        prodsFiltrados = prods.filter(products => products.stock < cantStock);
    } else if(limite === "igual"){
        prodsFiltrados = prods.filter(products => products.stock === cantStock);
    } else {
        alert(`El filtro elegido es incorrecto. Por defecto, no se aplica ningun filtro.`);
    }
    return prodsFiltrados;
}

/** Subfiltrado de productos por id's **/
    
const filtrarPorId = (prods) => {
    let identificador = parseInt(prompt("Ingrese el numero de id por el desea filtrar."));
    let operacion = prompt("Ahora, ingrese la operacion (mayor, menor o igual) a aplicar.");
    const prodsFiltrados = prods;
    if(operacion === "mayor"){
        prodsFiltrados = prods.filter(products => products.id > identificador);
    } else if(operacion === "menor"){
        prodsFiltrados = prods.filter(products => products.id < identificador);
    } else if(operacion === "igual"){
        prodsFiltrados = prods.filter(products => products.id === identificador);
    } else {
        alert(`El filtro elegido es incorrecto. Por defecto, no se aplica ningun filtro.`);
    }
    return prodsFiltrados;
}

/** Subfiltrado de productos por tipo **/

const filtrarPorTipo = (prods) => {
    alert(`En esta seccion, puede optar por los siguientes filtros: \n 1) herramientas: se muestran todos los productos de tipo herramienta \n 2) insumos: se muestran todos los productos de tipo insumo \n 3) workshops: se muestran todos los productos de tipo workshop \n 4) seminarios: se muestran todos los productos de tipo seminario \n 5) cursos: se muestran todos los productos de tipo curso`);
    let tipo = prompt("Ahora, ingrese el tipo del producto.");
    const prodsFiltrados = prods;
    switch(tipo){
        case "herramientas":
            prodsFiltrados = prods.filter(products => products.tipo === "herramientas");            
            break;

        case "insumos":
            prodsFiltrados = prods.filter(products => products.tipo === "insumos");            
            break;
                
        case "workshops":
            prodsFiltrados = prods.filter(products => products.tipo === "workshops");            
            break;
                    
        case "seminarios":
            prodsFiltrados = prods.filter(products => products.tipo === "seminarios");            
            break;
                        
        case "cursos":
            prodsFiltrados = productos.filter(products => products.tipo === "cursos");            
            break;
            
        default:
            alert(`El filtro elegido es incorrecto. Por defecto, no se aplica ningun filtro.`);
            break;
    }
    return prodsFiltrados;
}

const buscar = (productos, producto) => {
    let infoProducto;
    for(const item of productos){
        if(item.nombre === producto){
            infoProducto = item;
        }
    }
    return infoProducto;
}

const hayStock = (productos, producto, cantidad) => {
    // Se asume que el producto se encuentra en el array de objetos
    let stockDisponible = false;
    const productoSeleccionado = buscar(productos, producto);
    if(productoSeleccionado.stock >= cantidad){
        stockDisponible = true;
    }
    return stockDisponible; 
}

const tramitarPagoSegun = (producto, cantidad, precio, pago) => {
    alert(`Comenzamos el proceso de pago de ${cantidad} unidades de ${producto}. Presione enter para continuar.`);
    let precioRegular = precio * cantidad;
    let descuento;
    let precioFinal;
    switch(pago){
        case "Transferencia bancaria":
            alert(`Ha elegido abonar su pedido con transferencia bancaria. Le comentamos que al abonar con este medio de pago tiene un 10% de descuento`);    
            descuento = precioRegular  * 0.10;
            precioFinal = precioRegular - descuento;
            alert(`El precio unitario de ${producto} es de $${precio}. Al elegir este medio de pago usted tiene un descuento de $${descuento} y el precio final es de $${precioFinal}. Presione enter para confirmar la compra.`);           
            break;

        case "MercadoPago":
            alert(`Ha elegido abonar su pedido con MercadoPago. Le comentamos que al abonar con este medio de pago tiene un 15% de descuento`);    
            descuento = precioRegular  * 0.15;
            precioFinal = precioRegular - descuento;
            alert(`El precio unitario de ${producto} es de $${precio}. Al elegir este medio de pago usted tiene un descuento de $${descuento} y el precio final es de $${precioFinal}. Presione enter para confirmar la compra.`);           
            break;

        case "Tarjeta de Credito":
            alert(`Ha elegido abonar su pedido con Tarjeta de credito. Le comentamos que al abonar con este medio de pago tiene un 10% de descuento`);    
            // Completar     
            break;
            
        case "Cryptomonedas":
            alert(`Ha elegido abonar su pedido con Cryptomonedas. Le comentamos que al abonar con este medio de pago tiene un 7% de descuento`);    
            descuento = precioRegular  * 0.07;
            precioFinal = precioRegular - descuento;
            alert(`El precio unitario de ${producto} es de $${precio}. Al elegir este medio de pago usted tiene un descuento de $${descuento} y el precio final es de $${precioFinal}. Presione enter para confirmar la compra.`);           
            break;
            
        default:
            alert(`El medio de pago elegido no se encuentra disponible. Presione enter para ver el listado de productos sin filtros.`);
            break;
    }
}

/** Proceso de efectuar compra por parte del cliente **/

const realizarCompra = (productos) => {
    alert(`Excelente. A continuacion, le dejamos el listado de los productos que puede comprar son:`);
    productos.forEach((item) => {
        alert(`Nombre: ${item.nombre}`);
    });
    let productoAComprar = prompt("Ahora, ingrese el nombre del producto que desea adquirir");
    let cantidadAComprar = prompt('Por ultimo, ingrese la cantidad de ' + productoAComprar + ' que desea adquirir');
    if(hayStock(productos, productoAComprar, cantidadAComprar)){
        alert(`Excelente! Contamos con stock suficiente de ${productoAComprar} para satisfacer su pedido. Presione enter para comenzar el proceso de pago del pedido realizado.`);
        alert(`Contamos con los siguientes metodos de pago: Transferencia bancaria, Tarjeta de credito, Mercadopago o Cryptomonedas`);
        let infoProducto = buscar(productos, productoAComprar);
        let precioProducto = infoProducto.precio;
        let formaPago = prompt("Por favor, ingrese el medio elegido");
        tramitarPagoSegun(productoAComprar, cantidadAComprar, precioProducto, formaPago);
    } else {
        alert(`Lo sentimos mucho. No hay stock suficiente de ${productoAComprar}. A continuacion, le solicitaremos un email para notificarle cuando se reponga el stock. Presione enter para continuar`);
        let email = prompt('Por favor, ingrese su email asi le notificamos cuando haya nuevamente stock de' + productoAComprar);
        alert(`Perfecto, su email ${email} ha sido almacenado correctamente. Muchas gracias por confiar en nosotros.`);
    }
}



/****************** SIMULADOR INTERACTIVO & ECOMMERCE ESPACIO ARCOIRIS CREAR ******************/

// Seccion Administracion
let administrador = prompt("Bienvenido al administrador e-commerce emergente de Espacio Arcoiris Crear. Ingrese su nombre para continuar.");
saludoInicial(administrador);
let cantProductos = parseInt(prompt(administrador + ' ingrese la cantidad de productos que desea cargar en el sistema.'));
const productos = cargarProductos(cantProductos);
cargaExitosa(administrador, productos, cantProductos);

// Seccion Cliente
let nombreCliente = prompt("Ahora, vamos a comenzar con el proceso de compra de productos. Por favor, ingrese su nombre."); 
saludar(nombreCliente);
let categoria = prompt(nombreCliente + ' , ingrese el nombre de la categoria por la que desea filtrar (nombre, precio, stock, id o tipo) o presione cualquier tecla si desea ver el listado completo de productos.');
const productosEncontrados = filtrarPor(categoria, productos);
realizarCompra(productosEncontrados);

