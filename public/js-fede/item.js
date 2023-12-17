const subtract = document.querySelector("#subtract");
const add = document.querySelector("#add");
const quantity = document.querySelector("#quantity");
const cartElements= document.querySelector(".navbar__item-cart")
const agregarBtn = document.querySelector(".item__agregate")




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
    if(quantity.value!=0){
      cartElements.textContent = parseInt(cartElements.textContent) + 1
    }
  });
  
});
