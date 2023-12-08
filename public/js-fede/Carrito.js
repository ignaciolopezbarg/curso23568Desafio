function actualizarPrecio(total,precioProducto,cantidadDeElementos){
    // console.log(precioProducto * cantidadDeElementos)
    total.textContent = (precioProducto * cantidadDeElementos).toFixed(2)
}
function actualizarSubtotalCarrito(subtotal, productoTotal) {
    let nuevoSubtotal = 0;
    for (let j = 0; j < item.length; j++) {
        nuevoSubtotal += parseFloat(productoTotal[j].textContent);  // Solo sumar el precio del producto sin multiplicar por la cantidad
    }
    subtotal.textContent = nuevoSubtotal.toFixed(2);
}

function  actualizarTotalCarrito(total,subtotal,envio){
    total.textContent = parseFloat(subtotal.textContent) + parseFloat(envio.textContent)
}

function actualizarCantidadElementosCarrito(itemsAgregados,elementosProducto){
    itemsAgregados.textContent = Array.from(elementosProducto).reduce(function(acumulador, elemento){
        return acumulador + parseInt(elemento.value);
    }, 0);
}

function actualizarItemsCarrito(cantidadProductosCarrito){
    cantidadProductosCarrito.textContent = item.length
}

document.addEventListener("DOMContentLoaded", function (){
    console.log("DOMContentLoaded event fired");
    const cantidadProductosCarrito= document.querySelector(".navbar__item-cart") // valor del icono rojo de la cantidad de elementos que hay

    const botonEliminar = document.querySelectorAll(".cart__delete-icon") // boton eliminar
    const agregar = document.querySelectorAll(".fa-plus"); // boton de agregar elementos
    const desagregar = document.querySelectorAll(".fa-minus"); // boton de desagregar elementos
    
    const elementosProducto = document.querySelectorAll(".cart__number-quantity"); // elementos del input
    const totalProducto = document.querySelectorAll(".cart__price-total") // numero total de elementos seleccionados de dicho producto
    const precioProducto = document.querySelectorAll(".cart__product-price") // precio del producto 

    const resumenSubtotal = document.querySelector(".cart__resumen-numbers-subtotal-value") // valor subtototal ( solo la suma de la cantidad de cada producto)
    const resumenEnvio = document.querySelector(".cart__resumen-numbers-envio-value") // valor envio
    const resumenTotal = document.querySelector(".cart__resumen-numbers-total") // valor total de la compra ( el valor subtotal + el valor del envio)


    // asignamos valor al envio
    if(item.length){
        resumenEnvio.textContent = 300;
        actualizarItemsCarrito(cantidadProductosCarrito)
    }else{
        resumenEnvio.textContent = 0;
        actualizarItemsCarrito(cantidadProductosCarrito)
    }

    // asignamos el total hasta el momento del carrito
    resumenTotal.textContent = parseFloat(resumenSubtotal.textContent) + parseFloat(resumenEnvio.textContent)

    // asignamos la cantidad de elementos hasta el momento
    actualizarCantidadElementosCarrito(itemsAgregados,elementosProducto)

    agregar.forEach( (agregar,i) => {
        agregar.addEventListener('click', ()=>{

            // modifica el valor del input del producto
            elementosProducto[i].value = parseInt(elementosProducto[i].value) + 1

            // modifica el valor de los intems de producto
            item[i].items = item[i].items + 1
            localStorage.setItem("productosEnCarrito",JSON.stringify(item))

            // actualiza el precio
            actualizarPrecio(totalProducto[i],parseFloat(precioProducto[i].textContent), parseInt(elementosProducto[i].value))

            // actualizar subtotal
            actualizarSubtotalCarrito(resumenSubtotal,totalProducto)
            
            // actualizar total
            actualizarTotalCarrito(resumenTotal,resumenSubtotal,resumenEnvio)
            
            // actualizar cantidad de productos
            actualizarCantidadElementosCarrito(itemsAgregados,elementosProducto)
        })
    })
    
    desagregar.forEach( (desagregar, i) => {
        desagregar.addEventListener('click', () => {
            if(parseInt(elementosProducto[i].value) > 1){
                
                // modifica el valor del input del producto
                elementosProducto[i].value = parseInt(elementosProducto[i].value) - 1
                
                // modifica el valor de los intems de producto
                item[i].items = item[i].items - 1
                localStorage.setItem("productosEnCarrito",JSON.stringify(item))
                
                // actualiza el precio
                actualizarPrecio(totalProducto[i],parseFloat(precioProducto[i].textContent), parseInt(elementosProducto[i].value))
                
                // actualizar subtotal
                actualizarSubtotalCarrito(resumenSubtotal,totalProducto,elementosProducto)
                
                // actualizar total
                actualizarTotalCarrito(resumenTotal,resumenSubtotal,resumenEnvio)
                
                // actualizar cantidad de productos
                actualizarCantidadElementosCarrito(itemsAgregados,elementosProducto)
            }
        })
    })
    
    botonEliminar.forEach((botonEliminarElement,i) => {
        botonEliminarElement.addEventListener('click',(e) => {
            if(item.length > 0){
                
                let contenedorEliminado = e.target
                // elimina el contenedor del producto
                contenedorEliminado.parentElement.parentElement.remove();
                
                
                // elimina el objeto en el indice i de item
                item.splice(i,1)
                
                // seteamos de nuevo el item nuevamente pero sin el producto que eliminado
                localStorage.setItem("productosEnCarrito",JSON.stringify(item))
                
                
                // actualizar cantidad de productos
                actualizarCantidadElementosCarrito(itemsAgregados,elementosProducto)
                console.log("cantidad de Elementos: ",resumenSubtotal.value)
        
                // actualizar subtotal
                actualizarSubtotalCarrito(resumenSubtotal,totalProducto,elementosProducto)
                console.log("subtotal: ",resumenSubtotal.textContent)
                
                // actualizar total
                actualizarTotalCarrito(resumenTotal,resumenSubtotal,resumenEnvio)
                console.log("total: ",resumenSubtotal.textContent)
        
        
                actualizarItemsCarrito(cantidadProductosCarrito)
                if(item.length == 0){
                    resumenEnvio.textContent = "0"
                    itemsAgregados.textContent = "0"
                    actualizarItemsCarrito(cantidadProductosCarrito)
                    elementoVacio.style.display = "block";
                    
                }
                
            }else{
                localStorage.removeItem("productosEnCarrito");
            }
        })
        
    })

    // hacer una condicion ene ste archivo ue si no hay mas elementos mostrar el no hay productos seleccionados
    
});
