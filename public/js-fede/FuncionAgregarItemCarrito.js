const botonAgregarCarrito = document.querySelector('.item__agregate');

botonAgregarCarrito.addEventListener("click", (e) => {

    const nombreProducto = document.querySelector(".item__info--name").textContent;
    const categoriaProducto = document.querySelector(".item__info--license").textContent;
    const $precioElement = document.querySelector(".item__info--price");
    let precioProducto;
    precioProducto = parseFloat($precioElement.textContent.replace(/[^\d,.]/g, ''));

    const nuevoProducto = document.createElement('ARTICLE');
    const carritoContenido = document.querySelector('.cart__items');
    console.log(nombreProducto)
    console.log(categoriaProducto)
    console.log(precioProducto)
    
    nuevoProducto.className = 'cart__item position container-shadow';
    nuevoProducto.innerHTML = `
    <div class="cart__product">
    <picture class="cart__product-img">
    <img src="/assets/img/star-wars/baby-yoda-1.webp" alt="item-image" class="cart__img">
    </picture>
    <div class="cart__product-detail">
    <h2 class="cart__product-title">${localStorage.getItem("nombre")}</h2>
    <p class="cart__product-text">${categoriaProducto}</p>
    <div class="cart__product-container-price" >
    <p class="cart__product-price-text">precio: $</p>
    <p class="cart__product-price">${precioProducto}</p>
    </div>
    </div>
    
    </div>
    
    <div class="cart__quantity position-quantity">
    <div class="cart__quantity-btns">
    <input type="number" placeholder="1" value="1" min="1" name="" class="cart__number-quantity">
    <div class="cart__btn-quantity">
    <i class="fa-solid fa-plus bottom-decrease-increase"></i>
    <i class="fa-solid fa-minus bottom-decrease-increase"></i>
    </div>
    </div>
    
    </div>
    
    <div class="cart__price">
    <span>Total: $</span>
    <p class="cart__price-total" >${precioProducto}</p>
    </div>
    
    <div class="cart__delete-icon">
    <i class="fa-solid fa-trash "></i>
    </div>
    `;
    console.log(nuevoProducto.innerHTML)
    
    carritoContenido.appendChild(nuevoProducto)
    
});
