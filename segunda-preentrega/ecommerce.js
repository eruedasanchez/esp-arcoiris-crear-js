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

/** Verificar que el nombre ingresado sea valido **/

const saludar = (cliente) => {
    if(cliente === ""){
        alert(`Nombre invalido! Por favor, presione enter, recargue la pagina e intente nuevamente. Muchas gracias.`);
    } else {
        alert(`Bienvenido ${cliente}! Presione enter para continuar comenzar la compra.`);
    }
}

const filtrarPor = (productos, categoria) => {
    const productosEncontrados = productos;
    if(categoria === "nombre"){
        productosEncontrados = aplicarFiltroNombres(productos);
    } else if(categoria === "precio"){
        productosEncontrados = aplicarFiltroPrecios(productos);
    } else if(categoria === "stock"){
        productosEncontrados = aplicarFiltroStocks(productos);
    } else if(categoria === "id"){
        productosEncontrados = aplicarFiltroIds(productos);
    } else if(categoria === "tipo"){
        productosEncontrados = aplicarFiltroTipos(productos);
    }
    return productosEncontrados;
}

const aplicarFiltroNombres = (productos) => {
    let filtro = prompt("Ingrese creciente si desea filtrar los productos alfabeticamente de menor a mayor, decreciente en caso contrario o por algun nombre en particular");
    switch(filtro){
        case "creciente":
            alert(`Ha elegido filtrar los productos ordenados alfabeticamente de menor a mayor`);
            productos.sort((a,b) => {
                if(a.nombre > b.nombre){
                    return 1;
                } 
                if(a.name < b.name){
                    return -1;
                }
                // a es igual a b
                return 0;
            });
            break;
            
        case "decreciente":
            alert(`Ha elegido filtrar los productos ordenados alfabeticamente de mayor a menor`);
            productos.sort((a,b) => {
                if(a.nombre > b.nombre){
                    return -1;
                } 
                if(a.name < b.name){
                    return 1;
                }
                // a es igual a b
                return 0;
            });
            break;

        case "nombre":
            alert(`Ha elegido filtrar los productos por el nombre ${filtro}`);
            productos = productos.filter(products => products.nombre === filtro);            
            break;
        
        default:
            alert(`El filtro elegido no se encuentra disponible. Presione enter para ver el listado de productos sin filtros.`);
            break;
    }
    return productos;
} 

const aplicarFiltroPrecios = (productos) => {
    let valor = parseInt(prompt("Ingrese el valor por el desea filtrar los productos"));
    let operacion = prompt("Ahora, ingrese la operacion (mayor, menor o igual) por la que desea filtrar");
    if(operacion === "mayor"){
        alert(`Ha elegido filtrar los productos mayores a $${valor}`);
        productos = productos.filter(products => products.precio > valor);
    } else if(operacion === "menor"){
        alert(`Ha elegido filtrar los productos menores a $${valor}`);
        productos = productos.filter(products => products.precio < valor);
    } else if(operacion === "igual"){
        alert(`Ha elegido filtrar los productos iguales a $${valor}`);
        productos = productos.filter(products => products.precio === valor);
    } else {
        alert(`El filtro elegido no se encuentra disponible. Presione enter para ver el listado de productos sin filtros.`);
    }
    return productos;
}

const aplicarFiltroStocks = (productos) => {
    let stock = parseInt(prompt("Ingrese el stock por el desea filtrar los productos"));
    let operacion = prompt("Ahora, ingrese la operacion (mayor, menor o igual) por la que desea filtrar");
    if(operacion === "mayor"){
        alert(`Ha elegido filtrar los productos que tengan un stock mayor a ${stock}`);
        productos = productos.filter(products => products.stock > stock);
    } else if(operacion === "menor"){
        alert(`Ha elegido filtrar los productos que tengan un stock menor a ${stock}`);
        productos = productos.filter(products => products.stock < stock);
    } else if(operacion === "igual"){
        alert(`Ha elegido filtrar los productos que tengan un stock igual a ${stock}`);
        productos = productos.filter(products => products.stock === stock);
    } else {
        alert(`El filtro elegido no se encuentra disponible. Presione enter para ver el listado de productos sin filtros.`);
    }
    return productos;
}
    
const aplicarFiltroIds = (productos) => {
    let id = parseInt(prompt("Ingrese el id por el desea filtrar los productos"));
    let operacion = prompt("Ahora, ingrese la operacion (mayor, menor o igual) por la que desea filtrar");
    if(operacion === "mayor"){
        alert(`Ha elegido filtrar los productos que tengan un id mayor a ${id}`);
        productos = productos.filter(products => products.id > id);
    } else if(operacion === "menor"){
        alert(`Ha elegido filtrar los productos que tengan un id menor a ${id}`);
        productos = productos.filter(products => products.id < id);
    } else if(operacion === "igual"){
        alert(`Ha elegido filtrar los productos que tengan un id igual a ${id}`);
        productos = productos.filter(products => products.id === id);
    } else {
        alert(`El filtro elegido no se encuentra disponible. Presione enter para ver el listado de productos sin filtros.`);
    }
    return productos;
}

const aplicarFiltroTipos = (productos) => {
    let tipo = prompt("Ingrese el tipo del producto por el desea filtrar");
    switch(tipo){
        case "herramientas":
            alert(`Ha elegido filtrar los productos por el nombre ${tipo}`);    
            productos = productos.filter(products => products.tipo === "herramientas");            
            break;

        case "insumos":
            alert(`Ha elegido filtrar los productos por el nombre ${tipo}`);    
            productos = productos.filter(products => products.tipo === "insumos");            
            break;
                
        case "workshops":
            alert(`Ha elegido filtrar los productos por el nombre ${tipo}`);    
            productos = productos.filter(products => products.tipo === "workshops");            
            break;
                    
        case "seminarios":
            alert(`Ha elegido filtrar los productos por el nombre ${tipo}`);    
            productos = productos.filter(products => products.tipo === "seminarios");            
            break;
                        
        case "cursos":
            alert(`Ha elegido filtrar los productos por el nombre ${tipo}`);    
            productos = productos.filter(products => products.tipo === "cursos");            
            break;
            
        default:
            alert(`El filtro elegido no se encuentra disponible. Presione enter para ver el listado de productos sin filtros.`);
            break;
    }
    return productos;
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
let administrador = prompt("Bienvenido al administrador e-commerce emergente de Espacio Arcoiris Crear. Ingrese su nombre para continuar");
saludoInicial(administrador);
let cantProductos = parseInt(prompt(administrador + ' ingrese la cantidad de productos que desea cargar en el sistema'));
const productos = cargarProductos(cantProductos);
cargaExitosa(administrador, productos, cantProductos);

// Seccion Cliente
let cliente = prompt("Ahora, vamos a comenzar con el proceso de compra de productos. Por favor, ingrese su nombre"); 
saludar(cliente);
let categoria = prompt("Ingrese el nombre de la categoria por la que desea filtrar productos o presione cualquier tecla si no quiere filtrar por ninguna categoria.");
filtrarPor(productos,categoria);
realizarCompra(productos);
