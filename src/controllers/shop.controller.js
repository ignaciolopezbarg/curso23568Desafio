
const path = require("path");
const json = 
[
    {   
        product_id: "1",
        license_name: "STAR WARS",
        category_name: "Figuras coleccionables",
        product_name: "BABY YODA BLUEBALL",
        product_description: "Figura coleccionable de Baby Yoda (Grogu) - The Mandalorian Saga, edición limitada.",
        product_price: "1799.99",
        product_sku: "STW001001",
        dues: 3,
        img_front: "img/multimedia/star-wars/baby-yoda-1.webp",
        img_back: "img/multimedia/star-wars/baby-yoda-box.webp",
    },
    {   
        product_id: "2",
        license_name: "STAR WARS",
        category_name: "Figuras coleccionables",
        product_name: "LUKE SKYLWALKER & GROGU",
        product_description: "Figura coleccionable de Luke Skylwalker & Grogu - The Mandalorian Saga.",
        product_price: "2399.99",
        product_sku: "STW001002",
        dues: 3,
        img_front: "img/multimedia/star-wars/luke-1.webp",
        img_back: "img/multimedia/star-wars/luke-box.webp",
    },
    {   
        product_id: "3",
        license_name: "STAR WARS",
        category_name: "Figuras coleccionables",
        product_name: "BOOBAFETH",
        product_description: "Figura coleccionable de Boobafeth - The Mandalorian Saga.",
        product_price: "2099.99",
        product_sku: "STW001003",
        dues: 3,
        img_front: "img/multimedia/star-wars/bobbafeth-1.webp",
        img_back: "img/multimedia/star-wars/bobbafeth-box.webp",
    },
    {   
        product_id: "4",
        license_name: "STAR WARS",
        category_name: "Figuras coleccionables",
        product_name: "STORMTROOPER LIGHTSABER",
        product_description: "Figura coleccionable de Stormtrooper Lightsaber - Star Wars Saga.",
        product_price: "1799.99",
        product_sku: "STW001004",
        dues: 3,
        img_front: "img/multimedia/star-wars/trooper-1.webp",
        img_back: "img/multimedia/star-wars/trooper-box.webp",
    },
    {   
        product_id: "5",
        license_name: "POKEMON",
        category_name: "Figuras coleccionables",
        product_name: "CHARMANDER SMILEY",
        product_description: "Figura coleccionable de Charmander - Pokemon Saga.",
        product_price: "1799.99",
        product_sku: "PKM001001",
        dues: 3,
        img_front:'img/multimedia/pokemon/charmander-1.webp',
        img_back:  'img/multimedia/pokemon/charmander-box.webp',
    },
    {   
        product_id: "6",
        license_name: "POKEMON",
        category_name: "Figuras coleccionables",
        product_name: 'DRAGONITE HI!',
        product_description: 'Figura coleccionable de Dragonite - Pokemon Saga.',
        product_price: '1799.99',
        product_sku: "PKM001002",
        dues: 3,
        img_front: 'img/multimedia/pokemon/dragonite-1.webp',
        img_back: 'img/multimedia/pokemon/dragonite-box.webp',
    },
    {   
        product_id: "7",
        license_name: "POKEMON",
        category_name: "Figuras coleccionables",
        product_name: 'PIDGEOTTO FLYING',
        product_description: 'Figura coleccionable de Pidgeotto - Pokemon Saga.',
        product_price: "1799.99",
        product_sku: 'PKM001004',
        dues: 3,
        img_front: 'img/multimedia/pokemon/pidgeotto-1.webp',
        img_back: 'img/multimedia/pokemon/pidgeotto-box.webp',
    },
    {   
        product_id: "8",
        license_name: "POKEMON",
        category_name: "Figuras coleccionables",
        product_name: "PIKACHU SMILEY",
        product_description: 'Figura coleccionable de Pikachu - Pokemon Saga.',
        product_price: "1799.99",
        product_sku: "PKM001004",
        dues: 3,
        img_front: 'img/multimedia/pokemon/pikachu-1.webp',
        img_back: 'img/multimedia/pokemon/pikachu-box.webp',
    },
    {   
        product_id: "9",
        category_name: "Figuras coleccionables",
        product_name: 'VULPIX FANCY',
        license_name: "POKEMON",
        product_description: "Figura coleccionable de Vulpix - Pokemon Saga.",
        product_price: "99.99",
        product_sku: "PKM001005",
        dues: 3,
        img_front: "img/multimedia/pokemon/vulpix-1.webp",
        img_back: "img/multimedia/pokemon/vulpix-box.webp",
    },
    {   
        product_id: "10",
        license_name: "HARRY POTTER",
        category_name: "Figuras coleccionables",
        product_name: 'HARRY POTTER Y HEGWID',
        product_description: "Figura coleccionable de Harry Potter & Hegwid - Harry Potter Saga.",
        product_price: "1799.99",
        product_stock: 11,
        product_sku: "HPT001001",
        dues: 9,
        img_front: 'img/multimedia/harry-potter/harry-1.webp',
        img_back: 'img/multimedia/harry-potter/harry-box.webp',
    },
    {   
        product_id: "11",
        license_name: "HARRY POTTER",
        category_name: "Figuras coleccionables",
        product_name: 'HERMINIONE BALL DRESS',
        product_description: 'Figura coleccionable de Herminione - Harry Potter Saga.',
        product_price: "1799.99",
        product_sku: "HPT001002",
        dues: 3,
        img_front: 'img/multimedia/harry-potter/hermione-1.webp',
        img_back: 'img/multimedia/harry-potter/hermione-box.webp',
    },
    {   
        product_id: "12",
        license_name: "HARRY POTTER",
        category_name: "Figuras coleccionables",
        product_name: "LUNA LOVEGOOD LION MASK",
        product_description: "Figura coleccionable de Luna Lovegood - Harry Potter Saga.",
        product_price: "1799.99",
        product_stock: 8,
        product_sku: "HPT001003",
        dues: 3,
        img_front: 'img/multimedia/harry-potter/luna-1.webp',
        img_back: 'img/multimedia/harry-potter/luna-box.webp',
    },
    {   
        product_id: "13",
        license_name: "HARRY POTTER",
        category_name: "Figuras coleccionables",
        product_name: "SNAPE PATRONUS",
        product_description: "Figura coleccionable de Snape Patronus - Harry Potter Saga.",
        product_price: "1799.99",
        product_sku: "HPT001004",
        dues: 10,
        img_front: "img/multimedia/harry-potter/snape-patronus-1.webp",
        img_back: "img/multimedia/harry-potter/snape-patronus-box.webp",
    }
]
module.exports = {
  shop: async (req, res) => {
    const data = await getAll();

    //console.log(dbdata);

    res.render(path.resolve(__dirname, "../views/shop/shop.ejs"), {
      title: "Tienda",
      data,
    });
   console.log(__dirname)
  },

  item: async (req, res) => {
    const itemId = req.params.id;
    const [ item ] = await getOne(itemId);

    const indice1 = Math.floor(Math.random() * data.length);
    const indice2 = Math.floor(Math.random() * data.length);
    const indice3 = Math.floor(Math.random() * data.length);

    const itemsGlide = [ json[indice1], json[indice2],json[indice3]]
    console.log(item)
    console.log(__dirname)
    res.render(path.resolve(__dirname, "../views/shop/item.ejs"), {
      title: "Item",
      item,
      itemsGlide
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
