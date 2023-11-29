document.addEventListener("DOMContentLoaded", function () {
  var glide = new Glide(".glide", {
    type: "carousel",
    startAt: 0,
    perView: 3,
    gap: 30,
    breakpoints: {
      991: {
        perView: 2,
      },
      768: {
        perView: 3, // Corregí aquí "perview" a "perView"
      },
    },
  }).mount();

  // Agregar eventos de clic a las imágenes del carrusel
  var images = document.querySelectorAll(".card-item__img--front");
  var itemInfoImage = document.querySelector(".item__card-front");

  images.forEach(function (image, index) {
    image.addEventListener("click", function () {
      // Obtener la URL de la imagen clickeada
      var imageUrl = image.getAttribute("src");

      // Mostrar la imagen en el área de información del artículo
      itemInfoImage.setAttribute("src", imageUrl);

      // Cambiar al elemento correspondiente en el carrusel
      glide.go(`=${index}`);
    });
  });
});

