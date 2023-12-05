const product = JSON.parse(localStorage.getItem("selectProduct")) || []

const itemContainer = document.querySelector(".item")

console.log(itemContainer)

function itemGenerator(){
    return itemContainer.innerHTML = `
    <picture class="item__card">
        <img class="item__card-front" src="${product.imgFront}" alt="Figura coleccionable de la serie The Mandolarian"/>
        <img class="item__card-back" src="${product.imgBack}" alt="Figura coleccionable de la serie The Mandolarian"/>
    </picture>
    <article class="item__info">
        <p class="item__info--license">${product.categoria}</p>
        <h3 class="item__info--name">${product.nombre}</h3>
        <p class="item__info--description"> ${product.descripcion}</p>
    <p class="item__info--price">${product.precio}</p>
    <div class="item__cart">
      <button id="subtract" class="item__quantity" type="button">-</button>
      <input class="item__input" type="text" placeholder="0" name="quantity" id="quantity">
      <button id="add" class="item__quantity" type="button">+</button>
      <button class="item__agregate" type="submit" id="addToCartBtn">Agregar al carrito</button>
    </div>
    <p class="item__promo">
      <a href="#">Ver metodos de pago</a> - 3 CUOTAS SIN INTERES
    </p>
    `
};

itemGenerator();
