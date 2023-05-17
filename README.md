## Espacio Arcoiris Crear simulador interactivo + ecommerce  

### Contenido
1. [Simulador interactivo](#simulador-interactivo)
2. [Simulador interactivo + ecommerce](#simulador-interactivo-ecommerce)

### Simulador interactivo
***
Para la primer pre-entrega planteo un simulador interactivo, el cual permite que un usuario pueda realizar la compra del producto que desee. De acuerdo a la cantidad de productos elegidos, el cliente puede obtener descuentos de hasta el 10%. Notar tambien que este simulador no admite compras de productos mayores a 20 unidades.

A su vez, el simulador permite realizar compras minoristas de hasta 10 unidades y compras mayoristas hasta 20 unidades.

Por ultimo, los medios de pago que tiene habilitado el simulador son efectivo (10% de descuento en compras mayoristas), transferencia/deposito bancario, tarjetas de credito (hasta 3 cuotas sin interes y un recargo del 30% en mas de 3 cuotas) y Mercadopago. 
***
### Simulador interactivo + ecommerce
***
Para la segunda preentrega, planteo una primera aproximacion a un ecommerce de una tienda online incorporando nuevas herramientas a las aplicadas en la primer preentrega. El proposito de la tienda va a ser elegido por el cliente.

En esta etapa de desarrollo, se comienza a establecer una especie de relacion "cliente-servidor". 

El servidor (en este caso lo llamo administrador) sera el encargado de cargar los productos en la tienda. Los productos estan definidos en la clase Producto y se va a poder acceder a sus nombres, precios, stock, id's y tipos.  

Una vez cargados todos los productos por parte del administrador, comienza la interaccion con el cliente. Esta interaccion consiste inicialmente en obtener el nombre del cliente y brindarle un saludo de bienvenida. Luego, se le solicita al usuario que ingrese una categoria (atributo de la clase Producto) para filtrar la busqueda de productos. Si se ingresa el nombre de una categoria invalida, no se aplicara ningun filtro y se devolvera el arreglo de Producto cargado por el administrador. Caso contrario, se devolvera un arreglo de Producto con el filtro aplicado por el usuario.

Por ultimo, se realiza el proceso de compra y pago del pedido solicitado por el usuario con el filtro ya aplicado. En primer lugar, si al aplicar el filtro, el arreglo de Producto es vacio, se emite una alerta notificando que no existen productos con el filtro aplicado. De lo contrario, se muestra al usuario un arreglo de nombres de los productos que satisfacen el filtro seleccionado y se pide que elija uno de ellos con una respectiva cantidad para continuar con el proceso de compra. 
Si hay stock para satisfacer el pedido, se realiza el proceso de pago por parte del usuario obteniendo hasta un 10% descuento de acuerdo al medio de pago que haya elegido y un recargo del 30% pero una financiacion de hasta 6 cuotas sin interes en caso de abonar con tarjeta de credito. En caso de no haber stock suficiente para satisfacer el pedido, se le solicitara un email al usuario para poder notificarlo cuando su pedido este disponible para ser realizado.    

Finalmente, una vez que el pedido sea abonado y confirmado por el sistema, se le informara donde debe retirarlo presencialmente de acuerdo al medio de pago que haya elegido.