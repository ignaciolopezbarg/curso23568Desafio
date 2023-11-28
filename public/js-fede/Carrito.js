const elementosPorUnidad = document.querySelectorAll(".cart__number-quantity");

const agregar = document.querySelectorAll(".fa-plus");

const desagregar = document.querySelectorAll(".fa-minus");

const total = document.querySelectorAll(".cart__price-total")

const precioUnidad = document.querySelectorAll(".cart__product-price")

const botonEliminar = document.querySelectorAll(".cart__delete-icon")

// const itemsAgregados = document.querySelector(".cart__resumen-numbers-amount")

const valorSubtotal = document.querySelector(".cart__resumen-numbers-subtotal-value")

const valorEnvio = document.querySelector(".cart__resumen-numbers-envio-value")

const valorTotalCompra = document.querySelector(".cart__resumen-numbers-total")

// console.log(elementosPorUnidad)
// console.log(agregar)
// console.log(desagregar)
// console.log("precio original del producto por unidad")
// console.log(precioUnidad[0].textContent.replace(".", ""))
// console.log(botonEliminar)
// console.log("item Seleccionados")
// console.log(itemsAgregados.textContent)




// crea un valor de envio random
valorEnvio.textContent = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
// valorEnvio.textContent = 300

// el valorsubtotal es hacer sumar cada (precio de unidad del producto * elementos seleccionado de ese producto)

valorSubtotal.textContent = parseFloat(itemsAgregados.textContent) * parseFloat(precioUnidad[0].textContent.replace(".", ""));

total[0].textContent = parseFloat(itemsAgregados.textContent) * parseFloat(precioUnidad[0].textContent.replace(".", ""));

valorTotalCompra.textContent = parseFloat(total[0].textContent.replace(".", "")) + parseFloat(valorEnvio.textContent);

console.log(total[0].textContent)

// console.log("precio del producto segun cantidad elementos")
// console.log(total[0].textContent+parseInt(valorEnvio.textContent))

// console.log("valor envio")
// console.log(valorEnvio.textContent)
// console.log("valor total de compra")
// console.log(valorTotalCompra)
// console.log(valorSubtotal.textContent)

agregar.forEach( (agregar,i) => {
    agregar.addEventListener('click', ()=>{
        
        let cantidadDeElementos = parseInt(itemsAgregados.textContent)
        let subtotal= parseFloat(valorSubtotal.textContent.replace(".", ""))
        let totalCompra = parseFloat(valorTotalCompra.textContent)
        
        elementosPorUnidad[i].value = parseInt(elementosPorUnidad[i].value) + 1;
        
        total[i].textContent = (parseFloat(total[i].textContent.replace(".", "")) + parseFloat(precioUnidad[i].textContent.replace(".", "")));
        
        itemsAgregados.textContent = cantidadDeElementos + 1;
        
        valorTotalCompra.textContent = totalCompra + parseFloat(precioUnidad[i].textContent.replace(".", ""));
        
        valorSubtotal.textContent = subtotal + parseFloat(precioUnidad[i].textContent.replace(".", ""))
        
        console.log(total[i].textContent)
    })
})

desagregar.forEach( (desagregar, i) => {
    desagregar.addEventListener('click', () => {
        // console.log(e)
        let elemPorUnidad = parseInt(elementosPorUnidad[i].value)
        let cantidadDeElementos = parseInt(itemsAgregados.textContent)
        let subtotal= parseFloat(valorSubtotal.textContent.replace(".", ""))
        let totalCompra = parseFloat(valorTotalCompra.textContent)
        
        if(elemPorUnidad > 1){
            elementosPorUnidad[i].value = parseInt(elementosPorUnidad[i].value) - 1;
            
            total[i].textContent = parseFloat(total[i].textContent.replace(".", "")) - parseFloat(precioUnidad[i].textContent.replace(".", ""));
            
            itemsAgregados.textContent = cantidadDeElementos - 1;
            valorSubtotal.textContent = subtotal - parseFloat(precioUnidad[i].textContent.replace(".", ""))
            valorTotalCompra.textContent = totalCompra - parseFloat(precioUnidad[i].textContent.replace(".", ""));

        }
    })
})

botonEliminar.forEach( (botonEliminar,i) => {
    botonEliminar.addEventListener('click',(e) => {
        let articuloEliminado = e.target
        let cantidadDeElementos = parseInt(itemsAgregados.textContent)
        let subtotal= parseFloat(valorSubtotal.textContent.replace(".", ""))
        let totalCompra = parseFloat(valorTotalCompra.textContent)
        let envio = parseInt(valorEnvio.textContent)
        
            articuloEliminado.parentElement.parentElement.remove();
            itemsAgregados.textContent = cantidadDeElementos - parseInt(elementosPorUnidad[i].value);
            valorSubtotal.textContent = subtotal - parseFloat(precioUnidad[i].textContent.replace(".", ""))*parseInt(elementosPorUnidad[i].value);
            valorTotalCompra.textContent = totalCompra - parseFloat(precioUnidad[i].textContent.replace(".", ""))*parseInt(elementosPorUnidad[i].value);
            if(itemsAgregados.textContent == "0"){
    
                valorEnvio.textContent = parseInt(valorEnvio.textContent) - envio
                valorTotalCompra.textContent = "0"
            }
        })
        
})

// console.log(productoCarrito.innerHTML);
// console.log(item)
        
