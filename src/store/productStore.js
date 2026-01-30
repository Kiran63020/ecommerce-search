const products = new Map();

function addProduct(product) {
  products.set(product.productId, product);
}

function getAllProducts() {
  return Array.from(products.values());
}

module.exports = { addProduct, getAllProducts, products };
