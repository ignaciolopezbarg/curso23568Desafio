
// funcion que retorna 3 productos aleatorios
function elegirProductosRandom(itemsFiltrados){
  
  let productosFiltrados = itemsFiltrados.filter(item => !condicion(item)) // filtra todos los elementos que no sea el item seleccionado
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
    
function condicion(item){
  return item.product_name === product.nombre;
}
    
    // se crea funcion que mete codigo del glide en html dinamicamente con productos aleatorios
function glideSelect(gliderContainer){
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
            <p class="card-item__license">${x.categoria}</p>
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
    const productoGlide =
    {
      nombre: "",
      categoria: "", 
      precio: "",
      descripcion: "",
      imgFront: "",
      imgBack: ""
    };
document.addEventListener("DOMContentLoaded", function (){
  const gliderContainer = document.querySelector(".slider__items");
  glideSelect(gliderContainer);
  const itemsGlide = document.querySelectorAll(".card-item__link");
  const itemsGlideName = document.querySelectorAll(".card-item__name");
  const itemsGlideCategoria = document.querySelectorAll(".card-item__license");
  const itemsGlidePrecio = document.querySelectorAll(".card-item__price");
  const itemsGlideImgFront = document.querySelectorAll(".card-item__img--front");
  const itemsGlideImgBack = document.querySelectorAll(".card-item__img--back");
  console.log(itemsGlideCategoria)
  itemsGlideCategoria.forEach((item, index) => {
    console.log(`Item ${index + 1}: ${item.textContent}`);
  });
  itemsGlide.forEach((itemsGlide,i) => {
    itemsGlide.addEventListener('click', () => {
      productoGlide["nombre"] = itemsGlideName[i].textContent;
      productoGlide["categoria"] = itemsGlideCategoria[i].textContent;
      productoGlide["precio"] = itemsGlidePrecio[i].textContent;
      productoGlide["descripcion"] = itemsGlideImgFront[i].getAttribute("alt");
      productoGlide["imgFront"] = itemsGlideImgFront[i].getAttribute("src");
      productoGlide["imgBack"] = itemsGlideImgBack[i].getAttribute("src");
      localStorage.setItem("selectProduct",JSON.stringify(productoGlide));
    });
  });
});

