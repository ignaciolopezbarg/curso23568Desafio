
// funcion que retorna 3 productos aleatorios
function elegirProductosRandom(itemsFiltrados){
  
  let productosFiltrados = itemsFiltrados
  let productosAleatorios = [];
  
  while(productosAleatorios.length < 3){
    const indiceAleatorio = Math.floor(Math.random() * productosFiltrados.length); // genera numoros random del 0 creo a la cantidad que hay en productosFiltrados
    let productoEncontrado = productosFiltrados[indiceAleatorio] // guardamos el objeto segun el indice
    if (!productosAleatorios.find(item => item.product_name === productoEncontrado.product_name)) {
          productosAleatorios.push(productoEncontrado);
    }
    productosFiltrados.splice(indiceAleatorio, 1);
    /* productosAleatorios.push(productoEncontrado) // metemos en un nuevo array de productos dicho objeto */
  }
  return productosAleatorios;
}

module.exports = elegirProductosRandom;