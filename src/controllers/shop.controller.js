const shopControllers ={
    home:(req,res)=> res.send("route for shop view"),
    cart:(req, res) => res.send("Route for Cart View"),
    cart: (req, res) => res.send("Route for checkout page")
};

module.exports = shopControllers;