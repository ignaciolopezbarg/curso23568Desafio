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

const cartElements= document.querySelector(".navbar__item-cart")

// cartElements.textContent = elementosPorUnidad[0].value
// console.log(cartElements.textContent)
// crea un valor de envio random
valorEnvio.textContent = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
// valorEnvio.textContent = 300

// el valorsubtotal es hacer sumar cada (precio de unidad del producto * elementos seleccionado de ese producto)

valorSubtotal.textContent = parseFloat(itemsAgregados.textContent) * parseFloat(precioUnidad[0].textContent);

total[0].textContent = parseFloat(itemsAgregados.textContent) * parseFloat(precioUnidad[0].textContent.replace(".", ""));

valorTotalCompra.textContent = parseFloat(total[0].textContent.replace(".", "")) + parseFloat(valorEnvio.textContent);

console.log(total[0].textContent)
console.log(item.items)

if(item.items){
    cartElements.textContent = item.items
  }
agregar.forEach( (agregar,i) => {
    agregar.addEventListener('click', ()=>{
        
        let cantidadDeElementos = parseInt(itemsAgregados.textContent)
        let subtotal= parseFloat(valorSubtotal.textContent.replace(".", ""))
        let totalCompra = parseFloat(valorTotalCompra.textContent)
        item.items = parseInt(item.items) + 1
        localStorage.setItem("data", JSON.stringify(item));
        elementosPorUnidad[i].value = parseInt(elementosPorUnidad[i].value) + 1;
        
        total[i].textContent = (parseFloat(total[i].textContent.replace(".", "")) + parseFloat(precioUnidad[i].textContent.replace(".", "")));
        
        itemsAgregados.textContent = cantidadDeElementos + 1;
        
        valorTotalCompra.textContent = totalCompra + parseFloat(precioUnidad[i].textContent.replace(".", ""));
        
        valorSubtotal.textContent = subtotal + parseFloat(precioUnidad[i].textContent.replace(".", ""))
        cartElements.textContent = elementosPorUnidad[i].value
        console.log(total[i].textContent)
        console.log(item.items)
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
            item.items = parseInt(item.items) - 1
            localStorage.setItem("data", JSON.stringify(item));
            total[i].textContent = parseFloat(total[i].textContent.replace(".", "")) - parseFloat(precioUnidad[i].textContent.replace(".", ""));
            
            itemsAgregados.textContent = cantidadDeElementos - 1;
            valorSubtotal.textContent = subtotal - parseFloat(precioUnidad[i].textContent.replace(".", ""))
            valorTotalCompra.textContent = totalCompra - parseFloat(precioUnidad[i].textContent.replace(".", ""));
            cartElements.textContent = elementosPorUnidad[i].value
            
        }
        console.log(item.items)
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
        localStorage.removeItem("data");
        console.log(item.items)
        cartElements.textContent =elementosPorUnidad[i].value;
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

