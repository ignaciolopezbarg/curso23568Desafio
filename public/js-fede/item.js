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

const item = 
{
  items: cartElements.textContent,
  nombre: nombre, 
  categoria: categoria, 
  precio: precio,
  imgFront: frontImg,
  imgBack: backImg
};
// JSON.parse(localStorage.getItem("data")) || []
add.addEventListener("click", () => {
  // let elementoSeleccionado = item.nombre
  // console.log(elementoSeleccionado)
  quantity.value = Number(quantity.value) + 1
  console.log("incrementar")
});

subtract.addEventListener("click", () => {
  if (quantity.value <= 0) {
    quantity.value = 0;
  } else {
    quantity.value = Number(quantity.value) - 1;
  }
  console.log("decrementar")
});

agregarBtn.addEventListener("click", () => {
  item.items = quantity.value // actualiza el valor total de ese item en localstorage
  cartElements.textContent = quantity.value // actualiza el valor del total del carrito
  localStorage.setItem("data",JSON.stringify(item))
  console.log(item.items)
  console.log(item)
});
// console.log(frontImg)
// console.log(backImg)
// console.log(nombre)
// console.log(categoria)
// console.log(precio)
