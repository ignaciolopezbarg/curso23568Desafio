const path = require("path");
const { getAll, getOne } = require("../models/product.model");

const json = [
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
    product_name: "Luke",
    product_description: "Figura coleccionable Pokemonn",
    product_price: 3799.99,
    dues: 5,
    product_sku: "PKM0 1002",
    img_front: "img/multimedia/star-wars/luke-1.webp",
    img_back: "img/multimedia/star-wars/luke-box.webp",
  },
  {
    product_id: 3,
    license_name: "Harry Potter",
    category_name: "Figuras coleccionables",
    product_name: "Hermione",
    product_description: "Figura coleccionable Harry Potter",
    product_price: 9799.99,
    dues: 3,
    product_sku: "PKM0 1003",
    img_front: "img/multimedia/harry-potter/hermione-1.webp",
    img_back: "img/multimedia/harry-potter/hermione-box.webp",
  },
  // {
  //   product_id: 4,
  //   license_name: "Pokemon",
  //   category_name: "Figuras coleccionables",
  //   product_name: "Pidgeotto",
  //   product_description: "Figura coleccionable Pokemonn",
  //   product_price: 1799.99,
  //   dues: 10,
  //   product_sku: "PKM0 1001",
  //   img_front: "img/pokemon/pidgeotto-1.webp",
  //   img_back: "img/pokemon/pidgeotto-box.webp",
  // },
  // {
  //   product_id: 5,
  //   license_name: "Pokemon",
  //   category_name: "Figuras coleccionables",
  //   product_name: "Pidgeotto",
  //   product_description: "Figura coleccionable Pokemonn",
  //   product_price: 1799.99,
  //   dues: 10,
  //   product_sku: "PKM0 1001",
  //   img_front: "img/pokemon/pidgeotto-1.webp",
  //   img_back: "img/pokemon/pidgeotto-box.webp",
  // },
  // {
  //   product_id: 6,
  //   license_name: "Pokemon",
  //   category_name: "Figuras coleccionables",
  //   product_name: "Pidgeotto",
  //   product_description: "Figura coleccionable Pokemonn",
  //   product_price: 1799.99,
  //   dues: 10,
  //   product_sku: "PKM0 1001",
  //   img_front: "img/pokemon/pidgeotto-1.webp",
  //   img_back: "img/pokemon/pidgeotto-box.webp",
  // },
  // {
  //   product_id: 7,
  //   license_name: "Pokemon",
  //   category_name: "Figuras coleccionables",
  //   product_name: "Pidgeotto",
  //   product_description: "Figura coleccionable Pokemonn",
  //   product_price: 1799.99,
  //   dues: 10,
  //   product_sku: "PKM0 1001",
  //   img_front: "img/pokemon/pidgeotto-1.webp",
  //   img_back: "img/pokemon/pidgeotto-box.webp",
  // },
  // {
  //   product_id: 8,
  //   license_name: "Pokemon",
  //   category_name: "Figuras coleccionables",
  //   product_name: "Pidgeotto",
  //   product_description: "Figura coleccionable Pokemonn",
  //   product_price: 1799.99,
  //   dues: 10,
  //   product_sku: "PKM0 1001",
  //   img_front: "img/pokemon/pidgeotto-1.webp",
  //   img_back: "img/pokemon/pidgeotto-box.webp",
  // },
  // {
  //   product_id: 9,
  //   license_name: "Pokemon",
  //   category_name: "Figuras coleccionables",
  //   product_name: "Pidgeotto",
  //   product_description: "Figura coleccionable Pokemonn",
  //   product_price: 1799.99,
  //   dues: 10,
  //   product_sku: "PKM0 1001",
  //   img_front: "img/pokemon/pidgeotto-1.webp",
  //   img_back: "img/pokemon/pidgeotto-box.webp",
  // },
];
//en res.render, va una una ruta y luego lo que le colocamos a los archivos ejs, inventamos el objeto data, pero luego renderizamos desde la db, por eso inyectamos la ruta , db, y title del head
module.exports = {
  shop: async (req, res) => {
    const data = await getAll();

    //console.log(dbdata);

    res.render(path.resolve(__dirname, "../views/shop/shop.ejs"), {
      title: "Tienda",
      data,
    });
  },

  item: async (req, res) => {
    const itemId = req.params.id;
    const [ item ] = await getOne(itemId);
    res.render(path.resolve(__dirname, "../views/shop/item.ejs"), {
      title: "Item",
      item,
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
