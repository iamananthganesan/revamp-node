//IMPORTING THE EXPRESS
const express = require("express");
const { productsRouter } = require("./routes/products.route");
const { studentsRouter } = require("./routes/students.route");
//CREATING INSTANCE FOR EXPRESS
const app = express();
//CREATING A PORT FOR THE SERVER
const PORT = 3000;

//as middleware before your POST request handler. That will read the JSON body of the request, parse it and put it in req.body.
app.use(express.json());
//ITS A MIDDLEWARE IT HAS ROUTE AND CONTROLLER
//PRODUCT MANAGEMENT SYSTEM
app.use("/v1/api", productsRouter);

//STUDENTS MANAGEMENT SYSTEM
app.use("/v1/api", studentsRouter);

//CREATED NODE SERVER AND ITS UP & RUNNING IN PORT = 3000
app.listen(PORT, () => {
  console.log(`Server is running in ${PORT}`);
  ``;
});
