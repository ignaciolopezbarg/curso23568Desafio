const express = require ('express');
const app = express();

//importo las rutas:
const mainRoutes = require('./src/routes/main.routes.js');
const adminRoutes = require('./src/routes/admin.routes.js');
const authRoutes = require('./src/routes/auth.routes.js');
const shopRoutes = require('./src/routes/shop.routes.js');

//agregamos este middleware para los archivos estaticos, publicos:
app.use(express.static('public'));

//agregamos los middlewares para las distintas rutas:
app.use('/',mainRoutes);
app.use('/',adminRoutes);
app.use('/',authRoutes);
app.use('/',shopRoutes);

const PORT = 4000;

app.listen( PORT, ()=>console.log(`Server listening on port ${PORT}`));