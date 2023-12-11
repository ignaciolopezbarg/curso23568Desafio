const path = require("path");

module.exports = {
  shop: (req, res) => {
    const data = [
      {
        product_id: 1,
        license_name: "Pokemon",
        category_name: "Figuras coleccionables",
        product_name: "Pidgeotto",
        product_description: "Figura coleccionable Pokemonn",
        product_price: 1799.99,
        dues: 10,
        product_sku: "PKM0 1001",
        img_front: "img/pokemon/pidgeotto-1.webp",
        img_back: "img/pokemon/pidgeotto-box.webp",
      },
      {
        product_id: 2,
        license_name: "Pokemon",
        category_name: "Figuras coleccionables",
        product_name: "Pidgeotto",
        product_description: "Figura coleccionable Pokemonn",
        product_price: 1799.99,
        dues: 10,
        product_sku: "PKM0 1001",
        img_front: "img/pokemon/pidgeotto-1.webp",
        img_back: "img/pokemon/pidgeotto-box.webp",
      },
      {
        product_id: 3,
        license_name: "Pokemon",
        category_name: "Figuras coleccionables",
        product_name: "Pidgeotto",
        product_description: "Figura coleccionable Pokemonn",
        product_price: 1799.99,
        dues: 10,
        product_sku: "PKM0 1001",
        img_front: "img/pokemon/pidgeotto-1.webp",
        img_back: "img/pokemon/pidgeotto-box.webp",
      },
      {
        product_id: 4,
        license_name: "Pokemon",
        category_name: "Figuras coleccionables",
        product_name: "Pidgeotto",
        product_description: "Figura coleccionable Pokemonn",
        product_price: 1799.99,
        dues: 10,
        product_sku: "PKM0 1001",
        img_front: "img/pokemon/pidgeotto-1.webp",
        img_back: "img/pokemon/pidgeotto-box.webp",
      },
      {
        product_id: 5,
        license_name: "Pokemon",
        category_name: "Figuras coleccionables",
        product_name: "Pidgeotto",
        product_description: "Figura coleccionable Pokemonn",
        product_price: 1799.99,
        dues: 10,
        product_sku: "PKM0 1001",
        img_front: "img/pokemon/pidgeotto-1.webp",
        img_back: "img/pokemon/pidgeotto-box.webp",
      },
      {
        product_id: 6,
        license_name: 'Pokemon',
        category_name: 'Figuras coleccionables',
        product_name: 'Pidgeotto',
        product_description: 'Figura coleccionable Pokemonn',
        product_price: 1799.99,
        dues: 10,
        product_sku: 'PKM0 1001',
        img_front: 'img/pokemon/pidgeotto-1.webp',
        img_back: 'img/pokemon/pidgeotto-box.webp'
      }
    ];
    res.render(path.resolve(__dirname, "../views/shop/shop.ejs"), {
      title: "Tienda",
      data,
    });
  },

  item: (req, res) => {
    res.render(path.resolve(__dirname, "../views/shop/item.ejs"), {
      title: "ITEM",
    });
  },
  addItem: (req, res) => {
    res.send("ruta para agregar nuevo item");
  },
  cart: (req, res) => {
    res.send("vista cart");
  },
  addToCart: (req, res) => res.send("ruta para agregar un item al carrito"),
};
