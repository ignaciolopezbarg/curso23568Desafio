// (`product_id`, `product_name`, `product_description`, `price`, `stock`, `discount`, `sku`, `dues`, `image_front`, `image_back`, `licence_id`, `category_id`)
const productos = 
[
    {   
        product_id: "1",
        categoria: "STAR WARS",
        product_name: "BABY YODA BLUEBALL",
        product_description: "Figura coleccionable de Baby Yoda (Grogu) - The Mandalorian Saga, edición limitada.",
        product_price: "1799.99",
        product_stock: 8,
        product_discount: 10,
        product_sku: "STW001001",
        product_dues: 3,
        product_image_front: "star-wars/baby-yoda-1.webp",
        product_image_back: "star-wars/baby-yoda-box.webp",
        licence_id: 2,
        category_id: 1
    },
    {   
        product_id: "2",
        categoria: "STAR WARS",
        product_name: "LUKE SKYLWALKER & GROGU",
        product_description: "Figura coleccionable de Luke Skylwalker & Grogu - The Mandalorian Saga.",
        product_price: "2399.99",
        product_stock: 8,
        product_discount: 10,
        product_sku: "STW001002",
        product_dues: 3,
        product_image_front: "star-wars/luke-1.webp",
        product_image_back: "star-wars/luke-box.webp",
        licence_id: 2,
        category_id: 1
    },
    {   
        product_id: "3",
        categoria: "STAR WARS",
        product_name: "BOOBAFETH",
        product_description: "Figura coleccionable de Boobafeth - The Mandalorian Saga.",
        product_price: "2099.99",
        product_stock: 8,
        product_discount: 10,
        product_sku: "STW001003",
        product_dues: 3,
        product_image_front: "star-wars/bobbafeth-1.webp",
        product_image_back: "star-wars/bobbafeth-box.webp",
        licence_id: 2,
        category_id: 1
    },
    {   
        product_id: "4",
        categoria: "STAR WARS",
        product_name: "STORMTROOPER LIGHTSABER",
        product_description: "Figura coleccionable de Stormtrooper Lightsaber - Star Wars Saga.",
        product_price: "1799.99",
        product_stock: 8,
        product_discount: 10,
        product_sku: "STW001004",
        product_dues: 3,
        product_image_front: "star-wars/trooper-1.webp",
        product_image_back: "star-wars/trooper-box.webp",
        licence_id: 2,
        category_id: 1
    },
    {   
        product_id: "5",
        categoria: "POKEMON",
        product_name: "CHARMANDER SMILEY",
        product_description: "Figura coleccionable de Charmander - Pokemon Saga.",
        product_price: "1799.99",
        product_stock: 8,
        product_discount: 10,
        product_sku: "PKM001001",
        product_dues: 3,
        product_image_front:'pokemon/charmander-1.webp',
        product_image_back:  'pokemon/charmander-box.webp',
        licence_id: 1,
        category_id: 1
    },
    {   
        product_id: "6",
        categoria: "POKEMON",
        product_name: 'DRAGONITE HI!',
        product_description: 'Figura coleccionable de Dragonite - Pokemon Saga.',
        product_price: '1799.99',
        product_stock: 8,
        product_discount: 10,
        product_sku: "PKM001002",
        product_dues: 3,
        product_image_front: 'pokemon/dragonite-1.webp',
        product_image_back: 'pokemon/dragonite-box.webp',
        licence_id: 1,
        category_id: 1
    },
    {   
        product_id: "7",
        categoria: "POKEMON",
        product_name: 'PIDGEOTTO FLYING',
        product_description: 'Figura coleccionable de Pidgeotto - Pokemon Saga.',
        product_price: "1799.99",
        product_stock: 8,
        product_discount: 10,
        product_sku: 'PKM001004',
        product_dues: 3,
        product_image_front: 'pokemon/pidgeotto-1.webp',
        product_image_back: 'pokemon/pidgeotto-box.webp',
        licence_id: 1,
        category_id: 1
    },
    {   
        product_id: "8",
        categoria: "POKEMON",
        product_name: "PIKACHU SMILEY",
        product_description: 'Figura coleccionable de Pikachu - Pokemon Saga.',
        product_price: "1799.99",
        product_stock: 8,
        product_discount: 10,
        product_sku: "PKM001004",
        product_dues: 3,
        product_image_front: 'pokemon/pikachu-1.webp',
        product_image_back: 'pokemon/pikachu-box.webp',
        licence_id: 1,
        category_id: 1
    },
    {   
        product_id: "9",
        product_name: 'VULPIX FANCY',
        categoria: "POKEMON",
        product_description: "Figura coleccionable de Vulpix - Pokemon Saga.",
        product_price: "99.99",
        product_stock: 8,
        product_discount: 10,
        product_sku: "PKM001005",
        product_dues: 3,
        product_image_front: "pokemon/vulpix-1.webp",
        product_image_back: "pokemon/vulpix-box.webp",
        licence_id: 1,
        category_id: 1
    },
    {   
        product_id: "10",
        categoria: "HARRY POTTER",
        product_name: 'HARRY POTTER Y HEGWID',
        product_description: "Figura coleccionable de Harry Potter & Hegwid - Harry Potter Saga.",
        product_price: "1799.99",
        product_stock: 11,
        product_discount: 10,
        product_sku: "HPT001001",
        product_dues: 9,
        product_image_front: 'harry-potter/harry-1.webp',
        product_image_back: 'harry-potter/harry-box.webp',
        licence_id: 3,
        category_id: 1
    },
    {   
        product_id: "11",
        categoria: "HARRY POTTER",
        product_name: 'HERMINIONE BALL DRESS',
        product_description: 'Figura coleccionable de Herminione - Harry Potter Saga.',
        product_price: "1799.99",
        product_stock: 8,
        product_discount: 10,
        product_sku: "HPT001002",
        product_dues: 3,
        product_image_front: 'harry-potter/hermione-1.webp',
        product_image_back: 'harry-potter/hermione-box.webp',
        licence_id: 3,
        category_id: 1
    },
    {   
        product_id: "12",
        categoria: "HARRY POTTER",
        product_name: "LUNA LOVEGOOD LION MASK",
        product_description: "Figura coleccionable de Luna Lovegood - Harry Potter Saga.",
        product_price: "1799.99",
        product_stock: 8,
        product_discount: 10,
        product_sku: "HPT001003",
        product_dues: 3,
        product_image_front: 'harry-potter/luna-1.webp',
        product_image_back: 'harry-potter/luna-box.webp',
        licence_id: 3,
        category_id: 1
    },
    {   
        product_id: "13",
        categoria: "HARRY POTTER",
        product_name: "SNAPE PATRONUS",
        product_description: "Figura coleccionable de Luna Lovegood - Harry Potter Saga.",
        product_price: "1799.99",
        product_stock: 13,
        product_discount: 10,
        product_sku: "HPT001004",
        product_dues: 10,
        product_image_front: "harry-potter/snape-patronus-1.webp",
        product_image_back: "harry-potter/snape-patronus-box.webp",
        licence_id: 3,
        category_id: 1
    }
]


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