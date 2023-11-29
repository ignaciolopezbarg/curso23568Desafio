const nombre = document.querySelector(".item__info--name").textContent;
const categoria = document.querySelector(".item__info--license").textContent;
const $precioElement = document.querySelector(".item__info--price")
const precio = parseFloat($precioElement.textContent.replace(/[^\d,.]/g, '')); 
const imagenFrontal = document.querySelector(".item__card-front") 
const imagenTrasera = document.querySelector(".item__card-back") 

const frontImg = imagenFrontal.getAttribute("src")
const backImg = imagenFrontal.getAttribute("src")

const item =
[
  {
    nombre: "nombre"
  }
]

// const item =
// {
//   items: cartElements,
//   nombre: nombre, 
//   categoria: categoria, 
//   precio: precio,
//   imgFront: frontImg,
//   imgBack: backImg
// };