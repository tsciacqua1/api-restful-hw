const ProductsClass = require("../utils");
const ProdClass = new ProductsClass([]);

const getAllProducts = (req, res) => {
  const response = ProdClass.getAll();
  res.status(200).json({ data: response });
};

const getProductById = (req, res) => {
  const { id } = req.params;
  const response = ProdClass.getById(id);
  return !response
    ? res.status(404).json({ error: "product not found" })
    : res.status(200).json({ data: response });
};

const createProduct = (req, res) => {
  const { title, price, thumbnail } = req.body;
  const response = ProdClass.new({ title, price, thumbnail });
  res.status(200).json({ data: response });
};

const updateProduct = (req, res) => {
  const { id } = req.params;
  const { title, price, thumbnail } = req.body;
  const response = ProdClass.update(id, { title, price, thumbnail });
  return !response
    ? res.status(404).json({ error: "product not found" })
    : res.status(200).json({ message: "product updated successfully" });
};

const deleteProduct = (req, res) => {
  const { id } = req.params;
  const response = ProdClass.deleteById(id);
  return !response
    ? res.status(404).json({ error: "product not found" })
    : res.status(200).json({ message: "product deleted successfully" });
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
