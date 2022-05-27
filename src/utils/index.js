class ProductsClass {
  constructor(array) {
    this.array = array;
  }
  getAllProducts = () => {
    return this.array;
  };
  getProductById = (id) => {
    return this.array.find((el) => el.id === id);
  };
  createProduct = (data) => {
    const id = this.array.length + 1;
    this.array.push({ ...data, id });
    return { ...data, id };
  };
  updateProduct = (id, data) => {
    const index = this.array.findIndex((el) => el.id === id);
    if (index < 0) this.createProduct(data);
    this.array[index] = { ...data, id };
  };
  deleteProduct = (id) => {
    const index = this.array.findIndex((el) => el.id === id);
    if (index > -1) {
      this.array.splice(index, 1);
      return true;
    }
    return false;
  };
}

module.exports = ProductsClass;
