// (`product_id`, `product_name`, `product_description`, `price`, `stock`, `discount`, `sku`, `dues`, `image_front`, `image_back`, `licence_id`, `category_id`


const shop = document.querySelector(".catalogue__grilla")
function generarShop(){

    return (shop.innerHTML= productos.map((producto)=> {
        return `
        <div class="catalogue__product">
            <article class="card-item">
                <a class="card-item__link" href="./item.html">
                    <picture class="card-item__cover">
                        <span class="card-item__tag">Nuevo</span>
                        <img class="card-item__img--front" src="/public/img/multimedia/${producto.product_image_front}" alt="${producto.product_description}">
                        <img class="card-item__img--back" src="/public/img/multimedia/${producto.product_image_back}" alt="${producto.product_description}">
                    </picture>
                    <div class="card-item__content">
                        <p class="card-item__licence">${producto.categoria}</p>
                        <p class="card-item__name">${producto.product_name}</p>
                        <p class="card-item__price">$ ${producto.product_price}</p>
                        <p class="card-item__promo">3 CUOTAS SIN INTERÉS</p>
                    </div>
                </a>
            </article>
        </div>
        `
    }).join(""));

}
generarShop();

const nombres = document.querySelectorAll(".card-item__name");
const categorias = document.querySelectorAll(".card-item__licence");
const precios = document.querySelectorAll(".card-item__price");
const imagenFronts = document.querySelectorAll(".card-item__img--front");
const imagenBacks = document.querySelectorAll(".card-item__img--back");


console.log(imagenFronts)
console.log(imagenBacks)

const producto = 
{
  nombre: "",
  categoria: "", 
  precio: "",
  descripcion: "",
  imgFront: "",
  imgBack: ""
};

const productoSeleccionado = document.querySelectorAll(".card-item__link");
productoSeleccionado.forEach((productoSeleccionado,i) => {

    productoSeleccionado.addEventListener("click", () => {
        
        producto["nombre"] = nombres[i].textContent
        producto["categoria"] = categorias[i].textContent
        producto["precio"] = precios[i].textContent
        producto["descripcion"] = imagenBacks[i].getAttribute("alt")
        producto["imgFront"] = imagenFronts[i].getAttribute("src")
        producto["imgBack"] = imagenBacks[i].getAttribute("src")
        localStorage.setItem("selectProduct",JSON.stringify(producto))
        console.log(producto["descripcion"])
    })
});




// const nombresProductosShop = document.querySelectorAll(".card-item__name");


// console.log(nombresProductosShop);
// let nombreProductoShop = Array.from(nombresProductosShop)
// let nombresProductos
// nombresProductos = nombreProductoShop.map(producto => producto.textContent)

// productoSeleccionado.forEach((productoSeleccionado,i)=>{
//     productoSeleccionado.addEventListener('click',()=>{

//     })
// })

// console.log(nombresProductos);
// console.log(productoSeleccionado);