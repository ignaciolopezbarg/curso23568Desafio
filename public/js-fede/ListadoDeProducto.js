const eliminarInfo = document.querySelectorAll(".listProducts__delete-info")
const NombresDeProducto = document.querySelectorAll("#Nombre-del-Producto")
const seccionesProductos = document.querySelectorAll(".list__products__section-info")
const buscador = document.querySelector(".search-product")


buscador.addEventListener("keyup", (e) =>{
    let valorInput = e.target.value.toLowerCase()
    console.log(valorInput)
    NombresDeProducto.forEach( ( nombreProducto, i ) => {

        const nombreProductoTexto = nombreProducto.textContent.toLowerCase();
        const seccionProducto = seccionesProductos[i]

        if(nombreProductoTexto.includes(valorInput)){
            seccionProducto.classList.remove("filtro")
        }else{
            seccionProducto.classList.add("filtro")
        }
    })
})





eliminarInfo.forEach((eliminarInfo, i) => {
    eliminarInfo.addEventListener('click', (e) =>{
        const eliminarProducto = e.target

        eliminarProducto.parentElement.remove()
    })
})
