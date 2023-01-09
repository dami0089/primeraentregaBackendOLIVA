class productManager {
  //declaro el constructor
  constructor() {
    this.products = [];
  }
  //Este es el metodo para listar todos los productos
  getProducts() {
    return console.log(this.products);
  }
  //Este es el metodo para agregar los productos, con el id que se autoincrementa dependiendo el largo del objeto products
  addProduct(title, description, price, thumbnail, code, stock) {
    const products = {
      id: this.id(),
      title,
      description,
      price,
      code,
      thumbnail,
      stock,
    };
    this.products.push(products);
  }
  //Este metodo comprueba que el code del producto no exista ya dentro del arreglo products.

  comprobador(title, description, price, thumbnail, code, stock) {
    const comprobador = this.products.find((product) => product.code === code);
    if (comprobador) {
      console.log("Este producto ya existe");
    } else {
      this.addProduct(title, description, price, thumbnail, code, stock);
    }
  }
  //este metodo sirve para listar los productos por id. si existe te lo muestra y sino te arroja un mensaje de que no existe.
  getProductsById = (id) => {
    const existe = this.evaluarProd(id);

    if (existe) {
      for (const a in this.products) {
        if (this.products[a].id === id) {
          console.log("El producto consultado es el: \n");
          console.log(this.products[a]);
        }
      }
    } else {
      console.log("el producto no existe");
    }
  };
  //Este metodo evalua el id del producto para saber si ya existe o no
  evaluarProd(idProd) {
    return this.products.find((product) => product.id === idProd);
  }
  //este metodo genera el id dinamicamente
  id() {
    let ids = 1;
    if (this.products.length === 0) {
      ids = 1;
    } else {
      ids = this.products[this.products.length - 1].id + 1;
    }
    return ids;
  }
}

const productManager1 = new productManager();

//ACA CREAMOS LOS PRODUCTOS
productManager1.comprobador(
  "Producto de prueba",
  "Descripcion de un producto de prueba",
  124,
  "no image",
  1,
  255
);
productManager1.comprobador(
  "Producto de prueba2",
  "222Descripcion de un producto de prueba2",
  122,
  "no image",
  2,
  256
);
productManager1.comprobador(
  "333Producto de prueba",
  "333Descripcion de un producto de prueba",
  124,
  "no image",
  3,
  255
);
productManager1.comprobador(
  "444Producto de prueba2",
  "444Descripcion de un producto de prueba2",
  122,
  "no image",
  4,
  256
);
//ACA CREO UN PRODUCTO QUE YA ESTA REPETIDO PARA QUE APAREZCA EN CONSOLA QUE EL CODIGO YA FUE DADO DE ALTA ANTES

console.log(
  "-----------------CARGO UN PRODUCTO QUE YA EXISTE Y ESTE ES EL MENSAJE: -----------------"
);
productManager1.comprobador(
  "Producto de prueba33",
  "33Descripcion de un producto de prueba",
  124,
  "no image",
  1,
  257
);
console.log(
  "----------------- Llamo al metodo get products by id y me muestra el producto que existe: "
);
productManager1.getProductsById(1);
console.log(
  "-----------------Llamo al metodo getproductsbyid con un id que no existe para que me arroje el resultado ese: "
);
productManager1.getProductsById(100);

console.log(
  "-----------------Aca listamos todos los produtos: -----------------"
);

productManager1.getProducts();
