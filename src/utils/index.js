class ProductsClass {
  constructor(array) {
    this.array = array;
  }
  getAll = () => this.array;
  getById = (id) => this.array.find((el) => el.id === +id);
  deleteById = (id) => {
    //  no uso un splice para eliminar elementos para que no haya problemas con las ids
    //  luego al crear nuevos productos ya que estoy utilizando un array como formato de
    //  persistencia de memoria.
    const index = this.array.findIndex((el) => el.id === +id);
    if (index < 0) return false;
    this.array[id - 1] = {};
    return true;
  };
  new = (data) => {
    const id = this.array.length + 1;
    this.array.push({ ...data, id });
    return { ...data, id };
  };
  update = (id, data) => {
    const index = this.array.findIndex((el) => el.id === +id);
    if (index < 0) return false;
    this.array[index] = { ...data, id: +id };
    return true;
  };
}

module.exports = ProductsClass;
