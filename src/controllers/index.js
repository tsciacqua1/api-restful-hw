const ProductsClass = require("../utils");
const ProdClass = new ProductsClass([]);

const getAllProducts = (req, res, next) => {
  try {
    const response = ProdClass.getAllProducts();
    res.status(200).json({ data: response });
  } catch (error) {
    next(error);
  }
};

const getProductById = (req, res, next) => {
  const { id } = req.params;
  try {
    const response = ProdClass.getProductById(id);
    return !response
      ? res.status(404).json({ error: "product not found" })
      : res.status(200).json({ data: response });
  } catch (error) {
    next(error);
  }
};

const createProduct = (req, res, next) => {
  const { title, price, thumbnail } = req.body;
  try {
    const response = ProdClass.createProduct({ title, price, thumbnail });
    res.status(200).json({ data: response });
  } catch (error) {
    next(error);
  }
};

const updateProduct = (req, res, next) => {
  try {
    const { title, price, thumbnail } = req.body;
    const response = ProdClass.updateProduct({ title, price, thumbnail });
    res.status(200).json({ data: response });
  } catch (error) {
    next(error);
  }
};

const deleteProduct = (req, res, next) => {
  const { id } = req.params;
  try {
    const response = ProdClass.deleteProduct(id);
    console.log(response);
    return !response
      ? res.status(404).json({ error: "product not found" })
      : res.status(200).json({ message: "product deleted successfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
