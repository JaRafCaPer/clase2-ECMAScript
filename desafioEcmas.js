class ProductManager {
    constructor() {
      this.products = [];
    }
    // Creamos el metodo addProducts. Aqui creamos cada producto, en base a la informacion recibida por el manager. Verificando que no se repitan y que todos los campos existan.
    addProduct(title, description, price, thumbnail, code, stock) {
      if (!this.codeDuplicado(code)) {
        console.log("Error: Ya existe otro producto con ese codigo!");
        return;
      }
  
      if (this.camposVacios(title, description, price, thumbnail, code, stock)) {
        console.log("Error: Verifique que no hay campos vacios");
        return;
      }
  
      const productId = this.products.length + 1;
      const product = {
        id: productId,
        title: title,
        description: description,
        price: price,
        thumbnail: thumbnail,
        code: code,
        stock: stock
      };
      this.products.push(product);
    }
    
     //Metodo para verificar que el code no este duplicado
     codeDuplicado(code) {
      for (const product of this.products) {
        if (product.code === code) {
          return false;
        }
      }
      return true;
    }
    //Metodo para asegurarse que no ingresen productos con campos vacios
    camposVacios(...fields) {
      return fields.some(field => !field);
    }
    getProducts() {
      return this.products;
    }
  
    getProductById(productId) {
      for (const product of this.products) {
        if (product.id === productId) {
          return "Este es la informacion del producto solicitado: "+ JSON.stringify(product);
        }
      }
      console.log("Not found: Producto no existe");
    }
   
  }
  

  // Creamos el Manager de productos
const manager = new ProductManager();

// Agregamos una lista de productos
manager.addProduct("Producto 1", "Descripción del producto", 10.99, "imagen1.jpg", "P1", 5);
manager.addProduct("Producto 2", "Descripción del producto", 19.99, "imagen2.jpg", "P2", 12);
manager.addProduct("Producto 3", "Descripción del producto", 13.99, "imagen3.jpg", "P3", 8);
manager.addProduct("Producto 4", "Descripción del producto", 15.99, "imagen4.jpg", "P4", 14);
manager.addProduct("Producto 5", "Descripción del producto", 12.99, "imagen5.jpg", "P5", 6);
manager.addProduct("Producto 6", "Descripción del producto", 1.99, "imagen6.jpg", "P6", 16);
manager.addProduct("Producto 7 ", "Descripción del producto", 18.99, "imagen7.jpg", "P7", 19);
manager.addProduct("Producto 8", "Descripción del producto", 11.99, "imagen8.jpg", "P8", 9);
manager.addProduct("Producto 9", "Descripción del producto", 122.99, "imagen9.jpg", 99);
manager.addProduct("Producto 10", "Descripción del producto", 110.99, "imagen10.jpg","P8", 99);


const products = manager.getProducts();
console.log(products);

// Obtener producto por ID
const product = manager.getProductById(6);
console.log(product);


// Buscar producto por ID inexistente
manager.getProductById(9);

