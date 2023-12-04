const express = require("express");

const app = express();

const mainRoutes = require("./src/routes/main.routes.js");
const shopRoutes = require("./src/routes/shop.routes.js");
const authRoutes = require("./src/routes/auth.routes.js");

app.use(express.static("public"));

//las rutas siguientes no se usan en el proyecto, son solo para ir probando el servidor
//app.get('/home', (req,res) => res.sendFile(__dirname + 'public/inicio.html'));
//app.get('/ping', (req,res) => res.send('pong'));

//si colocamos app. se nos despliegan todos los metodos disponibles para la app, que nos provee express

// Importa los controladores:
//const mainControllers = require('./src/controllers/main.controller.js');
// Agrega los middlewares para parsear el cuerpo de las solicitudes:
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Agrega los middlewares para las distintas rutas:
app.use("/", mainRoutes);
app.use("/shop", shopRoutes);
//app.use('/auth', authRoutes);

const PORT = process.env.DBPORT || 3305;

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));

//en la terminal nodemon run dev
