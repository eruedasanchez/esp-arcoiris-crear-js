let nombreCliente = prompt("Bienvenido al simulador interactivo de Espacio Arcoiris Crear. Por favor, ingrese su nombre para iniciar su pedido");
alert(`Bienvenido ${nombreCliente}! Presione enter para continuar`);
let nombreProducto = prompt(`${nombreCliente}, ingrese el nombre del producto que quiere comprar.`);

if(nombreProducto === ""){
    /* Nombre de producto ingresado invalido */
    alert(`No ingreso el nombre de ningun producto. Por favor, ingrese el nombre nuevamente`);
} else {
    alert(`Usted desea comprar ${nombreProducto}.`);
    let cantProductos = parseInt(prompt(`Ahora, ingrese la cantidad de unidades de ${nombreProducto} que desea comprar`));
    if(cantProductos <= 10){
        alert(`Perfecto, su pedido por ${cantProductos} unidades de ${nombreProducto} ya se encuentra procesado. Presione enter para continuar`);
        let precioUnitarioProducto = 2000;
        let costoTotal = 0;
        for(let unidad = 0; unidad < cantProductos; unidad++){
            costoTotal = costoTotal + precioUnitarioProducto;  
        }
        alert(`El costo final de su pedido es de ${costoTotal} pesos. Presione enter para continuar`);
        let medioPago = prompt("Ahora, ingrese el medio de pago con el que desea abonar");
        switch(medioPago){
            case "efectivo":
                alert(`Usted ha decidido abonar en efectivo. Puede pasar a retirar su pedido por Del Barco Centenera 1200 de 9 a 16hs. Muchas gracias por confiar en nosotros!`);
                break;
            
            case "transferencia bancaria":
                alert(`Usted ha decidido abonar con transferencia bancaria. Le dejamos los datos de nuestra cuenta para poder transferir: CBU: 1234567890, Alias: INT.PERRO.SIMULADOR, Banco: Santander. Una vez realizado el pago, enviar el comprobante a avisosdepago@esparcoiris.com para comunicarle la fecha de retiro de su pedido. Muchas gracias por confiar en nosotros!`);
                break;
            
            case "mercadopago":
                alert(`Usted ha decidido abonar con Mercadopago.Le dejamos los datos de nuestra cuenta para poder transferir: CBU: 0987654321, Alias: PERRO.SIMULADOR.MP. Una vez realizado el pago, enviar el comprobante a avisosdepago@esparcoiris.com para comunicarle la fecha de retiro de su pedido. Muchas gracias por confiar en nosotros!`);
                break;
                
            case "tarjeta de credito":
                alert(`Ha decidido abonar en tarjeta de credito. Recuerde que tiene hasta 3 cuotas sin interes`);
                let cantCuotas = parseInt(prompt(`Ingrese la cantidad de cuotas que desea realizar`));
                if(cantCuotas <= 3){
                    let valorCuota = costoTotal / cantCuotas;
                    alert(`Usted va a abonar ${cantCuotas} fijas de ${valorCuota}. Presione enter para finalizar la compra. Muchas gracias por confiar en nosotros!`);
                } else if(cantCuotas < 13){
                    alert(`Esta modalidad tiene un recargo del 30%`);
                    let recargo = costoTotal * 0.30;
                    let costoTotalRecargo = costoTotal + recargo;
                    valorCuota = costoTotalRecargo / cantCuotas;
                    alert(`El valor final de su compra es de ${costoTotalRecargo} y va a abonar ${cantCuotas} cuotas de ${valorCuota}. Presione enter para finalizar la compra`);
                    alert(`Felicitaciones, compra confirmada. Muchas gracias por confiar en nosotros!`);
                } else {
                    alert(`El numero ingresado de cuotas es invalido. Por favor, ingrese un numero entre 1 y 12 inclusive. Muchas gracias.`);
                }
                break; 
            
            default:
                alert(`El medio de pago elegido no se encuentra disponible. Elija otro medio por favor`);
                break;
        }
    } else if(cantProductos <= 20){
        alert(`Perfecto, su pedido por ${cantProductos} unidades de ${nombreProducto} ya se encuentra procesado. Ademas, su compra cuenta con un 10% de descuento si abona en efectivo. Presione enter para continuar`);
        let precioUnitarioProducto = 2000;
        let costoTotal = 0;
        for(let unidad = 0; unidad < cantProductos; unidad++){
            costoTotal = costoTotal + precioUnitarioProducto;  
        }
        alert(`El costo final de su pedido es de ${costoTotal} pesos. Presione enter para continuar`);
        let medioPago = prompt("Ahora, ingrese el medio de pago con el que desea abonar");
        switch(medioPago){
            case "efectivo":
                alert(`Ha decidido abonar en efectivo. Le recordamos que tiene un 10% de descuento`);
                let descuento = costoTotal * 0.10;
                let costoTotalDesucuento = costoTotal - descuento;
                alert(`El valor final de su compra es de ${costoTotalDesucuento}. Puede pasar a retirar su pedido por Del Barco Centenera 1200 de 9 a 16hs. Presione enter para finalizar la compra`);
                alert(`Felicitaciones, compra confirmada. Muchas gracias por confiar en nosotros!`);
                break;
            
            case "transferencia bancaria":
                alert(`Usted ha decidido abonar con transferencia bancaria. Le dejamos los datos de nuestra cuenta para poder transferir: CBU: 1234567890, Alias: INT.PERRO.SIMULADOR, Banco: Santander. Una vez realizado el pago, enviar el comprobante a avisosdepago@esparcoiris.com para comunicarle la fecha de retiro de su pedido. Muchas gracias por confiar en nosotros!`);
                break;
            
            case "mercadopago":
                alert(`Usted ha decidido abonar con Mercadopago.Le dejamos los datos de nuestra cuenta para poder transferir: CBU: 0987654321, Alias: PERRO.SIMULADOR.MP. Una vez realizado el pago, enviar el comprobante a avisosdepago@esparcoiris.com para comunicarle la fecha de retiro de su pedido. Muchas gracias por confiar en nosotros!`);
                break;
                
            case "tarjeta de credito":
                alert(`Ha decidido abonar en tarjeta de credito. Recuerde que tiene hasta 3 cuotas sin interes`);
                let cantCuotas = parseInt(prompt(`Ingrese la cantidad de cuotas que desea realizar`));
                if(cantCuotas <= 3){
                    let valorCuota = costoTotal / cantCuotas;
                    alert(`Usted va a abonar ${cantCuotas} fijas de ${valorCuota}. Presione enter para finalizar la compra. Muchas gracias por confiar en nosotros!`);
                } else if(cantCuotas < 13){
                    alert(`Esta modalidad tiene un recargo del 30%`);
                    let recargo = costoTotal * 0.30;
                    let costoTotalRecargo = costoTotal + recargo;
                    valorCuota = costoTotalRecargo / cantCuotas;
                    alert(`El valor final de su compra es de ${costoTotalRecargo} y va a abonar ${cantCuotas} cuotas de ${valorCuota}. Presione enter para finalizar la compra`);
                    alert(`Felicitaciones, compra confirmada. Muchas gracias por confiar en nosotros!`);
                } else {
                    alert(`El numero ingresado de cuotas es invalido. Por favor, ingrese un numero entre 1 y 12 inclusive. Muchas gracias.`);
                }
                break; 
            
            default:
                alert(`El medio de pago elegido no se encuentra disponible. Elija otro medio por favor`);
                break;
        }
    } else {
        alert(`Usted no puede comprar ${cantProductos} unidades de ${nombreProducto} por cuestiones gubernamentales.`);
    }
}
