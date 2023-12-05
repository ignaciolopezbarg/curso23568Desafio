const subtract = document.querySelector("#subtract");
const add = document.querySelector("#add");
const quantity = document.querySelector("#quantity");
const cartElements= document.querySelector(".navbar__item-cart")
const agregarBtn = document.querySelector(".item__agregate")

const nombre = document.querySelector(".item__info--name").textContent;
const categoria = document.querySelector(".item__info--license").textContent;
const $precioElement = document.querySelector(".item__info--price")
const precio = parseFloat($precioElement.textContent.replace(/[^\d,.]/g, '')); 
const imagenFrontal = document.querySelector(".item__card-front") 
const imagenTrasera = document.querySelector(".item__card-back") 
const frontImg = imagenFrontal.getAttribute("src")
const backImg = imagenFrontal.getAttribute("src")
// se crea un objeto para guardar datos del item que despues se cargan en el localStorage
const item = 
{
  items: cartElements.textContent,
  nombre: nombre, 
  categoria: categoria, 
  precio: precio,
  imgFront: frontImg,
  imgBack: backImg
};

//guardo en una variable producto el objeto guardado en "data" del localStorage 
let producto = JSON.parse(localStorage.getItem("data")) || { items: "0" };

// condicion para ver si hay guardado en localStorage Items de ese producto (que se carga al apretar el boton agregar al carrito)
if(producto.items){
  cartElements.textContent = parseInt(producto.items) // pone el numero guardado de items en el cartel rojo del carrito
  quantity.value = producto.items // pone el numero guardado de items en el input 
}else{
  cartElements.textContent = "0";
}

document.addEventListener("DOMContentLoaded", function () {
  //funcionalidad de boton al apretar el +
  add.addEventListener("click", () => {
    
    quantity.value = Number(quantity.value) + 1
  });
  //funcionalidad de boton al apretar el -
  subtract.addEventListener("click", () => {
    if (quantity.value <= 0) {
      quantity.value = 0;
    } else {
      quantity.value = Number(quantity.value) - 1;
    }
  });
  //funcionalidad de boton al agregar producto
  agregarBtn.addEventListener("click", () => {
    item.items = quantity.value // actualiza el valor total de ese item en localstorage
    cartElements.textContent = quantity.value // actualiza el valor del total del carrito
    localStorage.setItem("data",JSON.stringify(item)) // guarda un nuevo objeto con la key "data" en localStorage
    console.log(precio)
  });
  
});


