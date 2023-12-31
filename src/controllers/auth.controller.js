const path = require("path");
module.exports = {
  login: (req, res) =>
    res.render(path.resolve(__dirname, "../views/auth/login.ejs"), {
      title: "Login",
    }),
  doLogin: (req, res) => res.send("Ruta que valida los datos del Login"),
  register: (req, res) =>
    res.render(path.resolve(__dirname, "../views/auth/register.ejs"), {
      title: "Registro",
    }),
  doRegister: (req, res) => res.send("Ruta que crea un nuevo usuario"),
};
