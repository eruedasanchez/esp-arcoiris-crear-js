/* Pequeño simulador ecommerce de Espacio Arcoiris Crear */

/* Funcionalidad del ecommerce dueño-usuario */

/*

1. Registrar productos con sus respectivos nombres, precios, stock, id y categoria (dueño)
2. Comprar productos se van a permitir busquedas, filtros, metodos de pago, etc (usuario)
3. Actualizar el stock

*/

class Producto{
    constructor(nombre, precio, stock, id, tipo){
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this .id = id;
        this.tipo = tipo;
    }
}

/* Saludo inicial */

const saludoInicial = () => {
    alert(`Bienvenido al e-commerce emergente de Espacio Arcoiris Crear. Vamos a comenzar cargando los productos en la tienda. Presione enter para continuar`);
}

/* Carga de productos */

const cargarProductos = (cantProductos) => {
    const productos = []; // Arreglo donde se va a almacenar los productos que se agregue al ecommerce
    for(let i=0; i < cantProductos; i++){
        let nombreProducto = prompt('Ingrese el nombre del producto numero ' + (i+1));
        let precioProducto = prompt('Ingrese el precio del producto numero ' + (i+1));
        let stockProducto = parseInt(prompt('Ingrese el stock del producto numero ' + (i+1)));
        let idProducto = prompt('Ingrese el id del producto numero ' + (i+1));
        let tipoProducto = prompt('Ingrese la categoria del producto numero ' + (i+1));
        const nuevoProducto = new Producto(nombreProducto, precioProducto, stockProducto, idProducto, tipoProducto);
        productos.push(nuevoProducto);
    }
    alert(`Felicitaciones. Todos sus productos han sido cargados con exito. Presione enter para ver el listado de productos`);
    alert(JSON.stringify(productos, null, cantProductos+1));
}

/**************************************** verificarNombreValido ****************************************/

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




/** Funcionalidad del ecommerce */

saludoInicial();
let cantProductos = parseInt(prompt("Por favor, ingrese la cantidad de productos que desea cargar en el sistema"));
cargarProductos(cantProductos);
let cliente = prompt("Ahora, vamos a comenzar con el proceso de compra de productos. Por favor, ingrese su nombre"); 
saludar(cliente);
let categoria = prompt("Ingrese el nombre de la categoria por la que desea filtrar productos o presione cualquier tecla si no quiere filtrar por ninguna categoria.");
filtrarPor(productos,categoria);

