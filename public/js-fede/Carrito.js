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

console.log(elementosPorUnidad)
console.log(agregar)
console.log(desagregar)
console.log(total)
console.log(precioUnidad)
console.log(botonEliminar)
console.log(itemsAgregados)
console.log(valorEnvio)
console.log(valorTotalCompra)

console.log(itemsAgregados.textContent)
console.log(valorTotalCompra.textContent)


// crea un valor de envio random
valorEnvio.textContent = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;

// el valorsubtotal es hacer sumar cada (precio de unidad del producto * elementos seleccionado de ese producto)
valorSubtotal.textContent = parseFloat(itemsAgregados.textContent) * parseFloat(precioUnidad[0].textContent)
total[0].textContent = parseFloat(itemsAgregados.textContent) * parseFloat(precioUnidad[0].textContent)

console.log(valorSubtotal.textContent)

agregar.forEach( (agregar,i) => {
    agregar.addEventListener('click', ()=>{

        let cantidadDeElementos = parseInt(itemsAgregados.textContent)
        let subtotal= parseFloat(valorSubtotal.textContent)
        let totalCompra = parseFloat(valorTotalCompra.textContent)
       
        elementosPorUnidad[i].value = parseInt(elementosPorUnidad[i].value) + 1;
        
        total[i].textContent = (parseFloat(total[i].textContent) + parseFloat(precioUnidad[i].textContent)).toFixed(2);
        
        itemsAgregados.textContent = cantidadDeElementos + 1;

        valorTotalCompra.textContent = totalCompra + parseFloat(precioUnidad[i].textContent);

        valorSubtotal.textContent = subtotal + parseFloat(precioUnidad[i].textContent)
        
    })
})

desagregar.forEach( (desagregar, i) => {
    desagregar.addEventListener('click', () => {
        // console.log(e)
        let elemPorUnidad = parseInt(elementosPorUnidad[i].value)
        let cantidadDeElementos = parseInt(itemsAgregados.textContent)
        let subtotal= parseFloat(valorSubtotal.textContent)
        let totalCompra = parseFloat(valorTotalCompra.textContent)
        
        if(elemPorUnidad > 1){
            elementosPorUnidad[i].value = parseInt(elementosPorUnidad[i].value) - 1;
            
            total[i].textContent = parseFloat(total[i].textContent) - parseFloat(precioUnidad[i].textContent).toFixed(2);
            
            itemsAgregados.textContent = cantidadDeElementos - 1;
            valorSubtotal.textContent = subtotal - parseFloat(precioUnidad[i].textContent)
            valorTotalCompra.textContent = totalCompra - parseFloat(precioUnidad[i].textContent);

        }
    })
})

botonEliminar.forEach( (botonEliminar,i) => {
    botonEliminar.addEventListener('click',(e) => {
        let articuloEliminado = e.target
        let cantidadDeElementos = parseInt(itemsAgregados.textContent)
        let subtotal= parseFloat(valorSubtotal.textContent)
        let totalCompra = parseFloat(valorTotalCompra.textContent)
        let envio = parseInt(valorEnvio.textContent)
        
            articuloEliminado.parentElement.parentElement.remove();
            itemsAgregados.textContent = cantidadDeElementos - parseInt(elementosPorUnidad[i].value);
            valorSubtotal.textContent = subtotal - parseFloat(precioUnidad[i].textContent)*parseInt(elementosPorUnidad[i].value);
            valorTotalCompra.textContent = totalCompra - parseFloat(precioUnidad[i].textContent)*parseInt(elementosPorUnidad[i].value);
            if(itemsAgregados.textContent == "0"){
    
                valorEnvio.textContent = parseInt(valorEnvio.textContent) - envio
                valorTotalCompra.textContent = "0"
            }
        })
        
})

// console.log(productoCarrito.innerHTML);
// console.log(item)
        
