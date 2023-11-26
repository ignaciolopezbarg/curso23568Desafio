const express = require('express');
const app = express();

// Importa las rutas:
const mainRoutes = require('./src/routes/main.routes.js');
const adminRoutes = require('./src/routes/admin.routes.js');
const authRoutes = require('./src/routes/auth.routes.js');
const shopRoutes = require('./src/routes/shop.routes.js');

// Importa los controladores:
const mainControllers = require('./src/controllers/main.controller.js');

// Agrega este middleware para los archivos estáticos, públicos:
app.use(express.static('public'));

// Agrega los middlewares para las distintas rutas:
app.use('/', mainRoutes);
//app.use('/admin', adminRoutes);
//app.use('/auth', authRoutes);
app.use('/shop', shopRoutes);

const PORT = 3000;

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
