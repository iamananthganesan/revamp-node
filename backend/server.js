//IMPORTING THE EXPRESS
const express = require("express");
const { productsRouter } = require("./routes/products.route");
//CREATING INSTANCE FOR EXPRESS
const app = express();
//CREATING A PORT FOR THE SERVER
const PORT = 3000;

//as middleware before your POST request handler. That will read the JSON body of the request, parse it and put it in req.body.
app.use(express.json());
//ITS A MIDDLEWARE IT HAS ROUTE AND CONTROLLER
app.use("/v1/api/", productsRouter);

//CREATED NODE SERVER AND ITS UP & RUNNING IN PORT = 3000
app.listen(PORT, () => {
  console.log(`Server is running in ${PORT}`);
  ``;
});
