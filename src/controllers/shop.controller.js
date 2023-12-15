const path = require("path");
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
    img_front: "img/multimedia/pokemon/pidgeotto-1.webp",
    img_back: "img/multimedia/pokemon/pidgeotto-box.webp",
  },
  {
    product_id: 2,
    license_name: "Star Wars",
    category_name: "Figuras coleccionables",
    product_name:"Luke",
    product_description: "Figura coleccionable Pokemonn",
    product_price: 3799.99,
    dues: 5,
    product_sku: "PKM0 1002",
    img_front: "img/multimedia/star-wars/luke-1.webp",
    img_back: "img/multimedia/star-wars/luke-box.webp",
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
    product_id: 7,
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
    product_id: 8,
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
    product_id: 9,
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

];

module.exports = {
  shop: (req, res) => {
    
    res.render(path.resolve(__dirname, "../views/shop/shop.ejs"), {
      title: "Tienda",
      data,
    });
  },

  item: (req, res) => {
    const itemId = req.params.id;
    const item = data.find(item => item.product_id == itemId);
    res.render(path.resolve(__dirname, "../views/shop/item.ejs"), {
      title: "Item",
      item
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
