const Product = require("../src/models/product");
const { addProduct } = require("../src/store/productStore");
const { indexProduct } = require("../src/index/invertedIndex");

function loadProducts() {
  let productId = 100;

  const colors = ["black", "white", "red", "blue"];
  const storageOptions = ["64GB", "128GB", "256GB"];

  for (let model = 11; model <= 17; model++) {
    for (let i = 0; i < 150; i++) {
      const product = new Product({
        productId: productId,
        title: `Iphone ${model}`,
        description: `Apple iPhone ${model} smartphone`,
        brand: "Apple",
        category: "PHONE",
        rating: Number((Math.random() * (4.8 - 3.5) + 3.5).toFixed(1)),
        totalRatings: Math.floor(Math.random() * 5000 + 100),
        unitsSold: Math.floor(Math.random() * 50000 + 100),
        stock: Math.floor(Math.random() * 300),
        price: Math.floor(Math.random() * 40000 + 30000),
        mrp: Math.floor(Math.random() * 50000 + 35000),
        currency: "Rupee",
        metadata: {
          model: `Iphone ${model}`,
          storage: storageOptions[Math.floor(Math.random() * storageOptions.length)],
          color: colors[Math.floor(Math.random() * colors.length)]
        }
      });

      addProduct(product);
      indexProduct(product);
      productId++;
    }
  }

  for (let i = 0; i < 300; i++) {
    const product = new Product({
      productId: productId,
      title: "Iphone Mobile Cover",
      description: "Shockproof iPhone back cover",
      brand: "Generic",
      category: "ACCESSORY",
      rating: Number((Math.random() * (4.5 - 3.0) + 3.0).toFixed(1)),
      totalRatings: Math.floor(Math.random() * 3000 + 50),
      unitsSold: Math.floor(Math.random() * 20000 + 50),
      stock: Math.floor(Math.random() * 1000),
      price: Math.floor(Math.random() * 1000 + 299),
      mrp: Math.floor(Math.random() * 1500 + 499),
      currency: "Rupee",
      metadata: {
        type: "cover",
        material: "polycarbonate"
      }
    });

    addProduct(product);
    indexProduct(product);
    productId++;
  }

  console.log("Bootstrap completed");
}

module.exports = { loadProducts };
