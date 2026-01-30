
function rankProducts(products, intent) {
  return products
    .map(product => {
      let score = 0;

      score += product.rating * Math.log(product.totalRatings + 1);
      score += Math.log(product.unitsSold + 1);

      if (product.stock === 0) score -= 100;

      if (intent.price === "low") {
        score += 10000 / product.price;
      }

      if (intent.latest && product.title.includes("17")) {
        score += 20;
      }

      return { score, product };
    })
    .sort((a, b) => b.score - a.score)
    .map(item => item.product);
}

module.exports = rankProducts;
