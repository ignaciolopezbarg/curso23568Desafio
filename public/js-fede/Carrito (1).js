const elementosPorUnidad = document.querySelectorAll(".cart__number-quantity");
const agregar = document.querySelectorAll(".fa-plus");
const desagregar = document.querySelectorAll(".fa-minus");
const total = document.querySelectorAll(".cart__price-total")
const precioUnidad = document.querySelectorAll(".cart__product-price")
const botonEliminar = document.querySelectorAll(".cart__delete-icon")
const itemsAgregados = document.querySelector(".cart__resumen-numbers-amount")
const valorSubtotal = document.querySelector(".cart__resumen-numbers-subtotal-value")
const valorEnvio = document.querySelector(".cart__resumen-numbers-envio-value")
const valorTotalCompra = document.querySelector(".cart__resumen-numbers-total")

// console.log(precioUnidad)
valorEnvio.textContent = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
valorSubtotal.textContent = parseFloat(precioUnidad[0].textContent) + parseFloat(precioUnidad[1].textContent);

valorTotalCompra.textContent = parseFloat(precioUnidad[0].textContent) + parseFloat(precioUnidad[1].textContent) + parseFloat(valorEnvio.textContent);

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
