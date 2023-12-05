
const gliderContainer = document.querySelector(".slider__items")
function elegirProductosRandom(itemsFiltrados){

    let productosFiltrados = itemsFiltrados.filter(item => !condicion(item))
    let productosAleatorios = [];

    while(productosAleatorios.length < 3){
        const indiceAleatorio = Math.floor(Math.random() * productosFiltrados.length);
        let productoEncontrado = productosFiltrados[indiceAleatorio]
        productosAleatorios.push(productoEncontrado)
    }
    return productosAleatorios

}

function condicion(item){
    return item.product_name === product.nombre
}

function glideSelect(){
    return (gliderContainer.innerHTML = elegirProductosRandom(productos).map((x) => {
        return `
        <li class="slider__item glide__slide">
        <article class="card-item">
          <!-- a este ultimo no seguimos con Bem, pues es una especie de tarjeta que se repite en las distintas paginas -->
          <a class="card-item__link" href="./item.html">
            <picture class="card-item__cover">
              <span class="card-item__tag">NUEVO</span>
              <img
                class="card-item__img--front"
                src="/public/img/multimedia/${x.product_image_front}"
                alt="${x.product_description}"
              />
              <img
                class="card-item__img--back"
                src="/public/img/multimedia/${x.product_image_back}"
                alt="${x.product_description}"
              />
            </picture>
            <div class="card-item__content">
              <p class="card-item__license">${x.product_categoria}</p>
              <h4 class="card-item__name">${x.product_name}</h4>
              <p class="card-item__price">$${x.product_price}</p>
              <p class="card-item__promo">3 CUOTAS SIN INTERES</p>
            </div>
          </a>
        </article>
        </li>
        `
    }).join(""));
}
glideSelect()
// elegirProductosRandom(productos);
// console.log(elegirProductosRandom(productos))

