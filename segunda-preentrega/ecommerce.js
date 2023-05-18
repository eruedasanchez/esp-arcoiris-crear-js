/* Pequeño simulador interactivo & ecommerce emergente de Espacio Arcoiris Crear */

class Producto{
    constructor(nombre, precio, stock, id, tipo){
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.id = id;
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
    let prods = [];     // Arreglo donde se va a almacenar los productos que se agregue a la tienda
    for(let i=0; i < cantProductos; i++){
        let nombreNuevoProducto = prompt('Ingrese el nombre del producto numero ' + (i+1));
        let precioNuevoProducto = parseInt(prompt('Ingrese el precio (solo numeros naturales sin signo $) del producto numero ' + (i+1)));
        let stockNuevoProducto = parseInt(prompt('Ingrese el stock (solo numeros naturales) del producto numero ' + (i+1)));
        let idNuevoProducto = prompt('Ingrese el id del producto numero ' + (i+1));
        let tipoNuevoProducto = prompt('Ingrese la categoria del producto numero ' + (i+1));
        const nuevoProducto = new Producto(nombreNuevoProducto, precioNuevoProducto, stockNuevoProducto, idNuevoProducto, tipoNuevoProducto);
        prods.push(nuevoProducto);
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
    let prodsEncontrados = prods;                       // Declaro al arreglo let porque lo voy a reasignar
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
    alert(`En esta seccion, puede optar por los siguientes filtros: \n 1) creciente: los productos se ordenan alfabeticamente de menor a mayor \n 2) decreciente: los productos se ordenan alfabeticamente de mayor a menor \n 3) nombre: los productos se filtran por un nombre en particular`);
    let prodsFiltrados = prods;
    let filtro = prompt("Ahora, ingrese el nombre del filtro que quiere aplicar y presione enter para continuar.");
    switch(filtro){
        case "creciente":
            prods.sort((a,b) => {
                if(a.nombre > b.nombre){
                    return 1;
                } 
                if(a.nombre < b.nombre){
                    return -1;
                }
                // a es igual a b
                return 0;
            })
            prodsFiltrados = prods;
            break;
            
        case "decreciente":
            alert(`Ha elegido filtrar los productos ordenados alfabeticamente de mayor a menor`);
            prods.sort((a,b) => {
                if(a.nombre > b.nombre){
                    return -1;
                } 
                if(a.nombre < b.nombre){
                    return 1;
                }
                // a es igual a b
                return 0;
            })
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
    let limite = prompt("Ahora, ingrese el limite (mayor, menor o igual precio).");
    let prodsFiltrados = prods;
    if(limite === "mayor"){
        prodsFiltrados = prods.filter(products => products.precio > valor);
    } else if(limite === "menor"){
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
    let prodsFiltrados = prods;
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
    let prodsFiltrados = prods;
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
    let prodsFiltrados = prods;
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
            prodsFiltrados = prods.filter(products => products.tipo === "cursos");            
            break;
            
        default:
            alert(`El filtro elegido es incorrecto. Por defecto, no se aplica ningun filtro.`);
            break;
    }
    return prodsFiltrados;
}

/** Buscar la informacion de un producto por el nombre **/

const buscarStock = (prodsEncontrados, nombreProd) => {
    let stockDisponible;
    for(const item of prodsEncontrados){
        if(item.nombre === nombreProd){
            stockDisponible = item.stock;
        }
    }
    return stockDisponible;
}

const buscarPrecio = (prodsEncontrados, nombreProd) => {
    let importe;
    for(const item of prodsEncontrados){
        if(item.nombre === nombreProd){
            importe = item.precio;
        }
    }
    return importe;
}

/** Cobro efectuado con tarjeta de credito */

const cobrarConTarjetaCredito = (nombre, cantidad, precio) => {
    alert(`Ha elegido abonar su pedido con Tarjeta de credito. \n Al abonar con este medio de pago tiene un recargo del 30% y hasta 6 cuotas sin interes`);
    let precioRegular = precio * cantidad;
    let recargo = precioRegular * 0.3;
    let precioFinal = precioRegular + recargo;
    alert(`El costo regular de su pedido de ${cantidad} unidades de ${nombre} es de $${precioRegular}. \n Con este medio de pago, el recargo es de $${recargo} y el valor final es de $${precioFinal}. \n Presione enter para continuar la compra.`);
    let cantCuotas = parseInt(prompt("Ahora, ingrese la cantidad de cuotas en las que desea abonar su pedido (entre 1 y 12 inclusive)"));
    if((cantCuotas >= 1) && (cantCuotas <= 6)){
        let valorCuota = (precioFinal / cantCuotas).toFixed(3);     // Truncamiento a tres (3) decimales
        alert(`Estimado cliente. Usted va a abonar ${cantCuotas} fijas sin intereses de $${valorCuota}. \n Presione enter para confirmar la compra.`);
    } else if((cantCuotas > 6) && (cantCuotas <= 12)){
        alert(`Estimado cliente. Al elegir ${cantCuotas} cuotas, se le cobrara un recargo adicional del 5% por impuestos de tarjeta sobre el valor final de su pedido. \n Presione enter para continuar.`);
        let impuesto = precioFinal * 0.05;
        precioFinal += impuesto;
        valorCuota = (precioFinal / cantCuotas).toFixed(3);
        alert(`Estimado cliente. Usted va a abonar ${cantCuotas} fijas de $${valorCuota}. \n Presione enter para confirmar la compra.`);
    } else {
        alert(`Numero de cuotas incorrecto. Por favor, ingrese un numero entre 1 y 12 inclusive e intente nuevamente.`);
    }
}

/** Realizar el cobro del producto **/

const tramitarPagoSegun = (nombre, cantidad, precio, pago) => {
    alert(`Comenzamos el proceso de pago de ${cantidad} unidades de ${nombre}. Presione enter para continuar.`);
    let precioRegular = precio * cantidad;
    let descuento = 0;
    let precioFinal;
    switch(pago){
        case "Transferencia bancaria":
            alert(`Ha elegido abonar con transferencia bancaria. Al abonar con este medio de pago tiene un 10% de descuento`);    
            descuento = precioRegular * 0.10;
            precioFinal = precioRegular - descuento;
            alert(`El costo regular de su pedido de ${cantidad} unidades de ${nombre} es de $${precioRegular}. \n Con este medio de pago, obtiene un descuento de $${descuento} y el valor final es de $${precioFinal}. \n Presione enter para confirmar la compra.`);           
            break;

        case "Mercadopago":
            alert(`Ha elegido abonar su pedido con Mercadopago. Al abonar con este medio de pago tiene un 15% de descuento`);    
            descuento = precioRegular * 0.15;
            precioFinal = precioRegular - descuento;
            alert(`El costo regular de su pedido de ${cantidad} unidades de ${nombre} es de $${precioRegular}. \n Con este medio de pago, obtiene un descuento de $${descuento} y el valor final es de $${precioFinal}. \n Presione enter para confirmar la compra.`);           
            break;

        case "Tarjeta de credito":
            cobrarConTarjetaCredito(nombre, cantidad, precio);     
            break;
            
        case "Criptomonedas":
            alert(`Ha elegido abonar su pedido con Criptomonedas. Al abonar con este medio de pago tiene un 7% de descuento`);    
            descuento = precioRegular  * 0.07;
            precioFinal = precioRegular - descuento;
            alert(`El costo regular de su pedido de ${cantidad} unidades de ${nombre} es de $${precioRegular}. \n Con este medio de pago, obtiene un descuento de $${descuento} y el valor final es de $${precioFinal}. \n Presione enter para confirmar la compra.`);           
            break;
            
        default:
            alert(`El medio de pago elegido no se encuentra disponible. Intente nuevamente probando con los medios de pago mencionados.`);
            break;
    }
}

/** Informar al cliente acerca del retiro del pedido segun medio de pago **/

const informarRetiroPedido = (medioPago) => {
    if(medioPago === "Transferencia bancaria"){
        alert(`Felicitaciones, su compra fue confirmada con exito. Envie su comprobante de pago a avisosdepagoesparcoiris@gmail.com y aguarde por la confirmacion para retirar su pedido. \n Muchas gracias por elegirnos`);
    } else if(medioPago === "Mercadopago"){
        alert(`Felicitaciones, su compra fue confirmada con exito. Envie su comprobante de pago a avisosdepagoesparcoiris@gmail.com y aguarde por la confirmacion para retirar su pedido. \n Muchas gracias por elegirnos`);
    } else if(medioPago === "Tarjeta de credito"){
        alert(`Felicitaciones, su compra fue confirmada con exito. Puede pasar a retirar su pedido de lunes a viernes de 9 a 18hs por nuestro local de Avenida Rivadavia 5700, CABA. \n Muchas gracias por elegirnos`);
    } else if(medioPago === "Criptomonedas"){
        alert(`Felicitaciones, su compra fue confirmada con exito. Recuerde que solo aceptamos USDT y BTC; y que debera abonar en nuestro deposito ubicado en Pedro Goyena 200 de lunes a viernes de 10 a 14hs . \n Muchas gracias por elegirnos`);
    }
}

/** Proceso de borrar un producto del sistema **/

const borrarDelSistema = (prods, nombreProducto) => {
    let indice = -1;                                     // Inicializacion en -1 pero el elemento se encuentra en el arreglo
    for(let i=0; i < prods.length; i++){
        if(prods[i].nombre === nombreProducto){
            indice = i;
            prods.splice(indice,1);
        }
    }
}

/** Proceso de efectuar compra por parte del cliente **/

const realizarCompra = (prodsEncontrados, prods) => {
    if(prodsEncontrados.length === 0){
        // No hay productos disponibles con el filtro aplicado
        alert(`Ups! Lo sentimos mucho. No se encontraron productos disponibles con el filtro seleccionado. Recargue la pagina para comenzar nuevamente con busqueda`);
    } else {
        // Hay productos disponibles con el filtro aplicado
        const nombreProductosEncontrados = [];
        alert(`Excelente. A continuacion, le dejamos el listado de los productos que puede comprar.`);
        prodsEncontrados.forEach((prod) => {
            nombreProductosEncontrados.push(prod.nombre);
        });
        alert(nombreProductosEncontrados);
        let nombreProductoComprar = prompt("Ahora, ingrese el nombre del producto que desea adquirir");
        let cantidadProductoComprar = parseInt(prompt('Ingrese la cantidad de ' + nombreProductoComprar + ' que desea comprar'));
        let stockProductoElegido = buscarStock(prodsEncontrados, nombreProductoComprar);
        let precioProductoElegido = buscarPrecio(prodsEncontrados, nombreProductoComprar);
        if(stockProductoElegido >= cantidadProductoComprar){
            // Hay suficiente stock para ejecutar la compra
            stockProductoElegido = stockProductoElegido - cantidadProductoComprar; // Actualizacion del stock
            if(stockProductoElegido === 0){
                // Borrar al producto del sistema
                borrarDelSistema(prods, nombreProductoComprar);
            }
            alert(`Excelente! Contamos con stock suficiente de ${nombreProductoComprar} para satisfacer su pedido. Presione enter para comenzar el proceso de pago del pedido realizado.`);
            alert(`Contamos con los siguientes metodos de pago: \n 1) Transferencia bancaria \n 2) Tarjeta de credito \n 3) Mercadopago \n 4) Criptomonedas`);
            let formaPago = prompt("Por favor, ingrese el medio elegido");
            tramitarPagoSegun(nombreProductoComprar, cantidadProductoComprar, precioProductoElegido, formaPago);
            informarRetiroPedido(formaPago); 
        } else {
            // No hay stock para ejecutar la compra
            alert(`Lo sentimos mucho. No hay stock suficiente de ${nombreProductoComprar}. \n A continuacion, le solicitaremos un email para notificarle cuando se reponga el stock. \n Presione enter para continuar`);
            let email = prompt("Por favor, ingrese su email");
            alert(`Perfecto, su email ${email} ha sido registrado correctamente. Muchas gracias por confiar en nosotros.`);
        }
    }
}

/*********************** SIMULADOR INTERACTIVO & ECOMMERCE ESPACIO ARCOIRIS CREAR ***********************/

// Seccion Administracion
let administrador = prompt("Bienvenido al administrador e-commerce emergente de Espacio Arcoiris Crear. Ingrese su nombre para continuar.");
saludoInicial(administrador);
let cantProductos = parseInt(prompt(administrador + ' ingrese la cantidad de productos que desea cargar en el sistema.'));
let productos = cargarProductos(cantProductos);
cargaExitosa(administrador, productos, cantProductos);

// Seccion Cliente
let nombreCliente = prompt("Ahora, vamos a comenzar con el proceso de compra de productos. Por favor, ingrese su nombre."); 
saludar(nombreCliente);
let categoria = prompt(nombreCliente + ' , ingrese el nombre de la categoria por la que desea filtrar (nombre, precio, stock, id o tipo) o presione cualquier tecla si desea ver el listado completo de productos.');
const productosEncontrados = filtrarPor(categoria, productos);
realizarCompra(productosEncontrados, productos);

