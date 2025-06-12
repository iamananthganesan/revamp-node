//PRODUCTS LIST
let products = [
  {
    id: 1,
    title: "Sun glass",
    description: "Sun glass for unisex",
  },
];

//GET PRODUCT LIST
const getProductList = (req, res) => {
  try {
    res.status(200).json({
      productlist: products,
    });
  } catch (error) {
    res.status.json({ message: "Something went wrong", error });
  }
};

//POST ADD PRODUCT
const addProduct = (req, res) => {
  try {
    const requestBody = req?.body;
    products = [...products, requestBody];
    console.log("products", products);
    res.status(201).json(products);
  } catch (error) {
    res.status(500).json({
      message: "something went wrong",
      error,
    });
  }
};

module.exports = {
  getProductList,
  addProduct,
};
