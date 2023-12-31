const item = JSON.parse(localStorage.getItem("productosEnCarrito")) || []

const contenedorCarrito = document.querySelector(".cart__items")

const itemsAgregados = document.querySelector(".cart__resumen-numbers-amount")

const subtotalItemsCarrito = document.querySelector(".cart__resumen-numbers-subtotal-value")

const elementoVacio = document.querySelector(".cart__item-empty-text");

let productoCarrito = document.createElement('ARTICLE')

function generarCarrito() {
    if (item.length > 0) {
      elementoVacio.style.display = "none";
  
      item.forEach((x) => {
        let productoCarrito = document.createElement('ARTICLE');
        productoCarrito.className = 'cart__item position container-shadow';
  
        productoCarrito.innerHTML = `
          <div class="cart__product">
            <picture class="cart__product-img">
              <img src="${x.imgFront}" alt="item-image" class="cart__img">
            </picture>
            <div class="cart__product-detail">
              <h2 class="cart__product-title">${x.nombre}</h2>
              <p class="cart__product-text">${x.categoria}</p>
              <div class="cart__product-container-price">
                <p class="cart__product-price-text">precio: $</p>
                <p class="cart__product-price">${x.precio}</p>
              </div>
            </div>
          </div>
  
          <div class="cart__quantity position-quantity">
            <div class="cart__quantity-btns">
              <input type="number" placeholder="1" value="${x.items}" min="1" name="" class="cart__number-quantity">
              <div class="cart__btn-quantity">
                <i class="fa-solid fa-plus bottom-decrease-increase"></i>
                <i class="fa-solid fa-minus bottom-decrease-increase"></i>
              </div>
            </div>
          </div>
  
          <div class="cart__price">
            <span>Total: $</span>
            <p class="cart__price-total" >${(x.precio * x.items).toFixed(2)}</p>
          </div>
  
          <div class="cart__delete-icon">
            <i class="fa-solid fa-trash "></i>
          </div>
        `;
  
        contenedorCarrito.append(productoCarrito);
        itemsAgregados.textContent = parseInt(itemsAgregados.textContent ) + parseInt(x.items) ;
        subtotalItemsCarrito.textContent = (parseFloat(subtotalItemsCarrito.textContent) + parseFloat(x.precio * x.items)).toFixed(2);
      });
    } else {
      elementoVacio.style.display = "block";
    }
  }
  

generarCarrito();